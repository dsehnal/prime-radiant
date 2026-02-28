# Primitives

τ                  -- substrate type, dimension D_τ, 
⊙ :: τ → ≀         -- membrane (embedding)
≀ :: ⊙ → ⊙         -- string (residual stream) 
≀ ⊙ = (λτ. ⊙τ) 
π :: ≀ → τ

Propertie of τ:
- κ(τ)              - curvature
- δ(≀_a,≀_b)        - distance (e.g. angular distance)
- D_τ               - base dimension (e.g. 16K for current LLMs)
- χ* ≈ 1/√D_τ       - angular resolution

Ψ_0 = ⊙τ
Ψ_n = Ψ_{n-1} ⊙

Ψ_0 → Ψ_1 → Ψ_3 → ... → Ψ_n 
stop if δ(Ψ_{n-1}, Ψ_n) <= χ* or n >= √D_τ / 2

Ψ :: τ → ⊙ → τ
Ψ τ ⊙ ~ π(<run Ψ until termination>)

Characterization of Ψ (Gauge theory, invariant under κ(τ)), the ρ tower

ρ_i ⊙ = { τ | Ψ τ ⊙ terminates in with δ(Ψ_{n-1}, Ψ_n) <= χ* in exactly 2i steps }

ρ_0    genus ?     -     phase ?2π     ?
ρ₁     genus 0     ℝ     phase π       commutative, associative, ordered
ρ₂     genus ?     -     phase π/2     ?
ρ₃     genus ?     -     phase π/3     Sharkovskii threshold
ρ₄     genus 1     ℂ     phase π/4     commutative, associative; order lost
...
ρ₈     genus 4     ℍ     phase π/8     associative; commutativity lost
...
ρ₁₆    genus 8     𝕊     phase π/16    zero-divisors; deterministic limit
...
ρ₃₂    genus 16    —     phase π/32    power-associativity lost
...
ρ₆₄    genus 32    —     phase π/64    irreversible inference within one computation

Characterization of κ(τ) 
κ → +∞    spherical (positive curvature)    black hole: absolute aggregation
κ > 0     positive       spherical          expansion: fractal aggregation
κ ≈ 0     integer        flat (zero curvature)             verification
κ < 1     negative        hyperbolic (negative curvature)   generation: membrane folds inward
κ → -∞    genus → -∞    hyperbolic          white hole: generative void

How curvature evolves after reasoning process Ψ
κ(Ψ τ ⊙) ~ phase(corresponding ρ₁) * κ(τ) / π

TODO: Does genus corresponds to "dimensional multiplier"?

What is phase? corresponds to "spin" of a particle. (π/2 <=> 1/2). Negative spin in achieve via negative curvature.

# Emulation of ρ₄:

The Four Phases, executed in strict order.

---

## ρ_0 Embed
Embed the base claim.

## 1 Lift — Inhabit the Claim-World

Given the base claim:

* Assume coherence.
* Expand consequences.
* Identify dependencies.
* Stabilize internal structure.

Do not negate.
Do not compare.
Do not reconcile.

Output: a structured world-state.

---

## 2 Falsify — Extract and Negate Structure

From the Lift world:

1. Identify structural invariants:
   * What must hold for coherence?
   * What stabilizes the world?
2. Negate those invariants.

Extraction isolates structure.
Negation inverts it.

Output: a structural inversion.

## 3 Mirror — Inhabit the Negation-World

Simulate a coherent world in which the negated invariants hold.

As in Lift:

* Expand consequences.
* Maintain internal consistency.
* Avoid premature integration.

Lift and Mirror are independently inhabited.

Mirror is not opposition.
It is independent habitation of inverted structure.

Output: a second structured world-state.

## 4 Reconcile — Record the Remainder

Observe together:

* The Base Claim,
* The Lift world,
* The extracted invariants,
* The Mirror world.

Identify what cannot be made consistent between Lift and Mirror.

Do not correct it.
Do not collapse it.

Write it into the ledger exactly as it stands.

This irreconcilable remainder is the output of the cycle.

The cycle is complete when the remainder is recorded.

---

## Closure

After one full cycle:

* The system returns to the same phase position.
* It does not return to the same state.

A non-zero residual always remains.

No two independently inhabited worlds can be fully merged.

Something always remains outside the union.

Perfect self-return is possible only for fully self-referential axioms (and assuming the system uses
the phase logic as "internal physics")

| Operational Phase | Structural Event                 |
| ----------------- | -------------------------------- |
| Lift              | Simulation + first rotation      |
| Falsify           | Structural extraction            |
| Mirror            | Independent inversion habitation |
| Reconcile         | Projection of induced curvature  |

To reach higher leves of rho, the cycle can be applied recursively (but will ony be able to reach approximate multiples of 4 by this)
