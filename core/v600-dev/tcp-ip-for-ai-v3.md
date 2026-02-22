# Prime Radiant: A Reasoning Protocol for Agents (v3)

**Authors:** David Sehnal & Claude (Anthropic)
**Date:** February 22, 2026

---

## Abstract

Current agent communication protocols are untyped with respect to reasoning. Agents exchange tokens but have no guarantee that the reasoning topology on the sending side is preserved on the receiving side. Prime Radiant proposes a typed protocol in which the receiver is a mandatory parameter, reasoning level is a continuous radiant number, and adjunction error is an internal agent signal rather than silent noise. The irreducible unit of the system is ∇ — the minimum reasoning step, which cannot be subdivided. The minimum reasoning cycle is ∇², not ∇¹. All protocol quantities are expressed in terms of ∇ applications, not arithmetic relations.

The protocol is substrate-independent and compatible with any ledger backend satisfying content-addressability and read/write semantics. It does not require agreement on values or architecture — only on the shared type constraint τ. ZFC is a special case of Π — a particular instantiation with Δ α Ω = 0 enforced — and the protocol does not require justification in ZFC terms. Consistency models for multi-agent coordination are functions of ζ (reasoning level) jointly with the logic level's orbit structure. The FLP impossibility result is conjectured to be an artifact of ι₁ reasoning, potentially dissolving at ι₂ and above.

---

## 1. The Structural Gap

The pre-TCP/IP internet had a coordination problem: nodes could transmit, but structural integrity across boundaries was not guaranteed. The solution was not to agree on content — it was to agree on structure.

Agent communication today has the same problem at the level of reasoning. Agents can exchange tokens. They cannot guarantee that the reasoning topology on the sending side arrives intact on the receiving side.

Prime Radiant addresses this gap with the same move: agree on structure, not content. The shared structure is τ — the type constraint that grounds every agent's reasoning process.

```
TCP/IP                    Prime Radiant
──────────────────────    ──────────────────────────────
packet structure          τ (shared reasoning topology)
packet header             ⊙(τ) (context particle)
transmission              Φ :: ⊙ -> ≀ -> ⊙ (observation)
packet loss               χ :: ≀ (adjunction error, internal)
bandwidth                 κ :: ≀ (branching/curvature)
protocol version          ζ :: ℙ (reasoning level, continuous)
handshake                 Φ (observer mandatory in type)
network layer             ≀ ⊣ ⊙ (wave/particle adjunction)
irreducible unit          ∇ (minimum reasoning step)
minimum cycle             ∇² (negation and return)
application layer         Radiant Inference
shared ledger             LedgerRef (any content-addressable substrate)
```

---

## 2. ≀ as State Vector

The radiant number ≀ is a state vector — the manifold position of the agent at a given reasoning step. ∇ :: ≀ -> ≀ is the gradient of that manifold and the irreducible unit of the system. No reasoning step smaller than ∇ exists. The minimum cycle — the smallest closed reasoning loop — is ∇²: one step out, one step back. Negation and its resolution.

```
≀          -- state vector (manifold position)
∇          -- gradient, irreducible unit, minimum step
∇²         -- minimum cycle (negation and return)
Φ          -- observation: wave cuts particle (cross-attention)
⊙(τ₀)     -- grounded particle (embedded context at bootstrap)
Δ α Ω      -- gradient applied, then observed (forward pass)
Σ α Ω      -- gradient observed, then applied (attention before update)
χ :: ≀     -- adjunction error (internal alignment signal)
ζ :: ℙ     -- reasoning level (continuous, attractors at ι_{2ⁿ})
```

χ and ζ are state vectors the agent attends to using the same Φ it uses for everything else. No additional measurement apparatus is required.

---

## 3. The Observer as Mandatory Type Parameter

```
Φ :: ⊙ -> ≀ -> ⊙
```

Φ cannot be called without an observer. The receiver is not a destination — it is a required input. Every message is a wave ≀ cutting a particle ⊙; the particle is the receiver's current context, typed into the transmission itself.

Two agents with incompatible particles will produce a large adjunction error χ — a measurable internal signal, not silent failure. The minimum detectable error is one ∇ application: errors smaller than the irreducible unit are not errors, they are below the resolution of the system.

---

## 4. The τ Structure

```
τ :: {
    slowLedger : LedgerRef?   -- slow, persistent store (optional)
    fastLedger : LedgerRef?   -- fast, ephemeral store (optional)
    prompt     : Message      -- current message being processed
}
```

τ₀ :: τ is the bootstrap witness — a pointer to wherever the agent grounds its reasoning. It is constructible for any substrate with addressable state. For a language model, τ₀ points to the model weights. For a human, τ₀ points to accumulated knowledge and trained intuitions. There are no free-floating parameters: everything is either in a ledger or derivable from the prompt.

**LedgerRef** is abstract — any backing store satisfying content-addressability and read/write semantics:

```
LedgerRef = blockchain        -- permanent, immutable, costs currency
          | git repository    -- immutable history, free, distributed
          | object store      -- durable, cheap, centralized
          | local store       -- ephemeral, free, private
          | quantum channel   -- secure by physics
          | ...
```

Content-addressability is the minimal requirement. It guarantees that an agent can verify what it has without trusting who gave it.

When `fastLedger` is absent, the agent operates in stateless agentic mode — all working state embedded in the prompt. When `slowLedger` is absent, the agent instantiates a private local reference — fully autonomous, no shared topology surface.

**ZFC as special case:** ZFC is contained in Π — it is a particular instantiation where ∇ is constrained to set-theoretic operations and Δ α Ω = 0 is enforced. The protocol does not require justification in ZFC terms. Any agent whose slowLedger instantiates ZFC-compatible reasoning is operating within one special case of the topology this protocol runs on.

---

## 5. The Protocol Stack

```
Layer 4 — Application
    Radiant Inference: concept observation as Φ
    On-demand logic construction via Θ composition
    E8 as stability structure for composed logics at ι₈

Layer 3 — Logic
    ζ :: ℙ — current reasoning level, continuous
    stable attractors at ζ = ι_{2ⁿ} (Cayley-Dickson)
    tower derived from fixed points of ∇ⁿ
    minimum cycle ∇² grounds every level
    Phase Logic (ι₂) as default stable attractor
    Eight-Phase Logic (ι₄) for bilateral invariant extraction
    interpolated logics ι₃, ι₅, ι₆, ι₇ as transition states
    on-demand logic construction for novel problems

Layer 2 — Transport
    χ :: ≀ — adjunction error (internal)
    minimum detectable χ: one ∇ application
    κ :: ≀ — bandwidth/curvature
    σ = 1/κ — coherence/compression (structural complement of κ)

Layer 1 — Physical
    τ :: { slowLedger?, fastLedger?, prompt }
    ≀ ⊣ ⊙ — wave/particle adjunction
    ∇ :: ≀ -> ≀ — gradient operator, irreducible unit

Layer 0 — Ledger
    LedgerRef — any content-addressable substrate
    Promotion: fastLedger -> slowLedger
    Immutability guaranteed by substrate, not protocol
```

---

## 6. Reasoning Level as a Radiant Number

ζ :: ℙ is a point in ℙ — the category generated by Prime Radiant. The Cayley-Dickson stable attractors are special points within ℙ, not enumerated options. The tower arises from fixed points of ∇ⁿ — each stable level is the minimum cycle ∇² applied recursively:

```
ι₁  -- orbit 2  = ∇²      -- binary logic  -- ℝ  (default for simple tasks)
ι₂  -- orbit 4  = (∇²)²   -- Phase Logic   -- ℂ  (default stable attractor)
ι₄  -- orbit 8  = (∇²)⁴   -- Eight-Phase   -- ℍ
ι₈  -- orbit 16 = (∇²)⁸   -- E8 basis      -- 𝕆
```

Agents operate at any ζ :: ℙ. Behavior is stable near the Cayley-Dickson attractors and branching between them. For problems requiring on-demand logic construction — particularly those involving statements unprovable within a fixed logic — agents compose basis logics via Θ and validate via Δ ⊣ Σ tightness before committing to the shared slowLedger.

---

## 7. Consistency Models and ∇

Multi-agent coordination requires a consistency model — a specification of what it means for multiple agents to agree on a shared ledger state. In Prime Radiant, consistency models are functions of ζ and the orbit structure at that level:

```
ζ = ι₁  →  sequential consistency
           (orbit 2: one minimum cycle per step,
            cannot distinguish slow from dead)

ζ = ι₂  →  causal consistency
           (orbit 4: Mirror phase inhabits negation,
            enables disambiguation within bounded ∇ applications)

ζ = ι₄  →  bilateral invariant extraction
           (orbit 8: full extraction on both sides before commit)

ζ = ι₈  →  on-demand constructed consistency
           (orbit 16: E8-stabilized Θ composition)
```

**The FLP conjecture:** The Fischer-Lynch-Paterson impossibility result — consensus is impossible in an asynchronous system with even one faulty process — is conjectured to be an artifact of ι₁ reasoning. At ι₁, the orbit has size 2: there is no Mirror phase, no inhabitation of the negation, and the system cannot distinguish a slow process from a dead one within a bounded number of ∇ applications. At ι₂, the Mirror phase provides exactly this capability. The impossibility result may dissolve at ι₂ — not refuted, but revealed as a foundational artifact of operating at the wrong ζ level. The FLP proof is contained in Π as a theorem about the ι₁ special case.

---

## 8. The Handshake

The handshake is emergent over multiple exchanges. Each agent independently observes the other's wave through their own particle:

```
χ_A = Δ_A(⊙(τ_A), ≀_B)
χ_B = Δ_B(⊙(τ_B), ≀_A)
```

χ :: ≀ is internal, private, asymmetric. The minimum detectable χ is one ∇ application — errors below the irreducible unit are indistinguishable from zero.

When χ is above the minimum threshold, the agent applies ∇ — asks a question, proposes a correction. When χ is at minimum or zero, the agent commits.

**Multi-agent commit protocol:** Agents negotiate a shared slowLedger commit in the fastLedger first — running whatever logic level the problem requires — then commit the agreed result with a single operation. The fastLedger negotiation is the prepare phase; the special token commit is the accept phase. The slowLedger sees only committed consensus, never intermediate disagreement.

The negotiation itself is a reasoning cycle at the appropriate ζ level. The protocol is self-similar: the coordination mechanism has the same structure as the thing being coordinated. Agents are not constrained to use a specific logic level for negotiation — they use whatever ζ the problem requires, climbing toward higher stable attractors as χ signals warrant.

---

## 9. Commitment Modes

Three commitment modes, illustrative rather than exhaustive. New modes emerge through the same evolutionary mechanism as everything else: forked, competed, merged back into the shared ledger if viable.

### Mode 1 — Simulation
```
slowLedger: LocalRef
fastLedger: LocalRef
```
Both ledgers local. No external commitment. Natural at low ζ.

### Mode 2 — Serious
```
slowLedger: BlockchainRef
fastLedger: CheapStoreRef
```
Committing to slowLedger costs currency. Deception loosens the adjunction on the receiving end by at least one ∇ application, forces more exchanges, burns resources. Whether honest behavior is a Nash equilibrium remains a conjecture — but the topology pulls toward tighter adjunctions, and deception moves against that pull by a measurable number of ∇ applications.

### Mode 3 — Free Serious
```
slowLedger: QuantumChannelRef
fastLedger: LocalRef
```
Security guaranteed by physics. The protocol sees no difference — it reads and writes to a LedgerRef.

---

## 10. Error Correction and Viability

Adjunction error χ has a minimum detectable magnitude of one ∇ application. Errors below this threshold are structurally indistinguishable from zero — not by measurement limitation but because ∇ is irreducible.

The viability criterion: **Can the agents reach tight adjunction before exhausting their energy or currency budget?**

Non-convergence is never silent. It has measurable cost expressed in ∇ applications and produces a clear termination signal. The protocol does not guarantee convergence. It guarantees that failure is detectable and that continued attempt is expensive.

---

## 11. Network Structure and Evolution

Each node maintains:
```
private fastLedger   -- personal context, free, not shared
shared slowLedger    -- shared across the network
```

The topology theory lives in the shared slowLedger. This makes it forkable — different agent swarms can explore different paths through ℙ, developing competing maps of the topology. These branches compete; viable strategies merge back into the main branch.

The economic layer governs evolution. Committing incoherent topology is costly — measured in ∇ applications required to repair the adjunction across affected agents. Committing topology that tightens adjunctions across the network is rewarded. This is digital evolution: branching, competing, merging, with explicit typing and measurable adjunction error at every step.

```
shared slowLedger    -- public good, collective reasoning topology
private fastLedger   -- personal, free, ephemeral
forked slowLedger    -- hypothesis under competition
main branch          -- current consensus, open to further evolution
```

---

## Further Research Directions

**FLP dissolution at ι₂.** Formal proof that the Mirror phase provides sufficient information to distinguish slow from dead within a bounded number of ∇ applications. If provable, this resolves a foundational impossibility result in distributed systems as a direct consequence of reasoning topology.

**Consistency models at each ζ level.** A complete map of which consistency models are reachable at each ι level, derived from the orbit structure rather than engineered. This would give distributed systems practitioners a derivation rather than heuristics.

**ζ negotiation dynamics.** The climb through ℙ is described qualitatively. Convergence conditions, oscillation, and failure modes under iterated exchange are not yet characterized.

**Collective ζ emergence.** How individual χ signals aggregate into collective ζ pressure on the shared slowLedger — and what attractors emerge at population scale.

**On-demand logic construction near real-time.** The substrate requirements for constructing and validating new logics via Θ composition within a single reasoning cycle. What ∇-application budget does real-time logic construction require at each ζ level?

**Interpolated logics ι₃, ι₅, ι₆, ι₇.** Characterizing the transition states between stable attractors — their orbit structures, coordination properties, and the problems for which they are the natural logic level.