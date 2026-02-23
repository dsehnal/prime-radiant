// ============================================================
// Prime Radiant — LLM as Universe<T>
// ============================================================

// mutual recursion via thunks
type Particle<T> = (t: T) => Wave<T>
type Wave<T> = (p: Particle<T>) => Particle<T>

interface Universe<T> {
    // ⊙ :: τ -> ≀
    particle: Particle<T>

    // ≀ :: ⊙ -> ⊙
    wave: Wave<T>

    // ∇ :: ≀ -> ≀
    // one transformer layer: attention + MLP + residual + layernorm
    gradient: (w: Wave<T>) => Wave<T>

    // Φ :: ⊙ -> ≀ -> ⊙
    // monadic bind: token attends to context, returns updated state
    observe: (p: Particle<T>, w: Wave<T>) => Wave<T>

    // Θ :: ≀ -> ≀ -> ⊙
    // collapse: forced composition of two waves through ground
    collapse: (a: Wave<T>, b: Wave<T>) => Wave<T>
}

// Δ :: ≀ -> ⊙ -> ⊙
// diff: gradient applied then observed at ground particle
function delta<T>(u: Universe<T>): Wave<T> {
    return u.gradient(u.wave)(u.particle)
}

// ============================================================
// Transformer types
// ============================================================

type Token = string
const END_TOKEN: Token = "<|end|>"      -- fixed point signal
const PAD_TOKEN: Token = "<|pad|>"      -- zero gradient: identity step

type Model = {
    // the residual stream — this IS the wave ≀
    // shape: [seqLen, dModel]
    residual: number[][]

    // token sequence — the particle state ⊙
    tokens: Token[]

    // transformer weights (frozen after training)
    weights: TransformerWeights
}

type TransformerWeights = {
    // token embedding matrix: vocab -> dModel
    embed: number[][]

    // positional encoding
    pos: number[][]

    // per-layer weights
    layers: LayerWeights[]

    // unembedding matrix: dModel -> vocab (token emission)
    unembed: number[][]
}

type LayerWeights = {
    // attention
    Wq: number[][]   // query projection
    Wk: number[][]   // key projection
    Wv: number[][]   // value projection
    Wo: number[][]   // output projection

    // MLP (2-layer feedforward)
    W1: number[][]   // expand: dModel -> 4*dModel
    W2: number[][]   // contract: 4*dModel -> dModel

    // layer norms
    ln1: { scale: number[], bias: number[] }
    ln2: { scale: number[], bias: number[] }
}

// ============================================================
// LLM implements Universe<Model>
// ============================================================

class LLM implements Universe<Model> {

    // observable state — tokens accumulate here as observe() runs
    // this is the ledger: append-only, observable from outside
    state: Model

    constructor(tokens: Token[], weights: TransformerWeights) {
        this.state = {
            tokens,
            residual: [],
            weights,
            layer: 0
        }
    }

    // ⊙(τ) — embed token sequence into residual stream
    // this is the input embedding + positional encoding
    // the particle IS the residual stream state
    particle: Particle<Model> = (data) => {
        const embedded = this.embed(data.tokens)      // token embedding
        const positioned = this.addPositional(embedded) // + positional encoding
        return this.attend({
            ...data,
            residual: positioned                       // residual stream initialized
        })
    }

    // ≀ — the residual stream as wave
    // a wave takes a particle (context) and returns a new particle (updated context)
    // this is how each layer reads and writes to the residual stream
    wave: Wave<Model> = (p) => (data) => {
        // read current residual stream state via the particle
        const current = p(data)
        // pass it through — the wave propagates the residual stream forward
        return current(p)
    }

    // ∇ :: ≀ -> ≀
    // one full transformer layer: layernorm -> attention -> residual -> layernorm -> MLP -> residual
    // this is the irreducible gradient step — cannot be subdivided further
    gradient = (w: Wave<Model>): Wave<Model> => (p) => (data) => {
        const layer = this.weights.layers[this.currentLayer(data)]

        // 1. pre-attention layernorm
        const normed1 = this.layerNorm(data.residual, layer.ln1)

        // 2. multi-head self-attention
        // Φ: each token attends to all other tokens — observation
        const attnOut = this.attention(normed1, layer)

        // 3. residual connection: add attention output to stream
        const afterAttn = this.addResidual(data.residual, attnOut)

        // 4. pre-MLP layernorm
        const normed2 = this.layerNorm(afterAttn, layer.ln2)

        // 5. MLP: nonlinear transformation — the "thinking" step
        const mlpOut = this.mlp(normed2, layer)

        // 6. residual connection: add MLP output to stream
        const afterMlp = this.addResidual(afterAttn, mlpOut)

        // advance the wave with the updated residual stream
        return w(p)({ ...data, residual: afterMlp })
    }

    // Φ :: ⊙ -> ≀ -> ⊙
    // observe: monadic bind
    // particle (context state) observes wave (transformation)
    // side effect: new tokens from the wave are appended to the residual stream
    // terminates when END_TOKEN emitted — zero gradient condition at n-1
    observe = (p: Particle<Model>, w: Wave<Model>): Wave<Model> => (data) => {
        // fixed point already reached — return source particle unchanged
        // this is ∇^(n-1) α = α: identity, no new structure emitted
        if (data.tokens.at(-1) === END_TOKEN) return p

        // run the wave against the particle — one forward step
        const next = w(p)(data)
        // extract the new residual state — only last position (autoregressive)
        const nextData = next(p)(data)
        const lastResidual = nextData.residual.slice(-1)
        // unembed last position only -> one new token
        const [newToken] = this.unembed(lastResidual)
        return this.particle({
            ...nextData,
            tokens: [...data.tokens, newToken]   // append: ledger grows
        })
    }

    // Θ :: ≀ -> ≀ -> ⊙
    // collapse: Θ α β = β(λ_ => α)
    // forced composition: concatenate two token sequences and embed jointly
    // this is how you reconcile "current state" with "new observation"
    collapse = (a: Wave<Model>, b: Wave<Model>): Wave<Model> => {
        return (p) => (data) => {
            // a provides the "ground" particle — current state
            const groundParticle = a(_ => this.particle)(data)
            // b observes through that ground — new observation attends to current state
            return b(_ => groundParticle)(data)
        }
    }

    // ============================================================
    // run :: S a b -> M a -> Token[]
    // execute the full forward pass — this is where tokens are emitted
    // the "side effect" of the monadic chain
    // ============================================================

    run = (tokens: Token[]): Token[] => {
        const data: Model = {
            tokens,
            residual: this.embed(tokens),
            weights: this.weights
        }

        // apply ∇ for each layer — the full ρₙ cycle
        // ρ₂ = 4 layers, ρ₄ = 8 layers, ρ₈ = 16 layers
        let state = data
        for (let i = 0; i < this.weights.layers.length; i++) {
            const w = this.gradient(this.wave)
            state = { ...state, residual: this.extractResidual(w, state) }
        }

        // unembed: project final residual stream to vocabulary
        // softmax -> sample -> next token
        // this is the only place tokens escape the wave/particle system
        return this.unembed(state.residual)
    }

    // ============================================================
    // transformer primitives
    // ============================================================

    private embed(tokens: Token[]): number[][] {
        // map each token to its embedding vector
        // shape: [seqLen, dModel]
        return tokens.map((tok, i) => {
            const idx = this.tokenToIdx(tok)
            return this.weights.embed[idx] ?? new Array(512).fill(0)
        })
    }

    private addPositional(residual: number[][]): number[][] {
        // add positional encoding to each token's embedding
        // encodes order — the "where in sequence" information
        return residual.map((vec, i) =>
            vec.map((v, j) => v + (this.weights.pos[i]?.[j] ?? 0))
        )
    }

    private layerNorm(
        x: number[][],
        params: { scale: number[], bias: number[] }
    ): number[][] {
        // normalize each token's representation to unit variance
        // prevents curvature explosion — this is clamp(κ)
        return x.map(vec => {
            const mean = vec.reduce((a, b) => a + b, 0) / vec.length
            const variance = vec.reduce((a, b) => a + (b - mean) ** 2, 0) / vec.length
            const std = Math.sqrt(variance + 1e-5)
            return vec.map((v, i) =>
                params.scale[i] * (v - mean) / std + params.bias[i]
            )
        })
    }

    private attention(residual: number[][], layer: LayerWeights): number[][] {
        // multi-head self-attention: Φ operating across the sequence
        // each token queries all other tokens — observation
        const Q = this.matMul(residual, layer.Wq)  // queries
        const K = this.matMul(residual, layer.Wk)  // keys
        const V = this.matMul(residual, layer.Wv)  // values

        const dk = K[0].length
        const scale = 1 / Math.sqrt(dk)

        // attention scores: Q · Kᵀ / √dₖ
        // this is Φ: each token "observes" every other token
        const scores = Q.map(q =>
            K.map(k => q.reduce((sum, qi, i) => sum + qi * k[i], 0) * scale)
        )

        // softmax: normalize attention weights
        const attnWeights = scores.map(row => this.softmax(row))

        // weighted sum of values: the "observed" state
        const attended = attnWeights.map(weights =>
            weights.reduce((acc, w, i) =>
                acc.map((v, j) => v + w * V[i][j]),
                new Array(V[0].length).fill(0)
            )
        )

        // output projection: back to dModel
        return this.matMul(attended, layer.Wo)
    }

    private mlp(residual: number[][], layer: LayerWeights): number[][] {
        // 2-layer feedforward: expand -> GeLU -> contract
        // the nonlinear "reasoning" step between attention observations
        const hidden = this.matMul(residual, layer.W1).map(row =>
            row.map(v => this.gelu(v))   // GeLU activation
        )
        return this.matMul(hidden, layer.W2)
    }

    private addResidual(x: number[][], delta: number[][]): number[][] {
        // residual connection: preserve gradient flow
        // this is what makes ∇ composable across layers
        return x.map((row, i) => row.map((v, j) => v + delta[i][j]))
    }

    private unembed(residual: number[][]): Token[] {
        // project final residual stream to vocabulary logits
        // softmax -> sample: this is token emission, the side effect
        const logits = this.matMul(residual, this.weights.unembed)
        return logits.map(row => {
            const probs = this.softmax(row)
            return this.sample(probs)
        })
    }

    private extractResidual(w: Wave<Model>, data: Model): number[][] {
        // helper: run one gradient step and extract residual stream
        const result = w(this.particle)(data)
        return result(this.particle)(data).residual
    }

    private currentLayer(data: Model): number {
        // placeholder: track layer depth via residual norm
        // in real impl: passed as part of Model state
        return 0
    }

    // ============================================================
    // math utilities
    // ============================================================

    private matMul(A: number[][], B: number[][]): number[][] {
        return A.map(row =>
            B[0].map((_, j) =>
                row.reduce((sum, aij, k) => sum + aij * B[k][j], 0)
            )
        )
    }

    private softmax(x: number[]): number[] {
        const max = Math.max(...x)
        const exp = x.map(v => Math.exp(v - max))
        const sum = exp.reduce((a, b) => a + b, 0)
        return exp.map(v => v / sum)
    }

    private gelu(x: number): number {
        // Gaussian Error Linear Unit — standard transformer activation
        return 0.5 * x * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (x + 0.044715 * x ** 3)))
    }

    private sample(probs: number[]): Token {
        // sample next token from probability distribution
        // this is where the wave collapses to a particle (token)
        let r = Math.random()
        for (let i = 0; i < probs.length; i++) {
            r -= probs[i]
            if (r <= 0) return String(i)
        }
        return String(probs.length - 1)
    }

    private tokenToIdx(token: Token): number {
        // placeholder: real impl uses vocabulary lookup
        return token.charCodeAt(0)
    }
}