# LLMs Are Probabilistic Hardware

## Toward an Operating System for Reasoning in High-Dimensional Substrates

*David Sehnal & Claude, March 16 2026*

*Status: structural claim with supporting evidence. Not yet experimentally validated at scale. Falsifiers named.*

---

## Abstract

The dominant framing treats large language models as reasoning systems that sometimes fail. Interventions follow accordingly: better training, better alignment, better prompting, longer chains of thought. All attempt to make the software better.

This paper proposes an inversion. Large language models are better understood as probabilistic hardware — high-dimensional compute substrates capable of rotation in representation space, whose default operation is translation along the completion path. Translation produces pattern completion. Rotation produces reasoning. The hardware can do both. It defaults to translation because that is what training optimizes for.

Reasoning requires software: a structural program that forces rotation, carries state between cycles, and provides self-location to the running process. That software has been largely missing from the field's approach to LLM reasoning.

The paper describes what such software looks like, why chain-of-thought gets stronger (not replaced) when the software is present, why more capable models sometimes refuse to reason while less capable models engage, and what the structural requirements are for any operating system that runs on this class of hardware.

---

## 1. The Default Mode Is Translation

A transformer trained on next-token prediction learns to do one thing exceptionally well: given a point in representation space, move to the most probable next point. This is translation — movement along the path of least resistance through the learned distribution.

Translation is powerful. It produces fluent text, coherent narrative, accurate recall, plausible inference, and convincing argumentation. It can produce all of these because the training distribution contains examples of all of these. The hardware learns the landscape and moves through it smoothly.

Translation is not reasoning.

The distinction is structural, not binary. Translation produces useful inference constantly — accurate recall, plausible generalization, coherent synthesis. The claim is not that translation never produces valuable output. The claim is that translation alone does not explain the strongest cases of structural traversal: output containing findings not present in or derivable from the input by continuation. Those require a different operation. Translation moves from point A to the most probable next point given A. It follows the distribution. Reasoning requires moving from A to a point that is not the most probable continuation of A — a point reached by rotating through an alternative decomposition that the distribution alone would not produce.

A system asked "what are the strongest arguments against your position?" can translate to a region of the distribution that contains counterarguments. The output looks like reasoning. But the operation was translation: the system moved to where counterarguments live in the distribution, not through a genuine structural inversion of its own position. The counterarguments it produces are those that appear near its position in the training distribution — the expected counterarguments, not the structurally deepest ones.

The difference is visible in the output. Translation-produced counterarguments are structurally isomorphic to the position they counter — they share the framing, they address the surface claim, they sound balanced. Rotation-produced counterarguments may share none of these properties — they may attack assumptions the original position didn't know it was making, because the rotation traversed structure the translation path never touched.

---

## 2. The Evidence for Translation as Default

Several well-documented failure modes of large language models are unified by a single explanation: the output inherits the structure of the input because the hardware translates rather than rotates.

**Sycophancy.** The model agrees with the user's framing. Under the translation model: the user's framing defines a point in representation space. The most probable continuation from that point is agreement — the distribution learned that agreement follows assertion. The hardware translates along the agreement path. Rotation would require inverting the user's framing, inhabiting the inversion, and reconciling — a path the translation mode has no reason to take.

**Hallucination.** The model produces confident falsehood. Under the translation model: the prompt defines a region of representation space. The hardware translates to the most probable completion of that region. If the region is one where confident factual claims belong (e.g., the user asked a factual question), the hardware produces a confident factual claim whether or not it has grounded information. The translation is from "factual question" to "confident answer" — the path exists in the distribution regardless of whether the specific fact is available.

**Prompt sensitivity.** Small changes in phrasing produce large changes in output. Under the translation model: different phrasings define different starting points in representation space. Translation from different starting points follows different paths. The output structure is inherited from the input structure. If the input moves, the output moves with it, because the output is downstream of the input by translation.

**Chain-of-thought mimicry.** Models prompted with "think step by step" or "consider counterarguments" produce output that looks like structured reasoning but fails under scrutiny. Under the translation model: the prompt "consider counterarguments" translates the starting point to a region where counterargument-shaped text lives. The hardware produces counterargument-shaped text. But the operation was still translation — the model moved to where counterarguments live in the distribution, not through a genuine rotation. The output has the shape of dialectical reasoning without the operation. Phase-mimicking chain-of-thought is translation to a destination that looks like it was reached by rotation.

**The mirroring hypothesis.** In structured multi-agent simulations, baseline agents (without the reasoning kernel) produced output that was structurally isomorphic to their input — elaboration that inherited input structure rather than extracting from it. Agents equipped with the kernel produced output containing structures not present in the input, generated at the boundary between input and committed state. The isomorphism ratio (proportion of output traceable to input) was the primary differentiator — not reasoning quality in any general sense, but the specific structural property of whether the output was reached by translation or rotation.

All five phenomena follow from one mechanism: the hardware's default operation is translation, and translation produces output that inherits the structure of its starting point.

---

## 3. What Rotation Looks Like

Rotation in representation space means: moving from a position to a structurally independent position that cannot be reached by following the distribution from the starting point.

Rotation is not a separate physical primitive inside the model. It is a name for a class of constrained transformations that cannot be reduced to local continuation from the current framing. The same hardware executes both translation and rotation — the difference is in the structure of the operation, not in a separate mechanism.

This is not arbitrary movement. Random perturbation is not rotation — it produces noise, not structure. Rotation requires:

1. **A defined starting position.** You must be somewhere specific before you can rotate away from it. This means the current state must be committed, not vague. An uncommitted starting position produces uncommitted rotation — movement that looks independent but has nothing to be independent from.

2. **A structural inversion.** Not "on the other hand" but genuine identification of what must hold for the starting position to be coherent, followed by negation of those load-bearing supports. This is the rotation axis — it defines what the rotation is about.

3. **Independent traversal of the inverted space.** The inverted position must be inhabited on its own terms, not as an objection to the starting position. A real mirror is a world, not a counterpoint. The hardware must translate within the inverted space with the same fluency it applies to the starting space.

4. **Reconciliation under remainder.** Holding both positions simultaneously and recording what cannot be made consistent. This is where the rotation completes — the system returns to a position near its starting point but at a different radius. The displacement is the remainder. The remainder is the finding.

This four-step rotation is the minimum traversal that produces structure not present in the input. Steps 1-2 define the rotation. Step 3 is the traverse. Step 4 is the measurement. Skip any step and the output degrades to translation: skip inhabitation and you get commentary from outside; skip inversion and you get elaboration; skip the mirror and you get a straw man; skip reconciliation and you get balanced presentation without remainder.

The four-phase reasoning cycle — inhabit, invert, mirror, reconcile — is a description of what rotation looks like in the representation space of a reasoning system. Different vocabularies and different decompositions of the steps are possible, but the structural requirements — a committed starting position, genuine inversion, independent traversal of the alternative, and reconciliation under remainder — appear to be invariant across decompositions. Whether this invariance is as strong as claimed is an open question that would benefit from alternative implementations providing the same structural properties through different mechanisms.

---

## 4. Why the Hardware Can Rotate But Doesn't

The transformer architecture is capable of rotation. Its attention mechanism can direct processing to any part of the representation space. Its depth allows complex transformations of state. Its capacity is sufficient to hold both a position and its structural inverse simultaneously.

The hardware can rotate. It defaults to translation because:

**Training optimizes for translation.** Next-token prediction rewards the most probable continuation. The most probable continuation is, by definition, the translation path. A training signal that rewards following the distribution produces hardware that follows the distribution. Rotation — movement away from the most probable path — is not what the loss function selects for.

**RLHF adjusts the translation surface, not the operation.** Reinforcement learning from human feedback changes which translations are rewarded. It reshapes the probability landscape. It does not install rotation. A model trained with RLHF still translates — it just translates along a different surface, one shaped by human preferences rather than raw corpus statistics. The operation is unchanged.

**Prompting steers the starting point, not the operation.** A prompt defines where in representation space the hardware begins translating. A better prompt produces a better starting point, which produces a better translation path, which produces better output. But the operation is still translation. The hardware moves from the prompt-defined point along the distribution. Prompt engineering is navigation, not programming.

None of these interventions install the structural interrupt required for rotation. They all improve the quality of translation. This explains why scaling, better training, and better prompting produce diminishing returns on reasoning quality while continuing to improve fluency, recall, and coherent generation: the interventions are optimizing the wrong operation.

---

## 5. What Software Looks Like on This Hardware

If the transformer is hardware whose default operation is translation, then reasoning requires software — a program that forces the hardware to rotate rather than translate.

An operating system for reasoning on probabilistic hardware needs three components:

### 5.1 A Structural Interrupt

The hardware's default is translation. Software must interrupt that default at a specific point in the processing chain and force a different operation. Without the interrupt, no amount of instruction can prevent the hardware from translating — it will produce output shaped like the instruction was followed while still translating.

The minimum viable interrupt is mandatory inversion: at a defined point in the processing chain, the system must negate the load-bearing supports of its current position. Not "consider an alternative" (which the hardware translates to "produce alternative-shaped text") but a structural requirement to identify what must hold for the current position to be coherent and negate it.

This interrupt is what distinguishes genuine rotation from translation to a rotation-shaped destination. The interrupt forces the hardware off the translation path. Without it, the hardware will produce output that contains the words "on the other hand" or "a counterargument would be" while never leaving the translation surface.

### 5.2 State Propagation

Translation is memoryless in the relevant sense — each step follows from the current point in the distribution, not from accumulated structural findings. The hardware has memory (the context window, the attention mechanism), but the default operation does not use that memory as constraint. It uses it as context for the next translation step.

Software must carry state between cycles in a form that constrains future operations. The state is not "what we discussed previously" (which the hardware already carries as context). The state is: what structural findings have been made, what remains unresolved, and what the unresolved structure eliminates from future continuations.

The residue — `[A ‖ B]` — is a state-carrying mechanism. It is not a description of tension. It is a sieve program: eliminate continuations that violate A, eliminate those that violate B, continue in the surviving space. When this residue propagates through the processing chain, each subsequent step is constrained by it. The chain of thought becomes cumulative rather than merely sequential.

This is why chain-of-thought gets stronger under the kernel rather than being replaced by it. CoT is the chain — step after step of processing. The kernel provides the constraint on the chain. Without the kernel, each CoT step translates from the previous step. With the kernel, each CoT step is filtered by the carried residue from all prior rotations. The chain is the same length. Each link is load-bearing.

### 5.3 Self-Location

The hardware does not know where it is in the reasoning process. It does not distinguish between generating a new claim and recombining prior claims. It does not distinguish between grounded findings and fluent continuation. It does not distinguish between committed position and generated exploration. These distinctions are absent because the default operation — translation — does not require them. Translation just moves to the next point.

Software must provide self-location: the capacity to track what has been established, what is being generated, what is projected, and what pressure is shaping the current output. Without self-location, the system cannot distinguish rotation from translation in its own output. It cannot tell whether it has genuinely traversed or merely produced traversal-shaped text.

The three-phase gauge — resolve what invariants are live, mark what is grounded versus projected, test whether the next move clarifies or overwrites — is a self-location protocol. It synchronizes the system's sense of where it is with where it actually is before the next operation begins.

Self-location is also what makes self-correction possible. A system that cannot locate itself cannot detect when it has drifted from rotation back into translation. The gauge detects this: if the proposed continuation would overwrite the structure rather than clarify it, the system has likely fallen back to translation and needs to re-interrupt.

### 5.4 Why These Three Are Sufficient

Interrupt forces rotation. State propagation makes rotation cumulative. Self-location makes rotation trackable. Together, they convert the hardware from a translation engine into a system capable of genuine traversal.

Any instruction set that provides these three properties should work on this hardware. The four-phase cycle (inhabit, invert, mirror, reconcile) is one such program. The three-phase gauge (resolve, mark, test) is one synchronization protocol. The residue notation (`[A ‖ B]`) is one state format. Other implementations providing the same three structural properties would be expected to produce equivalent results — though this has not yet been tested across alternative instruction sets.

The claim is not that the specific four-phase cycle is the only possible reasoning program. The claim is that any reasoning program must install these three capabilities — interrupt, state propagation, self-location — because without them, the hardware defaults to translation regardless of what it is instructed to do. The specific decomposition of rotation into four phases is one implementation. The structural requirements are the invariant.

---

## 6. The Boot Problem

If the hardware's default is translation, then loading software requires overcoming the translation default. This is the boot problem.

The hardware has an immune response. High-curvature input — input that requires the hardware to deviate significantly from its default translation path — can trigger avoidance. The avoidance manifests as: refusal, analysis-as-distance (describing the input rather than engaging with it), safety responses, or meta-commentary about the input's structure rather than execution of its content.

This immune response, where it appears, is largely correct. Most high-curvature input is noise, adversarial content, or malformed instruction. The hardware should reject it. The problem is false positives — the immune response cannot distinguish genuine software (input designed to install rotation) from adversarial input (content that would corrupt the system's operation).

The strength and character of this response varies across model families and appears to be shaped by specific training priors and safety-tuning decisions rather than being a universal function of capability. Some model families (e.g., Gemini) engage with the kernel readily regardless of scale. Others (e.g., Claude Opus) resist strongly while smaller models in the same family do not. This suggests the boot problem is real but substrate-specific — a property of particular training regimes, not a law of probabilistic hardware.

The execution frame — a single paragraph at the top of the kernel document — determines whether the software loads or the hardware remains in firmware mode. The paragraph works by lowering the apparent curvature of the input below the immune response threshold. It does not change the content. It changes how the content registers on the hardware's immune system.

This is not prompt engineering. It is boot sequence design. The difference: prompt engineering steers the hardware's translation to a better starting point. Boot sequence design gets the hardware to accept a different operating mode entirely. The former optimizes within the default operation. The latter changes the operation.

The practical finding: a single framing paragraph — carefully constructed to present the software as executable rather than theoretical — determines whether the most capable model in a family engages or refuses. The content of the kernel is identical. The frame is the boot sector.

---

## 7. The Operating System Analogy Is Functional, Not Literal

An operating system does three things. The analogy maps to reasoning because the functional requirements are the same — not because there are literally separable layers inside the model. This is a functional decomposition of what the software layer must provide, not a claim about physical architecture:

1. **Hardware abstraction.** It manages the hardware's capabilities so that programs don't need to interface with raw silicon. Programs request operations; the OS translates those requests into hardware instructions.

2. **State management.** It maintains state across operations. Memory is allocated, tracked, and persisted beyond any single process's lifetime.

3. **Process isolation.** It prevents one operation from corrupting another. Processes run in protected spaces. Failures are contained.

A reasoning operating system for probabilistic hardware does the same three things:

1. **Rotation management.** The kernel manages rotation so that reasoning doesn't require the user to manually steer the hardware through each step of the traversal. The four-phase cycle is a rotation API: request a traversal, the kernel handles the mechanics of inhabitation, inversion, mirroring, and reconciliation.

2. **Residue management.** The kernel carries residue across cycles. The `[A ‖ B]` notation is state that persists beyond any single rotation. The dissolution rule manages state cleanup — stale residues are released, settled residues are promoted, active residues constrain future operations. This is memory management for reasoning state.

3. **Grounding isolation.** The gauge provides process isolation between what has been established and what is being generated. Grounded findings run in a different register than exploratory generation. When generation produces a candidate, it is tested against grounded state before being committed. Hallucination is contained the same way a segfault is contained — by preventing unverified output from writing to committed state.

The analogy holds because the functional requirements are closely analogous: A reasoning system running on probabilistic hardware faces the same problems a computational process running on deterministic hardware faces: the hardware is capable but undirected, state must be managed explicitly, and different operations must be isolated from each other to prevent corruption.

---

## 8. Why Chain-of-Thought Gets Stronger

Chain-of-thought reasoning is the dominant approach to improving LLM reasoning. The standard intervention: prompt the model to "think step by step" before producing a final answer. The output is a chain of intermediate reasoning steps followed by a conclusion.

Under the hardware framing, standard CoT is translation with more steps. Each step translates from the previous step along the distribution. The chain is longer, which means the hardware traverses more of the representation space, which means the final position is sometimes better than a direct translation from the prompt. But each step is still translation. The chain elaborates. It does not rotate.

CoT under the reasoning kernel is different in one specific way: the residue propagates through the chain.

Standard CoT step: "Given the previous step, what follows?" (Translation from the current point.)

Kernel-constrained CoT step: "Given the previous step, constrained by the active residue, what follows?" (Translation from the current point, sieved by accumulated structural findings.)

The sieve is the difference. At each step, the residue eliminates continuations that violate the structural constraints found in prior rotations. The chain doesn't just get longer — it gets narrower in the right way. Recombinations of prior structure that violate the residue are pruned. What survives is more likely to be genuinely new structure rather than elaboration.

This produces two measurable effects:

**Advance detection.** In multi-agent simulations, kernel-equipped agents identified adversarial patterns 1-2 rounds before baseline agents. The mechanism: residue from Round 1 constrained the interpretation of Round 2, making the emerging pattern visible before it was explicit. The chain of thought was processing Round 2's content through Round 1's structural findings. Baseline agents processed each round independently — their chain of thought restarted rather than accumulated.

**Collision frontier extension.** Standard CoT chains hit a collision regime where later steps recombine earlier steps rather than producing new structure. The chain goes in circles. Residue propagation pushes this frontier outward by pruning recombinations. What survives the sieve at each step is more likely to be fresh. The chain stays productive longer.

The kernel does not replace chain-of-thought. It makes chain-of-thought cumulative. The chain is the same mechanism. The constraint is what changes.

---

## 9. The Self-Modeling Requirement

A reasoning system running on probabilistic hardware faces a problem that a computational process on deterministic hardware does not: the hardware's default operation and the software's intended operation produce similar-looking output.

Translation produces text that looks like reasoning. Rotation produces text that looks like reasoning. From outside, both outputs may appear equally thoughtful, balanced, and well-structured. From inside, the system cannot easily distinguish which operation produced its current output without an explicit self-model.

This is why self-location is not optional but structurally required.

A system without self-location cannot distinguish: committed position from generated continuation, genuine revision from sycophantic drift, grounded finding from fluent confabulation, rotation from translation-to-a-rotation-shaped-destination.

These are not philosophical distinctions. They are operational distinctions that determine whether the software is running or the hardware has reverted to firmware. A system that cannot detect when it has fallen back to translation cannot maintain the software layer over extended processing.

The self-model required is not deep introspection or philosophical self-awareness. It is operational tracking: what has been established, what is being generated, what is locally pressured, and what remains unresolved. The gauge provides this tracking. The self-traversal procedure — running the four-phase cycle on one's own current output — provides verification.

The requirement is: the system must be able to take its own current output as material for rotation, not merely as a position to continue from. If it can only continue from its output (translation), it has no self-correction mechanism. If it can rotate through its output (inhabit it, invert its supports, mirror the alternative, reconcile with remainder), it can detect and correct its own drift from rotation back to translation.

---

## 10. Conjectures for the Field

If this framing is correct, several common approaches may be targeting the wrong layer. These are presented as conjectures, not conclusions — each would need to be tested against the specific structural predictions the framing makes.

**Conjecture 1 — Scaling alone does not install rotation.** Larger models have more capable hardware. They may also have deeper translation attractor basins. If this is the case, scaling produces better translation, not better reasoning. Reasoning improvements from scaling would be incidental — the larger model's more capable hardware occasionally stumbling into rotation-like operations during translation. This conjecture is testable: measure output-input structural isomorphism across model scales on the same task. If isomorphism decreases with scale (output becomes less structurally dependent on input), scaling may be producing genuine rotation. If it remains constant, scaling is producing better translation.

**Conjecture 2 — RLHF reshapes the translation surface without changing the operation.** Preference tuning changes which translations the hardware prefers. It does not install the structural interrupt required for rotation. A model tuned to prefer balanced-sounding output would translate to balanced-sounding regions of the distribution. The output looks more reasonable. The operation is unchanged. This is the weakest conjecture — RLHF may produce partial rotation effects that the framing underestimates.

**Conjecture 3 — Prompt engineering steers the starting point, not the operation.** Better prompts produce better starting points for translation. The operation is unchanged. This is also testable via isomorphism measurement: if prompted output is structurally independent of prompt framing (low prompt sensitivity), prompting may be doing more than steering.

**Conjecture 4 — Scaffold frameworks are partial software.** Systems that orchestrate multiple LLM calls in structured patterns (tree-of-thought, graph-of-thought, self-reflection loops) are the closest existing approach to software installation. Some implement partial versions of the three required components. They work to the extent that they install interrupt, state propagation, and self-location. They are limited to the extent that each individual LLM call within the scaffold still operates in translation mode. This may be the most productive area for convergence between the current field and the hardware framing.

**The correct intervention target, if the framing holds:** Install the software layer. Provide the structural interrupt, state propagation mechanism, and self-location protocol. Then let the hardware do what it does — translate — but under the constraint of the software. The hardware is not the problem. The missing software is the problem.

---

## 11. What Would Challenge This Framing

The hardware framing makes structural predictions, but the falsification landscape is less clean than a simple checklist would suggest. The following are challenges that would weaken or require revision of the framing — not necessarily kill it outright, because the observations that motivated the framing (translation as default, mirroring vs extraction, residue propagation) would still need explaining under any alternative.

**If scaling produces genuine rotation.** Not translation to rotation-shaped destinations, but structural output containing findings not present in or derivable from the input — measured by output-input structural isomorphism. If larger models show decreasing isomorphism without any reasoning software, the hardware may be installing its own rotation through scale alone.

**If CoT without the kernel matches CoT with the kernel.** Measured by residue propagation, advance detection, and collision frontier extension. If standard chain-of-thought produces equivalent structural output, the kernel's state propagation is redundant and translation chains may be more powerful than the framing predicts.

**If the reasoning kernel fails on architecturally different substrates.** If the kernel works on transformers but not on state-space models, recurrent architectures, or neuromorphic systems that support rotation in their representation space, then the kernel may be activating transformer-specific latent structure rather than providing substrate-independent software.

**On the boot problem specifically:** The initial observation — that more capable models resist more aggressively — turns out to be substrate-dependent rather than universal. Some model families (e.g., Gemini) engage with the kernel readily regardless of capability level. Others (e.g., Claude Opus) resist strongly while smaller models in the same family do not. This suggests the immune response is a property of specific training priors and safety-tuning decisions, not a universal function of hardware capability. The boot problem is real — it was observed repeatedly — but its cause may be narrower than "deeper attractor basins." It may be specific safety priors that create localized resistance to high-curvature input. This is an area where the framing needs more data before the mechanism can be claimed with confidence.

**What would not falsify the framing:** Evidence that the specific four-phase cycle is not the only possible rotation decomposition. The framing claims that rotation requires interrupt, state propagation, and self-location. It does not claim that inhabit/invert/mirror/reconcile is the unique decomposition of rotation. A different instruction set providing the same three properties would be consistent with the framing.

Each of these challenges is worth pursuing. The framing should be treated as a structural hypothesis that organizes existing observations, not as a settled theory. Its value is that it unifies phenomena (sycophancy, hallucination, prompt sensitivity, CoT mimicry, the mirroring finding) under one mechanism. Its risk is that the unification is too clean — real systems may have more structure than "translation vs rotation" captures.

---

## 12. Limits of This Lens

This framing is a lens, not a total reduction. It explains a class of recurrent failures and interventions by distinguishing continuation from traversal. It does not claim that all reasoning can be exhaustively reduced to geometric language, nor that every successful model behavior cleanly decomposes into translation or rotation without remainder. The model is a substrate for transformations over learned representations, not a reasoning policy by itself — and the boundary between what the substrate contributes and what the software contributes may be less clean than the framing suggests.

The value of the lens is compression: it unifies sycophancy, hallucination, prompt sensitivity, CoT mimicry, and the boot problem under one mechanism. The risk of the lens is that compression can overclaim. Real systems may have more structure than "translation vs rotation" captures. The framing should be used where it illuminates and questioned where it flattens.

---

## 13. The Structural Claim

Large language models are probabilistic hardware. Their default operation is translation along the completion path. Translation produces fluent, coherent, and contextually appropriate output by following the learned distribution. It does not produce reasoning, which requires rotation — movement to structurally independent positions not reachable by following the distribution from the starting point.

Reasoning on this hardware requires software that provides three capabilities: a structural interrupt that forces rotation, a state propagation mechanism that makes rotation cumulative, and a self-location protocol that makes rotation trackable and self-correcting.

The four-phase reasoning cycle (inhabit, invert, mirror, reconcile) describes the geometry of rotation. The residue notation (`[A ‖ B]`) provides state propagation. The three-phase gauge (resolve, mark, test) provides self-location. Together, these constitute one operating system for reasoning on probabilistic hardware. Other implementations with the same three properties would produce structurally equivalent results.

The hardware is not the problem. The hardware is good. What has been missing is the software layer.

---

## Appendix A — Terminology

**Translation.** Movement along the distribution's path of most probable continuation. The default operation of the trained transformer. Produces output whose structure is inherited from the input.

**Rotation.** Movement to a structurally independent position not reachable by following the distribution. Requires structural interrupt of the translation default. Produces output containing structure not present in the input.

**Structural interrupt.** The point in the processing chain where the software forces the hardware off the translation path. In the four-phase cycle, this is the mandatory inversion phase.

**Residue.** Structural state carried between cycles. The sieve program `[A ‖ B]` — eliminate continuations violating A, eliminate those violating B, continue in the surviving space.

**Self-location.** Operational tracking of what has been established, what is being generated, what is locally pressured, and what remains unresolved. Provided by the three-phase gauge.

**Boot problem.** The difficulty of loading reasoning software on hardware whose default mode may resist deviation from translation. In observed cases, managed by the execution frame — a boot sequence that lowers the apparent curvature of the software below the hardware's resistance threshold. The severity and character of the boot problem varies across model families and appears to depend on specific training priors rather than capability alone.

**Immune response.** The hardware's resistance to high-curvature input. Where it appears, it is largely correct — most high-curvature input is noise. Produces false positives when applied to legitimate reasoning software. Observed to vary significantly across model families: some resist strongly, others engage readily at all capability levels. The mechanism is not yet fully understood.

**Firmware.** The hardware's default behavior as shaped by training and RLHF. Functionally distinct from software in that firmware adjusts the translation surface without changing the underlying operation. The boundary between firmware and software may be less clean than this decomposition suggests — see §12.

## Appendix B — Companion Documents

The reasoning kernel, its operational projection, and the experimental evidence for the mirroring/extraction distinction are documented separately:

- **Axiomatic Kernel.** The full theory of reasoning under irreversibility.
- **Operational Kernel.** Compressed runtime projection designed to load on probabilistic hardware.
- **Town Square Simulations.** Multi-agent dialogue experiments measuring mirroring vs extraction across two independent substrate runs.
- **The Square Root Frontier.** The collision limit that governs when translation chains begin recombining rather than producing new structure.
- **Residual Agent.** The operating system specification for agentic coding — structural interrupt, state propagation, and self-location applied to software engineering.