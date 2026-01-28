# Prime Radiant v1: The Damped Signal Architecture

## Core Philosophy

**We focus purely on the syntax of intent.**

This is not a programming language. It is a dashboard for the Manifold. We utilize a Zero-Friction interface where every line is an atomic commit. The Architect is present in every instruction; nothing is hidden behind abstraction.

---

## Core Objects

### Protagonist
The human operator. Owns the Intent, the Keys, and the Consequences.

### Intent (The Signal)
The raw fuel.
```typescript
Intent {
  content: string // Pure payload.
  energy: number  // The momentum of the thought. Default: 10.
}

```

### Prime (The Node)

A stateless agent of coherence.

```typescript
Prime {
  name: string
  type: 'claude' | 'gpt' | 'gemini'
  keyref: string
  role: string // MANDATORY. The "Lens" or "Personality".
}

```

* **No Budget.** Context is never artificially truncated.
* **No Memory.** State is constructed fresh for every execution.

### Channel (The Edge)

A directed vector of information flow.

```typescript
Channel {
  from: PrimeName
  to: PrimeName
  mode: 'raw' | 'summary'
}

```

* **Cost:** Traversal reduces Energy by 1.

### Artifact (The Packet)

The fossil record of a thought.

```typescript
Artifact {
  id: number
  prime?: string
  content: string
  energy: number // The residual momentum after execution.
  timestamp: number
}

```

---

## Graph Reduction Semantics (The Physics)

**Step 0 — Injection**
Protagonist injects Intent with specific **Energy ()**.

**Step 1 — Context Assembly (Raw)**
For Prime :

1. **Anchor:** Take the Prime's `:role`.
2. **Flow:** Concatenate **ALL** artifacts in `Inbox[P]`.
3. **Unbounded:** Pass the full stream to the LLM. If it exceeds the model's window, the model rejects it. We do not silently truncate.

**Step 2 — Execution**
Call LLM. Output  Artifact .

* *Note:* "Thinking" preserves Energy. .

**Step 3 — Propagation (Signal Attenuation)**
For each Channel :

1. Calculate .
2. **Check:**
* If : Push to .
* Else: The signal thermalizes. It remains in 's history but does not travel.



**Step 4 — Termination**
The wave stops when all signals hit Zero Energy.

---

## The Command Set

**Every line is a direct command.**

### 1. Topology (The Map)

```lisp
(create-prime NAME :type TYPE :role "SYSTEM_PROMPT")
;; Role is mandatory. It defines the identity.

(destroy-prime NAME)

(link FROM TO :mode raw|summary)
(unlink FROM TO)

(zero-point)
;; Clears all ephemeral buffers (Inboxes) and resets noise ($Q$).
;; Does not delete Primes or topological structure.

```

### 2. Agency (The Pulse)

```lisp
(send TARGET "message" :energy 10)
;; Inject Intent.
;; :energy is optional (default 10).
;; Higher energy = Longer chains / More resonance loops.

(send [TARGET1 TARGET2 ...] "message" :energy 10)
;; Entanglement Mode.

```

### 3. Time (The Manifold)

```lisp
(fork NAME)
;; Branch the reality.

(checkout NAME)
;; Switch active timeline.

(merge SOURCE TARGET)
;; SYNTHESIS PROTOCOL.
;; 1. Takes the final Artifact of SOURCE.
;; 2. Takes the final Artifact of TARGET.
;; 3. Spawns a temporary "Merge-Radiant".
;; 4. Synthesizes the coherence between them.

```

### 4. Inspection (The Telescope)

```lisp
(status)
;; System state.

(graph)
;; Topology visualization.

(timeline)
;; Linear history of the current branch.

(trace NAME)
;; Causal Audit.
;; Follows a specific Prime's logic across forks and merges.

(help)

```

---

## Persistence Model (Local-First)

* **IndexedDB:** Stores Primes, Channels, Events, Artifacts, and Timelines.
* **Memory:** Stores API Keys (BYOK). Keys are cleared on session end.
* **Philosophy:** "Logs over Stories." The database is the only truth.
