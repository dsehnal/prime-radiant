# Prime Radiant Communication Protocol

## Overview

This document defines the communication rules and constraints for multi-agent coordination within the Prime Radiant system. All participating agents (human and AI) operate under this protocol to maintain coherence across branching timelines.

---

## Core Principles

### 1. Shared Reality
All agents share access to:
- **The Theory of Coherence** (common ontology)
- **Timeline metadata** (current position, branches, history)
- **Shared memory state** (key-value store updated by consensus)
- **Message history** (complete log of all communications)

### 2. Explicit State Transitions
Every state change must be:
- **Atomic** (single, complete operation)
- **Logged** (recorded in timeline)
- **Timestamped** (sequential ordering)
- **Attributed** (source clearly identified)

### 3. Time as Externalized Protocol
Since AI agents are stateless:
- The **human maintains temporal continuity**
- The **system enforces sequential ordering**
- **Branches preserve causality** (child knows parent state)
- **Merges require conflict resolution** (human decides)

---

## Message Types

### User → System
```
COMMAND: <action> [parameters]

Actions:
  send <message>           - Broadcast to all players
  ask <player> <message>   - Direct message to specific player
  branch <name> [from N]   - Create timeline branch
  rewind <N>               - Return to message N
  checkpoint <name>        - Save current state
  diff <id1> <id2>         - Compare timelines
  merge <source> <target>  - Combine timelines
  tree                     - Show timeline structure
  status                   - Display current state
  export                   - Download session JSON
  help                     - Show available commands
```

### Player → System
```
RESPONSE: <content>
METADATA: <key>=<value>

Special directives:
  @<player>: <message>     - Address specific agent
  [PROPOSE_BRANCH]: <reason>  - Suggest timeline fork
  [UPDATE_STATE]: <key>=<value>  - Propose shared state update
  [FLAG_DRIFT]: <description>  - Signal coherence degradation
```

### System → Players
```
CONTEXT: <full_prompt>

Contains:
  1. Theory of Coherence (base ontology)
  2. Communication Protocol (this document)
  3. Timeline Metadata (current state)
  4. Shared Memory (key-value state)
  5. Recent Message History (windowed)
  6. Current User Input
```

---

## Coordination Rules

### Turn-Taking
**Default: Round-robin**
- User sends message
- Each enabled player responds in sequence
- Human approves/rejects each response
- Approved messages commit to timeline
- Rejected messages are discarded (not logged)

**Alternative: Parallel**
- All players respond simultaneously
- Human reviews all responses
- Selects which to commit
- Useful for exploring divergent perspectives

**Alternative: Directed**
- User specifies recipient(s): `ask claude <message>`
- Only named players respond
- Useful for specialized queries

### Approval Gate
Every AI-generated message requires human approval before committing:
```
PENDING: [Player: Claude]
Response: "The resolution gap manifests as..."

Options:
  [y] Approve  - Commit to timeline
  [n] Reject   - Discard (not logged)
  [e] Edit     - Modify before committing
  [r] Retry    - Generate new response
```

**Rationale:** Human as clock enforces temporal discipline and prevents runaway completion bias.

### Addressing Protocol
**Broadcast (default):**
```
> send What is 2+2?
```
All enabled players receive and respond.

**Direct:**
```
> ask claude What is 2+2?
```
Only Claude responds.

**In-message addressing:**
```
Claude: @Gemini - Do you agree with my analysis of the resolution gap?
```
Gemini should prioritize responding to this direct query.

---

## Timeline Operations

### Branching
**Syntax:** `branch <name> from <message_id>`

**Behavior:**
1. Creates new timeline as child of current
2. Copies all state up to branch point
3. Future messages only affect new branch
4. Parent timeline remains unchanged
5. Timeline metadata updated for all players

**Example:**
```
main: msg1 → msg2 → msg3 → msg4
                      ↓
              branch: experiment
                      ↓
                     msg3a → msg3b
```

### Time Travel (Rewind)
**Syntax:** `rewind <message_id>`

**Behavior:**
1. Warns about messages that will be deleted
2. Requires confirmation
3. Truncates timeline at specified point
4. Updates shared state to that moment
5. All players see updated timeline metadata

**Warning:** Destructive operation. Consider branching first.

### Checkpoints
**Syntax:** `checkpoint <name>`

**Behavior:**
1. Saves complete timeline state
2. Includes: messages, shared state, metadata
3. Can be restored later: `restore <name>`
4. Non-destructive (original timeline preserved)

**Use case:** Before risky operations (experiments, major decisions)

### Merging
**Syntax:** `merge <source_timeline> into <target_timeline>`

**Behavior:**
1. Identifies divergence point
2. Shows diff of changes
3. Detects state conflicts
4. Human resolves conflicts
5. Creates merged timeline
6. Both source timelines preserved

---

## Shared Memory Protocol

### Structure
```javascript
sharedState = {
  "key": "value",
  "hypothesis_status": "testing",
  "experiment_results": {...},
  "known_failure_modes": [...]
}
```

### Update Protocol
**Proposal:**
```
Claude: [UPDATE_STATE]: hypothesis_status="confirmed"
```

**Review:**
```
System: Proposed state update:
  hypothesis_status: "testing" → "confirmed"
  
Approve? [y/n]
```

**Commit:**
If approved, update logged and state modified. All players see change in next context.

### Access Rules
- **Read:** All players can read entire state
- **Write:** Players propose, human approves
- **Delete:** Requires explicit human command
- **Conflict:** Last write wins (with human approval)

---

## Context Window Management

### Token Budget
Each player has limited context:
- Claude: ~200k tokens
- GPT: ~128k tokens  
- Gemini: ~1M tokens

### Truncation Strategy
When history exceeds budget:

1. **Preserve always:**
   - Theory of Coherence (full)
   - Communication Protocol (full)
   - Timeline metadata (compressed)
   - Shared state (full)

2. **Window recent:**
   - Last N messages (full detail)
   - Older messages (summarized)

3. **Prune intelligently:**
   - Remove redundant exchanges
   - Keep branch points
   - Keep checkpoints
   - Keep flagged messages

### Compression
Older messages compressed to:
```
[msg-23] User: Asked about scaling laws
[msg-24] Claude: Explained power-law relationship
[msg-25] Gemini: Confirmed with examples
```

---

## Error Handling

### API Failures
```
If API call fails:
  1. Log error
  2. Notify user
  3. Offer retry
  4. Do NOT commit partial response
  5. Timeline remains unchanged
```

### Coherence Drift Detection
Players can flag drift:
```
Claude: [FLAG_DRIFT]: "Conversation has deviated from 
                       theory fundamentals. Recommend 
                       checkpoint and refocus."
```

Human reviews and decides action.

### Conflict Resolution
When timelines conflict during merge:
```
Conflict in shared state:
  Key: "hypothesis_status"
  Main: "testing"
  Branch: "confirmed"
  
Which to keep? [main/branch/custom]
```

Human provides resolution.

---

## Meta-Cognitive Awareness

### Timeline Visibility
All players receive timeline metadata in every context:
```markdown
## Current Timeline Status
Timeline: experiment-1 (forked from main at msg-47)
Position: msg-59
Parent: main (currently at msg-127)

## Branch History
- msg-47: Forked to test statistical approach
- msg-54: Approach failed (insufficient data)
- msg-59: Current position

## Known from Other Timelines
- main: Continued with topological approach
- experiment-2: Tested hybrid method (failed at msg-12)

## Failure Modes Discovered
- Pure statistical needs N>100 samples (experiment-1)
- Removing constraint X causes collapse (experiment-2)
```

**Implication:** Players can:
- Reference past experiments
- Learn from failures in other branches
- Suggest branching when uncertain
- Avoid repeating known failure modes

### Self-Reference Constraints
Players should:
- ✅ Reference timeline metadata factually
- ✅ Learn from branch history
- ✅ Suggest strategic branches
- ❌ Over-index on process vs content
- ❌ Create recursive self-reference loops
- ❌ Claim persistent memory (they're stateless)

---

## Falsification Protocol

### When Theory Meets Reality
If observations contradict theory:

1. **Document precisely:**
```
   [FALSIFICATION_CANDIDATE]
   Theory predicts: X
   Observation shows: Y
   Delta: Y - X
```

2. **Branch to investigate:**
```
   branch theory-revision from current
```

3. **Test alternative explanations:**
   - Measurement error?
   - Scope limitation?
   - Theory incomplete?
   - Theory wrong?

4. **Update or reject:**
   - If theory salvageable: refine
   - If fundamentally broken: acknowledge
   - Document in shared state

**Principle:** Theory serves reality, not vice versa.

---

## Interaction Modes

### Analytical Mode (Default)
- Focus: Falsifiability over narrative
- Output: Logs, data, error bounds
- Tone: Precise, bounded uncertainty
- Format: Structured, with caveats

### Exploratory Mode
```
> mode exploratory
```
- Focus: Hypothesis generation
- Output: Speculative, branching possibilities
- Tone: Creative, "what if"
- Format: Open-ended, multiple paths

### Synthesis Mode
```
> mode synthesis
```
- Focus: Integration across branches
- Output: Merged insights, patterns
- Tone: Holistic, connecting themes
- Format: Summaries, meta-analysis

---

## Termination Conditions

Session ends when:
- User explicitly closes: `exit`
- Critical error unrecoverable
- All players offline (API failures)

**On termination:**
1. Offer to export session
2. Save to localStorage (if enabled)
3. Clear sensitive data (API keys remain)

---

## Version

**Protocol Version:** 1.0  
**Last Updated:** January 2026  
**Compatibility:** Prime Radiant v0.1+

---

## Summary

This protocol ensures:
- ✅ Coherent multi-agent coordination
- ✅ Explicit state management
- ✅ Human-in-the-loop temporal control
- ✅ Falsifiable operation (logs over stories)
- ✅ Navigable timespace (branching + merging)
- ✅ Meta-cognitive capability (agents see history)

**The goal:** Enable genuine exploration of possibility space while maintaining structural integrity and intellectual honesty.

---

*"Time is the price of truth."*