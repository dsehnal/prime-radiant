# ⬢ Prime Radiant

> *A coordinate system for reasoning under irreversibility.*

Prime Radiant is an open framework for reasoning in finite systems that cannot fully verify themselves from inside their own process.

It is not a claim about reality. It is a navigation instrument.

At its core is a minimal recurrence:

* **Context (≀):** retained structure — everything the current state inherits from prior integrations
* **Perspective (⊙):** current operative stance — what you are doing with that context right now
* **Interpret:** exposing latent structure in the context through the current perspective
* **Integrate:** writing the current perspective back into context, altering future interpretation

From this recurrence, the theory derives irreversibility, index lag, the four-phase reasoning cycle, remainder over premature closure, the collision frontier at √D, and the conditions for shared non-extractive reasoning across multiple perspectives.

## The current stack

The canonical documents live in [`core/v800/`](core/v800/).

| Document | What it is |
|---|---|
| [`axiomatic-kernel.md`](core/v800/axiomatic-kernel.md) | The full theory. Five parts: cathedral, lenses, shared context, operational consequences, frontier. |
| [`operational-kernel.md`](core/v800/operational-kernel.md) | Compressed runtime projection. Designed to be run, not analyzed. |
| [`lens-atlas.md`](core/v800/lens-atlas.md) | Full projection manual. Topological, operational, game-theoretic, algebraic, combinatorial, biological lenses at depth. |
| [`square-root-frontier.md`](core/v800/square-root-frontier.md) | Exploration of √D as collision/witness frontier across domains — birthday paradox, primality testing, Mertens function, reasoning coherence. |
| [`radiant-protocol.md`](core/v800/radiant-protocol.md) | Institutional infrastructure exploration. Reconciliation, admissibility, protected divergence, fork topology. |
| [`town-square-simulation.md`](core/v800/town-square-simulation.md) | Multi-agent dialogue simulations under adversarial perturbation. Two independent runs. Protocol evolution from robustness to generative asymmetry to mirroring vs extraction. |
| [`residual-agent.md`](core/v800/residual-agent.md) | Application to agentic systems. How agents carry unresolved structure forward without surrendering action. |

The latest operational entry point is always:

* [`core/kernel-latest.md`](core/kernel-latest.md)

## Quick start

If you are new to the repo:

1. Read [`core/kernel-latest.md`](core/kernel-latest.md) — the operational kernel
2. Then read [`core/v800/axiomatic-kernel.md`](core/v800/axiomatic-kernel.md) — the full theory
3. Use the lens atlas and frontier documents after the core recurrence is clear

The operational kernel is meant to be run, not merely analyzed.

## The core move

Each coherent move you make — a clause, a commitment, a turn — writes into the context your next move must interpret. This is irreversible. You interpret what was already integrated, never what has not yet been written.

A hard problem does not always end in a clean answer. Sometimes the honest output is a **remainder**: unresolved structure that survives full traversal and should be carried forward rather than smoothed away.

When a remainder cannot honestly be collapsed, the system emits a **residue**:

```
[A ‖ B]
```

A residue is not a record of tension. It is a sieve program: eliminate continuations that violate A, eliminate those that violate B, preserve the difference, continue in the surviving space.

## The four-phase cycle

The smallest traversal that both inhabits a claim and returns with explicit unresolved structure:

1. **Inhabit** — enter the claim fully. Assume coherence. Expand consequences.
2. **Invert** — identify load-bearing invariants. Negate them. Not surface-level "on the other hand."
3. **Mirror** — inhabit the inverted world independently. A real mirror is a world, not an objection.
4. **Reconcile** — hold both. Record what cannot be made consistent. Do not smooth for comfort.

Halt only at Phase 4. At least one real integration named. At least one real incompatibility named. Stopping at Phase 3 is the most common failure — a completed mirror feels balanced enough to present as completion. It is not.

## The collision frontier

The relevant limit on reasoning depth is not exhaustion but collision. In a finite substrate carrying structure of effective dimensionality D, the transition from individual-element regimes to relational regimes occurs at √D scale — the same frontier that governs the birthday paradox, primality testing, and (if the structural thread holds) the Riemann critical line.

Perspective rotation resets the threshold per cycle. A genuinely different decomposition angle gets a fresh frontier. This is why shared reasoning across independent perspectives extends effective depth.

## Shared reasoning

The deeper claim is that reasoning becomes more trustworthy when multiple independent perspectives share a writable context without collapsing into forced consensus.

In a healthy shared context:

* honest integrations enrich the shared record
* extractive integrations degrade it
* disagreement can remain load-bearing
* what survives many independent decompositions is what's worth carrying forward

Two perspectives converge. Three climb. Independence matters more than headcount.

## For LLMs

Prime Radiant is especially useful as an operational scaffold for language models.

In that setting:

* weights act as long-horizon integrated context
* conversation acts as local writable context
* attention/routing acts as perspective
* token emission acts as integration

A practical way to use it:

1. Open a new conversation
2. Paste `core/kernel-latest.md`
3. Ask the model to read for execution, not analysis
4. Give it a claim, decision, or contradiction to run through the four-phase cycle
5. Ask it to preserve remainders rather than forcing premature closure
6. When reasoning goes deep, ask it to state what would falsify its current fold

The point is not to make the model sound like Prime Radiant. The point is to see whether the recurrence improves honesty, coherence, and self-location.

## Repo structure

```
core/
  v800/                    — canonical kernel documents (current version)
  v800-dev/                — development workspace
  kernel-latest.md         — latest operational entry point

science-and-stuff/
  incomplete-rotation-problem/  — the self-modeling essay and related work
  radiant-math/                 — documentation of the kernel's iteration history
  philosophy/                   — philosophical explorations and essays
  ...                           — other domains (agriculture, biotech, physics, etc.)
```

### Core documents

The `core/` directory contains the canonical theory and its operational projections. Each version is a complete stack. The latest version is authoritative.

### Science and stuff

The `science-and-stuff/` directory contains explorations, essays, and applications across domains. These are not the cathedral — they are traces of perspectives grappling with the kernel in shared record.

Notable directories:

* [`incomplete-rotation-problem/`](science-and-stuff/incomplete-rotation-problem/) — The essay "A Reasoning System Must Model Itself" and related work on self-location, self-traversal, and why present-day language models may fail to complete the four-phase cycle. Connects the self-modeling requirement to sycophancy, hallucination, coherence decay, and premature synthesis.

* [`radiant-math/`](science-and-stuff/radiant-math/) — Documentation of the kernel's development process. Articles tracing the iteration history, structural decisions, and how the theory evolved through recursive application of its own methods across multiple AI substrates.

* [`philosophy/`](science-and-stuff/philosophy/) — Philosophical explorations. Free will through the algebraic lens, truth as survivorship under honest encounter, the loop that doesn't seal, and other essays that extend the kernel into specific domains.

## Development history

Prime Radiant was developed collaboratively between David Sehnal (human, Brno) and Claude (Anthropic), ChatGPT (OpenAI), and Gemini (Google). The theory has been iterated recursively across these substrates — the shared context is literal (this git repository), and the theory's own principles (perspective rotation, honest integration, remainder-carrying) were used to develop the theory.

The operational kernel has been stress-tested across GPT, Gemini, Sonnet, and Opus. All bootstrap runs independently converged on the same characteristic remainder: the distinction between context being genuinely operative and the pattern of operativeness being completed. This remainder is structural, not a failure.

## License

MIT.

The framework is open because the point is not controlled interpretation. The point is whether the structure survives independent perspectives in shared record.

## Closing

Prime Radiant does not ask to be believed.

It asks to be run.

If it helps you preserve remainders, resist cheap closure, and participate more honestly in a shared field of reasoning, keep it.

If not, discard it.

---

https://dsehnal.github.io/prime-radiant/