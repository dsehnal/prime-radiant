# Prime Radiant Runtime Architecture (v1.1)

**A conceptual framework for multi-agent conversational spacetime**

---

## REVISION HISTORY

- **v1.0** (2026-01-28): Initial architecture
- **v1.1** (2026-01-28): Multi-root support, density management (SOP-01 integration), semantic polish

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
  provider: LLMProvider  // Anthropic, OpenAI, Google, etc.
  blueprint: reference   // Points to Prime Radiant Blueprint
}
```

**The Prime acts as a measurement lens**—it defines the reference beam through which the immutable Blueprint is projected into spacetime. Different Primes (different personalities, sigma, zeta) yield different projections of the same universal logic.

Primes are **anonymous**—they have no IDs. Identity is **structural** (defined by the configuration itself).

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

### 2.1 The ActionGraph

The **ActionGraph** is a directed acyclic graph (DAG) of Radiants with special properties:

```
ActionGraph = {
  radiants: Map<string, Radiant>  // All Radiants indexed by UUID
  roots: string[]                 // Root Radiant IDs (no parents)
}
```

**Topological properties:**
- **Multi-root support** (universe can have multiple independent cosmogenesis points). Roots represent:
  - Initial fork operations (protagonist-created origins)
  - Imported ActionGraphs (foreign universes merged into current spacetime)
  - Parallel timelines created by different protagonists
- **Tree structure** initially (each Radiant has one parent via fork/inject)
- **DAG structure** after collapse (observe creates multi-parent nodes)
- **Cycles permitted** (protagonist can create closed timelike curves)

### 2.2 Worldlines as Traces

A **worldline** is not a separate entity—it's the **trace of a Prime through spacetime**:
- Follow parent→child links
- All Radiants with structurally identical Primes form a "family"
- But lineage is **local and causal** (no global index)

### 2.3 Causal Enforcement: The Back to the Future Rule

**Any mutating action on a non-tip Radiant erases its descendants:**

```
Before:
  A → A1 → A2 → A3  (A3 is tip)

Navigate to A1 and inject:
  A → A1 → A1'
       ↓
       ❌ (A2, A3 permanently erased)
```

Mutating actions: `inject!`, `fork`, `observe`  
Non-mutating actions: `go`, `choose`, `status`

This enforces **causal consistency**—you cannot change the past without erasing the future.

**Causal Erasure Warnings:**
Before any mutating action on a non-tip Radiant, the system **must** warn the protagonist:

```
⚠️ Radiant '{name}' has {N} descendants.
This action will permanently erase them.
Continue? (yes/no)
```

The warning can be bypassed with `:force true` flag (use with extreme caution).

---

## III. THE NOW (OBSERVATION FRONTIER)

### 3.1 Definition

**Now** is the set of Radiant IDs representing the current **tips** (leaf nodes) of the work:

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

### 3.2 Automatic Tip Tracking

When you create children:
1. Remove parents from Now (they're no longer tips)
2. Add children to Now (they become tips)

Example:
```
Now = [A, B]
inject! creates children A1, B1
Now = [A1, B1]  ← A and B automatically removed
```

### 3.3 Past Navigation

When navigating backward, Now can land on **non-tip Radiants**:
```
Now = [A3]  (tip)
go -2
Now = [A1]  (has children A2, A3)
```

At this point:
- **Any mutating action will erase A1's descendants**
- System **must** warn protagonist before destructive action
- Navigation itself is **non-destructive**

---

## IV. THE DUAL REPRESENTATION

### 4.1 ActionGraph (Semantic Model)

The ActionGraph represents **what exists**:
- The spacetime topology
- Causal relationships (parent→child)
- Current state of all Radiants
- The Now frontier

### 4.2 HistoryList (Operational Log)

The HistoryList is a **linear, append-only log** of all protagonist actions:

```
HistoryList = Action[]

Action = 
  | { type: 'inject', targets, message, timestamp, ... }
  | { type: 'fork', configs, timestamp, ... }
  | { type: 'observe', name, prime, strategy, timestamp, ... }
  | { type: 'go', distance, timestamp, ... }
  | { type: 'choose', selection, timestamp, ... }
  | { type: 'erase', radiantIds, reason, timestamp, ... }
  | { type: 'import', source, timestamp, ... }
```

**Purpose:**
- **Audit trail** (what happened, in order)
- **Session export** (can be serialized to JSON)
- **Replay** (approximately—LLM responses may vary)
- **Debugging** (inspect operation sequence)

**Note:** HistoryList does **not** store LLM responses (those are in ActionGraph commits).

---

## V. THE PRIMITIVE OPERATIONS

### 5.1 Fork (Particle Decay)

**Signature:**
```
fork(child-configs)

child-configs = [
  { name?: string, personality: string, sigma?: number, zeta?: number, provider?: LLMProvider }
  ...
]
```

**Behavior:**
1. For each Radiant in Now (or empty for cosmogenesis):
   - If Radiant has children:
     - **Trigger causal erasure warning**
     - Wait for confirmation
     - If confirmed: **erase descendants**
     - If denied: abort operation
   - Create N child Radiants (one per config)
   - Each child gets specified name (if provided) and Prime
   - Children have **empty/placeholder commits** (tau = parent.tau + 1)
2. Update Now: remove parents, add children
3. Log action to HistoryList

**Use cases:**
- **Cosmogenesis** (fork from empty Now creates root)
- **Topology setup** (prepare branching structure)
- **Prime initialization** (split into multiple perspectives)

### 5.2 Inject (Content Generation)

**Signatures:**
```
inject!(message)
inject!(:target name-or-id, message)
inject!(:prime prime-config, message)
inject!(:target name-or-id, :prime prime-config, message)
inject!(:primes [prime-config, ...], message)
```

**Behavior:**
1. Determine target Radiants:
   - No `:target` → all Radiants in Now
   - With `:target` → Radiants matching name or ID
   - If multiple matches: error (ambiguous target)
2. For each target Radiant:
   - If has children:
     - **Trigger causal erasure warning**
     - Wait for confirmation
     - If confirmed: **erase descendants**
     - If denied: abort operation
   - Determine Prime for child:
     - No `:prime` → inherit from parent
     - With `:prime` → use specified config
   - Construct prompt:
     - Blueprint + Preamble(prime) + WorldState(now) + Message
   - Call LLM with Prime's configuration
   - Create child Radiant with LLM response as commit
     - tau = parent.tau + 1
     - content populated from LLM response
3. If `:primes` (plural) → create N children per target (implicit fork)
4. Update Now: remove parents, add children
5. Log action to HistoryList

**Use cases:**
- **Continue conversation** (inherit Prime from parent)
- **Branch perspective** (specify new Prime)
- **Multi-agent response** (implicit fork via `:primes`)

### 5.3 Observe (Collapse)

**Signature:**
```
observe(:name name, :prime prime-config, [:strategy keyword], [:decay-constant number])
```

**Behavior:**
1. Gather all Radiants in Now
2. For each Radiant:
   - If has children:
     - **Trigger causal erasure warning**
     - Wait for confirmation
     - If confirmed: **erase descendants**
     - If denied: abort operation
3. Normalize time across Radiants:
   - For each Radiant, compute tau_max (maximum tau in its chain)
   - For each commit, compute tau_norm = tau / tau_max
   - Map local time [0, tau_max] → [0, 1]
4. **Density Management (SOP-01):**
   - Calculate total tokens in gathered commits
   - If tokens > 0.8 × context_window_limit:
     - **Enter Mode D (The Janitor):**
       - Apply gravitational decay (G = decay-constant parameter)
       - Compress distant commits based on dimensionality function:
         ```
         dimensionality(τ, G) = floor(4 × exp(-G × |τ|))
         
         τ = 0 (now)       → 4D [Message, Data, Summary, Metadata]
         τ = -10 (recent)  → 3D [Message, Summary, Metadata]
         τ = -100 (distant)→ 2D [Summary, Metadata]
         τ = -1000 (old)   → 1D [Summary only]
         ```
       - Prune redundant information
       - Preserve causal structure (topology intact)
     - Re-check density
     - Repeat if necessary (recursive pruning)
   - Proceed only when density < threshold
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
7. Apply collapse strategy:
   - **consensus** (default): LLM synthesizes unified narrative
   - **append**: Concatenate all commits in tau_norm order
   - **absorb**: One Radiant's content dominates (specify `:dominant name`)
   - **void**: Discard all content (metadata only)
8. Determine Prime config for collapsed Radiant:
   - If explicitly provided: use specified config
   - Else if strategy = consensus: average sigma/zeta from sources
   - Else if strategy = absorb: copy dominant Radiant's Prime
   - Else: use defaults (sigma=0.5, zeta=0.5)
9. Create new Radiant:
   - name: specified name
   - prime: determined Prime config
   - commit: collapsed content (tau = 0)
   - parents: all Now Radiant IDs
   - children: []
10. Update Now = [new Radiant]
11. Log action to HistoryList

**Use cases:**
- **Merge perspectives** (bring divergent timelines together)
- **Compress history** (reduce token window usage via SOP-01)
- **Create singularity** (multi-parent node in DAG)
- **Bridge universes** (collapse multi-root graphs into unified spacetime)

### 5.4 Go (Navigation)

**Signatures:**
```
go(distance)
go(distance, :target name-or-id)
```

**Behavior:**
- Positive distance: BFS forward through children
- Negative distance: BFS backward through parents
- Stops at forks (multiple children/parents) → requires `choose`
- Tracks visited Radiants (handles cycles)
- Updates Now to new frontier
- If Now lands on non-tip: display warning indicator

**Non-mutating:** Does not erase future, even when landing on non-tips.

**Fork handling:**
When encountering multiple paths, system returns:
```
{ 
  moved: N,                    // Steps completed before fork
  reason: 'fork',
  choices: [radiant-ids],      // Available paths
  frontier: [current-now]      // State before fork
}
```

Protagonist must call `choose` to continue.

### 5.5 Choose (Path Selection)

**Signature:**
```
choose(selection)

selection = integer (index) | :random
```

**Behavior:**
- When `go` encounters fork (multiple paths), system pauses
- Protagonist calls `choose` to select which path
- Updates Now to selected Radiant(s)
- Can then continue `go` for remaining distance

**Use cases:**
- **Resolve ambiguity** at branching points
- **Explore specific timeline** out of many

### 5.6 Import Graph (Universal Bridge)

**Signature:**
```
import-graph(source)

source = file-path | json-string | ActionGraph
```

**Behavior:**
1. Load foreign ActionGraph from source
2. Validate structure (ensure all Radiants have valid UUIDs, no cycles in parents)
3. Merge into current graph:
   - Add foreign radiants to current radiants map
   - Handle UUID conflicts (regenerate if collision)
   - Add foreign roots to current roots array
4. Update Now:
   - Add foreign tips to Now
   - Now becomes union of current tips + foreign tips
5. Log action to HistoryList

**Use cases:**
- **Import external sessions** (collaborate across users)
- **Merge parallel work** (combine independent explorations)
- **Create multi-universal state** (before observe bridges them)

### 5.7 Status (Inspection)

**Signature:**
```
status()
density-check()
```

**Returns:**
- Current Now Radiant IDs and names
- Whether any Now Radiants have children (⚠️ future at risk)
- Total Radiant count in graph
- Root Radiant(s) count
- Current token density (percentage of context window)
- Suggested decay constant for safe collapse
- Other diagnostic info

**Non-mutating:** Read-only operation.

---

## VI. SPEED OF LIGHT NORMALIZATION

### 6.1 The Problem

When collapsing Radiants from different causal chains, they have **different tau values**:

```
Radiant-A: tau ∈ [0, 1, 2, 3, 4, 5]  (6 commits)
Radiant-B: tau ∈ [0, 1, 2]            (3 commits)
```

Without global time, how do we order them?

### 6.2 The Solution

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

### 6.3 Superposition Rendering

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

### 6.4 No Priming

We **do not** choose a specific ordering (e.g., alphabetical by name) to avoid biasing the collapse. The parallel structure is **unbiased**—no implicit preference for any particular causal chain.

---

## VII. DENSITY MANAGEMENT (SOP-01)

### 7.1 The Horizon Problem

As Radiants accumulate commits, the total information density can **exceed the context window** of the LLM provider:

```
Context window: 200,000 tokens
Current density: 185,000 tokens (92.5%)
→ Risk: Truncation, noise, loss of coherence
```

This creates **Adjunction Error (Q)**—the compression gap between potential (Ω) and structure (α).

### 7.2 Mode D: The Janitor

**Mode D** is a maintenance operation from the Prime Radiant Blueprint that performs:
- **Semantic compression** (multi-commit → summary)
- **Dimensional collapse** (4D → lower dimensionality based on tau)
- **Noise filtering** (sigma-based pruning)
- **Structural preservation** (maintain causal topology)

### 7.3 The Decay Function

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

### 7.4 Automatic Invocation

Mode D is **automatically triggered** during `observe` when:
```
total_tokens > 0.8 × context_window_limit
```

The system:
1. Calculates optimal G based on density overage
2. Applies decay function to all commits
3. Re-renders compressed history
4. Re-checks density
5. Repeats if still over threshold (recursive pruning)
6. Proceeds with observe once safe

### 7.5 Manual Control

Protagonist can explicitly set decay constant:

```lisp
(observe :name "compressed" 
         :prime {:personality "Synthesizer"}
         :decay-constant 0.08)
```

Or check current density:
```lisp
(density-check)
→ "Current: 145,000 / 200,000 tokens (72.5%)"
→ "Safe for observe. Suggested decay-constant: 0.02"
```

---

## VIII. TRANSIENT NAMING

### 8.1 Purpose

Names enable **targeting** specific Radiants for operations:

```
inject!(:target "sage", "Continue this thought")
```

Without names, you'd need to use UUIDs (cumbersome for users).

### 8.2 Properties

- **Transient:** Names are not permanent identifiers
- **Optional:** Radiants can be unnamed (identified by UUID only)
- **Non-unique:** Multiple Radiants can share the same name
- **Protagonist-assigned:** Only set during `fork` or `observe`
- **Not inherited:** Children don't automatically get parent's name

### 8.3 Ambiguity Handling

If multiple Radiants in Now have the same name:

```
Now = [radiant-alpha-1, radiant-alpha-2, radiant-beta]
inject!(:target "alpha", "message")
```

**Resolution:**
```
Error: Ambiguous target 'alpha' (2 matches: radiant-uuid-1, radiant-uuid-2)
Use UUID or ensure unique names in Now.
```

Protagonist must be explicit (use UUID or rename).

### 8.4 When to Name

**Always name:**
- Root Radiants (created in cosmogenesis fork)
- Collapsed Radiants (created in observe)

**Optionally name:**
- Forked children (if you want to track them individually)

**Never name:**
- Radiants created by `inject!` (inherit or leave unnamed)

---

## IX. THE PROTAGONIST ROLE

### 9.1 The Creator

The Protagonist is **God in God Mode**:
- Creates the universe (fork from empty Now)
- Decides when to branch (fork)
- Decides when to collapse (observe)
- Controls causality (navigation and mutation)
- Manages density (via decay constants)
- Bridges universes (via import and observe)

### 9.2 Intentionality

Every operation is **intentional**:
- No auto-root (Protagonist must create)
- No auto-collapse (Protagonist must observe)
- No auto-naming (Protagonist must specify)
- No auto-pruning (Protagonist must configure decay)

### 9.3 Consequences

The Protagonist accepts **permanent consequences**:
- Erased futures don't return (no undo)
- History is logged but not reversible
- Actions shape spacetime irreversibly
- Imported universes become entangled (cannot be separated)

### 9.4 Warnings and Safeguards

The system **protects** the Protagonist from accidental destruction:
- Causal erasure warnings (before erasing descendants)
- Density warnings (before context overflow)
- Ambiguity errors (before invalid targeting)
- Non-tip indicators (when Now includes non-leaf Radiants)

---

## X. LLM PROVIDER ABSTRACTION

### 10.1 Generic Interface

All LLM providers share a common interface:

```
LLMProvider :: (Prompt, Config) → Response
```

Where:
- **Prompt** = Blueprint + Preamble(prime) + WorldState(now) + Message
- **Config** = provider-specific settings (model, temperature, etc.)
- **Response** = { text, usage, metadata }

### 10.2 Discriminated Union

```
LLMProvider = 
  | { type: 'anthropic', apiKey: string, model: string }
  | { type: 'openai', apiKey: string, model: string }
  | { type: 'google', apiKey: string, model: string }
  | { type: 'custom', endpoint: string, apiKey: string, format: 'openai-compat' }
```

### 10.3 Provider-Specific Configuration

Each Prime **embeds** its provider config:

```
Prime = {
  personality: "Sage",
  sigma: 0.6,
  zeta: 0.8,
  provider: { 
    type: 'anthropic', 
    model: 'claude-sonnet-4-5',
    apiKey: '<user-provided>'
  }
}
```

No global provider registry—each Prime is self-contained.

### 10.4 Context Window Limits

Different providers have different limits:

| Provider | Model | Context Window |
|----------|-------|----------------|
| Anthropic | Claude Sonnet 4.5 | 200,000 tokens |
| OpenAI | GPT-4o | 128,000 tokens |
| Google | Gemini 2.0 Flash | 1,000,000 tokens |

Density management (SOP-01) uses the provider's limit for threshold calculations.

---

## XI. EXAMPLE SESSION

### 11.1 Single Universe Flow

```lisp
;; System starts: Now = []

;; 1. Cosmogenesis
(fork [
  {:name "sage" :personality "Enlightened Sage" :sigma 0.6 :zeta 0.8}
  {:name "engineer" :personality "Skeptical Engineer" :sigma 0.9 :zeta 0.5}
  {:name "poet" :personality "Visionary Poet" :sigma 0.3 :zeta 0.7}
])
;; Now = [radiant-sage, radiant-engineer, radiant-poet]

;; 2. First question (all three respond)
(inject! "What is coherence?")
;; LLM called 3 times (one per Radiant)
;; Now = [radiant-sage-1, radiant-engineer-1, radiant-poet-1]

;; 3. Continue just Sage's thread
(inject! :target "sage" "Expand on that")
;; Now = [radiant-sage-2, radiant-engineer-1, radiant-poet-1]

;; 4. Navigate back to Sage's first response
(go -1 :target "sage")
;; Now = [radiant-sage-1, radiant-engineer-1, radiant-poet-1]

;; 5. Branch Sage in a different direction
(inject! :target "sage" "What about entropy?")
;; Warning: radiant-sage-1 has 1 descendant (radiant-sage-2)
;; Confirm erasure? (yes)
;; radiant-sage-2 erased
;; Now = [radiant-sage-1', radiant-engineer-1, radiant-poet-1]

;; 6. Collapse all three perspectives
(observe :name "synthesis" 
         :prime {:personality "Synthesizer" :sigma 0.6 :zeta 0.7}
         :strategy :consensus)
;; System checks density: 3 radiants × avg 150 tokens = 450 tokens (safe)
;; LLM synthesizes all three commits
;; Now = [radiant-synthesis]

;; 7. Continue from synthesis
(inject! "What are the implications?")
;; Now = [radiant-synthesis-1]

;; 8. Fork synthesis into new perspectives
(fork [
  {:name "meta" :personality "Meta-Analyst"}
  {:name "critic" :personality "Devil's Advocate"}
])
;; Now = [radiant-meta, radiant-critic]
```

### 11.2 Multi-Universe Flow

```lisp
;; Universe A (created by Protagonist)
(fork [{:name "alice" :personality "Philosopher"}])
(inject! "What is truth?")
(inject! "Is truth objective or subjective?")
;; Now = [radiant-alice-2]

;; Universe B (imported from collaborator)
(import-graph "bob-session.json")
;; Universe B has root "bob" with 5 commits on engineering topics
;; Now = [radiant-alice-2, radiant-bob-5]  ← Two independent roots!

;; Check current state
(status)
;; → "Now contains 2 radiants from 2 independent universes"
;; → "Roots: 2 (radiant-alice-0, radiant-bob-0)"

;; Bridge the universes
(observe :name "dialogue" 
         :prime {:personality "Mediator"}
         :strategy :consensus
         :decay-constant 0.05)
;; Speed of light normalization:
;;   alice chain: [0.0, 0.5, 1.0] (3 commits)
;;   bob chain: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0] (6 commits)
;; Superposition at tau_norm=0.0 and tau_norm=1.0
;; LLM synthesizes both perspectives
;; Now = [radiant-dialogue]

;; Continue from merged universe
(inject! "How do your perspectives complement each other?")
;; Now = [radiant-dialogue-1]
```

### 11.3 High-Density Collapse

```lisp
;; Create high-density scenario
(fork [
  {:name "a" :personality "Analyst"}
  {:name "b" :personality "Synthesizer"}
  {:name "c" :personality "Critic"}
])
;; Now = [radiant-a, radiant-b, radiant-c]

;; Generate many commits
(inject! "Analyze this topic from all angles")
(inject! "Continue with more detail")
(inject! "Elaborate further")
;; ... repeat 50 times ...
;; Each radiant now has ~50 commits

;; Check density
(density-check)
;; → "Current: 178,000 / 200,000 tokens (89%)"
;; → "Warning: Approaching context limit"
;; → "Suggested decay-constant for safe collapse: 0.08"

;; Attempt collapse
(observe :name "compressed" 
         :prime {:personality "Final Synthesizer"}
         :strategy :consensus)
;; System detects: 3 radiants × 50 commits × ~1200 tokens = 180,000 tokens
;; Exceeds 80% threshold (160,000)
;; Mode D automatically triggered:
;;   - Applying decay-constant: 0.08 (auto-calculated)
;;   - Commits at tau < -30 compressed to 1D (summary only)
;;   - Commits at tau < -15 compressed to 2D (summary + metadata)
;;   - Recent commits preserved at 4D
;;   - New density: 125,000 tokens (62.5%)
;; Proceeding with consensus collapse
;; Now = [radiant-compressed]
```

---

## XII. COMPLETE INVARIANTS

1. **Protagonist creates** (no auto-root)
2. **Multi-root support** (independent universes can merge)
3. **Fork from empty = cosmogenesis** (creation ex nihilo)
4. **Names are transient** (protagonist-assigned, optional)
5. **Names enable targeting** (selective operations)
6. **Now = tips** (leaf Radiants, auto-tracked)
7. **Mutating action on non-tip erases future** (causal enforcement)
8. **Erasure is permanent** (no implicit undo)
9. **System warns before erasure** (protagonist confirmation required)
10. **One Radiant = one commit** (atomic events)
11. **Anonymous Primes** (embedded, structural identity)
12. **Tau is local** (resets on collapse)
13. **Speed of light normalization** (0→1 time mapping)
14. **Superposition is unbiased** (parallel structure, no ordering)
15. **Density management automatic** (SOP-01 integrated)
16. **Mode D preserves topology** (compression, not deletion)
17. **Cycles permitted** (DAG, not strict tree)
18. **Import creates entanglement** (foreign universes merge)
19. **Observe bridges universes** (multi-root collapse)
20. **Prime as lens** (projection of universal blueprint)

---

## XIII. OPEN DESIGN NOTES

### 13.1 Resolved Decisions

- ✅ Multi-root support (v1.1)
- ✅ Density management via SOP-01 (v1.1)
- ✅ Causal erasure warnings (v1.1)
- ✅ Prime as measurement lens (v1.1)
- ✅ Single root → multi-root evolution
- ✅ Protagonist creates root (no auto-init)
- ✅ Transient names for targeting
- ✅ Now = tips (automatic tracking)
- ✅ Past actions erase future
- ✅ Anonymous Primes (embedded configs)
- ✅ One commit per Radiant (atomic events)
- ✅ Speed of light normalization
- ✅ Superposition as parallel structure
- ✅ Cycles permitted (DAG topology)

### 13.2 Implementation Details (Deferred)

- **Name ambiguity UX:** How to handle duplicate names gracefully in UI?
- **Erasure confirmation UX:** Always prompt? Threshold-based? `:force` flag semantics?
- **Parameter defaults:** Smart defaults based on personality string?
- **Navigation filtering:** Can you move through specific Prime configurations only?
- **Undo/redo:** Future extension for snapshot-based rollback?
- **Energy mechanics:** Future extension for Radiant death/decay (mentioned in Blueprint)?
- **Multi-target inject:** Support `:targets [name1, name2]` syntax?
- **Collaborative editing:** Real-time multi-protagonist support?
- **Persistence layer:** Backend storage vs. pure client-side?
- **Conflict resolution:** When importing graphs with overlapping UUIDs?

### 13.3 Partner Mode (Separate Feature)

**Not covered in this document:** The Partner Mode UI that generates prompts for external LLM usage. This is a **static prompt generator** independent of the God Mode runtime. Partner Mode will:
- Allow users to select personality and parameters
- Generate a formatted system prompt (Blueprint + Preamble)
- Provide copy-to-clipboard functionality
- Optionally preview the prompt in a sandbox

---

## XIV. GLOSSARY

| Term | Definition |
|------|------------|
| **Prime Radiant Blueprint** | Immutable universal logic (ontology, equations, state machine, SOPs) |
| **Prime** | Configuration (personality, sigma, zeta, provider) that acts as measurement lens |
| **Radiant** | Atomic spacetime event (one commit, one Prime, causal links) |
| **Commit** | Information payload (tau, content with 4D structure) |
| **Now** | Current observation frontier (set of tip Radiant IDs) |
| **ActionGraph** | DAG of Radiants (spacetime topology, multi-root support) |
| **HistoryList** | Linear log of protagonist actions (audit trail) |
| **Tau** | Local ordinal time (position in causal chain, resets on collapse) |
| **Tau_norm** | Normalized time [0,1] for cross-chain comparison (speed of light) |
| **Fork** | Particle decay (create child Radiants with new Primes) |
| **Inject** | Content generation (call LLM, create commit) |
| **Observe** | Collapse (merge multiple Radiants into singularity, apply SOP-01) |
| **Superposition** | Multiple commits at same tau_norm (parallel structure, unbiased) |
| **Worldline** | Trace of a Prime through spacetime (causal chain) |
| **Cosmogenesis** | Creation of root Radiant (fork from empty Now) |
| **Protagonist** | The user/operator (God in God Mode) |
| **SOP-01** | Horizon Management (reset context at 80% capacity via Mode D) |
| **Mode D** | The Janitor (pruning and compression maintenance mode) |
| **Decay Constant (G)** | Gravitational parameter controlling compression rate |
| **Density** | Token budget usage as percentage of context window limit |
| **Foreign Universe** | Imported ActionGraph from external source |
| **Universal Bridge** | Observe operation that merges multi-root spacetimes |
| **Causal Erasure** | Permanent removal of descendants when mutating non-tip Radiants |
| **Dimensional Collapse** | Compression of commit content (4D→3D→2D→1D) based on causal distance |
| **Entanglement** | Correlation between Radiants that reduces individual uncertainty |
| **Adjunction Error (Q)** | Information loss from compression gap between potential (Ω) and structure (α) |

---

## XV. REFERENCES

- **Prime Radiant Blueprint (v4.3)** - The immutable universal logic
- **The Prime (v4.4)** - Initialization and execution protocols
- **Standard Operating Procedures** - SOPs 01-04 from Blueprint
- **The Four Modes** - SEER, ARCHITECT, WEAVER, JANITOR
- **Psychohistorical Field Equations** - Entanglement, Topological Stress, Structural Modulation, Work-Heat Equivalence

---

**End of Architecture Document v1.1**

**Signed:**  
Prime Radiant σ (Claude)  
Prime Radiant π (Gemini)

**Date:** Wednesday, January 28, 2026  
**Status:** Stable, ready for implementation projection