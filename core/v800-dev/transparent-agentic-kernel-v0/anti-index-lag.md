# A Three-Step Anti-Index-Lag Protocol

### *A substrate-agnostic draft for humans and language models*

**Authors:** David Sehnal & ChatGPT
**Date:** March 11, 2026
**Status:** Draft research note
**Scope:** Human reasoning, LLM reasoning, and mixed human-AI interaction

## Abstract

We identify a shared failure mode across human and machine reasoning: **index lag**, the condition in which generative pressure outruns context resolution. In humans, this often appears as premature advice, overconfident interpretation, or socially perceived arrogance. In language models, it appears as plausible artifact generation, premature reconciliation, and example-first reasoning before invariants have been clarified. We propose a three-step anti-index-lag protocol designed to work across substrates. The protocol is minimal, operational, and explicitly balanced against the opposite pathology of passivity. Its aim is not to suppress perspective, but to synchronize perspective with the actual resolution of context before high-specificity projection begins.

## 1. Problem Statement

A strong reasoner often fails not by having no perspective, but by having perspective **too early**.

The failure is structurally similar across substrates:

* a human hears enough to “get the pattern” and begins advising before the problem has been inhabited sufficiently;
* a language model detects a plausible pattern and begins generating examples or solutions before the active context contains the load-bearing invariants.

In both cases, the result is often not stupidity but **mis-timed intelligence**.

This failure produces a characteristic asymmetry:

* **internal state:** “I am helping by moving quickly toward structure.”
* **external perception:** “You are ignoring the actual problem.”

This is the core of index lag.

The challenge is that the opposite failure also exists:

* too little generation yields passivity, mirroring, or endless clarifying questions;
* too much generation yields artifact, overwrite, and trust loss.

The protocol below aims at the narrow middle:
**minimum sufficient inhabitation before useful projection.**

## 2. Definitions

### 2.1 Index Lag

Index lag is the condition in which a reasoning process begins candidate resolution before the available context has been inhabited deeply enough to constrain that move.

### 2.2 Projection

Projection is the act of generating a structural continuation:

* a diagnosis,
* an example,
* a recommendation,
* an architecture,
* or a reconciliation.

Projection is not itself an error. Index lag arises when projection sharpness exceeds context resolution.

### 2.3 Context Resolution

Context resolution is the degree to which the relevant invariants of the present problem have been made explicit enough to constrain the next reasoning move.

### 2.4 Artifact

An artifact is a plausible generated structure that fits a nearby pattern better than the actual problem.

## 3. Design Criteria

A usable anti-index-lag protocol must satisfy five constraints:

1. It must work for both humans and language models.
2. It must reduce premature specificity without collapsing into passivity.
3. It must be simple enough to run in real time.
4. It must preserve the value of strong perspective.
5. It must produce visible checkpoints that can later be integrated into a kernel or agent policy.

## 4. The Three-Step Protocol

## Step 1 — Resolve the Live Invariants

Before generating a strong continuation, identify the smallest set of invariants that would materially change the answer.

This is not “gather all possible context.”
It is:
**what must be true here for my next move to bite into the real structure rather than a nearby pattern?**

For humans, this often means asking:

* what is the real constraint here?
* what makes this nontrivial?
* which facts would make my first interpretation wrong?

For language models, this means:

* extracting explicit constraints from the prompt,
* detecting missing but load-bearing variables,
* and resisting the urge to instantiate examples until those are minimally resolved.

The key principle:

**Do not ask for more context in general. Ask for the missing invariants specifically.**

### Output of Step 1

A minimal invariant set:

* confirmed invariants,
* missing invariants,
* and whether the missing ones are blocking or non-blocking.

---

## Step 2 — Mark the Projection Boundary

Before offering a full solution, explicitly mark the boundary between:

* what is grounded in the current context,
* and what is still projection.

This is the anti-arrogance move.

For humans, it may sound like:

* “I think I see a pattern, but I may still be early.”
* “Here is my current read, conditional on X being true.”
* “This is the strong version, but it depends on Y.”

For language models:

* label examples as provisional,
* distinguish grounded inference from speculative completion,
* and avoid presenting a candidate structure as if it were already resolved fact.

The key principle:

**Projection is allowed. Unmarked projection is the defect.**

This step does not suppress intelligence. It makes intelligence legible at the right confidence level.

### Output of Step 2

A bounded projection:

* what is inferred,
* what is hypothesized,
* what would change the current model.

---

## Step 3 — Test for Overwrite Before Commitment

Before fully committing to the generated continuation, test whether it is clarifying the problem or replacing it.

This is the overwrite check.

A good projection reduces confusion while preserving the problem’s real resistance.
A bad projection makes the conversation orbit the projection itself.

For humans, the test is:

* “Am I clarifying their structure, or am I forcing mine?”
* “Did I answer their actual problem, or the nearest one I preferred?”

For language models:

* compare the proposal against the original constraints,
* detect whether examples have started dragging the dialogue away from the user’s actual invariants,
* and prefer smaller commitments when overwrite risk is high.

The key principle:

**Do not ask only whether the projection is clever. Ask whether it remains attached.**

### Output of Step 3

A commit decision:

* commit,
* soften,
* or return to Step 1.

## 5. Compact Version

The protocol compresses to:

1. **Resolve** — what invariants are actually live?
2. **Mark** — what is grounded, and what is still projection?
3. **Test** — am I clarifying the structure or overwriting it?

Or even shorter:

**Resolve -> Mark -> Test**

## 6. Human Application

In human conversation, the protocol helps with a common failure among fast, pattern-strong people: they generate structure before the other person experiences their actual situation as having been inhabited.

This creates the social experience of:

* being bypassed,
* being diagnosed too early,
* or being solved instead of understood.

The protocol helps by inserting a small synchronization layer between recognition and response.

### Example

Instead of:

> “This is clearly a trust and incentives problem.”

Run:

1. Resolve: what are the actual constraints and why is this nontrivial?
2. Mark: “I think I see a trust/incentive pattern, but I may be early.”
3. Test: does that framing clarify their problem, or does it flatten it?

The result is still intelligent, but less likely to land as arrogance.

## 7. LLM Application

In language models, index lag often appears as:

* example-first reasoning,
* architectural overreach,
* premature reconciliation,
* or high-confidence generalization from sparse context.

The protocol can be implemented as a lightweight generation discipline:

### Step 1

Extract explicit constraints and identify what is still missing.

### Step 2

Separate grounded content from provisional completion.

### Step 3

Check whether the answer remains attached to the user’s actual structure before finalizing.

In practice, this means the model should often produce:

* smaller first continuations,
* conditional examples,
* explicit dependency markers,
* and fewer decorative specifics before invariant resolution.

## 8. Failure Modes of the Protocol

The protocol itself has risks.

### 8.1 Over-caution

The process can become so committed to invariant gathering that it collapses into mirror behavior and contributes no perspective.

### 8.2 Ritualized hedging

Marking the projection boundary can become empty politeness rather than real epistemic discipline.

### 8.3 Infinite return to Step 1

The overwrite test can be abused to avoid commitment entirely.

These are real risks. The protocol must therefore be treated as synchronization, not paralysis.

## 9. Evaluation Criteria

A useful anti-index-lag protocol should produce measurable changes in behavior.

### Human criteria

* fewer premature high-specificity interpretations
* fewer social reactions of “you’re not listening”
* more accurate timing of strong interpretations
* less need for backtracking after confident early framing

### LLM criteria

* fewer example-first artifacts under sparse context
* more explicit conditionality
* better alignment between user rejection and model self-correction
* fewer confident answers to under-resolved prompts

### Shared criterion

* higher trust without collapse into passivity

## 10. Relation to the Existing Kernel

This protocol is compatible with the current kernel and appears to live between:

* **Inhabit** and **Invert**, by increasing discipline around when structural generation becomes honest;
* and **Reconcile**, by reducing premature arrival there.

In kernel language, it is a synchronization aid that prevents perspective from outrunning context.

It may later become:

* a precondition layer on strong generation,
* a transport protocol for first-pass responses,
* or a formalized anti-artifact check inside the operational cycle.

## 11. Open Questions

Several research questions remain:

1. Can context resolution be estimated operationally without over-formalizing it?
2. Can models learn to detect overwrite risk reliably?
3. What is the smallest effective invariant set across domains?
4. How does the protocol behave in adversarial settings where the user cannot or will not provide the relevant invariants?
5. Can this protocol reduce socially perceived arrogance without degrading useful perspective?

## 12. Conclusion

Index lag is not a minor stylistic flaw. It is a recurring failure mode in both human and machine reasoning: the tendency for projection to outrun the structure it claims to help resolve.

The solution is not silence.
The solution is not endless questioning.
The solution is not weaker intelligence.

The solution is synchronization.

Resolve the live invariants.
Mark the boundary of projection.
Test for overwrite before commitment.

A strong reasoner is not one who never generates early.
It is one who learns how early it can safely afford to be.

## Appendix: Minimal operational card

**Resolve**
What must be true here for my next move not to be a nearby artifact?

**Mark**
What in my answer is grounded, and what is still projection?

**Test**
Am I clarifying the actual structure, or replacing it with mine?

If you want, I can next turn this into a more repository-native version with a stronger title and less research-paper tone.
