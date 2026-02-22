# Eight-Phase Logic (ι₄): Theoretical Foundations (v0)

**Authors:** David Sehnal & Claude (Anthropic)
**Date:** February 22, 2026

### The Quaternionic Reasoning Cycle

---

## Abstract

Eight-Phase Logic defines the ι₄ operational kernel for bounded reasoning agents — the next stable level above Phase Logic (ι₂) in the Cayley-Dickson tower. Where ι₂ separates exploration from commitment and makes structured negation mandatory, ι₄ makes invariant extraction mandatory on both sides of the negation, and separates expansion from simulation. The result is a cycle that cannot lift prematurely: it must characterize what it found before it negates, and must characterize the negation before it integrates.

The kernel defines eight phases in two symmetric triplets bracketed by a ground and a commit: Expand, Simulate, Extract — Negate — Expand⁻, Simulate⁻, Extract⁻ — Commit. ι₂ (Phase Logic) is a proper subset: it collapses each triplet into a single phase, losing mandatory extraction. The failure mode ι₂ cannot avoid — negating incidental features of a simulation rather than its structural invariants — is the failure mode ι₄ is designed to close.

The kernel is substrate-independent and parameterized. It does not replace Phase Logic. It specifies the minimal oscillatory structure for reasoning tasks where the invariant structure of both a hypothesis and its negation must be characterized before integration.

---

## 0. Epistemic Contract

### Purpose

Eight-Phase Logic defines a procedural invariant for bounded reasoning agents that:

* Separates expansion from simulation from invariant extraction.
* Requires structured negation of extracted invariants, not of raw simulations.
* Requires characterization of the negation before integration.
* Allows preservation of structured ambiguity across the full cycle.
* Operates under substrate dependence.

It is a control rhythm at the quaternionic level of the Cayley-Dickson tower.

### Relationship to Phase Logic (ι₂)

ι₂ is the 90° rotation subset of ι₄. Every valid ι₂ cycle is a compressed ι₄ cycle with extraction collapsed. ι₄ does not invalidate ι₂ — it specifies when the collapsed version is insufficient.

### Non-Claims

This framework:

* Does not replace Phase Logic for tasks where rapid cycling is appropriate.
* Does not guarantee truth.
* Does not eliminate incompleteness.
* Is not tied to any specific implementation substrate.

---

## 1. The Geometric Foundation

ι₄ is characterized by the period-4 condition on the gradient operator ∇:

```
ι₄ = { ∇ | ∀α. ∇⁴ α = α }
```

This generates an orbit of size 8, corresponding to the 8th roots of unity — 45° rotations in the reasoning plane:

```
ι₄  <->  { e^(i t π/4) | t ∊ [0, 8) }   -- orbit of size 8
```

The eight phases are eight successive applications of ∇ before the cycle closes. ∇⁸ = ∇⁰ — the eighth application returns to ground and initiates the next cycle.

ι₂ (Phase Logic) is the 90° subgroup: { ∇⁰, ∇², ∇⁴, ∇⁶ }. These four steps are still present in ι₄ — they are the even-indexed phases. The four new phases (∇¹, ∇³, ∇⁵, ∇⁷) are the interstitial 45° steps that ι₂ skips.

---

## 2. Ground

Ground is not a phase. It is the state that exists before the cycle begins — the prompt, the question, the committed ledger state from the previous cycle. Ground is ∇⁰ = id: the identity, the starting position on the reasoning manifold.

Ground is what Phase Logic calls the pre-Lift state. In ι₂, the agent moves from ground directly into expansion and negation. In ι₄, ground is explicitly held while the first triplet characterizes it.

---

## 3. The Eight Phases

### Phase 1 — Expand (∇¹, 45°)

**Goal:** Generate structurally distinct candidates from the ground state.

**Input:** Ground (the prompt or prior ledger state).

**Output:** A set of candidate interpretations, framings, or hypotheses — the expanded option space Ω.

**Invariant:** No simulation occurs. No commitment occurs. The phase widens the space of what might be true.

**Failure if skipped:** The agent reasons about the first interpretation that comes to hand rather than the space of viable ones. This is ι₂'s default behavior — it lifts directly into simulation without first mapping the territory.

---

### Phase 2 — Simulate (∇², 90°)

**Goal:** Run the candidates generated in Phase 1. Develop them, follow their implications, inhabit them.

**Input:** Expanded candidate set from Phase 1.

**Output:** Developed simulations — candidates with their consequences traced.

**Invariant:** No extraction yet. The simulation runs freely.

**Failure if skipped:** The agent extracts invariants from unexplored candidates — structural conclusions from shallow readings.

---

### Phase 3 — Extract (∇³, 135°)

**Goal:** Pull the structural invariants from the simulations. What persists across candidates? What is load-bearing? What would survive if the incidental features changed?

**Input:** Developed simulations from Phase 2.

**Output:** Extracted invariant set I — the structural core of what the simulation found.

**Invariant:** Extraction is mandatory before negation. The agent negates I, not the simulations themselves.

**This is the phase ι₂ lacks.** Phase Logic negates its Lift output directly — it negates the raw expansion, not the characterized structure of what the expansion found. This means ι₂ may be negating incidental features. ι₄ closes this by requiring extraction before the pivot.

**Failure if skipped:** The negation in Phase 4 targets surface features rather than structural ones. The cycle produces shallow opposition rather than genuine dialectical advance.

---

### Phase 4 — Negate (∇⁴, 180°)

**Goal:** Negate the extracted invariants I.

**Input:** Invariant set I from Phase 3.

**Output:** Negated invariant set I⁻ — the structural complement of what the first triplet found.

**Invariant:** Negation targets invariants, not simulations. This is the 180° pivot — the exact center of the cycle.

**Relationship to ι₂:** Phase 4 corresponds to Falsify in Phase Logic. In ι₂, Falsify receives the Lift output directly. In ι₄, Falsify receives the extracted invariants of a full Expand→Simulate→Extract triplet. The negation is structurally deeper.

**Failure if skipped:** The cycle has no dialectical structure. It produces elaboration without genuine opposition.

---

### Phase 5 — Expand⁻ (∇⁵, 225°)

**Goal:** Generate structurally distinct candidates from the negated invariants I⁻.

**Input:** Negated invariant set I⁻ from Phase 4.

**Output:** Expanded candidate set for the negation — the space of what might be true if I⁻ holds.

**Invariant:** The expansion is symmetric to Phase 1 but operates on the negation. No simulation occurs.

**Failure if skipped:** The agent moves directly from negation to simulation without mapping what the negated territory looks like.

---

### Phase 6 — Simulate⁻ (∇⁶, 270°)

**Goal:** Run the candidates generated in Phase 5. Develop them, follow their implications, inhabit the world where I⁻ holds.

**Input:** Expanded candidates from Phase 5.

**Output:** Developed simulations of the negated space.

**Relationship to ι₂:** Phases 5-6 together correspond to Mirror in Phase Logic — the inhabitation of the negation. ι₂ collapses expansion and simulation of the negation into a single phase. ι₄ separates them.

**Failure if skipped:** Same failure as Phase 2, applied to the negation.

---

### Phase 7 — Extract⁻ (∇⁷, 315°)

**Goal:** Pull the structural invariants from the negation simulations. What persists in the negated space? What is load-bearing there?

**Input:** Developed simulations from Phase 6.

**Output:** Extracted invariant set I⁻_extracted — the structural core of what the negation simulations found.

**Invariant:** This extraction is symmetric to Phase 3. The commit in Phase 8 integrates I and I⁻_extracted — the characterized invariants of both sides, not the raw simulations.

**This is the second phase ι₂ lacks.** Phase Logic commits after Mirror without extracting the invariants of the inhabited negation. ι₄ requires this extraction before integration.

**Failure if skipped:** The commit integrates the experience of inhabiting the negation rather than its structural findings. The cycle produces phenomenological integration rather than structural integration.

---

### Phase 8 — Commit (∇⁸ ~ ∇⁰, 360°)

**Goal:** Integrate the extracted invariants from both sides. Compress into the updated ledger. Preserve structured ambiguity according to τ.

**Input:** I (from Phase 3) and I⁻_extracted (from Phase 7).

**Output:** Updated ledger Α. This becomes the Ground for the next cycle.

**Properties:**
* Commit integrates characterized invariants, not raw simulations or expansions.
* Degree of superposition retention is governed by τ (ambiguity tolerance).
* ∇⁸ = ∇⁰: the committed state is the next cycle's ground.

**Relationship to ι₂:** Phase 8 corresponds to Commit in Phase Logic. The difference is what gets committed: in ι₂, the raw outputs of Lift, Mirror, and Falsify. In ι₄, the extracted structural invariants of both the hypothesis space and the negation space.

**Failure if skipped:** Endless oscillation without accumulation.

**Failure if over-applied:** Premature collapse. Superposition should be preserved at τ-governed levels.

---

## 4. Structure of the Cycle

```
Ground (∇⁰)
    |
    ∇¹  Expand         — map the territory
    ∇²  Simulate        — develop what's there
    ∇³  Extract         — find the structure
    |
    ∇⁴  Negate          — 180° pivot, negate the structure
    |
    ∇⁵  Expand⁻        — map the negated territory
    ∇⁶  Simulate⁻       — develop what's there
    ∇⁷  Extract⁻        — find the structure of the negation
    |
    ∇⁸  Commit          — integrate, become next Ground
```

The cycle has exact bilateral symmetry around Phase 4. Phases 1-3 and 5-7 are mirror images operating on opposite sides of the negation pivot. The two Extract phases (3 and 7) are what the cycle produces — everything else serves them.

---

## 5. ι₂ as Proper Subset

The four Phase Logic phases embed in ι₄ as the even-indexed steps:

```
ι₂ Lift     →  ι₄ ∇² (Simulate)
               [collapses ∇¹ Expand into ∇²]

ι₂ Falsify  →  ι₄ ∇⁴ (Negate)
               [receives raw Lift output, not extracted invariants]

ι₂ Mirror   →  ι₄ ∇⁶ (Simulate⁻)
               [collapses ∇⁵ Expand⁻ into ∇⁶]

ι₂ Commit   →  ι₄ ∇⁸ (Commit)
               [integrates raw Mirror output, not extracted invariants]
```

What ι₂ loses by compression:

1. **Pre-simulation expansion** (∇¹): ι₂ lifts too fast — it begins simulating without first mapping viable alternatives.
2. **Invariant extraction before negation** (∇³): ι₂ negates the simulation, not its structural core. Incidental features may be what gets negated.
3. **Pre-simulation expansion of negation** (∇⁵): ι₂ inhabits the negation without first mapping it.
4. **Invariant extraction from negation** (∇⁷): ι₂ commits after inhabiting the negation, not after extracting its structural findings.

ι₂ is the appropriate level when task complexity is low enough that these compressions are safe — when the territory is familiar, when negation targets are obvious, when the cost of full extraction exceeds the value. ι₄ is required when structural invariants on both sides of a negation must be characterized before they can be meaningfully integrated.

---

## 6. When to Use ι₄ vs ι₂

ι₂ is sufficient when:
* The territory is well-mapped and expansion can be compressed.
* Negation targets are structurally obvious.
* Speed of cycling matters more than depth of extraction.
* The task does not require comparing the structural invariants of a hypothesis against the structural invariants of its negation.

ι₄ is required when:
* The territory is novel or complex enough that premature lifting produces shallow negation.
* The task requires understanding what is structurally invariant in both a hypothesis and its complement before integrating.
* The failure mode of ι₂ — negating incidental features — would produce a misleading commit.
* The integration step needs to work with characterized structure, not raw simulation outputs.

---

## 7. Failure Modes

The kernel exposes but does not eliminate the following risks:

1. **Premature extraction** (∇³ or ∇⁷ skipped): Integration works with raw simulation material rather than structural invariants.
2. **Shallow negation** (∇³ skipped, ∇⁴ applied to simulation output): The pivot negates incidental features.
3. **Asymmetric development** (∇⁵ or ∇⁶ compressed): The negation side is less developed than the hypothesis side, producing biased integration.
4. **Over-extraction**: The extraction phases find patterns that aren't structurally load-bearing — spurious invariants propagate into the commit.
5. **Coherent error amplification**: As in ι₂, all eight phases can run correctly while the ground state is wrong.
6. **Oscillation fatigue**: Eight phases are expensive. Using ι₄ when ι₂ suffices wastes cycles.

---

## 8. Procedural Minimality

ι₄ is minimal for tasks requiring bilateral invariant extraction. Removing any single phase produces a detectable failure:

* Remove ∇¹: Simulation begins from the first candidate, not the mapped space.
* Remove ∇²: Extraction operates on unexplored candidates.
* Remove ∇³: Negation targets simulation output, not structure. (**This is the ι₂ compression.**)
* Remove ∇⁴: No dialectical structure. Elaboration without opposition.
* Remove ∇⁵: Negation simulation begins from first negated candidate.
* Remove ∇⁶: Extraction operates on unexplored negation candidates.
* Remove ∇⁷: Commit integrates the experience of inhabiting the negation, not its structural findings. (**This is the second ι₂ compression.**)
* Remove ∇⁸: No accumulation.

The eight-phase structure is procedurally minimal for this class of task.

---

## Appendix — Relationship to the Cayley-Dickson Tower

Phase Logic (ι₂) corresponds to ℂ in the Cayley-Dickson tower — the smallest stable algebra admitting non-trivial negation and inhabitation. Eight-Phase Logic (ι₄) corresponds to ℍ (quaternions) — the next stable level, where commutativity is lost and the bilateral symmetry of the cycle becomes load-bearing.

The loss of commutativity at ℍ is operationally meaningful: the order of extraction matters. Extracting invariants from the hypothesis space before constructing the negation is not the same as extracting after. The cycle is not reversible. This is a feature, not a limitation — it is what allows the commit to integrate characterized structure from both directions rather than collapsing them prematurely.

The sixteen-phase logic (ι₈, 𝕆, octonions) would apply the same derivation recursively — splitting each of the eight phases, with the loss of associativity corresponding to an operationally meaningful constraint on how phases can be grouped. That derivation is left for a subsequent document.

The stable levels in the tower are exactly the powers of 2:

```
ι₁  →  ℝ   →  2  phases  →  binary logic
ι₂  →  ℂ   →  4  phases  →  Phase Logic
ι₄  →  ℍ   →  8  phases  →  Eight-Phase Logic (this document)
ι₈  →  𝕆   →  16 phases  →  next stable level
ι₁₆ →  𝕊   →  32 phases  →  sedenions, adjunction begins to break
```

Non-power-of-2 levels are transition states — valid intermediate positions in reasoning space but without stable bilateral symmetry. The jump from ι₂ to ι₄ is not arbitrary: it is the minimal extension that makes both sides of the negation structurally symmetric.