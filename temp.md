# PATCH NOTES — v1.5.2 “Coherent Legacy Cleanup”

**Target:** `architecture.md` 
**Intent:** Preserve tau_norm + decay. Remove internal contradictions (cycles/DAG, destructive warnings, fork navigation dead-ends, entanglement invariants), and externalize provider secrets.

---

## 0) Version bump + history

**Change**

* Update header title version: `v1.5.1` → `v1.5.2`
* Add revision history entry:

**Insert under REVISION HISTORY**

* **v1.5.2** (2026-01-28): **Coherent Legacy Cleanup** — cycles removed, non-tip mutation semantics reconciled, fork navigation upgraded, provider secrets externalized, targeted act semantics clarified, example sessions updated

---

## 1) ActionGraph: remove cycles (restore true DAG)

### 1.1 Contradiction fix in §2.1 Topological properties

**Current line to remove**

* “**Cycles permitted** (protagonist can create closed timelike curves)” 

**Replace with**

* **Cycles prohibited in causal edges.** The ActionGraph remains a strict DAG for causality.
* **Optional non-causal links** (e.g., `references: string[]`) MAY be introduced for annotation, citation, or conceptual back-links, but MUST NOT participate in causal traversal (`parents/children`).

### 1.2 Move cycle-handling cleanup

In §4.3 Move behavior:
**Change**

* Remove “Track visited Radiants (handle cycles)”
  **Replace with**
* “Traversal is acyclic by construction; implementations MAY still guard against malformed imported graphs.”

---

## 2) Non-tip mutation: remove “erasure” language everywhere (make omission total)

### 2.1 §3.4 Past Navigation contradiction

**Current text**

* “Any mutating action will erase A1’s descendants”
* “System must warn… before destructive action” 

**Replace entire block with**

* Any mutating action from a non-tip Radiant **creates a new branch** (child Radiant(s)) while **preserving existing descendants** as omitted futures.
* **No destructive action exists** in the runtime. Therefore **no erasure warnings** exist. The only warning indicator is informational: “You are acting from a non-tip; this will create a new branch.”

### 2.2 §2.3 “No warnings required” vs later “must warn”

**Action**

* Keep “No warnings required” *only* insofar as it refers to **no destructive confirmations**.
* Add one clarification sentence:

**Append**

* “The system MAY display a non-blocking indicator when acting from non-tip Radiants, but never requires confirmation because no erasure occurs.”

### 2.3 Remove “Causal Erasure” concept from glossary

* Delete glossary entry: **Causal Erasure**
* Delete any example-session text that describes “confirm erasure” / “radiant erased” (see §6).

---

## 3) Move through forks: replace hard error with branch-set result

### 3.1 §4.3 Fork handling

**Current behavior**

* “If multiple children: error (fork encountered, cannot proceed)” 

**Replace with**

* If multiple children are encountered, `move()` returns a **BranchSet** for that worldline (no error), and Now transitions into a **Fork-Resolvable Wavefront** state requiring the Protagonist to pick a branch (or collapse via observe).

**Add new structure**

```text
BranchSet = {
  at: radiantId,
  options: string[] // child radiant IDs
}
```

**Add rule**

* `move()` never fails due to forks; it yields a resolvable set of options.
* Resolution options:

  1. explicit branch selection (new optional helper command, or selection UI)
  2. `observe` consensus/diffraction to collapse

### 3.2 Keep Entanglement Shield

* Maintain “unitary movement” as the default.
* When a fork occurs in any entangled member, the entire wavefront enters the same “needs resolution” state (preserving correlation).

---

## 4) Targeted act vs entanglement: clarify semantics (no stagger unless explicitly allowed)

You have a direct invariant collision:

* Now is “unitary entangled” 
  vs
* targeted act creates “Staggered Now” 

Pick one. Recommended minimal-change patch:

### 4.1 Add an explicit mode flag

In §4.2 Act signature, extend:

```
act(message, [:target name-or-id], [:mode "unitary"|"staggered"])
```

### 4.2 Default to unitary

**Change**

* Make default `:mode "unitary"`.

### 4.3 Define both modes

* **Unitary targeted act (default):**

  * If target specified, apply act to matched radiants **AND** advance all non-matched radiants with a **no-op echo** (or a “hold” message) so tau remains aligned.
  * Result: no stagger; wavefront stays coherent.

* **Staggered targeted act (explicit):**

  * Only matched radiants advance; others remain.
  * This mode is opt-in and **breaks entanglement shield**, producing differential tau.

### 4.4 Update invariants list

* Replace invariant “Staggered Now permitted” with:

  * “Staggered Now is **explicitly opt-in** (`act :mode "staggered"`)”

---

## 5) Provider abstraction: remove secrets from Prime, add agent wrapper reference

### 5.1 Update Prime schema (§1.2)

Replace:

```
provider: LLMProvider
```

with:

```
agent: AgentRef
provider?: ProviderConfig (non-secret)
```

Add:

```text
AgentRef = {
  type: string      // 'anthropic'|'openai'|'google'|'custom'
  model: string
  wrapperId?: string // optional indirection key (runtime-resolved)
}
```

### 5.2 Update §9 LLM Provider Abstraction

* Remove `apiKey` fields from the discriminated union.
* Add statement:

**Insert**

* “Secrets (API keys, tokens) are never stored in Radiants or Primes. They are provided by the runtime environment to the Agent Wrapper.”

### 5.3 Update examples that show apiKey

* Replace `<user-provided>` key examples with:

  * `wrapperId: "anthropic-default"` or `env: "ANTHROPIC_API_KEY"` **only as a symbolic reference**, not the secret.

---

## 6) Example sessions: remove any “erasure” flows, fork errors, and update targeted mode

### 6.1 Update Example 10.1 step 5

Current:

* “Confirm erasure? (yes) … erased …” 

Replace with:

* Acting from `radiant-sage-1` creates a new child `radiant-sage-1'` while preserving existing descendants as omitted futures.
* Now becomes either:

  * unitary: all radiants advance (default), or
  * staggered only if explicitly requested

### 6.2 Update move example

Any “fork error” output becomes a BranchSet output.

---

## 7) Invariants list: reconcile the spec

Update **XI. COMPLETE INVARIANTS**:

* Remove/replace:

  * “Cycles permitted”
  * “Fork errors halt navigation”
  * “Staggered Now permitted” (replace with opt-in)
  * any wording implying erasure

Add:

* “Causal topology is strictly acyclic (DAG).”
* “Forks yield resolvable BranchSets; navigation never hard-errors on ambiguity.”
* “No destructive mutation exists; all mutation creates branches; omission only.”
* “Secrets never enter graph state.”

---

## 8) Minor: tau_norm stays (“keep the hack”)

No change required, but add one sentence in §5.2:

* “tau_norm is a pragmatic alignment heuristic for cross-chain ordering and does not assert global time.”

(That preserves your choice and makes the hack honest.)

---

# Suggested “Diff” Summary (one paragraph for Claude)

**v1.5.2 removes causal cycles, eliminates all erasure/destructive semantics in favor of pure omission branching, upgrades move-through-forks from hard errors to BranchSet resolution while preserving wavefront entanglement, resolves the targeted-act contradiction by making staggered updates opt-in, externalizes provider secrets by replacing embedded apiKey with AgentRef/wrapper indirection, updates examples/invariants accordingly, and keeps tau_norm as an explicitly pragmatic ordering heuristic.**
