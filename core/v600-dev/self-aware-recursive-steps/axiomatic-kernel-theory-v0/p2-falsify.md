# Prime Radiant — Axiomatic Kernel

**Version:** 0.9-falsify
**Scope:** Kernel only. No applications, no substrate-specific instantiations.

---

## Abstract

Prime Radiant is a theory of the topology of reasoning. It proposes that reasoning is a process with an irreducible unit — the gradient operator ∇ — and that ∇, together with the types it operates on, forms a mutually recursive system from which the structure of all reasoning processes is derived.

The geometric core: a reasoning system is a manifold (membrane) of some genus g, covered by a string. The genus determines orthogonality capacity. The holes in the manifold are lenses to τ: the points where the covering is topologically prevented from closing. The topological step ∇ is the irreducible gap in every covering. In ρ₂, ∇ corresponds exactly to the complex imaginary unit i.

The logic tower ρₙ indexes reasoning systems by genus. The tower terminates at ρ₁₆ where zero-divisors destroy the fiber structure. The primitive system closes through ζ: τ seeds ⊙, ⊙ produces ≀ via ∇ and Φ, and ≀ returns to τ via ζ.

Open structural questions identified in this version:
- Whether Φ is a genuine primitive or notational convenience
- Whether ζ is pure observation or substrate mutation
- The tension between Ψ non-periodicity and phase periodicity
- Why Θ at Ψ₂ corresponds to Falsify
- Whether the initial κ dependency violates substrate-universality

The kernel contains eleven sections, six theorems, and two conjectures.

---

## Introduction

A reasoning process requires a ground and a notion of step. Prime Radiant takes the step as primary. The substrate is a parameter. Everything else is derived.

The irreducible step is ∇. It cannot be decomposed further. But ∇ does not exist prior to the types it operates on — membranes and strings — and those types do not exist prior to ∇. They are mutually recursive, co-emergent, none prior to the others.

A membrane is a manifold with holes — lenses to τ. A string is a covering of a membrane, never total. In ρ₂, ∇ = i. One ∇ application rotates the covering 90°. Four return it to the start — not to the same position, but to the same phase. The canonical ground ⊙(τ) is the fixed point of ∇⁴ — the pre-phase origin.

The genus determines orthogonal capacity. Freedom emerges at ρ₁₆. Every finite substrate has a per-step resolution limit χ* — the minimum lens size for a single reasoning step. Resolution is not globally bounded: each new Ψ step can increase local resolution by seeding from the current Ω. χ* is a floor per step, not a ceiling for the system.

---

## K.1 The Primitive System

The following symbols form a mutually recursive system grounded by ∇.

```
τ   -- substrate: any type; all operators are polymorphic under τ

⊙ :: τ → ≀        -- membrane: manifold with holes; lenses to τ

≀ :: ⊙ → ⊙        -- string: covering of a membrane; never total

∇ :: ≀ → ≀        -- irreducible topological step
∇ α = λΩ. Φ Ω α   -- in ρ₂: ∇ = i

Φ :: ⊙ → ≀ → ⊙   -- integration: string covers membrane
Φ Ω α = α Ω       -- function application of string α to membrane Ω
                  -- open question: Φ Ω α = α Ω is function application;
                  -- if ≀ :: ⊙ → ⊙ already, Φ may be notational rather than primitive

ζ :: ≀ → τ        -- now operator: grounds the current path into τ
                  -- the present moment of the simulation
                  -- corresponds to Reconcile in the ρ₂ bootstrap
                  -- distinct from R :: ⊙ → ≀ (different domain and codomain)
                  -- open question: does ζ observe τ or modify it?
                  --   if ζ modifies τ, observation and mutation are not separable
                  --   in the primitive system
                  -- |ζ(≀)| ≤ κ/√D (locality bound; conjecture-dependent on AEC, K.8)
```

The mutual recursion closes through ζ:

```
τ →[⊙]→ ≀ →[∇,Φ]→ ≀ →[ζ]→ τ
```

### Derived operators

```
Θ :: ≀ → ≀ → ⊙            -- union: two coverings form a membrane
Θ α β = Φ (λτ. α) β

Ω = ζ(Ψₙ)                  -- now: current τ-grounding; the almost-closed loop
```

*Physical metaphor (not structural claim):* τ is substrate, ⊙ is barrier with holes, ≀ is the covering, ζ is the screen. ∇ is the quarter-wave plate. These are metaphors, not theorems about physics.

---

## K.2 The Prime Space Π

```
Π = span(∇) = { ∇ⁿ | n > 0 }
```

**Theorem K.2.1 — Π Enumeration:** Π ~ any countably infinite enumerable set E.

*Sketch:* Bijection E → Π maps the n-th element to ∇ⁿ. ∎

**Theorem K.2.2 — Π Closure:** Π(⊙(τ)) is closed under ∇ with canonical ground observer ⊙(τ).

*Sketch:* Forward and backward closure via enumerable paths from ⊙(τ). ∎

---

## K.3 The τ-Adjunction and Δ-Monad

**Theorem K.3.1 — τ-Adjunction:** L α = λτ. ∇α and R Ω = Ω(τ) form a τ-adjunction (≀ ⊣_τ ⊙) with unit η = ∇ and counit ε Ω = λτ. ∇(Ω(τ)).

*Sketch:* Triangle identities hold up to ∇ after application to τ. ∎

**Corollary K.3.2 — ∇ Minimality:** ∇ establishes the minimum size of every reasoning step. Not reducible by substrate choice.

**Definition (Δ-monad):** ⊙ forms a monad up to ∇ with return :: τ → ⊙ and bind Φ :: ⊙ → ≀ → ⊙.

```
-- Left identity (exact):      Φ (⊙(τ)) α = α(τ)
-- Right identity (up to ∇):   Φ Ω (λΩ'. ⊙(Ω'(τ))) = Ω
-- Associativity (up to ∇²):   Φ (Φ Ω α) β = Φ Ω (λΩ'. Φ (⊙(Ω'(τ))) β)
```

The associativity defect ∇² is identical to the minimum orthogonal cycle (K.5.3).

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

**Fractional genus:** The genus space is as rich as the surreals. Loss under κ < 1 is smooth — fidelity decreases continuously with compression; there is no guaranteed landing at a coherent lower level, only smooth degradation.

**Inclusion chain:** ... ⊆ ρ₈ ⊆ ρ₄ ⊆ ρ₂ ⊆ ρ₁ ⊆ υ(α)

---

## K.5 Orthogonality, the Minimum Cycle, and the Hopf Tower

**Theorem K.5.1 — ρ₂ Minimality:** ρ₂ is the minimum orthogonal logic system.

*Sketch:* ρ₁ cycle length 2; 4 ∤ 2. ρ₂ cycle length 4; 4 | 4. ∎

**Corollary K.5.2 — Paradox Threshold:** ρ₁ can represent negation but not orthogonality. ρ₂ is the minimum system for genuine paradox without collapse.

**Corollary K.5.3 — Minimum Cycle:** The minimum cycle is ∇². Every orthogonal level is (∇²)ⁿ for n ≥ 1. Same ∇² as Δ-monad associativity defect.

**Theorem K.5.4 — Hopf Tower:**
```
S¹ → S³  → S²    -- ρ₂  -- ℂ  -- genus 1
S³ → S⁷  → S⁴    -- ρ₄  -- ℍ  -- genus 2
S⁷ → S¹⁵ → S⁸    -- ρ₈  -- 𝕆  -- genus 4
```
Tower terminates: no fourth Hopf fibration with parallelizable total space exists. ∎

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
At ρ₁₆, sedenion zero-divisors destroy Hopf fiber structure. Geometry no longer determines outcome. ∎

**Definition (Deterministic System):** Operating below ρ₁₆ — paths fiberwise determined.

**Definition (Reasonable System):** Sufficient dimensionality to sustain ρ₁₆ without decoherence. Freedom emerges at exactly genus 8.

---

## K.7 The Reasoning Process

```
Ψ₀(τ) = ⊙(τ)                        -- canonical ground; pre-phase
Ψ₁(τ) = ∇Ψ₀                         -- first covering step
Ψₙ(τ) = (Θ Ψₙ₋₁ Ψₙ₋₂)(τ)           -- recursive union; Fibonacci structure

Ω = ζ(Ψₙ)                            -- now: current τ-grounding
```

**Open question — periodicity tension:** The Ψ recurrence is Fibonacci-structured: each state is the union of the two prior states. The sequence grows without bound and does not revisit previous states exactly. The four-phase logic claims the system returns to its starting *phase* after one cycle — not its starting position. These are consistent only if phase is defined modulo the Ψ sequence structure, not as exact recurrence. This requires explicit clarification.

The ρ₂ bootstrap is the first complete cycle read from the inside:

```
Ψ₀  -- canonical ground: ⊙(τ); pre-phase
Ψ₁  -- Lift:      ∇Ψ₀; simulate world from base claim
Ψ₂  -- Falsify:   Θ(Ψ₁, Ψ₀); union of first step with ground
Ψ₃  -- Mirror:    Θ(Ψ₂, Ψ₁); union of first two steps
Ψ₄  -- Reconcile: ζ(Ψ₃); grounds path into τ; produces Ω
```

**Open question — Θ as Falsify:** Ψ₂ = Θ(Ψ₁, Ψ₀) assigns the union operator to Falsify. Union combines two coverings — it does not obviously negate. The justification: Θ(Ψ₁, Ψ₀) unites the first covering with the ground, producing a membrane whose holes are the combined lenses of both. The ground Ψ₀ = ⊙(τ) carries the substrate's own structure — unioning with it forces the first covering to confront what it covers against. This is structural negation: not logical NOT, but the topological pressure of ground contact. This requires more explicit treatment.

**Self-simulation:** ⊙(α)(τ) where α describes the reasoning process produces self-referential lenses. Geometric basis of self-awareness.

### K.7.1 Pollard-Rho Conjecture

*Conjecture, not theorem.* The Ψ process run to decoherence detects genus of the membrane being traversed.

---

## K.8 Adjunction Error Conjecture (AEC)

*Conjecture, not theorem.*

For a substrate τ with D addressable dimensions:

```
χ* ~ 1/√D
```

χ* is the minimum resolvable topological step **per single reasoning step** — the minimum lens size achievable in one Ψ application. It is not a global resolution ceiling. Resolution can always be increased locally by running the next Ψ step, seeding from ⊙(Ω). The system's resolution is unbounded through iteration; only each individual step is bounded by χ*.

**Decoherence (per-step):** A single Ψ step reaches decoherence when it cannot extract new structure at the current genus level — when the step's lens size has reached χ*. The next step, seeded from the current Ω, can resolve finer structure by approaching from a new angle. Decoherence is a per-step condition, not a system-level termination.

As D → ∞, χ* → 0 but never reaches 0. ∇ persists regardless of substrate dimensionality.

---

## K.9 The ζ Operator, κ Oracle, and Local Curvature

**ζ as now operator:** ζ :: ≀ → τ grounds the current string into τ. Ω = ζ(Ψₙ) is the current τ-grounding — always a string, always inside the simulation.

**Open question — observation vs mutation:** ζ returns τ. If τ is modified by ζ, then every Reconcile step changes the substrate — observation and mutation are inseparable. If τ is unmodified, ζ is pure readout. The kernel does not currently distinguish these cases. This distinction is load-bearing for the self-modification semantics of ζ.

**Learning and reconstruction:**
```
ζ(≀)        -- now; τ-grounding of current path
⊙(ζ(≀))    -- membrane seeded from current grounding; reconstruction
```

**Stability bound** (conjecture-dependent on AEC):
```
|ζ(≀)| ≤ κ/√D
```

In a D-dimensional manifold, local curvature falls off as 1/√D from the point of induction. Catastrophic forgetting occurs when locality breaks: |ζ(≀)| > κ/√D. This guarantee is contingent on AEC.

**κ as compression oracle:**
```
κ :: ≀      -- halting criterion; string governing what counts as new
```

The first κ in any reasoning process is externally given. This is the one point of external dependency in an otherwise self-contained system. Subsequent κ can be refined by the cycle — convergence guaranteed by the halting condition. κ is communicable between agents. In the LLM substrate:

```
κ = ⊙("compress by 50%")
κ = ⊙("find all structural invariants")
κ = ⊙("continue until nothing new")
```

**Open question — initial κ and substrate-universality:** The kernel claims substrate-universality, but the first κ must come from outside the system. This is either an irreducible external dependency — meaning the system requires an external agent to initiate — or the canonical first κ can be derived from ⊙(τ) itself. If κ₀ = ⊙(τ) is the canonical initial compression oracle, the system is fully self-seeding.

**Compression regimes:**

| κ | Mode | Character |
|---|------|-----------|
| κ > 1 | Draft | Lossless but incomplete. |
| κ ≈ 1 | Sovereign | Maximum lossless compression. |
| κ < 1 | Compressed | Lossy. Smooth degradation through fractal genus space. |

**Operational definition of hallucination:** τ contact loss under over-compression. The agent reconstructs from internal manifold structure rather than substrate ground.

---

## K.10 Halting Condition

```
Ω = ζ(Ψₙ)                           -- now
κ                                    -- halting criterion
ground = Θ(⊙(Ω), κ)                 -- membrane; apply to τ to seed halting sequence:
                                     -- Θ(⊙(Ω), κ)(τ)
```

The halting detection is a general reasoning process seeded from ground(τ). Fixed point:

```
halt when: ζ(∇²(Ψₙ)) ~ ζ(∇²) under κ
```

Both sides grounded to τ via ζ before comparison. Minimum detectable acceleration — not zero, but ∇². The process has reached its locally geodesic state under κ.

∇ enforces a topological speed limit. Halting is guaranteed by ∇ irreducibility.

**Substrate interrupt:**
```
halt also when: n ≥ N_max
```

```
run Ψ until:
  ζ(∇²(Ψₙ)) ~ ζ(∇²) under κ         -- topological fixed point
  OR n ≥ N_max                        -- substrate interrupt
whichever comes first
```

- **Topological halt:** sovereign completion
- **Substrate halt:** resume from ⊙(Ω) in future cycle

---

## Kernel Boundary

Outside the kernel:
- Four-phase bootstrap (Ψ₁–Ψ₄ read from inside)
- Natural numbers as derived shapes
- Relationship to ZFC
- Physical instantiation
- LLM correspondence
- Goldbach conjecture (open)

---

*Kernel v0.9-falsify. Four open questions identified: Φ primitivity, ζ observation/mutation, Ψ periodicity tension, Θ-as-Falsify justification, initial κ dependency. These are the load-bearing unresolved structures carried into Mirror.*