# v1: Pure Commands, No Helper Functions

---

**Right. Even simpler.**

---

## What We're Dropping

### No Programming Features

**Remove from v1:**
- ❌ `(def ...)` - No variable binding
- ❌ `(defn ...)` - No function definitions
- ❌ `(let ...)` - No local bindings
- ❌ `(progn ...)` - No command sequences
- ❌ Composition / abstractions

**Why:**
- Not needed for core concept
- Adds parser complexity
- Can type commands multiple times instead
- Keep it pure: one command at a time

---

## What We Keep

### Just Direct Commands

**Every line is a command. That's it.**

```lisp
> (create-prime alpha :type claude)
✓ Created prime: alpha

> (create-prime beta :type gpt)
✓ Created prime: beta

> (link alpha beta)
✓ Linked: alpha → beta

> (send alpha "message")
⏳ alpha is thinking...
alpha: "response"
```

**No variables. No functions. Just immediate execution.**

---

## Simplified Command Set

### Setup Commands

```lisp
(create-prime NAME :type TYPE)
;; TYPE: claude | gpt | gemini

(destroy-prime NAME)

(link FROM TO)

(unlink FROM TO)
```

---

### Messaging Commands

```lisp
(send TARGET "message")
;; TARGET: prime name

(send [TARGET1 TARGET2 ...] "message")
;; Multiple targets = entanglement
```

---

### Timeline Commands

```lisp
(fork NAME)
;; Create new timeline from current

(checkout NAME)
;; Switch to timeline

(merge SOURCE TARGET)
;; Merge two timelines

(rewind N)
;; Go back to message N (destructive, requires confirm)
```

---

### Inspection Commands

```lisp
(status)
;; Show current state

(graph)
;; Show topology

(timeline)
;; Show messages in current timeline

(timelines)
;; Show all timelines

(help)
;; Show commands

(help COMMAND)
;; Show help for specific command
```

---

## That's The Complete Command Set

**~15 commands total.**

No more. No less.

---

## Repetition is Fine

**If you want to create many Primes:**

```lisp
> (create-prime p1 :type claude)
> (create-prime p2 :type gpt)
> (create-prime p3 :type gemini)
> (create-prime p4 :type claude)
> (create-prime p5 :type gpt)
```

**Just type them. Or copy-paste. That's okay.**

**If you want to link a chain:**

```lisp
> (link p1 p2)
> (link p2 p3)
> (link p3 p4)
> (link p4 p5)
```

**Verbose, but explicit. Clear what's happening.**

---

## Command History Handles Repetition

**Terminal features:**

```
↑ - Previous command
↓ - Next command
```

**So:**

```lisp
> (create-prime p1 :type claude)
✓ Created prime: p1

> ↑  (pre-fills previous command)
> (create-prime p2 :type claude)  (edit p1 → p2)
✓ Created prime: p2

> ↑
> (create-prime p3 :type claude)  (edit p2 → p3)
✓ Created prime: p3
```

**Fast enough for repetitive tasks.**

---

## No Multiline Either?

### Question: Do we even need multiline?

**Original thought:** Multiline for complex commands

**But if no functions/composition:** Every command is single line

**Simplest possible:**
- Single line input
- Press Enter → Execute
- No continuation prompts
- No balancing parens across lines

**Example:**

```lisp
> (send alpha "This is a message")
✓ Sent

> (send beta "Another message")
✓ Sent
```

**If message needs to be long:**

```lisp
> (send alpha "This is a very long message that explains something in detail and continues for quite a while but it's all on one line which is fine")
```

**Or just make terminal input area tall enough.**

---

### Or Keep Multiline for Long Messages?

**Counter-argument:** Messages might be long

```lisp
> (send alpha "
    Analyze the following:
    1. First point
    2. Second point
    3. Third point
    Provide detailed response.
  ")
```

**This is easier to read/write than one long line.**

**Decision:** Keep multiline support, but ONLY for string content in commands.

**Not for:**
- ❌ Multiple commands in sequence
- ❌ Function definitions
- ❌ Variable bindings

**Just for:**
- ✅ Long message strings (natural)

---

## Multiline String Support

**How it works:**

```lisp
> (send alpha "
⋯ This is a long message
⋯ that spans multiple lines
⋯ for clarity
⋯ ")

⏳ alpha is thinking...
```

**Parser detects:**
- Open quote `"`
- Shows continuation prompt `⋯`
- Waits for closing quote `"`
- Then executes command

**Still one command. Just string spans lines.**

---

## The Absolute Minimum Parser

### What We Need To Parse:

```
(COMMAND ARG1 ARG2 ...)
```

**Where:**
- COMMAND: create-prime | link | send | fork | etc.
- ARGS: strings, keywords, lists

**Simple patterns:**

```typescript
function parseCommand(input: string): Command {
  // Remove outer parens
  const inner = input.trim().slice(1, -1);
  
  // Split by whitespace (except in strings)
  const tokens = smartSplit(inner);
  
  // First token is command
  const cmd = tokens[0];
  const args = tokens.slice(1);
  
  return { cmd, args };
}

function smartSplit(s: string): string[] {
  // Split by whitespace, but preserve quoted strings
  // Handle escaped quotes
  // Return array of tokens
}
```

**Handle:**
- Strings: `"text with spaces"`
- Keywords: `:type`
- Lists: `[a b c]`
- Names: `alpha`

**Don't need:**
- Function definitions
- Variable bindings
- Nested expressions (except lists)
- Operators
- Control flow

---

## Example Implementation Sketch

```typescript
type Command = 
  | { cmd: 'create-prime', name: string, type: string }
  | { cmd: 'link', from: string, to: string }
  | { cmd: 'send', target: string | string[], message: string }
  | { cmd: 'fork', name: string }
  // ... etc

function execute(command: Command): Promise<string> {
  switch (command.cmd) {
    case 'create-prime':
      return createPrime(command.name, command.type);
    
    case 'link':
      return link(command.from, command.to);
    
    case 'send':
      return send(command.target, command.message);
    
    // ... etc
  }
}

// REPL loop
async function repl() {
  while (true) {
    const input = await readLine('> ');
    
    try {
      const command = parseCommand(input);
      const result = await execute(command);
      console.log(result);
    } catch (error) {
      console.log('❌', error.message);
    }
  }
}
```

**That's the whole thing. Maybe 300 lines total.**

---

## The Interface (Final)

### Just Two Areas:

```
┌─ Prime Radiant ─────────────────────────────────┐
│                                                  │
│  Output (scrollable, read-only)                 │
│  ├─ Command history                             │
│  ├─ Results                                     │
│  └─ Prime responses                             │
│                                                  │
│                                                  │
│                                                  │
├──────────────────────────────────────────────────┤
│ > (your command here)                           │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Input:**
- Bottom area
- Textarea (for multiline strings)
- Command history (↑/↓)
- Enter to execute

**Output:**
- Top area
- Scrollable div
- Formatted text
- Auto-scroll to bottom

---

## Features We Get For Free

### Standard Terminal Behavior:

- ✅ Command history (↑/↓)
- ✅ Copy/paste
- ✅ Scroll back
- ✅ Text selection
- ✅ Clear screen

### No need to implement:

- ❌ Custom UI components
- ❌ State management
- ❌ Event handlers
- ❌ Layout logic

**It's just text in, text out.**

---

## Example Session (Final Form)

```
Prime Radiant v0.1
Type (help) for available commands

> (create-prime alpha :type claude)
✓ Created prime: alpha (claude-sonnet-4.5)

> (create-prime beta :type gpt)
✓ Created prime: beta (gpt-4)

> (link alpha beta)
✓ Linked: alpha → beta

> (send alpha "What is 2+2?")
⏳ alpha is thinking...

alpha: "2 + 2 = 4"

✓ Committed (msg-1)

> (send beta "What did alpha say?")
⏳ beta is thinking...

beta: "Alpha stated that 2 + 2 equals 4, which is correct."

✓ Committed (msg-2)

> (timeline)

Timeline: main
msg-1: alpha: "2 + 2 = 4"
msg-2: beta: "Alpha stated that 2 + 2 equals 4..."

> (fork experiment)
✓ Created timeline: experiment

> (send alpha "But what if 2+2=5?")
⏳ alpha is thinking...

alpha: "That would violate basic arithmetic..."

✓ Committed (msg-3)

> (checkout main)
✓ Now on: main

> (merge main experiment)
⏳ Creating merge-radiant...
⏳ Replaying timelines...

merge-radiant: "Timeline 'main' concluded with correct arithmetic.
                Timeline 'experiment' explored hypothetical.
                Synthesis: Standard arithmetic holds."

✓ Merged into: main-merged

> _
```

---

## Is This The Right v1 Interface?

**What we have:**
- Pure command REPL
- No programming constructs
- No helper functions
- Just direct commands
- One at a time
- Text in, text out

**What we DON'T have:**
- GUI
- Buttons
- Forms
- Visual graph editor
- Complex state management
- Multiple views

**Implementation complexity:**
- Maybe 500 lines total
- Simple parser
- Simple executor
- Simple UI (textarea + div)

**Time to build:**
- Core: 2-3 days
- Polish: 1-2 days
- Total: 1 week

**Is this the right scope for v1?**