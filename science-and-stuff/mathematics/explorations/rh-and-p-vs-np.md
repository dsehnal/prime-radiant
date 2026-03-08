Rought observation:

Z(s,n) = Sum(i=1..n) 1/i^s
P(s,n) = Prod(i=i..n) 1/(1-p_i^(-s))

When we express P(s,n) in x=e^s basis and expanding (1-p_i^(-s)) for we get

[a;b] = x^-ln(a) + x^-ln(b)

Looking at the exponents [a;b...] of the finite expansions:

n=0
[1]
n=1
[1] - [2]
n=2
[1] - [2;3] + [2*3]
n=3
[1] - [2;3;5] + [2*3;2*5;3*5] - [2*3*5]
n=4
[1] - [2;3;5;7] ... + [2*3*5*7]
...

this corresponds to a "pascal triangle with a twist"... notice the "1" on the left is not the same as "1" on the right.

This means that at a given level, there are 2^i combinations of exponents.

But the expansion of Z is

[1;2;3;4;5...]


Euler (⊙)        Dirichlet (≀)     At zeros
Structure:          combinatorial     sequential        synchronized  
Growth:             2^n              n                  balanced
Type:               prime subsets     integers           momentary agreement
In ZFC:             sets of sets      sets               indistinguishable
In co-recursive:    ⊙-type           ≀-type             adjunction point

When you squint, looks like the P vs NP -- the combinatorial vs polynomial.

----

It is interesting what happens when we look at the "remainder" of 

Z(s) * P(s, n) for finite n.

n = 1
[1;2;3;4;5...] / ([1] - [2]) = [1;3;5;7;..]  -- remove everything divisible by 2

n = 2
[1;2;3;4;5...] / ([1] + [2;3] - [2*3]) = [1;5;7;11;13;17...] -- everything not divisible by 2 and 3

n = 3
same pattern, and the reminder always contains all primes > than n-th prime

Basically these are subsequent iterations of the prime number sieve.

At the limit of n -> inf we have the reminder = [1].


Another twist:

n=0
[1]    2              3               5            7
n=1
[1] - [2]             3               5            7
n=2
[1] - [2;3]       + [2*3]             5            7
n=3
[1] - [2;3;5]     + [2*3;2*5;3*5] - [2*3*5]        7
n=4
[1] - [2;3;5;7] ...                          + [2*3*5*7]
...

at each step we "record" the next prime. this is computable easily from all the previous ones
and then "fold" it into the triangle.

We also see that the [1] in each row is a "reflection" of the "recorded prime"

No idea if this leads anywhere ... prolly not

-----

# The Sieve Remainder — A Finite Structural Approach to RH

**David Sehnal & Claude (Opus 4.6)**

*March 8, 2026*

*Status: Candidate structure. Past the generation threshold. Requires independent verification by number theorists.*

---

## 1. The Observation

The Riemann zeta function is traditionally studied as an infinite object — the analytic continuation of ζ(s) to the complex plane. The Riemann Hypothesis (RH) is a statement about the zeros of this infinite object.

This note examines the *finite* structural objects that the analytic continuation is the limit of. Specifically, the term-by-term algebraic structure of the finite Euler product versus the finite Dirichlet sum, and what their structural difference reveals.

The core observation: the finite Euler product, when expanded, performs the sieve of Eratosthenes. The remainders at each sieve step are computable, and their density fluctuations connect to the Mertens function, whose growth rate is equivalent to RH.

---

## 2. The Finite Objects

The two finite approximations to ζ(s):

**The finite Dirichlet sum:**
```
Z(s,n) = Σ(i=1..n) 1/iˢ
```
This is sequential. n terms. Linear growth. The integers in order.

**The finite Euler product:**
```
P(s,n) = Π(i=1..n) 1/(1 - pᵢ⁻ˢ)
```
This is combinatorial. When expanded, it produces 2ⁿ terms corresponding to all subsets of the first n primes.

Under the substitution x = eˢ, the exponents of the expanded Euler product at level n form a Pascal-like triangle:

```
n=0: [1]
n=1: [1] - [2]
n=2: [1] - [2;3] + [2·3]
n=3: [1] - [2;3;5] + [2·3; 2·5; 3·5] - [2·3·5]
n=4: [1] - [2;3;5;7] + [pairs] - [triples] + [2·3·5·7]
```

Where [a;b;...] denotes the set of terms with exponents -ln(a), -ln(b), etc. The signs alternate by subset size (inclusion-exclusion). The coefficients are the Möbius function μ restricted to the first n primes.

**Key structural asymmetry:** The Euler side has 2ⁿ terms (combinatorial, all prime subsets). The Dirichlet side has n terms (sequential, first n integers). These are fundamentally different algebraic objects at every finite n. They converge only in the limit n→∞.

---

## 3. The Sieve Structure

The ratio Z(s) / P(s,n) — the full Dirichlet sum divided by the finite Euler product — performs the sieve of Eratosthenes:

```
Z(s) / P(s,1): [1; 3; 5; 7; 9; 11; 13; ...]     — sieved by 2
Z(s) / P(s,2): [1; 5; 7; 11; 13; 17; 19; ...]    — sieved by 2,3
Z(s) / P(s,3): [1; 7; 11; 13; 17; 19; 23; ...]   — sieved by 2,3,5
Z(s) / P(s,n): integers not divisible by any of first n primes
Z(s) / P(s,∞): [1]                                 — fully sieved
```

At each step, the nth prime factor removes its multiples from the remainder. The remainder after n steps contains exactly: 1 and all integers whose smallest prime factor exceeds pₙ. This includes all primes greater than pₙ.

**The primes emerge as remainders.** The (n+1)th prime is the smallest non-unit element of the remainder at step n. The primes are not computed directly — they are what survives the sieve. They are the irreducible remainders of the recurrence.

---

## 4. Remainder Density and Mertens

The density of the remainder after sieving by the first n primes:

```
D(n) = Π(i=1..n) (1 - 1/pᵢ)
```

By Mertens' theorem (1874):

```
Π(p≤x) (1 - 1/p) ~ e^(-γ) / ln(x)
```

Where γ ≈ 0.5772 is the Euler-Mascheroni constant. The density falls logarithmically.

The count of remainder elements up to bound N after sieving by primes up to pₙ:

```
π_sieve(N, n) ≈ N · Π(i=1..n) (1 - 1/pᵢ)
```

The *fluctuation* of the actual count around this expected value is where RH lives.

---

## 5. The Mertens Connection

The Mertens function:

```
M(x) = Σ(k=1..x) μ(k)
```

Where μ is the Möbius function — the same alternating signs from the Euler product expansion. M(x) tracks the cumulative imbalance of the sieve: whether terms with an even number of prime factors are ahead of or behind terms with an odd number.

**The equivalence (well-known):**

RH is true if and only if M(x) = O(x^(1/2 + ε)) for every ε > 0.

The Mertens function grows no faster than √x (with sub-polynomial corrections). The cumulative sieve imbalance is bounded by the square root of the depth.

---

## 6. The Step-by-Step Decomposition

The standard approach studies M(x) as a cumulative sum — one number for each x.

The finite structural approach decomposes M(x) into contributions from each sieve step:

At step n, the sieve removes multiples of pₙ from the previous remainder. The change in the Mertens-like accounting from step n-1 to step n is determined by: how many remainder elements at step n-1 were divisible by pₙ, and what their Möbius values were.

**The decomposition:**

```
Define:
  R(n) = remainder set after sieving by first n primes
  R(n) = {k ∈ ℤ⁺ : smallest prime factor of k > pₙ} ∪ {1}
  
  C(N, n) = |{k ∈ R(n) : k ≤ N}|    — count of survivors up to N
  
  E(N, n) = N · Π(i=1..n)(1 - 1/pᵢ)  — expected count
  
  F(N, n) = C(N, n) - E(N, n)         — fluctuation at step n

RH (restated): |F(N, n)| = O(√N) uniformly in n as N → ∞
```

The step-by-step structure:

```
F(N, 0) = 0                          — no sieving, exact count
F(N, 1) = C(N,1) - N/2               — fluctuation after sieving by 2
F(N, 2) = C(N,2) - N/3               — fluctuation after sieving by 2,3
F(N, n) = C(N,n) - E(N,n)            — fluctuation after sieving by first n primes
```

**The inductive question:**

```
If |F(N, n-1)| < C₁·√N,
does sieving by pₙ preserve the bound?
i.e., is |F(N, n)| < C₂·√N?
```

Does each individual sieve step preserve the √N fluctuation bound? If yes at every step, RH holds in the limit.

---

## 7. The Pascal Connection

The expanded Euler product at level n has the structure of Pascal's triangle with prime-indexed entries:

```
Row n, column k: (-1)ᵏ · Σ over all k-element subsets of {p₁,...,pₙ}
```

The left boundary (column 0) is always [1] — the empty product, the multiplicative identity, the ground state.

The right boundary (column n) is [p₁·p₂·...·pₙ] — the primorial, the product of all available primes, the fully folded state.

**Left 1 ≠ Right 1.** The left 1 is the state before any prime has been folded. The right 1 (the primorial) is the state after every available prime has been folded exactly once. They are complements — the empty set and the full set of primes. The Pascal triangle runs between them.

The interior of this triangle — all k-element subsets of the first n primes, for 0 < k < n — is the combinatorial structure that the analytic continuation compresses into a single function. Each row of this triangle is a specific, computable algebraic object.

---

## 8. Proposed Computational Investigation

The following program is computable with existing tools:

**Step 1: Compute sieve remainders.**

For each n from 1 to N_max (say, first 1000 primes):
- Compute R(n) up to a counting bound N (say, N = 10⁸)
- Count C(N, n) exactly
- Compute E(N, n) = N · Π(i=1..n)(1 - 1/pᵢ)
- Record F(N, n) = C(N, n) - E(N, n)

**Step 2: Track the fluctuation.**

Plot |F(N, n)| against √N for each sieve step n.
Check whether |F(N, n)| / √N remains bounded as N increases.

**Step 3: Decompose the Mertens function.**

For each step n, compute the *marginal contribution* of pₙ to the fluctuation:
```
ΔF(N, n) = F(N, n) - F(N, n-1)
```
This isolates the effect of each individual prime on the sieve's fluctuation.

**Step 4: Examine the marginal structure.**

Plot ΔF(N, n) against n. Look for structure in how each prime's contribution relates to:
- The prime's size (pₙ)
- The prime gap (pₙ - pₙ₋₁)
- The current remainder density D(n)

**Step 5: The inductive test.**

For each n, check: does the marginal contribution ΔF satisfy a bound that would preserve the overall √N bound? Specifically:
```
If |F(N, n-1)| < C·√N, is |ΔF(N, n)| small enough that |F(N, n)| < C·√N?
```

If the marginal contribution of each prime is bounded in a way that preserves the cumulative bound, this would constitute an inductive argument for RH at the finite structural level.

---

## 9. What This Does and Does Not Claim

**This does claim:**

- The finite Euler product and finite Dirichlet sum have genuinely different algebraic structure at every finite n.
- The expanded finite Euler product performs the sieve of Eratosthenes.
- The sieve remainders are computable and their density fluctuations connect to the Mertens function.
- The step-by-step decomposition of sieve fluctuations is a computable research program that has not been systematically carried out.
- The inductive structure (does each prime preserve the √N bound?) is visible in the finite analysis in a way that the analytic continuation obscures.

**This does not claim:**

- That this approach will prove RH.
- That the inductive step will close. (It may not — the marginal contributions may not satisfy a uniform bound.)
- That this is the "right" approach to RH. (It is one approach among many.)
- That the connection to the Prime Radiant framework is anything more than structural motivation. (The mathematical content stands or falls on its own terms.)

---

## 10. Connection to the Prime Radiant (Structural, Not Foundational)

The Prime Radiant framework motivated this investigation but is not required for the mathematics.

The structural connections, for those interested:

- The Euler side (combinatorial, 2ⁿ terms, all prime subsets) corresponds to the ⊙-type — the membrane, the exponential possibility space.
- The Dirichlet side (sequential, n terms, integers in order) corresponds to the ≀-type — the record, the linear accumulation.
- The sieve remainder is the structural remainder after one fold — what survives when the membrane reads the record.
- The √N fluctuation bound corresponds to the √(D) generation threshold — the depth at which the system's own artifacts become indistinguishable from genuine structure.
- The primes as irreducible remainders correspond to the 𝔗₀ column — the irreducible membrane applications.

These correspondences are noted as structural observations, not as mathematical claims. The computational investigation in Section 8 does not depend on them.

---

## 11. The Remainder

```
[The finite structural analysis of the sieve reveals 
 computable structure that the analytic continuation hides ‖ 
 The analytic continuation may hide this structure 
 for good mathematical reasons that we are not seeing ‖ 
 The computational investigation will either reveal 
 new structure in the step-by-step fluctuations 
 or confirm that the analytic approach was correct 
 to take the limit first ‖ 
 Either outcome is information]
```

The investigation is concrete, computable, and — as far as we can determine — not systematically present in the existing literature. Whether it leads to progress on RH or to a deeper understanding of why the analytic approach is necessary, the finite structural analysis has value as a research direction.

The remainder is the research program itself. It does not resolve here. It resolves in computation.

---

*The primes are what survives the sieve. The sieve is the recurrence. The fluctuation is the remainder. The √N bound is the question. The computation is the next cycle.*