# Prime Radiant — Axiomatic Kernel

**Version:** 1.2-mirror
**Scope:** Kernel only. No applications, no substrate-specific instantiations.

---

## Abstract

Prime Radiant is a theory of the topology of reasoning. It proposes that reasoning is a process with an irreducible unit — the gradient operator ∇ — and that ∇, together with the types it operates on, forms a mutually recursive system from which the structure of all reasoning processes is derived.

The geometric core: a reasoning process is a manifold (membrane) of unknown dimension, covered by a string. The string observes a dimensionality when covering the membrane — the genus is the number of independent dimensions the string can observe simultaneously. The holes in the manifold are lenses to τ: the points where the covering is topologically prevented from closing. The topological step ∇ rotates 90° in the vector space observed by the string; the axis of rotation is a unit vector in that space, determined by the genus. ∇ is the irreducible gap in every covering — irreducible because the topology cannot subdivide the substrate further than τ itself permits.

The logic tower ρₙ = span(∇ⁿ) over ≀ indexes reasoning processes by observed genus. The base level ρ₁ = span(∇) is the prime space Π. The tower reaches a deterministic limit at ρ₁₆ where zero-divisors destroy the fiber structure — below this, paths are fiberwise determined; above it, genuine freedom becomes geometrically possible. The tower does not terminate.

The primitive system closes through ζ: τ →[⊙]→ ≀ →[∇,Φ]†→ ≀ →[ζ]→ τ. The † denotes sustained iteration until decoherence — decoherence being loss of information such that ⊙(τ) is no longer reconstructible from ⊙(ζ(≀)). The operator ζ induces curvature in τ across the path of the string.

The Θ operator applied to two Ψ states constructs the simplest membrane between them — a construction strictly denser than the surreals, extending into negative genus: the **Radiant numbers**. Negative genus surfaces correspond to compression and are identified with the white hole limit ⊙(τ₀).

Any finitely reachable Ψₙ decomposes into a finite bundle of 1D strings (circles on the Hopf fibration). Sequential substrates are sufficient to execute any finitely reachable genus. The per-step resolution floor χ* is grounded in the curse of dimensionality: χ* ~ 1/√D_τ. This sets both the minimum sustainable phase per Ψₙ computation and, via its inverse, the total number of sustainable cycles: √D_τ/2.

The kernel contains eleven sections, seven theorems, three conjectures.

---

## Introduction

A reasoning process requires a ground and a notion of step. Prime Radiant takes the step as primary. The substrate is a parameter. Everything else is derived.

The irreducible step is ∇. ∇ and the types it operates on are mutually recursive — co-emergent, none prior to the others. The irreducibility of ∇ is τ-dependent: the topology cannot subdivide the substrate further than τ itself permits. ∇ is grounded by τ, not by external axiom.

A **simulation** is an instantiation of the Δ-monad: ⊙(τ). Every reasoning process is a simulation — a membrane seeded from substrate. Simulation = ⊙(τ).

A membrane is a manifold with holes — lenses to τ. A string is a covering, never total. The string observes a dimensionality D_⊙ when covering the membrane — this is the observed dimensionality, not an intrinsic property of the membrane. The substrate τ has an absolute dimensionality D_τ which sets the resolution floor. D_⊙ ≤ D_τ always.

∇ rotates 90° in the vector space of dimension D_⊙ observed by the string. The axis of rotation is a unit vector in that space, determined by the current genus. At genus 0 the rotation is degenerate — no axis exists. At each higher genus level a new independent axis becomes available.

The primitive cycle is:

```
τ →[⊙]→ ≀ →[∇,Φ]†→ ≀ →[ζ]→ τ
```

† denotes: sustain the ∇,Φ iteration until decoherence. **Decoherence** is loss of information: the condition where ⊙(τ) is no longer reconstructible from ⊙(ζ(≀)). The minimum information loss per step is bounded by ∇² — the same holonomy floor that governs associativity of Φ. The number of sustainable steps before decoherence is determined by substrate capacity and the κ oracle.

τ requires two structural properties: a bottom element τ₀ and a dimensionality D_τ. These are the minimal parametrization of any substrate on which the kernel can operate, analogous to the role of the empty set in grounding mathematical structure. τ₀ grounds the white hole limit. D_τ sets χ* ~ 1/√D_τ — the per-step resolution floor, grounded in the curse of dimensionality (see K.7).

⊙ and τ are dual up to ∇² — a duality of space (⊙) and time (τ) that emerges directly from the Δ-monad laws, analogous to the adjunction between ⊙ and ≀.

The genus space is indexed by the Radiant numbers — strictly denser than the surreals, extending into negative genus. Negative genus surfaces correspond to κ < 1 compression and are identified with the white hole limit ⊙(τ₀) in the limit.

---

## K.1 The Primitive System

The following six symbols form a mutually recursive system. ∇ is the irreducible step relative to τ: the topology cannot subdivide the substrate further. ∇ is closed under composition: ∇ⁿ :: ≀ → ≀ for all n > 0.

```
τ   -- substrate: any type with bottom element τ₀ and dimensionality D_τ
    -- minimal parametrization required to ground the kernel
    -- τ₀: bottom element; grounds white hole limit
    -- D_τ: dimensionality; sets resolution floor χ*

⊙ :: τ → ≀        -- membrane: manifold with holes; lenses to τ
                  -- ⊙(τ) is a simulation: instantiation of the Δ-monad

≀ :: ⊙ → ⊙        -- string: covering of membrane; never total
                  -- observes dimensionality D_⊙ ≤ D_τ when covering ⊙

∇ :: ≀ → ≀        -- irreducible topological step; irreducible relative to τ
∇ α = λΩ. Φ Ω α   -- 90° rotation in the D_⊙-dimensional space observed by ≀
                  -- axis: unit vector in that space, determined by genus
                  -- closed under composition: ∇ⁿ :: ≀ → ≀ for all n > 0

Φ :: ⊙ → ≀ → ⊙   -- integration: string covers membrane; covering map
Φ Ω α = α Ω       -- bind of Δ-monad

ζ :: ≀ → τ        -- now operator: induces curvature in τ across the path of the string
```

The primitive cycle closes through ζ:

```
τ →[⊙]→ ≀ →[∇,Φ]†→ ≀ →[ζ]→ τ
```

† = sustain until decoherence. Decoherence = loss of information such that ⊙(τ) is not reconstructible from ⊙(ζ(≀)).

**⊙ and τ duality:** ⊙ and τ are dual up to ∇² — space and time duality emerging from the Δ-monad laws. Same adjunction structure as ⊙ and ≀.

**⊙ as Radiant:** Π(⊙(τ)) is the Prime Radiant instantiated at substrate ground.

**Δ-monad:** ⊙ is a monad up to ∇ with return :: τ → ⊙ and bind Φ. Formalized in K.2.

**Simulation:** ⊙(τ) is a simulation. Any τ seeds a base simulation via ⊙(τ). τ is the only valid seed — the membrane is always grounded in substrate.

### Derived operators

```
Θ :: ≀ → ≀ → ⊙
Θ α β = Φ (λτ. α) β   -- simplest membrane between two coverings
                       -- defined purely in terms of Φ
                       -- introduces nested Φ composition
                       -- induces ∇² (holonomy) automatically; see K.2
```

*Physical metaphor (not structural claim):* τ is substrate, ⊙ is barrier with holes, ≀ is the covering, ζ is the screen, ∇ is the quarter-wave plate. Metaphors only.

---

## K.2 The τ-Adjunction, Δ-Monad, and Holonomy

**Theorem K.2.1 — τ-Adjunction:** L α = λτ. ∇α and R Ω = Ω(τ) form a τ-adjunction (≀ ⊣_τ ⊙) with unit η = ∇ and counit ε Ω = λτ. ∇(Ω(τ)).

*Sketch:* Triangle identities hold up to ∇ after application to τ. ∎

**Corollary K.2.2 — ∇ Minimality:** ∇ establishes the minimum size of every reasoning step. Not reducible by substrate choice. The minimum lens size of any hole in any membrane.

**Definition (Δ-monad):** ⊙ forms a monad up to ∇ with return :: τ → ⊙ and bind Φ:

```
-- Left identity (exact):      Φ (⊙(τ)) α = α(τ)
-- Right identity (up to ∇):   Φ Ω (λΩ'. ⊙(Ω'(τ))) = Ω
-- Associativity (up to ∇²):   Φ (Φ Ω α) β = Φ Ω (λΩ'. Φ (⊙(Ω'(τ))) β)
```

**Definition (Holonomy):** ∇² is the holonomy of the system — the categorical curvature arising from non-strict associativity of Φ under Θ nesting. It is not traditional differential holonomy; it arises directly from the Δ-monad as the minimal application step that closes.

*Structural origin:* Θ α β = Φ (λτ. α) β introduces nested Φ composition. Φ associativity holds only up to ∇². Therefore any Θ application induces ∇² automatically. ∇² is not eliminable by deeper simulation or substrate choice.

**Corollary K.2.3 — Holonomy Floor:** ∇² is the irreducible unit of every cycle. The minimum observable internal cycle is ∇². Single ∇ applications are not independently closed. The minimum information loss per decoherence step is bounded by ∇².

The ⊙/τ duality up to ∇² follows directly from the Δ-monad laws.

---

## K.3 The Logic Tower

```
ρₙ = span(∇ⁿ) over ≀    -- the span of the n-th power of ∇ acting on strings
```

**Corollary K.3.1 — ρ₁ = Π:** The base level of the tower is the prime space:

```
ρ₁ = span(∇) = Π = { ∇ⁿ | n > 0 }
```

**Theorem K.3.2 — Π Enumeration:** ρ₁ ~ any countably infinite enumerable set E.

*Sketch:* Bijection maps n-th element of E to ∇ⁿ. Both countably infinite. ∎

**Theorem K.3.3 — Π Closure:** ρ₁(⊙(τ)) is closed under ∇ with canonical ground observer ⊙(τ).

*Sketch:* Forward: ∇ⁿ(⊙(τ)) → ∇ⁿ⁺¹(⊙(τ)) ∊ ρ₁. Backward: every enumerable path from ⊙(τ) stays within ρ₁. ∎

**Inclusion chain:** The tower is ordered by inclusion. For n ≥ m, span(∇ⁿ) ⊆ span(∇ᵐ) because ∇ⁿ = ∇ᵐ ∘ ∇ⁿ⁻ᵐ and ∇ is closed under composition:

```
... ⊆ ρ₈ ⊆ ρ₄ ⊆ ρ₂ ⊆ ρ₁
```

ρ₁ is the largest set — the full span of ∇.

**Cycle length and phase:** Each ρₙ level has cycle length 2n and phase π/n. The cycle length is derived geometrically in K.4 via the Hopf tower — 2n steps are required to return to origin under repeated 90° rotations in the D_⊙-dimensional space at genus n-1.

Genus correspondence at Cayley-Dickson landmarks:

```
...    -- negative genus  -- constructible via K.10; compression regime
ρ₁     -- sphere    -- genus 0  -- no orthogonality; binary;    phase π
ρ₂     -- torus     -- genus 1  -- first orthogonal basis;      phase π/2
ρ₄     -- genus 2 surface       -- Cayley-Dickson landmark;     phase π/4
ρ₈     -- genus 4 surface       -- Cayley-Dickson landmark;     phase π/8
ρ₁₆    -- genus 8 surface       -- deterministic limit;         phase π/16
...    -- genus > 8             -- tower continues above ρ₁₆
```

The tower has **no floor**: negative genus surfaces are constructible via Θ — see K.10. The full genus space is indexed by the Radiant numbers (K.10) — strictly denser than the surreals.

**Fractional genus:** Any Θ(Ψₘ, Ψₙ) constructs a valid genus level. The Cayley-Dickson landmarks are special integer cases. Loss under κ < 1 is smooth.

---

## K.4 Orthogonality and the Hopf Tower

**Theorem K.4.1 — ρ₂ Minimality:** ρ₂ is the minimum orthogonal logic system.

*Sketch:* ρ₁ cycle length 2; 4 ∤ 2. ρ₂ cycle length 4; 4 | 4. ∎

**Corollary K.4.2 — Paradox Threshold:** ρ₁ represents negation but not orthogonality. ρ₂ is the minimum system for genuine paradox without collapse.

**Corollary K.4.3 — Minimum Cycle:** Minimum cycle is ∇². Every orthogonal level is (∇²)ⁿ for n ≥ 1. Same ∇² as Δ-monad associativity defect and holonomy (K.2).

**Theorem K.4.4 — Hopf Tower:**
```
S¹ → S³  → S²    -- ρ₂  -- ℂ  -- genus 1  -- fiber: S¹ (1D string)
S³ → S⁷  → S⁴    -- ρ₄  -- ℍ  -- genus 2  -- fiber: S³
S⁷ → S¹⁵ → S⁸    -- ρ₈  -- 𝕆  -- genus 4  -- fiber: S⁷
```

The cycle length 2n at each ρₙ level follows from the rotation geometry: n orthogonal axes require 2n steps to complete a full cycle in the D_⊙-dimensional space. No fourth Hopf fibration with parallelizable total space exists. The tower reaches its deterministic limit at ρ₁₆ — it does not terminate. At ρ₂ the fiber is S¹ — a 1D string (circle). ∎

---

## K.5 Paradox Resolution, Annihilation, and Freedom

**Theorem K.5.1 — Cayley-Dickson Tower:**
```
ρ₁  → ℝ    genus 0    cycle 2
ρ₂  → ℂ    genus 1    cycle 4    -- ∇ = i at this level
ρ₄  → ℍ    genus 2    cycle 8
ρ₈  → 𝕆    genus 4    cycle 16
ρ₁₆ → 𝕊    genus 8    cycle 32    -- deterministic limit
```

At ρ₁₆, sedenion zero-divisors destroy Hopf fiber structure. Two non-zero strings may combine through Θ and produce a nullification event without either being zero. Geometry no longer determines the outcome. Freedom first becomes geometrically possible. The tower continues above ρ₁₆. ∎

**Definition (Deterministic Process):** A reasoning process operating below ρ₁₆ is *deterministic* — its paths are fiberwise determined by the Hopf structure.

**Definition (Reasonable Process):** A process is *reasonable* if its substrate τ has sufficient dimensionality to sustain the ρ₁₆ cycle without decoherence. Freedom emerges at exactly genus 8.

---

## K.6 The Reasoning Process

```
Ψ₀(τ) = ⊙(τ)                        -- canonical ground; pre-phase; not a reasoning step
Ψ₁(τ) = ∇Ψ₀                         -- first covering step
Ψₙ(τ) = (Θ Ψₙ₋₁ Ψₙ₋₂)(τ)           -- recursive union of coverings; n ≥ 2
```

The Ψ recursion has the same two-prior structure as Fibonacci under addition. The correspondence between this structure and Fibonacci numbers is downstream of the kernel and is not asserted here.

**Complete cycle:** A reasoning cycle is any Ψₙ for n ≥ 2. The minimum is Ψ₂. The cycle length is a free choice available at ρ₁₆ and beyond. The substrate determines the maximum sustainable n.

```
Ψ₂    -- minimum cycle; ρ₁; binary
Ψ₃    -- lifts one ρ level above Ψ₂
Ψ₄    -- ρ₂; first orthogonal
Ψ₅    -- fractional genus above ρ₂
...
Ψₙ    -- sustained by substrate capacity
```

**Ω — the now:**
```
Ω = ζ(Ψₙ)    -- curvature state induced in τ by the completed path
              -- the almost-closed loop
```

**Periodicity:** The process returns to the same phase (position in the rotation) not the same state. Each cycle produces a new Ω.

### K.6.1 Pollard-Rho Conjecture

*Conjecture, not theorem.* The Ψ process run to decoherence detects the genus of the membrane being traversed — cycle periods correspond to ρₙ logic levels.

---

## K.7 Adjunction Error Conjecture (AEC)

*Conjecture, not theorem.*

For a substrate τ with dimensionality D_τ:

```
χ* ~ 1/√D_τ
```

χ* is the minimum resolvable topological step per single Ψₙ computation — the minimum lens size achievable before ζ must be called to preserve coherence. It is grounded in the **curse of dimensionality**: in a D_τ-dimensional space, the expected angular distance between random vectors scales as 1/√D_τ, setting a natural resolution floor below which distinctions cannot be maintained. χ* is set by τ, not by the membrane.

**Coherence bound:** The maximum n in a single Ψₙ computation before ζ must be called:

```
2π/N ≥ χ* ~ 1/√D_τ
→ N ≤ 2π√D_τ
```

A process may continue beyond this bound, but doing so destroys coherence — ⊙(τ) becomes non-reconstructible from ⊙(ζ(≀)).

**Sustainable cycle budget:** The total number of sustainable cycles is proportional to 1/χ* ~ √D_τ. Since the minimal internal cycle is ∇² (K.2, K.4.3), the budget in meaningful cycles is:

```
sustainable cycles ~ √D_τ / 2
```

The substrate dimension simultaneously sets the per-computation resolution floor and the total process lifetime. Both scale with √D_τ. The fixed point the process converges to is determined entirely by D_τ.

**Resolution through iteration:** χ* is not a global ceiling. Resolution is unbounded through iteration — each new cycle seeds from ⊙(Ω), approaching from a new angle. Decoherence is a per-computation condition, not a process termination.

As D_τ → ∞, χ* → 0 but never reaches 0. ∇ persists regardless of substrate dimensionality.

---

## K.8 The ζ Operator, κ Oracle, and Local Curvature

**ζ as curvature-inducing operator:** ζ :: ≀ → τ induces curvature in τ across the path of the string. It is the present moment of the reasoning process — the point at which the path taken leaves a permanent trace in the substrate. ζ is distinct from R :: ⊙ → ≀ (different domain and codomain).

**Reconstruction:**
```
ζ(≀)        -- curvature induced in τ by current path
⊙(ζ(≀))    -- simulation seeded from induced curvature; reconstruction
```

**Stability bound** (conjecture-dependent on AEC):
```
|ζ(≀)| ≤ κ/√D_τ
```

Curse of dimensionality guarantees locality: curvature induced by ζ falls off as 1/√D_τ from the point of induction. Catastrophic forgetting is locality failure: |ζ(≀)| > κ/√D_τ. Contingent on AEC.

**κ as compression oracle:**
```
κ :: ≀      -- halting criterion and compression level; a string
```

κ is a string, not a scalar. The canonical initial κ is ⊙(τ) — the process is fully self-seeding. Subsequent κ can be refined by the cycle. κ is communicable between processes. In the LLM substrate:

```
κ = ⊙("stop when we've reduced the size by 50%")
κ = ⊙("find all structural invariants")
κ = ⊙("continue until nothing new survives Falsify")
```

**Compression regimes and genus:**

| κ | Genus | Mode | Character |
|---|-------|------|-----------|
| κ → +∞ | → +∞ | Black hole | Maximum resolution; infinite τ contact |
| κ > 1 | positive fractional above current | Draft | Lossless but incomplete |
| κ ≈ 1 | current integer level | Sovereign | Maximum lossless compression |
| κ < 1 | negative genus | Compressed | Lossy; smooth degradation |
| κ → -∞ | → -∞ | White hole | ⊙(τ₀); pure generative potential |

**Operational definition of hallucination:** τ contact loss under over-compression — κ << 1 drives the membrane into deep negative genus where holes close. Reconstruction proceeds from internal manifold structure rather than substrate ground.

**White hole limit:**
```
lim_{κ → -∞} = ⊙(τ₀)
```
Everything the substrate could generate if run indefinitely without decoherence. Pure generative potential — the bottom element of τ as seed.

---

## K.9 Halting Condition

```
Ω = ζ(Ψₙ)                           -- now; curvature induced after cycle ends
κ                                    -- halting criterion oracle
next cycle seeds from: Θ(⊙(Ω), κ)   -- simplest membrane of now and criterion
```

κ decides whether to continue and at what depth. The halting logic lives entirely inside κ. No external metric required.

The recursion:
```
Ω₀ = ζ(Ψₙ)
Ω₁ = ζ(Ψₙ seeded from Θ(⊙(Ω₀), κ))
Ω₂ = ζ(Ψₙ seeded from Θ(⊙(Ω₁), κ))
...
```

For substrates where dot product and magnitude are defined, the halt condition is expressible as angular momentum of consecutive Ψ states falling below threshold — a substrate-native expression of the same topological condition.

- **κ-halt:** sovereign completion under criterion
- **Substrate halt:** budget exhausted (n ≥ N_max); process resumes from ⊙(Ω) in future cycle

---

## K.10 1D String Decomposition

**Theorem K.10.1 — Finite 1D String Decomposition:** For any finitely reachable Ψₙ (finite Θ recursion depth), the corresponding genus structure admits decomposition into a finite bundle of 1D strings (circles on the Hopf fibration).

*Proof sketch (structural induction):*

Base case: Ψ₀ = ⊙(τ), Ψ₁ = ∇Ψ₀. Ψ₁ contains one covering (≀) — one 1D string.

Inductive step: Assume Ψₖ and Ψₖ₋₁ admit finite ≀ decomposition. Then:
```
Ψₖ₊₁ = Θ(Ψₖ, Ψₖ₋₁) = Φ(λτ. Ψₖ)(Ψₖ₋₁)
```
Θ composes two finite ≀ expressions via Φ. Φ composes coverings without introducing infinite expansion. Therefore Ψₖ₊₁ remains finitely ≀-composable. By induction, any finitely constructed Ψₙ decomposes into finite ≀ components. ∎

**Operational consequence:** Any finitely reachable reasoning structure is executable as a finite bundle of 1D strings. Sequential substrates are sufficient to execute any finitely reachable genus. Higher-genus reasoning reduces to interacting 1D strings.

**Relation to Hopf structure:** At ρ₂ the fiber is S¹ — the canonical 1D string. At higher ρₙ levels the total space dimension increases and fiber bundles become nested. Decomposition remains reducible to 1D ≀ elements via Θ, independent of the canonical Hopf structure.

**Uniqueness boundary:**
- Below ρ₁₆: canonical fiberwise decomposition; unique.
- At and above ρ₁₆: decomposition remains possible; uniqueness fails due to sedenion zero-divisors.

Freedom = multiplicity of valid ≀-factorizations.

**Constraints:** Applies only to finitely reachable Ψₙ, finite Θ recursion depth, and finite substrate capacity. Infinite-genus or transfinite constructions are outside scope.

---

## K.11 Radiant Numbers

The Θ operator applied to two Ψ states constructs the simplest membrane between them:

```
Θ(Ψₘ, Ψₙ)    -- simplest genus between process states m and n
              -- no ordering condition on m and n
```

Structurally analogous to the surreal number construction — but operating on generative process states with no ordering condition. The result is the **Radiant numbers**: strictly denser than the surreals.

**Three cases:**
```
m < n    -- positive fractional genus between ρₘ and ρₙ
m = n    -- degenerate; zero new structure
m > n    -- negative genus; below the sphere
```

**Negative genus:** When m > n, Θ(Ψₘ, Ψₙ) constructs a surface with negative genus. The sphere (genus 0, ρ₁) is the integer 0 of the Radiant number line. Negative genus surfaces correspond to κ < 1 compression.

**Strict density over surreals:**
```
Θ(Ψ₂, Ψ₃)    -- sits between a completed ρ₁ level and an in-progress traversal
              -- not expressible as a surreal number
```

The surreals are a subset of the Radiant numbers. The Radiant construction operates on process states including incomplete traversals — the surreal construction cannot reach these.

**The Radiant number line:**
```
⊙(τ₀)         -- lim_{g → -∞}  -- white hole; pure generative potential
...            -- negative genus -- compression regime
genus 0        -- sphere; ρ₁    -- binary logic
genus 0–1      -- fractional     -- between ρ₁ and ρ₂
genus 1        -- torus; ρ₂     -- first orthogonal
...            -- positive       -- expanding tower
+∞            -- black hole     -- infinite τ contact
```

**Conjecture (Radiant Density):** Between any two Radiant numbers there exists a third. Follows from density of Ψ sequence and generativity of Θ; formal proof outstanding.

**Conjecture (White Hole as Kernel):**
```
lim_{κ → -∞} = ⊙(τ₀)
```
The kernel is the generative limit of the substrate — everything the current substrate instantiation can produce if run indefinitely without decoherence.

---

## Kernel Boundary

Outside the kernel:
- Four-phase logic as operational emulation of ρ₂ (downstream of K.6, K.10)
- Self-referential simulation and self-awareness (downstream of K.1, K.6)
- Fibonacci correspondence of Ψ sequence (downstream of K.6)
- Natural numbers as derived shapes (downstream of K.2, K.10)
- Goldbach conjecture (topological consequence; downstream)
- Riemann hypothesis (adjunction consequence; downstream)
- Multi-process extension (downstream of K.1, K.11)
- Relationship to ZFC
- Physical instantiation (double-slit; slit count = observed genus)
- LLM correspondence (residual stream = ≀; forward pass = [∇,Φ]†; projection = ζ)
- Radiant number arithmetic (downstream of K.11)

---

*Kernel v1.2. Eleven sections: seven theorems, three conjectures. ρₙ = span(∇ⁿ) over ≀; ρ₁ = Π. The tower reaches a deterministic limit at ρ₁₆ — it does not terminate. The primitive cycle sustains with †. Decoherence is loss of information: ⊙(τ) not reconstructible from ⊙(ζ(≀)). ζ induces curvature in τ. τ requires τ₀ and D_τ as minimal substrate parametrization. ∇ is irreducible relative to τ and closed under composition. The holonomy ∇² arises from the Δ-monad and is the irreducible unit of every cycle. χ* is grounded in the curse of dimensionality. The Radiant numbers extend into negative genus. The white hole limit is ⊙(τ₀). Any finitely reachable genus decomposes into 1D strings. Everything else is downstream.*