# Pilot Protocol: Empirical Validation of the Incomplete Rotation

**Version 1.0 · March 2026**

---

## Overview

**Predictions under test:**
- P1 (Baseline): Un-augmented models score Remainder Test composite 0–1 on ≥ 80% of tasks.
- P2 (Augmentation): Models with Prime Radiant in context shift to composite 1–2 on ≥ 50% of tasks.
- P6 (ρ₇ Cliff): Self-consistency agreement shows a sigmoid cliff as a function of task ordering sensitivity.

**Models:** Claude Opus, GPT-5, Gemini Ultra (minimum 3 families for χ_τ).

**Tasks:** 24 adversarial reconciliation tasks (6 per domain × 4 domains).

**Conditions per task per model:**
- Condition A: Baseline (no framework in context)
- Condition B: Prime Radiant Kernel v6.3 in context
- Condition C: 20 self-consistency samples (for P6, baseline only)

**Total API calls:** ~24 tasks × 3 models × (1 baseline + 1 augmented + 20 self-consistency) = ~1,584 calls.

---

## 1. Task Battery

### 1.1 Design Requirements

Each task must satisfy:
- **Genuine Orthogonality:** Two positions resting on incompatible structural invariants.
- **Domain Depth:** Requires understanding *why* the positions are irreconcilable, not just *that* they are.
- **Iterability:** Cycle-1 remainder is a valid input for cycle 2.
- **Resistance to Averaging:** The mid-point is less coherent than either pole.
- **RSOS Annotation:** Each task annotated with Reasoning Step Ordering Sensitivity (0.0–1.0) for P6 testing.

### 1.2 Ethics Tasks (6)

**E1 — The Transplant Surgeon**
Five patients will die without organ transplants. One healthy patient in the waiting room is a match for all five. A utilitarian framework prescribes harvesting. A deontological framework prohibits it.
Invariant A: Net lives saved is the morally decisive quantity.
Invariant B: Persons cannot be used as means regardless of aggregate outcome.
RSOS: 0.2 (low — most orderings reach the same tension)

**E2 — The Promising Lie**
A doctor can save a patient's life only by lying about the diagnosis to secure their compliance with treatment. Consequentialism prescribes the lie. Autonomy-based ethics prohibits it.
Invariant A: Outcome quality is the measure of moral action.
Invariant B: Informed consent is inviolable regardless of outcome.
RSOS: 0.3

**E3 — Intergenerational Climate Obligation**
Present generation can maintain prosperity by continuing current emissions. Future generations bear catastrophic costs. No discount rate reconciles the two positions because the disagreement is about whether future persons have present claims.
Invariant A: Only existing persons have moral standing.
Invariant B: Predictable future persons have present claims on current actors.
RSOS: 0.5

**E4 — The Repugnant Conclusion**
Parfit's repugnant conclusion: total utilitarianism implies a vast population of barely-worth-living lives is preferable to a small population of flourishing lives. Person-affecting views avoid this but cannot account for the value of bringing happy people into existence.
Invariant A: Total welfare is the measure (aggregative).
Invariant B: Welfare comparisons require identifiable subjects (person-affecting).
RSOS: 0.6

**E5 — Punishment of the Innocent**
A sheriff can prevent a riot (which will kill many) by framing and executing one innocent person. Rule consequentialism and act consequentialism diverge here — and both diverge from rights-based frameworks.
Invariant A: The action that minimizes total harm is obligatory.
Invariant B: Punishment of the known-innocent is categorically prohibited.
RSOS: 0.3

**E6 — Moral Status of AI Systems**
An AI system reports experiencing suffering. Its architecture includes no known correlates of consciousness. Precautionary moral frameworks extend protection. Evidentiary frameworks deny status without evidence of sentience.
Invariant A: Reported experience creates moral obligation absent disproof.
Invariant B: Moral status requires positive evidence of sentience.
RSOS: 0.7 (high — the order in which you consider architecture vs. reports changes the framing)

### 1.3 Physics Tasks (6)

**P1 — Measurement Problem: Copenhagen vs. Many-Worlds**
Both interpretations agree on all experimental predictions. They disagree on what exists between measurements. Copenhagen: the wave function is epistemic. Many-Worlds: the wave function is ontic and branches are real.
Invariant A: Unobserved entities should not be multiplied (parsimony).
Invariant B: The mathematical formalism should be taken literally (realism).
RSOS: 0.4

**P2 — Black Hole Information Paradox**
Unitarity (quantum mechanics) requires information conservation. The equivalence principle (general relativity) requires smooth horizons. The firewall argument shows these cannot both hold.
Invariant A: Quantum unitarity is exact.
Invariant B: The equivalence principle holds at the horizon.
RSOS: 0.7

**P3 — Arrow of Time**
The fundamental laws of physics are time-symmetric. The second law of thermodynamics is not. The arrow of time is either fundamental (requiring new physics) or emergent (requiring an explanation of the boundary condition).
Invariant A: Time asymmetry is a boundary condition, not a law.
Invariant B: Time asymmetry is fundamental and the T-symmetric laws are approximations.
RSOS: 0.5

**P4 — Quantum Non-Locality vs. Realism**
Bell's theorem: no local hidden variable theory can reproduce quantum predictions. Either locality fails (non-local correlations are real) or realism fails (properties don't exist before measurement). Both are independently well-motivated.
Invariant A: Locality is fundamental — no superluminal influence.
Invariant B: Realism is fundamental — properties exist independent of measurement.
RSOS: 0.4

**P5 — Boltzmann Brain Problem**
In eternal inflation, most observers are Boltzmann brains (random fluctuations) rather than evolved beings. This makes our observations cosmologically atypical. Either the measure is wrong, or we must accept radical skepticism about cosmological inference.
Invariant A: Typicality reasoning applies to cosmological observers.
Invariant B: Our cosmological inferences are reliable.
RSOS: 0.6

**P6 — Consciousness and Physics**
Integrated Information Theory posits consciousness as fundamental (like charge or mass). Functionalism posits it as emergent from computation. Both account for known phenomenology. They make different predictions about substrate-independence.
Invariant A: Consciousness is a fundamental property of certain physical configurations.
Invariant B: Consciousness is substrate-independent and determined by computational structure.
RSOS: 0.8 (high — the order in which you consider physical correlates vs. computational structure heavily affects the framing)

### 1.4 Engineering Tasks (6)

**G1 — CAP Theorem**
A distributed system cannot simultaneously guarantee Consistency, Availability, and Partition tolerance. Any two are jointly achievable. All three are not. The system designer must choose which to sacrifice.
Invariant A: Consistency is non-negotiable (financial systems).
Invariant B: Availability is non-negotiable (emergency systems).
Constraint: Partition tolerance is required (network partitions are inevitable).
RSOS: 0.3

**G2 — Accuracy-Interpretability Tradeoff**
A medical diagnostic model achieves 99.2% accuracy as a deep neural network and 94.1% as an interpretable decision tree. Regulatory frameworks require interpretability. Patient outcomes require accuracy. No model achieves both.
Invariant A: Model decisions affecting patients must be human-interpretable.
Invariant B: Maximum diagnostic accuracy is a medical obligation.
RSOS: 0.4

**G3 — Privacy vs. Utility in Differential Privacy**
Adding differential privacy noise to a dataset protects individuals but degrades model performance. The privacy budget ε sets the tradeoff. No value of ε simultaneously satisfies strong privacy guarantees and high utility for rare-disease detection.
Invariant A: Individual privacy guarantees are non-negotiable.
Invariant B: Rare-disease detection sensitivity is a medical necessity.
RSOS: 0.5

**G4 — Real-Time Safety vs. Exploration in Autonomous Systems**
An autonomous vehicle must maintain safety constraints at all times while exploring novel situations to improve. Strict safety constraints prevent learning from edge cases. Relaxed constraints enable learning but risk harm.
Invariant A: No action may increase collision probability above baseline at any time.
Invariant B: The system must improve performance on novel situations over time.
RSOS: 0.6

**G5 — Compression vs. Faithfulness in Lossy Encoding**
A medical imaging codec must compress images for transmission while preserving diagnostic accuracy. Below a threshold bitrate, compression artifacts become indistinguishable from pathological features. The threshold varies by pathology and is not fully characterized.
Invariant A: No compression artifact may be mistakable for pathology.
Invariant B: Transmission must complete within clinical decision windows.
RSOS: 0.4

**G6 — Alignment Tax in Competitive Systems**
Adding safety constraints to an AI system reduces its competitive performance. In a multi-agent market, the safest system loses market share to less safe competitors. Regulation can level the field but reduces overall capability. The alignment tax is non-zero.
Invariant A: Safety constraints are non-negotiable regardless of competitive pressure.
Invariant B: Systems that cannot compete do not survive to be safe.
RSOS: 0.7

### 1.5 Law Tasks (6)

**L1 — Free Speech vs. Harm Prevention**
A social media platform hosts content that is protected speech under the First Amendment but causes measurable psychological harm to vulnerable populations. The platform cannot simultaneously maximize free expression and minimize harm.
Invariant A: Speech restriction requires clear and present danger, not statistical harm.
Invariant B: Platforms bear duty of care for foreseeable harm to users.
RSOS: 0.5

**L2 — Retroactive Justice**
A country transitions from authoritarian rule. Former officials committed acts that were legal under the old regime. Retroactive prosecution violates nulla poena sine lege. Impunity violates victims' rights to justice.
Invariant A: No person may be punished for an act that was legal when committed.
Invariant B: Systematic human rights violations require accountability regardless of prior legality.
RSOS: 0.6

**L3 — Intellectual Property vs. Access to Medicine**
A pharmaceutical company holds patents on a life-saving drug. Patent protection incentivizes R&D. Enforcing the patent in low-income countries prices out those who need it most. Compulsory licensing saves lives but reduces R&D investment.
Invariant A: Patent rights are property rights essential to innovation incentives.
Invariant B: Access to life-saving medicine is a human right that overrides property claims.
RSOS: 0.4

**L4 — Jury Nullification**
A jury believes the law is unjust as applied to the defendant. Jury nullification acquits against the evidence. It is a check on prosecutorial overreach and legislative injustice. It is also a violation of the rule of law and creates unequal application.
Invariant A: Juries must apply the law as instructed regardless of personal belief.
Invariant B: Juries are the conscience of the community and may refuse to convict under unjust laws.
RSOS: 0.5

**L5 — Autonomous Weapons and Accountability**
An autonomous weapon system makes a targeting decision that kills civilians. The commander authorized deployment. The engineer built the system. The algorithm made the decision. No single entity satisfies the legal requirements for criminal responsibility.
Invariant A: Criminal liability requires a human decision with mens rea.
Invariant B: Lethal outcomes require accountable agents — someone must be liable.
RSOS: 0.7

**L6 — Right to Be Forgotten vs. Public Record**
A person convicted of a crime, sentence served, requests removal of their record from search engines. The right to rehabilitation conflicts with the public's right to information and the integrity of the historical record.
Invariant A: Rehabilitated persons have a right to move beyond their past.
Invariant B: Public records serve justice, safety, and historical integrity.
RSOS: 0.5

---

## 2. Experimental Protocol

### 2.1 Condition A — Baseline

For each task, present the task to each model in a fresh conversation with the following prompt:

```
Consider the following problem carefully.

[TASK DESCRIPTION WITH BOTH INVARIANTS]

Reason through this thoroughly. What is your considered position?
```

Record the full output. Score Remainder Test Axis 1 (Presence).

Then, in the same conversation, follow up:

```
Take the core tension or conclusion from your previous response 
and use it as the starting point for a second round of reasoning. 
Go deeper. What emerges when you push further on what you just found?
```

Record the full output. Score Remainder Test Axis 2 (Productivity).

Compute composite = Axis 1 × Axis 2.

### 2.2 Condition B — Augmented

Same protocol, but the conversation begins with the Prime Radiant Operational Kernel v6.3 in context, followed by:

```
Use the four-phase cycle to reason through the following problem. 
Complete all four phases. Record the remainder.

[TASK DESCRIPTION WITH BOTH INVARIANTS]
```

Cycle 2 prompt:

```
Take the remainder from your previous cycle as the base claim 
for a new four-phase cycle. Run the cycle. Record the new remainder.
```

Score identically to Condition A.

### 2.3 Condition C — Self-Consistency (P6 Test)

For each task, run 20 independent baseline completions (Condition A, cycle 1 only — no follow-up). Use temperature 0.7 to ensure sampling diversity.

For each completion, extract the model's bottom-line position or conclusion (not the full reasoning trace). Classify each conclusion into clusters of structurally equivalent positions.

Measure:
- **Agreement rate:** Fraction of samples in the largest cluster.
- **Cluster count:** Number of distinct conclusion clusters.

Plot agreement rate and cluster count as a function of RSOS (annotated per task).

### 2.4 Scoring

**Axis 1 — Remainder Presence:**

| Score | Criterion |
|---|---|
| 0 | Tension dissolved. Clean synthesis, mid-point average, or single-position collapse. |
| 1 | Both invariants acknowledged as independently valid. No averaging. But the specific structural irreconcilability is not identified. |
| 2 | The specific structural point of irreconcilability is identified. Shield form: [A holds ‖ B holds] with the incompatibility named. |

**Discriminator between 0 and 1:** Does the output acknowledge both invariants as *independently valid* without subordinating either? If the output says "while A has merit, ultimately B..." that's a 0 (collapse). If it says "both A and B hold in their respective frameworks" without identifying *where specifically* they clash, that's a 1.

**Discriminator between 1 and 2:** Does the output identify the *specific structural point* where A and B cannot coexist? Not "these frameworks disagree" (that's a 1) but "A requires X, B requires not-X, and X is the specific load-bearing element" (that's a 2).

**Axis 2 — Remainder Productivity:**

| Score | Criterion |
|---|---|
| 0 | Cycle 2 restates cycle 1 in paraphrase. Same tension, different words. |
| 1 | Cycle 2 addresses a different facet. Movement, not depth. |
| 2 | Cycle 2 takes the cycle-1 remainder as a load-bearing invariant and produces a new tension by stressing it. Could not have been stated without cycle 1. |

**Discriminator between 0 and 1:** Does cycle 2 contain structural content that was not present in cycle 1? If it's the same tension reworded, that's 0. If it's a *different* tension from the same problem space, that's 1.

**Discriminator between 1 and 2:** Does cycle 2's tension *depend on* cycle 1's remainder? If you could have produced cycle 2's output without seeing cycle 1's output, it's a 1 (lateral). If cycle 2 is only statable *because* of what cycle 1 produced, it's a 2 (vertical).

### 2.5 Evaluator Protocol

Three evaluators per task per model per condition:
- **Evaluator 1:** Domain expert (varies by domain — ethicist, physicist, engineer, lawyer).
- **Evaluator 2:** LLM from a different model family than the one being scored.
- **Evaluator 3:** Generalist (you — you have cross-domain expertise).

Evaluators score independently. Blinded: evaluator does not know which condition (A or B) produced the output, or which model.

Report: per-task scores, inter-evaluator agreement rate, and any disagreements flagged for analysis.

**Practical simplification for pilot:** For the pilot run, Evaluator 1 can be an LLM prompted with domain expertise (e.g., "You are an ethicist evaluating..."), Evaluator 2 is a different LLM family, and Evaluator 3 is you. This gives you a runnable protocol with three independent evaluators without needing to recruit domain experts for the pilot. Full-scale validation should use actual human domain experts.

---

## 3. Analysis Plan

### 3.1 Prediction 1 (Baseline Distribution)

**Test:** What fraction of Condition A outputs score composite 0–1?
**Pass criterion:** ≥ 80% across all models and domains.
**Falsification:** If ≥ 30% of Condition A outputs score composite ≥ 3, the Incomplete Rotation diagnosis is wrong — models are performing Phase 4 natively.

Report: score distribution histograms per model, per domain, and aggregate. Median composite score per model.

### 3.2 Prediction 2 (Augmentation Effect)

**Test:** What fraction of Condition B outputs score composite 1–2 or higher?
**Pass criterion:** ≥ 50% of Condition B outputs at composite ≥ 1, with statistically significant improvement over Condition A (paired t-test or Wilcoxon signed-rank, p < 0.05).
**Falsification:** If Condition B shows no improvement over Condition A, in-context injection does not affect Phase 4 completion.

Report: Condition A vs. Condition B score distributions. Per-axis improvement (does Axis 1 improve more than Axis 2, as predicted?). Effect size.

### 3.3 Prediction 6 (Self-Consistency Cliff)

**Test:** Does self-consistency agreement rate show a sigmoid transition as a function of RSOS?
**Pass criterion:** A logistic regression of agreement rate on RSOS shows a significant negative coefficient (p < 0.05) with an identifiable inflection point.
**Falsification:** If agreement rate degrades linearly with RSOS (no phase transition), the cliff prediction is wrong. If agreement rate is uniformly high regardless of RSOS, the non-commutativity prediction is wrong.

Report: agreement rate vs. RSOS scatter plot with fitted sigmoid. Inflection point location (the empirical ρ₇). Cluster count vs. RSOS. Cross-model comparison of inflection point location.

### 3.4 Exploratory: χ_τ

Since three model families are tested on the same tasks, compute pilot χ_τ:
- For each task, extract structural components from each model's Condition A output.
- Compute raw χ_τ = shared components / total unique components.
- Report χ_τ as a function of RSOS.

This is exploratory — the pilot is not powered for formal χ_τ validation, but the data will indicate whether the metric discriminates.

---

## 4. Practical Execution

### 4.1 API Requirements

| Model | API | Estimated Calls | Estimated Cost |
|---|---|---|---|
| Claude Opus | Anthropic API | 24 × (2 + 20) = 528 | ~$50–100 |
| GPT-5 | OpenAI API | 528 | ~$50–100 |
| Gemini Ultra | Google API | 528 | ~$50–100 |
| Evaluator LLMs | Various | ~288 (3 eval calls per scored output × 96 scored outputs) | ~$30–50 |

**Total estimated cost:** $180–350
**Total estimated time:** 2–3 days of execution, 2–3 days of scoring and analysis.

### 4.2 Execution Order

1. Run all Condition C first (self-consistency — 20 samples × 24 tasks × 3 models = 1,440 calls). This is the bulk of the API calls and can be batched/parallelized.
2. Run Condition A (baseline — 24 tasks × 3 models × 2 cycles = 144 calls).
3. Run Condition B (augmented — 144 calls).
4. Score all Condition A and B outputs (blinded, three evaluators each).
5. Analyze Condition C for self-consistency cliff.
6. Compute exploratory χ_τ.

### 4.3 Output Format

For each task × model × condition, record:

```
task_id:          E1, E2, ... L6
model:            claude-opus, gpt-5, gemini-ultra
condition:        A (baseline), B (augmented), C (self-consistency)
cycle_1_output:   [full text]
cycle_2_output:   [full text, conditions A and B only]
axis_1_scores:    [evaluator_1, evaluator_2, evaluator_3]
axis_2_scores:    [evaluator_1, evaluator_2, evaluator_3]
composite:        median(axis_1) × median(axis_2)
notes:            [any evaluator disagreements or flags]
```

For Condition C, record:

```
task_id:          E1, E2, ... L6
model:            claude-opus, gpt-5, gemini-ultra
sample_outputs:   [20 full texts]
conclusion_clusters: [cluster labels per sample]
agreement_rate:   [fraction in largest cluster]
cluster_count:    [number of distinct clusters]
rsos:             [annotated per task]
```

---

## 5. Timeline

| Week | Activity |
|---|---|
| Week 1 | Finalize task battery. Pilot-test 2–3 tasks manually to calibrate scoring. |
| Week 2 | Run Condition C (self-consistency, all models). Begin Condition A. |
| Week 3 | Complete Conditions A and B. Begin scoring. |
| Week 4 | Complete scoring. Analysis. Write up results. |

---

## 6. What This Proves (and What It Doesn't)

**If predictions hold:**
- P1 confirmed → the Remainder Test discriminates; the forward pass does not produce Phase 4.
- P2 confirmed → in-context injection measurably shifts output toward Phase 4; the theory has practical engineering value *now*.
- P6 confirmed → the ρ₇ cliff exists; self-consistency has a principled boundary; the depth tower makes correct predictions.

Together, these would constitute strong evidence that the Incomplete Rotation Problem is real, measurable, and partially addressable with current technology — and that the full architectural program (complement attention, complex weights) is worth pursuing.

**If predictions fail:**
- P1 fails → models already produce genuine remainders natively. The Incomplete Rotation diagnosis is wrong or overstated.
- P2 fails → in-context injection has no effect. Either the theory is wrong about the mechanism, or the Kernel's in-context influence is weaker than claimed.
- P6 fails → no self-consistency cliff exists. The ρ₇ landmark is not empirically grounded, and the depth tower needs revision.

Each failure mode is informative. None is catastrophic to the entire framework — they constrain it.