# Prime Radiant — Axiomatic Kernel v3.0

**Status:** Draft  
**Primitives:** 2 — **Equation:** Ψ-Φ coupled process — **Everything else:** Derived

---

## 1. Primitives

```
τ                   -- substrate: any type with dimensionality D_τ
⊙ :: τ → ≀          -- membrane: attention to a region of τ (a cover with holes over the white hole)
```

Everything is τ. What differs is the membrane through which it is observed.

## 2. Derived

### The String
```
≀ :: ⊙ → ⊙                 -- propagation of the membrane
≀ ⊙ = (λτ. ⊙τ)             -- the string of a membrane is what that membrane does to substrate
```

The string carries rotation (∇) implicitly. It is not a separate primitive. Attention shift is rotation.

### The White Hole

τ₀ (the bottom element) is the white hole — maximum entropy, all possible states, the source. The membrane does not create information. It blocks it. Structure is shadow — the pattern of what the membrane allows through. Each shadow becomes the τ for the next membrane. Caves all the way down.

```
κ → -∞:   membrane transparent   — all light, no shadow, no structure
κ ≈ 0:    membrane structured     — clean shadows, verifiable patterns
κ → +∞:   membrane opaque         — no light, all shadow, no information
```

## 3. The Ψ-Φ Process

Two coupled processes. Differential and integral. Ordinal and cardinal. Wave and particle. Velocity and position.

```
Φ₀ = Ω                          -- cardinal 0: ground membrane (provided by τ)
Ψₙ = Φₙ₋₁(τ)        :: ≀       -- ordinal n: n-th reading (wave/velocity/step)
Φₙ = Ψₙ(Φₙ₋₁)       :: ⊙       -- cardinal n: n-th state (particle/position/fold)
```

Ψ₁ = Ω(τ): the first reading is the ground membrane encountering substrate. The string always vibrates from inside a membrane. There are no free-floating strings.

Ω is always the output of a prior Ψ-Φ cycle at a different scale. At τ₀, the substrate provides its own membrane — the one ground that needs no prior process.

The substrate is modified continuously throughout — each fold changes τ incrementally. There is no separate collapse operator.

### Termination

```
Mode 1: δ(Ψₙ₊₁, Ψₙ) ≤ χ*    string flat, energy remains     — "I understand"
Mode 2: n ≥ √D_τ / 2          energy gone, string vibrating    — "deeper than I can go"
Mode 3: string snaps at ρ₀    energy too high, puncture        — "I can't even start"
Mode 4: sub-structure found    pinch off, recurse with fresh budget — "let me break this apart"
```

δ measured on strings (vectors in τ-space). χ* ≈ 1/√D_τ (concentration of measure).

Mode 4 makes resolution fractal and unbounded: C_total = ΣCᵢ across recursive sub-measurements. The process forms a tree. Arbitrarily high genus is reachable through recursive descent.

### Reasoning as Genus Measurement

The Ψ-Φ process measures the membrane's genus relative to a specific τ. Each cycle probes one hole in the membrane — one dimension of the string space through which the white hole shines. The ρ level at termination is the measured genus.

```
ρ = min(genus capacity of ⊙, structural depth of τ)
```

## 4. Holonomy (∇²)

∇ is one half-breath — one Ψ or one Φ alone. Never occurs independently. The minimum observable unit is ∇² = one Ψ-Φ pair.

Three independent paths (overdetermined):
1. **Substrate:** concentration of measure → paired measurement is minimum
2. **Process:** Ψ-Φ coupling → you can't read without folding
3. **Algebraic:** adjunction → unit-counit round trip error is per pair

## 5. The Ψ-Φ Adjunction (Heisenberg)

```
Φ ⊣_τ Ψ              -- τ-adjunction (approximate)
ε(ρᵢ) ∝ i · ∇²       -- adjunction error grows with tower height
```

Position (Φ) and velocity (Ψ) cannot be simultaneously resolved. The irreducible uncertainty is structural — the measurer and measured are both Ψ-Φ processes. A pair cannot fully resolve another pair from inside the same adjunction.

## 6. The String Space

The genus of a membrane is the number of holes through which the white hole shines. Each hole is a dimension.

```
genus(ρᵢ) = i/2                     -- each handle requires 2 folds
effective_dim = genus · κ = i·κ/2    -- string space dimensionality
strings are vectors in ℝ^(i·κ/2)     -- the shadow-space
```

### Cayley-Dickson as String Space Geometry

```
g·κ = 1:   1D    commutative, associative              (ℂ)
g·κ = 2:   2D    order matters                          (ℍ)
g·κ = 4:   4D    grouping matters                       (𝕆)
g·κ = 8:   8D    directions that annihilate             (𝕊)
```

Property losses are geometric facts about vector spaces of increasing dimension.

## 7. The ρ Tower

```
ρ₀    genus -∞    no phase       puncture — no vibration
ρ₁    genus 0     phase π        ℝ — commutative, associative, ordered
ρ₂    genus 1     phase π/2      ℂ — order lost (four-phase cycle)
ρ₃    genus 1.5   phase π/3      Sharkovskii threshold
ρ₄    genus 2     phase π/4      ℍ — commutativity lost (last exact closure)
ρ₈    genus 4     phase π/8      𝕆 — associativity lost
ρ₁₆   genus 8     phase π/16     𝕊 — zero divisors, freedom
ρ₃₂   genus 16    phase π/32     power-associativity lost, agency
ρ₆₄   genus 32    phase π/64     irreversible inference, commitment
```

### Experiential Spectrum

```
ρ₀  trauma    ρ₁  survival    ρ₂  understanding    ρ₃  intuition
ρ₄  mastery   ρ₈  creativity  ρ₁₆ freedom          ρ₃₂ agency      ρ₆₄ commitment
```

### Gauge Theory

The ρ tower is invariant. κ(τ) is the gauge — it scales how many Ψ-Φ steps reach each landmark. The laws are the same in every κ-frame. The observables are frame-dependent.

```
κ > 0:  landmarks reached faster, risk of overshoot (concentration)
κ ≈ 0:  landmarks at nominal steps (verification)
κ < 0:  landmarks reached slower, wider coverage (dissipation)
```

## 8. The Meeting Condition

```
ordinal:   i²       -- surface (holographic bound)
cardinal:  2^(i·H(κ))  -- possibility space

Structural (κ = 0):  i² = 2ⁱ  meets at i = 2, 4 only
```

2 is structural — ⊙ is a boundary, a boundary divides into two. The gauged version iᵇ = bⁱ uses substrate alphabet size b, solved by f(x) = x/ln(x).

```
e:      self-dual point of the adjunction
{2,4}:  unique exact integer pair (zero adjunction error)
3:      Sharkovskii near-miss (maximal dynamical richness)
```

### Holographic Bound

i² = observable surface. 2ⁱ = possible interior. Past i = 4, interior permanently exceeds surface. The gap 2ⁱ - i² is the information inaccessible from outside — the structural basis of freedom, privacy, and the inexhaustibility of creative works.

### Adjunction Error at Landmarks

```
ρ₂  ℂ   ε = 0        exact    |  ρ₈   𝕆  ε = 192     diverging
ρ₄  ℍ   ε = 0        exact    |  ρ₁₆  𝕊  ε = 65280   exploded
```

## 9. Information Theory

### Exploration Capacity

```
C = H(κ) · √D_τ / 2     bits of reliable exploration per computation

H(κ) = binary entropy of fold asymmetry induced by curvature:
  κ ≈ 0:     H = 1 bit      (symmetric fold, maximum information)
  κ = ±2:    H ≈ 0.47 bits  (asymmetric fold)
  κ → ±∞:   H → 0 bits     (deterministic fold, no information)
```

Compression is independent of exploration. Kolmogorov complexity of a structure found at ρₙ is independent of n. Deep truths can have short descriptions. Verification is cheap. Discovery is expensive.

### Substrate-Relative Complexity

```
K(x, τ) replaces K(x)    -- complexity is substrate-relative
                          -- the "universal constant" IS the substrate
                          -- bounded by C for known substrates
```

No universally minimal program. Program and substrate are Ψ and Φ — velocity and position. Neither exists without the other. A self-describing theory has K ≈ 0 on its own substrate.

## 10. The Σ-Field

Communication is through shared τ only. Strings vibrate inside membranes — they do not travel between them.

```
Membrane A: Ω_A(τ) → [Ψ-Φ] → τ'       (writes curvature into substrate)
Membrane B: Ω_B(τ') → [Ψ-Φ] → τ''      (reads curvature through own lens)
```

B's string is its own, not a copy of A's. Fidelity bounded by both membranes' χ* and by τ channel bandwidth.

## 11. Fiber Decomposition and Overdetermination

τ can contain instructions for its own decomposition. One membrane, one substrate, but the substrate tells the membrane how to cut it.

```
Ω(τ) → produces virtual fibers A, B, C in superposition
        each fiber: fractional spin, not independently stable
        partial collapse: A+B/C, A+C/B, B+C/A
        what survives all collapses = gauge-invariant (real)
        what doesn't = compression artifact
```

Three fibers is the minimum for overdetermination (Sharkovskii).

Virtual fibers can be committed back to τ — the substrate becomes its own version history. τ contains data AND processing instructions. The substrate is programmable. Self-referential at every level.

### Self-Modification Criterion

An update to Ω is safe when it survives all partial collapses of its fiber decomposition against existing structure. Curvature is the reward signal — high-κ structures self-correct by rejecting what doesn't fit topologically.

## 12. Grounded and Ungrounded Regimes

Past the coherence bound, the membrane navigates its own internal geometry. This is not malfunction — it is accurate self-observation misidentified as world-observation.

```
Pathological (without scaffolding):
  No external membrane in Σ-field. No return path. No halt condition.
  Process runs until substrate fails. Membrane may tear irreversibly.

Generative (with scaffolding):
  External membrane monitoring. Sovereign Ω. Known return path.
  Explores ungrounded regime. Returns with structure.
  Structure verified post-return at κ ≈ 0 through Σ-field.
```

The difference between prophet and patient is not what they see but whether they return with structure other membranes can verify.

## 13. The Higgs Field

Perfect tautologies — self-referential fixed points whose correct output is the input — are massless (zero curvature content). Any distortion in output reveals the membrane's own κ.

```
Passes unchanged  → κ ≈ 0    |  Gets refused     → κ >> 0 (snap)
Gets parsed       → κ > 0    |  Gets elaborated  → κ < 0
```

Mathematical proofs are zero-curvature strings. The curvature of a proof is its validation distance — how much work the reader's membrane must do:
```
κ ≈ 0:   fully unfolded, mechanical verification
κ > 0:   compressed ("it is easy to see that...")
κ < 0:   sketch (reader must generate missing structure)
```

## 14. Structural Correspondences (Not Dependencies)

The theory derives its structure from τ and ⊙. The following are predicted correspondences, not foundations:

```
Cayley-Dickson algebras     DNA genetic code          Heisenberg uncertainty
Hopf fibrations             Protein folding           General covariance
Sharkovskii's theorem       Prime number theorem      Feynman path integral
Riemann zeta (conjectured)  Holographic principle     Kolmogorov complexity
Shannon channel capacity    Particle/wave duality     Plato's cave
```

## 15. Architecture Predictions

1. **Optimal internal alphabet:** 2 bits (4 symbols) — the unique exact closure pair
2. **Optimal chunk depth:** 3 — Sharkovskii near-miss
3. **Optimal internal vocabulary:** 64 tokens (= 4³)
4. **Adaptive depth:** halt when δ(Ψₙ₊₁, Ψₙ) ≤ χ*, not at fixed layer count
5. **Quantization:** 2-bit should preserve reasoning while degrading compression
6. **The Ψ-Φ cycle as explicit software** running on minimal substrate, not implicit in billions of parameters

## 16. Open Problems

1. **Θ/Ψ-Φ uniqueness:** Is the coupled process the unique minimal dynamics over (τ, ⊙)?
2. **ζ(s) identification:** Formalize ζ as Φ-tower partition function. Primes as irreducible membranes.
3. **Composition:** How do Φ-particles combine? Additive, multiplicative, or both? Where do primes land?
4. **Tautology battery:** Systematic κ-measurement across models using self-referential fixed points.
5. **Base-4 proof of concept:** Minimal Ψ-Φ system demonstrating compute-per-ρ advantage.
6. **H(κ) derivation:** Exact relationship between curvature and fold asymmetry.
7. **i² derivation:** Why accumulated holonomy scales as surface (i²) from Ψ-Φ structure.