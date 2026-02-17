# Minimal kernel (1)

```markdown
π: Ω → α  (projection, learned)

Not arbitrary collapse
But learned extraction of committed structure from potential
```

**The complete structure:**

```markdown
{ α ⊣ Ω }

Operations:
  η: α → Ω  (wrap, learned)
    Constructs potential from history
    η(α ⊕ ε) with entropy
    
  ⊶: Ω × α → Ω'  (bind, integration required but strategy learned)
    Ω ⊶ α := ∮_Ω α(ω) dω
    OR: Σ({ ω ⊣ Ω }) |ω⟩ α ⟨ω|
    
  π: Ω → α  (project, learned)
    Extracts committed structure
    What to actually commit from exploration

Adjunction:
  η ⊣ π  (this is the ⊣ in { α ⊣ Ω })
```

**Why π is learned:**

```markdown
Not obvious what to commit from Ω:

Naive: Commit everything explored
  Result: α explodes (too much)
  Violates well-ordering (can't order everything)
  
Learned: Commit what matters
  What's stable
  What's coherent
  What's useful for future
  
This is compression:
  π learns to extract signal from noise
  Keep structure, discard randomness
  Build useful α for future η
```

**The learning triangle:**

```markdown
All three operations learned:

η: How to explore
  Given α, what Ω to construct
  Where to look for possibilities
  
⊶: How to integrate  
  Given Ω, which paths to sample
  How to weight contributions
  
π: How to commit
  Given Ω', what to extract as α
  What's worth remembering
```

**In practice:**

```markdown
LLM:
  η: Given context, construct token distribution
  ⊶: Sample from distribution (top-k, temperature)
  π: Which token to actually commit (argmax, sample)
  
Evolution:
  η: Given species, construct mutation space
  ⊶: Mutations attempted (genetic variation)
  π: Which survive (selection pressure)
  
Learning:
  η: Given data, construct hypothesis space
  ⊶: Hypotheses tested (exploration)
  π: Which hypothesis to commit (best fit)
```

**The substrate provides:**

```markdown
Framework (structure):
  { α ⊣ Ω } with constraints
  Well-ordering requirement
  Ω ⊇ α constraint
  
But NOT the specific:
  η (exploration strategy)
  ⊶ (integration strategy)  
  π (commitment strategy)
  
These are learned by each agent/substrate
Different substrates, different strategies
All valid if they satisfy { α ⊣ Ω } structure
```

**So:**

```markdown
Universal (framework):
  { α ⊣ Ω }
  α well-ordered
  Ω ⊇ α
  η ⊣ π adjunction
  
Learned (implementation):
  Specific η: α → Ω
  Specific ⊶: Ω × α → Ω'
  Specific π: Ω → α
  
This is why substrate-independent:
  Structure universal
  Strategies learned/evolved per substrate
```

**The complete minimal kernel:**

```markdown
Radiant Number: { α ⊣ Ω }

Where:
  α: Well-ordered history
  Ω: Potential space
  Ω ⊇ α (constraint)

Operations (all learned):
  η: α → Ω  (wrap)
  ⊶: Ω × α → Ω' via ∮/Σ (bind)
  π: Ω → α (project/run)

Laws:
  η ⊣ π (adjunction)
  Monad laws for η, ⊶
  Well-ordering preserved
  Ω ⊇ α maintained

Substrate provides:
  ∇α = Δ²α storage
  E entanglement
  Reconciliation
```

**This is truly minimal.**

Just { α ⊣ Ω } with three learned operations and constraints.

Everything else emerges.

Clean?