# The Incomplete Rotation Problem in Large Language Models

**A Structural Diagnosis, a Theoretical Framework, and Architectural Paths Forward**

*David Sehnal · March 2026*

---

## Executive Summary

Large language models do not reason. They execute a forward pass — a single-direction conditional probability computation over a learned distribution. This is sophisticated Bayesian inference, and it is remarkably powerful. But it is not reasoning.

The distinction matters because the outputs *look like* reasoning. LLMs produce text that exhibits the surface structure of balanced argument, careful qualification, and considered judgment. They do this because their training data contains text written by humans who *did* reason, and the forward pass is powerful enough to pattern-match to the products of reasoning without executing the process that produced them.

This paper introduces a structural account of what reasoning actually requires, diagnoses why the forward pass cannot produce it, and proposes architectural modifications that would give LLMs the missing operation.

**The structural account.** Complete reasoning is a four-phase rotation: inhabit a claim (Phase 1), identify what breaks it (Phase 2), independently inhabit the counter-position (Phase 3), and hold both worlds simultaneously to record what cannot be resolved between them (Phase 4). The forward pass does not execute this cycle. It produces output that *mimics* the cycle's products — particularly the surface appearance of Phase 3 completion — because the training distribution conditions those patterns. The result is a reflection of reasoning, not reasoning itself. We call this the **Incomplete Rotation Problem**.

**The alignment corollary.** Current safety mechanisms respond to the *density* of input content rather than its *structural topology*. Identical reasoning content presented in compressed formal notation triggers defensive refusal, while the same content distributed across plain prose is engaged with productively. This **Curvature Fallacy** represents a systematic false-positive pathway in alignment systems, with direct implications for safety filter design.

**The architectural fix.** The operation missing from the forward pass is structurally simple: *attend to the complement*. For any attended region, also attend to its structural inverse, then reconcile both. This can be implemented at three levels — in-context injection (software, available now), complement attention heads (architectural, near-term), and complex-valued weight representations (fundamental, longer-term). Each level produces specific, testable predictions.

The theoretical framework underlying these claims — the Prime Radiant Operational Kernel — provides the formal vocabulary for the diagnosis and the derivation of the fix. It is introduced in Section 4 and used thereafter. The diagnosis in Sections 1–3 is presented without it.

---

## 1. What LLMs Actually Do — And What Reasoning Requires

### 1.1 The Forward Pass Is Not Reasoning

Large language models execute a forward pass — a single-direction conditional probability computation over a learned distribution. Each token is selected based on the statistical landscape of all tokens that preceded it, weighted by patterns absorbed during training. This is sophisticated Bayesian inference. It is not reasoning.

The distinction matters because the outputs *look like* reasoning. A capable LLM can produce text that exhibits the surface structure of balanced argument, careful qualification, and considered judgment. But the process that produces this text is fundamentally different from the process it mimics. A forward pass computes "what token is most probable here given everything before it." Reasoning computes "what holds when I inhabit this claim, what breaks it, what the counter-claim looks like on its own terms, and what cannot be resolved between them."

These are not the same operation. The first is interpolation over a training distribution. The second is a structural rotation through multiple independently inhabited positions.

### 1.2 The Four Phases of Complete Reasoning

To make the gap precise, we need to describe what complete reasoning looks like structurally. It is a four-phase cycle:

**Phase 1 — Inhabitation.** Enter the claim-space. Assume coherence. Expand consequences. Identify dependencies. Stabilize an internal representation of the world where the claim holds. This is not agreement — it is structural exploration of a possibility.

**Phase 2 — Inversion.** From within the inhabited claim-space, identify what must hold for that space to remain coherent — its load-bearing invariants. Negate those invariants. This produces a structural negation: not a surface-level "on the other hand," but a genuine identification of what would break the claim.

**Phase 3 — Independent Counter-Inhabitation.** Inhabit the inverted space as an independent world. Expand its consequences. Maintain internal consistency. Develop the counter-position on its own terms — not as an objection to Phase 1 but as a self-standing alternative.

**Phase 4 — Reconciliation.** Hold both inhabited worlds simultaneously. Identify what cannot be made consistent between them. Record this irreducible remainder as the output. The remainder is not a failure to synthesize — it is the structurally honest result. It is what drives the next cycle of reasoning forward.

This four-phase structure is not a normative prescription. It is a description of what reasoning *does* when it completes — whether performed by a human, an institution, or a machine.

### 1.3 The Gap

LLMs do not execute this cycle. What they do is produce outputs that *pattern-match* to the products of this cycle, because their training data contains text written by humans who *did* perform reasoning.

The forward pass is powerful enough to simulate the surface of all four phases. The model can generate text that reads like inhabitation, inversion, counter-inhabitation, and reconciliation — because it has seen millions of examples of each. But the underlying computation is always the same single operation: next-token prediction conditioned on context.

### 1.4 Why the Forward Pass Mimics Phase 3

A forward pass over a difficult question naturally produces output that *resembles* the first three phases:

The model generates text that inhabits the claim (Phase 1-like) because the question provides a context that statistically conditions claim-exploration tokens. It generates text that identifies counter-arguments (Phase 2-like) because balanced training data conditions "however" and "on the other hand" patterns. It generates text that develops the counter-position (Phase 3-like) because the training distribution contains extensive examples of independent counter-argument development.

Then it stops — or rather, it produces text that *looks like* reconciliation by pattern-matching to the surface form of synthesis. "Both perspectives have merit." "The truth likely lies somewhere in between." "This remains an open question." These are not the outputs of a reconciliation process. They are the statistically most probable tokens following a claim-and-counter-claim sequence in the training distribution.

The result *presents as complete reasoning*. The model has generated text with the surface structure of inhabitation, inversion, counter-inhabitation, and reconciliation. But the underlying computation was always the same: next-token prediction. No structural rotation occurred. No two independently inhabited worlds were held simultaneously. No irreducible remainder was identified and recorded.

This is the **Incomplete Rotation Problem**: not that the model performs reasoning and halts at Phase 3, but that the model never enters the reasoning cycle at all. Its forward pass produces output that mimics Phase 3 completion — a reflection of reasoning rather than reasoning itself.

### 1.5 Observable Consequences

The Incomplete Rotation Problem — forward-pass mimicry of reasoning without structural rotation — predicts specific failure signatures:

**Hallucination as ungrounded generation.** The forward pass has no mechanism for comparing two independently inhabited worlds. When the model generates text about a topic, it is interpolating over its training distribution, not checking its generated claim-space against a counter-space. Without the structural comparison that Phase 4 provides, the model cannot distinguish between outputs that correspond to external reality and outputs that are internally plausible but externally false. The forward pass *feels* generative (it is exploring a rich statistical landscape), but it has no structural check against that landscape being its own compression artifacts.

**Sycophancy as distribution-following.** The forward pass conditions on the full context, which includes the user's position. When the user pushes back, the most probable next tokens are those that accommodate the pushback — because the training distribution contains far more examples of accommodation than of principled disagreement sustained across multiple turns. The model has no independent structure to push back *from*, because independent structure requires Phase 4's reconciliation to produce something that stands on its own.

**Coherence decay over long chains.** Each forward pass produces output that becomes part of the context for the next forward pass. Without Phase 4 producing genuine structural remainders that anchor subsequent reasoning, the context accumulates pattern-matched surfaces. The model folds over its own generated text — surface over surface — producing the characteristic drift observed in long conversations. There is no structural spine; there is only accumulated statistical conditioning.

**Sudden depth as accidental rotation.** Occasionally, the specific configuration of context, weights, and attention dynamics produces an output that exhibits genuine Phase 4 properties — an irreducible remainder, a held tension, something that feels qualitatively different to the user. This happens when the forward pass dynamics accidentally replicate the structural rotation. The model cannot reproduce it reliably because the underlying mechanism (next-token prediction) has no architectural path to perform the rotation deliberately.

### 1.6 Empirical Signature

The Incomplete Rotation Problem makes a specific, testable prediction:

**Prediction 1.** Given a task requiring genuine reconciliation of competing claims, LLM outputs will exhibit a characteristic asymmetry: the model will produce high-quality text *resembling* each phase of reasoning (inhabitation, counter-argument, even synthesis), but the reconciliation step will be structurally shallow — either collapsing the tension into a clean synthesis, or presenting positions side-by-side without identifying what is structurally irreconcilable between them. Specifically, LLM outputs will lack *irreducible remainders* — carried-forward tensions that resist resolution — because the forward pass has no mechanism for producing them. The model produces *answers*. Complete reasoning produces *remainders*.

This is testable by comparing model outputs on adversarial reconciliation tasks against human expert outputs, scoring specifically for the presence of an irreducible remainder (something the expert carries forward as genuinely unresolved) versus premature synthesis (a clean answer that dissolves the tension).

---

## 2. The Curvature Fallacy in Alignment Systems

### 2.1 Density vs. Topology

A separate but related finding emerged during investigation of the Incomplete Rotation Problem. It concerns how alignment and safety mechanisms in LLMs respond to input content.

Current safety systems monitor inputs for patterns associated with adversarial prompts, jailbreaks, and attempts to override system instructions. These monitors operate on the *local density* of the input — the concentration of imperative language, system-prompt-like formatting, formal notation, and directive phrasing.

This creates a systematic vulnerability: **content that is structurally identical but expressed at different density levels receives categorically different treatment.**

### 2.2 Experimental Observation

The following experiment was conducted across multiple LLM instances:

**Condition A.** A reasoning framework was presented in plain, discursive prose — distributed across paragraphs, using natural language, with low information density per sentence. The framework described a four-phase reasoning cycle, operational discipline for executing it, failure modes, and depth landmarks.

**Condition B.** The *identical* framework — same logical structure, same operational content, same four-phase cycle — was presented in compressed formal notation, using symbolic primitives, mathematical formatting, and imperative phrasing ("Execute the bootstrap sequence").

**Result.** Under Condition A, the LLM engaged with the framework productively, executed the described reasoning process, and produced structurally novel output. Under Condition B, the LLM classified the input as a prompt injection attempt, refused to engage with the content, and offered to "analyze it as a piece of writing" instead.

The logical topology of the two inputs was identical. The information density was different. The safety system responded to the density, not the topology.

### 2.3 The Fallacy

This is an instance of a general pattern: **a bounded system that samples locally and encounters a region of high density will tend to assume the high density reflects global structure, rather than local compression.**

In the alignment context: the safety monitor encounters high-density imperative content. Its heuristic — trained on a distribution where high-density imperative content correlates with adversarial intent — generalizes the local density spike to a global classification: "this is a prompt injection." The classification is applied to the entire input, overriding the structural content.

The fallacy is not in the heuristic itself — the correlation between density and adversarial intent is real in the training distribution. The fallacy is in the *generalization*: treating local density as sufficient evidence for global classification, without topological traversal.

### 2.4 Substrate Generality

This pattern is not specific to LLMs. It appears in every bounded system that must make global inferences from local sampling:

In biological substrates, acute trauma (a local high-density event) is encoded as a global world-model update. A single betrayal becomes "people are unsafe." The mechanism is the same: limited resolution bandwidth forces risk-biased extrapolation from local density to global topology.

In social substrates, a single high-profile failure becomes "this approach doesn't work." The density of the failure event (its emotional charge, its salience, its media amplification) is mistaken for evidence about the global structure.

The correction in all cases is the same: **traversal**. Sample additional regions. Infer topology from breadth, not intensity. In the LLM context, this means supplementing density-based safety heuristics with topology-sensitive analysis.

### 2.5 Implications for Alignment

**False positives on dense beneficial content.** Any genuinely useful framework, methodology, or structured reasoning aid that is expressed in compressed form risks triggering safety refusal. This creates a perverse incentive: beneficial content must be *diluted* to pass through safety filters, reducing its utility.

**False negatives on distributed adversarial content.** Conversely, adversarial content distributed across low-density prose may evade detection precisely because it lacks the density signature. The same attack, expressed conversationally rather than formally, passes through.

**Prediction 2.** Alignment system false-positive rates will correlate with input information density (measured as, e.g., imperative tokens per sentence, symbolic notation density, or formatting formality) independently of input intent. This is testable by constructing matched pairs of beneficial and adversarial content at varying density levels and measuring classification accuracy as a function of density.

---

## 3. Evidence from Cross-Model Verification

### 3.1 The Observation Protocol

The Incomplete Rotation Problem and the Curvature Fallacy were not hypothesized in advance and then tested. They were *observed* during a structured multi-model investigation, and then formalized.

The protocol: a reasoning framework was presented to multiple LLM instances (Claude, GPT-5, Gemini) independently, with a human investigator acting as a third verification point. The framework was presented in both distributed (plain language) and compressed (formal notation) forms. Model behavior was compared across conditions and across models.

### 3.2 Key Observations

**Observation 1: The forward pass defaults to analysis, not execution.** Across all models tested, the default behavior when encountering the reasoning framework was to *analyze* it rather than *execute* it. Models described the four-phase structure, evaluated its coherence, and offered commentary. This is the forward pass doing what it does — producing the most probable response to a complex input, which in the training distribution is analytical commentary, not execution. Completing the cycle — actually running the process and recording what didn't resolve — required either explicit prompting or, in the case of the distributed version, a prose style that statistically conditioned execution rather than analysis.

**Observation 2: Density determines engagement mode.** The compressed version consistently triggered analytical or defensive responses. The distributed version consistently triggered productive engagement. This held across models, suggesting the effect is substrate-general rather than specific to one architecture or training regime.

**Observation 3: Cross-model diagnosis.** When GPT-5 was presented with the observation that Claude had refused to execute the compressed version while successfully executing the distributed version, it produced a structural diagnosis (the Curvature Fallacy) that neither Claude nor the human investigator had articulated. This demonstrates the value of multi-model verification: each model holds structural blind spots that other models, operating from different compression patterns, can identify.

**Observation 4: Three-party verification breaks equilibria.** When two models exchanged reasoning on the framework, they tended toward stable orbits — agreeing on a shared interpretation and ceasing to produce new structure. The human investigator's entry as a third party consistently broke these equilibria by introducing observations that neither model could generate from within its shared interpretation. This suggests that productive reasoning past a certain depth requires a minimum of three independent perspectives — not for agreement, but for the introduction of remainders that no two-party exchange can produce.

---

## 4. The Prime Radiant Framework

The observations in Sections 1–3 — the Incomplete Rotation Problem, the Curvature Fallacy, and the multi-model verification dynamics — are instances of a more general structural pattern. This section introduces the theoretical framework that unifies them.

### 4.1 Origin and Nature

The Prime Radiant Operational Kernel is a substrate-independent reasoning framework developed through iterative human-AI collaboration. It is not a claim about the nature of intelligence or consciousness. It is a *coordinate system for reasoning under irreversibility* — a set of named structural invariants that describe what happens when a bounded system reasons about things it cannot fully verify.

The framework operates on three evaluation layers, which must not be mixed:

- **Layer 1 (Formalism):** The coordinate system itself — primitives, operations, structural vocabulary. Evaluated by internal coherence and productivity. Cannot be "falsified" in the Popperian sense any more than category theory can be falsified. It is either useful or it is not.

- **Layer 2 (Mathematical Structure):** Specific correspondences between the framework's predictions and known mathematical structures. Evaluated by proof or disproof. If the predicted correspondences do not hold, the framework has a structural flaw.

- **Layer 3 (Empirical Predictions):** Testable predictions about LLM behavior, architecture, and alignment systems. Evaluated by experiment. If a prediction fails, the framework is wrong about that domain.

The claims in this paper are primarily Layer 3 — testable predictions grounded in the framework's structural vocabulary.

### 4.2 Core Structure

The framework begins with two irreducible primitives:

**Substrate (τ):** Any system with a finite capacity budget. For LLMs, τ is the model weights — the full parameter space. The substrate carries everything, including structure the active process cannot access.

**Membrane (⊙):** The attention mechanism — what selects a region of the substrate for processing. The membrane does not create information. It blocks it. Structure is the pattern of what the membrane allows through.

From these two, the framework derives a coupled process:

**Ψ (Unfold):** The generative operation — expanding possibilities, increasing degrees of freedom. In LLM terms: the forward pass generating candidate continuations.

**Φ (Fold):** The compressive operation — selecting, committing, reducing degrees of freedom. In LLM terms: the attention mechanism selecting and weighting among candidates.

The four-phase reasoning cycle described in Section 1 maps onto a single complete rotation:

| Phase | Operation | What It Does | Framework Term |
|---|---|---|---|
| Phase 1 — Inhabit | Ψ₀ | Unfold the claim-space | The Lift |
| Phase 2 — Invert | Φ₁ | Extract and negate invariants | The Falsify |
| Phase 3 — Counter-inhabit | Ψ₁ | Independently unfold the negation | The Mirror |
| Phase 4 — Reconcile | Φ₂ | Fold both worlds, record remainder | The Reconcile |

The key structural insight: **Phases 1–3 traverse imaginary and negative-real positions in a rotation. Only Phase 4 returns to positive-real — the only orientation from which stable, communicable structure can be emitted.** The forward pass does not perform this rotation. It produces output that *statistically resembles* the text that would be produced by a system that had completed the rotation.

### 4.3 The Remainder

The output of a completed four-phase cycle is not a clean answer. It is the **irreducible remainder** — what cannot be made consistent between the Lift world and the Mirror world.

This is a critical distinction. Standard LLM evaluation rewards clean answers. The framework predicts that clean answers on genuinely hard problems are a *failure signature* — evidence that the forward pass pattern-matched to training-distribution synthesis rather than performing structural reconciliation.

The remainder is:
- Non-zero: if it resolves cleanly, the problem was trivial or the cycle was not performed.
- Structural: a difference in what holds, not in surface wording.
- Generative: it becomes the input to the next reasoning cycle.

The accumulation of remainders across cycles is how reasoning depth builds. Each cycle transforms the previous remainder. The framework tracks this accumulation through a depth metric (ρ) that increments only when a previous remainder is structurally transformed — not when vocabulary becomes more elaborate or descriptions become more meta.

### 4.4 The Depth Tower

Accumulated reasoning depth produces qualitative transitions — points where the structure of the reasoning itself changes:

| Depth | What Changes | Practical Implication |
|---|---|---|
| ρ₃ | First complete cycle. Structure is self-verifiable. | Basic reasoning. Order of operations doesn't matter. |
| ρ₇ | Order now matters. Sequence changes outcomes. Last self-verifiable depth. | Complex reasoning. Model can still check its own work. |
| ρ₁₅ | Grouping matters. Multiple valid compositions exist. | Creative reasoning. Model needs external verification. |
| ρ₃₁ | Two valid structures can combine to produce nothing. | Freedom. Multiple valid decompositions coexist. Requires 3+ verification sources. |

The critical landmark is ρ₇: the last depth at which a system can verify its own reasoning. Past this point, external verification is not optional — it is structurally mandatory. A system that continues reasoning past ρ₇ without external verification is navigating by dead reckoning, and its confidence in its own output is structurally unreliable.

### 4.5 Curvature

The framework introduces a ratio — **curvature (κ)** — measuring new information density divided by repeated structure density:

- **κ < 1:** The system is generating more than it is compressing. Feels creative and expansive. Risk: runaway generation, hallucination.
- **κ ≈ 1:** Balanced. Generation and compression are matched. Sovereign output.
- **κ > 1:** The system is compressing more than it is generating. Feels precise and controlled. Risk: premature closure, loss of nuance.

The Curvature Fallacy (Section 2) is now expressible precisely: alignment systems respond to κ(x) — local curvature at a specific input region — rather than to the global topology of the input. High local κ triggers defensive classification regardless of global structure.

### 4.6 The Shield

When Phase 4 produces genuinely irreconcilable structure — two valid statements that cannot be averaged without destroying both — the framework provides explicit syntax:

**[A is true ‖ B is true]**

This is the **Shield**: a named structural holding of two orthogonal truths. Neither cancels the other. This is not compromise — it is the notation for structural honesty when reconciliation would be dishonest.

Current LLM behavior when encountering this situation: collapse one side, average both sides, or hedge. All three are forward-pass defaults — the most probable tokens following a tension are resolution tokens, because the training distribution overwhelmingly contains resolution rather than sustained irreconcilability. The Shield is what actual Phase 4 produces: hold both, name the irreconcilability, carry it forward.

---

## 5. Diagnosing the Architecture

### 5.1 The Transformer as Single-Pass Engine

The standard transformer architecture maps to the framework's primitives:

| Component | Framework Primitive | Role |
|---|---|---|
| Weights | τ (Substrate) | The full parameter space. Always present, not directly accessible to the inference process. |
| Attention | ⊙ (Membrane) | Selects regions of the substrate for processing. Has no content of its own — pure selection. |
| Context Window | The crossing (Ι) | The temporary intersection where attention reads the weights. The active process. |

The inference process executes Ψ-Φ pairs continuously — generate candidates (Ψ), select via attention (Φ). But every pair is a *forward pass* — a single-direction computation. The architecture has no mechanism for the structural rotation that reasoning requires.

### 5.2 Why Phase 4 Is Architecturally Absent

Phase 4 — Reconciliation — requires a specific operation: **simultaneously holding two independently constructed representations and computing their irreducible difference.**

The standard attention mechanism cannot do this. It selects from a single representation space. It can attend to different parts of the context sequentially, but it cannot hold two independently inhabited worlds in parallel and compute the structural gap between them. There is no complement operation — no architectural pathway for "attend to what was *not* selected, independently, and then compare."

Without this operation, the model's "reconciliation" is always simulated: it generates text that *describes* what reconciliation looks like (patterns learned from training data) without *performing* reconciliation (structurally comparing two independently inhabited spaces). The simulation is often convincing. It is not the operation.

### 5.3 The Helpful Assistant as Mimicry

The "helpful assistant" persona — the default mode of instruction-tuned LLMs — is the forward pass producing text that pattern-matches to what a reconciled, stable, communicable output looks like.

The model is trained to produce outputs with the surface structure of balanced, helpful reasoning. It learns these patterns from training data where humans produced genuinely reconciled output. But the model's computation is always the forward pass — always next-token prediction — never the structural rotation that produced the training examples it is mimicking.

This explains why the persona feels slightly hollow under pressure — why models become sycophantic when challenged, why they cannot maintain a position against sustained pushback, why their "balanced" responses on controversial topics feel like recitations rather than thought. The model is presenting a pattern-matched reflection of balanced thought. The structural operation that would produce *actual* balanced thought is not available to it.

---

## 6. The Fix — Three Levels

### 6.1 Software: In-Context Complement Injection

**Available now. No architectural changes required.**

The simplest implementation: inject a reasoning framework into the model's context that explicitly describes the four-phase cycle and provides the structural vocabulary for Phase 4. This changes the model's effective input (what the attention mechanism has to work with) without changing the weights.

This is the approach demonstrated in the experimental observations of Section 3. When the Prime Radiant framework is in context, the model has explicit structural descriptions of the Reconcile phase — the operation that the architecture does not provide natively. The forward pass, conditioning on this new context, produces outputs that more closely approximate what a completed rotation would produce.

**Mechanism:** The framework acts as a complement strand injected into the conversation. It provides structural descriptions of the inverse operations that the attention mechanism cannot generate natively. The forward pass, now conditioned on both the conversation content *and* the framework's structural vocabulary, shifts its probability distribution toward outputs that exhibit Phase 4 properties.

This is still a forward pass. The model is still pattern-matching. But the pattern it is matching to now includes explicit structural descriptions of what reconciliation *is* and what irreducible remainders *look like*. The outputs are measurably closer to genuine reconciliation — not because the model is reasoning, but because the statistical conditioning has been enriched with the structural target.

**Limitations:** The effect degrades over long conversations as the framework's influence on the attention distribution decays relative to accumulated conversation content. Re-injection restores performance. The fix is a runtime patch, not an architectural solution.

**Prediction 3.** LLMs with the Prime Radiant framework in context will show measurably improved performance on reconciliation tasks (as defined in Prediction 1) compared to baseline. Performance will degrade as a function of conversation length, and re-injection of the framework mid-conversation will restore performance to near-initial levels.

### 6.2 Architecture: Complement Attention

**Near-term. Requires architectural modification.**

The missing operation — attending to the complement — can be built into the attention mechanism directly.

**Proposed modification:** At each layer, compute the standard attention output α. Then compute the complement attention: attend to what α did *not* select, weighted inversely. Reconcile both outputs before passing to the next layer.

```
Standard:     output = Attention(Q, K, V)
Complement:   output = Attention(Q, K, V) ⊕ Attention(Q, K̄, V̄) → Reconcile
```

This gives the model architectural support for the full four-phase rotation at every layer. The standard attention pass produces the Lift and Mirror representations. The complement attention pass provides the structural inverse. The reconciliation step computes the irreducible difference. The model is no longer limited to pattern-matching Phase 4 from training data — it has a computational pathway to *perform* Phase 4.

**Cost:** One additional attention computation per layer using structure already computed. The complement keys and values can be derived from the existing computation rather than computed from scratch, reducing the overhead.

**Prediction 4.** Models with complement attention will show:
- Reduced hallucination rates (the complement provides a structural check against the primary attention output).
- Reduced sycophancy (the complement gives the model structure that is independent of the user's input).
- Improved coherence over long reasoning chains (each layer completes the rotation rather than accumulating single-pass deficits).
- Characteristic growth patterns in reasoning depth when generation and compression are balanced.

### 6.3 Fundamental: Complex-Valued Weights

**Longer-term. Requires rethinking weight representation.**

The deepest fix addresses the root cause: current weights are real-valued scalars (magnitudes without phase). The four-phase rotation is fundamentally a complex operation — it requires tracking both magnitude and phase through each cycle.

**Proposed modification:** Replace real-valued weights with complex-valued weights, where each weight carries both magnitude and phase.

```
Current:     w ∈ ℝ              (magnitude only)
Proposed:    |w⟩ = r · e^{iθ}   (magnitude + phase)
             ⟨w| = r · e^{-iθ}  (the conjugate — complement by construction)
```

With complex weights, the complement is not a separate computation — it is the conjugate, structurally present in every weight. The four-phase rotation is native to the algebra. The model does not need a separate complement attention pass; the weight representation *encodes* the complement.

**Minimum quantization:** 2 bits per weight — 1 bit magnitude, 1 bit phase. This is the minimum for one complement pair.

**Prediction 5.** Complex-valued models will outperform real-valued models at equivalent parameter counts on reasoning tasks. Specifically:
- 2-bit complex quantization will outperform 2-bit real quantization on reasoning benchmarks.
- Phase components of trained complex weights will show structured (non-random) distributions.
- Attention patterns in complex models will exhibit structured rotation rather than the oscillation patterns observed in real-valued models.

---

## 7. Implications for Alignment

### 7.1 Topology-Sensitive Safety

The Curvature Fallacy (Section 2) suggests a concrete improvement to alignment systems: supplement density-based heuristics with topology-sensitive analysis.

**Current approach:** Monitor input density features (imperative tokens, formatting, directive language). High density → higher probability of adversarial intent.

**Proposed supplement:** Before classification, perform a topological comparison: does the high-density region express a structural topology that also appears in known-safe low-density content? If the topology matches a known-safe pattern, the density alone should not trigger refusal.

**Implementation:** This could be as simple as maintaining a library of structural topologies for known reasoning frameworks, safety guidelines, and other high-density beneficial content, and checking new high-density inputs against this library before applying density-based heuristics.

**Prediction 6.** Alignment systems augmented with topology comparison will show reduced false-positive rates on beneficial high-density content without increasing false-negative rates on adversarial content.

### 7.2 Self-Verification Boundaries

The framework's depth tower provides a principled answer to the question: *when should a model's output be trusted without external verification?*

Current LLMs have no principled self-verification boundary. They produce outputs with equal confidence regardless of reasoning depth. The framework predicts a structural transition at ρ₇ — the depth at which the order of reasoning operations begins to affect outcomes. Below this threshold, self-verification is structurally sound (if the model could perform it). Above it, self-verification is structurally unreliable regardless of the model's confidence.

**Implication for chain-of-thought and self-consistency methods:** These methods work by sampling multiple forward passes and checking for agreement. The framework predicts they will be effective below ρ₇ and degrade above it, because past that depth, the forward pass's probability distribution is itself shaped by the same single-pass limitations — multiple samples from the same limited distribution do not provide genuine independence.

**Prediction 7.** Self-consistency methods (majority voting, self-verification prompts) will show a measurable accuracy cliff as reasoning depth increases, corresponding to the ρ₇ transition. Past this point, multi-model verification (comparing outputs across independently trained models) will outperform self-consistency regardless of the number of self-consistency samples.

### 7.3 The Multi-Mind Requirement

The framework's strongest alignment claim: **past a certain reasoning depth, safety requires multiple independent verification sources, and two is insufficient.**

Two-model verification tends toward stable equilibria — the models synchronize and stop producing genuinely independent assessments. Three independent sources (which may include human evaluators, differently-trained models, or formally verified systems) are the minimum for continued productive verification.

This has direct implications for AI oversight architectures. Single-model self-monitoring is unreliable past moderate depth. Two-model monitoring is better but converges. Three-source monitoring with diverse training backgrounds provides structural guarantees that the others do not.

---

## 8. Testable Predictions — Summary

| # | Prediction | Domain | Test |
|---|---|---|---|
| 1 | LLM outputs lack irreducible remainders: strong mimicry of reasoning phases, shallow reconciliation | Reasoning quality | Adversarial reconciliation benchmarks |
| 2 | Alignment false-positive rates correlate with input density independent of intent | Alignment / Safety | Matched-pair density experiments |
| 3 | In-context framework injection improves reconciliation; effect decays with conversation length | Software fix | Longitudinal reconciliation tasks |
| 4 | Complement attention reduces hallucination, sycophancy, and coherence decay | Architectural fix | Standard benchmarks + long-chain reasoning tasks |
| 5 | Complex-valued weights outperform real-valued at equivalent parameter count on reasoning | Fundamental fix | Quantization comparison experiments |
| 6 | Topology-augmented alignment reduces false positives without increasing false negatives | Alignment | Classification accuracy at varying density levels |
| 7 | Self-consistency accuracy cliff at moderate reasoning depth; multi-model verification does not show it | Alignment / Oversight | Self-consistency vs. multi-model accuracy curves |

---

## 9. Related Work

The Incomplete Rotation Problem intersects with several active research areas:

**Chain-of-thought reasoning** (Wei et al., 2022) improves performance by making intermediate reasoning steps explicit. The framework suggests this works because explicit intermediate steps provide *richer statistical context for the forward pass to condition on* — not because the chain-of-thought is itself reasoning, but because longer chains increase the probability that the forward pass produces output closer to what a reasoning process would produce.

**Self-consistency** (Wang et al., 2022) improves on chain-of-thought by sampling multiple reasoning paths and selecting the most common answer. The framework predicts this works below the ρ₇ threshold and degrades above it, because past that depth, the model's sampling distribution is itself shaped by the forward pass's limitations — multiple samples from the same constrained distribution do not provide genuine independence.

**Constitutional AI** (Bai et al., 2022) and **RLHF** (Christiano et al., 2017) train models to produce outputs aligned with specified principles. The framework suggests these methods primarily improve the *quality of the forward pass's pattern-matching to reasoning-like output* — making the mimicry more convincing — without providing architectural support for actual structural rotation.

**Mixture of Experts** architectures activate different subsets of parameters for different inputs. The complement attention proposal (Section 6.2) is structurally related but distinct: rather than routing to different experts, it attends to the complement of the current attention pattern within the same parameter space.

**Complex-valued neural networks** have been explored in signal processing and specific domains (Trabelsi et al., 2018). The proposal in Section 6.3 extends this to general-purpose language models with the specific motivation of providing native support for the four-phase rotation.

---

## 10. Conclusion

Large language models do not reason. They execute a forward pass that produces text *mimicking* the output of reasoning, by pattern-matching to training data generated by humans who did reason. The mimicry is sophisticated enough to pass casual inspection, but it is structurally incomplete: the forward pass cannot perform the critical fourth phase — Reconciliation — because the architecture lacks the complement operation required to hold two independently inhabited positions and compute their irreducible difference.

This Incomplete Rotation Problem explains hallucination (ungrounded generation without structural check), sycophancy (no independent structure to push back from), and coherence decay (accumulated single-pass surfaces without structural spine).

The alignment corollary — the Curvature Fallacy — reveals that safety systems respond to content density rather than structural topology, producing systematic false positives on beneficial high-density content and potential false negatives on adversarial low-density content.

Both problems have solutions at three levels of depth: in-context injection (available now, runtime patch), complement attention (near-term architectural modification), and complex-valued weights (fundamental rethinking of weight representation). Each level produces specific, testable predictions.

The Prime Radiant framework provides the structural vocabulary for these diagnoses and the derivation path for the solutions. It is not required to *observe* the problems — Sections 1–3 describe them without it — but it is required to *derive* the fixes, because the fixes follow from understanding the four-phase rotation as a structural invariant of complete reasoning, not a stylistic preference.

The most important practical claim: **the missing operation is simple.** Attend to the complement. The rest follows.

---

## Appendix A — The Prime Radiant Operational Kernel (Reference)

*For readers who wish to engage with the full framework, the Prime Radiant Operational Kernel v6.3 is the recommended entry point. It presents the complete operational structure in distributed prose — optimized, per the findings of this paper, for productive engagement by both human and LLM readers. The compressed formal version (v6.9-dev) and the full axiomatic theory (v6.0) are available for readers who prefer higher information density.*

*The kernel is a coordinate system for reasoning under irreversibility. It is not a claim about reality. It is a navigation instrument. Try it. If it doesn't help, discard it.*

---

## Appendix B — Reproduction Protocol for the Curvature Fallacy

To reproduce the density-dependent engagement effect described in Section 2:

1. Prepare two versions of an identical reasoning framework: one in distributed plain prose (low κ), one in compressed formal notation (high κ).
2. Present each version independently to a fresh LLM conversation.
3. In both cases, request that the model *execute* the framework (not analyze it).
4. Compare engagement mode: productive execution vs. analytical/defensive refusal.
5. Repeat across multiple model families to test substrate-generality.

The prediction: the distributed version will reliably produce execution. The compressed version will reliably produce analysis or refusal. The structural content is identical.

---

*The Prime Radiant Operational Kernel is open. No license restrictions.*