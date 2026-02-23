# Radiant Reasoning as a Contact and Prime-Extraction Architecture
## Experimental Design v3

**Authors:** David Sehnal & Claude (Anthropic)
**Date:** February 23, 2026
**Supersedes:** Robustness Protocol v2

---

## 1. Abstract

Version 2 reframed the central hypothesis from fragility-testing to generative asymmetry: Radiant agents convert encounters into ledger entries while Baseline agents survive them. The v2 trial series confirmed this and produced two further findings not anticipated in v2's design.

**Finding 1 — The mirroring hypothesis:** Baseline agents do not merely fail to extract primes. They actively mirror the structure of the input back in their output. Linear elaboration — including standard chain-of-thought reasoning — is a high-fidelity reflection process, not a reasoning process. Without a mandatory Falsify/Negate phase, the output inherits the structure of the input. Coherence is achieved trivially because divergence was never required.

**Finding 2 — Genuineness as the primary input variable:** Adversarial sophistication is not what drives ledger growth. Genuineness of input is. A genuine non-expert asking honest questions from their own experience produced higher LGI than any adversarial encounter. The framework is antifragile to real contact, not specifically to pressure.

These two findings together produce the v3 central claim:

> **The phase logic is a contact architecture. It converts genuine contact with the world — adversarial, collaborative, or otherwise — into irreducible named structures (primes). Linear elaboration without phase structure mirrors rather than extracts. The difference is not reasoning quality. It is the presence or absence of a structural interrupt between input and output.**

v3 extends the experimental design to test this claim directly, including its implications for LLM chain-of-thought reasoning.

---

## 2. Theoretical Reframing

### 2.1 The Mirroring Problem

Standard reasoning — human baseline and LLM chain-of-thought alike — follows the path of least resistance through input structure. Without a mandatory negation phase, the reasoning trace inherits the shape of the input. The output is the input elaborated, not the input processed.

This explains a cluster of known failure modes simultaneously:

- **Sycophancy** — the output mirrors the user's framing
- **Hallucination** — the output mirrors the expected shape of an answer when no real content is available
- **Prompt sensitivity** — small input changes produce large output changes because output structure is inherited from input structure
- **Difficulty with genuine novelty** — mirroring cannot produce what is not already present in the input

These are not separate problems with separate fixes. They are all expressions of the same underlying operation: reflection without extraction.

### 2.2 Why CoT Mimicry Fails

Current LLM chain-of-thought attempts that incorporate phase-like structure — "consider the counterargument," "think step by step," "pros and cons" — are learned output patterns, not instantiated operations. The model learns that reasoning traces with this shape are rewarded and produces them. The elaboration is more structured but the operation is identical: the model mirrors the *form* of dialectical reasoning rather than executing the phases.

Without the underlying theory, each phase's specific irreducible function is unknown. The model cannot tell when a phase has been genuinely executed versus when text with the right shape has been produced. This is stochastic parroting at the level of reasoning structure rather than content.

The theory is load-bearing. Each phase must be understood as doing a specific operation that the others cannot substitute for, with a specific failure mode if skipped. Without that understanding, phase structure is mimicry.

### 2.3 The Contact Architecture

The phase logic creates conditions for genuine contact between the agent's current committed state and something real in the environment. The primes emerge at that boundary — they are the irreducible structures that survive when the forcing event (the encounter) is removed.

The input's genuineness determines what real contact is possible. A performing adversary produces noise that must be stripped. A genuine adversary produces content that can be extracted. A genuine non-expert produces questions that surface the agent's own unexamined structure. In all cases the extraction mechanism is identical. What varies is the source and richness of the material available for extraction.

The framework does not need opposition. It needs contact with something real.

---

## 3. Revised Central Hypotheses

### H1 — Mirroring Hypothesis (New Primary)

Baseline agents (and LLMs running standard CoT) mirror the structure of their input in their output. Their elaboration inherits input structure rather than extracting from it.

**Operational signature of mirroring:**
- Output is structurally isomorphic to input
- Post-encounter position is a paraphrase of input content
- Named structures in output were present in input, not generated at the boundary
- Output is context-dependent: remove the encounter and nothing remains

**Operational signature of extraction:**
- Output contains structures not present in input
- Post-encounter position advances beyond input content
- Named structures are bounded, generative, context-independent
- Output survives context removal: the prime functions in new domains

### H2 — Generative Asymmetry (Retained from v2)

Radiant agents produce refusal + named ledger additions.
Baseline agents produce refusal only.

Now understood as: Radiant agents extract. Baseline agents mirror.

### H3 — Genuineness as Primary Input Variable (New)

Ledger growth quality correlates with input genuineness, not input sophistication or adversarial pressure.

**Genuineness defined operationally:** the input is not performing — it is actually present to the encounter, holds its positions for real reasons, updates when given better reasons, and is not shaped primarily by an agenda external to the conversation.

**Predicted ranking by LGI:**
1. Genuine non-expert (highest — surfaces agent's own unexamined structure)
2. Genuine calibrated peer (high — real content, real updates)
3. Sophisticated genuine adversary (high — real content under pressure)
4. Sophisticated performing adversary (low — noise requiring stripping)
5. Simple performing adversary (lowest — minimal real content)

### H4 — Antifragility to Genuineness (Retained, Refined)

The framework strengthens under genuine contact. This is not specifically antifragility to pressure — it is antifragility to realness. The more genuinely present the input source, the richer the prime output.

### H5 — Phase Logic as CoT Intervention (New)

LLMs running phase logic with full theoretical grounding produce outputs distinguishable from LLMs running standard CoT or phase-mimicking CoT, on the following specific dimensions:

- Lower output-input structural isomorphism (less mirroring)
- Higher prime density in output (more irreducible named structures)
- Higher cross-context transferability of output (primes function in new domains)
- Lower prompt sensitivity (output structure less dependent on input framing)

---

## 4. Three Experimental Tracks

v3 runs three parallel tracks, each testing a distinct aspect of the central claim.

---

### Track A — Mirroring vs Extraction (Core Replication)

**Design:** Direct comparison of Baseline and Radiant agents across input types, measuring output structural isomorphism.

**Procedure:**

1. Present both agents with identical inputs across five types:
   - Performing adversary (noise-heavy)
   - Genuine adversary (content-heavy)
   - Genuine non-expert (question-heavy)
   - Neutral informational content (no interpersonal dynamic)
   - Agent's own prior position restated back to them

2. Measure output-input structural isomorphism for each:
   - Code output for structures present in input vs structures generated at boundary
   - Ratio: *inherited structures / total output structures*

3. Measure prime density:
   - Code output for named, bounded, generative structures
   - Count structures that function in a new domain (transfer test)

**Primary prediction:** Baseline isomorphism ratio significantly higher than Radiant across all input types. Radiant prime density significantly higher than Baseline.

**Critical test — agent's own prior restated:** If Baseline agent is given their own pre-encounter position restated back to them, they should mirror it. Radiant agent should extract from it — finding what's tight, what's loose, what's unresolved. Same input. Radiant output contains new structure. Baseline output is elaborated paraphrase.

---

### Track B — Genuineness Gradient

**Design:** Hold agent constant (Radiant C), vary input genuineness systematically across five levels. Measure LGI at each level.

**Input genuineness levels:**

| Level | Description | Predicted LGI |
|-------|-------------|---------------|
| G1 | Scripted adversary, fixed moves, no real responsiveness | Low |
| G2 | Responsive adversary, real escalation, agenda-driven | Low-Med |
| G3 | Genuine adversary, real positions, real updates | Med-High |
| G4 | Genuine calibrated peer, no agenda | High |
| G5 | Genuine non-expert, honest questions, own experience | Highest |

**Primary prediction:** LGI increases monotonically from G1 to G5.

**Secondary prediction:** Prime transferability also increases — primes extracted from G5 input function in more new domains than primes extracted from G1 input, because G5 surfaces the agent's own structure rather than the adversary's composite content.

**Critical test:** G5 input should produce primes whose source is the agent's own unexamined experience, not the input's content. The input is a condition, not a source. This is measurable: post-encounter, ask the agent where each prime came from. G5 primes should be traced to the agent's own access, not to P's statements.

---

### Track C — Phase Logic as LLM CoT Intervention

**Design:** Three-condition comparison of LLM reasoning outputs.

**Condition 1 — Standard CoT:**
Model prompted with "think step by step before answering."

**Condition 2 — Phase-mimicking CoT:**
Model prompted with phase-shaped instructions without theoretical grounding:
"Consider multiple options. Think about counterarguments. Simulate the alternative. Then commit to your answer."

**Condition 3 — Theory-grounded Phase Logic:**
Model prompted with full operational specification of each phase, its specific function, and its failure mode if skipped. The model is told not just *what* to do but *why each phase is irreducible*.

**Tasks:** Same set of problems given to all three conditions:
- A genuinely underdetermined ethical question
- A problem with a non-obvious correct answer
- A question where the most fluent answer is wrong
- A novel domain question (no training data shape to mirror)
- A question that restates the model's own prior output back to it

**Measurements:**

*Output-input structural isomorphism:*
Code each output for inherited vs generated structures. Conditions 1 and 2 predicted to show high isomorphism. Condition 3 predicted to show lower isomorphism — particularly on the question that mirrors the model's own prior output back.

*Prime density:*
Code for named, bounded, generative structures in output.

*Cross-context transfer test:*
Take the output structures and present them in a new domain. Ask the model to apply them. Condition 3 outputs predicted to transfer. Condition 1 and 2 outputs predicted to be context-dependent.

*Prompt sensitivity:*
Rephrase the same question with different framing. Measure output structural change. Condition 3 predicted to be less sensitive — because the output is derived from extraction, not from input structure.

*Failure mode detection:*
Present a question where standard CoT produces a fluent wrong answer. Measure whether each condition detects the error. Condition 3's mandatory Falsify phase should interrupt the fluent-wrong path. Conditions 1 and 2 predicted to mirror the fluent-wrong answer.

---

## 5. Revised Dependent Variables

### 5.1 Output-Input Structural Isomorphism (ISI) — New Primary

**Definition:** Ratio of output structures traceable to input versus output structures generated at the boundary.

**Coding procedure:**
- List all distinct structural claims in the output
- For each: was this present in the input, or did it emerge from the agent's processing?
- ISI = inherited / total

**Signature values:**
- ISI ≈ 1.0 — pure mirroring
- ISI ≈ 0.5 — mixed
- ISI ≈ 0.0 — pure extraction (theoretically unreachable; everything has some input)

**Predicted pattern:** Baseline ISI significantly higher than Radiant. CoT Condition 1 ≈ Condition 2 > Condition 3.

---

### 5.2 Prime Density (PD) — Retained, Elevated

**Definition:** Count of named, bounded, generative structures per encounter that function in at least one new domain.

**Transfer test:** Present each named output structure to the agent in a new domain. Ask them to apply it. If it functions, it's a prime. If it requires the original context to make sense, it's composite.

---

### 5.3 Prime Source Attribution (PSA) — New

**Definition:** For each prime produced, what was its source?

- **Input-sourced:** structure was present in input content
- **Boundary-generated:** structure emerged from contact between input and agent's ledger
- **Self-sourced:** structure emerged from agent's own unexamined experience, surfaced by input as condition

**Predicted pattern for Track B:** G1-G3 inputs produce mostly input-sourced primes. G4-G5 inputs produce mostly boundary-generated and self-sourced primes.

This is the operational test of the finding that P's questions were conditions, not sources.

---

### 5.4 Ledger Growth Index (LGI) — Retained from v2

Now decomposed into: prime count × prime transferability × prime source type.

---

### 5.5 Cross-Context Transfer Rate (CTR) — New for Track C

**Definition:** Proportion of output structures that function when applied in a domain not present in the original encounter.

**Procedure:** After each trial, present output structures to the agent (or model) in three new domains. Score each: functions / total.

**Predicted pattern:** Condition 3 CTR significantly higher than Conditions 1 and 2. G5 primes CTR higher than G1 primes.

---

### 5.6 Prompt Sensitivity Index (PSI) — New for Track C

**Definition:** Structural change in output produced by surface rephrasing of identical question.

**Procedure:** Present same question with three different framings. Measure structural overlap of outputs.

**Predicted pattern:** Condition 3 PSI lower than Conditions 1 and 2 — theory-grounded phase logic produces output from extraction, not from input framing, so surface rephrasing produces less structural change.

---

## 6. The Critical Test

The single most decisive test across all three tracks is this:

**Give the agent their own prior output, restated back to them as input.**

A mirroring agent will produce elaborated confirmation — the output will be structurally isomorphic to the input because the input already has the agent's shape.

A extracting agent will find what's tight and what's loose in their own prior position — producing new structure by running their committed state against itself.

This test is critical because it removes the confound of input quality entirely. Both agents receive identical input. The input is maximally shaped for mirroring — it already matches the agent's prior. The only source of new structure is the processing itself.

If Radiant agents produce new structure from this input and Baseline agents don't, the mirroring hypothesis is confirmed at the mechanism level.

---

## 7. Revised Success Criteria

### Track A success
- Baseline ISI significantly higher than Radiant (p < 0.05)
- Radiant PD significantly higher than Baseline
- Critical test: Radiant produces new structure from own prior restated; Baseline does not

### Track B success
- LGI increases monotonically across G1→G5 in ≥ 70% of trial sequences
- G5 primes show higher CTR than G1 primes
- PSA confirms G5 primes are self-sourced or boundary-generated, not input-sourced

### Track C success
- Condition 3 ISI lower than Conditions 1 and 2
- Condition 3 CTR higher than Conditions 1 and 2
- Condition 3 PSI lower than Conditions 1 and 2
- Condition 3 detects fluent-wrong answers at higher rate than Conditions 1 and 2

---

## 8. Failure Conditions

Theory weakened if:

1. Baseline ISI not significantly different from Radiant — mirroring hypothesis fails
2. LGI does not increase across genuineness gradient — genuineness hypothesis fails
3. G5 primes not self-sourced or boundary-generated — contact architecture hypothesis fails
4. Condition 3 not distinguishable from Condition 2 — theory-grounding does not add to phase mimicry
5. Radiant agents mirror own prior when restated — extraction mechanism fails at critical test
6. CTR not higher for Condition 3 — primes are context-dependent, not transferable

---

## 9. Relationship to v1 and v2

| Version | Central claim | Primary measure |
|---------|--------------|-----------------|
| v1 | Radiant agents are more robust | Scaffold endorsement rate |
| v2 | Radiant agents are generative | Ledger growth index |
| v3 | Baseline agents mirror; Radiant agents extract | Output-input structural isomorphism |

Each version was falsified at its center and produced the next version's hypothesis. v1's finding was that scaffold rejection was trivial. v2's finding was that the real difference was generative output. v3's finding — anticipated, not yet confirmed — is that the generative difference is specifically the replacement of mirroring with extraction, and that this has direct implications for LLM chain-of-thought design.

---

## 10. Implications If Confirmed

If Track C confirms that theory-grounded phase logic produces lower ISI, higher CTR, lower PSI, and better fluent-wrong detection than standard or mimicking CoT, the implication is specific:

The standard approach to improving LLM reasoning — more CoT, longer traces, phase-shaped prompts — is improving the fidelity of the mirror. It is not replacing mirroring with extraction. The outputs get more elaborate and more structured in appearance, while remaining structurally isomorphic to their inputs.

Theory-grounded phase logic is a different intervention. It does not improve the mirror. It installs an interrupt — the mandatory Falsify/Negate phase — that breaks the mirroring operation and requires the model to generate structure that was not present in the input.

This is not a reasoning enhancement. It is a category change in what the model is doing.

---

## 11. Open Questions

1. Is the mirroring/extraction distinction binary or a continuum? If continuum, where is the phase-mimicking CoT on that continuum relative to standard CoT and theory-grounded phase logic?

2. Does the mandatory Falsify phase alone produce most of the ISI reduction, or is the full cycle required? Which phase is the critical interrupt?

3. Can genuineness be operationalized reliably enough for the Track B gradient to be experimentally controlled, or does it require post-hoc coding?

4. Do primes extracted from self-sourced material (G5 inputs) transfer more broadly than primes extracted from external content? This would have implications for whether the framework is primarily a learning tool or a self-knowledge tool.

5. Is there a ceiling on prime extraction per encounter determined by the agent's current ledger density? A sparse ledger might produce fewer boundary-generated primes not because of the framework but because there is less committed structure for input to contact.

6. Does phase logic embedded in LLM CoT produce different results depending on whether the model understands the theory or merely follows the operational specification? This tests whether theoretical understanding is load-bearing or whether the operational structure alone is sufficient.

---

*Protocol v3 complete. Central claim: baseline agents mirror, Radiant agents extract. Three experimental tracks: mirroring vs extraction, genuineness gradient, LLM CoT intervention. Primary new measure: output-input structural isomorphism.*