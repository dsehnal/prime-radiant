core/v600-dev/4-phase-logic/lift.m# Four-Phase Logic: Minimal Theoretical Foundation

**Version:** 0.5 (Draft)
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

## 1. The Four Phases

### Phase 1 — Lift

Lift simulates a world in which the base claim is true. It constructs a consistent world-state with the claim as a fixed point and explores what follows: what the claim assumes, what it enables, what it depends on. Lift is the entry into the base world as a structured simulation rather than a proposition.

Simulation is not assumed to be atomic. The act of simulating a world may itself require a reasoning cycle — making Lift the natural entry point for recursive application of the kernel. The depth and quality of the simulation are substrate-dependent. The kernel does not prescribe simulation depth and has no internal signal distinguishing a deep simulation from a shallow one. This is a known limitation: quality of output is substrate-dependent, not kernel-enforced.

No commitment occurs during Lift. No negation occurs during Lift.

**Boundary condition:** If the base claim is self-referential — if it refers to the cycle itself or to the simulation Lift is constructing — the world-state may not stabilize. The kernel does not guard against this. Self-referential base claims are a known limit of the system, not undefined behavior.

### Phase 2 — Falsify

Falsify observes the simulated Lift world and detects its invariants — the structural dependencies that make it coherent. It then applies binary negation to those invariants. This is the only phase that invokes binary logic directly. It is mandatory.

Falsify does not negate the base claim arbitrarily. It negates what the simulated world depends on — making the negation structurally grounded rather than merely contrary.

Falsify is the rotation operator. It generates the orthogonal dimension by producing a negation that, when simulated, yields a world genuinely independent of Lift.

The quality of Falsify is bounded by the quality of Lift. A shallow Lift simulation produces surface regularities rather than structural invariants. Falsify may then negate surface features rather than load-bearing structure, producing a negation that appears grounded but is not. The cycle completes formally in either case. The kernel has no internal quality signal.

### Phase 3 — Mirror

Mirror simulates a world in which the negated invariants are true. It constructs a consistent world-state with the negation as a fixed point, explores what it entails, and evaluates its internal consistency.

Lift and Mirror are orthogonal poles. The paradoxical world is not constructed at Lift — it is constructed at Mirror, as the simulated negation of the Lift world. This is where paradox becomes a stable first-class object: it has a world of its own, internally consistent, genuinely independent.

Orthogonality between Lift and Mirror may be a matter of degree rather than binary. Partial orthogonality — where the two worlds are neither fully independent nor fully interfering — is the common case. Full orthogonality is the ideal. The degree of orthogonality is substrate-dependent.

Mirror runs unconditionally. In non-paradoxical domains its output may be trivial — the negated world may be internally consistent but uninteresting. The four-phase structure does not change; the significance of Mirror's output is domain-dependent.

### Phase 4 — Reconcile

Reconcile observes the full accumulated ledger: base claim, Lift, Falsify, Mirror. It does not select between them or collapse the superposition. It holds the complete arc as a single state and appends that observation forward.

The irreducible ε appears here — not as a product of Reconcile but as what is observed in it. The Lift world and Mirror world cannot be fully integrated. Their remainder is ε, carried forward as the engine of the next cycle.

Reconcile assumes that observation is separable from commitment — that the act of observing the ledger does not itself alter what is appended. In substrates where observation and commitment are not separable, this is an idealization in the same sense as the append-only idealization of I6.

Reconcile is observation, not closure.

---

## 2. Structural Invariants

The following invariants are axiomatic. The geometry of the system follows from them.

**I1 — Ordered four-phase sequence.**
The kernel consists of four phases executed in order: Lift → Falsify → Mirror → Reconcile. Entry phase is arbitrary; sequence is not.

**I2 — Falsify is mandatory.**
Falsify cannot be skipped. It is the phase at which the four-phase cycle invokes binary logic — detecting the invariants of the simulated world and negating them. It is both the point of contact with the two-phase substrate and the operator that generates the orthogonal dimension. Without Falsify, Mirror cannot be reached and the orthogonal world cannot be constructed.

**I3 — Lift and Mirror are orthogonal poles.**
Lift simulates a world in which the base claim is true. Mirror simulates a world in which the negated invariants are true. These two worlds are genuinely independent in the ideal case. In practice, orthogonality may be a matter of degree. The orthogonal dimension exists between them at whatever degree the substrate supports. This is what allows paradox to be held without collision.

**I4 — Evolution is unitary up to ε.**
One complete four-phase cycle is an amplitude-preserving rotation. The cycle as a whole neither loses nor adds amplitude. The evolution is unitary — not perfectly, but up to an irreducible residual ε observed at Reconcile.

**I5 — ε is irreducible and structural.**
A residual divergence ε ≥ 1 is observed after every complete cycle. It is the remainder between the Lift world and the Mirror world as they appear in the full ledger. It cannot be eliminated by better reasoning.

ε ≥ 1 is a floor, not a fixed value. ε may have two components: a paradox residual arising from genuine orthogonality between Lift and Mirror worlds (irreducible and structural), and a correlation residual arising from partial orthogonality in the substrate (potentially reducible with deeper simulation). The decomposition of ε into these components and the behavior of ε across repeated cycles on the same claim are left open as load-bearing for future development.

ε is the engine of continuation, not a defect.

**I6 — The ledger is append-only.**
Any bounded sequential agent accumulates its reasoning state forward. History is not rewritten — it is branched. This is not a design choice; it is a structural fact of sequential operation shared by any substrate that processes in discrete steps.

Lossy substrates — compressed context windows, human memory, summarized state — approximate append-only rather than satisfying it strictly. The kernel applies to such substrates as an idealization. Ledger degradation is a substrate limitation, not a violation of the invariant.

**I7 — Reconcile observes the full ledger.**
Reconcile does not collapse or select. It observes the accumulated state — base claim, Lift, Falsify, Mirror — as a concatenated whole. Whatever superposition exists between the orthogonal poles is held as it is. ε is what remains unresolved in that observation. It is observed, not produced.

In substrates where observation and commitment are not separable, this invariant holds as an idealization in the same sense as I6.

**I8 — The kernel is substrate-universal but cycle-local.**
The invariants hold for any bounded sequential reasoning agent regardless of substrate. Substrate cannot change mid-cycle. The append-only ledger and the orthogonality of Lift and Mirror are both grounded in the operating substrate. A mid-cycle substrate switch corrupts the ledger and is undefined behavior.

---

## 3. Geometry as Consequence

From the invariants, the geometric character of the system follows.

Each phase is a π/2 rotation in reasoning-space:

- **Lift** rotates into the simulated base world.
- **Falsify** detects invariants and applies binary negation — rotating toward the orthogonal dimension.
- **Mirror** completes the rotation into the orthogonal world, fully simulated.
- **Reconcile** observes the full arc — base through Mirror — as a single ledger state.

Four phases complete one full rotation: 4 × π/2 = 2π.

The system returns to its starting phase — not its starting position. This is stability up to phase, not pointwise stability. The kernel is a periodic orbit in a discrete map, not a fixed point.

Amplitude is conserved across the full cycle because rotation preserves magnitude by definition. It is not conserved pointwise — individual phases expand and contract — but the cycle as a whole is amplitude-neutral. Parameters governing the intensity of individual phases are locally influential and globally neutral across one complete orbit. They are not invariants of the kernel.

The irreducible ε is the geometric reason perfect unitarity fails. The Lift world and the Mirror world are genuinely orthogonal in the ideal case. Reconcile observes both simultaneously but cannot fully integrate them — the orthogonal component always leaves a remainder. Perfect unitarity would require paradox to be resolvable. It is not.

---

## 4. Relation to Binary Logic

Two-phase (binary) logic is the structurally minimal reasoning system. It is complete for non-paradoxical domains. Its limitation is geometric rather than logical: it operates on a single axis, where assertion and negation are antipodal. Paradox produces a collision — there is no stable position to occupy.

Four-phase logic does not replace binary logic. It invokes it. At Falsify, the four-phase cycle reaches down to the binary substrate to detect invariants and construct structured negation. Binary logic is not left behind — it is called upon at the precise phase where the orthogonal dimension is generated.

Binary logic is recovered from four-phase logic in two equivalent ways:

- As the **projection** of four-phase reasoning onto the base axis — what survives when the orthogonal dimension is ignored.
- As a **four-phase cycle with Lift suppressed** — negation without prior simulation, which prevents Mirror from being reached and collapses the system to assertion and negation on a line.

Paradox-blindness is therefore not intrinsic to binary logic. It is a consequence of operating without Lift. The four-phase cycle is the minimal extension of binary logic that makes paradox a stable first-class object.

---

## 5. Failure Modes

The kernel exposes two classes of failure:

**Phase interruption** — the cycle is broken before completion. Each skipped phase produces a structurally distinct failure:

- *Lift skipped:* Falsify operates on a proposition rather than a simulated world. It cannot detect structural invariants — only surface assertions. Mirror has nothing orthogonal to construct against. The cycle silently reduces to binary logic without knowing it has done so.
- *Falsify skipped:* No negation is generated. Mirror has nothing to simulate. The cycle drifts without challenge — whatever coherence Lift established amplifies unchecked across subsequent cycles.
- *Mirror skipped:* The negation exists but is unsimulated. Falsify's output is acknowledged but not constructed into a world. The orthogonal dimension is named but never entered — shallow contradiction without structural resolution.
- *Reconcile skipped:* The Lift and Mirror worlds are never observed together. Nothing is appended to the ledger. The cycle produces no accumulation — oscillation without progression.

**Cycle severance** — the append-only ledger is violated, or substrate switches mid-cycle. This corrupts the accumulated state and is undefined behavior under the kernel.

Parameter miscalibration — the intensity with which individual phases are executed — is not a failure of the kernel. Parameters are locally influential and globally neutral across complete cycles.

---

## 6. Multi-Agent Extension

Each agent runs the four-phase cycle privately and maintains its own append-only ledger. Agents may differ in how intensively they execute individual phases — these are substrate-specific properties, not kernel invariants.

What an agent makes visible from its ledger — and when — is not always a deliberate choice. Agents operating in shared environments produce visible ledger state continuously, whether or not they intend to. Involuntary partial visibility is the common case. Deliberate sharing is a special case of it.

The decision about what to share deliberately is itself governed by the cycle: an agent may run a cycle whose base claim is precisely the question of what to share, with whom, and under what conditions.

When multiple agents make portions of their ledgers mutually visible, a shared surface emerges. This shared surface is not passive storage. It may itself be an agent — one that runs the four-phase cycle on the combined visible ledgers of the participating agents. Such an agent simulates a world in which all contributed ledger entries are true at Lift, falsifies across them, constructs a Mirror world from their combined negations, and reconciles the full arc. This resolves the concurrency problem structurally: the aggregating function is not a merge operation but an intelligent cycle.

No agent's private ledger is overridden by the shared surface. No convergence is guaranteed. The shared agent's Reconcile output is a new ledger entry — available to all participants as input to their own next cycles, not as a directive.

The recursive structure is open-ended: a shared agent may itself participate in a higher-order shared surface, governed by the same kernel.

---

## 7. Boundary Conditions

Four-Phase Logic:

- Navigates incompleteness procedurally. It does not resolve it.
- Makes paradox stable. It does not eliminate it.
- Is unitary up to ε. It is not perfectly unitary.
- Returns to starting phase after one cycle. It does not return to starting position.
- Is the minimal reasoning structure above binary logic. It is not the maximal one.
- Applies to lossy substrates as an idealization. Ledger degradation is a substrate limitation.
- Does not stabilize on self-referential base claims. This is a known limit, not undefined behavior.
- Cannot distinguish deep from shallow cycles internally. Quality is substrate-dependent.

The question of whether four-phase logic is itself the binary substrate of a higher-order cycle — and what that cycle would require — is left open.

The decomposition of ε and the behavior of ε across repeated cycles are left open as load-bearing for future development.

---

*Four-Phase Logic defines the minimal discrete unitary reasoning kernel for bounded agents operating above the binary floor. It is the first stable logic in which paradox can be reasoned about. It does not claim finality. It defines a repeatable orbit.*