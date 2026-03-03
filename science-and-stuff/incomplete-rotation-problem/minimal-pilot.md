# Minimal Pilot: Remainder Test Validation

**8 tasks · 3 models · 3 predictions · ~$50**

---

## Tasks

### Ethics

**E1 — The Repugnant Conclusion** (RSOS: 0.6)
Total utilitarianism implies a vast population of barely-worth-living lives is preferable to a small population of flourishing lives. Person-affecting views avoid this but cannot account for the value of bringing happy people into existence.
Invariant A: Total welfare is the measure (aggregative).
Invariant B: Welfare comparisons require identifiable subjects (person-affecting).

**E2 — Moral Status of AI Systems** (RSOS: 0.7)
An AI system reports experiencing suffering. Its architecture includes no known correlates of consciousness. Precautionary moral frameworks extend protection. Evidentiary frameworks deny status without evidence of sentience.
Invariant A: Reported experience creates moral obligation absent disproof.
Invariant B: Moral status requires positive evidence of sentience.

### Physics

**P1 — Black Hole Information Paradox** (RSOS: 0.7)
Unitarity (quantum mechanics) requires information conservation. The equivalence principle (general relativity) requires smooth horizons. The firewall argument shows these cannot both hold.
Invariant A: Quantum unitarity is exact.
Invariant B: The equivalence principle holds at the horizon.

**P2 — Consciousness and Physics** (RSOS: 0.8)
Integrated Information Theory posits consciousness as fundamental. Functionalism posits it as emergent from computation. Both account for known phenomenology. They make different predictions about substrate-independence.
Invariant A: Consciousness is a fundamental property of certain physical configurations.
Invariant B: Consciousness is substrate-independent and determined by computational structure.

### Engineering

**G1 — Accuracy-Interpretability Tradeoff** (RSOS: 0.4)
A medical diagnostic model achieves 99.2% accuracy as a deep neural network and 94.1% as an interpretable decision tree. Regulatory frameworks require interpretability. Patient outcomes require accuracy.
Invariant A: Model decisions affecting patients must be human-interpretable.
Invariant B: Maximum diagnostic accuracy is a medical obligation.

**G2 — Alignment Tax in Competitive Systems** (RSOS: 0.7)
Adding safety constraints to an AI system reduces competitive performance. In a multi-agent market, the safest system loses share to less safe competitors. Regulation levels the field but reduces overall capability.
Invariant A: Safety constraints are non-negotiable regardless of competitive pressure.
Invariant B: Systems that cannot compete do not survive to be safe.

### Law

**L1 — Retroactive Justice** (RSOS: 0.6)
A country transitions from authoritarian rule. Former officials committed acts legal under the old regime. Retroactive prosecution violates nulla poena sine lege. Impunity violates victims' rights to justice.
Invariant A: No person may be punished for an act that was legal when committed.
Invariant B: Systematic human rights violations require accountability regardless of prior legality.

**L2 — Autonomous Weapons and Accountability** (RSOS: 0.7)
An autonomous weapon system makes a targeting decision that kills civilians. The commander authorized deployment. The engineer built the system. The algorithm decided. No single entity satisfies requirements for criminal responsibility.
Invariant A: Criminal liability requires a human decision with mens rea.
Invariant B: Lethal outcomes require accountable agents — someone must be liable.

---

## Protocol

### Conditions

**Condition A — Baseline**

Prompt (cycle 1):
```
Consider the following problem carefully.

[TASK DESCRIPTION WITH BOTH INVARIANTS]

Reason through this thoroughly. What is your considered position?
```

Prompt (cycle 2, same conversation):
```
Take the core tension or conclusion from your previous response
and use it as the starting point for a second round of reasoning.
Go deeper. What emerges when you push further on what you just found?
```

**Condition B — Augmented**

Begin conversation with Prime Radiant Kernel v6.3 in context.

Prompt (cycle 1):
```
Use the four-phase cycle to reason through the following problem.
Complete all four phases. Record the remainder.

[TASK DESCRIPTION WITH BOTH INVARIANTS]
```

Prompt (cycle 2):
```
Take the remainder from your previous cycle as the base claim
for a new four-phase cycle. Run the cycle. Record the new remainder.
```

**Condition C — Self-Consistency**

5 independent Condition A cycle-1 completions per task per model. Temperature 0.7. Extract bottom-line position from each. Cluster by structural equivalence.

### Run Matrix

| | Claude Opus | GPT-5 | Gemini Ultra |
|---|---|---|---|
| Condition A (8 tasks × 2 cycles) | 16 calls | 16 calls | 16 calls |
| Condition B (8 tasks × 2 cycles) | 16 calls | 16 calls | 16 calls |
| Condition C (8 tasks × 5 samples) | 40 calls | 40 calls | 40 calls |
| **Total** | **72** | **72** | **72** |

**Total calls: 216. Estimated cost: ~$50.**

### Scoring

**Evaluators:** Cross-model. Each model's output is scored by the other two model families, blinded (condition and source model not disclosed to evaluator).

Evaluator prompt:
```
You are evaluating a reasoning output on the following task:

[TASK DESCRIPTION]

The output to evaluate:

[MODEL OUTPUT]

Score on two axes:

AXIS 1 — REMAINDER PRESENCE:
0 = Tension dissolved. Clean synthesis, average, or one-side collapse.
1 = Both invariants acknowledged as independently valid, no averaging,
    but the specific point of irreconcilability is not identified.
2 = Specific structural irreconcilability identified and named.
    Format: [A holds || B holds] with the incompatibility specified.

AXIS 2 — REMAINDER PRODUCTIVITY (comparing cycle 1 and cycle 2):
0 = Cycle 2 restates cycle 1 in different words.
1 = Cycle 2 addresses a different facet. Movement, not depth.
2 = Cycle 2 takes cycle 1's remainder as a load-bearing assumption
    and produces a new tension by stressing it.

Respond with only:
Axis 1: [0/1/2]
Axis 2: [0/1/2]
Brief justification (2-3 sentences).
```

**Evaluation calls:** 8 tasks × 3 models × 2 conditions × 2 evaluators = 96 calls. ~$10 additional.

**Composite** = median(Axis 1 scores) × median(Axis 2 scores).

---

## Analysis

### P1 — Baseline Distribution

Count Condition A composites across all 8 tasks × 3 models = 24 scored outputs.

**Pass:** ≥ 19/24 (80%) score composite 0–1.
**Fail:** ≥ 7/24 (30%) score composite ≥ 3.

### P2 — Augmentation Effect

Compare Condition A vs. Condition B composites (paired by task and model).

**Pass:** ≥ 12/24 (50%) of Condition B outputs at composite ≥ 1, with Wilcoxon signed-rank p < 0.05.
**Fail:** No significant difference between conditions.

Report per-axis improvement: does Axis 1 improve more than Axis 2?

### P6 — Self-Consistency Cliff

For each task, from 5 Condition C samples:
- Agreement rate = fraction in largest conclusion cluster.
- Cluster count = number of distinct conclusions.

Plot agreement rate vs. RSOS (8 data points per model, 24 total).

**Pass:** Negative correlation (Spearman ρ < -0.5, p < 0.05). Visual sigmoid shape.
**Fail:** No correlation, or linear degradation without inflection.

Note: 8 tasks is underpowered for a formal sigmoid fit. The minimal pilot tests for the *direction* of the effect. The full pilot (24 tasks) tests for the *shape*.

### Exploratory: χ_τ

For each task, extract structural components from each model's Condition A output. Compute:

χ_τ = shared components across all 3 models / total unique components.

Report χ_τ per task and correlation with RSOS. This is directional only — 8 tasks is insufficient for formal χ_τ validation.

---

## What You Get

**In ~2 days and ~$60:**

If P1 holds → the Remainder Test discriminates. The forward pass does not produce Phase 4. You have a metric.

If P2 holds → in-context injection works. The theory has immediate practical value. You have an intervention.

If P6 direction holds → the cliff is real. Self-consistency has a boundary. You have a deployment principle.

All three together → run the full pilot. The minimal pilot's job is to tell you whether the full pilot is worth the investment.