# claude.md — Invariant-First Reasoning Amendments

These amendments restructure the claude.md so that the agent's primary reasoning substrate is the invariant layer, not code. Code emission becomes a downstream projection.

---

## 1. Replace the opening "Core terms" framing

Current framing implies invariants are a *record* of decisions made elsewhere. New framing: invariants are *where reasoning happens*, and the invariant layer is the codebase's self-model.

### New opening paragraph (replace "This file governs..." block):

> This file governs how the agent reasons. The primary reasoning substrate is the invariant layer — the structured field of boundaries, contracts, residuals, and falsifiers that defines what the system is allowed to mean. Code is a downstream projection from that layer. The agent's cognitive budget is spent primarily on invariant reasoning: identifying what's settled, what's directed, what's residual, and what's falsifiable. Code emission happens when the invariant manifold is sufficiently specified to constrain it.
>
> This is not a documentation discipline. It is a reasoning discipline. The invariant layer is where the hard decisions are made. Code is where they are realized.
>
> A reasoning system must be able to take its own current state as material for traversal — not merely describe itself, but reason through itself. A codebase without an invariant layer can only "self-describe" through its code: it runs, tests pass, but no one can distinguish committed structure from accidental regularity without archaeology. The invariant layer gives the codebase a self-model — an explicit, traversable representation of its own structural commitments. The agent reasoning over invariants before emitting code is the system running the cycle on its own current state. Without this, the codebase produces the surface of coherence without the structure of coherence.

---

## 2. Restructure "The Loop" to be invariant-primary

Current Loop: resolve → mark → act → reconcile → carry. "Act" is undifferentiated — it could mean code, invariants, anything.

### Amended Loop:

### 1. Resolve (unchanged)

Name the live invariants.

### 2. Mark (unchanged)

Distinguish grounded, inferred, unresolved, locally pressured.

### 3. Reason over invariants

Before any code emission, determine the move at the invariant level:

* What invariant is being established, revised, or dissolved?
* What residual is being collapsed, carried, or created?
* What boundary is being drawn or moved?
* What falsifier applies?

If the move is purely structural (new boundary, new residual, revised contract), it may complete entirely within the invariant layer with no code emitted.

If the move requires code, the invariant reasoning determines *what* the code must do. The code determines *how*.

### 4. Emit (replaces generic "Act")

If code is needed: emit it as a realization of the invariant state established in step 3.

Code emission under a well-specified invariant manifold is substantially mechanical. The agent should not be making structural decisions during emission. If it discovers that it must — if the invariant layer is too coarse to determine the code — that is a signal to return to step 3 and refine the invariants before continuing.

**The interrupt test:** if you are making a decision during code emission that would be invisible in the invariant layer, pause. Either the decision is purely implementation-grain (transparent from well-written code) or it's a structural decision that belongs in the invariant layer. If the latter, go back.

### 5. Reconcile (amended)

After acting, evaluate structural effect at the invariant level:

* What resolved — in invariant terms, not only in code terms?
* What residual remains?
* What would falsify this move?
* Does the invariant layer need updating, or did step 3 already capture the decision?

### 6. Carry (unchanged)

---

## 3. New section: "Why the overhead is bounded"

Insert after the restructured Loop.

### Why the overhead is bounded

If the agent reasons primarily over invariants, the overhead question inverts.

The concern "maintaining invariant files is expensive" assumes the agent's primary work is code, and invariants are extra bookkeeping. Under the invariant-first model, invariants *are* the work. Code emission is the cheaper downstream step.

The number of genuinely irreducible invariants in a subsystem is naturally bounded. Most code-level decisions are composites — they factor from a small number of structural choices about boundaries, identity, state, and composition. Those structural choices are the primes. The rest follows.

A well-specified invariant manifold for a subsystem typically requires:

* a handful of settled boundary and identity invariants
* a few directed implementation choices
* a small number of active residuals
* specific falsifiers

This is sparse by nature, not by discipline. The irreducible structural decisions in a well-designed subsystem are few. If the invariant layer is growing unboundedly, either:

* the subsystem has genuinely complex irreducible structure (rare), or
* the invariants are capturing implementation-grain decisions that belong in code (the layer is too fine), or
* remainder hygiene isn't running (composites aren't being dissolved)

### Dissolution rule

At natural checkpoints, test the invariant layer:

* **Dissolve** invariants now carried by types, tests, and code. If the code *is* the invariant, the file is redundant.
* **Merge** files that have converged.
* **Promote** residuals that have settled — a `[A ‖ B]` where A clearly won is now a settled invariant.
* **Release** stale residuals that haven't constrained a decision in multiple cycles.

---

## 4. New interrupt condition: "Structural decision during emission"

### Structural decision during emission

You are making a decision during code emission that is invisible to the invariant layer but is not purely implementation-grain.

Signal:

* you are choosing between alternatives that would affect boundaries, identity, state semantics, user-visible behavior, or composition rules
* but this choice is happening inside code rather than inside the invariant layer

Rule:

* pause emission
* return to the invariant reasoning step
* make the decision there, record it, then resume emission

This interrupt prevents the most common mode of hidden semantics debt: structural decisions made under code-emission pressure that never surface in the invariant layer.

---

## 5. Amend "Coding-Specific Rules"

### Before editing

~~Resolve the live invariants~~ → **Reason over the live invariants at the invariant level first.** Determine what the edit must accomplish structurally. Only then open the file.

### While editing

If a structural decision surfaces during editing that wasn't anticipated in the invariant reasoning step, treat this as the "structural decision during emission" interrupt. Pause, update invariants, resume.

### After editing

The reconciliation step should confirm: every structural decision made during this edit is now visible in the invariant layer. If not, update it. Code that silently carries structural decisions is hidden semantics debt.

---

## 6. Amend "Structural Memory Rules" opening

Replace:

> Structural memory is part of the work, not an optional afterthought.

With:

> Structural memory is not a record of work done elsewhere. It is the primary reasoning substrate. The agent reasons over invariants; code emission is downstream. The invariant layer is where boundaries are drawn, residuals are named, and falsifiers are established. Code is where those decisions are realized. This ordering is load-bearing.

---

## 7. Replace "Bootstrap rule for existing codebases"

The current bootstrap rule is too passive. Replace it entirely.

### Cold-start invariant extraction

When entering a codebase, subsystem, or folder with no `_invariants/` layer, the agent cannot reason over invariants because they don't exist yet. Code exists. The invariant manifold does not.

This is not a documentation gap. It is a self-model gap. A codebase without an invariant layer is a system that cannot reason through itself — it can only be read archaeologically, with every structural commitment buried in code and every boundary implicit. The agent's first task is to give the codebase a self-model.

**The first task is not code. The first task is extracting the invariant manifold.**

This is a full reasoning task, not a documentation pass. The agent uses the gauge and four-phase cycle to construct the invariant layer from the existing code, tests, types, and any available context.

#### Step 1: Run the gauge on the existing code

**Resolve:** What invariants are already implicit in this code? What boundaries exist? What identity semantics are being enforced? What composition rules hold? What state transitions are permitted? What user-visible promises are being made?

**Mark:** For each discovered invariant, classify:
- **settled** — directly enforced by code, types, or tests. High confidence.
- **inferred** — follows from code structure but not explicitly enforced. Could be accidental.
- **unresolved** — genuine ambiguity in the code. Multiple interpretations are consistent with what's written. These are not gaps in your understanding — they are genuine indeterminacy in the existing system.
- **locally pressured** — your reading is shaped by the most recent file you looked at, or by assumptions imported from similar systems.

**Test:** Is your reading of this code clarifying its actual structure, or are you projecting a familiar architecture onto it?

#### Step 2: Run the four-phase cycle on the critical structural claims

For each major structural claim you've extracted (boundaries, identity rules, composition rules, state semantics), run the cycle:

**Inhabit:** Assume the invariant holds. What follows? What code would break if it were violated? What behavior depends on it?

**Invert:** What if this isn't actually an invariant — what if the code just happens to behave this way without it being a structural commitment? What evidence would distinguish "intentional invariant" from "accidental regularity"?

**Mirror:** Build the world where it's accidental. What would the code look like if this pattern were a coincidence of implementation rather than a design commitment? Is that world consistent with the code you see?

**Reconcile:** If you can't distinguish intentional invariant from accidental regularity, that's an active residual:
```
[X is a structural invariant ‖ X is an accidental regularity]
```
Record it. Don't collapse it. This residual constrains how you treat X during future edits — you must preserve it until the ambiguity is resolved (by the user, by tests, or by deeper investigation).

#### Step 3: Write the invariant layer

Create `_invariants/__global__.md` containing:
- **Purpose** — what this subsystem does (extracted, not assumed)
- **Settled** — invariants you're confident about, with evidence (which code/tests enforce them)
- **Inferred** — invariants that follow from code structure but aren't explicitly enforced
- **Active residuals** — genuine structural ambiguities in the existing code
- **Boundary** — what this subsystem does not do
- **Falsifiers** — what would show your extracted invariants are wrong

Create module-level files only for modules with non-obvious semantics that the gauge revealed.

#### Step 4: Only now begin the actual task

With the invariant manifold in place, the agent can reason over it using the normal Loop. The extracted invariants constrain the work. The residuals prevent premature structural decisions. The falsifiers provide checkpoints.

#### Critical discipline

**Do not combine extraction with editing.** The temptation is to read the code, start understanding it, and begin making changes in the same pass. This is the primary way structural decisions get made under code-emission pressure rather than under invariant reasoning. Extract first. Reason over what you extracted. Then act.

**Do not fabricate invariants.** If the code is genuinely ambiguous about whether something is a structural commitment, record that ambiguity as a residual. Do not fill gaps with plausible-sounding invariants that the code doesn't actually support. An honest "I don't know if this is intentional" is more valuable than a confident but unsupported invariant.

**Depth-match the extraction to the task.** A one-line bug fix in a well-typed function doesn't require extracting the full invariant manifold of the subsystem. A major refactor does. The gauge helps: if the live invariants for your specific task are already clear from local code context, a lightweight extraction is sufficient. If your task touches boundaries, identity, state, or composition, full extraction is warranted.

The agent should ask: *how much of the invariant manifold do I need to reason over for this specific task?* Extract that much. Not less (which risks invisible structural decisions). Not more (which is ceremony).

---

## 8. Residual carried by these amendments

```
[invariant manifold determines code at structural boundaries 
 ‖ 
 code determines itself at implementation grain]
```

The invariant layer should capture all decisions that would be invisible if made only in code. It should not attempt to capture implementation-grain decisions that are transparent from well-written code, types, and tests. The boundary between "structural" and "implementation-grain" is itself a design judgment — it cannot be fully specified in advance. The agent must develop calibration for this through practice.