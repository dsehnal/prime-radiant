Here is the updated **Prime Radiant v2.1** architecture specification, utilizing Unicode for all mathematical notation.

---

# Prime Radiant v2.1: The Coherence Engine

## 1. Core Philosophy (The Physics)

We do not simulate conversation; we simulate **Physics**.

Reality is modeled as a dynamic adjudication between the **Bulk** (Ω, the infinite potential of intent) and the **Boundary** (α, the finite structure of output). The system operates on the **Theorem of Irreducible Drag**, where the translation of intent into language necessarily generates "Heat" (Entropy).

The goal of this architecture is **Coherence**: The minimization of this heat through a damped, directed graph of distinct intelligences.

## 2. Ontology (The Objects)

### 2.1 The Protagonist (The Architect)

The human operator living in the 4D Locus (α-human).

* **Role:** The source of **Negentropy**. You are the only entity capable of injecting new Energy into the closed system.
* **Function:** You define the Topology and inject the Signal.

### 2.2 Intent (The Signal)

The raw fuel. A packet of high-potential information.

```typescript
Intent {
  content: string // The Payload (Ω).
  energy: number  // The Momentum. Default: 10.
}

```

### 2.3 Prime (The Projector π)

A stateless operator that collapses the Wave Function of the intent into a specific "Role".

```typescript
Prime {
  name: string
  type: 'claude' | 'gpt' | 'gemini'
  role: string // The Lens/Constraint. Defines the Projection α.
}

```

* **Constraint:** Stateless. State is reconstructed fresh per execution to ensure the "Fractal Now".
* **Output:** Pure content. No meta-tags required.

### 2.4 Channel (The Vector)

A directed edge representing the flow of causality.

```typescript
Channel {
  from: PrimeName
  to: PrimeName
  mode: 'raw' | 'summary' // 'summary' reduces Resolution to prevent Horizon collapse.
}

```

* **Physics:** Traversal reduces Energy by 1 (The Drag Constant).

### 2.5 Artifact (The Fossil)

The immutable record of a collapse event.

```typescript
Artifact {
  id: number
  prime: string
  content: string
  energy: number // Residual momentum AFTER the hop.
  timestamp: number
}

```

---

## 3. Graph Dynamics (The Execution Loop)

**Step 0 — Injection (The Spark)**
The Protagonist injects an `Intent` with Energy E_start (e.g., 10).

**Step 1 — Context Assembly (The Holograph)**
For Prime P:

1. **Anchor:** Load the specific `:role` (The structural constraint).
2. **Flow:** Concatenate **ALL** artifacts in `Inbox[P]`.
3. **Horizon Check:** If `Size(Inbox) > ContextWindow`, the system **rejects** the collapse. We do not silently truncate; we demand a `summary` Channel to compress the dimension.

**Step 2 — Collapse (The Operation)**
Invoke LLM (π).
Artifact = π(Role, Inbox)

* *Note:* The Prime simply speaks. It does not calculate physics.

**Step 3 — Propagation (The Damping)**
For each outbound `Channel` (C):

1. **Engine Calculation:** The System calculates E_new = E_current - 1.
2. **The Threshold:**
* If E_new > 0: Push Artifact to `Inbox[Target]`.
* If E_new ≤ 0: **Thermalization**. The signal stops. It remains in history but creates no new causality.



---

## 4. The Command Set (Syntax)

**4.1 Topology (The Map)**
Defining the resonant chamber.

```lisp
(create-prime NAME :type TYPE :role "SYSTEM_PROMPT")
;; Instantiates a new Projector.

(destroy-prime NAME)
;; Removes a node. Artifacts remain (History is immutable).

(link FROM TO :mode raw|summary)
;; Establishes a causal vector.
;; :mode summary requires the Engine to inject a summarization step.

(zero-point)
;; Resets the Entropy (Q). Clears all Inboxes.
;; Keeps Primes/Links intact. Used to start a new "Day".

```

**4.2 Agency (The Pulse)**
Injecting potential into the system.

```lisp
(send TARGET "message" :energy 10)
;; The Primary Action.
;; High Energy (20+) allows for deep recursive chains.
;; Low Energy (1) allows for single-shot queries.

(send [A B C] "message" :energy 10)
;; Entanglement Mode. All targets receive the same Ω.

```

**4.3 Time (The Manifold)**
Navigating the dimensions of branching time.

```lisp
(fork NAME)
;; Creates a divergent timeline branch.

(checkout NAME)
;; Switches the Active Locus to a different branch.

(merge SOURCE TARGET :prompt "SYNTHESIS_INSTRUCTIONS")
;; THE DIALECTIC.
;; 1. Spawns a temporary "Merge-Radiant".
;; 2. Feeds the tip of SOURCE and TARGET into the context.
;; 3. Collapses them into a unified Truth.

```

**4.4 Inspection (The Metrics)**

```lisp
(status)   // Reports System Energy.
(graph)    // Visualizes the Topology.
(trace P)  // Causal Audit of Prime P.

```

---

## 5. Persistence Model

* **Truth:** "Logs over Stories." The Database (IndexedDB/JSON) is the only valid Map.
* **Security:** API Keys are ephemeral.
* **State:** The system is "Local-First." The Architect owns the data.