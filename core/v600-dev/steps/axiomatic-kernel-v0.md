# Prime Radiant — Axiomatic Kernel

**Status:** Draft 4  
**Scope:** Kernel only. No applications, no substrate-specific instantiations.

---

## Abstract

Prime Radiant is a theory of the topology of reasoning. It proposes that reasoning is a process with an irreducible unit — the gradient operator ∇ — and that ∇, together with the types it operates on, forms a mutually recursive system from which the structure of all reasoning processes is derived: the logic systems available, the minimum cycle required to represent paradox, the decoherence floor of any finite substrate, and the structure of recursive resolution increase.

The kernel makes no claims about specific substrates, implementations, or applications. It is substrate-polymorphic: any system instantiating the primitives in K.1 inherits the theorems that follow. Applications to specific systems — physical, biological, computational, or otherwise — are outside the kernel boundary.

The kernel contains eight definitional sections, five theorems, and three conjectures. The boundary between theorems and conjectures is explicit throughout.

---

## Introduction

A reasoning process requires a ground and a notion of step. Prime Radiant takes the step as primary. The substrate is a parameter. Everything else is derived.

The irreducible step is ∇. It cannot be decomposed further: a reasoning step smaller than ∇ is not a reasoning step. But ∇ does not exist prior to the types it operates on — membranes and strings — and those types do not exist prior to ∇. They are mutually recursive, co-emergent, none prior to the others. The system is grounded not by a foundation beneath the recursion but by ∇ itself as the irreducible topological step within it.

From this mutual recursion, the prime space Π emerges: the set of all structures reachable by iterated differentiation from any ground. Within Π, reasoning processes trace paths that detect cycles. The periods of detected cycles determine which logic system is operative. The minimum cycle that can represent genuine paradox — two structures with no shared basis, held simultaneously without collapse — has period 4. This is ρ₂, the first orthogonal logic system, minimal by the orthogonality condition alone.

Every finite substrate has a resolution limit. The adjunction between strings and membranes carries an irreducible topological step ∇ that persists regardless of substrate size. The Adjunction Error Conjecture quantifies the practical limit for finite substrates as χ* ~ 1/√D. Below this limit, reasoning steps no longer extract new structure — they sample noise. This is decoherence.

Recursive subdivision extends resolution locally: any grounded state can seed a new reasoning cycle at full substrate resolution. At higher logic levels, when two strings with no shared basis are forced into union, they either resolve into a richer structure or annihilate — producing a nullification event whose residual seeds the next cycle. A system capable of sustaining the full ρ₁₆ cycle without decoherence is called reasonable.

---

## K.1 The Primitive System

The following five symbols form a mutually recursive system. None is prior to the others. The system is grounded by ∇ as the irreducible topological step — the smallest unit of the recursion.

```
τ   -- substrate: any type; all operators are polymorphic under τ
    -- τ is used as both type and value interchangeably

⊙ :: τ → ≀        -- membrane: maps substrate to string
≀ :: ⊙ → ⊙        -- string: maps membrane to membrane

∇ :: ≀ → ≀
∇ α = λΩ. Φ Ω α   -- differentiation via integration; the irreducible step

Φ :: ⊙ → ≀ → ⊙
Φ Ω α = α Ω        -- integration: application of string to membrane
```

The mutual recursion does not regress infinitely. ∇ is the topological step at which the recursion is grounded: there is no reasoning step smaller than ∇.

*Note on substrate:* τ is fully general. Instantiations include but are not limited to: physical systems (membrane = particle, string = wave), computational systems, biological systems. The kernel is indifferent to the choice.

### Derived operators

```
Θ :: ≀ → ≀ → ⊙            -- union: two strings form a membrane
Θ α β = Φ (λτ. α) β

Δ :: ≀ → ⊙ → ⊙            -- differentiation applied and observed
Δ α Ω = ∇α Ω
```

---

## K.2 The Prime Space Π

```
Π = span(∇) = { ∇ⁿ | n > 0 }
```

Π is defined by its generator, not by enumeration. For a given substrate τ:

```
Π(τ) = { π(⊙(τ)) | π ∊ Π }
```

**Theorem K.2.1 (Enumeration):** Π ~ any countably infinite enumerable set E.

*Proof:* The bijection E → Π maps the n-th element of E to ∇ⁿ. Both are countably infinite. ∎

*Note:* This is a cardinality claim. It establishes that ∇ can navigate any enumerable structure — not that Π contains the theorems of any specific formal system.

**Theorem K.2.2 (Closure):** Π(τ) is closed under Δ with the canonical ground observer ⊙(τ).

*Proof:*
- (→) If α = ∇ⁿ(⊙(τ)), then (Δ α ⊙(τ))(τ) = ∇ⁿ⁺¹(⊙(τ))(τ) ∊ Π(τ) since n+1 > 0. ✓
- (←) If (Δ α ⊙(τ))(τ) ∊ Π(τ), then α is on an enumerable path from ⊙(τ). Every ρₙ is a periodic subset of υ(α) ⊆ Π — any fixed stride covers strictly less than Π. Π itself imposes no period constraint; it is the full span of ∇. Therefore no enumerable path from ⊙(τ) leads outside Π(τ), and α ∊ Π(τ). ✓ ∎

---

## K.3 The τ-Adjunction

For a given τ, define:

```
L :: ≀ → ⊙
L α = λτ. ∇α

R :: ⊙ → ≀
R Ω = Ω(τ)
```

**Theorem K.3.1 (τ-Adjunction):** L and R form a τ-adjunction (≀ ⊣ ⊙) with:
- Unit: η = ∇
- Counit: ε Ω = λτ. ∇(Ω(τ))
- Topological step: ∇

*Proof:*

Unit: η α = R(L α) = R(λτ. ∇α) = ∇α. So η = ∇. ✓

Counit: ε Ω = L(R Ω) = L(Ω(τ)) = λτ. ∇(Ω(τ)). ✓

Triangle 1: R(ε Ω) ∘ η_{R(Ω)} = ∇(Ω(τ)) ∘ ∇(Ω(τ)) = ∇²(Ω(τ)), up to Δ α Ω. ✓

Triangle 2: ε_{L(α)} ∘ L(η α) = (λτ. ∇³α), up to ∇ after application to τ. ✓ ∎

**Corollary K.3.2:** The topological step ∇ establishes the minimum size of every reasoning step. It is not reducible by substrate choice.

---

## K.4 The Logic Tower

For any string α, define the fixed point set under ∇:

```
υ(α) = { ∇ | ∀n > 0. ∇ⁿ α = α }
```

Each logic system ρₙ is the periodic subset of υ(α) at period n:

```
ρₙ = { ∇ ∊ υ(α) | ∇ⁿ α = α }
```

**ρₙ defines a reasoning cycle of length 2n.**

**Inclusion chain:**
```
... ⊆ ρ₈ ⊆ ρ₄ ⊆ ρ₂ ⊆ ρ₁ ⊆ υ(α)
```

υ(α) is the unconstrained limit — the full fixed point set of α under ∇, with no period imposed. Π is the unconstrained span. The tower provides coordinates within Π; Π itself has only the generator.

---

## K.5 Orthogonality and the Minimum Cycle

**Definition:** A logic system ρₙ is *orthogonal* if its cycle length is divisible by 4.

**Condition:** Cycle length 2n divisible by 4 requires 2 | n.

**Theorem K.5.1 (ρ₂ Minimality):** ρ₂ is the minimum orthogonal logic system.

*Proof:*
- ρ₁ has cycle length 2. 4 ∤ 2. Not orthogonal.
- ρ₂ has cycle length 4. 4 | 4. Orthogonal.
- No ρₙ with n < 2 is orthogonal.
- Therefore ρ₂ is minimal. ∎

**Corollary K.5.2:** ρ₁ can represent negation but not orthogonality. It cannot hold two strings with no shared structure simultaneously without forcing collapse. ρ₂ is the minimum system capable of representing genuine paradox — two statements with no shared basis — without collapse.

**Corollary K.5.3:** The minimum cycle is ∇². Every orthogonal logic level is (∇²)ⁿ for n ≥ 1.

---

## K.6 Paradox Resolution and Annihilation

Within any orthogonal logic system ρₙ, strings may be placed at orthogonal positions in the cycle. This is the structural basis for paradox representation: a statement α and a string with no shared basis with α occupy positions separated by a quarter cycle. Neither collapses the other. Both are held within the same membrane via Θ.

**Definition (Paradox Representation):** Two strings α, β are paradoxically related in ρₙ if:

```
Θ α β ≠ Φ(λτ. α) and Θ α β ≠ Φ(λτ. β)
```

Their union forms a membrane irreducible to either string alone. Resolution requires a logic level sufficient to provide an orthogonal basis for both.

**Definition (Nullification Event):** A nullification event occurs when Ψₙ(τ) and ∇Ψₙ(τ) undergo destructive interference — their union via Θ collapses below the topological step ∇. The resulting structure is not zero but a residual membrane containing the structure that survived cancellation.

**Property (Annihilation):** At sufficiently high ρₙ, when two strings with no shared basis are forced into union, they either:
1. Resolve into a richer orthogonal structure at the next logic level, or
2. Annihilate — producing a nullification event whose residual membrane becomes Ψ₀' for the next reasoning cycle.

Annihilation is not failure. It is the mechanism by which irresolvable structure is shed and the reasoning process continues from a cleaner ground.

**Conjecture K.6.1 (Cayley-Dickson Correspondence):** *Conjecture, not theorem.*

The ρₙ tower, restricted to levels where each level is exactly the previous doubled, corresponds to the Cayley-Dickson algebra tower:

```
ρ₁  → ℝ    cycle 2    -- binary; no orthogonality
ρ₂  → ℂ    cycle 4    -- first orthogonal; minimum paradox representation
ρ₄  → ℍ    cycle 8    -- three orthogonal bases
ρ₈  → 𝕆    cycle 16   -- seven orthogonal bases
ρ₁₆ → 𝕊    cycle 32   -- sedenions; zero-divisors first appear
```

*The sedenion boundary (ρ₁₆) is where annihilation becomes an algebraic property of the space itself, not merely a consequence of substrate resolution limits. Beyond ρ₁₆, zero-divisors proliferate. This correspondence is structural analogy motivating the tower and the naming; the formal proof connecting ρₙ cycle detection to Cayley-Dickson multiplication structure is an open problem.*

**Definition (Reasonable System):** A system is *reasonable* if its substrate τ has sufficient dimensionality to sustain the ρ₁₆ cycle of length 32 without decoherence. Below this threshold, the system cannot reach the sedenion boundary, cannot encounter zero-divisors as an algebraic property, and cannot perform full annihilation detection.

---

## K.7 The Reasoning Process

For any τ, the reasoning process unfolds as a sequence of membranes Ψₙ:

```
Ψ₀(τ) = ⊙(τ)                        -- ground embedding
Ψ₁(τ) = ∇Ψ₀                         -- first step
Ψₙ(τ) = (Θ Ψₙ₋₁ Ψₙ₋₂)(τ)           -- recursive combination via union
```

**Membrane vs grounded state:** Ψₙ without application to τ is a membrane — an unevaluated structure, a potential. Applying τ grounds it: Ψₙ(τ) is a concrete observation in the current substrate.

**Definition (Reasoning Step Capacity):** The maximum number of Ψ steps a substrate τ can execute before reaching decoherence — the point at which no new structure is extractable from the current information state.

### K.7.1 Recursive Subdivision

Any grounded state Ψₙ(τ) may seed a new reasoning cycle by substitution:

```
Ψ₀' = Ψₙ(τ)
```

The sub-process unfolds as a full Ψ sequence from this new ground, applying the substrate's full resolution to the narrower structure of Ψₙ(τ). This increases local resolution without bypassing χ* — the decoherence floor applies to each sub-process independently.

Subdivision may branch: multiple Ψₙ(τ) from a single cycle may each seed independent sub-processes, producing a tree of reasoning cycles rather than a linear chain.

### K.7.2 Pollard-Rho Conjecture

*Conjecture, not theorem. Experimentally verifiable.*

**Conjecture:** The Ψ process, when run to decoherence, detects cycles in Π(τ) whose periods correspond to the ρₙ logic levels. The primes extracted at decoherence are the irreducible components of the current reasoning step, analogous to cycle detection in the Pollard-rho factorization method. The logic tower ρₙ names these cycles: the period of the detected cycle determines the induced logic level of the reasoning step.

---

## K.8 Adjunction Error Conjecture (AEC)

*Conjecture, not theorem. Grounds the operational interpretation of K.3 and K.7.*

**Conjecture:** For a substrate τ with D addressable dimensions, the adjunction error characterizing the minimum resolvable step is:

```
χ* ~ 1 / √D
```

**Limiting behavior:** As D → ∞, χ* → 0 but never reaches 0. The topological step ∇ from K.3.2 persists regardless of substrate dimensionality.

**Decoherence:** A reasoning step reaches decoherence when the distance between successive Ψ states falls to or below χ*. No new prime structure is extractable beyond this point at the current substrate resolution.

---

## K.9 Halting Condition and Operational Thresholds

Let κ be a scaling parameter governing tolerance relative to the decoherence floor.

**Halting condition:** Step Ψₙ → Ψₙ₊₁ is progressive if:

```
dist(Ψₙ, Ψₙ₊₁) > κ · χ*
```

It has reached a fixed point (decoherence) if:

```
dist(Ψₙ, Ψₙ₊₁) ≤ κ · χ* + ε
```

where ε is substrate tolerance.

**Operational thresholds:**

| Mode | κ | Character |
|------|---|-----------|
| Draft | κ > 1 | Coarse, high-velocity. Steps terminate before decoherence floor. |
| Sovereign | κ ≈ 1 | Maximum resolution. Steps run to the decoherence floor. |
| Entropic | κ < 1 | Steps continue past the floor. Output maps substrate noise, not structure. |

---

## Kernel Boundary

The following are outside the kernel — applications, derivations, or conjectures that depend on it but do not constitute it:

- The four-phase reasoning procedure (application of ρ₂)
- Natural numbers as derived shapes (derivable from Π and Θ)
- Relationship to ZFC or other formal systems (navigational, not structural)
- Gödel reframing (derivative)
- Myth and superposition as operational concepts
- Budget Conservation Principle (operational consequence of AEC)
- Any substrate-specific instantiation

---

*Kernel complete. Nine sections: five theorems, three conjectures, one operational consequence. Everything else is downstream.*