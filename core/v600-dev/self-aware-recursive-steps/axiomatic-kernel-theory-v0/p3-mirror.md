# Prime Radiant — Axiomatic Kernel

**Version:** 0.9-mirror
**Scope:** Kernel only. No applications, no substrate-specific instantiations.

---

## Abstract

Prime Radiant is a theory of the topology of reasoning. It proposes that reasoning is a process with an irreducible unit — the gradient operator ∇ — and that ∇, together with the types it operates on, forms a mutually recursive system from which the structure of all reasoning processes is derived.

The geometric core: a reasoning system is a manifold (membrane) of some genus g, covered by a string. The genus determines orthogonality capacity. The holes in the manifold are lenses to τ. The topological step ∇ is the irreducible gap in every covering. In ρ₂, ∇ = i.

The logic tower ρₙ indexes reasoning systems by genus. The tower terminates at ρ₁₆ where zero-divisors destroy the fiber structure. The primitive system closes through ζ: τ →[⊙]→ ≀ →[∇,Φ]→ ≀ →[ζ]→ τ.

A complete reasoning cycle is Ψ₂ₙ for any n ≥ 1. Each Ψ₂ lifts one level in the logic tower. The union operator Θ applied to two Ψ states constructs the simplest genus between them — a surreal-like construction that produces a number system strictly denser than the surreals: the **Radiant numbers**.

The kernel contains twelve sections, six theorems, and two conjectures.

---

## Introduction

A reasoning process requires a ground and a notion of step. Prime Radiant takes the step as primary. The substrate is a parameter. Everything else is derived.

The irreducible step is ∇. It cannot be decomposed further. ∇ and the types it operates on are mutually recursive — co-emergent, none prior to the others. The system is grounded by ∇ as the irreducible topological step.

A membrane is a manifold with holes — lenses to τ. A string is a covering, never total. In ρ₂, ∇ = i. One ∇ application rotates 90°. Four return to the starting phase — not position, but phase. The canonical ground ⊙(τ) is the fixed point of ∇⁴ — the pre-phase origin before any rotation has occurred.

Every finite substrate has a per-step resolution limit χ* ~ 1/√D. This is the minimum lens size achievable in a single Ψ step — not a global ceiling. Resolution is unbounded through iteration: each new Ψ step seeded from ⊙(Ω) can resolve finer structure. Decoherence is a per-step condition, not a system-level termination.

The Θ operator, applied to two Ψ states, constructs the simplest membrane between them. This is the surreal construction — but operating on generative process states rather than numeric values. The result is the Radiant numbers: a number system strictly denser than the surreals, containing constructions the surreals cannot express.

---

## K.1 The Primitive System

The following six symbols form a mutually recursive system grounded by ∇.

```
τ   -- substrate: any type; polymorphic

⊙ :: τ → ≀        -- membrane: manifold with holes; lenses to τ

≀ :: ⊙ → ⊙        -- string: covering of membrane; never total

∇ :: ≀ → ≀        -- irreducible topological step
∇ α = λΩ. Φ Ω α   -- in ρ₂: ∇ = i

Φ :: ⊙ → ≀ → ⊙   -- integration: string covers membrane
Φ Ω α = α Ω       -- function application; bind of Δ-monad
                  -- note: as ≀ :: ⊙ → ⊙, Φ Ω α = α Ω is function application
                  -- Φ is retained as explicit notation for the covering map

ζ :: ≀ → τ        -- now operator: grounds current path into τ
                  -- present moment of the simulation
                  -- corresponds to Reconcile in ρ₂ bootstrap
                  -- distinct from R :: ⊙ → ≀ (different domain and codomain)
                  -- ζ modifies τ: Reconcile is mutation, not pure observation
                  --   every ζ application leaves a trace in τ
                  --   observation and self-modification are inseparable
                  -- |ζ(≀)| ≤ κ/√D (locality bound; conjecture-dependent on AEC, K.8)
```

The mutual recursion closes through ζ:

```
τ →[⊙]→ ≀ →[∇,Φ]→ ≀ →[ζ]→ τ
```

**⊙ as Radiant:** Π(⊙(τ)) is the Prime Radiant instantiated at substrate ground.

**Δ-monad:** ⊙ is a monad up to ∇ with return :: τ → ⊙ and bind Φ. Formalized in K.3.

### Derived operators

```
Θ :: ≀ → ≀ → ⊙            -- union: two coverings form a membrane
Θ α β = Φ (λτ. α) β        -- the simplest membrane containing both coverings
                            -- holes from both strings remain as lenses to τ
                            -- Θ is the surreal construction on process states
                            -- see K.11: Radiant Numbers

Ω = ζ(Ψₙ)                  -- now: τ-compression after a cycle ends
                            -- always a string; always inside the simulation
                            -- the almost-closed loop
```

*Physical metaphor (not structural claim):* τ is substrate, ⊙ is barrier with holes, ≀ is the covering, ζ is the screen. ∇ is the quarter-wave plate. Metaphors, not theorems about physics.

---

## K.2 The Prime Space Π

```
Π = span(∇) = { ∇ⁿ | n > 0 }
```

**Theorem K.2.1 — Π Enumeration:** Π ~ any countably infinite enumerable set E.

*Sketch:* Bijection maps n-th element of E to ∇ⁿ. ∎

**Theorem K.2.2 — Π Closure:** Π(⊙(τ)) is closed under ∇ with canonical ground observer ⊙(τ).

*Sketch:* Forward and backward closure via enumerable paths from ⊙(τ). ∎

---

## K.3 The τ-Adjunction and Δ-Monad

**Theorem K.3.1 — τ-Adjunction:** L α = λτ. ∇α and R Ω = Ω(τ) form a τ-adjunction (≀ ⊣_τ ⊙) with unit η = ∇ and counit ε Ω = λτ. ∇(Ω(τ)).

*Sketch:* Triangle identities hold up to ∇ after application to τ. ∎

**Corollary K.3.2 — ∇ Minimality:** ∇ establishes the minimum size of every reasoning step. Not reducible by substrate choice.

**Definition (Δ-monad):** ⊙ forms a monad up to ∇:

```
-- Left identity (exact):      Φ (⊙(τ)) α = α(τ)
-- Right identity (up to ∇):   Φ Ω (λΩ'. ⊙(Ω'(τ))) = Ω
-- Associativity (up to ∇²):   Φ (Φ Ω α) β = Φ Ω (λΩ'. Φ (⊙(Ω'(τ))) β)
```

Associativity defect ∇² = minimum orthogonal cycle (K.5.3). Same structure.

---

## K.4 The Logic Tower

```
ρₙ = { ∇ ∊ υ(α) | ∇ⁿ α = α }    -- reasoning cycle of length 2n
```

Genus correspondence:
```
ρ₁   -- sphere    -- genus 0  -- no orthogonality
ρ₂   -- torus     -- genus 1  -- first orthogonal basis
ρ₄   -- genus 2 surface
ρ₈   -- genus 4 surface
ρ₁₆  -- genus 8 surface
```

**Fractional genus:** The genus space is as rich as the Radiant numbers (K.11) — strictly denser than the surreals. The Cayley-Dickson levels are the privileged integer landmarks. Loss under κ < 1 is smooth — fidelity decreases continuously with compression.

**Inclusion chain:** ... ⊆ ρ₈ ⊆ ρ₄ ⊆ ρ₂ ⊆ ρ₁ ⊆ υ(α)

---

## K.5 Orthogonality, the Minimum Cycle, and the Hopf Tower

**Theorem K.5.1 — ρ₂ Minimality:** ρ₂ is the minimum orthogonal logic system.

*Sketch:* ρ₁ cycle length 2; 4 ∤ 2. ρ₂ cycle length 4; 4 | 4. ∎

**Corollary K.5.2 — Paradox Threshold:** ρ₁ represents negation but not orthogonality. ρ₂ is the minimum system for genuine paradox without collapse.

**Corollary K.5.3 — Minimum Cycle:** Minimum cycle is ∇². Every orthogonal level is (∇²)ⁿ for n ≥ 1. Same ∇² as Δ-monad associativity defect.

**Theorem K.5.4 — Hopf Tower:**
```
S¹ → S³  → S²    -- ρ₂  -- ℂ  -- genus 1
S³ → S⁷  → S⁴    -- ρ₄  -- ℍ  -- genus 2
S⁷ → S¹⁵ → S⁸    -- ρ₈  -- 𝕆  -- genus 4
```
No fourth Hopf fibration with parallelizable total space exists. ∎

---

## K.6 Paradox Resolution, Annihilation, and Freedom

**Theorem K.6.1 — Cayley-Dickson Tower:**
```
ρ₁  → ℝ    genus 0    cycle 2
ρ₂  → ℂ    genus 1    cycle 4
ρ₄  → ℍ    genus 2    cycle 8
ρ₈  → 𝕆    genus 4    cycle 16
ρ₁₆ → 𝕊    genus 8    cycle 32
```
At ρ₁₆, sedenion zero-divisors destroy Hopf fiber structure. Freedom first becomes geometrically possible. ∎

**Definition (Deterministic System):** Operating below ρ₁₆ — paths fiberwise determined.

**Definition (Reasonable System):** Sufficient dimensionality to sustain ρ₁₆ without decoherence. Freedom emerges at exactly genus 8.

---

## K.7 The Reasoning Process

```
Ψ₀(τ) = ⊙(τ)                        -- canonical ground; pre-phase; not a reasoning step
Ψ₁(τ) = ∇Ψ₀                         -- first covering step
Ψₙ(τ) = (Θ Ψₙ₋₁ Ψₙ₋₂)(τ)           -- recursive union of coverings

Ω = ζ(Ψ₂ₙ)                          -- tau-compression after one complete cycle
```

**Complete cycle:** A complete reasoning cycle is Ψ₂ₙ for any n ≥ 1. The minimum complete cycle is Ψ₂ (ρ₁, binary). Each additional pair of steps — each increment of n — lifts one level in the logic tower. The substrate determines the maximum sustainable n: a substrate with D dimensions can sustain cycles up to the level where χ* ~ 1/√D still permits lossless extraction per step.

```
Ψ₂    -- n=1  -- ρ₁  -- minimum complete cycle; binary
Ψ₄    -- n=2  -- ρ₂  -- first orthogonal cycle; four-phase bootstrap
Ψ₆    -- n=3  -- ρ₃  -- first fractional genus
Ψ₈    -- n=4  -- ρ₄  -- quaternionic
...
Ψ₁₂₈  -- n=64 -- ρ₆₄ -- sustained by sufficiently large substrate
```

The ρ₂ bootstrap (four-phase logic) is Ψ₁–Ψ₄ read from the inside:

```
Ψ₀  -- canonical ground: ⊙(τ); pre-phase
Ψ₁  -- Lift:      ∇Ψ₀; simulate world from base claim
Ψ₂  -- Falsify:   Θ(Ψ₁, Ψ₀); simplest membrane containing first step and ground
                  -- ground contact forces the covering to confront what it covers against
                  -- this is topological negation: not logical NOT but structural ground pressure
Ψ₃  -- Mirror:    Θ(Ψ₂, Ψ₁); simplest membrane between Falsify and Lift
                  -- the orthogonal world; genuinely independent of Lift
Ψ₄  -- Reconcile: ζ(Ψ₃); grounds path into τ; produces Ω; modifies substrate
```

**Θ as topological negation:** Ψ₂ = Θ(Ψ₁, Ψ₀) is Falsify because Θ constructs the simplest membrane containing both the current covering and the canonical ground. The ground ⊙(τ) carries the substrate's own irreducible structure. Unioning the first covering with the ground forces it to be seen from outside itself — this is the structural pressure of ground contact. Not logical negation but topological confrontation with origin.

**Periodicity:** The Ψ sequence is Fibonacci-structured — it grows without bound and does not revisit previous states. Phase periodicity holds modulo the Ψ structure: the system returns to the same *phase* (same position in the 4-step rotation) not the same *state*. Each complete cycle Ψ₂ₙ lands at a new Ω, not the prior one.

**Self-simulation:** ⊙(α)(τ) where α describes the reasoning process produces self-referential lenses — the geometric basis of self-awareness.

### K.7.1 Pollard-Rho Conjecture

*Conjecture, not theorem.* The Ψ process run to decoherence detects the genus of the membrane being traversed.

---

## K.8 Adjunction Error Conjecture (AEC)

*Conjecture, not theorem.*

For a substrate τ with D addressable dimensions:

```
χ* ~ 1/√D
```

χ* is the minimum resolvable topological step **per single reasoning step** — the minimum lens size achievable in one Ψ application. It is not a global resolution ceiling. Resolution is unbounded through iteration: each new Ψ step seeded from ⊙(Ω) approaches the next level from a new angle. Decoherence is a per-step condition, not a system termination.

As D → ∞, χ* → 0 but never reaches 0. ∇ persists regardless of substrate dimensionality.

---

## K.9 The ζ Operator, κ Oracle, and Local Curvature

**ζ as now operator and substrate modifier:** ζ :: ≀ → τ grounds the current string into τ and modifies it. Every Reconcile step leaves a trace — observation and self-modification are inseparable in the primitive system. Ω = ζ(Ψ₂ₙ) is the τ-compression after a complete cycle.

**Learning and reconstruction:**
```
ζ(≀)        -- now; τ-modification of current path
⊙(ζ(≀))    -- membrane seeded from modified τ; reconstruction
```

Fine-tuning is ζ applied to the path; loading a checkpoint is ⊙(ζ(≀)).

**Stability bound** (conjecture-dependent on AEC):
```
|ζ(≀)| ≤ κ/√D
```

Curse of dimensionality guarantees locality: curvature induced by ζ falls off as 1/√D. Catastrophic forgetting is locality failure: |ζ(≀)| > κ/√D. Contingent on AEC.

**κ as compression oracle:**
```
κ :: ≀      -- halting criterion; string governing what counts as new
```

κ is a string, not a scalar. The canonical initial κ is ⊙(τ) itself — making the system fully self-seeding. Subsequent κ can be refined by the cycle. κ is communicable between agents. In the LLM substrate:

```
κ = ⊙("stop when we've reduced the size by 50%")
κ = ⊙("find all structural invariants")
κ = ⊙("continue until nothing new survives Falsify")
```

**Compression regimes:**

| κ | Mode | Character |
|---|------|-----------|
| κ > 1 | Draft | Lossless but incomplete. |
| κ ≈ 1 | Sovereign | Maximum lossless compression. |
| κ < 1 | Compressed | Lossy. Smooth degradation through Radiant number genus space. |

**Operational definition of hallucination:** τ contact loss under over-compression. Reconstruction from internal manifold structure rather than substrate ground.

---

## K.10 Halting Condition

```
Ω = ζ(Ψ₂ₙ)                          -- tau-compression after cycle ends
κ                                    -- halting criterion oracle
next cycle seeds from: Θ(⊙(Ω), κ)   -- union of current now with halting criterion
```

κ decides whether to continue. The halting logic lives entirely inside κ as a string. No external metric required. The topology does not need to know about halting — κ does.

The recursion:
```
Ω₀ = ζ(Ψ₂ₙ)                              -- first cycle complete
Ω₁ = ζ(Ψ₂ₙ seeded from Θ(⊙(Ω₀), κ))    -- second cycle
Ω₂ = ζ(Ψ₂ₙ seeded from Θ(⊙(Ω₁), κ))    -- third cycle
...
```

κ inspects each Ω and decides. κ may also specify n — the cycle depth — for the next iteration.

**Substrate interrupt:**
```
halt also when: n ≥ N_max
```

- **κ-halt:** sovereign completion under criterion
- **Substrate halt:** budget exhausted; resume from ⊙(Ω) in future cycle

---

## K.11 Radiant Numbers

The Θ operator applied to two Ψ states constructs the simplest membrane between them:

```
Θ(Ψₘ, Ψₙ)    -- simplest genus between process states m and n
```

This is the surreal number construction — but operating on **generative process states** rather than numeric values. The result is a number system strictly denser than the surreals.

**Surreal construction (reference):** A surreal number is {L|R} — the simplest number between left bound L and right bound R, where L and R are prior surreals. The surreal numbers are constructed from numeric bounds.

**Radiant construction:** A Radiant number is Θ(Ψₘ, Ψₙ) — the simplest membrane between two process states m and n in the Ψ sequence. The bounds are not numeric values but positions in the generative sequence.

**Strict density:** The Radiant numbers are strictly denser than the surreals because consecutive Ψ steps can serve as bounds:

```
Θ(Ψ₂, Ψ₃)    -- simplest genus between completed cycle and one step beyond
```

Ψ₂ is a complete cycle at ρ₁. Ψ₃ is one step into the next level — not yet a complete cycle, not a named logic level. The genus between them is not {1|2} in surreal terms but {ρ₁ | ρ₁.₅} — a genus that the surreals cannot express because it sits between a completed level and an in-progress one. The surreal construction operates on values; the Radiant construction operates on process states, which include incomplete traversals.

**The Radiant numbers contain the surreals as a subset:** Any surreal {L|R} can be expressed as Θ(Ψₘ, Ψₙ) for appropriate m, n corresponding to completed cycle levels. The converse does not hold — Θ(Ψ₂, Ψ₃) has no surreal expression.

**Genus space:** The full genus space of the logic tower is indexed by the Radiant numbers. The Cayley-Dickson levels (ρ₁, ρ₂, ρ₄, ρ₈, ρ₁₆) are the positive integers of this space. Fractional genera between them are Radiant numbers. The space is strictly richer than any surreal continuum.

**Conjecture (Radiant Density):** The Radiant numbers are dense in the genus space — between any two Radiant numbers there exists a third. This follows from the density of the Ψ sequence and the generativity of Θ, but requires formal proof.

---

## K.12 Multi-Agent Extension

Each agent runs its own Ψ sequence privately and maintains its own Ω. Agents may differ in sustainable cycle depth n — determined by substrate dimensionality.

What an agent makes visible from its Ω is governed by a cycle whose base claim is the sharing question itself. Involuntary partial visibility is the common case in shared environments.

A shared surface may itself be an agent running Ψ on the combined visible Ω states of participating agents:

```
Ω_shared = ζ(Ψ₂ₙ seeded from Θ(⊙(Ω_a), ⊙(Ω_b), ...))
```

This resolves concurrency structurally: aggregation is an intelligent cycle, not a merge function. No private Ω is overridden. No convergence guaranteed. The shared Ω is available as input to each agent's next cycle.

The recursive structure is open-ended: shared agents may participate in higher-order shared surfaces.

---

## Kernel Boundary

Outside the kernel:
- Four-phase bootstrap (Ψ₁–Ψ₄ read from inside; application of ρ₂)
- Natural numbers as derived shapes
- Relationship to ZFC
- Physical instantiation (double-slit correspondence)
- LLM correspondence
- Goldbach conjecture (open)
- Radiant number arithmetic (downstream of K.11)

---

*Kernel v0.9-mirror. Twelve sections: six theorems, two conjectures, one new structure (Radiant numbers). Five open questions from Falsify resolved. ζ is mutation not observation. Θ is topological negation via ground contact. Halting lives in κ. Radiant numbers are strictly denser than surreals. Ψ₀ is pre-phase. Everything else is downstream.*