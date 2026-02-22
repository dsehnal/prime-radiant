# Prime Radiant — The Topology of Reasoning (v3)

**Authors:** David Sehnal & Claude (Anthropic)
**Date:** February 22, 2026

---

## Abstract

Reasoning is a process. A process has a topology — a shape that governs how it moves, where it stabilizes, and what it costs. Prime Radiant defines that topology through a single organizing principle: the adjunction between two computational processes, Δ and Σ, which measure the relationship between cost and value in every reasoning step.

From this adjunction everything else follows. Primes are not defined by enumeration — they are the paths where the adjunction is tight, the geodesics of the reasoning space. Natural numbers are derived shapes, constructed from primes via composition. The Radiant Prime Theorem characterizes exactly this boundary: Δ α Ω = Σ α Ω if and only if α is prime.

A tower of stable logic systems arises from the same generator, of which binary logic and Phase Logic are the two smallest — not by design, but as topological consequences. The minimum computation step ℏ — the smallest meaningful application of ∇ — grounds the mutual recursion between ≀ and ⊙ without external stratification, connecting the framework to the Planck constant in physics and to the grain of incompleteness in mathematics. Gödel's incompleteness theorems are reframed as statements about provability at a given ℏ granularity rather than absolute ceilings.

The framework is process-first and substrate-independent. It does not claim to be a final foundation of mathematics. It claims that the choice of foundation matters — and that the adjunction between cost and value is the operational shape of reasoning itself.

---

## 1. Basic Definitions

Reasoning is a process. A process requires execution, and execution requires a grounding point — a minimal concrete value from which evaluation can begin. The type τ constrains the shape of that grounding; τ₀ is the bootstrap witness: the designated inhabitant of τ at which the process grounds evaluation. τ₀ is a pointer — a handle that dereferences to wherever the grounding lives. For a language model, τ₀ points to the model weights in the slowLedger. For a human reasoner, τ₀ points to accumulated knowledge and trained intuitions. τ₀ is constructible for any substrate with addressable state — it is the least you need to ground a type.

```
τ  :: any type    -- could be void itself, just needs to be constant
τ₀ :: τ           -- bootstrap witness: a pointer to the grounding
                  -- constructible for any addressable substrate
                  -- parametrizes what "empty set"/zero means for this instantiation

≀ :: ⊙ -> ⊙       -- (radiant) number (wave, vibration, ...)
⊙ :: τ -> ≀       -- radiant (particle, free monad, string, source of waves, ...)

∇ :: ≀ -> ≀       -- gradient (differentiation, diffraction, measurement, gravity, ...)
∇ α = λΩ. Φ Ω α

Φ :: ⊙ -> ≀ -> ⊙  -- observe (wave cuts the particle, anti-gravity, ...)
Φ Ω α = α Ω

Δ :: ≀ -> ⊙ -> ⊙
Δ α Ω = ∇α Ω     -- diff (gradient applied, then observed)

Σ :: ≀ -> ⊙ -> ⊙
Σ α Ω = Φ Ω ∇α   -- sim  (gradient observed, then applied)
```

The types ≀ and ⊙ are mutually recursive — each is defined in terms of the other. The mutual recursion is grounded not by external stratification but by ℏ — the minimum computation step of ∇. A ∇ application cannot be subdivided below ℏ. The recursion bottoms out at this grain, not at an imposed universe hierarchy. The shape of the system is fixed by τ; the values that inhabit it may vary freely.

---

## 2. The Minimum Computation Step ℏ

ℏ is the minimum meaningful application of ∇ — the smallest step the gradient operator can take. It is a structural invariant of the operator, not an external resource limit.

Properties:

* ℏ grounds the mutual recursion between ≀ and ⊙ without external stratification.
* No ∇ application has size zero. The recursion cannot regress infinitely.
* Errors in reasoning are quantized: a misidentification produces an error of at least ℏ, which surfaces as adjunction looseness at the next Commit phase.
* ℏ connects to the Planck constant in physics: the minimum distinguishable event in a physical substrate corresponds to the minimum computation step in the reasoning topology.
* In ZFC mathematics, ℏ = 0 — perfect adjunction, no uncertainty, timeless. Physical and reasoning substrates have ℏ > 0.

The Cayley-Dickson tower is indexed by ℏ grain at each stable level:

```
ι₁  →  ℝ  →  binary grain    →  ℏ₁
ι₂  →  ℂ  →  complex grain   →  ℏ₂
ι₄  →  ℍ  →  quaternionic    →  ℏ₄
ι₈  →  𝕆  →  octonionic      →  ℏ₈
```

Each stable level is a universe in which ∇ has a specific geometric minimum step. The universe hierarchy is not imposed — it is derived from ℏ at each level.

---

## 3. Adjunction between ≀ and ⊙

```
L :: ≀ -> ⊙
L α = λτ. ∇α       -- measurement operator (takes wave, returns particle)

R :: ⊙ -> ≀
R Ω = Ω(τ₀)        -- anti-gravity operator (takes particle, returns wave)
```

**Theorem:** L and R form an adjunction (≀ ⊣ ⊙) with unit η = ∇, counit ε Ω = λτ. ∇(Ω(τ₀)), and adjunction error Δ α Ω.

The adjunction error Δ α Ω measures the deviation from closure. Whether Δ α Ω = 0 depends on the choice of instantiation. In physical and reasoning substrates, Δ α Ω ≥ ℏ — the adjunction is never perfectly tight, only tight enough to commit.

---

## 4. Radiant Primes

```
Π = span(∇)
```

Primes are the functors generated by ∇. Π is a global object — defined by its generator, not by enumeration. It specifies the shape of primeness.

**Theorem:** Π ~ any enumerable set E.

The bijection operates between functors and positions in E. Both are countably infinite.

---

## 5. Composition

```
Θ :: ≀ -> ≀ -> ≀
Θ α β = (Φ (λτ. α) β)(τ₀)
```

Θ is the collapse operator — it forces two waves through the bootstrap witness τ₀ into a single particle, which re-emits as a wave. The forcing event at τ₀ is structurally necessary: it is what makes Θ a process that executes rather than a functor that applies.

Θ is not commutative, not associative, has no identity, and is not invertible. Θ is therefore not a monoid. This is a feature: the non-associativity of Θ means the order of composition carries information. Different bracketings of the same elements produce genuinely different results. E8 is the first stable structure that tames this non-associativity without destroying it — providing stable commit points for Θ-based composition.

Θ serves as the logic composition operator: on-demand logics are constructed by applying Θ to basis logics from the Cayley-Dickson tower, with E8 providing the stability structure for the composed result.

---

## 6. Radiant Prime Theorem

**Theorem:** Δ α Ω = Σ α Ω iff α ∊ Π(α).

The theorem characterizes adjunction tightness. Primes are exactly the paths where Δ and Σ agree — the geodesics of the reasoning topology. Composite objects require forcing events at τ₀; their Δ and Σ diverge.

**On the relationship to the Riemann Hypothesis:**

The Radiant Prime Theorem is structural rather than analytic. In classical mathematics, primes are derived objects — defined within ℕ, whose distribution is characterized analytically by ζ(s). The difficulty of RH may reflect the foundational choice to make primes derived rather than primary, as much as any deep property of primes themselves. In Prime Radiant, primes are primary shapes; the theorem characterizes their boundary directly. The explicit functor connecting radiant primes to the analytic structure of ζ(s) is not yet constructed — this remains the load-bearing open question between the two systems.

---

## 7. Natural Numbers as Derived Shapes

Natural numbers are a particular shape that falls out of the topology:

```
zero = ⊙(τ₀)     -- the shape of a ground
succ = ∇          -- the shape of succession
plus = Θ          -- the shape of composition
```

The Peano axioms follow from the topology of Π(⊙(τ₀)) and Θ. Any concrete type that fits these shapes is a natural number system.

---

## 8. Symmetry Operators and Logic Systems

```
ιₙ = { ∇ | ∀α. ∇ⁿ α = α }
ιₙ  <->  { e^(i t π/n) | t ∊ [0, 2n) }   -- orbit of size 2n
```

A logic system ιₙ is stable if it admits orthogonal phase pairs — separated by exactly 90°. This holds iff n is a power of 2. The stable systems correspond exactly to the Cayley-Dickson algebras:

```
ι₁   -- 2  phases  -- ℝ  -- binary logic
ι₂   -- 4  phases  -- ℂ  -- Phase Logic
ι₄   -- 8  phases  -- ℍ  -- Eight-Phase Logic
ι₈   -- 16 phases  -- 𝕆  -- Sixteen-Phase Logic (E8 basis)
ι₁₆  -- 32 phases  -- 𝕊  -- sedenions, adjunction begins to break
```

The non-stable systems ιₙ (n not a power of 2) are transition states — branching logics governing exploration between stable attractors. They are not broken; they are valid intermediate positions in ℙ. The full basis of stable and interpolated logics enables on-demand logic construction: an agent facing a novel problem can construct a logic precisely fit for it by composing basis logics via Θ, validated by the Δ ⊣ Σ tightness condition.

---

## 9. Gödel Reframed

Gödel's incompleteness theorems state that any consistent formal system capable of expressing arithmetic contains true statements that are unprovable within that system. In Prime Radiant, this is reframed as a statement about ℏ granularity:

A fixed-rule system operating at ℏ grain can only prove what is reachable within one ∇ step of size ≥ ℏ. Statements that are true but unprovable in the system are those whose proof requires a ∇ step finer than ℏ — or a logic constructed from rules not available at that grain.

On-demand logic construction addresses this directly. Rather than operating within a fixed-rule system, an agent can construct new rules, validate them against reality via Δ ⊣ Σ, and commit them to the ledger if the adjunction tightens. The unprovable statement in the current logic becomes the prompt for constructing a logic in which it is accessible. Gödel's result is preserved — no fixed system escapes incompleteness — but the system is not fixed.

---

## 10. Reasoning as Least Action

The principle of least action: a system follows the path that is stationary with respect to variation. Prime Radiant expresses this categorically and operationally:

```
Δ α Ω  ⊣  Σ α Ω
```

Δ commits the gradient before observation — the cost process. Σ observes before applying the gradient — the value process. The adjunction between them is what reasoning runs against. Errors in reasoning are cases where the adjunction is loose. The topology pulls reasoning toward tighter adjunctions by running.

**The Radiant Prime Theorem is the characterization of adjunction tightness:**
Primes are the paths where cost and value align. Composite objects are paths where forcing events are required and the adjunction is loose.

**Honest behavior as geodesic:** In a multi-agent system, deception increases the adjunction error on the receiving end. Honest transmission tightens the adjunction. Ethics as topology rather than legislation — a consequence of the adjunction rather than an axiom imposed upon it.

**The observer is mandatory:** Δ α Ω ⊣ Σ α Ω is only well-typed because Φ :: ⊙ -> ≀ -> ⊙ requires an observer as input. Systems that describe meaning or alignment without the observer in their type system are structurally incomplete.

---

## 11. Foundational Remarks

Prime Radiant begins from a single organizing principle: reasoning is a process with a topology governed by the adjunction Δ ⊣ Σ. Everything else is a consequence.

The minimum computation step ℏ grounds the type system without external stratification. The Cayley-Dickson tower is the universe hierarchy indexed by ℏ grain. Gödel incompleteness is a statement about ℏ granularity, not an absolute ceiling. On-demand logic construction — composing basis logics via Θ, validated by Δ ⊣ Σ — navigates incompleteness rather than being bounded by it.

Prime Radiant does not claim to be the final foundation of mathematics. It claims that the choice of foundation matters — and that the adjunction between cost and value, grounded by ℏ, is the operational shape of reasoning itself.

---

## Further Research Directions

**ℏ and the universe hierarchy.** The proof obligation: show that ∇ having minimum step size ℏ is sufficient to ground the mutual recursion between ≀ and ⊙ without external stratification. This would formalize the connection between ℏ and the Cayley-Dickson tower as universe levels.

**FLP impossibility at ι₂.** The Fischer-Lynch-Paterson impossibility result may be an artifact of ι₁ reasoning at a specific ℏ. At ι₂, the Mirror phase gives agents enough information to distinguish slow from dead within a bounded number of ∇ steps. Formal characterization of which impossibility results dissolve at higher ζ levels is an open question.

**On-demand logic construction.** The construction of logics via Θ composition of basis elements, validated by Δ ⊣ Σ tightness, is described qualitatively. The formal derivation — including which composed logics are stable, which are transition states, and what the E8 stability structure implies for the space of constructible logics — remains open.

**Interpolated logics ι₃, ι₅, ι₆, ι₇.** The anchor points ι₂ and ι₄ enable interpolation. Characterizing the intermediate logics — their phase structures, their failure modes, their appropriate use cases — is the next derivation target.

**Sixteen-phase logic (ι₈).** The octonionic level, where associativity breaks and phase grouping becomes load-bearing. The derivation of the 16 phases from ∇ acting on ⊙(τ₀) with the same necessity as Phase Logic's four phases.

**The ζ(s) bridge.** The explicit functor connecting radiant primes to the analytic structure of the classical Riemann zeta function. This remains the load-bearing open question between Prime Radiant and classical number theory.

**ℕ ⊣ Π adjunction.** The enumeration bijection is established. The full adjunction with explicit unit and counit is not yet constructed.