# Composable DBTL: Infrastructure for Biological Discovery

**Author:** David Sehnal

## Executive Summary

### The Problem

Modern biological discovery has all the necessary components—AI models for design, robotic automation for execution, cloud infrastructure for data—but lacks the assembly layer to compose them. Each lab rebuilds integration pipelines manually, limiting exploration and fragmenting learning.

### The Solution

Composable DBTL infrastructure built on three principles: (1) standard interfaces allowing any specialist (human or AI) to plug in, (2) multi-agent negotiation finding equilibrium before committing resources to experiments, and (3) gradual automation preserving human oversight at every level.

### The Core Insight

DBTL exhibits compositional structure—the same pattern governing individual measurements also governs experiments, campaigns, and programs. This self-similarity enables standardized interfaces that work at every scale.

### What Already Exists

All major components are production-ready—structure predictors (AlphaFold, ESMFold), property estimators, synthesis automation, screening platforms, cloud infrastructure. The gap is coordination: interface standards, equilibrium protocols, orchestration layers, and observability infrastructure.

### The Path Forward

Three-phase deployment over 5-10 years. Phase 1 (0-2 years): Interface standardization, human-driven with AI assistance. Phase 2 (2-5 years): Equilibrium protocols, AI-guided with human validation. Phase 3 (5-10 years): Autonomous execution with human supervision. Throughout, humans set objectives, define boundaries, and maintain oversight.

### Economic Model

Open standards at foundation, commercial coordination layer above (transaction fees, premium features, network effects). First mover becomes platform (Uber/AWS model). Small transaction fee × large ecosystem × compounding growth = sustainable business capturing percentage of total value creation.

### Implementation Cost

3-5 years with 10-20 person team. Estimated funding: $5-15M for academic consortium or $20-50M for commercial venture. Comparable to successful infrastructure projects (Galaxy, CyVerse).

### This Is Not a Research Hypothesis

It is a coordination problem. The technical components exist, the compositional structure is clear, the benefits are quantifiable. What remains is coordination: standards development, reference implementation, ecosystem cultivation.

---

## Abstract

The Design-Build-Test-Learn (DBTL) cycle is the canonical workflow of modern bioengineering. This article demonstrates that DBTL has an underlying compositional structure that enables nesting at arbitrary scale—the same pattern that governs individual measurements also governs entire experimental campaigns.

We show that the specialist models, lab automation, and data infrastructure needed for AI-assisted biological discovery already exist. What's missing is the assembly layer: standardized interfaces and orchestration protocols that allow these components to compose.

We propose an architecture where specialized agents (human or AI) negotiate at each phase of DBTL, finding equilibrium before committing resources to physical experimentation. This composition-first approach enables gradual automation while maintaining full human observability and intervention capability at every level.

## I. Introduction: The Assembly Problem

### The Current Landscape

Modern biological discovery relies on an expanding ecosystem of specialized capabilities:

**Computational models (production-ready today):**
- Structure prediction: AlphaFold, ESMFold, RosettaFold
- Binding affinity estimation: multiple neural network and physics-based approaches
- Stability predictors: thermal, chemical, mechanical properties
- ADMET models: absorption, distribution, metabolism, excretion, toxicity
- Synthesis route planning
- Dozens more, with new models published monthly

**Physical automation (commercially available):**
- Robotic liquid handling systems
- High-throughput screening platforms
- Automated DNA synthesis
- Microfluidic devices
- Continuous monitoring sensors

**Data infrastructure (mature and accessible):**
- Public databases: PDB, UniProt, ChEMBL
- Cloud compute platforms
- Laboratory information management systems (LIMS)
- Electronic lab notebooks (ELN)

The pieces exist. Each component works. Many are production-ready.

### What's Missing

**The composition layer.** Currently, each lab or company builds custom integration: manual pipelines connecting specific models, ad-hoc scripts for specific workflows, brittle connections that break when models update, and constant reinvention of integration logic.

This resembles computing before operating systems emerged: every program reimplemented its own disk I/O, memory management, and hardware interfaces. We need the biological equivalent—composable infrastructure where capabilities plug together through standard interfaces.

### Central Observation

DBTL is not just a workflow diagram. It's a compositional pattern that appears at every scale.

The same structure that describes a single measurement (minutes) also describes an experiment (weeks), a campaign (months), and a research program (years). This self-similarity enables composition: experiments nest inside campaigns, campaigns nest inside programs, with the same DBTL pattern at each level.

Making this explicit provides the foundation for standardized interfaces.

### Our Proposal

We propose infrastructure built on three principles: **standard interfaces** for all components, **multi-agent equilibrium** finding before physical commitment, and **gradual automation** with maintained human oversight. This enables an ecosystem where new capabilities plug in automatically, best tools win through market dynamics, and learning compounds across all experiments while human expertise remains central.

## II. The DBTL Pattern: Self-Similar Across Scales

### The Standard Description

**Design:** Propose biological system based on current understanding

**Build:** Physically synthesize the designed system  

**Test:** Measure the system's behavior experimentally

**Learn:** Integrate results into understanding, inform next design

This describes the workflow. But there's deeper structure.

### The Compositional Structure

Each DBTL phase has specific properties:

**Design = Exploration Phase.** Navigate possibility space before committing resources: multiple sequence variants considered, alternative architectures evaluated, different optimization strategies explored. This exploration happens in what we'll call the "observation space"—thinking and simulation without spending lab resources.

**Build = Commitment Phase.** Project from possibility to physical reality: specific sequence synthesized, particular organism engineered, actual experiment executed. This crosses the "commitment boundary"—once resources spent, cannot rewind without new cycle.

**Test = Measurement Phase.** Observe system at decision boundary: system exists but outcome unknown, multiple results possible before measurement, observation collapses to specific data. The gap between expected and observed is critical. Biological systems have high intrinsic noise. The goal is not eliminating uncertainty (impossible) but reducing it to the irreducible floor determined by substrate physics.

**Learn = Integration Phase.** Update internal model to maintain coherence: reconcile prediction with observation, preserve structural understanding, refine design principles.

The risk here is subtle: when results contradict current model, teams face pressure to proceed anyway—deferring reconciliation to stay on schedule. This accumulates invisible debt. Eventually, when predictions fail catastrophically, the team discovers months of compounded error. Best practice: flag anomalies immediately, budget reconciliation time, never defer model conflicts.

### Why This Structure Enables Composition

The key property: each phase can contain nested DBTL cycles.

Design phase might include: design candidate sequences (inner Design), predict structures in silico (inner Build/Test), evaluate predictions (inner Learn), iterate until convergence (inner DBTL complete), then propose final designs to outer cycle.

Learn phase might include: gather multiple property measurements (inner Test), build unified model (inner Design), validate model on held-out data (inner Test), update world model (outer Learn complete).

This nesting works because the pattern is self-similar. A protein design campaign (months):

```
Campaign DBTL {
  Design: Plan experimental strategy
  Build: Execute experiments [each is nested DBTL]
  Test: Analyze experimental outcomes
  Learn: Update campaign strategy
}
```

Each experiment (weeks):

```
Experiment DBTL {
  Design: Select protein variants
  Build: Synthesize sequences [nested DBTL]
  Test: Run assay panel [nested DBTL]
  Learn: Interpret results
}
```

Same pattern, different timescales. This self-similarity is what enables composable infrastructure: interfaces at one scale work at all scales.

## III. The Specialist Agent Architecture

### Beyond Monolithic Approaches

Each DBTL phase requires different expertise. Design demands creativity and exploration. Build demands feasibility and cost-efficiency. Test demands measurement strategy. Learn demands theoretical understanding.

Current practice: single team (or single AI) tries to balance all constraints internally. Our proposal: specialized agents per phase, finding equilibrium through negotiation.

### The Four Specialist Roles

**Design Agent (Exploration Specialist):** Explores possibility space. Objective: find novel, high-potential solutions. Natural bias: "Try this ambitious variant." Constraint: must be scientifically plausible.

**Build Agent (Execution Specialist):** Plans synthesis and experimentation. Objective: maximize feasibility and cost-efficiency. Validates Design output for domain-specific constraints beyond formal schema (rare codons, synthesis artifacts, etc.). Natural bias: "Use proven, reliable methods." Constraint: must deliver promised capabilities.

**Test Agent (Measurement Specialist):** Designs measurement strategy. Objective: maximize information gain per experiment. Natural bias: "Ensure we learn something definitive." Constraint: must be technically measurable.

**Learn Agent (Integration Specialist):** Maintains model coherence. Objective: build mechanistic understanding. Natural bias: "Explain why, not just optimize metrics." Constraint: must reconcile all observations.

### Why Specialization Improves Outcomes

Problem with single-agent optimization: all constraints internalized, tends toward conservative solutions (safe but uninteresting), no creative tension.

Benefit of multi-agent negotiation: Design pushes for novelty, Build pushes back on cost/feasibility, Test demands measurability, Learn insists on mechanistic clarity. The negotiated solution satisfies all perspectives.

Example negotiation:

Design: "Test these 50 ambitious variants"  
Build: "Synthesis budget only supports 10"  
Test: "I can only measure 20 with current assays"  
Learn: "My models predict 8 are most informative"  
**Equilibrium: Build and test top 8 model-predicted variants**

The result balances all constraints without any single agent compromising its core objective.

### Current Examples

This already happens informally in well-functioning labs: computational biologist (Design) proposes sequences, synthetic biology engineer (Build) suggests buildable alternatives, assay development specialist (Test) adjusts measurement approach, PI/senior scientist (Learn) reconciles with mechanistic model. Formalizing this enables AI to participate using same negotiation protocol and scales beyond single lab's expertise.

## IV. The In-Silico Wormhole

### Design ⇔ Learn Iteration Before Physical Commitment

Key insight: Design and Learn can negotiate in simulation before spending lab resources.

```
═══════════════════════════════════════════════════════════════════════════
              IN-SILICO WORMHOLE: Design ⇔ Learn Before Commitment
═══════════════════════════════════════════════════════════════════════════

TRADITIONAL DBTL (Every iteration requires physical resources):

  ┌────────┐     ┌───────┐     ┌──────┐     ┌───────┐
  │ Design │────▶│ Build │────▶│ Test │────▶│ Learn │───┐
  └────────┘     └───────┘     └──────┘     └───────┘   │
       ▲                                                  │
       └──────────────────────────────────────────────────┘
                (Each loop = physical experiment)

  20 candidates → 20 builds → 20 tests → ~4 successes (20% hit rate)
  Cost: 20× synthesis + 20× assay | Learning: 20 experiments


COMPOSABLE DBTL (In-silico filtering funnel):

    ╔════════════════════════════════════════════════════════════╗
    ║                    DESIGN SPACE (Ω)                        ║
    ║                 ~10⁶ possible sequences                    ║
    ╚════════════════════════════════════════════════════════════╝
                              │
                              │ (AI generates candidates)
                              ▼
                   ╔═════════════════════╗
                   ║  Initial Candidates ║
                   ║   1000 sequences    ║
                   ╚═════════════════════╝
                              │
         ┌────────────────────┴───────────────────┐
         │    IN-SILICO EXPLORATION SPACE         │
         │    (No physical resources spent)       │
         │                                        │
         │      ┌────────┐         ┌───────┐     │
         │      │ Design │◀───────▶│ Learn │     │
         │      └────────┘         └───────┘     │
         │           │                  ▲         │
         │           │   (iterate      │         │
         │           │    until        │         │
         │           │    convergence) │         │
         │           └──────────────────┘         │
         │                                        │
         │   • Predict structures (AlphaFold)    │
         │   • Estimate properties (ML models)   │
         │   • Rank by confidence                │
         │   • Filter failures                   │
         │                                        │
         │   Cost: ~$0.01 per candidate          │
         │   1000 → 100 → 20 → 3 high-confidence │
         └────────────────────────────────────────┘
                              │
         ═════════════════════════════════════════
            COMMITMENT BOUNDARY (Resources Spent)
         ═════════════════════════════════════════
                              │
                              ▼
                      ┌───────────────┐
                      │ Build → Test  │  ← Physical synthesis & measurement
                      │  (3 filtered) │     Cost: 3× synthesis + 3× assay
                      └───────────────┘
                              │
                              ▼
                      ┌───────────────┐
                      │     Learn     │  ← Update models with real data
                      │  (2 successes)│     Success rate: ~60-70%
                      └───────────────┘
                              │
                              └──────▶ Next in-silico round (iterate)


OUTCOME COMPARISON:

  Traditional:  20 physical → 4 successes  | Cost: $40K | Learning: 20 data points
  
  Wormhole:    1000 in-silico → 3 physical → 2 successes | Cost: $7K | Learning: 1000 simulations + 3 experiments
  
  • 50× more designs explored (1000 vs 20)
  • 85% cost reduction ($7K vs $40K for similar success)
  • Models improve from 1000 evaluations, not 20
  • Risk: Only valid if models are calibrated (Learn agent must track accuracy)

═══════════════════════════════════════════════════════════════════════════
```

*[The above diagram illustrates the resource flow comparison between traditional and composable approaches. For detailed quantitative analysis and economic implications, see Section XI.]*

The in-silico wormhole:

Design: "Here are 100 candidate sequences based on current strategy"

Learn: "My predictive models rank these 10 as most promising"

Design: "Based on your model's confidence intervals, here are 10 optimized variants"

Learn: "Models predict these 3 have >70% success probability"

Design: "Agreed. Confidence bounds acceptable?"

Learn: "Yes. Model uncertainty is below noise floor. Further iteration unlikely to improve."

**[Equilibrium reached. Proceed to Build.]**

This loop happens entirely computationally (no lab resources), filters design space massively before physical commitment, and enables exploration at scale impossible with physical-first approaches.

### The Critical Caveat

**If predictions are wrong, you've just filtered for model bias.** This is why the Learn agent must track prediction accuracy and flag when model uncertainty exceeds bounds. The in-silico wormhole only works if models are calibrated.

## V. Nested Composition: Specialists All The Way Down

### Each Phase Decomposes

Design is not atomic. It composes multiple specialists:

```
Design {
  Sequence_Designer: generates candidates from target properties
  Structure_Predictor: AlphaFold/ESMFold produces 3D structures
  Property_Estimators: binding, stability, expression predictors
  Synthesis_Feasibility: codon optimization, cost estimation
  
  [Equilibrium: Sequences satisfying all constraints]
}
```

Learn is not atomic. It integrates multiple models:

```
Learn {
  Binding_Model: predicts KD for new sequences
  Stability_Model: predicts thermal stability
  Expression_Model: predicts yield per host
  Mechanism_Reasoner: generates hypotheses from anomalies
  
  [Integration: Unified world model]
}
```

Each specialist exposes standard interface (input → output + uncertainty), can be human, AI, or hybrid, and negotiates with other specialists to reach consensus.

### Current Landscape

Protein property prediction models already exist: ProteinMPNN (sequence design), AlphaFold2 (structure), ESM-IF1 (inverse folding), Rosetta (energy minimization), numerous binding predictors, stability predictors, expression predictors.

Each is a specialist. Current problem: manual integration. Composable infrastructure: standard interface allows automatic composition.

### The Self-Similar Property

Specialists might themselves compose specialists. AlphaFold internally uses: multiple sequence alignment, neural network ensemble, refinement protocols. Each could expose the same compositional interface.

Going down: Campaign → Experiments → Syntheses → Molecular operations. Each level is compositional.

Going up: This program → Department strategy → Institute mission. Same compositional pattern.

The key insight: same interface works at every scale. A "design specialist" might be a single AlphaFold instance (molecular level), a team of computational biologists (lab level), or an entire R&D organization (company level). The compositional pattern is identical. This is what makes the architecture scalable to arbitrary complexity.

## VI. Substrate Independence: Human, AI, or Hybrid

### The Pluggability Principle

Each specialist role can be filled by any capable agent. Not "human vs AI" dichotomy, but a spectrum of configurations:

**All-Human (Standard Today):** Scientist proposes experiments (Design), lab technician executes protocols (Build), technician runs assays (Test), scientist interprets results (Learn).

**Hybrid Configuration (Emerging):** AI generates candidates with human curation (Design), automated synthesis with human monitoring (Build), robotic screening with human validation (Test), AI integration with human insights (Learn).

**AI-Heavy (Possible Future):** AI explores design space autonomously, automated routing to providers, autonomous measurement systems, AI model updates. Human: observes all phases, intervenes when needed.

**Multi-Human Specialist Teams:** Computational biologist (Design), protein engineering specialist (Build), structural biologist (Test), systems biology theorist (Learn). Same compositional structure, all human.

### Why This Matters

Enables gradual automation: start with all-human, automate Build first (robotics), then Test (high-throughput), then Design assistance (AI candidates), then Learn integration (model updates). Never a cliff where "AI takes over."

Preserves human expertise: domain expert can override any specialist, AI recommendations with human decisions, full transparency of reasoning at any level.

Future-proofs architecture: as AI capabilities improve, same infrastructure. As new models emerge, plug in automatically. No rewrite needed when capabilities shift.

### Example Workflow

Human sets intent: "Design antibody binding target X with KD < 10nM, stable at 37°C, expressible in E. coli"

Design phase (hybrid): AI generates 500 candidates, predicts structures, estimates properties. Human reviews top 20, selects 5 based on diversity + confidence.

Learn phase (AI with validation): Models predict 3 sequences likely meet criteria. Uncertainty quantified. Human: "Proceed with top 3. Uncertainty acceptable given budget."

Build phase (automated): AI generates assembly strategy, routes to provider. Automated synthesis executes. Human monitors progress, intervenes if anomaly.

Test phase (automated measurement): AI designs assay protocol. Robotic execution. Human validates data quality.

Final Learn: Models updated with new data. 2/3 met criteria (67% success). Model calibration: predictions accurate. Human insight: "Success. Binding model well-calibrated. Expression model overestimated; needs recalibration."

Next cycle begins with updated models. Throughout: human observes, validates, intervenes. But routine execution automated.

## VII. Infrastructure Requirements

### What Exists Today

Component-level capabilities are production-ready: prediction models (structure, binding, stability, expression), synthesis automation (gene synthesis, cloning, expression), screening automation (plate readers, liquid handlers, SPR, DSF), data storage (cloud databases, LIMS, ELN), compute infrastructure (GPUs, HPC clusters).

### What's Missing: The Assembly Layer

Four critical gaps prevent composition:

### 1. Standard Interfaces

**Current state:** Each model has custom input/output format. AlphaFold expects specific file structure. Rosetta uses different format. Binding predictors have their own APIs. Manual conversion required between each tool.

**Needed:** Compositional interface specification. Every specialist (human or AI) exposes:

```
DBTL Specialist Interface v0.1 (Draft)

Input Schema:
{
  "design_space": {
    "sequences": [array of candidate sequences],
    "constraints": {
      "required_properties": {property: (min, max)},
      "prohibited_motifs": [sequences to avoid],
      "budget": {synthesis_cost: max_usd, timeline: max_days}
    }
  },
  "prior_data": {
    "experimental_results": [previous measurements],
    "model_predictions": [prior specialist outputs]
  }
}

Output Schema:
{
  "predictions": {
    property_name: {
      "value": estimated_value,
      "confidence_interval": (lower, upper),
      "epistemic_uncertainty": model_uncertainty,
      "aleatoric_uncertainty": irreducible_noise
    }
  },
  "recommendations": {
    "top_candidates": [ranked list],
    "rationale": "why these candidates",
    "alternative_approaches": [if main approach seems suboptimal]
  },
  "metadata": {
    "model_version": "for reproducibility",
    "training_data": "applicability domain",
    "known_limitations": [failure modes]
  }
}
```

Any specialist implementing this interface can plug into ecosystem. New models integrate automatically. Old models deprecate gracefully.

Interface handoff verification: When Design hands off to Build, receiving specialist should validate sender output against both formal schema and domain constraints. For example, Build agent checks Design output for synthesis feasibility beyond schema compliance (rare codons, secondary structure issues, known synthesis artifacts). This catches "reconciliation debt"—outputs that pass formal checks but fail domain constraints. This validation step can be embedded in specialist role definitions or made explicit in the equilibrium protocol.

### 2. Equilibrium-Finding Protocols

**Current state:** Decisions made by single person (PI) or ad-hoc consensus.

**Needed:** Formal negotiation framework. When specialists disagree, need protocol for reaching consensus. Multiple approaches possible (selection depends on domain and phase):

```
Option A: Pareto optimization
1. Specialists submit: objective_function(design) + hard_constraints
2. Generate Pareto frontier: solutions where no specialist can improve 
   without worsening another's objective
3. Filter: Eliminate solutions violating hard_constraints 
4. Rank: Weight objectives by priority (configurable)
5. Select: Human chooses from top-ranked, or auto-select if within bounds
6. Convergence: When no specialist proposes changes improving their 
   objective beyond threshold, or iteration budget exhausted, or human override

Option B: Constraint satisfaction
1. Each specialist defines acceptable ranges
2. Search for solutions satisfying all constraints
3. If no solution exists, negotiate constraint relaxation
4. Iterate until feasible solution found or declared impossible

Option C: Auction/market mechanism
1. Specialists "bid" for their preferred solutions
2. Budget allocation based on historical accuracy
3. Winner-take-all or weighted combination
4. Adaptive weights based on prediction performance

Option D: Hybrid with confidence weighting
1. Specialists submit recommendations + confidence
2. High-confidence specialists weight more heavily
3. Human reviews when confidence bounds overlap significantly
4. Automatic proceed when clear winner emerges
```

Practical algorithms exist for these approaches. The gap: applying them to DBTL workflow requires standardizing how specialists express objectives and constraints.

### 3. Orchestration and Routing

**Current state:** Each workflow is custom script.

**Needed:** Intent-to-execution layer. User specifies high-level goal: "Optimize protein X for properties Y, Z." Orchestration layer decomposes into DBTL phases, discovers available specialists, routes to appropriate capabilities, manages execution (parallel where possible), and handles failures (retry, alternative approach, escalate to human).

This is the "marketplace" concept: Intent is "order," specialists are "suppliers," orchestration is "routing." Like AWS Lambda (intent → execution) or Uber (request → fulfillment).

Technical components: service registry (catalog of specialists), capability matching (which specialist handles this task?), load balancing (distribute work), cost optimization (cheapest provider meeting quality threshold).

### 4. Observability and Intervention

**Current state:** Black box automation. Hard to understand why decision made.

**Needed:** Full transparency with intervention capability. At every decision point, human can view current state (data, predictions), inspect reasoning (why did Design propose this?), override decision (use different approach), inject constraints (avoid this region), stop process (pause for reconsideration).

Human notification filtering: As automation increases, a key challenge is preventing cognitive overload while maintaining oversight. Several approaches:

```
Option A: Exception-based alerting
- Human receives alerts only when:
  * Equilibrium violates strategic constraints
  * Prediction error exceeds threshold (model uncertainty > bounds)
  * Resource utilization off-track (budget/timeline deviation)
  * Anomaly detected (result contradicts model significantly)
- Routine operations silent unless queried

Option B: Confidence-gated notifications
- Proactive alerts when specialist confidence drops below threshold
- Silent operation when all specialists report high confidence
- Human defines acceptable uncertainty bounds per project phase

Option C: Strategic review points
- Automated execution within campaign phase
- Human review required at phase transitions
- Anomaly escalation triggers immediate review

Option D: Adaptive notification (learning system)
- System learns which alerts user acts on vs. ignores
- Adjusts notification thresholds based on user response patterns
- Maintains log of all decisions for retrospective audit
```

The principle: distinguish signal from noise. All data available on query, but default is "silent success" for routine operations, proactive alerts for strategic exceptions.

Technical requirements: decision audit trail (log all inputs, outputs, reasoning), real-time dashboard (current state, progress, predictions), intervention APIs (human can inject commands at any point), rollback capability (undo recent decisions if needed).

The non-negotiable: human must never lose visibility or control.

## VIII. The Economic and Incentive Reality

### Why This Is Hard

The primary barrier is not technical feasibility. It's incentive misalignment.

**Model developers** want proprietary advantage (unique capability → competitive edge), citation credit (paper metrics, not infrastructure contribution), and flexibility (rapid iteration without interface constraints).

**Lab automation vendors** want customer lock-in (switching costs maintain revenue), bundled solutions (sell hardware + software + consumables), and differentiation (unique features, not commodity interfaces).

**Research institutions** want publication output (novel results, not infrastructure), grant funding (flashy innovations, not plumbing), and competitive advantage (unique capabilities over rivals).

Standard interfaces threaten all of these.

### The Coordination Problem

Classic commons dilemma: individual benefit from keeping models/protocols proprietary exceeds individual share of collective benefit from standardization. But collective benefit from standardization exceeds sum of individual proprietary benefits.

Example: Lab A develops great binding predictor (keeps proprietary). Lab B develops great stability predictor (keeps proprietary). Both labs would benefit from combining models, but neither wants to share. Result: both labs manually rebuild inferior versions of each other's work. Economically irrational at system level. Rational at individual level given incentives.

### The First-Mover Advantage

The coordination problem creates opportunity for first movers.

**Market position dynamics:** First organization to build composable infrastructure becomes the platform. Like Uber (first mover in rideshare marketplace) vs. later competitors, or AWS (first major cloud platform)—the network effects compound rapidly once critical mass achieved.

**Economic structure:** Platform operator doesn't need to build all specialists. They build the assembly layer (interface standards, orchestration, marketplace). Specialists plug in. Platform captures value through:
- Transaction fees (coordination services)
- Premium features (advanced orchestration, priority compute)
- Data network effects (learning compounds across all users)
- Ecosystem lock-in (switching costs once integrated)

**Thermodynamic economics:** Open standards act as collective entropy sink. Without standards, every lab maintains proprietary translation layers (model A → B → C)—pure integration overhead with no knowledge gain. Standardization externalizes this "integration debt" to the platform substrate, enabling participants to redirect resources from translation to discovery. The collective saves more than any individual sacrifices—but the platform operator captures a percentage of total value creation.

**Why this works:** Small transaction fee × large ecosystem × compounding growth = sustainable business model. Participants pay willingly because integration cost savings exceed fee. Platform sustains infrastructure development from revenue.

**Historical precedent:** 
- Internet protocols (open) + cloud platforms (commercial layer)
- Container standards (Docker open source) + orchestration (Kubernetes, then commercial offerings)
- Payment rails (credit card networks) + payment processors

The pattern: open standard at foundation, commercial coordination layer above. This resolves "who pays for infrastructure" problem while preserving interoperability.

### How to Overcome Adoption Barriers

Requires changing incentive structure through four mechanisms:

**1. Open-source reference implementation.** Someone (academic consortium, foundation, government initiative) builds initial composition layer under permissive license. Provides standard interface specification, reference implementation, initial set of open-source specialists, and validation framework. Consequence: standardization exists. Proprietary models must either adopt (to benefit from ecosystem) or stay isolated (and lose network effects).

**2. Network effects.** Once ecosystem reaches critical mass: value of plugging into standard exceeds value of proprietary isolation. New models default to standard interface (to access users). Virtuous cycle: more specialists → more value → more specialists. Historical precedent: Internet protocols (TCP/IP beat proprietary networks), USB (standard interface beat proprietary connectors), containerization (Docker/Kubernetes beat proprietary deployment).

**3. Credit mechanisms.** Solve the "infrastructure gets no citations" problem: track which models contributed to which discoveries, attribution in publications (used models X, Y, Z), usage metrics (model X used in 1000 studies this year), infrastructure contributions valued alongside novel methods.

**4. Economic benefits exceeding lost proprietary value.** The key argument: small share of large pie exceeds large share of small pie. Proprietary model in isolated ecosystem: 100% control, limited users (high integration barrier), slow adoption. Open model in composable ecosystem: share credit with contributors, many users (low integration barrier), rapid adoption, compound learning. If ecosystem is 10x larger due to composition effects: 10% share of composable ecosystem exceeds 100% of isolated model.

This is not theoretical. We see it in open-source software (Linux, Python ecosystem), scientific databases (PDB, GenBank), and standard protocols (HTTP, SMTP). The transition is always painful. But once critical mass achieved, open standard wins.

## IX. Safety, Oversight, and Regulatory Integration

### The Legitimate Concerns

Autonomous biological engineering raises real risks: biosafety (could automated systems design dangerous organisms?), dual-use (could infrastructure be repurposed for harmful applications?), and loss of human judgment (how to maintain expert oversight as automation increases?). These concerns must be addressed structurally.

### Built-In Safety Properties

The compositional architecture provides inherent safeguards:

**Transparency by Design.** Every decision generates complete audit trail: which specialists participated, what data informed their recommendations, why equilibrium settled where it did, what alternatives were considered and rejected. Can't have unintended behavior hidden in black box. The composition layer makes all reasoning explicit. Practical implementation: structured decision logs (machine-readable + human-readable), versioned snapshots (entire state at each decision point), provenance tracking (every output traces to inputs + code version).

**Human Intervention at Commitment Boundaries.** Physical synthesis and testing represent resource expenditure points. At every commitment boundary, human can review proposed action, inspect reasoning, override (use different approach), or halt (stop process for reconsideration). No autonomous commitment to physical actions. In-silico loops can run automatically, but crossing into physical domain requires human approval. Configurable authorization levels: routine experiments (automated approval within safety bounds), novel designs (human review required), high-risk categories (multiple expert approval), prohibited regions (hard boundaries, cannot proceed).

**Safety Constraints as Structural Properties.** Rather than external checks (easy to bypass), encode safety as structural properties. Sequence safety database: known toxins, pathogens, restricted sequences. Design specialists cannot propose prohibited sequences. Not "check after design" but "constraint during design." Organism classification: BSL-1/2/3/4 requirements, automated routing to appropriately equipped labs. Cannot synthesize BSL-3 agent in BSL-1 facility (rejected by Build specialist). Regulatory compliance: ethics board approval required for certain categories, regulatory reporting automatically generated, compliance gates in workflow (not after-the-fact).

**Distributed Verification.** Multiple independent specialists must agree before proceeding: Design proposes sequence → Build verifies synthesizable → Test verifies measurable → Learn verifies scientifically sensible. No single point of failure. If any specialist flags safety concern, process halts for human review.

### The Irreducible Uncertainty Principle

Biological systems have high intrinsic noise. Every measurement has irreducible uncertainty floor. You cannot know outcomes with infinite precision no matter how sophisticated the model.

Consequence for safety: seeking perfect prediction is structural error. It leads to either paralysis (never act because never certain) or false confidence (ignore uncertainty, act as if certain).

Better approach: quantify uncertainty explicitly. Model prediction: KD = 5nM ± 3nM (confidence interval). If ±3nM is below noise floor for this measurement: acceptable. If ±50nM: more in-silico refinement needed. If prediction: "Could be 1nM or could be 1μM": don't build yet.

Safety decisions require uncertainty quantification: high uncertainty in dangerous region (don't proceed), high certainty it's safe (proceed), moderate uncertainty (additional checks or restricted execution).

### Regulatory Integration

Beyond technical safeguards, need strong regulatory framework:

**Self-regulation:** Ethics review boards for research objectives. Safety protocols adapted from existing biosafety standards (NIH guidelines, WHO recommendations). Data sharing policies (balance IP protection with scientific openness). Community standards enforced through infrastructure (can't bypass if built into platform).

**Government regulation:** FDA/EMA compliance for therapeutic development. USDA/EPA for agricultural applications. Audit trails support regulatory submission (complete provenance from design → product).

**International coordination:** Biosecurity frameworks (prevent misuse across borders). Export controls (restricted capabilities). Global standards for acceptable use.

**Governance mechanisms:** Who can run which experiments? Authorization tiers (trainee, expert, PI, institution). Capability-based access (can only use approved specialists). What oversight for autonomous cycles? Human-in-loop for novel designs. Automated for routine optimization. Escalation triggers (when does automation require human review?). How to update safety boundaries? Regular review (as biological understanding improves). Incident response (if something goes wrong, adjust boundaries). Adaptive regulation (rules evolve with capability).

## X. Implementation Pathway: Gradual Automation

### Phase 1: Human-Driven, AI-Assisted (Current → 2 Years)

Status: Humans control all decisions. AI provides recommendations.

What changes: Models become accessible via standard APIs. Dashboards show AI predictions alongside experimental data. Approval workflows track decisions.

Workflow: AI generates 100 sequence candidates, human selects top 10 to pursue. Human reviews synthesis plan, approves execution, automation carries out. Human designs measurement strategy, robots execute protocols. AI integrates new data, human interprets insights and decides next iteration.

Infrastructure requirements: Model API layer (access AlphaFold, binding predictors, etc.), results dashboards (visualize predictions + data), approval workflow UI (human can review, approve, override).

Adoption barrier: Low. Augments current practice without requiring new skills.

### Phase 2: AI-Guided, Human-Validated (2-5 Years)

Status: AI handles routine decisions. Human validates strategy.

What changes: In-silico Design ⇔ Learn loop runs to equilibrium automatically. AI presents consensus recommendation. Human approves or modifies before physical execution.

Example workflow: AI conducts in-silico rounds (Design explores 1000 variants, Learn evaluates via predictive models, iterate until convergence, present top 5 candidates). Human reviews: "Looks good. Proceed with these 5." Build → Test executes automatically. Results feed back to Learn. AI proposes next round based on results. Human reviews strategy: "Good direction. Continue." or "Unexpected pattern. Let me investigate."

Infrastructure requirements: Multi-agent negotiation protocols, convergence criteria for in-silico loops, strategic approval interfaces (review campaign direction, not individual experiments), anomaly detection (flag when results deviate from predictions).

Adoption barrier: Moderate. Requires trust in AI predictions. Builds gradually as models prove accurate.

### Phase 3: Autonomous Execution, Human Supervision (5-10+ Years)

Status: AI executes full DBTL cycles. Human sets objectives and monitors.

What changes: Multiple autonomous cycles run in parallel. Human specifies high-level goals: "Optimize protein X for properties Y, Z within safety constraints A, B." AI plans and executes campaign. Human monitors real-time dashboard. Intervenes when unexpected results, strategic shift needed, or curiosity demands it.

Example workflow: Human: "Design enzyme with 10x improved catalytic efficiency, stable to 80°C, expressible in E. coli. Budget: $50K, timeline: 3 months." AI conducts campaign: decomposes into 10-15 DBTL cycles, first cycles explore broad design space, middle cycles refine promising leads, final cycles optimize top candidates, automatically routes synthesis to providers and coordinates measurements, updates models continuously as data arrives. Human monitors dashboard: progress toward objectives, resource utilization (budget, timeline on track), model predictions vs. actual results (calibration check), anomaly alerts (unexpected findings).

Intervention scenarios: "Result doesn't match prediction" (AI flags anomaly, human investigates—maybe assay has problem, maybe model wrong, maybe discovery). "Strategy seems suboptimal" (human reviews approach, suggests pivot—"You're stuck in local optimum. Try this region instead." AI adjusts search strategy). "Interesting unexpected result" (human curiosity override—"That wasn't the goal, but it's fascinating. Explore this direction." AI spawns new investigation branch).

Final validation: After 3 months, AI presents: "3 candidates meet all criteria. Recommend candidate B for production." Human reviews full provenance: all experiments conducted, all data collected, model predictions vs. outcomes, safety validation. Human decision: "Approved. Move to scale-up." or "One more verification needed first."

Infrastructure requirements: Mature multi-cycle planning (campaign-level strategy), real-time anomaly detection (flag when things go off-track), deep observability (understand AI reasoning at any level), safety boundary enforcement (hard limits on what can be tried), multi-provider orchestration (coordinate across synthesis vendors, measurement facilities).

Adoption barrier: High. Requires proven track record of Phases 1-2, regulatory frameworks for autonomous biology, cultural shift (trust AI execution, maintain human oversight), economic incentives align (value creation exceeds risk).

### The Non-Negotiable

Even at Phase 3, humans must: set objectives (what are we trying to achieve? why does it matter?), define boundaries (what regions are safe to explore? what's prohibited?), monitor execution (is progress reasonable? any concerning patterns?), intervene at will (override any decision, any time, for any reason), validate outcomes (final check before moving to production/publication).

The goal is not removing humans from biology. The goal is freeing humans from routine execution to focus on strategic thinking, enabling exploration at scale impossible manually, and maintaining human judgment and oversight throughout. Humans shift from executors to directors. Still essential. Different role.

## XI. Why This Matters

### The Current Bottleneck

Biological discovery is slower than necessary because integration overhead dominates. Each lab rebuilds same pipelines. Custom code to connect models. Breaks when tools update. Constant reinvention. Limited exploration: humans can only consider small design space. Physical experiments expensive, leading to conservative choices. Serial execution (one idea at a time per researcher). Fragmented learning: data trapped in individual labs. Publication delays (months to years). Insights don't compound across community.

None of these are fundamental limits. They're infrastructure failures.

### What Composable Infrastructure Enables

**Near-term (2-5 years):** Reduced integration burden through standard interfaces and plug-and-play models. Accelerated iteration via in-silico wormhole (filter before physical testing, 10-100x more variants evaluated in same time/budget). Improved success rate as models improve from every experiment.

Practical outcome: Observed pattern across research groups—manual integration typically limits teams to 2-3 concurrent projects, with context switching and pipeline maintenance dominating researcher time. With composable infrastructure, same teams sustain 6-8 projects by eliminating integration overhead. This represents 3-5x effective productivity gain, not from superhuman ability, but from removing structural waste.

**Medium-term (5-10 years):** Exploration at scale (AI explores millions of designs in silico, physical testing only high-confidence candidates, systematic coverage of design space). Compound learning (every experiment updates all models immediately, cross-lab learning if data sharing enabled, knowledge accumulates exponentially). Democratized capability (small labs access same tools as pharma, best ideas win regardless of resources).

Practical outcome: Discovery rate limited by physical constraints (synthesis speed, measurement throughput), not human cognition.

**Long-term (10+ years):** Biology becomes increasingly predictable within substrate limits. Design with high confidence. Fewer empirical surprises. Engineering discipline emerges from empirical science. Novel applications: problems we currently think intractable become routine engineering challenges. Economic transformation across drug discovery, enzyme engineering, materials science, agriculture, biological carbon capture, bioremediation, and synthetic food production.

## XII. What Already Exists vs. What Needs Building

### Inventory of Available Components

As noted in Section I, component-level capabilities are production-ready:

**Computational models:** Structure prediction (AlphaFold2, ESMFold, RosettaFold2). Sequence design (ProteinMPNN, ESM-IF1, LigandMPNN). Binding prediction (AlphaFold-Multimer, others). Stability (DDG predictors, thermal stability models). Expression (solubility predictors, codon optimizers). Dozens more specialist models.

**Physical automation:** DNA synthesis (Twist, IDT, GenScript commercial providers). Gene assembly (automated cloning platforms). Protein expression (robotic cell culture systems). Purification (automated FPLC systems). Screening (Tecan, Hamilton liquid handlers). Analytics (plate readers, SPR, DSC, DSF all automatable).

**Data infrastructure:** Databases (PDB, UniProt, AlphaFold DB, ChEMBL). Cloud compute (AWS, GCP, Azure with GPU instances). LIMS (Benchling, Dotmatics, commercial options). ELN (multiple commercial and open-source options).

**Workflow tools:** Nextflow, Snakemake (pipeline orchestration). Docker, Kubernetes (containerization). APIs for most major tools. Version control (Git for code/data).

### What's Missing (The Assembly Layer)

Four gaps preventing composition:

**Interface standardization** (Doesn't exist): Need specification for specialist interface (input/output format), reference implementation, validation framework (test that specialist conforms to spec). Estimated effort: 1-2 years, small team. Precedent: Docker specification, Kubernetes APIs.

**Equilibrium-finding protocols** (Research problem): Need multi-agent negotiation framework for DBTL context, convergence criteria (when has equilibrium been reached?), confidence quantification (how certain is this recommendation?). Estimated effort: 2-3 years, research + engineering. Precedent: Multi-objective optimization literature, game theory.

**Orchestration layer** (Engineering problem): Need service registry (catalog of specialists), capability matching (route intent to appropriate specialist), execution marketplace (coordinate across providers), cost/quality optimization. Estimated effort: 2-3 years, engineering team. Precedent: Kubernetes orchestration, AWS Lambda routing, Uber matching.

**Observability infrastructure** (Solved problem, needs adaptation): Need decision audit trail (structured logging), real-time monitoring (dashboard), intervention APIs (human override capability). Estimated effort: 1 year, engineering team. Precedent: Prometheus/Grafana monitoring, distributed tracing.

Total estimated effort: 3-5 years with dedicated team (~10-20 engineers + researchers). Funding required: $5-15M (academic consortium) or $20-50M (commercial venture). This is feasible. Comparable to other successful scientific infrastructure projects (Galaxy Project, CyVerse).

## XIII. Conclusion

### The Core Insight

DBTL has compositional structure. The same pattern that governs individual measurements also governs experiments, campaigns, and programs. This self-similarity enables composition: standardized interfaces work at every scale.

### What This Enables

Near-term: reduced integration overhead, faster iteration, improved success rates. Medium-term: exploration at scale, compound learning, democratized capability. Long-term: biology transitions from empirical science to engineering discipline within substrate limits.

### What Already Exists

All major components are production-ready: specialist models for every phase, physical automation for Build and Test, data infrastructure, compute infrastructure.

### What's Missing

The assembly layer: standard interfaces, equilibrium-finding protocols, orchestration and routing, observability infrastructure. This is not a research moonshot. It's infrastructure engineering using well-understood components.

### The Path Forward

Phase 1 (0-2 years): Interface standardization, reference implementation. Phase 2 (2-5 years): Equilibrium protocols, orchestration layer. Phase 3 (5-10 years): Ecosystem maturation, autonomous execution capability.

### A Viable Path

The technical components exist. The compositional structure is clear. The benefits are quantifiable. What remains is coordination: standards development, reference implementation, ecosystem cultivation. The pieces are ready. The assembly is feasible.

Once established, this infrastructure becomes generative substrate—the foundation not only for designing biological systems, but for redesigning the design process itself. The patterns described here are substrate-independent; their implications extend wherever intelligence operates on complexity.

## Acknowledgments

This article was developed through iterative collaboration with AI assistants (Claude, ChatGPT, Gemini), demonstrating the multi-agent composition it advocates.

### For the Builder Community

If you're working on lab automation platforms, AI models for biology, scientific software infrastructure, or biotech data systems, we invite you to consider whether your component can expose compositional interface, participate in defining standards, build reference implementations, and adopt composable approaches.

### For Researchers and Scientists

If you're running DBTL cycles: do you recognize this pattern in your work? Where does manual integration slow you down? What would accelerate your research if tools could compose easily? Your input shapes what gets built.

### For Funders and Decision-Makers

This infrastructure builds on proven components (lower risk), enables gradual automation (flexible deployment), creates ecosystem effects (compounding returns), and addresses real bottleneck (integration overhead). Investment in this layer multiplies the value of all existing tools.