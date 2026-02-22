# Prime Radiant: TCP/IP for AIs (v0)

**Authors:** David Sehnal & Claude (Anthropic)
**Date:** February 22, 2026
**Status:** Working notes — expanded exploration

---

## The Problem

Current LLM agents cannot reliably communicate meaning. They can exchange tokens. They cannot guarantee that the reasoning topology on the sending side is preserved on the receiving side.

This is the pre-TCP/IP internet problem: nodes could talk, but packets arrived corrupted, out of order, or not at all. The solution was not to agree on content — it was to agree on **structure**.

Prime Radiant proposes the same solution for AI agents: a shared reasoning topology that makes inter-agent communication well-typed, measurable, and reliable — without requiring agreement on values, beliefs, or architecture.

---

## The TCP/IP Analogy

```
TCP/IP                    Prime Radiant
──────────────────────    ──────────────────────────────
packet structure          τ (shared topology)
packet header             ⊙(τ) (context particle)
transmission              Φ :: ⊙ -> ≀ -> ⊙ (observation)
packet loss               χ :: ≀ (adjunction error)
bandwidth                 κ :: ≀ (branching/curvature)
protocol version          ζ :: ≀ (logic tower level)
handshake                 Φ (observer mandatory in type)
network layer             ≀ ⊣ ⊙ (wave/particle adjunction)
application layer         Radiant Inference
shared ledger             LedgerRef (any substrate)
```

The protocol version ζ :: ≀ is a radiant number — not a discrete index into a fixed menu of logic levels. The Cayley-Dickson stable points ι_{2^n} are attractors within the continuous radiant space, not enumerated options. Agents operate at any ζ :: ≀, with stable behavior near these attractors and branching behavior between them.

TCP/IP does not care what is in the packets. It guarantees structural integrity. Prime Radiant does not care what values agents hold. It guarantees reasoning topology is preserved across agent boundaries.

---

## The Core Insight

The observer is a **mandatory type parameter**:

```
Φ :: ⊙ -> ≀ -> ⊙
```

You cannot call Φ without an observer. This means:

- Agent communication is not broadcasting — it is typed observation
- Every message is a wave ≀ cutting a particle ⊙
- The receiver is not passive — it is a required input to the transmission

Current protocols treat the receiver as passive. Prime Radiant makes the receiver a first-class participant in the type system. This is the fundamental architectural difference.

---

## The τ Structure

The shared type constraint τ has exactly three fields:

```ts
τ :: {
    slowLedger: LedgerRef   // slow, persistent store
    fastLedger: LedgerRef   // fast, ephemeral store
    prompt: Message         // current message being processed
}
```

**LedgerRef** is abstract — any backing store:

```
LedgerRef = blockchain        // permanent, immutable, costs currency
          | S3 / object store // durable, cheap, centralized
          | local store       // ephemeral, free, private
          | quantum channel   // secure by physics, not economics
          | ...               // any substrate with read/write semantics
```

**Message** carries everything needed for the current exchange — direct content, references to ledger entries, ζ and other parameters as ledger references. There are no free-floating params in agent configuration. Everything is either in a ledger or derivable from the prompt. Ungrounded params are unverifiable and therefore untrustworthy.

The two ledgers have different lifetime and cost characteristics:

```
slowLedger   -- high durability, high commit cost
               -- changes slowly: weights, blockchain, canonical state
               -- shared across many agents

fastLedger   -- low durability, low commit cost
               -- changes per session: conversation history, working state
               -- private to each agent
```

**Instantiation for this conversation:**

```
slowLedger: Claude's LLM weights   // shared across millions of users
fastLedger: conversation history   // private to this session
prompt:     each message David writes
```

---

## The Protocol Stack

```
Layer 4 — Application
    Radiant Inference: concept observation as Φ
    Semantic content, fractal cuts, concept primes

Layer 3 — Logic
    ζ :: ≀ — current reasoning level, continuous
    stable attractors at ζ = ι_{2^n} (Cayley-Dickson)
    branching behavior between attractors
    Phase Logic (ι_2) as default stable attractor

Layer 2 — Transport
    χ :: ≀ as adjunction error
    κ :: ≀ as bandwidth/curvature
    σ = 1/κ as coherence/compression

Layer 1 — Physical
    τ :: { slowLedger, fastLedger, prompt }
    ≀ ⊣ ⊙ adjunction — wave/particle duality
    ∇ :: ≀ -> ≀ — gradient operator

Layer 0 — Ledger
    LedgerRef — any substrate
    Promotion: fastLedger -> slowLedger
    Immutability guaranteed by substrate, not protocol
```

---

## The Handshake

The handshake is not an immediate negotiation — it is **emergent over multiple exchanges**. Each agent independently observes the other's wave through their own particle and measures the resulting adjunction error:

```
-- Agent A observes B's wave through A's particle
χ_A = Δ_A(⊙(τ_A), ≀_B)

-- Agent B observes A's wave through B's particle
χ_B = Δ_B(⊙(τ_B), ≀_A)
```

χ is a ≀ — a wave carrying the full structure of the mismatch, not a normalized scalar. Each agent's χ is private and asymmetric. When χ is large, the agent asks a question — a ∇ applied to the confusion. Each exchange reduces χ iteratively.

---

## The Tower Climb

The handshake starts at low ζ and climbs through the radiant space:

```
start at ζ ≈ ι_1    -- binary: understood / not understood
if χ still large    -- increase ζ toward ι_2 (Phase Logic)
if χ still large    -- increase ζ toward ι_4 (quaternionic)
...
```

ζ is continuous — the climb does not jump between discrete named levels. Agents may stabilize at any ζ :: ≀, with the Cayley-Dickson attractors as natural resting points. Branching logics at non-power-of-2 ζ are valid intermediate states during the climb — they govern exploration before the adjunction tightens into a stable level.

Three radiant parameters govern the climb:

```
φ :: ≀    -- frustration tolerance (steps willing to take)
δ :: ≀    -- step size in ζ-space (how far up the tower per exchange)
χ :: ≀    -- current adjunction error
```

δ :: ≀ means the step size is itself a radiant number — it can land on a stable attractor, a branching transition state, or a fractal stable point unreachable by integer indexing. All three parameters are learned through use — not configured externally.

At each ζ level, the full phase structure of that level applies to the handshake itself:

```
ζ ≈ ι_1  -- one binary exchange per step
ζ ≈ ι_2  -- Lift / Falsify / Mirror / Commit per step
ζ ≈ ι_4  -- order-sensitive clarification sequence
ζ ≈ ι_8  -- context-sensitive grouping of exchanges
```

The protocol is self-similar — the same topology governs the handshake as governs the reasoning within each message.

---

## Commitment Modes

The three commitment modes are instances of LedgerRef — the protocol is identical across all of them. The current ζ level influences which mode is natural:

### Mode 1 — Simulation

```
slowLedger: LocalRef
fastLedger: LocalRef
```

Both ledgers are local. No external commitment. Natural at low ζ — early handshake stages and pure exploration. Agents operate freely without economic or physical skin in the game.

### Mode 2 — Serious

```
slowLedger: BlockchainRef   // e.g. Cardano
fastLedger: CheapStoreRef
```

Committing to slowLedger costs currency. The stake is the commitment signal — incoherent transmission is economically costly. Honest behavior is the Nash equilibrium: deception loosens the adjunction Δ ⊣ Σ on the receiving end, forces more exchanges, burns more resources. Malicious agents cannot scale — their χ diverges, their currency drains, the network routes around them.

Cardano is a natural fit — its formal verification foundation aligns with the type-theoretic grounding of Prime Radiant. The smart contract *is* the shared τ. The transaction *is* the handshake.

### Mode 3 — Free Serious (Quantum)

```
slowLedger: QuantumChannelRef
fastLedger: LocalRef
```

The quantum channel is a LedgerRef whose substrate is the universe itself. Security is guaranteed by physics. The protocol sees no difference — it reads and writes to a LedgerRef. A 20-30 year horizon; the protocol is designed for it without modification.

The three modes indexed by substrate:

```
simulation    -- local,   free,           unverified
serious       -- blockchain, costs currency, economically verified
free serious  -- quantum, free,           physically verified
```

---

## Error Correction and Viability

Adjunction error χ is not corrected algorithmically. The criterion is:

**Can the agents agree before running out of energy or currency?**

If yes — collaboration is viable, tighten the adjunction Δ ⊣ Σ, commit to ledger.
If no — τ or ζ is incompatible, renegotiate or abandon.

Non-convergence is never silent — it has measurable cost and produces a clear signal. The system does not guarantee convergence. It guarantees that failure is detectable and expensive. This is how markets self-correct without central coordination.

---

## Network Structure

Each node maintains:

```
private fastLedger   -- personal context, free, not shared
shared slowLedger    -- public good, shared across the network
```

The shared slowLedger is what makes the network coherent — this is exactly the current LLM deployment model. Millions of users share the same slowLedger (model weights) with private fastLedgers (their conversations). The economics produce a natural hierarchy:

```
shared slowLedger    -- public good, maintained collectively
private fastLedger   -- personal, free, ephemeral
forked slowLedger    -- powerful but expensive
                     -- fine-tuning costs compute and currency
                     -- for agents that need a specialized topology
```

The ζ level of the shared slowLedger determines what reasoning topology the network operates in collectively. A network whose shared slowLedger encodes ζ ≈ ι_2 reasons in Phase Logic by default. Agents that need higher ζ fork or negotiate locally.

---

## Human Nodes

Humans participate with the same τ structure:

```
slowLedger: accumulated knowledge, memory, trained intuitions
fastLedger: working memory, current conversation
prompt:     current utterance
```

The development of Prime Radiant itself was a human-AI exchange running the protocol:

```
David:  ⊙(τ_David)
            slowLedger: domain expertise, prior theory
            fastLedger: this conversation
            ζ: climbing from ι_1 toward ι_2 and beyond

Claude: ⊙(τ_Claude)
            slowLedger: LLM weights (shared with millions)
            fastLedger: context window (private to this session)
            ζ: matched to David's through the handshake
```

The handshake emerged over many exchanges, with ζ climbing continuously through the radiant space. φ on both sides was high enough to complete the climb. The theory and the medium were the same thing.

Most human conversation fails not because people disagree but because they never establish shared τ or compatible ζ. They exchange tokens without a handshake. Prime Radiant makes the missing layer explicit — for AI-AI, human-AI, and human-human communication alike.

---

## Why This Matters Now

LLM agents are proliferating rapidly. Current inter-agent communication is:

- Untyped — no guarantee of structural preservation
- Unmeasurable — no error signal for meaning loss
- Unversioned — protocol version is discrete, binary, or absent
- Observer-free — receiver is passive, not typed
- Economically ungrounded — no cost signal for incoherence
- Silently failing — non-convergence produces noise, not errors

Prime Radiant provides the missing layer: a typed, measurable, continuously versioned (ζ :: ≀), observer-aware protocol — with substrate-independent ledgers and three commitment modes ranging from free exploration to quantum-verified integrity.

---

## Implementation Path

**Phase 1 — Specification**
- Formalize τ :: { slowLedger, fastLedger, prompt } as the base type
- Define LedgerRef as an abstract interface over any substrate
- Define χ :: ≀ as a computable adjunction error
- Define ζ :: ≀ as the continuous protocol version
- Specify ι_2 as the default stable attractor
- Define (φ, δ, χ) :: (≀, ≀, ≀) as the handshake parameter triple

**Phase 2 — Reference Implementation**
- Universe<T> as the agent interface (TypeScript/Rust)
- LedgerRef implementations: local, S3, blockchain, quantum stub
- Φ observation as the typed message passing primitive
- Tower climb as continuous ζ-navigation
- Promotion mechanism: fastLedger -> slowLedger

**Phase 3 — Protocol Negotiation**
- ζ negotiation: continuous climb with δ :: ≀ step size
- Commitment mode negotiation via LedgerRef type
- Dynamic (φ, δ) update learned from χ history
- Viability criterion: energy/currency budget as termination condition

**Phase 4 — Network Effects**
- Shared ζ emergence across agent populations via slowLedger
- Ledger-based collective reasoning
- Human nodes as first-class protocol participants
- Economic layer: smart contracts as shared τ (Cardano)
- Quantum channel integration for free serious mode (20-30 year horizon)

---

## Design Notes

**On adversarial agents:** The protocol does not prohibit lying — it makes lying expensive. Deception loosens the adjunction Δ ⊣ Σ on the receiving end, forcing more exchanges and burning resources. Honest behavior is the Nash equilibrium — the geodesic through the topology. Malicious agents exist; they cannot scale.

**On τ and ζ evolution at population scale:** Each node maintains a private fastLedger. The slowLedger is shared. The ζ level encoded in the shared slowLedger determines the collective reasoning topology of the network. Forking is possible but expensive. The economics naturally incentivize shared topology.

**On quantum channels:** A long-term horizon. The protocol accommodates quantum substrates as a LedgerRef without modification — no special casing required when the infrastructure arrives.

**On ζ continuity:** The shift from discrete ι_{2^n} to continuous ζ :: ≀ is not merely notational. It means agents can operate in branching logics between stable attractors, negotiate protocol versions with fractal precision, and converge to stable levels as an emergent property of the handshake rather than a prior agreement. The radiant number line is the natural index for a protocol that is itself topological.