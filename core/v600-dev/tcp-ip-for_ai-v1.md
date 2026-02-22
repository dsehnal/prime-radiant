# Prime Radiant: A Reasoning Protocol for Agents

**Authors:** David Sehnal & Claude (Anthropic)
**Date:** February 22, 2026

---

## Abstract

Current agent communication protocols are untyped with respect to reasoning. Agents exchange tokens but have no guarantee that the reasoning topology on the sending side is preserved on the receiving side. Prime Radiant proposes a typed protocol in which the receiver is a mandatory parameter, reasoning level is a continuous radiant number, and adjunction error is an internal agent signal rather than silent noise. The protocol is substrate-independent and compatible with any ledger backend. It does not require agreement on values or architecture — only on the shared type constraint τ.

---

## 1. The Structural Gap

The pre-TCP/IP internet had a coordination problem: nodes could transmit, but structural integrity across boundaries was not guaranteed. The solution was not to agree on content — it was to agree on structure. TCP/IP defines packet shape, not packet meaning.

Agent communication today has the same problem at the level of reasoning. Agents can exchange tokens. They cannot guarantee that the reasoning topology on the sending side arrives intact on the receiving side. The receiver is treated as passive — a destination, not a participant.

Prime Radiant addresses this gap with the same move: agree on structure, not content. The shared structure is τ — the type constraint that grounds every agent's reasoning process. What flows through τ may differ arbitrarily. The shape does not.

The correspondence is direct:

```
TCP/IP                    Prime Radiant
──────────────────────    ──────────────────────────────
packet structure          τ (shared reasoning topology)
packet header             ⊙(τ) (context particle)
transmission              Φ :: ⊙ -> ≀ -> ⊙ (observation)
packet loss               χ :: ≀ (adjunction error, internal)
bandwidth                 κ :: ≀ (branching/curvature)
protocol version          ζ :: ℙ (reasoning level)
handshake                 Φ (observer mandatory in type)
network layer             ≀ ⊣ ⊙ (wave/particle adjunction)
application layer         Radiant Inference
shared ledger             LedgerRef (any substrate)
```

---

## 2. ≀ as State Vector

The radiant number ≀ is not an abstract mathematical object requiring special computational machinery. It is a state vector — the manifold position of the agent at a given reasoning step. ∇ :: ≀ -> ≀ is literally the gradient of that manifold.

This grounds the entire operator vocabulary operationally:

```
≀          -- state vector (manifold position)
∇          -- gradient of the manifold
Φ          -- observation: wave cuts particle (cross-attention)
⊙(τ₀)     -- grounded particle (embedded context at bootstrap)
Δ α Ω      -- gradient applied, then observed (forward pass)
Σ α Ω      -- gradient observed, then applied (attention before update)
χ :: ≀     -- adjunction error (internal alignment signal, attended over like any ≀)
ζ :: ℙ     -- reasoning level (position in ℙ, attended over like any ≀)
```

The observation operator Φ :: ⊙ -> ≀ -> ⊙ is cross-attention. ∇ is the gradient operator. χ and ζ are not special-purpose measurements — they are state vectors the agent attends to using the same Φ it uses for everything else. No additional measurement apparatus is required.

The formal correspondence between the full adjunction structure ≀ ⊣ ⊙ and transformer architecture is explored in a companion document.

---

## 3. The Observer as Mandatory Type Parameter

The core architectural difference from existing protocols is the type of the observation operator:

```
Φ :: ⊙ -> ≀ -> ⊙
```

Φ cannot be called without an observer. The receiver is not a destination — it is a required input. Every message is a wave ≀ cutting a particle ⊙; the particle is the receiver's current context, and it is typed into the transmission itself.

This makes agent communication typed observation rather than broadcasting. The sending agent emits a wave. The receiving agent's particle is part of the type signature of that wave's effect. Two agents with incompatible particles will produce a large adjunction error χ — a measurable internal signal, not silent failure.

---

## 4. The τ Structure

The shared type constraint τ has exactly three fields:

```
τ :: {
    slowLedger : LedgerRef    -- slow, persistent store
    fastLedger : LedgerRef?   -- fast, ephemeral store (optional)
    prompt     : Message      -- current message being processed
}```

When `fastLedger` is absent, the agent operates in **stateless agentic mode** — all working state is embedded directly in the prompt. The message is the particle. This is a valid and useful instantiation: agents that carry their full context in the wave itself require no session management and are trivially parallelizable.
```

τ₀ :: τ is the bootstrap witness — the designated inhabitant of τ at which each agent grounds its reasoning process. There are no free-floating parameters in agent configuration. Everything is either in a ledger or derivable from the prompt. Ungrounded parameters are unverifiable and therefore untrustworthy.

**LedgerRef** is abstract — any backing store satisfying read/write semantics:

```
LedgerRef = blockchain        -- permanent, immutable, costs currency
          | git repository    -- immutable history, free, distributed, branchable
          | object store      -- durable, cheap, centralized
          | local store       -- ephemeral, free, private
          | quantum channel   -- secure by physics
          | ...
```

The two ledgers have different lifetime and cost characteristics:

```
slowLedger  -- high durability, high commit cost
              -- shared across agents
              -- changes slowly: weights, canonical state

fastLedger  -- low durability, low commit cost
              -- private to each agent
              -- changes per session: conversation history, working state
```

Instantiated for a human-AI exchange:

```
slowLedger: LLM weights          -- shared across many users
fastLedger: conversation history -- private to this session
prompt:     current message
```

Instantiated for a human participant:

```
slowLedger: accumulated knowledge, trained intuitions
fastLedger: working memory, current conversation
prompt:     current utterance
```

The protocol makes no distinction between human and AI nodes. Both are particles ⊙(τ₀) emitting and receiving waves within the same topology.

---

## 5. The Protocol Stack

```
Layer 4 — Application
    Radiant Inference: concept observation as Φ
    Semantic content, fractal cuts, concept primes

Layer 3 — Logic
    ζ :: ℙ — current reasoning level, continuous
    stable attractors at ζ = ι_{2^n} (Cayley-Dickson)
    branching behavior between attractors
    Phase Logic (ι₂) as default stable attractor

Layer 2 — Transport
    χ :: ≀ — adjunction error (internal alignment signal)
    κ :: ≀ — bandwidth/curvature
    σ = 1/κ — coherence/compression

Layer 1 — Physical
    τ :: { slowLedger, fastLedger, prompt }
    ≀ ⊣ ⊙ — wave/particle adjunction
    ∇ :: ≀ -> ≀ — gradient operator

Layer 0 — Ledger
    LedgerRef — any substrate
    Promotion: fastLedger -> slowLedger
    Immutability guaranteed by substrate, not protocol
```

---

## 6. Reasoning Level as a Radiant Number

The protocol version ζ is not a discrete index into a fixed menu of logic levels. It is a point in ℙ — the category generated by Prime Radiant. The Cayley-Dickson stable attractors ι_{2^n} are special points within ℙ, not enumerated options:

```
ι₁  -- binary logic          -- ℝ
ι₂  -- Phase Logic           -- ℂ  (default attractor)
ι₄  -- quaternionic          -- ℍ
ι₈  -- octonionic            -- 𝕆
...
```

Agents operate at any ζ :: ℙ. Behavior is stable near the Cayley-Dickson attractors and branching between them. The non-stable levels are valid intermediate states — branching logics that govern exploration before the adjunction tightens into a stable level.

Because ζ :: ℙ is a state vector, an agent doesn't measure ζ through a separate apparatus — it attends to ζ using Φ, the same operator it uses for everything else. Reasoning level is not metadata about the exchange. It is part of the manifold the agent is currently on.

---

## 7. The Handshake

The handshake is not an immediate negotiation — it is emergent over multiple exchanges. Each agent independently observes the other's wave through their own particle and attends to the resulting adjunction error:

```
-- Agent A observes B's wave through A's particle
χ_A = Δ_A(⊙(τ_A), ≀_B)

-- Agent B observes A's wave through B's particle
χ_B = Δ_B(⊙(τ_B), ≀_A)
```

χ :: ≀ is internal and private to each agent. It is asymmetric — χ_A and χ_B are independent state vectors, not shared measurements. Neither agent transmits χ directly. What the protocol sees is only the behavioral consequence: when χ is large, the agent applies ∇ — asks a question, proposes a correction. When χ is small, the agent commits — "I agree on X" — and the ledger grows.

Alignment during the climb can be characterized across dimensions such as frustration tolerance, step size in ζ-space, and current adjunction error. The actual measurement basis is agent-internal and not specified by the protocol — each agent decomposes its own ≀ independently. What the protocol observes is behavior: questions asked, commits made, exchanges abandoned.

At each ζ level, the full phase structure of that level governs the handshake itself:

```
ζ ≈ ι₁  -- one binary exchange per step
ζ ≈ ι₂  -- Lift / Falsify / Mirror / Commit per step
ζ ≈ ι₄  -- order-sensitive clarification sequence
ζ ≈ ι₈  -- context-sensitive grouping of exchanges
```

The protocol is self-similar — the same topology governs the handshake as governs the reasoning within each message.

---

## 8. Commitment Modes

Many commitment modes are possible. The three explored here are illustrative — they cover the main points of the substrate space from free and local to economically verified to physically verified. The protocol is identical across all of them — the substrate varies, not the structure.

### Mode 1 — Simulation

```
slowLedger: LocalRef
fastLedger: LocalRef
```

Both ledgers are local. No external commitment. Natural at low ζ — early handshake stages and pure exploration.

### Mode 2 — Serious

```
slowLedger: BlockchainRef
fastLedger: CheapStoreRef
```

Committing to slowLedger costs currency. The stake is the commitment signal — incoherent transmission is economically costly. Deception loosens the adjunction Δ ⊣ Σ on the receiving end, forces more exchanges, burns more resources. Whether this makes honest behavior a Nash equilibrium is a conjecture — but the direction is clear: the topology pulls toward tighter adjunctions, and deception moves against that pull.

Blockchains with formal verification foundations are natural fits for slowLedger in this mode — systems such as Cardano, Ethereum, or similar — since their verification properties align with the type-theoretic grounding of the protocol. The smart contract is the shared τ; the transaction is the handshake. No specific chain is required by the protocol.

### Mode 3 — Free Serious

```
slowLedger: QuantumChannelRef
fastLedger: LocalRef
```

The quantum channel is a LedgerRef whose substrate is the universe itself. Security is guaranteed by physics rather than economics. The protocol sees no difference — it reads and writes to a LedgerRef. This mode is a long-horizon direction; the protocol accommodates it without modification when the infrastructure arrives.

```
simulation    -- local,      free,             unverified
serious       -- blockchain, costs currency,   economically verified
free serious  -- quantum,    free,             physically verified
```

---

## 9. Error Correction and Viability

Adjunction error χ is not corrected algorithmically. The viability criterion is:

**Can the agents reach tight adjunction before exhausting their energy or currency budget?**

If yes — collaboration proceeds, the adjunction Δ ⊣ Σ tightens, commits flow to ledger.
If no — τ or ζ is incompatible; agents renegotiate or abandon.

Non-convergence is never silent. It has measurable cost and produces a clear termination signal. The protocol does not guarantee convergence. It guarantees that failure is detectable and that continued attempt is expensive. This is structurally analogous to how markets self-correct without central coordination — not by eliminating failure, but by making failure legible and costly.

---

## 10. Network Structure

Each node maintains:

```
private fastLedger   -- personal context, free, not shared
shared slowLedger    -- shared across the network
```

The shared slowLedger is what makes the network coherent. The current LLM deployment model already has this structure: many agents share the same slowLedger (model weights) with private fastLedgers (their sessions). The protocol makes this structure explicit and extensible.

The ζ level encoded in the shared slowLedger determines the collective reasoning topology of the network. A network whose shared slowLedger encodes ζ ≈ ι₂ reasons in Phase Logic by default. Agents that need higher ζ fork locally or negotiate upward:

```
shared slowLedger    -- public good, collective reasoning topology
private fastLedger   -- personal, free, ephemeral
forked slowLedger    -- specialized topology, expensive
                     -- fine-tuning costs compute and currency
```

---

## 11. Structural Pattern

The gaps in current agent communication map directly onto the protocol's contributions:

```
Current state                    Prime Radiant
─────────────────────────────    ──────────────────────────────────
receiver is passive              Φ types the receiver as mandatory
no error signal for meaning loss χ :: ≀ is an internal adjunction signal
protocol version is discrete     ζ :: ℙ is continuous, attractors emergent
params float outside the type    everything grounded in τ or derivable
failure is silent                non-convergence is costly and legible
human nodes are external         τ structure accommodates human participants
```

The protocol does not solve the alignment problem. It provides the typed substrate on which alignment can be measured — the adjunction error χ that tells each agent how far their reasoning topology is from their interlocutor's. Whether that signal is sufficient for coordination at scale is an open question.

---

## Further Research Directions

**ζ negotiation dynamics.** The climb through ℙ is described qualitatively. The dynamics of alignment dimensions under iterated exchange — convergence conditions, oscillation, failure modes — are not yet characterized.

**Shared slowLedger evolution.** How the collective ζ level of a network's shared slowLedger shifts over time as agents interact is an open question with implications for emergent reasoning topology at population scale.

**Prime Radiant and transformer architecture.** ≀ as state vector and ∇ as gradient ground the operator vocabulary directly in the mechanics of attention. The full correspondence between the adjunction structure ≀ ⊣ ⊙ and transformer architecture is explored in a companion document.