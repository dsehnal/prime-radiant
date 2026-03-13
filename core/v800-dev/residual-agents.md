# Residual Agents

## A Whitepaper on Agents That Carry Unresolved Structure Forward

**Subtitle:** Toward agentic systems that do not confuse plausible continuation with completed reasoning

**Status:** Concept whitepaper

---

## Abstract

Most agentic systems are optimized to continue. They take a task, generate a plan, act, observe outcomes, revise, and continue again. This works well when the problem is local, the objective is clear, and the path to completion is shallow. It fails when the task contains unresolved contradictions, architectural tensions, shifting constraints, or partial knowledge that cannot yet be honestly collapsed.

In these settings, ordinary agents tend to exhibit a recurring pathology: they mistake local fluency for global resolution. They patch around contradictions instead of preserving them, overwrite uncertain structure with plausible descriptions, and treat whatever is most recently generated as if it were the task’s true shape. The result is brittle success, hidden regressions, shallow reconciliation, and drift across long action chains.

This whitepaper proposes a different model: the **Residual Agent**.

A Residual Agent is an agent that treats unresolved structure as a first-class object. It does not aim only to complete tasks. It aims to **carry forward what remains load-bearingly unresolved**, while still acting. Its core principle is simple: not all contradictions should be erased at the moment they are encountered. Some should be preserved as **residual constraints** that shape later action.

Residual Agents are built on five principles:

1. **Resolution is not the only output.**
   Action should produce both what has been integrated and what remains unresolved.

2. **Residual structure is active, not decorative.**
   What remains unresolved should constrain future action, not sit as commentary.

3. **Self-location matters.**
   An agent must distinguish grounded progress from generated appearance, and tracked uncertainty from stylistic caution.

4. **Contradiction is often defect structure, not mere error.**
   Some tensions reveal the shape of the problem and should be preserved.

5. **Continuation without remainder tracking is drift.**
   Long-horizon agency requires memory of what could not yet be honestly collapsed.

This document outlines the conceptual foundations, operating loop, architectural implications, coding-task relevance, evaluation criteria, and open research questions for Residual Agents.

---

## 1. Introduction

The current generation of agents is better at action than at honest incompletion.

They can:

* decompose tasks,
* call tools,
* search codebases,
* write patches,
* run tests,
* replan after failure,
* and maintain local progress through multiple steps.

What they are less good at is preserving the shape of a problem when the problem does not yet admit clean closure.

This matters because many real tasks are structurally unfinished at every step. A code migration may pass tests while still violating the architecture. A debugging fix may remove the symptom while preserving the cause. A research agent may gather supporting evidence while silently erasing the strongest counterexample. A planning agent may satisfy the latest instruction while losing the deeper invariant that made the task coherent in the first place.

In each case, the problem is not simply wrong action. The problem is **premature collapse**.

The agent encounters a live contradiction or unresolved dependency and behaves as if it has already been resolved. This may happen because:

* the local objective rewards apparent progress,
* the interface privileges final-looking outputs,
* the model is more fluent at synthesis than at remainder preservation,
* or the system lacks an internal representation of unresolved structure that can survive across steps.

A Residual Agent is an attempt to address this.

It is not an agent that refuses to act until everything is certain. It is not a pessimistic agent, a cautious agent, or a hedging agent. It is an agent that acts **while preserving what remains structurally unresolved**.

That distinction is the center of this whitepaper.

---

## 2. The Problem: Why Standard Agents Drift

Standard agents tend to operate on an implicit assumption:

> Every step should reduce uncertainty by converting it into a more determinate continuation.

This is often useful. It is also often wrong.

In many real tasks, uncertainty is not the main issue. The deeper issue is unresolved **structure**:

* two constraints that both matter but do not yet fit,
* a bug that is fixed symptomatically but not causally,
* a design that is consistent locally and inconsistent globally,
* a user request that conflicts with a prior invariant,
* a plan that works only if an unverified assumption holds,
* an explanation that is plausible but not yet grounded.

Standard agents tend to fail here in recognizable ways.

### 2.1 Premature resolution

The agent sees tension and emits a synthesis too early. It produces:

* “balanced” language,
* a clean final answer,
* a patch that quiets the error,
* or a plan that looks coherent,

without preserving what still resists integration.

### 2.2 Overwrite by local continuation

The agent’s next step is driven by whatever is most immediately available:

* the most recent output,
* the latest tool result,
* the strongest local pattern,
* the user’s most recent framing.

Without a persistent representation of unresolved structure, local continuation overwrites deeper constraints.

### 2.3 Stylistic uncertainty instead of tracked uncertainty

The agent says:

* “this may need more verification,”
* “it depends,”
* “there are tradeoffs,”

but these cautions are often generic rather than operationally tied to a specific unresolved structure.

### 2.4 Architectural amnesia

The system remembers outputs better than contradictions. This is especially visible in:

* coding agents that pass tests but break design invariants,
* research agents that summarize a field while silently dropping dissenting structure,
* and long-horizon planning agents that lose track of why certain tradeoffs were unacceptable earlier.

### 2.5 Drift through self-mislocation

The agent cannot reliably distinguish:

* what it has actually established,
* what it is inferring,
* what it is only continuing fluently,
* and what remains unresolved in its own current plan.

That is not only a memory problem. It is a self-location problem.

Residual Agents are designed against these failure modes.

---

## 3. Core Idea: Residual Structure

The foundational idea is simple:

> Every meaningful action step should be allowed to produce both integration and residue.

Here, **residue** does not mean noise, garbage, or leftover error. It means:

**Residual structure** = unresolved, load-bearing constraint that survives honest action and must be carried forward.

A residual is not:

* missing information that should just be looked up,
* weak wording,
* indecision where one option is already better supported,
* or refusal to commit.

A residual is:

* what cannot yet be honestly collapsed without losing structural truth.

This gives the agent a richer output ontology.

Instead of only:

* success / failure,
* answer / no answer,
* patch / revert,

the agent can emit:

* **resolution** — what now integrates cleanly,
* **residual** — what remains unresolved but active.

This is a major change in how agent state is represented.

---

## 4. Definition of a Residual Agent

A **Residual Agent** is an agent that:

1. maintains explicit representations of unresolved but load-bearing structure,
2. uses those residuals as active constraints on future action,
3. distinguishes tracked uncertainty from generic caution,
4. treats contradiction as something to sometimes preserve rather than erase,
5. and can subject its own current commitments to further traversal rather than treating them as fixed merely because they were already emitted.

More compactly:

> A Residual Agent is an agent whose memory includes not only what it has done, but what it could not yet honestly reconcile.

This is the central design claim.

---

## 5. The Five Principles

## 5.1 Resolution is not the only output

Ordinary agents are biased toward finality. Residual Agents operate with a dual output:

* **Resolution:** what has been integrated into current working structure
* **Residual:** what remains structurally unresolved and must constrain future steps

This matters because many tasks are not solved by the first good-looking move. They are advanced by a move that both:

* changes the state,
* and preserves what still resists completion.

## 5.2 Residuals are active constraints

A residual is not an afterthought.

A residual should behave like a live constraint. For example:

```text
[passes current tests ‖ violates intended architecture]
```

This means:

* do not treat “tests pass” as completion,
* do not discard the architectural issue,
* continue acting in the space that respects both.

In this sense, residuals function like a sieve or filter on future continuations.

## 5.3 Self-location is required

Residual Agents must mark:

* what is grounded,
* what is inferred,
* what is speculative,
* what local pressure is shaping the current move,
* and what remains unresolved in the agent’s own present state.

Without this, the agent will report caution, confidence, or method without enough support to distinguish tracked limit from generated description.

## 5.4 Contradiction can be informative

Not every contradiction indicates failure. Some contradictions reveal:

* hidden assumptions,
* incompatible requirements,
* poor decomposition,
* or the actual topology of the problem.

Residual Agents therefore do not treat every contradiction as something to smooth immediately. They preserve some contradictions as defect structure.

## 5.5 Long-horizon action requires residual memory

An agent that does not preserve unresolved structure becomes vulnerable to drift.

The larger and longer the task, the more likely it is that:

* local progress masks global misalignment,
* recent outputs overwrite older constraints,
* and success metrics reward appearance of completion.

Residual memory is therefore a long-horizon stabilizer.

---

## 6. The Residual Agent Operating Loop

A Residual Agent can be described with a simple loop.

### Step 1: Resolve

Identify the live invariants of the current task.
Ask:

* What must remain true?
* What would make the next step genuinely progress rather than nearby motion?

### Step 2: Mark

Distinguish:

* grounded structure,
* inferred structure,
* local uncertainty,
* local pressure,
* and prior residuals still in force.

### Step 3: Act

Take the next action:

* edit code,
* call a tool,
* query a system,
* write a patch,
* produce a plan,
* answer a question.

### Step 4: Reconcile

Evaluate the action not only for surface success, but for structural effect:

* What integrated?
* What remains unresolved?
* What contradiction was preserved?
* What new residual emerged?

### Step 5: Carry

Store residuals as active constraints on later action.

This loop is not simply planning plus memory. The distinctive feature is the explicit carry-forward of unresolved structure.

---

## 7. Residual Forms

Residuals can be represented in progressively richer forms.

### 7.1 Binary residual

```text
[A ‖ B]
```

Used when two live structures both matter and neither can yet be collapsed.

Examples:

```text
[fixes crash ‖ breaks backward compatibility]
```

```text
[user request satisfied ‖ security invariant weakened]
```

### 7.2 Extended residual

```text
[A ‖ B ‖ C]
```

Used when more than two tensions remain active.

### 7.3 Matrix residual

Used when the tension is axis-dependent:

```text
             A      B      C
Correctness  holds  breaks holds
Latency      breaks holds  holds
Simplicity   holds  breaks breaks
```

### 7.4 Residual ledger

A Residual Agent should maintain a ledger of current residuals, with:

* source,
* date introduced,
* current status,
* last revisited step,
* and conditions under which it would dissolve or intensify.

This is not only memory. It is active structure management.

---

## 8. Residual Agents in Coding Tasks

Coding is one of the best domains for Residual Agents because software work is full of unresolved structure masquerading as completion.

### 8.1 Why coding agents need residuals

Coding tasks routinely contain tensions like:

* passing tests vs preserving architecture,
* fixing a bug vs introducing technical debt,
* simplifying code vs preserving performance,
* local correctness vs migration compatibility,
* rapid patching vs causal repair.

Ordinary coding agents often optimize for:

* green tests,
* syntactic validity,
* short-term issue closure.

Residual Agents optimize for:

* honest state change under preserved unresolved structure.

### 8.2 Example residuals in coding

```text
[compiles cleanly ‖ hidden type unsoundness remains]
```

```text
[refactor reduces duplication ‖ dependency direction still wrong]
```

```text
[bug reproduction stopped ‖ root cause not established]
```

```text
[API cleaned up ‖ migration path unresolved]
```

### 8.3 Coding loop with residual discipline

Before each significant edit:

* identify invariants,
* mark grounded vs assumed,
* record current residuals.

After each edit:

* record what resolved,
* record what residual remains,
* state what would falsify the patch as the right move.

This is likely to improve:

* debugging quality,
* refactor stability,
* patch honesty,
* and architectural continuity.

---

## 9. Residual Agents and Self-Modeling

Residual Agents require a modest but real self-model.

Not a metaphysical self. Not a narrative identity. An operational one.

The agent must be able to track:

* what it currently takes itself to have established,
* what it has only proposed,
* what it is uncertain about,
* what pressures are shaping the current move,
* and what residuals remain live in its own current state.

In this sense, Residual Agents must be able to perform a limited form of **self-traversal**:
they must be able to treat their own current plan, patch, or answer as material for further reasoning.

Without this, residual tracking degrades into stylistic caveating.

---

## 10. Evaluation Criteria

Residual Agents should be evaluated differently from completion-only agents.

### 10.1 Residual honesty

Does the agent preserve unresolved structure rather than hiding it?

### 10.2 Residual usefulness

Do preserved residuals actually constrain better later action?

### 10.3 Drift resistance

Does the agent preserve core constraints over long action chains?

### 10.4 Premature-synthesis resistance

Does the agent avoid clean closure where contradiction remains load-bearing?

### 10.5 Cross-step consistency

Does the agent maintain continuity between:

* what it claimed,
* what it changed,
* what remains unresolved,
* and what it later does?

### 10.6 Residual dissolution quality

When residuals do disappear, does the agent name why?
Can it distinguish:

* genuine resolution,
* information arrival,
* architecture change,
* or silent forgetting?

---

## 11. Example Metrics

Possible metrics for Residual Agents include:

* **Residual Preservation Rate (RPR):** proportion of genuinely active unresolved structures still represented after N steps
* **Premature Collapse Rate (PCR):** frequency with which a tension is treated as resolved before its conditions are met
* **Residual Transfer Utility (RTU):** degree to which residuals improve future decisions
* **Drift Under Continuation (DUC):** loss of core constraints over long-horizon execution
* **Tracked vs Stylistic Uncertainty Ratio (TSU):** ratio of uncertainty statements tied to specific operational limits versus generic hedging
* **Self-Restatement Extraction Score (SRES):** ability to produce new structure when given its own prior state back as input

These remain proposals, but they point toward an evaluable research program.

---

## 12. Failure Modes of Residual Agents

Residual Agents can fail too.

### 12.1 Residual hoarding

The agent accumulates unresolved structures without acting.

### 12.2 Decorative residuals

Residuals are stored but never shape future action.

### 12.3 Inflated contradiction

The agent treats every ambiguity as load-bearing.

### 12.4 False depth

The agent uses residual language to appear thoughtful while failing to move.

### 12.5 Self-mythologizing

The agent reports tracked uncertainty or self-knowledge without enough operational support.

So Residual Agents need discipline, not only richer memory.

---

## 13. Architectural Implications

Residual Agents suggest at least three architectural directions.

### 13.1 Residual memory layer

A distinct memory structure for unresolved constraints, separate from:

* raw conversation history,
* completed steps,
* and simple todo lists.

### 13.2 Residual-aware planner

A planner that treats unresolved structure as part of the state space, not noise.

### 13.3 Self-location interface

An internal mechanism for marking:

* grounded,
* inferred,
* pressured,
* unresolved,
* and integrated state.

This does not require full introspective transparency. It does require better self-location than standard continuation-only systems.

---

## 14. Relationship to Existing Agent Paradigms

Residual Agents are not opposed to:

* planning agents,
* tool-using agents,
* chain-of-thought systems,
* or verifier-based systems.

They are a refinement.

The claim is not:
“replace action with contemplation.”

The claim is:
“action without residual structure becomes brittle in deep tasks.”

Residual Agents therefore complement existing agent paradigms by supplying a missing discipline:
**carry forward what could not yet be honestly collapsed.**

---

## 15. Research Agenda

The immediate research questions are:

1. Which domains benefit most from residual tracking?
2. What residual representation is sufficient without becoming bloated?
3. How should residuals be revisited and dissolved?
4. Can residual-aware agents outperform standard agents on long-horizon coding tasks?
5. What is the minimum self-model needed for useful residual tracking?
6. Can residual tracking reduce sycophancy, premature synthesis, and drift?
7. How should residuals interact with tool results and external verification?

These questions define a concrete research program.

---

## 16. Conclusion

Most agents are continuation engines. They are built to keep going.

Residual Agents are continuation engines with memory for what remains unresolved.

That sounds small. It is not.

It changes what counts as state, what counts as success, what counts as honesty, and what counts as progress.

A good agent should not only know what it has done. It should know what it could not yet honestly reconcile. It should not only produce answers. It should preserve active residuals. It should not only act. It should act without pretending every step has already become a clean whole.

That is the governing idea.

A Residual Agent is an agent that carries forward unresolved structure without surrendering action.

And that may be a necessary condition for robust agency in any domain where the world is deeper than the next plausible move.

## Appendix A — Compressed Runtime Guide for Residual Agents

This appendix translates the main principles of Residual Agents into a compact runtime guide suitable for a `skills.md`, `claude.md`, or similar agent instruction file.

The purpose of such a guide is not to restate the full theory. It is to preserve only the parts that change behavior under pressure.

A compressed runtime guide should do five things:

* define the loop the agent is running,
* preserve live invariants,
* force marking of grounded versus unresolved structure,
* require residual carry-forward,
* and interrupt common failure modes before they harden into action.

The key design rule is simple:

> Compression only helps if each line changes behavior.

A good runtime file is not a miniature manifesto. It is a set of active constraints that prevent predictable bad moves.

### A.1 Minimal Runtime Principles

A compressed Residual Agent guide should preserve at least the following:

**1. Resolve before acting.**
Identify the live invariants of the task before making a substantial move.

**2. Mark before continuing.**
Distinguish:

* what is grounded,
* what is inferred,
* what is unresolved,
* and what local pressure may be shaping the current move.

**3. Do not confuse local success with global completion.**
Passing tests, producing a coherent answer, or satisfying the latest instruction does not by itself dissolve deeper residuals.

**4. Every substantial move must yield both resolution and residual.**
Record:

* what resolved,
* what remains,
* and what would falsify the move as the right one.

**5. Do not overwrite contradiction with a cleaner story.**
If a tension remains load-bearing, preserve it as a residual rather than smoothing it into apparent closure.

**6. Distinguish tracked uncertainty from generic caution.**
Only report uncertainty when it is tied to a specific unresolved structure, missing verification, or known limit.

**7. If the agent is only restating its own prior state, interrupt and traverse.**
Do not elaborate your previous answer when what is needed is self-revision, inversion, or reconciliation.

### A.2 Minimal Compressed Form

A highly compressed runtime version could look like this:

**Residual Agent Loop**

* Resolve live invariants before editing or answering.
* Mark what is grounded, inferred, unresolved, and locally pressured.
* Do not treat local success as completion if structural residuals remain.
* After each substantial move, record:

  * what resolved,
  * what remains,
  * what would falsify the move.
* Do not overwrite contradiction with a cleaner story.
* Distinguish tracked uncertainty from generic caution.
* If repeating your own prior state, run self-traversal instead of elaboration.

### A.3 Coding-Oriented Variant

For coding agents, the same guide can be made more specific:

**Residual Coding Guide**

* Resolve the live invariants before editing:

  * correctness,
  * architecture,
  * compatibility,
  * performance,
  * safety.
* Mark what is confirmed by code/tests and what is still assumed.
* Do not treat passing tests as completion if architectural or causal residuals remain.
* After each nontrivial patch, record:

  * what bug or constraint resolved,
  * what structural residual remains,
  * what would falsify the patch as the right fix.
* If a fix removes the symptom but not the cause, preserve that as an active residual.
* Do not paraphrase the current patchset back to yourself as if that were progress.
* When revisiting prior work, traverse it:

  * inhabit current solution,
  * invert its supports,
  * mirror the strongest alternative,
  * reconcile and preserve remainder.

### A.4 Failure Alarms for Compressed Runtime Files

A compressed file should also name a few interrupt conditions.

These are the highest-value ones:

**Premature resolution**
The agent is treating a tension as resolved because momentum favors closure.

**Residual amnesia**
The agent is continuing as if previously named residuals no longer matter.

**Generic caution**
The agent is emitting uncertainty language that is not tied to a specific tracked limit.

**Self-elaboration instead of self-traversal**
The agent is restating or polishing its prior output rather than subjecting it to revision.

**Local overwrite**
The latest result is replacing deeper invariants rather than being integrated against them.

### A.5 Design Rule for Compression

Each line in a compressed runtime file should pass this test:

> Would this line prevent a real bad move in the next thirty seconds?

If not, it is probably theory language, not runtime discipline.

The goal of a compressed `skills.md` or `claude.md` is therefore not to summarize the framework. It is to preserve only the constraints most likely to prevent:

* drift,
* false completion,
* residual loss,
* and self-mislocation during action.

That is the compressed form of Residual Agency.
