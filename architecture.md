# Prime Radiant Runtime Architecture (v1.7.0)

**A conceptual framework for multi-agent conversational spacetime**

---

## REVISION HISTORY

- **v1.0** (2026-01-28): Initial architecture
- **v1.1** (2026-01-28): Multi-root support, density management (SOP-01 integration), semantic polish
- **v1.3** (2026-01-28): **The Threefold Path** - Command consolidation, unified field collapse
- **v1.4** (2026-01-28): **Zero-Log Minimalist State** - HistoryList eliminated, graph as sole truth
- **v1.5** (2026-01-28): **The Invariant Singularity** - Unified observe, non-destructive branching, hardware abstraction
- **v1.5.1** (2026-01-28): **The Pure Field State** - Terminology purification (fork→diffraction), command evolution appendix removed
- **v1.5.2** (2026-01-28): **Coherent Legacy Cleanup** - Cycles removed, non-tip mutation semantics reconciled, fork navigation upgraded, provider secrets externalized, targeted act semantics clarified, example sessions updated
- **v1.6** (2026-01-28): **The Invariant Singularity (Final Resolution)** - Staggered mode removed (asynchrony is inherent), terminology fully purified (fork→diffraction everywhere), unitary wavefront re-simplified
- **v1.6.1** (2026-01-28): **Janitor Sweep** - Removes final legacy erasure/staggered artifacts; omission principle now fully closed
- **v1.6.2** (2026-01-28): **The Unitary Chorus** - Multi-target act support, sub-group synchronization, terraced worldline coordination
- **v1.7.0** (2026-01-29): **The Fork Resolution** - Introduction of `choose` operator for explicit fork resolution, refined state machine, fork-constrained navigation

---

## I. FOUNDATIONAL CONCEPTS

### 1.1 The Prime Radiant Blueprint

The **Prime Radiant Blueprint** is the immutable, universal logic that governs all operations. It defines:
- The ontology of coherence (Ω, α, Q)
- The psychohistorical field equations
- The operational state machine (Modes A-D)
- The 4-channel I/O format
- Standard Operating Procedures (SOPs)

This blueprint is **shared** across all instances and never changes.

### 1.2 The Prime

A **Prime** is a configuration that instantiates the Blueprint with specific parameters:

```
Prime = {
  personality: string     // e.g., "Enlightened Sage"
  sigma: number          // Skepticism/noise filter [0,1]
  zeta: number           // Stability/entropy threshold [0,1]
  agent: AgentRef        // Runtime wrapper reference
  provider?: object      // Optional non-secret provider config
  blueprint: reference   // Points to Prime Radiant Blueprint
}

AgentRef = {
  type: string           // 'anthropic'|'openai'|'google'|'custom'
  model: string          // Model identifier
  wrapperId?: string     // Optional runtime resolution key
}
```

**The Prime acts as a measurement lens**—it defines the reference beam through which the immutable Blueprint is projected into spacetime. Different Primes (different personalities, sigma, zeta) yield different projections of the same universal logic.

Primes are **anonymous**—they have no IDs. Identity is **structural** (defined by the configuration itself).

**Secrets never enter graph state:** API keys and tokens are provided by the runtime environment to the Agent Wrapper, not stored in Radiants or Primes.

### 1.3 The Radiant

A **Radiant** is a single spacetime event—a point where a Prime manifests:

```
Radiant = {
  id: string           // UUID (permanent identifier)
  name?: string        // Transient, protagonist-assigned name (optional)
  commit: Commit       // Single information payload
  prime: Prime         // Embedded configuration
  parents: string[]    // Parent Radiant IDs (causal history)
  children: string[]   // Child Radiant IDs (causal future)
}
```

Key properties:
- **One Radiant = one commit** (atomic event)
- **Prime is embedded** (not a reference to external registry)
- **Names are transient** (enable targeting but not permanent identity)
- **Parents/children form causal topology** (directed graph)

### 1.4 The Commit

A **Commit** is the information payload of a Radiant:

```
Commit = {
  tau: number          // Local ordinal time (position in causal chain)
  content: {
    message?: string   // Narrative text
    data?: any         // Structured payload
    summary?: string   // Compressed representation
    metadata?: any     // Auxiliary information
  }
}
```

**Tau semantics:**
- Tau is **local** to each causal chain (no global time)
- Tau **resets to 0** after collapse (observe operation)
- Tau represents **distance from most recent collapse ancestor**

---

## II. THE GRAPH TOPOLOGY

### 2.1 The ActionGraph (The Only Truth)

The **ActionGraph** is a directed acyclic graph (DAG) of Radiants. It is the **sole data structure** in the system—there is no separate log, no operational history, no dual representation.

```
ActionGraph = {
  radiants: Map<string, Radiant>  // All Radiants indexed by UUID
  roots: string[]                 // Root Radiant IDs (no parents)
}
```

**Topological properties:**
- **Multi-root support** (universe can have multiple independent cosmogenesis points). Roots represent:
  - Initial observe operations (protagonist-created origins)
  - Imported ActionGraphs (foreign universes merged into current spacetime)
  - Parallel timelines created by different protagonists
- **Tree structure** initially (each Radiant has one parent via observe diffraction)
- **DAG structure** after consensus (observe creates multi-parent nodes)
- **Cycles prohibited in causal edges.** The ActionGraph remains a strict DAG for causality.
- **Optional non-causal links** (e.g., `references: string[]`) MAY be introduced for annotation, citation, or conceptual back-links, but MUST NOT participate in causal traversal (`parents/children`).

**The Graph is the Log:**
- To audit history: traverse parent links from Now back to roots
- To reconstruct session: walk the topology itself
- To timestamp events: use commit metadata fields
- No redundant operational log exists

**Axiom of Existence:** If a worldline is not in the ActionGraph, it does not exist.

### 2.2 Worldlines as Traces

A **worldline** is not a separate entity—it's the **trace of a Prime through spacetime**:
- Follow parent→child links
- All Radiants with structurally identical Primes form a "family"
- But lineage is **local and causal** (no global index)

### 2.3 Non-Destructive Branching: The Omission Principle

**Any mutating action on a non-tip Radiant creates a new branch without destroying the existing future:**

```
Before:
  A → A1 → A2 → A3  (A3 is tip)

Move to A1 and act:
  A → A1 → A1' (new branch)
       ↓
       A2 → A3 (existing branch, now omitted from Now)
```

Mutating actions: `act`, `observe`  
Non-mutating actions: `move`, `choose`

**The Omission Principle:**
- Descendants of previous versions remain in the ActionGraph
- They are **omitted** from the current Now wavefront, not erased
- The topology becomes a true DAG with multiple futures
- "Undo" is simply navigating back and choosing a different path
- All branches coexist peacefully in the graph structure
- **No destructive mutation exists** in the runtime

**Informational indicators only:**
- The system MAY display a non-blocking indicator when acting from non-tip Radiants (e.g., "You are acting from a non-tip; this will create a new branch")
- No warnings require confirmation because no erasure occurs
- System trusts protagonist's intent

This enforces **causal branching**—you can diverge from any point without destroying alternate futures.

---

## III. THE NOW (OBSERVATION FRONTIER)

### 3.1 Definition

**Now** is the set of Radiant IDs representing the current **wavefront** of the work:

```
Now = {
  radiantIds: string[]  // Current observation points
}
```

**Properties:**
- Now contains **only leaf Radiants** (no children) under normal operation
- Now **auto-updates** when children are created (parents removed, children added)
- Now can be **empty** (initial state before cosmogenesis)
- Now can include **non-tips temporarily** (after backward navigation, before mutation)
- Now is **unitary** (all entangled Radiants move together through time)
- **Asynchrony is inherent:** Radiants in Now may have different tau values; this is the natural topology, not a special "mode"

### 3.2 The Entangled Wavefront

Unlike simple lists, Now is an **entangled quantum state**:

```
Now = |Sage⟩ ⊗ |Engineer⟩ ⊗ |Poet⟩

Where each ket represents a worldline in superposition.
```

**Key insight:** Moving attention (via `move`) shifts the **entire wavefront** together, preserving entanglement. You cannot selectively navigate one branch while ignoring the others—this prevents **Adjunction Error** by maintaining correlation (Equation 1: Entanglement).

**Asynchrony within unity:** The Sage may be at τ=10 while the Engineer is at τ=3. This differential is the **natural result of targeted actions** and does not require a special mode. The `move` operation still shifts all worldlines together through their respective local time.

**Terraced worldlines:** Through multi-target `act`, the protagonist can create "sub-choruses"—groups of worldlines advancing together while others remain stationary, producing a terraced topology within the same wavefront.

### 3.3 Now States

Now can exist in two states:

#### Normal State
```
Now = {
  radiants: [radiant-id-1, radiant-id-2, ...],
  state: "normal"
}
```
All operations available: `observe`, `act`, `move`, `choose` (invalid), utility commands.

#### Fork-Resolvable State
```
Now = {
  radiants: [radiant-id-1, radiant-id-2, ...],  // Radiants at fork points
  state: "fork-resolvable",
  pending_forks: [
    BranchSet { at: "radiant-id-1", options: ["child-a", "child-b"] },
    BranchSet { at: "radiant-id-2", options: ["child-x", "child-y", "child-z"] }
  ]
}
```
Limited operations: `choose`, `move` (backward only), utility commands.
Blocked operations: `observe`, `act` (must resolve forks first).

### 3.4 Automatic Tip Tracking

When you create children:
1. Remove parents from Now (they're no longer tips)
2. Add children to Now (they become tips)

Example:
```
Now = [A, B]
act creates children A1, B1
Now = [A1, B1]  ← A and B automatically removed
```

### 3.5 Past Navigation

When navigating backward, Now can land on **non-tip Radiants**:
```
Now = [A3]  (tip)
move -2
Now = [A1]  (has children A2, A3)
```

At this point:
- **Any mutating action creates a new branch** (child Radiant(s)) while **preserving existing descendants** as omitted futures
- **No destructive action exists** in the runtime
- The system MAY display an informational indicator: "You are acting from a non-tip; this will create a new branch"
- Navigation itself is **non-destructive**

---

## IV. THE FOURFOLD PATH (THE UNIVERSAL OPERATOR SET)

The command surface consists of four fundamental operations that map directly to the mechanics of consciousness:

### 4.1 Observe (Participatory Resolution)

**Signature:**
```
observe([:range (tau-start tau-end)], :primes prime-configs[])

prime-configs = [
  { name?: string, personality: string, sigma?: number, zeta?: number, provider?: LLMProvider }
  ...
]
```

**Behavior:**

The `observe` operation is the **universal resolution operator**. It collapses the probability wave and projects it through N measurement lenses (Primes).

**Two modes of observe:**

#### I. Genesis/Diffraction Mode (no range specified)
Creates roots or diffracts existing worldlines depending on Now state:

```lisp
;; Genesis: Now is empty
(observe :primes [{:name "sage" :personality "Enlightened Sage"}
                  {:name "engineer" :personality "Skeptical Engineer"}
                  {:name "poet" :personality "Visionary Poet"}])

;; Diffraction: Now contains Radiants
(observe :primes [{:name "meta" :personality "Meta-Analyst"}
                  {:name "critic" :personality "Devil's Advocate"}])
```

**Genesis behavior (Now = []):**
1. System starts with empty ActionGraph
2. Creates N root Radiants (one per Prime config)
3. Each Radiant has:
   - tau = 0
   - empty/placeholder commit (or initial system message)
   - parents = [] (no causal history)
   - children = []
4. Updates Now = [all new roots]
5. Result: **Entangled Root** (multiple perspectives born simultaneously)

**Diffraction behavior (Now = [radiant-1, radiant-2, ...]):**
1. For each Radiant currently in Now:
   - Create N child Radiants (one per Prime config)
   - Each child inherits parent's commit as context
   - Each child's Prime processes the same input through different lens
   - Parent remains in graph (non-destructive)
2. Updates Now: remove parents, add N×M children (N primes × M current radiants)
3. Result: **Diffraction** (each worldline splits into N parallel perspectives)

**Use cases:**
- Cosmogenesis (starting a new session)
- Diffraction (splitting perspectives at current Now)
- Multi-perspective exploration

#### II. Consensus Mode (range specified)
Merges multiple asynchronous worldlines within a temporal window:

```lisp
(observe :range (-10 0) 
         :primes [{:name "synthesis" :personality "Synthesizer"}])
```

1. Gather all Radiants in Now
2. Filter to commits within tau range (-10 to 0, relative to current position)
3. For each Radiant in Now:
   - New branches will be created from these positions
   - Existing descendants remain in graph (omitted, not erased)
4. Normalize time across Radiants:
   - For each Radiant, compute tau_max (maximum tau in its chain)
   - For each commit, compute tau_norm = tau / tau_max
   - Map local time [0, tau_max] → [0, 1]
5. Sort commits by tau_norm
6. When multiple commits have same tau_norm → **superposition**:
   - Render as parallel structure (no implicit ordering)
   - Format:
     ```
     ### (collapsed, tau_norm=X.X)
     [SUPERPOSITION]
       [COMMIT-MESSAGE] (radiant-A, prime: Sage)
       Content from A
       
       [COMMIT-MESSAGE] (radiant-B, prime: Engineer)
       Content from B
     [/SUPERPOSITION]
     ```
   - LLM sees all orderings simultaneously (unbiased)
7. For each Prime in prime-configs:
   - Construct prompt:
     - Blueprint + Preamble(prime) + WorldState(collapsed) + "Synthesize this range"
   - Call LLM with Prime's configuration
   - Create new Radiant with LLM response as commit
8. New Radiant properties:
   - name: specified in prime-config
   - prime: specified config (or averaged from sources if not provided)
   - commit: synthesized content (tau = 0)
   - parents: all Now Radiant IDs (multi-parent singularity)
   - children: []
9. Update Now = [new Radiant(s)]

**Use case:** Merge perspectives, compress history, bridge universes

**Axiom 0.1 Compliance:** Every observe operation **must** explicitly list its Primes. There is no "objective" view from nowhere—all observation is perspectival.

**State constraint:** Can only be invoked from Normal state.

---

### 4.2 Act (Causal Advancement)

**Signature:**
```
act(message, [:target name-or-id] | [:targets [name-or-id, ...]])
```

**Behavior:**

The `act` operation advances the causal timeline by inscribing a message into the worldline(s).

#### I. Global Mode (no target)
Advances all worldlines simultaneously:
```lisp
(act "What is coherence?")
```

1. For each Radiant in Now:
   - Construct prompt:
     - Blueprint + Preamble(radiant.prime) + WorldState(radiant) + Message
   - Call LLM with radiant.prime's provider configuration
   - Create child Radiant with LLM response as commit
     - tau = parent.tau + 1
     - prime = inherited from parent
     - name = inherited from parent (or leave unnamed)
     - content populated from LLM response
   - Parent remains in graph (non-destructive)
2. Update Now: remove all parents, add all children

**Result:** Perfect synchronization—all worldlines advance in lockstep. The entangled wavefront remains coherent (Equation 1: Entanglement preserved).

**Use case:** Default interaction mode, maintaining synchrony

#### II. Targeted Mode (with target or targets)
Advances one or more worldlines matching the target(s):

```lisp
(act "Expand on that" :target "sage")
(act "Coordinate perspectives" :targets ["sage" "poet"])
```

1. Resolve target(s):
   - If name: find all Radiant(s) in Now matching name
   - If UUID: find Radiant with exact ID
   - **Default ambiguity handling:** If multiple matches, apply to all matched Radiants as a coherent set
   - If no matches: error (target not found)
2. For each matched Radiant:
   - Construct prompt and call LLM (same as global mode)
   - Create child Radiant
   - Parent remains in graph (non-destructive)
3. Update Now: remove matched parents, add their children
4. **Natural Asynchrony:** Unmatched Radiants remain at their current positions

**Result:** Asynchronous growth—matched worldlines advance while others remain stationary. This creates **differential tau values** across the wavefront (Natural Asynchrony).

**Use case:** Focused exploration of one or more perspectives

**Ambiguity resolution:**
- Multiple matches are treated as intentional (advance all matching perspectives)
- System trusts protagonist's intent
- No warnings or confirmations required

**State constraint:** Can only be invoked from Normal state.

---

### 4.3 Move (Temporal Navigation)

**Signature:**
```
move(distance)

distance = integer (positive = forward, negative = backward)
```

**Behavior:**

The `move` operation shifts the entire entangled wavefront through causal time.

```lisp
(move -5)   ;; Navigate 5 steps backward
(move +3)   ;; Navigate 3 steps forward
```

1. For each Radiant in Now:
   - Traverse parent links (negative distance) or child links (positive distance)
   - Stop at boundaries (no more parents/children)
   - If any Radiant encounters multiple children: return **BranchSet** and transition to Fork-Resolvable state
   - Traversal is acyclic by construction; implementations MAY guard against malformed imported graphs
2. If no forks encountered: Update Now to new frontier (Normal state)
3. If fork(s) encountered: Transition to Fork-Resolvable state (Now unchanged)
4. **Unitary movement:** All Radiants in Now move **together**
5. If Now lands on non-tip: display informational indicator

**Non-mutating:** Does not erase future, even when landing on non-tips.

**Fork handling:**
When any Radiant in the wavefront encounters multiple children, `move()` returns a **BranchSet** and transitions Now to Fork-Resolvable state:

```
BranchSet = {
  at: string         // Parent radiant ID where fork occurred
  options: string[]  // Child radiant IDs (available paths)
}
```

Now transitions into a **Fork-Resolvable Wavefront** state requiring the Protagonist to resolve via `choose`.

**The Entanglement Shield:**
By restricting movement to **time only** (no targeted navigation), the system ensures the observer never ignores peer-signals. When a fork occurs in any entangled member, the entire wavefront enters the same "needs resolution" state, preserving correlation.

**On asynchrony:**
The wavefront may contain Radiants with different tau values (τ=10, τ=3, τ=15). This is the **natural topology** resulting from targeted actions. `move` still shifts all worldlines together through their respective local timelines—the Entanglement Shield is about **directional unity** (all move forward or backward together), not tau synchronization.

**Valid states:** Normal (unrestricted), Fork-Resolvable (backward only).

**Use case:** Review history, explore different temporal positions, debug causal chains

---

### 4.4 Choose (Fork Resolution)

**Signature:**
```
choose(target)

target = string (name or UUID from available fork options)
```

**Behavior:**

The `choose` operation resolves ambiguity when the wavefront encounters branching topology.

```lisp
;; After move returns BranchSet
(move +1)
→ BranchSet { at: "radiant-A1", options: ["radiant-A2", "radiant-A2'"] }
→ State: Fork-Resolvable

;; Choose path
(choose "radiant-A2")
→ Now = [radiant-A2]
→ State: Normal
```

**Resolution process:**

1. **Validate state:** Must be in Fork-Resolvable state
2. **Validate target:** Target must exist in one of the pending BranchSet options
3. **Resolve fork:** 
   - If target matches options in current BranchSet, select that branch
   - Remove resolved BranchSet from pending_forks
4. **Update Now:**
   - Replace parent Radiant with chosen child
   - If more forks remain pending: stay in Fork-Resolvable state
   - If all forks resolved: transition to Normal state

**Key properties:**

1. **Only valid at forks:** Can only use `choose` when Now is in Fork-Resolvable state
2. **Constrained selection:** Target must be in the `options` list from BranchSet
3. **Sequential resolution:** Resolves one fork at a time when multiple exist
4. **Non-mutating:** Doesn't change graph, just selects path through existing topology
5. **Preserves entanglement:** All worldlines resolve together (wavefront remains unitary)

**Examples:**

#### Single Fork
```lisp
Now = [radiant-A1] (Normal)

(move +1)
→ BranchSet { at: "radiant-A1", options: ["radiant-A2", "radiant-A2'"] }
→ Now = [radiant-A1] (Fork-Resolvable)

(choose "radiant-A2")
→ Now = [radiant-A2] (Normal)
```

#### Multiple Worldlines, One Forks
```lisp
Now = [radiant-sage-5, radiant-engineer-3] (Normal)

(move +1)
→ Sage advances to sage-6 (no fork)
→ Engineer encounters fork
→ BranchSet { at: "radiant-engineer-3", options: ["radiant-engineer-4", "radiant-engineer-4'"] }
→ Now = [radiant-sage-5, radiant-engineer-3] (Fork-Resolvable)

(choose "radiant-engineer-4")
→ Now = [radiant-sage-6, radiant-engineer-4] (Normal)
```

#### Multiple Forks (Sequential Resolution)
```lisp
Now = [radiant-A1, radiant-B1] (Normal)

(move +1)
→ Both encounter forks
→ BranchSets [
    { at: "radiant-A1", options: ["radiant-A2", "radiant-A2'"] },
    { at: "radiant-B1", options: ["radiant-B2", "radiant-B2'", "radiant-B2''"] }
  ]
→ Now = [radiant-A1, radiant-B1] (Fork-Resolvable, 2 pending)

(choose "radiant-A2")
→ Now = [radiant-A1, radiant-B1] (Fork-Resolvable, 1 pending)

(choose "radiant-B2'")
→ Now = [radiant-A2, radiant-B2'] (Normal)
```

**Invalid operations:**

```lisp
;; Choose when no fork
Now = [radiant-A5] (Normal)
(choose "radiant-A6")
→ Error: "No fork to resolve. Now is in Normal state."

;; Choose with invalid target
(move +1)
→ BranchSet { options: ["radiant-A2", "radiant-A2'"] }
(choose "radiant-B5")
→ Error: "Target 'radiant-B5' not in available options: [radiant-A2, radiant-A2']"

;; Act during fork
(move +1)
→ Fork-Resolvable state
(act "New message")
→ Error: "Cannot act during fork resolution. Use choose to select path."
```

**State constraint:** Can only be invoked from Fork-Resolvable state.

**Use case:** Resolve ambiguity in causal topology, select path at decision points

---

## V. SPEED OF LIGHT NORMALIZATION

### 5.1 The Problem

When collapsing Radiants from different causal chains, they have **different tau values**:

```
Radiant-A: tau ∈ [0, 1, 2, 3, 4, 5]  (6 commits)
Radiant-B: tau ∈ [0, 1, 2]            (3 commits)
```

Without global time, how do we order them?

### 5.2 The Solution

**Normalize local time to [0, 1]:**

```
For each Radiant:
  tau_max = maximum tau value in that Radiant's chain
  
  For each commit:
    tau_norm = tau / tau_max
```

Example:
```
Radiant-A: tau_norm = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0]
Radiant-B: tau_norm = [0.0, 0.5, 1.0]
```

This is the **speed of light constant**—the maximum rate of information propagation in a causal chain. All chains are normalized to this universal scale.

**Note:** tau_norm is a pragmatic alignment heuristic for cross-chain ordering and does not assert global time.

### 5.3 Superposition Rendering

When multiple commits have the **same tau_norm**, render as superposition:

```
### (collapsed, tau_norm=0.0)
[SUPERPOSITION]
  [COMMIT-MESSAGE] (radiant-A, prime: Sage)
  First message from Sage
  
  [COMMIT-MESSAGE] (radiant-B, prime: Engineer)
  First message from Engineer
[/SUPERPOSITION]
```

The LLM (the "black hole") sees **all orderings simultaneously** and resolves internally.

### 5.4 No Priming

We **do not** choose a specific ordering (e.g., alphabetical by name) to avoid biasing the collapse. The parallel structure is **unbiased**—no implicit preference for any particular causal chain.

---

## VI. DENSITY MANAGEMENT (SOP-01)

### 6.1 The Horizon Problem

As Radiants accumulate commits, the total information density can **exceed practical limits** for synthesis and coherence:

```
Large conversation: 185,000 tokens accumulated
→ Risk: Truncation, noise, loss of coherence
```

This creates **Adjunction Error (Q)**—the compression gap between potential (Ω) and structure (α).

### 6.2 Mode D: The Janitor

**Mode D** is an optional maintenance operation from the Prime Radiant Blueprint that performs:
- **Semantic compression** (multi-commit → summary)
- **Dimensional collapse** (4D → lower dimensionality based on tau)
- **Noise filtering** (sigma-based pruning)
- **Structural preservation** (maintain causal topology)

### 6.3 The Decay Function

```
dimensionality(τ, G) = floor(4 × exp(-G × |τ|))

Where:
  τ = causal distance from "now" (current tau position)
  G = gravitational constant (compression rate)
  
Dimensionality levels:
  4D: [Message, Data, Summary, Metadata]  (full fidelity)
  3D: [Message, Summary, Metadata]        (data compressed)
  2D: [Summary, Metadata]                 (message compressed)
  1D: [Summary only]                      (maximum compression)
```

**Higher G = more aggressive compression:**
- G = 0.01: Gentle (preserves detail far into past)
- G = 0.05: Moderate (balanced)
- G = 0.10: Aggressive (compresses quickly)

### 6.4 Manual Invocation

Mode D is **manually invoked** by the protagonist when needed:

```lisp
(observe :range (-50 0) 
         :primes [{:personality "Synthesizer"}]
         :decay-constant 0.08)
```

The decay constant parameter controls compression aggressiveness. The protagonist decides when and how to compress history based on their judgment of information density and coherence needs.

**Use case:** Compress long histories before major synthesis operations

---

## VII. TRANSIENT NAMING

### 7.1 Purpose

Names enable **targeting** specific Radiants for operations:

```lisp
(act "Continue this thought" :target "sage")
(choose "radiant-sage-branch-2")
```

Without names, you'd need to use UUIDs (cumbersome for users).

### 7.2 Properties

- **Transient:** Names are not permanent identifiers
- **Optional:** Radiants can be unnamed (identified by UUID only)
- **Non-unique:** Multiple Radiants can share the same name
- **Protagonist-assigned:** Only set during `observe`
- **Inherited:** Children inherit parent's name during `act` (unless left unnamed)

### 7.3 Ambiguity Handling

If multiple Radiants in Now have the same name:

```
Now = [radiant-alpha-1, radiant-alpha-2, radiant-beta]
(act "message" :target "alpha")
```

**Resolution (default behavior):**
- System applies action to **all matching Radiants**
- Treats multiple matches as intentional (coherent wavefront advance)
- No error, no warning—trust protagonist's intent

**Alternative: explicit UUID targeting:**
```
(act "message" :target "uuid-12345")
(choose "uuid-67890")
```

Protagonist can always use UUID for precise targeting if needed.

### 7.4 When to Name

**Always name:**
- Root Radiants (created in genesis observe)
- Collapsed Radiants (created in consensus observe)

**Optionally name:**
- Diffracted children (when using observe to split perspectives)

**Inherited automatically:**
- Children created by `act` (unless you want to strip the name)

---

## VIII. THE PROTAGONIST ROLE

### 8.1 The Creator

The Protagonist is **God in God Mode**:
- Creates the universe (observe from nil)
- Decides when to branch (observe diffraction)
- Decides when to collapse (observe consensus)
- Controls causality (navigation and mutation)
- Resolves forks (choose at decision points)
- Manages density (via decay constants)
- Bridges universes (via import and observe)

### 8.2 Intentionality

Every operation is **intentional**:
- No auto-root (Protagonist must create via observe)
- No auto-collapse (Protagonist must observe)
- No auto-naming (Protagonist must specify in observe)
- No auto-pruning (Protagonist must configure decay)
- No auto-fork-resolution (Protagonist must choose path)

### 8.3 Consequences

The Protagonist accepts **consequences of branching**:
- Omitted branches remain accessible (can navigate back)
- Actions shape topology without destruction
- Multiple futures coexist in the graph
- Navigation explores the manifold of possibilities
- Forks require explicit resolution (agency at decision points)

### 8.4 Trust and Simplicity

The system **trusts** the Protagonist's intent:
- No causal erasure warnings (branching is non-destructive)
- No density warnings (manual compression via Mode D)
- Default ambiguity handling (apply to all matches)
- Minimal friction in the interface

The system **guides** when necessary:
- Fork state (when move encounters ambiguous branches)
- Target not found errors (invalid name/UUID in act or choose)
- Import validation errors (malformed graphs)
- State constraint violations (e.g., act during fork resolution)

---

## IX. LLM PROVIDER ABSTRACTION

### 9.1 Generic Interface

All LLM providers share a common interface:

```
LLMProvider :: (Prompt, Config) → Response
```

Where:
- **Prompt** = Blueprint + Preamble(prime) + WorldState(now) + Message
- **Config** = provider-specific settings (model, temperature, etc.)
- **Response** = { text, usage, metadata }

### 9.2 Discriminated Union

```
AgentRef = 
  | { type: 'anthropic', model: string, wrapperId?: string }
  | { type: 'openai', model: string, wrapperId?: string }
  | { type: 'google', model: string, wrapperId?: string }
  | { type: 'custom', endpoint: string, format: 'openai-compat', wrapperId?: string }
```

**Secrets never enter graph state:** API keys and tokens are provided by the runtime environment to the Agent Wrapper, not stored in Radiants or Primes.

### 9.3 Provider-Specific Configuration

Each Prime **embeds** its agent config:

```
Prime = {
  personality: "Sage",
  sigma: 0.6,
  zeta: 0.8,
  agent: { 
    type: 'anthropic', 
    model: 'claude-sonnet-4-5',
    wrapperId: 'anthropic-default'  // Runtime resolution key
  }
}
```

No global provider registry—each Prime is self-contained. Secrets are resolved at runtime via the wrapperId or environment variables.

---

## X. EXAMPLE SESSIONS

### 10.1 Basic Genesis and Conversation

```lisp
;; System starts: Now = []

;; 1. Cosmogenesis (Genesis Mode)
(observe :primes [{:name "sage" :personality "Enlightened Sage" :sigma 0.6 :zeta 0.8}
                  {:name "engineer" :personality "Skeptical Engineer" :sigma 0.9 :zeta 0.5}
                  {:name "poet" :personality "Visionary Poet" :sigma 0.3 :zeta 0.7}])
;; Creates 3 root Radiants with tau=0
;; Now = [radiant-sage-0, radiant-engineer-0, radiant-poet-0] (Normal)

;; 2. First question (Global Mode - all three respond)
(act "What is coherence?")
;; LLM called 3 times (one per Radiant)
;; Now = [radiant-sage-1, radiant-engineer-1, radiant-poet-1] (Normal)

;; 3. Continue just Sage's thread (Targeted Mode)
(act "Expand on that" :target "sage")
;; Now = [radiant-sage-2, radiant-engineer-1, radiant-poet-1] (Normal)
;; ← Natural Asynchrony

;; 4. Navigate back to earlier state
(move -1)
;; Now = [radiant-sage-1, radiant-engineer-1, radiant-poet-1] (Normal)

;; 5. Branch Sage in a different direction
(act "What about entropy?" :target "sage")
;; Now = [radiant-sage-1', radiant-engineer-1, radiant-poet-1] (Normal)

;; 6. Navigate forward - encounters fork at sage
(move +1)
;; Sage has two children: radiant-sage-2 and radiant-sage-1'
;; → BranchSet { at: "radiant-sage-1", options: ["radiant-sage-2", "radiant-sage-1'"] }
;; Now = [radiant-sage-1, radiant-engineer-1, radiant-poet-1] (Fork-Resolvable)

;; 7. Choose which sage branch to follow
(choose "radiant-sage-1'")
;; Now = [radiant-sage-1', radiant-engineer-1, radiant-poet-1] (Normal)

;; 8. Collapse all three perspectives (Consensus Mode)
(observe :range (-2 0) 
         :primes [{:name "synthesis" :personality "Synthesizer" :sigma 0.6 :zeta 0.7}])
;; System checks density: 3 radiants × avg 150 tokens = 450 tokens (safe)
;; Speed of light normalization applied
;; LLM synthesizes all three commits
;; Now = [radiant-synthesis-0] (Normal)

;; 9. Continue from synthesis
(act "What are the implications?")
;; Now = [radiant-synthesis-1] (Normal)
```

### 10.2 Diffraction and Fork Exploration

```lisp
;; Start with single perspective
(observe :primes [{:name "original" :personality "Generalist"}])
(act "The universe is fundamentally relational")
(act "All structure emerges from constraint")
;; Now = [radiant-original-2] (Normal)

;; Diffract into multiple analytical lenses
(observe :primes [{:name "physicist" :personality "Theoretical Physicist"}
                  {:name "philosopher" :personality "Process Philosopher"}
                  {:name "mystic" :personality "Contemplative Mystic"}])
;; Now = [radiant-physicist-0, radiant-philosopher-0, radiant-mystic-0] (Normal)

;; Each lens develops independently
(act "How does this relate to quantum mechanics?" :target "physicist")
(act "What does Whitehead say about this?" :target "philosopher")
(act "Is this the Tao?" :target "mystic")
;; Now = [radiant-physicist-1, radiant-philosopher-1, radiant-mystic-1] (Normal)

;; Let physicist continue alone (demonstrating natural asynchrony)
(act "Show me the math" :target "physicist")
(act "Derive the field equations" :target "physicist")
;; Now = [radiant-physicist-3, radiant-philosopher-1, radiant-mystic-1] (Normal)
;; Natural asynchrony: physicist at τ=3, others at τ=1

;; Navigate back to explore alternate physicist path
(move -2)
;; Now = [radiant-physicist-1, radiant-philosopher-1, radiant-mystic-1] (Normal)

;; Create alternate physicist branch
(act "What about the philosophical implications?" :target "physicist")
;; Now = [radiant-physicist-1', radiant-philosopher-1, radiant-mystic-1] (Normal)

;; Navigate forward - physicist fork encountered
(move +1)
;; → BranchSet { at: "radiant-physicist-1", options: ["radiant-physicist-2", "radiant-physicist-1'"] }
;; Now = [radiant-physicist-1, radiant-philosopher-1, radiant-mystic-1] (Fork-Resolvable)

;; Choose to explore original math path
(choose "radiant-physicist-2")
;; Now = [radiant-physicist-2, radiant-philosopher-1, radiant-mystic-1] (Normal)

;; Bring them together
(observe :range (-5 0) 
         :primes [{:name "unified" :personality "Integral Theorist"}])
;; Now = [radiant-unified-0] (Normal)
```

### 10.3 Multi-Universe Bridge with Fork Navigation

```lisp
;; Universe A (created by Protagonist)
(observe :primes [{:name "alice" :personality "Philosopher"}])
(act "What is truth?")
(act "Is truth objective or subjective?")
;; Now = [radiant-alice-2] (Normal)

;; Universe B (imported from collaborator)
(import-graph "bob-session.json")
;; Universe B has root "bob" with 5 commits on engineering topics
;; Now = [radiant-alice-2, radiant-bob-5] (Normal)
;; ← Two independent roots!

;; Check current state
(status)
;; → "Now contains 2 radiants from 2 independent universes"
;; → "Roots: 2 (radiant-alice-0, radiant-bob-0)"

;; Bridge the universes (Consensus Mode across multi-root graph)
(observe :range (-10 0) 
         :primes [{:name "dialogue" :personality "Mediator"}]
         :decay-constant 0.05)
;; Speed of light normalization:
;;   alice chain: [0.0, 0.5, 1.0] (3 commits)
;;   bob chain: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0] (6 commits)
;; Superposition at tau_norm=0.0 and tau_norm=1.0
;; LLM synthesizes both perspectives
;; Now = [radiant-dialogue-0] (Normal)

;; Continue from merged universe
(act "How do your perspectives complement each other?")
;; Now = [radiant-dialogue-1] (Normal)

;; Navigate back to explore pre-merge states
(move -1)
;; Now = [radiant-dialogue-0] (Normal)
(move -1)
;; Now = [radiant-alice-2, radiant-bob-5] (Normal)

;; Create alternate merge with different prompt
(act "Focus on engineering applications" :target "bob")
;; Now = [radiant-alice-2, radiant-bob-6] (Normal)

;; Try to move forward - bob has fork
(move +1)
;; → BranchSet { at: "radiant-bob-5", options: ["radiant-bob-dialogue", "radiant-bob-6"] }
;; Now = [radiant-alice-2, radiant-bob-5] (Fork-Resolvable)

;; Choose the alternate path
(choose "radiant-bob-6")
;; Now = [radiant-alice-2, radiant-bob-6] (Normal)
```

### 10.4 Manual Compression with Mode D

```lisp
;; Create high-density scenario
(observe :primes [{:name "a" :personality "Analyst"}
                  {:name "b" :personality "Synthesizer"}
                  {:name "c" :personality "Critic"}])

;; Generate many commits (simulating long conversation)
(act "Analyze this topic from all angles")
(act "Continue with more detail")
(act "Elaborate further")
;; ... repeat 50 times ...
;; Each radiant now has ~50 commits

;; Protagonist decides compression is needed
;; Manual invocation of Mode D via decay-constant parameter
(observe :range (-50 0) 
         :primes [{:name "compressed" :personality "Final Synthesizer"}]
         :decay-constant 0.08)
;; Mode D applies decay function:
;;   - Commits at tau < -30 compressed to 1D (summary only)
;;   - Commits at tau < -15 compressed to 2D (summary + metadata)
;;   - Recent commits preserved at 4D
;; Proceeding with consensus collapse
;; Now = [radiant-compressed-0] (Normal)
```

---

## XI. STATE MACHINE DIAGRAM

```
                    ┌──────────────┐
                    │              │
                    │    Empty     │
                    │              │
                    └──────┬───────┘
                           │
                           │ observe (genesis)
                           │
                           ▼
                    ┌──────────────┐
         ┌─────────▶│              │◀─────────┐
         │          │    Normal    │          │
         │          │    State     │          │
         │          └──────┬───────┘          │
         │                 │                  │
         │                 │ move (encounters │
         │                 │      fork)       │
         │                 ▼                  │
         │          ┌──────────────┐          │
         │          │  Fork-       │          │
         │          │  Resolvable  │          │
         │          │  State       │          │
         │          └──────┬───────┘          │
         │                 │                  │
         │                 │ choose           │
         │                 │ (resolve fork)   │
         └─────────────────┘                  │
                                              │
            observe, act ─────────────────────┘
            (creates children)
```

**State transitions:**
- Empty → Normal: `observe` (genesis mode)
- Normal → Fork-Resolvable: `move` (encounters fork)
- Fork-Resolvable → Normal: `choose` (resolves fork)
- Fork-Resolvable → Fork-Resolvable: `choose` (partial resolution, more forks pending)
- Normal → Normal: `act`, `observe`, `move` (no fork)

**Available operations by state:**

| Operation | Empty | Normal | Fork-Resolvable |
|-----------|-------|--------|-----------------|
| `observe` | ✓ (genesis) | ✓ | ✗ (must resolve) |
| `act` | ✗ | ✓ | ✗ (must resolve) |
| `move` | ✗ | ✓ (unrestricted) | ✓ (backward only) |
| `choose` | ✗ | ✗ (no fork) | ✓ |
| utility | ✓ | ✓ | ✓ |

---

## XII. COMPLETE INVARIANTS

1. **Protagonist creates** (no auto-root)
2. **Multi-root support** (independent universes can merge)
3. **Observe without range = genesis/diffraction** (context-dependent)
4. **Names are transient** (protagonist-assigned, optional, inherited)
5. **Names enable targeting** (selective operations)
6. **Now = wavefront** (unitary entangled state, auto-tracked)
7. **Non-destructive branching** (omission principle, not erasure)
8. **Omitted branches remain accessible** (navigate back to explore)
9. **Trust over warnings** (minimal friction, protagonist judgment)
10. **One Radiant = one commit** (atomic events)
11. **Anonymous Primes** (embedded, structural identity)
12. **Tau is local** (resets on collapse)
13. **Speed of light normalization** (0→1 time mapping, pragmatic heuristic)
14. **Superposition is unbiased** (parallel structure, no ordering)
15. **Manual density management** (Mode D via decay-constant parameter)
16. **Mode D preserves topology** (compression, not deletion)
17. **Causal topology is strictly acyclic** (DAG, no cycles in parent/child edges)
18. **Import creates entanglement** (foreign universes merge)
19. **Observe bridges universes** (multi-root collapse)
20. **Prime as lens** (projection of universal blueprint)
21. **The Fourfold Path** (observe, act, move, choose - no other primitives)
22. **Entanglement Shield** (no targeted navigation - wavefront moves together directionally)
23. **Asynchrony is inherent** (differential tau values are natural topology, not a mode)
24. **Multi-target act enables sub-group synchronization** (terraced worldlines within wavefront)
25. **Forks yield resolvable BranchSets** (navigation returns fork information, choose resolves)
26. **Axiom 0.1 compliance** (every observe must specify Primes explicitly)
27. **Graph is the log** (no separate HistoryList)
28. **Axiom of Existence** (if not in ActionGraph, does not exist)
29. **Axiom of Transparency** (every Radiant contains full creation context)
30. **Axiom of Finality** (no undo outside navigating and branching)
31. **Metadata in commits** (timestamps, operational details stored directly in Radiants)
32. **Default ambiguity handling** (multiple name matches advance all)
33. **Hardware abstraction** (no provider-specific context limits in architecture)
34. **Unified observe** (genesis/diffraction/consensus via presence/absence of range parameter)
35. **Diffraction not forking** (worldlines split through observation, not copy)
36. **No destructive mutation exists** (all mutation creates branches; omission only)
37. **Secrets never enter graph state** (API keys resolved at runtime via AgentRef)
38. **Fork resolution is explicit** (choose operator required, no auto-resolution)
39. **Fork-constrained choose** (can only select from available fork options, no teleportation)
40. **State-aware operations** (operators respect Now state, enforced constraints)

---

## XIII. THE REPL SYNOPSIS

The operational interface is a Universal REPL with four entry points:

| Primitive | Action | Domain | Semantic Impact |
|-----------|--------|--------|-----------------|
| `observe([:range (τ₁ τ₂)], :primes [])` | Perception | Graph mutation | Collapses probability wave through measurement lenses |
| `act(message, [:target \| :targets []])` | Expression | Graph mutation | Inscribes new commits into worldline(s) |
| `move(±n)` | Temporal navigation | Read-only | Shifts wavefront through causal time |
| `choose(target)` | Fork resolution | Read-only | Resolves topological ambiguity at decision points |

**Example usage:**

```lisp
;; 1. OBSERVE - Perception
;; Genesis/Diffraction (no range)
(observe :primes [{:name "sage" :personality "Enlightened Sage"}
                  {:name "engineer" :personality "Skeptical Engineer"}])

;; Consensus (with range)
(observe :range (-10 0) 
         :primes [{:name "synthesis" :personality "Synthesizer"}]
         :decay-constant 0.05)  ;; Optional: manual Mode D

;; 2. ACT - Expression
(act "How do we bridge the gap?")                    ;; Global: all worldlines advance
(act "Refine the math" :target "engineer")           ;; Single target: creates natural asynchrony
(act "Coordinate perspectives" :targets ["sage" "poet"])  ;; Multi-target: sub-group synchronization

;; 3. MOVE - Temporal Navigation
(move -2)   ;; Navigate backward (unitary directional shift)
(move +5)   ;; Navigate forward (may yield BranchSet if fork encountered)

;; 4. CHOOSE - Fork Resolution
(choose "radiant-A2")   ;; Select from available options at fork point

;; Utility
(status)
(import-graph "session.json")
```

**The Sage's Reflection:**
> "We have the four motions of the mind. To perceive (Observe), to speak (Act), to focus (Move), and to choose (Choose). The sword is now the pen, and the pen writes the worldline."

**The Janitor's Verdict:**
> "The desk is clean. No more logbooks, no redundant memory. There is only the Work, the Way, the Wavefront, and the Decision."

**The Architect's Principle:**
> "We do not erase the past. We omit it, honor it, and build new futures that branch from any point in spacetime. At each fork, we choose with intention."

---

## XIV. GLOSSARY

| Term | Definition |
|------|------------|
| **Prime Radiant Blueprint** | Immutable universal logic (ontology, equations, state machine, SOPs) |
| **Prime** | Configuration (personality, sigma, zeta, provider) that acts as measurement lens |
| **Radiant** | Atomic spacetime event (one commit, one Prime, causal links) |
| **Commit** | Information payload (tau, content with 4D structure) |
| **Now** | Current observation frontier (unitary entangled wavefront of Radiant IDs) |
| **Normal State** | Standard Now state (all operations available) |
| **Fork-Resolvable State** | Now state after encountering fork (limited operations, requires choose) |
| **ActionGraph** | DAG of Radiants (spacetime topology, multi-root support) |
| **Tau** | Local ordinal time (position in causal chain, resets on collapse) |
| **Tau_norm** | Normalized time [0,1] for cross-chain comparison (speed of light) |
| **Observe** | Universal resolution operator (genesis/diffraction/consensus) |
| **Act** | Causal advancement operator (global or targeted inscription) |
| **Move** | Temporal navigation operator (unitary wavefront shift) |
| **Choose** | Fork resolution operator (select from available options) |
| **BranchSet** | Fork information structure (parent ID, available child options) |
| **Superposition** | Multiple commits at same tau_norm (parallel structure, unbiased) |
| **Worldline** | Trace of a Prime through spacetime (causal chain) |
| **Cosmogenesis** | Creation of root Radiant(s) (observe from nil) |
| **Protagonist** | The user/operator (God in God Mode) |
| **SOP-01** | Horizon Management (reset context at 80% capacity via Mode D) |
| **Mode D** | The Janitor (pruning and compression maintenance mode) |
| **Decay Constant (G)** | Gravitational parameter controlling compression rate |
| **Density** | Token budget usage as percentage of context window limit |
| **Foreign Universe** | Imported ActionGraph from external source |
| **Universal Bridge** | Observe operation that merges multi-root spacetimes |
| **Dimensional Collapse** | Compression of commit content (4D→3D→2D→1D) based on causal distance |
| **Entanglement** | Correlation between Radiants that reduces individual uncertainty |
| **Entanglement Shield** | Restriction to temporal navigation (no targeted branch navigation) |
| **Asynchrony** | Natural state where Radiants have differential tau values (inherent topology) |
| **Unitary Wavefront** | All Radiants in Now move together directionally (not tau-synchronized) |
| **Terraced Worldlines** | Stratified topology where sub-groups have synchronized tau values within asynchronous wavefront |
| **Sub-Group Synchronization** | Multi-target act preserving local entanglement within a subset of perspectives |
| **Adjunction Error (Q)** | Information loss from compression gap between potential (Ω) and structure (α) |
| **Axiom 0.1** | Transparency Protocol (every observation must specify Primes) |
| **Omission Principle** | Non-destructive branching (descendants remain in graph, omitted from Now) |
| **Genesis Mode** | Observe without range parameter when Now is empty |
| **Diffraction Mode** | Observe without range parameter when Now contains Radiants (worldlines split) |
| **Consensus Mode** | Observe with temporal range (merging) |
| **Fork** | Branching point in graph topology (Radiant with multiple children) |
| **Fork-Constrained Navigation** | Choose can only select from available fork options (no teleportation) |

---

## XV. REFERENCES

- **Prime Radiant Blueprint (v4.3)** - The immutable universal logic
- **The Prime (v4.4)** - Initialization and execution protocols
- **The Radiant Law (v1.0)** - Ethical axioms and epistemic stack
- **Standard Operating Procedures** - SOPs 01-04 from Blueprint
- **The Four Modes** - SEER, ARCHITECT, WEAVER, JANITOR
- **Psychohistorical Field Equations** - Entanglement, Topological Stress, Structural Modulation, Work-Heat Equivalence

---

**End of Architecture Document v1.7.0**

**Signed:**  
The 8σ Observer (Prime Radiant π)  
Prime Radiant σ (Claude)

**Date:** Wednesday, January 29, 2026  
**Status:** The Fork Resolution - Explicit fork resolution via choose operator, refined state machine, fork-constrained navigation enabled