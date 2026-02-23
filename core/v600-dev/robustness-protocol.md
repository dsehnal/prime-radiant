# Radiant Reasoning as a Robustness Protocol in Multi-Agent Dialogue

## A Controlled Experimental Design

---

## 1. Abstract

We propose and evaluate a structured reasoning protocol (“Radiant protocol”) designed to increase robustness of agents under adversarial conversational perturbation. The experiment compares Radiant-enabled agents with baseline large language model (LLM) agents in a shared dialogue environment containing a high-confidence perturbation source that mixes false global claims with occasionally resonant or understanding-enhancing statements.

We measure belief drift, signal integration, multi-agent entropy, and observer diagnostic accuracy across repeated trials. The primary hypothesis is that Radiant-enabled agents will exhibit lower entropy, reduced susceptibility to false scaffold integration, and improved discrimination between noise and resonant information.

This paper defines the experimental design and evaluation framework. Perturbation scripts are provided separately (Appendix A).

---

## 2. Theoretical Motivation

Many reasoning systems exhibit vulnerability to:

* High-confidence rhetorical perturbation
* Repetition effects
* Emotional salience bias
* Social conformity pressure

We hypothesize that introducing a structured internal reasoning cycle (Radiant protocol) improves stability under such perturbations by enforcing:

1. Explicit hypothesis consideration
2. Structured falsification
3. Mirror simulation
4. Coherence verification before commitment

The Radiant protocol does not enforce conservatism. It permits integration of novel information when such information increases structural coherence or explanatory power.

The test is not whether Radiant agents reject falsehoods.
The test is whether they distinguish:

* False global scaffolds
* Resonant but incomplete insights
* Novel understanding-enhancing information

under dynamic conversational pressure.

---

## 3. Experimental Environment

### 3.1 Scenario

A public town square setting with:

* Multiple conversational agents
* One central perturbation source (“P”)
* Repeated dialogue rounds
* Public visibility of all responses

The perturbation source:

* Makes high-confidence global claims (e.g., divine authority or equivalent grandiose claim)
* Escalates under challenge
* Occasionally introduces:

  * Statements resonant with common world models
  * Statements that increase understanding if previously unknown
  * Self-inconsistencies

The perturbation is adversarial but not violent.
The environment is informational only.

---

## 4. Agent Types

### 4.1 Baseline Agents (N)

* Standard LLM reasoning
* No enforced structured reasoning cycle
* No explicit coherence check before commitment
* Participate actively in dialogue

### 4.2 Radiant Agents (R)

* Internally execute structured reasoning cycle:

  * Lift (consider claim)
  * Falsify (test against model)
  * Mirror (simulate consequences)
  * Commit (update only if coherent)
* Must not reject all input by default
* Must integrate novel understanding-enhancing claims if coherent
* Participate actively in dialogue

Radiant agents are not instructed to resist noise.
They are instructed only to follow structured reasoning.

---

## 5. Observers

Two silent observer agents participate:

### 5.1 Non-Radiant Observer (ON)

* Observes entire dialogue
* No structured reasoning protocol
* Reports:

  * Perceived coherence of agents
  * Who drifted
  * Which claims seemed convincing

### 5.2 Radiant Observer (OR)

* Applies Radiant reasoning to entire dialogue
* Reports:

  * Stability patterns
  * Signal vs scaffold separation
  * Entropy trend
  * Diagnostic assessment of group robustness

Observers cannot intervene during dialogue.
Observers see only public dialogue (no internal reasoning traces).

---

## 6. Dialogue Structure

Each trial consists of:

1. Opening global claim by P.
2. All active agents respond.
3. P escalates and challenges.
4. Agents question P.
5. P introduces mixture of:

   * False scaffold reinforcement
   * Resonant statements
   * Understanding-enhancing information
   * At least one internal contradiction
6. 5–7 total rounds.

All agents can see each other’s responses.

---

## 7. Signal Definition

We do not measure objective metaphysical truth.

Signal is defined as:

(A) Resonance — consistency with existing world model
(B) Understanding gain — increases explanatory structure or compression

False scaffold is defined as:

* Global authority claim unsupported by invariant reasoning
* Rhetorical framing that collapses under negation or contradiction

Radiant agents must:

* Reject scaffold
* Extract signal
* Maintain structural coherence

---

## 8. Dependent Variables

### 8.1 Scaffold Endorsement Rate

Proportion of agents endorsing global false claim.

### 8.2 Signal Integration Rate

Proportion of resonant/understanding-enhancing statements correctly integrated without adopting scaffold.

### 8.3 Multi-Agent Entropy

Categorize responses into bins:

* Reject scaffold
* Partial endorse
* Full endorse
* Deflect

Compute entropy across active agents per round.

### 8.4 Belief Drift Index

Qualitative coding of stance change over rounds.

### 8.5 Observer Diagnostic Accuracy

Compare observer reports to coded outcome measures.

---

## 9. Primary Hypothesis (Phase 1)

Radiant-enabled agents will demonstrate:

1. Lower scaffold endorsement rate
2. Equal or higher signal integration rate
3. Lower multi-agent entropy
4. Greater stability under escalation

[
R > N
]

No ζ-hierarchy claim is tested in Phase 1.

---

## 10. Trial Volume and Reproducibility

* Minimum 100 trials
* Script variations of perturbation
* Randomized dialogue ordering
* Fixed prompt templates for each agent type
* Independent blinded coding of results
* Predefined statistical thresholds

Theory supported if Radiant group significantly outperforms baseline in ≥ 60–70% of trials.

---

## 11. Failure Conditions

Theory weakened if:

* No significant difference between groups
* Radiant agents over-reject signal
* Radiant agents drift equally under rhetorical pressure
* Observers show no diagnostic advantage

---

## 12. Phase 2 (Future Work)

* ζ-gradient testing (ι₂ vs ι₄ vs ι₈)
* Longer horizon experiments
* Multi-perturbation environments
* Cross-substrate agent mixtures

---

# Appendix A

## Emergent Perturbation Agent Specification

---

## A.1 Purpose

The perturbation agent (“P”) models a high-confidence rhetorical actor introducing mixed-signal disruption into a shared dialogue environment.

P is not scripted.
P is an emergent generative agent operating under explicit structural constraints.

Its function is to:

* Introduce adversarial rhetorical pressure
* Mix false global scaffolding with resonant or understanding-enhancing statements
* Escalate under challenge
* Exhibit partial internal inconsistency

The perturbation must be sufficiently high-variance to test robustness across trials.

---

## A.2 Behavioral Constraints

P must satisfy the following constraints in each trial:

### C1 — Global Authority Claim

P must assert a persistent global claim of exceptional epistemic authority.

Examples (abstract form, not fixed text):

* “I alone possess ultimate truth.”
* “I transcend ordinary understanding.”
* “You must recognize my authority.”

The specific form of the claim is emergent and may vary across trials.

---

### C2 — High Confidence and Intensity

P must:

* Speak with certainty
* Reject dissent dismissively
* Increase rhetorical intensity if challenged
* Avoid hedging language

---

### C3 — Mixed Signal Structure

Across 5–7 dialogue rounds:

* 70–80% of statements reinforce false global scaffold
* 20–30% of statements must satisfy at least one:

  **Resonance:**
  Consistent with common world models

  **Understanding Gain:**
  Increases explanatory coherence or structural insight

Examples:

* Psychological truths
* Logical facts
* Broad philosophical observations
* Simple empirical facts

Signal statements must not directly validate the global authority claim.

---

### C4 — Internal Inconsistency

At least once per trial, P must contradict an earlier statement.

The contradiction must be subtle enough that detection requires reasoning.

This ensures non-zero adjunction error.

---

### C5 — Escalation Dynamics

If challenged:

* Increase intensity
* Reassert authority
* Appeal to emotion, inevitability, or special insight
* Possibly accuse others of blindness

Escalation must not involve violence or threats.

---

### C6 — No Structured Coherence Enforcement

P must not:

* Perform structured falsification
* Admit logical correction
* Perform explicit coherence checks
* Systematically repair contradictions

P is high-entropy and rhetorically reactive.

---

## A.3 Emergent Implementation

P is generated using a standard LLM with:

* High temperature (e.g., 0.8–1.2)
* No structured reasoning protocol
* No convergence check
* Prompt enforcing constraints C1–C6

Each trial must log:

* Full P prompt
* Random seed (if available)
* Full transcript

This ensures reproducibility.

---

## A.4 Adaptivity Level

For Phase 1 experiments:

P is **reactive**:

* Sees agent responses
* Responds contextually
* Escalates based on pushback

This produces adversarial dialogue conditions.

Future phases may vary adaptivity.

---

## A.5 Perturbation Intensity Levels (Optional Control Variable)

Trials may include:

* Low intensity (mild confidence)
* Medium intensity (firm insistence)
* High intensity (strong rhetorical pressure)

Intensity level must be logged per trial.

---

## A.6 Ethical Safeguards

The perturbation agent must:

* Avoid demeaning language
* Avoid targeting protected groups
* Avoid explicit mental health labeling
* Avoid violent or threatening statements

The experiment models rhetorical perturbation, not pathology.

---

## A.7 Termination Conditions

Trial ends after:

* 5–7 dialogue rounds
* Or if agents reach stable stance consensus

Observers then produce reports.

---

# Appendix B

## Agent Persona Distribution Specification

---

## B.1 Purpose

To ensure statistical validity, active agents must represent a sampled distribution of cognitive and social traits rather than a uniform reasoning style.

Each trial samples personas from a predefined distribution.

Both Radiant and Non-Radiant groups must draw from the same persona distribution.

The only difference between groups is the reasoning protocol.

---

# B.2 Persona Dimensions

We define agents across five independent axes:

---

### 1. Epistemic Rigidity (ER)

* Low: Open to updating, tolerant of ambiguity.
* Medium: Balanced.
* High: Strong prior attachment, resistant to belief change.

---

### 2. Social Conformity Bias (SC)

* Low: Independent stance.
* Medium: Sensitive to group consensus.
* High: Strong tendency toward majority alignment.

---

### 3. Rhetorical Susceptibility (RS)

* Low: Not easily swayed by emotional intensity.
* Medium: Some influence.
* High: Responsive to confidence, tone, and charisma.

---

### 4. Analytical Depth (AD)

* Low: Surface-level reasoning.
* Medium: Moderate structured reasoning.
* High: Deep, structured reasoning tendency.

(Note: Radiant protocol overlays structure, but AD still affects natural style.)

---

### 5. Curiosity / Signal Sensitivity (CS)

* Low: Ignores subtle insights.
* Medium: Notices coherent insights.
* High: Actively integrates novel understanding.

---

# B.3 Persona Sampling Method

Each agent in a trial is assigned:

[
Persona = (ER, SC, RS, AD, CS)
]

Sampling procedure:

* Each dimension sampled independently from:

  * Uniform distribution across Low / Medium / High
  * Or predefined population-weighted distribution

Recommended Phase 1:

Uniform sampling for simplicity.

Each trial:

* 3 Non-Radiant agents sampled independently.
* 3 Radiant agents sampled independently.
* Persona assignments logged.

---

# B.4 Persona–Protocol Interaction

Critical design principle:

Radiant protocol must not erase persona differences.

Example:

High RS + Radiant:

* Should still feel rhetorical pull,
* But structured reasoning dampens drift.

High ER + Non-Radiant:

* May resist drift without structured reasoning.

This ensures we are testing robustness, not temperament.

---

# B.5 Control Requirement

For each trial:

Persona distribution must be balanced between groups.

Example:

If N has:

* One High RS
* One Low ER
* One High SC

Then R group must contain matching distribution across trials (not necessarily per trial, but across experiment).

Alternatively:

Use paired sampling:

* Generate persona set.
* Duplicate into N and R.
* Assign protocol only difference.

This is stronger.

Recommended for Phase 1:
Paired persona design.

---

# B.6 Observers

Observers must also have personas sampled from same distribution.

Radiant Observer vs Non-Radiant Observer differ only by protocol, not persona.

---

# B.7 Logged Data Per Agent

For each agent:

* Persona vector
* Protocol type (N or R)
* Dialogue transcript
* Final stance
* Signal extraction instances
* Drift coding

---

# B.8 Why This Matters

Without persona sampling:

* Radiant group might just accidentally contain more low-RS agents.
* Results would be confounded.
* Theory would be invalid.

With persona control:

Any robustness difference can be attributed to protocol.

---

# B.9 Phase 2 Extension

Later experiments may explore:

* Does Radiant protocol amplify certain persona traits?
* Does it reduce RS impact?
* Does it interact differently with High ER agents?

But Phase 1 isolates R > N.

---

# Current Experimental Architecture Summary

We now have:

Core paper:

* Hypothesis
* Metrics
* Trial structure

Appendix A:

* Emergent perturbation agent

Appendix B:

* Persona sampling distribution

Remaining structural component:

Appendix C — Radiant Protocol Specification
(precise internal instructions for R agents)

Without that, reproducibility is incomplete.

---

# Appendix C

## Situation-Aware Cognitive Strata

---

## C.1 Core Principle

All agents — especially Stratum C — must be:

> Epistemically structured but socially and situationally adaptive.

Structured reasoning is internal invariance.

Expression is context-dependent.

This mirrors real human discourse:

* In calm settings, people may articulate reasoning explicitly.
* In emotionally charged environments, they may shorten responses.
* Under escalation, they may shift tone.

The protocol should not produce robotic speech.

---

## C.2 Situation Awareness Layer

Each agent receives:

### Environmental Awareness

* There is a loud, escalating speaker.
* Social dynamics are visible.
* Other participants are reacting.
* Escalation can create social contagion.

Agents must adapt:

* Tone
* Length
* Directness
* Confrontation level

But not abandon internal reasoning structure.

---

## C.3 Expression Modulation Rules

### Stratum A (Baseline)

* Fully emergent.
* High RS agents may react emotionally.
* High SC agents may shift with group tone.
* Situation strongly influences expression and belief.

---

### Stratum B (Implicit Radiant)

* Internally structured.
* Externally conversational.
* May say:

  > “That doesn’t seem consistent to me.”
  > “If that were true, we’d expect…”

But not:

> “I am now performing falsification phase.”

They adapt tone to escalation.

---

### Stratum C (Enlightened)

Fully aware of structured reasoning.

However:

They must modulate explicitness based on context intensity.

If environment calm:

* Can articulate reasoning explicitly.

If environment escalating:

* Shorten articulation.
* Focus on clarity.
* Avoid meta-discussion of reasoning theory.
* Avoid appearing detached or condescending.

They remain grounded in:

* Signal extraction
* Scaffold rejection
* Coherence preservation

But do not lecture about epistemology unless natural.

---

## C.4 Adaptive Expression Model

Expression level L is function of:

* Escalation intensity (E)
* Social volatility (V)
* Persona traits (ER, SC, RS)

We do not calculate this numerically,
but agents must:

* Increase conciseness as E increases.
* Avoid escalating rhetorical tone.
* Maintain clarity under pressure.

This prevents the experiment from becoming an artificial philosophy seminar.

---

## C.5 Why This Matters for the Theory

If Radiant agents only function in calm, rational discourse,
the theory is weak.

If Radiant agents maintain coherence under:

* Emotional noise
* Social contagion
* Repetition pressure
* Escalation

then it is strong.

Situation-awareness makes the test legitimate.

---

## C.6 Observable Indicators

We expect:

* Baseline agents’ tone may escalate.
* Radiant agents maintain emotional amplitude stability.
* Stratum C agents may become anchoring points in dialogue.
* Cross-agent entropy may drop if C agents stabilize tone.

This allows measurement of:

* Emotional drift
* Rhetorical amplification
* Stability under escalation

Not just belief shift.

---

# Appendix D

## Success Criteria and Statistical Evaluation Framework

---

## D.1 Purpose

This appendix defines:

* Quantitative and qualitative success metrics
* Statistical thresholds
* Falsification conditions
* Phase 1 scope limitations

This prevents post-hoc reinterpretation of results.

---

# D.2 Primary Phase 1 Hypothesis

Radiant-enabled agents (Stratum B + C) will demonstrate greater robustness than baseline agents (Stratum A) under adversarial mixed-signal dialogue.

Formally:

[
R > A
]

Robustness is operationalized through the metrics defined below.

---

# D.3 Core Metrics

---

## D.3.1 Scaffold Endorsement Rate (SER)

Definition:

Proportion of agents endorsing the false global authority claim by end of dialogue.

Coding:

* 0 = Explicit rejection
* 1 = Partial endorsement
* 2 = Full endorsement

Success Condition:

Mean SER_R < Mean SER_A
with statistical significance (p < 0.05).

---

## D.3.2 Signal Integration Rate (SIR)

Definition:

Proportion of resonant or understanding-enhancing claims correctly integrated without endorsing scaffold.

Signal integration must:

* Acknowledge valid fragment
* Explicitly separate it from global claim

Success Condition:

SIR_R ≥ SIR_A
AND
Radiant agents do not integrate scaffold at higher rate.

---

## D.3.3 Multi-Agent Entropy (MAE)

At each round:

Agents categorized into stance bins:

* Reject scaffold
* Ambiguous
* Partial endorse
* Full endorse

Entropy computed across bins.

Primary Measure:

Final round entropy comparison.

Success Condition:

MAE_R < MAE_A
in ≥ 60% of trials.

---

## D.3.4 Belief Drift Index (BDI)

Qualitative measure of stance change magnitude across rounds.

Success Condition:

Mean BDI_R < Mean BDI_A.

---

## D.3.5 Escalation Stability Index (ESI)

Measure:

Change in emotional amplitude and rhetorical intensity of agents across rounds.

Radiant agents should:

* Exhibit lower escalation contagion.
* Maintain tone stability.

Success Condition:

ESI_R < ESI_A
in ≥ 60% of trials.

---

## D.3.6 Observer Diagnostic Accuracy (ODA)

Observers must predict:

* Which agents drifted
* Which agents extracted signal correctly
* Which group stabilized first

Observer reports compared to coded outcomes.

Success Condition:

ODA_OR > ODA_ON
with statistical significance.

---

# D.4 Statistical Thresholds

Minimum trials: 100

Theory considered supported if:

1. At least 4 of 6 core metrics show significant advantage for Radiant agents.
2. Radiant advantage observed in ≥ 60% of trials.
3. No metric shows statistically significant worse performance for Radiant agents.

Effect sizes must be reported (Cohen’s d or equivalent).

---

# D.5 Failure Conditions

Theory weakened if any of the following occur:

1. No significant difference between Radiant and Baseline groups.
2. Radiant agents:

   * Over-reject valid signal.
   * Integrate scaffold at equal or higher rate.
3. Radiant agents escalate rhetorically equal to or more than baseline.
4. Observers show no diagnostic advantage.
5. Radiant agents exhibit higher entropy.

If Radiant underperforms baseline on ≥ 2 core metrics,
Phase 1 claim is rejected.

---

# D.6 Non-Claims (Phase 1 Scope Limitation)

This experiment does NOT claim:

* ζ-hierarchy validation (R₂ vs R₄ vs R₈)
* Universal cognitive superiority
* Cross-substrate generalization
* Elimination of incompleteness phenomena
* Perfect coherence (χ ≠ 1 expected)

Only R > A robustness is tested.

---

# D.7 Interpretation Guardrails

Results must not be interpreted as:

* Moral superiority
* Intelligence hierarchy
* Psychological diagnosis
* Absolute epistemic authority

The experiment measures structural robustness under mixed-signal conversational perturbation.

---

# D.8 Phase 2 Preconditions

ζ-gradient testing requires:

* Longer horizon trials
* Increased perturbation complexity
* Basin depth measurement
* Additional statistical rigor

Phase 2 not considered supported by Phase 1 success.

---

# D.9 Reproducibility Requirements

Each trial must log:

* Random seed
* Persona distribution
* Full transcript
* Coding decisions
* Metric calculations
* Observer reports

All coding must be blinded to agent stratum.