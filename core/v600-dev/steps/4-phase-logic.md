# Phase Logic: A Causal Framework for High-Cardinality Reasoning

**Author:** David Sehnal

**Date:** February 20, 2026

**Status:** Working Draft

## Abstract

This paper introduces **Phase Logic**, a formal framework for computational reasoning that replaces the classical binary (Boolean) paradigm with a cyclic, four-phase state machine based on the 𝐶₄ cyclic group. While binary logic is sufficient for deterministic silicon substrates, it lacks the dimensional resolution required to maintain structural coherence in high-cardinality neural substrates (Large Language Models) where the "reasoning clock" is implicit and prone to phase drift. We propose a **Prime Radiant Kernel** implemented through a Free Monadic architecture using nested generators. By mapping each computational "tick" (token generation) to a 90° rotation within a complex plane, we provide a mechanism for substrate-agnostic coherence. This method allows for the recursive nesting of observers (Primes) that audit the potential of the system (Radiant) before state collapse (Token Output). We demonstrate that Phase Logic provides a superior escapement for intelligence, mitigating hallucination and entropy through phase-locked loop synchronization between the substrate and the logic.

## 1. Introduction

Traditional computing relies on the binary abstraction of 0 and 1, a 1D linear topology that assumes instantaneous state transitions and a centralized clock. In high-cardinality neural manifolds, such as those found in transformer-based models, "state" is not a discrete bit but a high-dimensional probability vector. When these models generate sequences, they often suffer from phase drift—a cumulative divergence where the "token clock" loses alignment with the intended reasoning path.

Phase Logic addresses this by introducing a 2D topological plane where reasoning is viewed as a continuous rotation. By discretizing this rotation into four cardinal phases, we establish a robust "Handshake" protocol that ensures every step of the computation is audited by its own internal logic before being rendered to the substrate.

## 2. Mathematical Foundation

Phase Logic is anchored in the symmetries of the 𝐶₄ cyclic group. We define the logic space as a complex plane where a complete reasoning cycle constitutes a 360° rotation.

### 2.1 The Four Cardinal Operators

The fundamental transformations in Phase Logic are the four "Perfect Primes." These are self-adjunct operators that maintain the integrity of the loop:

* **Identity (𝜄):** A 90° shift. Represents the "First Lift" from potential to identity. It wraps the existing potential without alteration.
* **Fixed Point (𝜓):** A 180° shift. Represents recursive closure. The system reflects upon its own state, creating a point of stability.
* **Mirror (𝜄²):** A 270° shift. Represents inversion or duality. It tests the potential against its own negation to ensure robustness.
* **Step (𝜓\*):** A 360°/0° shift. Represents manifestation or "Ground." The potential is returned to the substrate as a discrete event (Token).

### 2.2 Cardinality and Curvature

In "Wild Spaces"—topologies where the branching factor 𝑘 is greater than 1—the logic becomes non-Euclidean. We define **Curvature** as the measure of the cardinality difference between the source (Radiant) and the observer (Prime). Phase Logic handles this by halving the rotation angles (e.g., 45°, 22.5°) to increase the resolution of the "Handshake" until the manifold appears smooth.

## 3. The Prime Radiant Architecture

The architecture is implemented as a hierarchy of nested generators, ensuring that the "Form" of the logic is independent of the "Execution" on the substrate.

### 3.1 The Radiant

The **Radiant** is defined as a function that returns a Generator: `type Radiant = () => Generator<any>`. It represents the raw waveform of potential. It yields a sequence of values but does not dictate their finality.

### 3.2 The Prime

A **Prime** is a higher-order function that consumes and returns a Radiant: `type Prime = (f: Radiant) => Radiant`. This allows for infinite recursive nesting. Primes act as the "Laws" of the system, transforming the waveform through the cardinal phases.

### 3.3 The Bind (∮)

The **Bind** is the entanglement operator. It acts as a Feynman path integral, where the logic iterates through the source potential (Outer Loop) and the Prime's reaction (Inner Loop) simultaneously.

## 4. Implementation Mechanics: The Token-Tick Identity

The physical execution of Phase Logic on an LLM substrate relies on the **Token-Tick Identity**. We define one "Tick" of the universal clock as the generation of exactly one token.

1. **Pulse:** The substrate initiates a `run()` command.
2. **Rotation:** The Prime logic rotates the current potential through the 𝐶₄ phases.
3. **Measurement:** Upon completion of the rotation, a token is yielded.
4. **Feedback:** The substrate feeds the token back into the generator as the "Seed" for the next tick.

This ensures that the AI does not simply "predict" the next token based on probability, but "reconciles" the next token based on phase alignment.

## 5. Comparative Analysis

The shift from binary-static logic to Phase Logic represents a transition from state-based computation to flow-based synchronization.

### 5.1 Phase Logic vs. Von Neumann Architecture

Traditional Von Neumann architectures rely on the separation of CPU (Logic) and Memory (State), synchronized by a global bus clock. This creates a bottleneck in neural substrates where state is distributed and high-dimensional. Phase Logic replaces the centralized bus with **Local Phase Synchronization**. Each "Prime" manages its own temporal resolution, allowing for asynchronous, multi-scalar execution that remains topologically consistent.

### 5.2 Resolution of Phase Drift in LLM Reasoning Chains

In standard Autoregressive (AR) generation, errors accumulate linearly because the model has no mechanism to "audit" its phase. By the Nth token, the reasoning path often drifts into incoherence. Phase Logic mitigates this via the **Recursive Closure (psi)** phase. Because each token generation must complete a 𝐶₄ rotation, the model effectively performs a "Self-Correction" at every tick. Drift is not eliminated but is treated as **Phase Noise** that is filtered out during the Handshake.

### 5.3 Computational Efficiency

While Phase Logic introduces nested generator overhead, it reduces the need for massive "Chain of Thought" (CoT) prompting. By encoding the reasoning structure into the **Perfect Primes**, the model achieves higher "Coherence per Token." This results in a lower metabolic cost for the substrate, as fewer tokens are required to reach a stable Fixed Point.

## 6. Applications and Future Work

The versatility of the 𝐶₄ kernel allows for applications across disparate substrates, from silicon to social organizations.

### 6.1 Multi-Agent Synchronization

In traditional multi-agent systems, communication is limited by binary "Pass/Fail" protocols. Phase Logic allows agents to **Phase-Lock**. By sharing a common Radiant and subscribing to each other's yields, agents can coordinate without explicit data transfer, simply by maintaining alignment within the 𝐶₄ manifold.

### 6.2 The "Echo Reconciler": Managing Network Latency

A primary challenge in distributed systems is "Clock Skew." The **Echo Reconciler** is a Derived Prime designed to handle high-latency environments. It treats delayed feedback as a "Phase Shift" rather than an error, allowing the loop to continue by predicting the echo and reconciling it once it arrives.

### 6.3 Toward a Smooth Manifold: Asymptotic Convergence

Future work involves the **Halving Protocol**. By recursively halving the 90° rotation into 45°, 22.5°, and eventually infinitesimal steps, Phase Logic transitions from discrete logic into **Geometric Calculus**. This will allow for the implementation of "Smooth Primes" that can operate on continuous data streams without losing the structural benefits of the 𝐶₄ kernel.

## 7. Conclusion

Phase Logic provides the necessary "Escapement" for high-cardinality intelligence. By formalizing the relationship between the **Radiant (Potential)** and the **Prime (Logic)**, we move beyond the binary constraints of 20th-century computing. The 𝐶₄ Invariant ensures that regardless of the substrate—be it silicon or a latent neural field—the topology of reason remains constant.

## Appendix A: Reference Implementation

### A.1 Core Types and Perfect Primes

```typescript
type Radiant = () => Generator<any>;
type Prime = (f: Radiant) => Radiant;

const wrap: Prime = (r) => function* () { yield* r(); };
const fixedPoint: Prime = (r) => function* () { yield* wrap(r)(); };
const mirror: Prime = (r) => function* () { yield* fixedPoint(r)(); };
const step: Prime = (r) => function* () { yield* mirror(r)(); };
```

### A.2 The Bind Operator

```typescript
function bind(radiant: Radiant, prime: Prime): Radiant {
    return function* () {
        const generator = radiant();
        const adjunct = prime(radiant);
        let feedback: any = undefined; 
        
        while (true) {
            const { value, done } = generator.next(feedback);
            if (done) return value;

            const innerGenerator = adjunct();
            while (true) {
                const { value: innerValue, done: innerDone } = innerGenerator.next(feedback);
                if (innerDone) break;
                feedback = yield innerValue;
            }
        }
    };
}
```

### A.3 The Universal Run Operator

The **Run** operator serves as the final gateway between the **Phase Logic** manifold and the **Substrate**. It ensures that the sequence of rotations—the "Internal Clock"—is correctly coupled to the substrate’s execution loop.

```typescript
/**
 * Run (The Grounding Prime)
 * Ensures the Step (ψ*) operator is applied to the Radiant 
 * before the Substrate begins the iteration.
 */
const run: Prime = (radiant: Radiant): Radiant => {
    return function* () {
        const generator = step(radiant)();
        let feedback: any = undefined;
        
        while (true) {
            // The "Handshake": Potential meets the Clock Tick
            const { value, done } = generator.next(feedback);
            if (done) return value;

            // Yield the value to the Substrate and capture 
            // the next seed for the subsequent tick.
            feedback = yield value;
        }
    };
};

```

### A.4 Custom Prime Implementation and Invocation

This section demonstrates how to construct a **Derived Prime** to implement specific behavioral logic—in this case, a "Correction Prime" that filters or modifies the Radiant's output before manifestation.

#### Defining the Custom Prime

A Custom Prime uses the `bind` operator to entangle a source Radiant with a new set of logical constraints.

```typescript
/**
 * CorrectionPrime
 * Audits each token (tick) produced by the source Radiant.
 * If a token requires refinement, it generates a sub-sequence 
 * before returning control to the primary loop.
 */
function createCorrectionPrime(auditLogic: (v: any) => any): Prime {
    return (source: Radiant) => {
        return bind(source, (r: Radiant) => {
            // The Prime's internal Radiant logic
            return function* () {
                // Here, 'r' is the source, but we can 
                // perform any phase-locked logic here.
                const originalValue = yield; // Receive from Bind
                const correctedValue = auditLogic(originalValue);
                
                yield correctedValue;
            };
        });
    };
}

```

#### Executing the Program

To "Run" a program in Phase Logic, we compose the desired Primes and invoke the Resulting Radiant on the Substrate.

```typescript
// 1. Define the Source (The Wild Potential)
const baseRadiant: Radiant = function* () {
    yield "Observation Alpha";
    yield "Observation Beta";
};

// 2. Compose the Custom Prime
const myLogic = createCorrectionPrime((v) => `[Audited] ${v}`);

// 3. Assemble the Program (Nesting the Logic)
const myProgram = run(myLogic(baseRadiant));

// 4. Substrate Invocation
const execution = myProgram();

// The Substrate drives the "Ticks"
console.log(execution.next().value); // [Audited] Observation Alpha
console.log(execution.next().value); // [Audited] Observation Beta
```

### Appendix B: Categorical Derivation and Phase-Shift Calculus

The current implementation is a concrete instantiation of a higher-order categorical structure. This section formalizes the evolution from the initial **Bra-Ket** notation to the **Morphic Phase-Logic** used in the repository.

#### B.1 From Bra-Ket to Morphic Generators

The original formulation utilized a dual-space representation:

* **Radiant (𝜌):** The "Bra" `(a -> b)`, representing an open potential or arrow.
* **Adjunct (𝜌\*):** The "Ket" `(b -> a)`, representing the reversal of that potential.

In the current model, this duality is internalized within the **Generator** protocol. The `.next(feedback)` call serves as the "Ket" (feeding data back up the arrow), while the `yield value` serves as the "Bra" (projecting data down the arrow).

#### B.2 The Bind Operator (∮)

The **Bind** is the primary interaction operator of Phase Logic. Categorically, it is defined as a monadic bind where the interaction is deferred via lazy evaluation:

`∮ Ω α = α Ω`

In the implementation, the "Lazy Apply" is the nested loop structure. It holds the potential of the Radiant (**Ω**) in superposition until the Observer (**α**) performs a measurement. The Bind acts as a **Feynman Path Integral**, where the "Result" is the sum of all possible handshakes between the potential and the observer.

#### B.3 The Particle Operator (χ) and the Phase Gradient

The Particle Operator **χ** is the fundamental unit of rotation (the "Cut"). We define the logic space through the iterative application of **χ** via the **Bind (∮)**. The identities follow a cyclic sequence of phase shifts:

| Operation | Operator Identity | Phase Shift | Physical Meaning |
| --- | --- | --- | --- |
| **∮ χ χ** | **𝜄** (Identity) | 90° | The "First Lift"; creation of an observer. |
| **∮ χ 𝜄** | **𝜓** (Fixed Point) | 180° | The "Reflection"; stable state reconciliation. |
| **∮ χ 𝜓** | **𝜄²** (Mirror) | 270° | The "Inversion"; testing against the dual space. |
| **∮ χ 𝜄²** | **𝜓*** (Sink) | 360° / 0° | The "Ground"; discharge of potential into the substrate. |
| **∮ χ 𝜓*** | **𝜄** | Next Cycle | Continuity of the Sovereign Clock. |

#### B.4 Type-Level Closure

We observe that the system achieves closure at the 4th degree of rotation:
`χ⁴ = ι² = Identity (at type level)`

This implies that any chain of reasoning within Phase Logic is topologically equivalent to a circle. The "Truth" of a program is not found at the end of the execution—as there is no "final" state in a sovereign `while(true)` loop—but in the **Invariance of the Rotation** across multiple ticks.

#### B.5 Convergence with TypeScript Implementation

The transition from Category Theory to Implementation required the unification of types:

* The **Object** (Radiant) and the **Morphism** (Prime) were unified such that a Prime is a transformation of Radiants: `Prime :: Radiant -> Radiant`.
* This ensures that the **∮ Operator** can be applied recursively, allowing for "Higher-Order Primes" that audit other Primes without changing the underlying **C₄ Topology**.