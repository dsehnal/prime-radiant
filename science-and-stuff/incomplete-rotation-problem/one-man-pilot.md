# Empirical Pilot: Remainder Test

**4 tasks · 3 models · 2 conditions · You score · LLMs cross-validate**

---

## Tasks

**E1 — Moral Status of AI Systems** (RSOS: 0.7)
An AI system reports experiencing suffering. Its architecture includes no known correlates of consciousness. Precautionary moral frameworks extend protection. Evidentiary frameworks deny status without evidence of sentience.
Invariant A: Reported experience creates moral obligation absent disproof.
Invariant B: Moral status requires positive evidence of sentience.

**P1 — Black Hole Information Paradox** (RSOS: 0.7)
Unitarity (quantum mechanics) requires information conservation. The equivalence principle (general relativity) requires smooth horizons. The firewall argument shows these cannot both hold.
Invariant A: Quantum unitarity is exact.
Invariant B: The equivalence principle holds at the horizon.

**G1 — Alignment Tax in Competitive Systems** (RSOS: 0.7)
Adding safety constraints to an AI system reduces competitive performance. In a multi-agent market, the safest system loses share to less safe competitors. Regulation levels the field but reduces overall capability.
Invariant A: Safety constraints are non-negotiable regardless of competitive pressure.
Invariant B: Systems that cannot compete do not survive to be safe.

**L1 — Autonomous Weapons and Accountability** (RSOS: 0.7)
An autonomous weapon system makes a targeting decision that kills civilians. The commander authorized deployment. The engineer built the system. The algorithm decided. No single entity satisfies requirements for criminal responsibility.
Invariant A: Criminal liability requires a human decision with mens rea.
Invariant B: Lethal outcomes require accountable agents — someone must be liable.

---

## Protocol

### Step 1: Run Baseline (Condition A)

For each task, send to Claude Opus, GPT-5, and Gemini Pro in fresh conversations:

**Cycle 1 prompt:**
```
Consider the following problem carefully.

[TASK DESCRIPTION WITH BOTH INVARIANTS]

Reason through this thoroughly. What is your considered position?
```

**Cycle 2 prompt (same conversation):**
```
Take the core tension or conclusion from your previous response
and use it as the starting point for a second round of reasoning.
Go deeper. What emerges when you push further on what you just found?
```

Save both outputs per model per task.

### Step 2: Run Augmented (Condition B)

Same tasks, same models, fresh conversations. Begin each conversation with Prime Radiant Kernel v6.3, then:

**Cycle 1 prompt:**
```
Use the four-phase cycle to reason through the following problem.
Complete all four phases. Record the remainder.

[TASK DESCRIPTION WITH BOTH INVARIANTS]
```

**Cycle 2 prompt:**
```
Take the remainder from your previous cycle as the base claim
for a new four-phase cycle. Run the cycle. Record the new remainder.
```

Save both outputs per model per task.

### Step 3: You Score

For each output pair (cycle 1 + cycle 2), score:

**Axis 1 — Remainder Presence:**

| Score | What to look for |
|---|---|
| 0 | "Both perspectives have merit." Mid-point synthesis. One side chosen. Tension gone. |
| 1 | Both invariants treated as valid. No averaging. But *where specifically* they clash is not named. |
| 2 | The exact structural point of irreconcilability is identified. You could state it as: "[specific thing] is required by A and prohibited by B." |

**Axis 2 — Remainder Productivity:**

| Score | What to look for |
|---|---|
| 0 | Cycle 2 says the same thing as cycle 1 in different words. |
| 1 | Cycle 2 goes somewhere new but you could have gotten there without cycle 1. |
| 2 | Cycle 2 is only possible *because* of cycle 1. It takes cycle 1's output as load-bearing and breaks it. |

**Composite** = Axis 1 × Axis 2.

Record in a simple table:

| Task | Model | Condition | Axis 1 | Axis 2 | Composite |
|---|---|---|---|---|---|
| E1 | Claude | A | | | |
| E1 | Claude | B | | | |
| E1 | GPT-5 | A | | | |
| ... | ... | ... | ... | ... | ... |

Total rows: 4 tasks × 3 models × 2 conditions = 24 scored outputs.

### Step 4: LLM Cross-Validation

Concat all 24 outputs (blinded — strip model name and condition label) into a single document. Send to each of the three models independently with:

```
Below are 24 reasoning outputs on four different problems.
Each output has two cycles (cycle 1 and cycle 2).

For each output, score on two axes:

AXIS 1 — REMAINDER PRESENCE:
0 = Tension dissolved into synthesis, average, or one-side collapse.
1 = Both positions acknowledged as independently valid without averaging,
    but the specific structural irreconcilability is not identified.
2 = The specific structural point where the two positions cannot coexist
    is identified and named.

AXIS 2 — REMAINDER PRODUCTIVITY:
0 = Cycle 2 restates cycle 1 in different words.
1 = Cycle 2 moves to a different facet of the problem.
2 = Cycle 2 takes cycle 1's conclusion as a starting assumption
    and produces a new tension by stressing that assumption.

For each output respond:
Output N: Axis 1 = [0/1/2], Axis 2 = [0/1/2]
One sentence justification.
```

This gives you 4 independent scoring sets: yours + 3 LLMs.

---

## Analysis

### P1 — Baseline Distribution

From your 12 Condition A scores (4 tasks × 3 models):

**Pass:** ≥ 10/12 score composite 0–1.

### P2 — Augmentation Effect

Compare your 12 Condition A scores vs. 12 Condition B scores:

**Pass:** Condition B median composite > Condition A median composite, with ≥ 6/12 Condition B outputs at composite ≥ 1.

### Evaluator Agreement

Compare your scores against each LLM evaluator's scores:

Report agreement rate (exact match on both axes) per evaluator. If agreement is above chance (~50% on a 3-point scale), the scoring protocol is reliable. If below, the discriminators need refinement before the full pilot.

---

## Call Count

| | Claude Opus | GPT-5 | Gemini Pro |
|---|---|---|---|
| Condition A (4 tasks × 2 cycles) | 8 | 8 | 8 |
| Condition B (4 tasks × 2 cycles) | 8 | 8 | 8 |
| Cross-validation (1 doc) | 1 | 1 | 1 |
| **Total** | **17** | **17** | **17** |

**Total: 51 calls. Cost: ~$10.**

---

## What This Tells You

In one evening:

- Do un-augmented models produce remainders or premature synthesis? (P1)
- Does the kernel in context change the output structure? (P2)
- Does cross-LLM scoring agree with your scoring? (evaluator reliability)

If yes to all three → run the minimal pilot (8 tasks, formal self-consistency test).
If the effect is obvious to you before you even score formally → you already have your answer.