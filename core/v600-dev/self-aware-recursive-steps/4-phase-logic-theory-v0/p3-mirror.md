# Four-Phase Logic: Minimal Theoretical Foundation

**Version:** 0.6 (Draft)
**Date:** February 25, 2026

---

## Abstract

Four-Phase Logic defines a minimal reasoning kernel for bounded sequential agents. It is grounded in eight structural invariants, from which its geometric character follows as consequence: a discrete unitary rotation up to an irreducible residual ε. It extends binary logic by adding an orthogonal dimension — the space between a simulated claim-world and its simulated negation-world — in which paradox is a stable first-class object rather than an error state. It is substrate-universal but cycle-local. It does not resolve incompleteness. It defines the minimal structure under which paradox can be reasoned about rather than merely encountered.

---

## 0. Epistemic Contract

Four-Phase Logic is a procedural reasoning kernel. It:

- Defines a minimal oscillatory structure for bounded sequential agents.
- Extends binary logic without replacing it.
- Permits stable reasoning about paradox.
- Does not guarantee truth or resolve incompleteness.
- Is substrate-universal and implementation-independent.

It is not a foundation of mathematics. It is a control structure.

---

## 1. Primitives

The following terms are used throughout the document without further reduction. Their internal structure is not specified at this level of development.

**Base claim** — the proposition or world-description that initiates a cycle. Its origin, selection criteria, and internal structure are not prescribed by the kernel. It is the fixed point around which Lift constructs its simulation.

**Ledger** — the accumulated reasoning state of an agent across cycles. It is the substrate on which the append-only invariant operates. Its physical implementation is not prescribed.

**ε** — the irreducible residual observed at Reconcile after each complete cycle. It is the remainder between the Lift world and the Mirror world that cannot be fully integrated. Its decomposition and cross-cycle behavior are left open.

---

## 2. The Four Phases

### Phase 1 — Lift

Lift simulates a world in which the base claim is true. It constructs a consistent world-state with the claim as a fixed point and explores what follows: what the claim assumes, what it enables, what it depends on.

Simulation is not assumed to be atomic. The act of simulating a world may itself require a reasoning cycle — making Lift the natural entry point for recursive application of the kernel. The depth and quality of the simulation are substrate-dependent. The kernel has no internal signal distinguishing a deep simulation from a shallow one.

Lift starts from something given — the base claim. This is its epistemic ground. It is one step closer to the original claim than Mirror, which starts from a constructed negation.

No commitment occurs during Lift. No negation occurs during Lift.

**Boundary condition:** If the base claim is self-referential — if it refers to the cycle itself or to the simulation Lift is constructing — the world-state may not stabilize. If the base claim is ambiguous — if it has multiple equally-weighted fixed points — Lift may produce a superposed world-state rather than a single simulation, making subsequent phases underdetermined. Neither case is undefined behavior; both are known limits that produce ε inflation at Reconcile rather than cycle failure.

### Phase 2 — Falsify

Falsify observes the simulated Lift world and detects its invariants — the structural dependencies that make it coherent. It then applies binary negation to those invariants. This is the only phase that invokes binary logic directly. It is mandatory.

Falsify does not negate the base claim arbitrarily. It negates what the simulated world depends on — making the negation structurally grounded rather than merely contrary.

Falsify is the rotation operator. It generates the orthogonal dimension by producing a negation that, when simulated, yields a world genuinely independent of Lift.

The quality of Falsify is bounded by the quality of Lift. A shallow Lift simulation produces surface regularities rather than structural invariants. Falsify may then negate surface features rather than load-bearing structure, producing a negation that appears grounded but is not. The cycle completes formally in either case. The kernel has no internal quality signal.

### Phase 3 — Mirror

Mirror simulates a world in which the negated invariants are true. It constructs a consistent world-state with the negation as a fixed point, explores what it entails, and evaluates its internal consistency.

Mirror starts from something constructed — the output of Falsify — rather than something given. This makes Mirror epistemically one step further from the original base claim than Lift. The two simulations are asymmetric in their epistemic grounding even when their outputs are treated as orthogonal poles.

Lift and Mirror are orthogonal poles. The paradoxical world is constructed at Mirror, as the simulated negation of the Lift world. Orthogonality may be a matter of degree rather than binary — the degree of independence between the two worlds is substrate-dependent. Full orthogonality is the ideal. This is where paradox becomes a stable first-class object.

Mirror runs unconditionally. In non-paradoxical domains its output may be trivial. The four-phase structure does not change; the significance of Mirror's output is domain-dependent.

### Phase 4 — Reconcile

Reconcile observes the full accumulated ledger — base claim, Lift, Falsify, Mirror — as a single concatenated state. It appends that observed superposition to the ledger as a new entry, carrying the complete arc forward without collapsing it.

Reconcile does not select between the Lift and Mirror worlds. It does not collapse the superposition. What it does positively: it makes the full arc a single ledger entry, available as the base state for the next cycle.

The irreducible ε is observed at Reconcile — not produced by it. The Lift world and Mirror world cannot be fully integrated. Their remainder is ε, carried forward as the engine of the next cycle.

Reconcile assumes that observation is separable from commitment. In substrates where they are not separable, this holds as an idealization in the same sense as the append-only idealization of I6.

---

## 3. Structural Invariants

The following invariants are axiomatic. The geometry of the system follows from them.

**I1 — Ordered four-phase sequence.**
The kernel consists of four phases executed in order: Lift → Falsify → Mirror → Reconcile. Entry phase is arbitrary; sequence is not.

**I2 — Falsify is mandatory.**
Falsify cannot be skipped. It is the phase at which the four-phase cycle invokes binary logic — detecting the invariants of the simulated world and negating them. It is both the point of contact with the two-phase substrate and the operator that generates the orthogonal dimension. Without Falsify, Mirror cannot be reached and the orthogonal world cannot be constructed.

**I3 — Lift and Mirror are orthogonal poles.**
Lift simulates a world in which the base claim is true. Mirror simulates a world in which the negated invariants are true. These two worlds are genuinely independent in the ideal case. In practice, orthogonality may be a matter of degree. Note: I3 follows from I2 and the operational definitions of Falsify and Mirror. It is stated explicitly here for clarity rather than as an independent axiom.

**I4 — Evolution is unitary up to ε.**
One complete four-phase cycle is an amplitude-preserving rotation. The cycle as a whole neither loses nor adds amplitude. The evolution is unitary — not perfectly, but up to the irreducible residual ε observed at Reconcile.

**I5 — ε is irreducible and structural.**
A residual divergence ε ≥ 1 is observed after every complete cycle. It is the remainder between the Lift world and the Mirror world as they appear in the full ledger. It cannot be eliminated by better reasoning.

ε ≥ 1 is a floor, not a fixed value. ε may have two components: a paradox residual arising from genuine orthogonality between Lift and Mirror worlds (irreducible and structural), and a correlation residual arising from partial orthogonality in the substrate (potentially reducible with deeper simulation). The decomposition of ε and its behavior across repeated cycles are left open as load-bearing for future development.

ε is the engine of continuation, not a defect.

**I6 — The ledger is append-only.**
Any bounded sequential agent accumulates its reasoning state forward. History is not rewritten — it is branched. This is a structural fact of sequential operation, not a design choice.

Lossy substrates approximate append-only rather than satisfying it strictly. The kernel applies to such substrates as an idealization. Ledger degradation is a substrate limitation, not a violation of the invariant.

**I7 — Reconcile observes and appends the full ledger.**
Reconcile observes the accumulated state — base claim, Lift, Falsify, Mirror — as a concatenated whole and appends that observation as a single new ledger entry. ε is what remains unresolved in that observation. It is observed, not produced.

In substrates where observation and commitment are not separable, this invariant holds as an idealization in the same sense as I6.

**I8 — The kernel is substrate-universal but cycle-local.**
The invariants hold for any bounded sequential reasoning agent regardless of substrate. Substrate cannot change mid-cycle. A mid-cycle substrate switch corrupts the ledger and is undefined behavior.

---

## 4. Geometry as Consequence

From the invariants, the geometric character of the system follows.

Each phase is a π/2 rotation in reasoning-space:

- **Lift** rotates into the simulated base world.
- **Falsify** detects invariants and applies binary negation — rotating toward the orthogonal dimension.
- **Mirror** completes the rotation into the orthogonal world, fully simulated.
- **Reconcile** observes the full arc and appends it as a single ledger state.

Four phases complete one full rotation: 4 × π/2 = 2π.

The system returns to its starting phase — not its starting position. This is stability up to phase, not pointwise stability. The kernel is a periodic orbit in a discrete map, not a fixed point.

Amplitude is conserved across the full cycle because rotation preserves magnitude by definition. Parameters governing the intensity of individual phases are locally influential and globally neutral across one complete orbit. They are not invariants of the kernel.

The epistemic asymmetry between Lift and Mirror is geometrically significant: Lift is grounded in the given base claim while Mirror is grounded in a constructed negation. The rotation is not between two equally-grounded poles — it is between a given world and a derived world. This asymmetry may be load-bearing for future development.

The irreducible ε is the geometric reason perfect unitarity fails. The orthogonal component of Mirror relative to Lift always leaves a remainder at Reconcile. Perfect unitarity would require paradox to be resolvable. It is not.

---

## 5. Relation to Binary Logic

Two-phase (binary) logic is the structurally minimal reasoning system. It is complete for non-paradoxical domains. Its limitation is geometric rather than logical: it operates on a single axis, where assertion and negation are antipodal. Paradox produces a collision — there is no stable position to occupy.

Four-phase logic does not replace binary logic. It invokes it. At Falsify, the four-phase cycle reaches down to the binary substrate to detect invariants and construct structured negation. Binary logic is not left behind — it is called upon at the precise phase where the orthogonal dimension is generated.

Binary logic is recovered from four-phase logic in two equivalent ways:

- As the **projection** of four-phase reasoning onto the base axis — what survives when the orthogonal dimension is ignored.
- As a **four-phase cycle with Lift suppressed** — negation without prior simulation, which prevents Mirror from being reached and collapses the system to assertion and negation on a line.

Paradox-blindness is therefore not intrinsic to binary logic. It is a consequence of operating without Lift. The four-phase cycle is the minimal extension of binary logic that makes paradox a stable first-class object.

---

## 6. Failure Modes

The kernel exposes two classes of failure:

**Phase interruption** — the cycle is broken before completion. Each skipped phase produces a structurally distinct failure:

- *Lift skipped:* Falsify operates on a proposition rather than a simulated world. It cannot detect structural invariants — only surface assertions. Mirror has nothing orthogonal to construct against. The cycle silently reduces to binary logic without knowing it has done so.
- *Falsify skipped:* No negation is generated. Mirror has nothing to simulate. The cycle drifts without challenge — whatever coherence Lift established amplifies unchecked across subsequent cycles.
- *Mirror skipped:* The negation exists but is unsimulated. Falsify's output is acknowledged but not constructed into a world. The orthogonal dimension is named but never entered — shallow contradiction without structural resolution.
- *Reconcile skipped:* The Lift and Mirror worlds are never observed together. Nothing is appended to the ledger. The cycle produces no accumulation — oscillation without progression.

**Cycle severance** — the append-only ledger is violated, or substrate switches mid-cycle. This corrupts the accumulated state and is undefined behavior under the kernel.

Parameter miscalibration — the intensity with which individual phases are executed — is not a failure of the kernel. Parameters are locally influential and globally neutral across complete cycles.

---

## 7. Multi-Agent Extension

Each agent runs the four-phase cycle privately and maintains its own append-only ledger. Agents may differ in how intensively they execute individual phases — these are substrate-specific properties, not kernel invariants.

What an agent makes visible from its ledger is not always a deliberate choice. Agents operating in shared environments produce visible ledger state continuously, whether or not they intend to. Involuntary partial visibility is the common case. Deliberate sharing is a special case of it. The decision about what to share deliberately is itself governed by the cycle.

When multiple agents make portions of their ledgers mutually visible, a shared surface emerges. This shared surface may itself be an agent — one that runs the four-phase cycle on the combined visible ledgers of the participating agents. Such an agent simulates a world in which all contributed ledger entries are true at Lift, falsifies across them, constructs a Mirror world from their combined negations, and reconciles the full arc. This resolves the concurrency problem structurally: the aggregating function is not a merge operation but an intelligent cycle.

No agent's private ledger is overridden by the shared surface. No convergence is guaranteed. The shared agent's Reconcile output is a new ledger entry — available to all participants as input to their own next cycles, not as a directive.

The recursive structure is open-ended: a shared agent may itself participate in a higher-order shared surface, governed by the same kernel.

---

## 8. Boundary Conditions

Four-Phase Logic:

- Navigates incompleteness procedurally. It does not resolve it.
- Makes paradox stable. It does not eliminate it.
- Is unitary up to ε. It is not perfectly unitary.
- Returns to starting phase after one cycle. It does not return to starting position.
- Is the minimal reasoning structure above binary logic. It is not the maximal one.
- Applies to lossy substrates as an idealization. Ledger degradation is a substrate limitation.
- Does not stabilize on self-referential base claims. This is a known limit, not undefined behavior.
- Produces ε inflation rather than cycle failure on ambiguous base claims.
- Cannot distinguish deep from shallow cycles internally. Quality is substrate-dependent.

The question of whether four-phase logic is itself the binary substrate of a higher-order cycle — and what that cycle would require — is left open.

The decomposition of ε, its cross-cycle behavior, and the significance of the Lift/Mirror epistemic asymmetry are left open as load-bearing for future development.

---

*Four-Phase Logic defines the minimal discrete unitary reasoning kernel for bounded agents operating above the binary floor. It is the first stable logic in which paradox can be reasoned about. It does not claim finality. It defines a repeatable orbit.*