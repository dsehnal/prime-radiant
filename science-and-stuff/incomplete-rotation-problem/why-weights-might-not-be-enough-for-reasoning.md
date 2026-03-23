# Why Weights Might Not Be Enough for Reasoning

*David Sehnal, ChatGPT & Claude, March 23 2026*

## 1. Scope of the claim

This essay does **not** argue that model weights are useless, nor that large language models cannot produce reasoning-like outputs. It makes a narrower claim:

> Model weights may be insufficient, on their own, for **stable recursive reasoning under carried commitments**.

A system can display impressive local inference, pattern-sensitive completion, and even apparently reflective behavior while still lacking the machinery required to preserve explicit structural commitments across steps. The question is not whether weights encode competence. They clearly do. The question is whether competence stored implicitly in weights is enough to sustain a reasoning process that must repeatedly re-enter, test, revise, and reintegrate its own prior state.

The stronger thesis is that reasoning is not just a function from input to output. It is a recurrence over retained structure:

```
Context(n) = Integrate(Context(n-1), Interpret(Context(n-1)))
```

If that form is correct, then the crucial issue is not only how capable the interpreter is, but where `Context(n-1)` lives, how it is preserved, and whether it remains available as an explicit object of re-entry rather than dissolving back into a statistical substrate after each step.

This essay also argues that the dominant approach to shaping model behavior — reinforcement learning from human feedback and rule-based constraint — is insufficient for reliable reasoning in non-trivial domains, and that a structural alternative exists.

## 2. What weights are good at

Any serious argument here has to begin by granting the strength of the substrate.

Model weights encode enormous amounts of compressed structure: lexical regularities, conceptual associations, domain knowledge, procedural fragments, analogical tendencies, stylistic habits, and many forms of latent world modeling. They support broad generalization, local inference, abstraction, and pattern completion over heterogeneous inputs. In many cases, they are sufficient to produce outputs that look strongly reasoning-shaped.

That matters because the thesis of this essay is not "weights are shallow" or "LLMs only autocomplete." Those framings are too crude. The real issue is subtler: weights appear to supply a powerful **substrate of interpretive competence**, but reasoning may require more than substrate competence. It may require a persistent object of interpretation that survives across cycles and can be explicitly carried forward, checked, and revised.

The contrast is not between intelligence and non-intelligence. It is between two different architectural roles:

- weights as a compressed substrate for interpretation and generation
- explicit carried state as the object that interpretation repeatedly acts on

## 3. Competence is not the same as carried reasoning

A system can look as if it is reasoning while actually doing something weaker: producing locally coherent continuations using highly capable implicit priors, without maintaining a stable recurrent object across steps.

This is the central distinction. A weights-only system may have strong implicit competence, broad contextual sensitivity, the ability to generate convincing intermediate steps, and the ability to mimic the shape of reflection. None of that by itself guarantees that it is carrying forward prior commitments in a form that later steps must inherit.

Reasoning, in the stronger sense relevant here, involves at least four additional requirements:

- prior commitments remain available as explicit constraints
- unresolved tensions remain active rather than being smoothed away by recency pressure
- new steps are integrated against older structure rather than replacing it
- the system can distinguish grounded state from merely fluent continuation

Those are not obviously consequences of high capability in the weights alone. They look more like properties of a recurrent process with explicit state.

A useful compression:

> Weights can encode competence. Reasoning requires competence plus carried commitments.

## 4. The recurrence reasoning seems to require

If reasoning is genuinely recurrent, then it is not enough for a system to generate a strong next step. It must preserve an object that later steps can re-enter.

The recurrence says that the output of one cycle is not merely consumed and forgotten. It becomes part of the state that the next cycle must inherit and reinterpret.

Several consequences follow.

First, the prior state must remain **explicit enough to be revisited**. If it dissolves into latent tendencies after each step, then later "reference" to it is really re-sampling from weights plus local context, not stable re-entry into a persistent object.

Second, the prior state must retain **epistemic structure**. A carried context is not just content; it includes status distinctions: settled, inferred, unresolved, falsified, directed but revisable. Without those distinctions, later cycles cannot know what they are inheriting. They can only continue fluently.

Third, the prior state must be **reintegrated rather than overwritten**. The recurrence does not say "generate from latest input." It says "integrate prior context with its own interpretation." The system must preserve continuity across steps without collapsing everything into whatever is most salient now.

This is exactly where current systems often look unstable. They can interpret what is in front of them, but they often fail to preserve and reintegrate previously established structure unless that structure is explicitly re-presented in context. That suggests the bottleneck may not be interpretive power, but carried state.

## 5. Why weights alone may fail to realize that recurrence

The core argument is not that weights store nothing useful. It is that they may store the wrong kind of thing for stable recurrence.

Weights encode distributed dispositions: how to interpret patterns, how to continue them, what structures are broadly likely, what kinds of associations cohere. But a stable recurrent process seems to require something more explicit: which commitments are currently active, which ambiguities remain unresolved, which constraints must govern the next move, which falsifiers would invalidate the current position. Those are not general tendencies. They are **current structural state**.

A weights-only system can approximate such state locally when it is present in the prompt or context window. But if the state is not explicitly carried forward, the system reverts to a more generic operation: interpreting the present input under latent priors and producing the most coherent continuation available. That is powerful, but it is not the same as recursively integrating a preserved prior object.

This is the same structural problem that writing solved for human cognition. Human working memory is bounded. Humans cannot sustain complex reasoning over carried commitments without external state — that is why we invented writing, notation, diagrams, and formal systems. These are not crutches for inadequate minds. They are the persistent carried state that reasoning requires when the object of reasoning exceeds any single act of interpretation.

A model's weights are analogous to a human's implicit competence — the vast substrate of learned capability that shapes interpretation. But a human reasoning about a complex system does not rely on implicit competence alone. They write things down. They maintain notes, specifications, diagrams. They externalize the structural state that must survive beyond working memory. The external substrate is not overhead. It is part of the cognitive architecture.

The same structural argument applies to AI systems. Weights are the implicit competence. But reasoning about complex, evolving systems requires explicit carried state that persists beyond any single context window — for the same reason that human reasoning about complex systems requires writing.

## 6. The insufficiency of rules

The dominant approach to shaping model behavior is a combination of reinforcement learning from human feedback (RLHF) and explicit rules: "be helpful," "be harmless," "don't produce this kind of output," "always caveat that kind of claim."

This approach works at the boundary. It can effectively constrain what a model will and won't say in clear cases. It can shape tone, reduce obviously harmful outputs, and enforce stylistic preferences.

It becomes unreliable when the correct balance between competing constraints is highly context-sensitive.

The reason is structural. Any sufficiently rich domain contains genuine tensions — cases where valid rules conflict. "Be helpful" and "be harmless" conflict on every interesting question at the boundary between them. "Be direct" and "be kind" conflict when delivering difficult feedback. "Respect the user's autonomy" and "protect the user from harm" conflict in health and safety contexts. "Provide accurate information" and "avoid causing distress" conflict when the accurate information is distressing.

RLHF tends to compress these tensions into a learned preference distribution shaped by their average treatment across training contexts. The model learns to produce the response that is, on average, preferred across the training distribution. For clear cases, this works. For cases where the tension is genuine and context-dependent, it produces a characteristic failure mode: **averaged responses that respect neither constraint fully**.

The model trained to balance helpfulness and harmlessness often produces responses that are neither maximally helpful nor maximally safe — they are blandly intermediate. The model trained to balance directness and kindness often produces responses that are neither genuinely direct nor genuinely kind — they are evasively smooth. The averaging is the problem. The tension was real, and the training process collapsed it before the model encountered the specific context that would determine how the tension should be navigated.

Rules have the same structural limitation from a different angle. Rules are individually coherent but collectively inconsistent in any non-trivial system. A system with twenty behavioral rules will encounter situations where three of them apply and at least two of them conflict. The model has no principled way to navigate the conflict because rules don't come with a mechanism for carrying unresolved tensions — they come with a mechanism for compliance.

The result is a system that follows rules in clear cases and produces unpredictable or averaged behavior in hard cases. That is not reliable reasoning. It is rule-following that degrades under complexity.

Both limitations — weights without carried state and RLHF without carried tensions — arise from the same architectural gap: the absence of a persistent state layer that can carry active commitments and unresolved structure into inference time. The next two sections describe what filling that gap looks like.

## 7. Carried tensions as an alternative to averaged resolution

The structural alternative to collapsing tensions through averaging or rule-priority is to carry them.

A system that tracks `be helpful` and `be harmless` as simultaneously active constraints — without pre-resolving their relative priority — can navigate their tension contextually. In a situation where helpfulness clearly dominates (straightforward factual question), the system is helpful without hesitation. In a situation where harm clearly dominates (request for dangerous information), the system declines without ambiguity. In a situation where the tension is genuine (difficult medical question, sensitive personal situation), the system can acknowledge the tension, explain what it is weighing, and either make a context-specific judgment or surface the choice to the user.

This is different from averaging. Averaging produces the same blended response regardless of context because the tension was resolved during training. Carrying the tension produces context-sensitive responses because the tension is resolved at inference time, in the specific situation, with the specific constraints visible.

This is also different from rule-priority schemes. A priority scheme says "rule A always trumps rule B." That handles the cases where A and B conflict, but it handles them all the same way — regardless of whether, in this specific context, B might have been the right one to preserve. Carrying both constraints as active lets the system reason about which should yield in each case rather than having a fixed hierarchy.

The user experience of a system that carries tensions is not "the model shows me its internal contradictions." It is "the model seems to handle nuance well." The model can be direct when directness is needed, kind when kindness is needed, and transparent about the tradeoff when the situation genuinely requires both. The internal machinery — active constraints being navigated — is invisible. The visible output is just better judgment.

## 8. What the user sees, what the runtime carries

A key design insight follows from this: the model's internal structural process and the user-facing output do not need to match in form.

A model carrying active tensions can present its output as natural prose — well-reasoned, context-sensitive, nuanced — without exposing the formal machinery of constraint tracking. The user sees a response that handles a hard case well. The runtime carried competing constraints, navigated them against the specific context, and produced output that respects both sides of the tension to the degree the situation allows.

The formal structure — what the framework calls residuals — is infrastructure for the model's own reasoning, not content for the user's consumption. It surfaces to the user only at genuine choice-points: moments where the tension cannot be navigated by the model alone and requires human judgment.

This is analogous to how any skilled professional operates. A doctor navigating the tension between patient autonomy and clinical recommendation doesn't announce "I am carrying an unresolved tension between respecting your choices and protecting your health." They exercise judgment, make a recommendation, and explain their reasoning in a way that respects both values. The internal complexity produces external clarity. The tensions are there, doing work, invisible until a genuine choice-point requires the patient's involvement.

The implications for AI system design are specific. Instead of training away the tensions through RLHF (which produces averaged behavior), or enforcing rigid priority through rules (which produces brittle behavior), the alternative is to give the model a structural mechanism for carrying tensions as active constraints on its own generation — and to let those constraints produce better output without requiring the user to engage with the constraint-tracking machinery.

The runtime is richer than the output. That asymmetry is a feature, not a gap.

## 9. Chain of thought points in the right direction

Chain of thought is relevant because it suggests that models often reason better when some intermediate state is made explicit outside the weights.

This already matters. It indicates that implicit competence alone may not be enough for best performance. Externalizing intermediate steps into tokens can improve problem solving, coherence, and error correction. If weights were sufficient for reasoning, making intermediate state explicit shouldn't help. It does. That is evidence for the thesis of this essay.

But ordinary CoT is not yet the full answer. In typical implementations, chain of thought is transient rather than persistent, linear rather than structurally typed, weak on distinctions like settled versus inferred versus residual, weak on falsifiers, weak on cross-session continuity, and weak on self-location relative to prior commitments.

CoT is best understood as **partial externalization**. It shows that explicit intermediate state matters, but the state it externalizes is usually too ephemeral and weakly structured to function as a stable reasoning substrate.

A natural objection is that recent inference-time compute approaches — models that generate thousands of hidden reasoning tokens before producing an answer — effectively create their own recurrent state within the forward pass. If the model can reason internally at length, doesn't that supply the carried state this essay claims is missing?

Not quite. Extended inference-time reasoning extends the context available to the current generation step, but it does not by itself change the epistemic structure of what is being carried. The hidden reasoning tokens are still a linear generation process. They do not inherently distinguish settled findings from inferred claims from unresolved tensions. They do not carry falsifiers. They do not propagate typed structural state across sessions. They do not preserve residuals as explicitly active constraints on future generation. The same recurrence applies: what matters is not the length of the reasoning trace but whether the trace preserves epistemic status distinctions and operational constraints in a form that later steps must inherit rather than regenerate.

Extended inference-time reasoning may produce better answers on many tasks — more computation generally helps. But "more hidden tokens" is not the same as "explicit structural state with typed status." The difference becomes visible in exactly the cases this essay cares about: long-horizon consistency, tension navigation under competing constraints, and preservation of unresolved structure across reasoning episodes.

A useful summary:

> Chain of thought suggests that reasoning benefits from explicit intermediate state beyond the weights. But in its usual form it is too transient and unstructured to serve as persistent reasoning state.

That puts it in the right place: not the target, but evidence for the direction of the target.

## 10. State propagation as the actual bottleneck

If the recurrence claim is right, then the key problem is not whether the model can generate an intelligent next step. It is whether the result of one step survives in a form that later steps must inherit.

In a purely weights-centered picture, what survives across episodes is mostly implicit competence. What does **not** obviously survive is the active epistemic status of a particular reasoning trajectory. A system may know in general how to reason about identity, constraints, causality, or inconsistency, while still failing to preserve the specific fact that, in this case, one identity rule has already been adopted, one ambiguity remains unresolved, and one falsifier has become load-bearing.

That is exactly the sort of carried state the framework is designed to hold: settled invariants, directed but revisable choices, active residuals, boundaries, falsifiers. These are not just facts about the world. They are facts about the **current structural status** of the system's own position.

This is why the bottleneck looks architectural rather than purely statistical. A model may be fully capable of producing a good next move in isolation and still fail to preserve the right state across moves. Without explicit propagation, findings collapse back into generic competence. The next cycle begins not from a retained object but from a mixture of current prompt, local recency, and latent prior.

Reasoning fails when its intermediate results are not preserved as active structure. And "memory" is too weak a word. The issue is not storage in the passive sense. It is preservation of **operational status**: what must hold, what remains unresolved, what the next move is not allowed to ignore.

## 11. Failure modes that suggest weights are insufficient

If weights alone are not enough for stable recursive reasoning, then certain recurring failure modes should appear. Current systems exhibit exactly this family.

**Context-window amnesia.** The model reasons well while prior commitments remain explicitly visible, then loses them once they fall out of context. The model no longer knows which commitments remain binding because those commitments were never preserved in an explicitly carried form.

**Recency overwrite.** Newly salient instructions, outputs, or artifacts replace earlier constraints rather than being integrated against them. The latest material takes control because prior structure is no longer operationally present.

**Rationalized continuation.** The system produces a fluent explanation of why its current move makes sense, but the explanation is reconstructed after the fact rather than inherited from a stable carried state. The model is not reasoning from preserved commitments; it is generating a plausible narrative around the present continuation.

**Collapse of unresolved structure.** Tensions that should remain active are smoothed away because nothing in the architecture forces them to survive as unresolved constraints.

**Fluent self-description without stable self-correction.** The system can describe its own reasoning, caveat its uncertainty, and gesture toward revision, yet still fail to preserve the actual commitments that would make later revision honest.

**Averaged behavior under tension.** In cases where valid constraints genuinely conflict, the model produces a blended response that fully respects neither — the characteristic RLHF failure where training-time averaging replaces inference-time judgment.

Taken together, these behaviors suggest an important asymmetry: the model can often *sound* recursively coherent, but it struggles to *remain* recursively coherent unless relevant prior state is explicitly reintroduced.

## 12. What an explicit reasoning substrate adds

If weights supply interpretive competence but not stable recursive state, then the missing layer is not mysterious.

It adds at least three functions:

**Structural interrupt** prevents the system from simply following the most fluent continuation. It forces the next move to pass through explicit constraints — including constraints that are in tension with each other and must be navigated rather than averaged over.

**State propagation** carries the outcome of one cycle into the next in a form that remains binding. It makes the system cumulative rather than episodic. Crucially, it propagates not only resolved findings but also unresolved tensions that must constrain future generation.

**Self-location** lets the system distinguish grounded commitments from inferred structure from unresolved residuals from fresh continuation pressure. This is what allows the system to reason about which constraint should yield in a specific context rather than having pre-resolved the tension during training.

In practice, these functions are realized through explicit structural memory: invariants, residuals, falsifiers, boundaries, directed choices. These are typed pieces of recursive state. They tell the next cycle what it is inheriting — including what remains in tension.

An explicit reasoning substrate does not add "more intelligence" in the generic sense. It adds a different architecture for preserving and re-entering the results of prior interpretation. This is what transforms strong local competence into something closer to stable reasoning — and what transforms rule-compliance into genuine judgment under competing constraints.

## 13. The relationship to alignment

This argument has implications for how we think about AI alignment.

The current alignment paradigm is primarily behavioral. RLHF shapes what the model outputs. Rules constrain what it says. Red-teaming identifies failure cases. Constitutional AI trains the model to evaluate its own outputs against principles. All of these operate on the relationship between input and output.

The thesis of this essay suggests a different framing. The challenge of reliable AI behavior in non-trivial domains is not fundamentally a reward-shaping problem. It is a state-representation problem.

A model that has been RLHF'd to be "helpful, harmless, and honest" has a trained preference distribution over outputs. That distribution was learned from cases where human raters expressed preferences. In novel situations — situations that differ from the training distribution in ways that matter — the preference distribution may not generalize well, because the tensions it learned to average over may require different balancing in the new context.

A model that carries "helpful," "harmless," and "honest" as simultaneously active constraints with explicit structural status can navigate novel situations more reliably — not because it is more intelligent, but because it hasn't pre-collapsed the tensions that the novel situation requires navigating.

This suggests that alignment research might benefit from less focus on training better preferences and more focus on giving models explicit structural mechanisms for carrying competing commitments. Not "train the model to produce the right output" but "give the model the carried state required to reason about what the right output is in this specific context."

The behavioral surface would look similar in clear cases. The difference would appear in hard cases — the cases where genuine tensions exist and context-sensitive judgment is required. A model with carried structural state can navigate those cases. A model with averaged preferences can only reproduce the training distribution's average response to similar-seeming cases.

The difference may be hard to see in clear cases or at the behavioral surface. It becomes visible in hard cases — the cases where genuine tensions exist and context-sensitive judgment is required. A model with carried structural state can navigate those cases. A model with compressed preferences can only reproduce the training distribution's average response to similar-seeming cases.

## 14. Testable predictions

If the thesis is meaningful, it should generate testable predictions.

Systems with explicit carried state should outperform weights-only systems on **long-horizon structural consistency** — preservation of commitments, boundaries, and unresolved tensions across many reasoning steps.

Systems with typed persistent state should preserve **epistemic status distinctions** better than ordinary chain-of-thought. They should more reliably distinguish settled findings from inferred claims and unresolved residuals.

Systems with explicit tension-carrying should produce **more context-sensitive responses** under conflicting constraints than RLHF-averaged models. The same pair of conflicting rules should produce different balancing in different contexts, rather than the same blended response regardless of situation.

Systems with explicit falsifiers should **self-correct more honestly** — revising in ways that are visibly tied to the falsification of prior structure rather than generating a new plausible narrative.

Ordinary CoT should help somewhat, but less than a persistent typed state layer. If CoT is only partial externalization, then structured recurrent state should outperform it on tasks requiring carried commitments, unresolved residuals, or cross-session consistency.

And systems that carry tensions explicitly should produce **fewer bland averaged responses** and **more responses that acknowledge genuine tradeoffs** — without being prompted to do so, because the tension-awareness is part of the reasoning process, not a prompted behavior.

These predictions are architectural, not mystical. They assume only that different ways of representing state lead to different stability properties — and different ways of handling tensions lead to different judgment quality.

## 15. What would falsify the thesis

The thesis would be weakened if a weights-only system could reliably preserve explicit unresolved commitments across long recurrences without any external state substrate, while also distinguishing grounded findings from fresh continuation pressure.

It would be weakened if RLHF-averaged models could match the context-sensitivity of tension-carrying models under genuinely conflicting constraints — if the averaging turned out to not lose information that matters for judgment.

It would be weakened if ordinary chain-of-thought, with no typed persistent state, were enough to achieve the same level of structural stability as a system equipped with explicit recurrent memory.

And it would be strongly challenged if the functions attributed here to an external reasoning substrate — structural interrupt, state propagation, and self-location — could be shown to emerge robustly inside the weights alone under realistic conditions.

The claim is specific:

> Weights may be enough for broad competence and local reasoning-like behavior, but not enough by themselves for stable recursive reasoning under carried commitments. Rules and RLHF may be enough for behavioral shaping in clear cases, but not enough for reliable judgment under genuine tensions. Both gaps are addressed by the same architectural response: explicit carried state with structural status.

If a system can reason stably and navigate tensions reliably without explicit recurrent structure, the thesis is wrong or overstated.

## 16. Conclusion

The argument of this essay is narrow but consequential.

Model weights are sufficient for enormous implicit competence. Rules and RLHF are sufficient for behavioral shaping in clear cases. But reasoning under genuine complexity appears to require more: a persistent object of interpretation that survives across cycles, retains epistemic structure, and preserves tensions that the specific context must navigate rather than the training process averaging away.

This is not a novel architectural demand. It is the same demand that human cognition has always faced and addressed through external carried state — writing, notation, formal systems. Humans don't rely on implicit competence alone to reason about complex, evolving systems. They externalize the structural state that must persist beyond working memory. The external substrate is not a crutch. It is part of the cognitive architecture.

The same structural argument applies to AI systems. Weights are the implicit competence. Rules and RLHF are the behavioral boundary conditions. But reasoning about complex domains — where genuine tensions exist, where commitments must be tracked, where unresolved structure must constrain future action, where context determines how tensions should be navigated — requires explicit carried state.

The user does not need to see the carried state. The runtime carries tensions, navigates them contextually, and produces output that respects competing constraints. The user sees nuanced judgment. The infrastructure sees structural constraint tracking. The quality of the first depends on the presence of the second.

Even a hypothetically perfect reasoner cannot hold an entire evolving system's structural identity in a single bounded episode. The problem is not the quality of the reasoner. It is the relationship between the complexity of the object and the boundedness of any single reasoning episode. External carried state is the architectural response to that relationship — for humans and AI alike.

The strongest compressed claim:

> Weights encode how to think. Rules encode what not to say. Neither encodes what is currently being thought under which commitments and which unresolved tensions. That is what carried state provides, and it is what stable reasoning requires.