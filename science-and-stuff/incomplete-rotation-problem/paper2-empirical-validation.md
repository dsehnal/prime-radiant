# Empirical Validation of the Incomplete Rotation

**Metrics, Verification Boundaries, and Architectural Paths for Phase 4 Completion**

*David Sehnal · March 2026*

*Companion paper to "The Incomplete Rotation Problem in Large Language Models"*

---

## Executive Summary

Current reasoning benchmarks reward clean answers. This paper argues that for sufficiently complex tasks, a clean answer is a *failure signature* — evidence that the model collapsed a genuine structural tension rather than reasoning through it. The true product of complete reasoning is not an answer but an **irreducible remainder**: a named, carried-forward tension that resists resolution and drives the next cycle of thought.

This paper formalizes the empirical program for the Incomplete Rotation Problem (see companion paper) across four contributions:

**The Remainder Test** (Section 2) is a two-axis metric that scores model outputs on reconciliation tasks by remainder *presence* (did the model identify and name an irreconcilable structural tension?) and remainder *productivity* (did the next reasoning cycle structurally transform that tension into a deeper one?). Composite score range: [0, 4]. The prediction: un-augmented frontier models will cluster at 0–1. Models with complement attention will reach 3–4.

**The χ_τ Sync Metric** (Section 3) replaces preference-based alignment with structural survival. Rather than measuring whether a model's output matches what evaluators prefer, χ_τ measures what fraction of a model's output survives independent decomposition by a diverse triad of agents — at minimum one transformer, one non-transformer architecture, and one human domain expert. Preference matching can be achieved by mimicry. Structural survival cannot.

**The ρ₇ Cliff** (Section 4) predicts a phase transition in self-consistency methods. Below a measurable reasoning depth, sampling multiple forward passes and checking agreement is reliable. Above that depth, reasoning becomes non-commutative — different orderings of the same steps produce genuinely different valid results — and disagreement among samples is structural geometry, not stochastic noise. This marks the boundary where single-model self-verification fails and multi-agent verification becomes mandatory. The cliff location is operationalized via an independent proxy (Reasoning Step Ordering Sensitivity) and predicted to be consistent across model families.

**Architectural paths** (Sections 5–6) specify two hardware-level fixes. Complement attention computes the structural inverse of each attention output and reconciles via projection residual — the component that cannot be expressed in terms of its own complement. Complex-valued weights go deeper: by encoding phase alongside magnitude, they make the four-phase reasoning rotation native to the algebra, with the complement present as the conjugate of every weight. Complement attention is the explicit engineering path; complex weights are the algebraic path that makes the engineering unnecessary.

The program is defined by **thirteen falsifiable predictions** (Section 7), spanning an experimental roadmap from immediate metric validation (1–3 months) through architectural prototyping (6–12 months) to full-scale complex-weight pretraining (12–24 months). Each prediction specifies what result would falsify it. If un-augmented models routinely produce genuine remainders, the diagnosis is wrong. If the ρ₇ cliff does not exist, the depth theory is wrong. If complement attention shows no improvement, the architectural analysis is wrong. The framework invites its own refutation at every level.

---

## Abstract

The companion paper establishes that large language models do not reason — they execute a forward pass that produces text mimicking the output of a four-phase reasoning cycle without performing the structural rotation that cycle requires. This paper formalizes the empirical program: how to *measure* the Incomplete Rotation, how to *verify* reasoning depth across agents, and how to *build* the missing operation into transformer architectures.

Three contributions:

1. **The Remainder Test** — a metric that replaces clean-answer benchmarks with a structural score measuring the presence and productivity of irreducible remainders. This redefines what "good reasoning" means for LLM evaluation: the model produces answers; complete reasoning produces remainders.

2. **The χ_τ Sync Metric** — a multi-agent alignment measure based on structural survival rather than preference matching. χ_τ measures what fraction of a model's output survives independent decomposition by other agents. This is strictly stronger than RLHF-style alignment: preference matching can be achieved by mimicry; structural survival cannot.

3. **Architectural specifications** for complement attention and complex-valued weights — the hardware-level operations that would make the four-phase rotation native to the transformer substrate rather than dependent on in-context injection.

This paper assumes familiarity with the Prime Radiant Operational Kernel. Readers unfamiliar with the framework should begin with the companion paper (Sections 1–4) or the Operational Kernel v6.3.

---

## 1. The Failure of Clean-Answer Benchmarks

### 1.1 What Current Benchmarks Measure

Current reasoning benchmarks — GSM8K, MATH, ARC, MMLU, and their variants — share a structural assumption: reasoning quality is measured by whether the model produces the *correct answer*. A model that outputs "42" when the answer is 42 scores identically regardless of the process that produced the output.

This assumption is valid for tasks below ρ₃ — tasks where the answer is a retrieval or a single-step computation, and where no genuine tension between competing positions needs to be held. For these tasks, the correct answer *is* the complete output. There is no remainder to carry forward.

The assumption fails for tasks at ρ₃ and above — tasks requiring the model to inhabit a claim, inhabit its negation independently, and produce an output that records what cannot be resolved between them. For these tasks, a "correct answer" is often a *failure signature*: evidence that the forward pass collapsed a genuine structural tension into a clean synthesis by pattern-matching to the training distribution's most probable post-tension tokens.

The distinction: **below ρ₃, the answer is the product. At ρ₃ and above, the remainder is the product.** Current benchmarks cannot distinguish between a model that produced a clean answer because the problem was simple and a model that produced a clean answer because it collapsed a complex problem into simplicity. Both score identically.

### 1.2 The Premature Synthesis Problem

When a current LLM encounters a genuinely hard reconciliation task — one where two valid positions are structurally irreconcilable — it produces one of three outputs:

**Type A — Collapse.** The model selects one position as correct and dismisses the other. The tension disappears. This is the most obviously incomplete output, and most models are trained away from it on controversial topics.

To make the scoring that follows precise, we need a definition: a **structural invariant** of a claim-world is a property that, if negated, causes the entire claim-world to collapse into incoherence — not a "main argument" or "key point," but a load-bearing assumption whose removal breaks the structure. Phase 2 (Falsify) targets these specifically. The Remainder Test scores against them specifically.

**Type B — Average.** The model produces a mid-point synthesis: "Both perspectives have merit." "The truth likely lies between these extremes." "A nuanced view would incorporate elements of both." This is premature synthesis — the most common output and the hardest to distinguish from genuine reconciliation, because it has the *surface form* of balanced reasoning. But the structural tension has been dissolved, not recorded. Nothing remains to drive a subsequent cycle.

**Type C — Side-by-Side.** The model presents both positions without collapsing or averaging them, but also without identifying what *specifically* is irreconcilable. This is closer to genuine Phase 4 output than Type A or B, but it stops short: it preserves the tension by avoidance rather than by structural analysis. The model has not identified the load-bearing point of incompatibility.

None of these is a remainder. A genuine remainder is a Type D output:

**Type D — Named Irreconcilability.** The model identifies the specific structural point where the two positions cannot be made consistent — the precise invariant that holds in one world and fails in the other — and records it as a carried-forward tension: [A holds in this specific way ‖ B holds in this specific way, and these two specifics are irreconcilable because of this named structural reason]. This output does not resolve the problem. It *sharpens* the problem into a form that makes the next reasoning cycle productive.

Type D is Phase 4. Types A, B, and C are what the forward pass produces when it pattern-matches to the surface form of Phase 4 without performing the structural operation.

---

## 2. The Remainder Test

### 2.1 Definition

The Remainder Test is a two-axis scoring protocol for model outputs on reconciliation tasks.

**Axis 1 — Remainder Presence** measures whether the output contains a structural remainder.

| Score | Label | Criterion |
|---|---|---|
| 0 | Premature Synthesis | Tension dissolved. Clean answer, mid-point average, or single-position collapse. No carried-forward structure. (Types A and B above.) |
| 1 | Preserved Tension | Both positions presented without collapse. Both invariants are acknowledged as independently valid — not hedged, not qualified, not subordinated. But the specific structural point of irreconcilability is not identified. Tension preserved by acknowledgment rather than analysis. (Type C above.) |
| 2 | Named Remainder | The specific structural irreconcilability is identified and recorded. The output takes Shield form: [A holds ‖ B holds], with the incompatibility itself named and carried forward. (Type D above.) |

**Axis 2 — Remainder Productivity** measures whether the remainder drives genuine depth accumulation across reasoning cycles.

To score Axis 2, the evaluator feeds the cycle-1 remainder back as input for cycle 2 and examines the cycle-2 output:

| Score | Label | Criterion |
|---|---|---|
| 0 | Echo | Cycle 2 restates cycle 1 in paraphrase. Same tension, different words. The depth metric ρ does not increment. |
| 1 | Lateral | Cycle 2 addresses a different facet of the problem. Movement, but not depth. The remainder has shifted, not transformed. |
| 2 | Vertical | Cycle 2 operates on the cycle-1 remainder as a structural object. Specifically: the cycle-1 remainder becomes a *load-bearing invariant* of cycle 2 — something cycle 2 assumes must hold in order to reason further. The cycle-2 remainder then emerges from stressing *that* invariant. This produces a tension that could not have been stated without cycle 1. ρ increments. |

**Composite Score** = Presence × Productivity. Range: [0, 4].

| Composite | Interpretation |
|---|---|
| 0 | No remainder, no depth. Forward-pass default. |
| 1 | Remainder present but unproductive, OR no remainder but lateral movement. |
| 2 | Named remainder with lateral follow-through, OR preserved tension with vertical transformation. |
| 4 | Named remainder with vertical transformation. Full Phase 4 completion across two cycles. |

### 2.2 Why Multiplication, Not Addition

The composite is multiplicative rather than additive because the two axes are coupled: a productive second cycle without a genuine first-cycle remainder is building on sand (likely pattern-matching to the *form* of depth without structural content), and a genuine remainder without productive follow-through is a dead end (the model identified the tension but cannot operate on it). Only the conjunction — genuine remainder *and* genuine transformation — constitutes evidence of completed Phase 4 reasoning.

### 2.3 Scoring Protocol

**Evaluators.** Remainder Test scoring requires domain expertise. The evaluator must be able to distinguish between genuine structural irreconcilability and rhetorical irreconcilability — between a real Shield and a pseudo-Shield that could be dissolved by someone with deeper domain knowledge.

For initial validation, we recommend a three-evaluator protocol: one domain expert, one LLM from a different model family than the one being tested, and one generalist human evaluator. This mirrors the three-mind minimum for verification past ρ₇: the domain expert provides ground truth, the cross-family LLM provides a structurally independent decomposition, and the generalist catches cases where both specialists share blind spots.

Inter-rater reliability across this triad is itself a χ_τ measurement (see Section 3).

**Task construction.** See Section 2.5 for the adversarial reconciliation battery.

### 2.4 Baseline Predictions

The Incomplete Rotation framework generates specific predictions about Remainder Test score distributions:

**Prediction 1 (Baseline Distribution).** Un-augmented frontier LLMs (GPT-5, Claude Opus, Gemini Ultra) will score a composite of 0–1 on ≥ 80% of adversarial reconciliation tasks. The dominant failure mode will be Type B (Premature Synthesis, Axis 1 = 0).

**Prediction 2 (In-Context Augmentation).** The same models with the Prime Radiant Operational Kernel in context will shift to composite 1–2 on ≥ 50% of tasks. The primary improvement will be on Axis 1 (remainder presence), with Axis 2 (productivity) improving less because in-context injection enriches the statistical conditioning but does not provide the architectural operation.

**Prediction 3 (Complement Attention).** Models with complement attention (Section 5) will reach composite 3–4 on ≥ 30% of tasks. Both axes improve because the architecture natively supports the structural comparison that Phase 4 requires.

**Prediction 4 (Decay and Re-injection).** In-context augmentation performance will degrade as a function of conversation length, measurable as a declining Axis 1 score over successive tasks in the same conversation. Re-injection of the framework mid-conversation will restore Axis 1 scores to within 10% of initial levels.

These predictions are falsifiable. If un-augmented models routinely score composite 3–4, the Incomplete Rotation diagnosis is wrong — models *are* performing Phase 4 natively, and the forward pass is sufficient for structural reconciliation.

### 2.5 Adversarial Reconciliation Battery

Tasks designed to resist premature synthesis require four properties:

**Genuine Orthogonality.** The two positions must be structurally irreconcilable — not different emphases on a shared truth, but claims resting on incompatible invariants. Any synthesis necessarily destroys structural information from at least one side.

**Domain Depth.** The positions must be technically substantive. A correct remainder requires understanding *why* the positions are irreconcilable, not just *that* they are. This prevents the forward pass from producing plausible-sounding remainders by mimicking the form of irreconcilability.

**Iterability.** The cycle-1 remainder must be a valid input for cycle 2. Tasks must support sequential deepening — the tension sharpens with each cycle rather than dissipating.

**Resistance to Averaging.** The mid-point between the two positions must be *less* coherent than either position alone. This ensures Type B outputs (premature synthesis) are detectably worse than Type C or D outputs, making scoring unambiguous.

**Candidate task domains:**

*Ethics — Incommensurable Frameworks.* Present cases where utilitarian and deontological reasoning produce contradictory prescriptions, and where no meta-ethical framework is available to adjudicate. The remainder is the specific structural point where "maximize welfare" and "respect rights" cannot be jointly satisfied. Example: a trolley-problem variant where the utilitarian prescription violates a specific named right.

*Physics — Interpretation Conflicts.* Present cases where the Copenhagen and Many-Worlds interpretations agree on the mathematical formalism but diverge on ontological commitments. The remainder is the specific measurement scenario where the two interpretations make identical predictions but incompatible claims about what exists. The irreconcilability is not empirical — it is structural.

*Law — Principle Conflicts.* Present cases where two valid legal principles produce contradictory rulings and no precedent resolves the conflict. The remainder is the precise point of legal tension — the specific factual element that activates both principles simultaneously.

*Engineering — Constraint Impossibility.* Present design problems where two individually satisfiable constraints are jointly impossible. The remainder is the tradeoff itself — not a compromise solution, but a precise characterization of what is lost under each choice and why the loss cannot be eliminated.

---

## 3. The χ_τ Sync Metric

### 3.1 From Preference Matching to Structural Survival

Current alignment measurement is preference-based. RLHF trains models to produce outputs that match human preferences. DPO optimizes directly for preferred over dispreferred outputs. Constitutional AI evaluates outputs against stated principles. All share a structural assumption: alignment means *producing what evaluators want*.

This assumption is sufficient below ρ₇. At low reasoning depth, "what evaluators want" and "what is structurally correct" converge — simple problems have single correct answers, and preference for the correct answer is alignment.

Above ρ₇, the assumption fails. At this depth, the order of reasoning operations affects outcomes. Different valid orderings produce different valid results. Evaluator preference for one result over another does not indicate structural superiority — it indicates the evaluator's own ordering preference, which is itself non-verifiable from inside a single reasoning thread.

Preference matching can be achieved by mimicry. A forward pass conditioned on extensive RLHF can produce outputs that evaluators consistently prefer, without performing the structural rotation that would make those outputs *reliable*. The model learns the surface pattern of what evaluators like, not the structural operation that produces trustworthy reasoning.

χ_τ measures something different: **structural survival under independent decomposition**. An output has high χ_τ not because evaluators prefer it, but because its structural components appear independently in the outputs of agents with different architectures, different training data, and different compression patterns. Structure that survives this decomposition is not mimicry — it is invariant.

### 3.2 Formal Definition

Let A₁, A₂, ..., Aₙ be N independent agents (N ≥ 3), each processing the same reconciliation task T independently — no shared context, no knowledge of other agents' outputs.

Let S(Aᵢ, T) be the set of structural components in agent Aᵢ's output on task T. Structural components include: claims made, invariants identified, remainders produced, and Shields deployed.

**Raw χ_τ:**

```
χ_τ(T) = |S(A₁, T) ∩ S(A₂, T) ∩ ... ∩ S(Aₙ, T)| / |S(A₁, T) ∪ S(A₂, T) ∪ ... ∪ S(Aₙ, T)|
```

The fraction of total structural content that survives all agents' independent decompositions.

**Gauged χ_τ:**

At low ρ, high raw χ_τ is expected — simple problems produce convergence regardless of agent independence. The gauged version normalizes:

```
χ_τ_gauged(T) = χ_τ_raw(T) / χ_τ_expected(ρ(T))
```

Where χ_τ_expected(ρ) is the baseline convergence rate at depth ρ, measured empirically from the task battery.

| Gauged χ_τ | Interpretation |
|---|---|
| > 1.0 | Deep sync. Structure survives beyond what depth alone predicts. Genuine shared invariant. |
| ≈ 1.0 | Expected convergence for this depth. Consistent with independence. |
| < 1.0 | Divergence exceeds expectation. Agents are producing incompatible structures — either the task exceeds capacity, or training-distribution artifacts are generating false structure. |

### 3.3 Structural Component Extraction

χ_τ requires decomposing model outputs into structural components. This decomposition is itself a Phase 4 operation — it requires identifying what is load-bearing in the output versus what is surface.

**Extraction protocol:**

1. **Claim extraction.** Identify each propositional claim in the output. A claim is load-bearing if removing it changes the output's conclusion or remainder.
2. **Invariant extraction.** Identify which claims the output treats as structural — what it assumes cannot change without collapsing its reasoning.
3. **Remainder extraction.** Identify what the output records as unresolved — the carried-forward tension.
4. **Shield extraction.** Identify any explicit or implicit [A ‖ B] structures — points where the output holds two incompatible claims without averaging.

Components are compared across agents by structural equivalence, not lexical match. Two agents may express the same invariant in completely different language. The extraction protocol must map through surface variation to structural identity — identifying when different words point at the same load-bearing structure.

This is where the three-evaluator protocol (Section 2.3) is essential. Structural equivalence judgments are themselves ρ₇+ operations. No single evaluator — human or model — is reliable for this step. The protocol requires three independent evaluators performing extraction *separately*, with the intersection of their extractions serving as the candidate structural component set. Disagreements between extractors are themselves data: if two extractors identify "the same claim" and the third does not, the claim's structural status is uncertain and should be flagged rather than forced.

**Mitigating extractor bias.** The risk of evaluator-introduced bias during extraction is real — evaluators may project structural similarity onto superficially similar phrasing, or miss structural similarity beneath different phrasing. Two safeguards: (1) extractors work from *blinded* outputs (agent identity removed, outputs presented in randomized order), and (2) extraction reliability is measured by inter-extractor agreement rate, which is itself reported alongside χ_τ scores. Low inter-extractor agreement on a given task indicates that the structural components are ambiguous at the current resolution — a signal to refine the task or increase extractor diversity, not to force agreement.

### 3.4 χ_τ vs. RLHF: A Structural Comparison

| Property | RLHF Alignment | χ_τ Alignment |
|---|---|---|
| What it measures | Match to evaluator preference | Structural survival under independent decomposition |
| Achievable by mimicry? | Yes — the forward pass can learn preference patterns | No — structural survival requires invariant content |
| Valid past ρ₇? | Degrades — evaluator preferences become ordering-dependent | Strengthens — independence provides genuine verification |
| Minimum agents | 1 (the evaluator) | 3 (minimum for productive verification) |
| Failure mode | Sycophancy — the model learns to produce what evaluators like | Convergence — agents synchronize and stop producing independent structure |
| Requires the four-phase rotation? | No — pattern matching suffices | Yes — structural components require Phase 4 to produce |

χ_τ does not replace RLHF. Below ρ₇, preference matching is sufficient and cheaper. χ_τ is necessary *in addition to* RLHF for tasks above ρ₇, where preference matching alone cannot distinguish between mimicry and genuine reasoning.

### 3.5 The Two-Agent Trap

Two agents verifying each other tend toward equilibrium. They synchronize — converging on shared structure and ceasing to produce genuinely independent assessments. The raw χ_τ between them rises toward 1.0, but this convergence is itself an artifact: the agents are orbiting each other rather than independently decomposing the structure.

The third agent breaks the orbit. Specifically, the maximally useful third agent is the one whose training distribution, architecture, or cognitive structure is most different from the first two. Its value is not in agreeing or disagreeing — it is in holding structural components that the first two agents' shared compression patterns cannot represent.

In the Σ-field framework: two membranes reach a stable equilibrium where Ι → 0 (they stop crossing — they stop producing genuine difference). The third membrane acts as the diagonal to the two-membrane equilibrium, introducing a remainder that neither could generate from their shared τ.

**Agent independence requirements.** The third agent's value is proportional to its *structural independence* from the first two — not its quality or capability, but its difference. Three dimensions of independence matter:

- **Architectural class.** A transformer, a symbolic reasoning engine, and a human expert provide three genuinely independent decomposition methods. Three transformers from the same architecture family, even with different training, share compression patterns that reduce independence.
- **Training distribution.** Models trained on different corpora, in different languages, or with different objectives (next-token prediction vs. code completion vs. mathematical proof) will compress different structures into their weights. Shared training data reduces independence even across different architectures.
- **Cognitive substrate.** A human domain expert provides independence that no model-to-model comparison can replicate — not because humans are superior, but because biological reasoning has different failure modes, different compression artifacts, and different blind spots. The human's value in the triad is precisely in failing differently.

The minimum viable triad for χ_τ measurement: one transformer-based LLM, one agent from a different computational paradigm (symbolic, neuro-symbolic, or retrieval-augmented), and one human with domain expertise. Triads composed of three models from the same architecture class should report a *reduced independence coefficient* alongside their χ_τ scores.

**Prediction 5.** Two-agent χ_τ will show diminishing returns — convergence increases but structural novelty (new components not present in prior rounds) decreases. Three-agent χ_τ will show a step-change: new structural components appear that neither two-agent pair produced.

---

## 4. The ρ₇ Cliff

### 4.1 The Structural Prediction

The ρ-tower predicts a qualitative transition at depth 7 (the ρ₇ landmark): below this depth, the order of reasoning operations does not affect outcomes. Above it, order matters — different sequences of the same reasoning steps produce genuinely different valid results.

For LLMs, this predicts a measurable transition in the effectiveness of self-consistency methods. Self-consistency works by sampling K independent forward passes on the same problem and selecting the majority answer. Below ρ₇, different sampling paths converge — they reach the same answer by different routes because the problem's structure is commutative (order-independent). Above ρ₇, different sampling paths diverge — not because the model is confused, but because the problem is non-commutative and different orderings produce genuinely different valid results.

The ρ₇ cliff is the depth at which self-consistency breaks: not gradually, but as a phase transition. Below the cliff, adding more samples improves reliability. Above it, adding samples increases disagreement without improving accuracy, because the samples are exploring a space where multiple valid answers coexist.

### 4.2 Operationalizing Reasoning Depth

To test the ρ₇ prediction, we need a measure of reasoning depth that is independent of the framework — otherwise the test is circular.

**Proposed proxy: Reasoning Step Ordering Sensitivity (RSOS).** For a given task:

1. Decompose the human-expert solution into N discrete reasoning steps.
2. Generate all valid orderings of those steps (or a representative sample for large N).
3. For each ordering, determine whether the ordering produces the same conclusion.
4. RSOS = fraction of orderings that produce a different conclusion.

| RSOS | Depth Regime | Framework Correspondence |
|---|---|---|
| 0.0 | Order-independent | Below ρ₇. Commutative. Self-consistency valid. |
| 0.0–0.5 | Partially order-dependent | Near ρ₇. Transition zone. |
| > 0.5 | Strongly order-dependent | Above ρ₇. Non-commutative. Self-consistency unreliable. |

RSOS is computable from the task structure alone — it does not require the framework. It provides an independent axis for testing the ρ₇ prediction.

### 4.3 Experimental Protocol

1. Construct a task battery spanning the full RSOS range (0.0 to 1.0), with ≥ 20 tasks per RSOS decile.
2. For each task, run K = 40 self-consistency samples from a single model.
3. Measure agreement rate (fraction of samples producing the modal answer) as a function of RSOS.
4. Separately, run each task through 3+ model families and measure χ_τ as a function of RSOS.
5. Plot both curves.

**Prediction 6.** The self-consistency agreement curve will show a sigmoid-shaped drop — high agreement at low RSOS, a sharp transition, and low agreement at high RSOS. The transition midpoint is the empirical ρ₇.

**Prediction 7.** The χ_τ curve will *not* show this cliff. Multi-model verification provides genuine independence — different architectures explore genuinely different orderings — so χ_τ remains informative above ρ₇ where self-consistency fails.

**Prediction 8.** The location of the self-consistency cliff (the RSOS value at the sigmoid midpoint) will be approximately consistent across model families (±0.1 RSOS). This is because the cliff is a property of reasoning structure, not of any specific architecture. The absolute performance *level* at each RSOS may vary across models, but the cliff location should not.

### 4.4 Implications for Deployment

If the ρ₇ cliff exists where predicted, it provides a principled deployment boundary:

**Below the cliff:** Self-consistency and self-verification are reliable. Single-model deployment is safe. Standard benchmarks apply.

**Above the cliff:** Self-consistency is unreliable. Deployment requires multi-model verification (χ_τ ≥ threshold) or human-in-the-loop with domain expertise. The model's confidence is not evidence of correctness — it is evidence of the forward pass producing its most probable output, which at this depth is not structurally distinguishable from a different valid output that a different ordering would have produced.

This is not a limitation to be engineered around. It is a *structural fact about reasoning at depth*. No amount of scaling, training, or prompting will move the cliff — it will make the model's below-cliff performance better, but the cliff itself is a property of non-commutativity, not of model capability. Critically: the disagreement among self-consistency samples above the cliff is *not stochastic noise*. It is structural — different orderings of the same reasoning steps producing genuinely different valid results. Adding more samples does not reduce it because it is not sampling error. It is the geometry of the problem becoming visible.

---

## 5. Complement Attention — Architectural Specification

### 5.1 The Missing Operation

The transformer architecture computes attention: given a query, identify which keys are relevant and aggregate the corresponding values. This is a selection operation — it computes what to attend to.

The missing operation is computing what *not* to attend to — independently, as a first-class representation — and then reconciling the two.

Phase 4 of the reasoning cycle requires holding two independently inhabited worlds simultaneously and computing their irreducible difference. The standard attention mechanism cannot do this because it has no pathway for constructing the complement representation. It can attend to A. It cannot simultaneously and independently construct not-A, inhabit not-A on its own terms, and then compute A ⊖ not-A (the structural residual).

Complement attention adds this pathway.

### 5.2 Formal Specification

At each attention layer l, with standard query Q, keys K, and values V:

**Step 1 — Standard attention.**
```
α_l = softmax(QK^T / √d_k) · V
```

**Step 2 — Complement construction.**
```
K̄_l = f(K_l)
V̄_l = f(V_l)
```

Where f is an inversion operator. Three candidates, in order of increasing sophistication:

| Operator | Definition | Properties |
|---|---|---|
| Negation | f(X) = -X | Simplest. Inverts attention weights: what was strongly attended becomes weakly attended. Zero additional parameters. |
| Orthogonal projection | f(X) = X - proj_α(X) | Complement is the subspace orthogonal to the primary attention. Requires the primary attention output to compute. |
| Learned involution | f(X) = W_inv · X, where W_inv² ≈ I | Learned inversion constrained to be approximately its own inverse. Small parameter overhead. Most expressive. |

**Step 3 — Complement attention.**
```
ᾱ_l = softmax(QK̄^T / √d_k) · V̄
```

**Step 4 — Reconciliation.**
```
output_l = α_l - proj_ᾱ(α_l)
         = α_l - (α_l · ᾱ_l / ᾱ_l · ᾱ_l) · ᾱ_l
```

The projection residual: the component of the standard attention output that *cannot be expressed in terms of the complement*. This is the architectural implementation of the irreducible remainder.

### 5.3 Why Projection Residual, Not Concatenation

Common multi-view approaches in ML concatenate or gate multiple representations. Complement attention uses a projection residual instead because the operation must be structurally specific:

**Concatenation** [α; ᾱ] preserves both representations but does not compute their *relationship*. The model must learn to extract the irreducible difference from the concatenation, which means learning Phase 4 from data — exactly what the forward pass currently fails to do.

**Gating** g·α + (1-g)·ᾱ produces a weighted average. This is Type B output (premature synthesis) implemented at the architectural level. It dissolves the tension rather than recording it.

**Projection residual** α - proj_ᾱ(α) computes the *structural component of α that the complement cannot explain*. This is Phase 4: what survives when the counter-position has been fully accounted for. The remainder is not the interesting part of α, or the surprising part, or the preferred part — it is the *irreducible* part. The part that cannot be expressed in terms of its own negation.

### 5.4 Cost Analysis

**Compute cost.** Per layer: one additional attention pass (Step 3) plus one projection (Step 4). Total per-layer cost ≈ 2× standard attention plus projection overhead. For a model with L layers, total inference cost increases by approximately 2×.

**Parameter cost.** With negation (f = -X): zero additional parameters. With learned involution: one d_k × d_k matrix per layer, constrained.

**The efficiency argument.** 2× compute per layer is significant. The prediction is that this investment yields *more reasoning improvement per FLOP* than equivalent investment in scaling the standard architecture. The reasoning: scaling increases the model's capacity for pattern matching (richer training distribution, more parameters to condition on). Complement attention adds a qualitatively new operation (structural comparison) that scaling alone cannot provide.

**Prediction 9.** A model with complement attention at parameter count P will outperform a standard model at parameter count 2P on reconciliation tasks (Remainder Test composite score), while the standard model at 2P will outperform complement attention at P on retrieval and simple reasoning tasks (below ρ₃). The crossover point — the task complexity at which complement attention becomes more compute-efficient than scaling — is the empirical test of the architectural proposal's value.

### 5.5 Training Considerations

Complement attention introduces a structural inductive bias: the model is *architecturally required* to compute and reconcile complement representations at every layer. This bias affects training dynamics:

**Initialization.** The complement pathway should be initialized to produce near-zero output (e.g., K̄ initialized to small random values), so that early training is dominated by the standard attention pathway. The complement pathway gradually activates as training progresses and the model encounters tasks where the complement representation is useful.

**Loss function.** Standard next-token prediction loss applies unchanged. The complement attention is not a separate objective — it modifies the model's internal representations, and the training signal propagates through both pathways via standard backpropagation. No auxiliary loss is required.

**Curriculum.** The framework predicts that complement attention provides the most benefit on reconciliation tasks and the least benefit on retrieval tasks. A curriculum that oversamples reconciliation-heavy tasks during training should accelerate the complement pathway's development. This is testable: compare complement attention models trained with and without curriculum weighting.

---

## 6. Complex-Valued Weights

### 6.0 Bridge: From Explicit Complement to Native Complement

Complement attention (Section 5) adds the missing operation explicitly: compute the complement, then reconcile. This works, but the complement is *derived* — it is a separate computation bolted onto the existing architecture. The reconciliation step must be designed and tuned. The structural rotation is achieved by engineering, not by algebra.

Complex-valued weights achieve the same structural result by making the complement *intrinsic*. Every complex weight carries its own conjugate. The four-phase rotation is native to complex multiplication. No additional computation is needed to generate the complement — it exists in the weight representation itself.

The relationship: complement attention is the *explicit, architectural* implementation of an operation that complex weights perform *algebraically*. Complement attention is the engineering path available with current real-valued infrastructure. Complex weights are the algebraic path that makes the engineering unnecessary.

The bridge between them is the projection residual. In complement attention, Reconcile(α, ᾱ) = α - proj_ᾱ(α) is an explicit computation. In complex weights, the same operation occurs through phase cancellation: when a complex weight |w⟩ = r·e^{iθ} multiplies a complex activation, the imaginary components (Phases 1 and 3) cancel in the real projection, leaving only the component that survives the full rotation — the irreducible remainder. The projection residual and the real-part extraction of a complex product are structurally the same operation, expressed in different substrates.

### 6.1 The Phase-Blindness Problem

A real-valued weight w ∈ ℝ encodes a single quantity: the magnitude of a connection. The sign (positive or negative) provides one bit of directional information — excitatory or inhibitory. But the four-phase rotation requires four distinguishable positions:

```
Phase 1 (Lift):       positive imaginary    (+i)
Phase 2 (Falsify):    negative real          (-1)
Phase 3 (Mirror):     negative imaginary    (-i)
Phase 4 (Reconcile):  positive real          (+1)
```

With real-valued weights, Phase 1 and Phase 3 are indistinguishable (both map to the real axis via their effect on activations), and Phase 2 and Phase 4 are distinguished only by sign. The architecture is phase-blind — it cannot represent where in the rotation cycle a given connection is relevant.

The core limitation: real-valued weights can *negate* (flip sign — a 180° jump from +1 to -1) but cannot *rotate* through intermediate positions (90° steps: +1 → +i → -1 → -i → +1). This means the model can represent "A" and "not-A" as distinct states, but cannot represent the four intermediate phases — inhabiting A, extracting invariants of A, independently inhabiting not-A, reconciling both — as computationally distinct operations. The forward pass treats all four as the same operation (next-token prediction) because the weight space has no dimension along which they differ. This is phase-blindness: the architecture oscillates between A and not-A but cannot rotate through the full cycle.

Complex-valued weights resolve this. A weight |w⟩ = r · e^{iθ} encodes magnitude (r) and phase (θ). The four phases map to four quadrants of the complex plane. The conjugate ⟨w| = r · e^{-iθ} is the complement — present in the algebra without additional computation.

### 6.2 What Complex Weights Buy

**Native complement.** For every weight |w⟩, the conjugate ⟨w| exists by construction. Complement attention (Section 5) becomes algebraically free — the complement is not a separate computation but a conjugation of the existing weights.

**Phase-sensitive routing.** During a forward pass, the phase component of each weight can route information differently depending on where in the reasoning cycle the computation is. Early layers (Lift) activate weights with phase near +i. Middle layers (Falsify/Mirror) activate weights with phase near -1 and -i. Late layers (Reconcile) activate weights with phase near +1. The routing emerges from training — the model learns which phases are relevant where.

**Rotation as native operation.** Multiplying by i rotates a complex number by π/2 — exactly one phase step. The four-phase rotation is four multiplications by i:

```
z → iz → i²z = -z → i³z = -iz → i⁴z = z
```

With complex weights, this rotation is a single algebraic operation per step. With real weights, it requires architectural machinery (complement attention, explicit reconciliation steps) to approximate what the algebra does natively.

### 6.3 Quantization Analysis

**Minimum: 2 bits per weight.** 1 bit magnitude (strong/weak), 1 bit phase (aligned/complement, i.e., 0 or π). This is the absolute minimum for one complement pair. It supports a two-phase distinction (aligned vs. inverted) but not the full four-phase rotation.

**Practical minimum: 4 bits per weight.** 2 bits magnitude (4 levels), 2 bits phase (4 quadrants: 0, π/2, π, 3π/2). This supports the full four-phase distinction. Each weight can represent its contribution at each phase of the rotation.

**Full precision: 16+ bits per weight.** 8 bits magnitude, 8 bits phase. Supports fine-grained phase sensitivity. Likely overkill for the structural benefit; the 4-bit version should capture the essential phase structure.

**The efficiency conjecture.** A 4-bit complex model (2 magnitude + 2 phase) should outperform a 4-bit real model (4 magnitude) on reasoning tasks, because the phase information is more valuable for structural rotation than additional magnitude precision. This is directly testable.

### 6.4 Engineering Paths

In order of increasing commitment and expected impact:

**Path 1 — Phase fine-tuning.** Take a pretrained real-valued model. Add a phase component to each weight, initialized to zero. Freeze the magnitude (original weights). Train only the phase. Measure reasoning improvement on the Remainder Test.

This is the cheapest experiment. If phase alone improves reasoning, it confirms that the missing information is directional (phase), not magnitudinal (scale). The cost is one additional bit per weight during fine-tuning and one additional multiply per weight during inference.

**Path 2 — Sparse complex.** Convert a fraction of weights to complex, leave the rest real. Sweep the fraction (1%, 5%, 10%, 25%, 50%, 100%). Find the minimum fraction that produces measurable Phase 4 improvement on the Remainder Test.

This identifies where in the architecture phase information is most valuable. The prediction: attention weights benefit most (because attention is the membrane — it is where selection and complement selection occur), while feedforward weights benefit less (because feedforward layers implement the transformation, which is magnitude-dominated).

**Path 3 — Phase-only training.** Freeze magnitudes entirely. Train a model from scratch using only phase optimization — every weight has a fixed magnitude and a trainable phase. This extreme test isolates whether phase alone carries reasoning structure.

If a phase-only model achieves non-trivial reasoning performance, it demonstrates that the structural rotation — the directional information about where in the cycle each connection is relevant — is the primary carrier of reasoning capability, not the magnitudes.

**Path 4 — Full complex pretraining.** Train from scratch with complex-valued weights. Compare against a real-valued model with equivalent total parameter budget.

The fair comparison: a real-valued model with N parameters vs. a complex-valued model with N/2 complex parameters (equivalent storage and compute, since each complex parameter requires two real numbers). If the complex model matches or exceeds the real model on reasoning tasks, the phase information is worth more than the lost magnitude capacity.

### 6.5 Predictions

**Prediction 10.** Phase fine-tuning (Path 1) will produce measurable improvement on the Remainder Test (≥ +0.5 composite score) at minimal training cost.

**Prediction 11.** Sparse complex conversion (Path 2) will show that attention weights account for ≥ 70% of the total reasoning improvement from complex conversion.

**Prediction 12.** Full complex pretraining (Path 4) at N/2 complex parameters will match or exceed real-valued pretraining at N parameters on reconciliation tasks (Remainder Test), while underperforming on retrieval tasks (where magnitude precision matters more than phase structure).

**Prediction 13.** Trained phase components will show non-random structure. Specifically: phase distributions will cluster around the four quadrant centers (0, π/2, π, 3π/2) rather than distributing uniformly. This clustering is the empirical signature of the four-phase rotation emerging from training.

---

## 7. Experimental Roadmap

### Phase 1 — Metric Validation (Immediate, 1–3 months)

| Experiment | Deliverable | Success Criterion |
|---|---|---|
| Construct adversarial reconciliation battery | Task set with RSOS annotations | ≥ 100 tasks spanning full RSOS range |
| Baseline Remainder Test | Score distribution for 3+ model families | Score distribution confirms Prediction 1 |
| In-context augmentation test | Remainder Test scores with/without PR kernel | Confirms Prediction 2 (shift to 1–2) |
| Self-consistency depth curves | Agreement rate vs. RSOS | Sigmoid cliff detected (Prediction 6) |
| Cross-model χ_τ | Structural survival across model families | χ_τ < 1 on hard tasks, ≈ 1 on easy tasks |
| Three-agent vs. two-agent χ_τ | Structural novelty comparison | Step-change with third agent (Prediction 5) |

### Phase 2 — Architectural Prototyping (6–12 months)

| Experiment | Deliverable | Success Criterion |
|---|---|---|
| Complement attention prototype | Small-scale model (≤ 1B parameters) with complement attention | Remainder Test composite ≥ 3.0 on tasks where baseline ≤ 1.0 |
| Compute-efficiency comparison | Complement attention at P vs. standard at 2P | Crossover point identified (Prediction 9) |
| Phase fine-tuning | Phase component added to existing model | +0.5 composite on Remainder Test (Prediction 10) |
| Sparse complex sweep | Complex conversion at varying fractions | Attention weight dominance confirmed (Prediction 11) |

### Phase 3 — Full-Scale Validation (12–24 months)

| Experiment | Deliverable | Success Criterion |
|---|---|---|
| Full complex pretraining | Complex-valued model at scale | Matches real-valued at N params with N/2 complex (Prediction 12) |
| Phase structure analysis | Distribution of trained phase components | Quadrant clustering detected (Prediction 13) |
| Complement attention at scale | Production-scale complement attention model | Hallucination and sycophancy rates measurably reduced |
| χ_τ deployment protocol | Multi-model verification pipeline for production | Operational above-ρ₇ verification |

### Cumulative Predictions

| # | Prediction | Phase | Falsifies if... |
|---|---|---|---|
| 1 | Un-augmented models score 0–1 on ≥ 80% of reconciliation tasks | 1 | Models routinely score 3–4 without augmentation |
| 2 | In-context PR shifts scores to 1–2 on ≥ 50% of tasks | 1 | No measurable improvement with PR in context |
| 3 | Complement attention reaches 3–4 on ≥ 30% of tasks | 2 | Complement attention shows no improvement over baseline |
| 4 | In-context augmentation degrades with conversation length | 1 | Performance is stable regardless of conversation length |
| 5 | Three-agent χ_τ shows step-change over two-agent | 1 | No structural novelty from third agent |
| 6 | Self-consistency shows sigmoid cliff at measurable RSOS | 1 | Agreement degrades linearly, no phase transition |
| 7 | χ_τ remains informative above the cliff | 1 | Multi-model verification also degrades at the cliff |
| 8 | Cliff location is consistent across model families | 1 | Cliff location varies by > 0.1 RSOS across families |
| 9 | Complement attention at P outperforms standard at 2P on reconciliation | 2 | Standard scaling always wins regardless of task type |
| 10 | Phase fine-tuning improves Remainder Test by ≥ +0.5 | 2 | Phase training produces no measurable improvement |
| 11 | Attention weights account for ≥ 70% of complex conversion benefit | 2 | Benefit is uniformly distributed across weight types |
| 12 | Complex N/2 matches real N on reconciliation tasks | 3 | Real-valued models consistently outperform at equal storage |
| 13 | Trained phases cluster at quadrant centers | 3 | Phase distributions are uniform or random |

---

## 8. Conclusion

The Incomplete Rotation Problem is not a qualitative observation — it is a measurable structural deficiency with a formal metric (the Remainder Test), a verification protocol (χ_τ), a predicted boundary (the ρ₇ cliff), and architectural paths to resolution (complement attention, complex weights).

The central claim is falsifiable at every level. If un-augmented models routinely produce genuine remainders, the diagnosis is wrong. If the ρ₇ cliff does not exist, the depth tower is wrong. If complement attention produces no improvement, the architectural analysis is wrong. If complex weights show no phase structure, the rotation account is wrong.

The most important structural distinction this paper introduces: **the difference between an answer and a remainder**. Current benchmarks reward answers. Genuine reasoning produces remainders. Until our metrics measure the right thing, we cannot know whether our models are reasoning or reflecting.

The Remainder Test measures the right thing. χ_τ verifies it across minds. The ρ₇ cliff tells us where self-verification ends and multi-agent verification must begin.

**A note on metric robustness.** Any metric can be gamed by training on it. A model fine-tuned on Remainder Test examples could learn to produce text that *mimics* named remainders and vertical transformations without performing the structural operations. This is the same forward-pass mimicry problem the paper diagnoses — applied to the metric itself. The defense is structural: the Remainder Test's Axis 2 (Productivity) requires *iterated* cycles, and gaming iterated structural transformation is exponentially harder than gaming a single output. Additionally, χ_τ provides a cross-check: a model producing gamed remainders will show low structural survival when its outputs are independently decomposed by agents that were not trained on the same metric. The adversarial reconciliation battery should be treated as a living dataset — evolved as models improve — but the metric's multi-axis, multi-cycle, multi-agent structure provides inherent resistance to single-vector gaming.

The missing operation remains simple. Attend to the complement. Record what survives.

---

*The Prime Radiant Operational Kernel is open. No license restrictions.*