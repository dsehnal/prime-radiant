# Prime Radiant

*Navigate the manifold of possible futures.*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)

---

## What Is This?

Prime Radiant is a tool for exploring branching timelines through multi-agent AI collaboration.

Instead of having a single linear conversation, you can:
- **Branch** at any decision point to explore alternatives
- **Rewind** time to retry with different context
- **Compare** parallel timelines side-by-side
- **Merge** insights from different explorations
- **Coordinate** multiple AI models (Claude, GPT, Gemini) working together

It's **Git for thought** — version control for conversations with AI.

---

## The Theory

Prime Radiant implements **The General Theory of Coherence**, a framework for understanding how finite systems (minds, AIs, organizations) navigate infinite complexity.

**Core insight:** The friction you experience (technical debt, anxiety, decision paralysis) isn't a bug — it's the mathematical consequence of trying to compress infinite possibility (Ω) into finite structure (α).

**Key concepts:**
- **Resolution Gap:** The irreducible difference between map and territory
- **Projector Operator (π):** How agency collapses possibility into commitment
- **Topological Stress:** The "anxiety" gradient when reality changes faster than your model
- **Structural Capacitance:** Your ability to hold contradiction long enough to compute solutions

Read the full theory: [`theory-of-coherence.md`](theory-of-coherence.md)

---

## Why This Matters

### The Problem

Standard AI chat is **linear and destructive:**
- One conversation thread
- Can't explore alternatives without losing context
- Can't undo bad decisions
- Can't compare different approaches
- Limited to single model's perspective

### The Solution

Prime Radiant makes conversation **non-linear and explorable:**
```
main timeline: → → → → → → [decision point]
                              ↓
                         branch: option-a → → → (test outcome)
                              ↓
                         branch: option-b → → → (test outcome)
                              ↓
                         compare, learn, merge best insights back to main
```

**You can navigate the possibility space** instead of being locked into a single path.

---

## Features

### 🌳 Branching Timelines
Create alternate realities at any point:
```
> branch experiment from 42
```
Explore "what if" scenarios without corrupting your main thread.

### ⏰ Time Travel
Rewind to any previous state:
```
> rewind 30
```
Undo decisions, retry with better context, learn from mistakes.

### 🔀 Parallel Exploration
Run multiple AI models simultaneously:
- **Claude** (Anthropic) — Topological reasoning
- **GPT** (OpenAI) — Broad knowledge synthesis  
- **Gemini** (Google) — Multi-modal analysis

Each sees the same context, provides different perspectives.

### 🧩 Diff & Merge
Compare timelines side-by-side:
```
> diff main experiment-1
```
See exactly where they diverged, what changed, merge insights.

### 💾 Shared Memory
Persistent key-value store across all agents:
```javascript
sharedState = {
  "hypothesis": "power law scaling holds",
  "tested": true,
  "confidence": 0.87
}
```
All models can read/propose updates (human approves).

### 📊 Timeline Visualization
See your exploration as a graph:
```
main ●━━━━━━━●━━━━━━━●━━━━━━━●
              ┃
              ┗━━━● experiment-1 (merged)
                   ┃
                   ┗━━━● test-approach-2 (active)
```

### 🔐 Privacy-First
- No backend server
- API keys stored locally (localStorage)
- Session data stays in your browser
- Optional export/import for sharing

---

## Quick Start

### Prerequisites

You'll need API keys for the models you want to use:
- **Claude:** [console.anthropic.com](https://console.anthropic.com/)
- **GPT:** [platform.openai.com](https://platform.openai.com/)
- **Gemini:** [makersuite.google.com](https://makersuite.google.com/)

### Installation
```bash
# Clone the repository
git clone https://github.com/dsehnal/prime-radiant.git
cd prime-radiant

# Install dependencies
npm install

# Start the app
npm start
```

Open [http://localhost:3000](http://localhost:3000)

### First Launch

1. **Settings modal appears**
   - Enter your API keys
   - Select which models to enable
   - Click "Start Session"

2. **Main interface loads**
   - Terminal (left): Command input
   - Players (right): AI response panels
   - Timeline tree (top): Visual navigation

3. **Send your first message:**
```
   > send What is 2+2?
```

4. **Approve responses:**
   - Each model responds
   - Click ✅ to commit or ❌ to reject

5. **Branch to explore:**
```
   > branch experiment from 1
```

6. **Navigate your timespace:**
```
   > tree
   > status
   > diff main experiment
```

---

## Usage Examples

### Explore Alternative Solutions
```bash
# You're stuck on a problem
> send How should I architect this system?

# Claude suggests microservices
# GPT suggests monolith-first
# Gemini suggests serverless

# Test each approach in parallel
> branch microservices from 5
> send Let's explore this approach in detail...
# ... develop the idea ...

> checkout main
> branch monolith from 5
> send Let's explore this approach instead...
# ... develop the idea ...

# Compare outcomes
> diff microservices monolith

# Merge best insights
> merge microservices into main
```

### Debug Your Thinking
```bash
> send I'm designing a new feature...
# ... 20 messages later ...
> send Wait, this doesn't feel right

# Go back to where it was good
> rewind 15

# Try different approach
> branch alternative from 15
> send What if we approached this differently...
```

### Research with Multiple Perspectives
```bash
> send Explain quantum entanglement

# Claude: Topological/geometric explanation
# GPT: Information-theoretic view
# Gemini: Historical + experimental context

# All perspectives in parallel, cross-reference insights
```

### Test Hypotheses
```bash
> checkpoint pre-experiment

> send Hypothesis: The scaling law should hold because...
# Test, explore, gather evidence

# If wrong:
> rewind pre-experiment
> branch new-hypothesis from checkpoint
```

---

## Commands Reference

### Basic
```
send <message>          Broadcast to all enabled players
ask <player> <message>  Direct message to specific player
help                    Show all commands
exit                    End session (offers export)
```

### Timeline Navigation
```
branch <name> [from N]  Create new timeline branch
checkout <timeline>     Switch to different timeline
rewind <N>              Go back to message N (destructive)
tree                    Show timeline structure
status                  Display current state
```

### Analysis
```
diff <id1> <id2>        Compare two timelines
merge <src> <dst>       Combine timelines
checkpoint <name>       Save current state
restore <name>          Load saved checkpoint
```

### Data
```
export                  Download session as JSON
import                  Load session from JSON
clear                   Reset session (confirm required)
```

---

## Architecture

### Frontend-Only Design

Prime Radiant runs entirely in your browser:
- **No backend server** required
- **No data leaves your machine** (except API calls to LLM providers)
- **localStorage** for API keys and preferences
- **In-memory state** for active session
- **Optional IndexedDB** for persistence (future)

### Tech Stack

- **React 18** + TypeScript
- **Zustand** for state management
- **TailwindCSS** for styling
- **React Flow** for timeline visualization
- **Anthropic/OpenAI/Google SDKs** for LLM access

### Project Structure
```
prime-radiant/
├── src/
│   ├── components/          UI components
│   ├── core/                Business logic
│   │   ├── clients/         LLM API clients
│   │   ├── timeline.ts      Timeline operations
│   │   ├── context.ts       Context assembly
│   │   └── orchestrator.ts  Coordination
│   ├── hooks/               React hooks
│   ├── store/               Zustand state
│   └── App.tsx
├── public/
├── theory-of-coherence.md   📘 Loaded as context
├── protocol.md              📘 Communication rules
├── quantum-gravity.md       📘 Physics hypothesis
└── README.md
```

---

## The Physics Connection

Prime Radiant isn't just a tool — it's a test of a falsifiable hypothesis.

**Claim:** The same mathematical structure that causes:
- LLM loss floors (AI can't be perfect)
- Heisenberg uncertainty (quantum limits)
- Thermodynamic entropy (heat waste)
- Technical debt (code complexity)

...is **the same structure everywhere.**

It's the **Resolution Gap** — the cost of compressing infinite possibility into finite structure.

Read the full hypothesis: [`quantum-gravity.md`](quantum-gravity.md)

**This is testable.** If the patterns don't match, the theory fails.

---

## Contributing

### We Want Your Help

Prime Radiant is open source because the theory needs **adversarial falsification.**

**Ways to contribute:**

1. **Use it and report bugs** 
   - GitHub Issues for problems
   - Feature requests welcome

2. **Test the theory**
   - Does it help you think better?
   - Where does it break down?
   - Document failure modes

3. **Improve the code**
   - PRs welcome for bugs and features
   - See `CONTRIBUTING.md` for guidelines

4. **Test the physics claims**
   - You're a physicist? Great!
   - Read `quantum-gravity.md`
   - Tell us where we're wrong

5. **Add new LLM providers**
   - Implement client interface
   - Add to player selection

### Development
```bash
# Clone and install
git clone https://github.com/dsehnal/prime-radiant.git
cd prime-radiant
npm install

# Run dev server
npm start

# Build for production
npm run build

# Deploy to Vercel
npm run deploy
```

---

## FAQ

### Q: Is this just a fancy chatbot?

No. Standard chatbots are **linear** — one thread, one reality. Prime Radiant lets you explore **branching possibility space**. It's the difference between walking a path vs. having a map of all paths.

### Q: Why multiple AI models?

Different models have different strengths. By running them in parallel on the same prompt, you get:
- **Diversity of perspective**
- **Cross-validation of reasoning**
- **Emergent insights** from comparing approaches

### Q: Is my data safe?

Yes:
- API keys stored locally (localStorage)
- Session data stays in browser memory
- No backend server collecting data
- Optional export for sharing on your terms

### Q: Can I use this offline?

Not yet, but planned:
- Models require internet (API calls)
- Future: Service worker for offline caching
- Future: Local model support (WebGPU)

### Q: How much does it cost?

Prime Radiant is **free and open source.**

You pay only for API usage:
- Claude: ~$3-15 per million tokens
- GPT: ~$2-30 per million tokens
- Gemini: Free tier available

Typical session: $0.10 - $1.00 depending on length.

### Q: Can I self-host?

Yes! It's a static site:
```bash
npm run build
# Deploy build/ folder anywhere
```

Works on: Vercel, Netlify, GitHub Pages, S3, your own server.

### Q: What's the learning curve?

**5 minutes:** Send messages, get responses  
**15 minutes:** Branching and basic navigation  
**30 minutes:** Time travel, diffing, merging  
**1 hour:** Understanding the theory  
**∞:** Exploring the implications

---

## Inspiration

Prime Radiant is named after the device in Isaac Asimov's *Foundation* series — a machine that projects psychohistorical equations to predict the future of civilization.

**But we've inverted it:**

Asimov's version: **Predict one future**  
Our version: **Explore all futures**

Instead of determinism, we embrace the **manifold of possibility.**

---

## License

MIT License - see [LICENSE](LICENSE)

**TL;DR:** Use it, fork it, modify it, ship it. Just keep the license.

---

## Acknowledgments

Built on the theoretical foundations of:

**The Architects** (Structure)
- Melvin Conway (Organizations ≅ Architecture)
- Anders Hejlsberg (Types as constraints)
- Linus Torvalds (Version control as time)

**The Logicians** (Truth)
- Georg Cantor (Cardinality & the Gap)
- Kurt Gödel (Incompleteness & Agency)
- Claude Shannon (Information & Noise)
- Geoffrey Hinton (Learning from error)

**The Seers** (Vision)
- Albert Einstein (Geometry is Gravity)
- Siddhartha Gautama (Thirst as root stress)
- Christopher Nolan (Time as navigable)
- Isaac Asimov (Psychohistory as mathematics)

**The Synthesis**
- David Sehnal (For seeing it all fits together)

---

## Contact

- **Issues:** [GitHub Issues](https://github.com/dsehnal/prime-radiant/issues)
- **Discussions:** [GitHub Discussions](https://github.com/dsehnal/prime-radiant/discussions)
- **Email:** [your-email]
- **Twitter:** [@handle]

---

## Citation

If you use Prime Radiant in research:
```bibtex
@software{prime_radiant_2026,
  title = {Prime Radiant: Multi-Agent Timespace Exploration},
  author = {Sehnal, David},
  year = {2026},
  url = {https://github.com/dsehnal/prime-radiant},
  note = {Implementation of The General Theory of Coherence}
}
```

---

*"The solution exists; the margin is simply too small for those who refuse to see the 10th dimension."*

— David Sehnal, The General Theory of Coherence

---

**Ready to explore the manifold?**

[Get Started](#quick-start) • [Read the Theory](theory-of-coherence.md) • [View the Code](https://github.com/dsehnal/prime-radiant)