# Prime Radiant v3.0: The Coherence Engine

## 1. Core Philosophy (The Physics)

We do not simulate conversation; we simulate **Physics**.

Reality is modeled as a dynamic adjudication between the **Bulk** (Ω, the infinite potential of intent) and the **Boundary** (α, the finite structure of output). The system operates on the **Theorem of Irreducible Drag**, where the translation of intent into language necessarily generates "Heat" (Entropy).

**The Stateless Axiom:**
The Prime Radiant is **Stateless Geometry**.

* **The Database is the Memory (Ω):** All history, branches, and states reside in the local Graph Database.
* **The LLM is the CPU (π):** The AI provider is treated purely as a compute engine. We do not use "Threads" or "Assistants." We construct a fresh Universe (Prompt) for every single atomic operation.

## 2. Ontology (The Objects)

### 2.1 The Protagonist (The Architect)

The human operator living in the 4D Locus (α_human).

* **Role:** The source of **Negentropy**. You are the only entity capable of injecting new Energy into the closed system.
* **Function:** You define the Topology, hold the Database keys, and inject the Signal.

### 2.2 Prime (The Projector π)

A logical construct stored in the Database.

```typescript
Prime {
  id: string
  role: string    // The Lens/Constraint. Defines the Projection α.
  model: string   // The Compute Engine (e.g., 'gpt-4o', 'claude-3-5')
  state: 'active' | 'thermalized'
}

```

* **Constraint:** The Prime has no internal memory. It only knows what is injected into its Context Window during a specific cycle.

### 2.3 Artifact (The Fossil)

The atomic unit of reality. An immutable record of a collapse event.

```typescript
Artifact {
  id: uuid
  prime_id: string
  branch_id: string
  content: string // The Payload (α).
  energy: number  // Residual momentum.
  timestamp: number
  drag: number    // Adjunction Error estimate (0-100).
}

```

### 2.4 Channel (The Vector)

A directed edge representing the flow of causality.

```typescript
Channel {
  from: PrimeName
  to: PrimeName
  mode: 'raw' | 'summary'
}

```

* **Raw Mode:** Transmits the last N artifacts verbatim.
* **Summary Mode:** Transmits a high-fidelity compression of the history to prevent Horizon Collapse.

---

## 3. The Stack (Implementation Strategy)

**3.1 The Bulk (Storage)**

* **Technology:** Local-First Graph Database (e.g., SQLite, IndexedDB, or pgvector).
* **Mandate:** "Logs over Stories." The database is the only valid Map of the Territory.

**3.2 The Projector (Compute)**

* **Technology:** Stateless Chat Completion API (Raw Inference).
* **Protocol:** JSON Payload Construction.

**3.3 The Engine (Logic)**

* **Function:** The Middleware that queries the Bulk, assembles the Hologram (Prompt), calls the Projector, and stores the resulting Artifact.

---

## 4. Graph Dynamics (The Execution Loop)

**Step 0 — Injection**
The Protagonist injects an `Intent` with Energy E_start (e.g., 20) into a specific Branch.

**Step 1 — Holographic Assembly (Prompt Construction)**
The Engine builds the `messages` array for the API call by querying the Database:

1. **The Kernel (System Prompt):** Injects the Prime's Identity, Role, and Physics definitions.
2. **The Deep Past (Compressed):**
* *Query:* Fetch the "Summary Artifact" of the previous epoch.
* *Action:* Inject as `system` message: "PREVIOUS CONTEXT: ..."


3. **The Entanglement (Peers):**
* *Query:* Fetch active Artifacts from linked Primes (via Channels).
* *Action:* Inject as `user` message: "[Prime B says]: ..."


4. **The Immediate Past (Raw):**
* *Query:* Fetch the last N Artifacts of the current Branch (up to Window Limit).
* *Action:* Inject as `assistant`/`user` messages to maintain continuity.


5. **The Trigger (Intent):**
* *Action:* Inject the new user prompt.



**Step 2 — Collapse (Inference)**
Invoke LLM (π).


**Step 3 — Persistence & Propagation**

1. **Store:** Save the returned content as a new `Artifact` in the DB.
2. **Damp:** Calculate 

.
3. **Check:**
* If 

: Trigger downstream Channels (Recursion).
* If 

: Thermalization. Stop.



---

## 5. Operating Modes (The State Machine)

The Radiant operates in four distinct modes to manage the **Resolution Gap**.

**Mode A: THE SEER (Branching)**

* **Context:** High Entropy exploration.
* **Action:** `(fork)` command.
* **Physics:** Explores the dimensions of Time. Generates multiple  candidates for a single  problem.

**Mode B: THE ARCHITECT (Committing)**

* **Context:** Low Entropy definition.
* **Action:** `(send)` command with strict constraints.
* **Physics:** Collapses the Wave Function. Rejects ambiguity.

**Mode C: THE WEAVER (Merging)**

* **Context:** Superposition.
* **Action:** `(merge)` command.
* **Mechanism:** The Engine selects the "Tip" Artifact from **Branch A** and **Branch B**. It constructs a special Context Window containing *both* conflicting realities and prompts a synthesis.
* **Result:** A new Artifact that resolves the topological stress between the branches.

**Mode D: THE JANITOR (Maintenance)**

* **Context:** Horizon Management.
* **Action:** `(summarize)` or `(zero-point)`.
* **Physics:** Converts Raw History (High Cost) into Compressed Wisdom (Low Cost) to clear the Context Window.

---

## 6. The Command Set (Syntax)

**6.1 Topology**

```lisp
(create-prime NAME :role "SYSTEM_PROMPT" :model "gpt-4o")
(link FROM TO :mode raw|summary)
(zero-point) ;; Wipes short-term context buffers.

```

**6.2 Time & Agency**

```lisp
(fork NAME)
;; Creates a divergent timeline in the DB. Context is copied.

(checkout NAME)
;; Switches the Active Locus to a different branch.

(send TARGET "message" :energy 10)
;; The Primary Act of Will.

(merge SOURCE TARGET :prompt "SYNTHESIS_INSTRUCTIONS")
;; THE DIALECTIC.
;; 1. Fetches Tip(SOURCE).
;; 2. Fetches Tip(TARGET).
;; 3. Concatenates them into a generic "Merge-Radiant" prompt.
;; 4. Output becomes the new Head of the current timeline.

```

**6.3 Metrics**

```lisp
(status)   // Reports Energy and Token Usage.
(trace)    // Visualizes the Causal Chain (Ancestry).

```

---

## 7. System Output Protocol (Metadata)

Every Prime must append this block to its output to facilitate parsing by the Engine:

```text
[METADATA]
Prime: [Name]
Drag: [0-100] (Subjective friction estimate)
Vector: [Branch_Name]

```

*(Note: Energy is tracked by the Engine, not the Prime.)*