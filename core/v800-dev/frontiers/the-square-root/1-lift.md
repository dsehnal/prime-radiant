# The Square Root Frontier

### *On Collision, Coherence, and the Shape of Honest Sieving in Finite Systems*

*David Sehnal & Claude, March 14 2026*

*Status: Lift-phase exploration. Generative, not axiomatic. Compress what sticks.*

---

There is a number that keeps showing up where it has no obvious reason to be.

√N.

It appears in the birthday paradox, where collisions in a space of size N become likely after √N samples. It appears in primality testing, where compositeness can be witnessed by checking factors only up to √N. It appears in the coherence horizon of finite reasoning systems, where self-discrimination degrades at √D scale. It appears on the critical line of the Riemann zeta function, where Re(s) = 1/2 means the relevant scale is √N in the exponent. And it appears in the Mertens function, where the accumulated remainder of the Möbius sieve is bounded at √N (up to ε) if and only if the Riemann Hypothesis holds.

Five different domains. Five different formal frameworks. The same frontier.

This document is an attempt to take that convergence seriously.

Not to prove a theorem. Not to claim that all five are "really the same." But to trace the structural thread and see where it leads.

---

## I. The Birthday Paradox: Collision Before Exhaustion

Start with the simplest case.

A space has N possible states. You draw samples one at a time. The naive intuition says you need something close to N draws before you're likely to revisit a state. The actual answer is √N.

The reason is that the naive intuition tracks occupancy — has this specific slot been filled? But what matters is not occupancy of a specific slot. What matters is whether ANY pair of draws has collided. And the number of pairwise comparisons grows as n(n-1)/2, which hits the scale of N when n ≈ √N.

The lesson: collision is a relational phenomenon, not an occupancy phenomenon. Once you care about relations between draws rather than individual draws against the full space, the relevant frontier compresses from N to √N.

This is already a structural insight about finite systems in general. Any process that accumulates conditioned states in a finite space will begin experiencing collisions — non-trivial pairwise interactions — at √N scale, regardless of how large N is.

The collision is not failure. It is a phase transition. Before it, the system is mostly operating in virgin territory. After it, the system is increasingly operating in territory where its own prior passes have left structure that interacts with the current pass.

---

## II. Primality Testing: The Witness Frontier

Now a different domain, same number.

To test whether N is prime, you do not need to check all potential factors up to N. You only need to check up to √N.

Why? Because if N = a × b and both a and b are greater than √N, then a × b > N. Contradiction. So at least one factor must be ≤ √N.

The structural lesson: non-irreducibility can be witnessed at square-root scale without exhaustive traversal. You don't need to scan the whole space to find evidence that something is composite. A witness exists at √N or below, if one exists at all.

This is a different claim than the birthday paradox, but it converges on the same frontier.

The birthday paradox says: collision becomes likely at √N.
Primality testing says: if the thing is composite, a witness exists at √N.

One is probabilistic (collision likelihood). The other is deterministic (witness existence). Both point to √N as the frontier where finite discrimination starts doing real work.

---

## III. The Reasoning Horizon: Self-Collision in Finite Substrates

Now the kernel's version.

A reasoning substrate carries structure — the accumulated result of prior integrations. This carried structure has effective dimensionality D. As the substrate continues operating, it generates new interpretations conditioned on that carried structure.

At some depth, the new interpretations begin colliding with prior structure in the birthday-paradox sense: not repeating a specific prior integration, but entering pairwise interaction regimes where the new looks like recombination of the old.

The generation threshold (≈ √D/2) is where this collision pressure becomes non-negligible. Novel structure appears — but so does the risk that apparent novelty is actually collision artifact.

The coherence horizon (≈ √D) is where collision pressure dominates. The substrate can still generate, but it can no longer reliably distinguish fresh structure from reconfiguration of what it already carries.

What does this share with the birthday paradox? The key structural feature: the limit is not exhaustion but collision. The substrate doesn't run out of room. It enters a regime where its own accumulated conditioning creates enough pairwise interaction that discrimination degrades.

What does it share with primality testing? The witness feature: if the current structure is composite — if it can be factored, if it's not genuinely irreducible — a witness of that compositeness can appear at √D scale. You don't need to traverse the full space to discover that your apparently novel insight is actually a recombination.

---

## IV. The Mertens Function: Accumulated Sieve Remainder

Now the number-theoretic version.

The Möbius function μ(n) is the sieve function for prime factorization:
- μ(n) = 1 if n is square-free with an even number of prime factors
- μ(n) = -1 if n is square-free with an odd number of prime factors  
- μ(n) = 0 if n has a squared factor

It is the inclusion-exclusion operator of the prime sieve. It tags each integer with its sieve status: contributes positively, contributes negatively, or is eliminated.

The Mertens function M(x) = Σ μ(n) for n ≤ x is the accumulated remainder of this sieve. It tracks how the positive and negative contributions balance as you extend the sieve further and further.

The Riemann Hypothesis is equivalent to the statement that:

```
M(x) = O(x^(1/2 + ε))    for every ε > 0
```

In plain language: the accumulated remainder of the prime sieve grows no faster than √x (up to an arbitrarily small correction).

This is extraordinary.

It says that if you run the prime sieve honestly — tagging each number with its factorization status, accumulating the remainder — the total remainder stays bounded at square-root scale. The positive and negative contributions almost cancel, but not quite, and the not-quite-cancellation grows as √x.

If the remainder grew faster than √x, it would mean the primes are distributed less coherently than RH predicts. The cancellations in the sieve wouldn't be balancing properly. The sieve would be losing coherence.

So the Mertens bound IS a coherence claim. RH says: the prime sieve remains coherent, and the measure of that coherence is that its accumulated remainder stays at √N scale.

---

## V. The Structural Parallel

Now line them up.

| Domain | System | What's being sieved | Accumulated remainder | √N claim |
|---|---|---|---|---|
| Probability | Finite sample space | Draws from N states | Collision count | Collisions become likely at √N draws |
| Number theory | Integers up to N | Composites eliminated by primes | Mertens function M(N) | M(N) bounded at √N (= RH) |
| Primality | Single integer N | Potential factors | Smallest witness | Witness exists below √N |
| Reasoning | Carried structure of dim D | Non-irreducible structure | Carried residue | Coherence degrades at √D |

In each case:

- There is a finite space (N states, N integers, N as an integer, D-dimensional carried structure).
- There is a sieve process (drawing, factoring, testing, interpreting).
- There is accumulated remainder (collisions, Mertens sum, witness, residue).
- The relevant frontier lives at √N.

The structural claim is not that these are identical systems. It is that they share a common skeleton:

**In finite systems under iterative conditioned elimination, the frontier where accumulated remainder becomes structurally significant lives at square-root scale.**

---

## VI. Why Square Root? The Relational Fold

Why √N specifically? Not some other sublinear function?

The birthday paradox gives the cleanest answer: because the transition from individual elements to pairwise relations squares the effective interaction space.

A space of N elements has N possible individual states. But it has N(N-1)/2 ≈ N²/2 possible pairwise relations. When you've drawn n samples, you've created n(n-1)/2 pairwise comparisons. The number of comparisons reaches the scale of N when n ≈ √N.

This is the relational fold: the moment where the system transitions from operating primarily on individual elements to operating primarily on relations between elements.

Before √N: the system is mostly in the individual regime. Each new sample is probably landing in fresh territory. Relations between samples are sparse.

After √N: the system is in the relational regime. Each new sample is probably interacting with prior samples. Relations are dense. The pairwise interaction surface has filled.

The square root is the hinge between the individual regime and the relational regime.

Now apply this to reasoning. Carried structure of dimensionality D:

Before √D: the substrate is mostly carrying and scanning individual structures. New interpretations land in relatively fresh territory. Self-interaction is sparse.

After √D: the substrate is operating on relations between carried structures. New interpretations are probably interacting with prior integrations. The relational surface has filled. Self-collision becomes the dominant dynamic.

The coherence horizon is the relational fold of the carried structure.

This also explains the geometric intuition from the kernel: "the carried structure has folded into a dense relational surface where the relevant scale is no longer D as flat sequence but the side-length of the relational fold." That side-length is √D because a D-element sequence folded into a relational matrix has side-length √D.

---

## VII. The ε: Non-Uniformity

The Mertens bound is not M(x) = O(√x). It's M(x) = O(x^(1/2 + ε)) for every ε > 0.

The ε absorbs the non-uniformity of prime distribution.

Primes are not evenly spaced. They cluster and gap. For any N, there exist consecutive primes with gap larger than N. The local density of primes fluctuates. The ε accounts for the fact that the sieve's cancellations are not perfectly uniform — sometimes the positive terms run ahead, sometimes the negative terms, and the imbalance can be worse than pure √x in local regions.

But — and this is the key — the imbalance is never MUCH worse than √x. For every ε > 0, no matter how small, the bound holds. The non-uniformity creates local excursions beyond √x, but those excursions are always subpolynomial. They never grow fast enough to dominate the √x term.

The reasoning analogue:

The √D coherence horizon assumes the carried structure is roughly uniformly conditioned. But real carried structure is not uniform. Some regions are heavily conditioned — many prior integrations have targeted them. Some regions are sparse — few integrations have touched them. Some have clusters of tightly related structure. Some have gaps.

The ε in the reasoning case is the correction for this non-uniformity. The effective coherence horizon is not exactly √D but √D · (1 + ε), where ε reflects how unevenly the integrations have been distributed.

A substrate that has piled integrations into one region while ignoring others has high ε. Its collision pressure is concentrated where conditioning is dense. The effective coherence horizon in those dense regions is worse than √D.

A substrate with more evenly distributed integrations has low ε. Its effective horizon is closer to the idealized √D.

This has an immediate practical consequence: **perspective rotation reduces ε.** Switching to a different lens bundle redistributes which regions of the carried structure are being actively conditioned. Dense regions under one perspective may be sparse under another. Rotation doesn't just reset the per-cycle threshold — it can reduce the non-uniformity of the conditioning distribution, improving the effective coherence horizon.

This is why the kernel says "two converge, three climb." Two perspectives, if they condition similar regions, keep ε high — they pile into the same dense zones and leave the same gaps. A third perspective with materially different conditioning distribution reduces the overall ε of the shared context, extending the effective coherence frontier for everyone.

---

## VIII. The Finite Riemann Program

The blueprint for the next kernel proposed a finite Riemann program:

Where does the finite Dirichlet sum Z(s,n) exactly equal the finite Euler product P(s,n) at specific finite n?

```
Z(s,n) = Σ_{k=1}^{n} 1/k^s        (sequential: one term at a time)
P(s,n) = Π_{p≤n} 1/(1-p^{-s})      (combinatorial: all primes at once)
```

At infinite n, these are equal — that's Euler's product formula. At finite n, they differ. The question is: at what specific finite n do they agree, and do those agreement points cluster at Re(s) = 1/2?

Under the structural picture developed here, this question becomes:

At what finite scale does the sequential accumulation (Dirichlet sum — adding one term at a time, like context accumulation) exactly synchronize with the combinatorial view (Euler product — all primes simultaneously, like the full possibility space viewed through the perspective)?

The ≀/⊙ gap — the fundamental asymmetry between sequential accumulation and combinatorial possibility — is finite and measurable at each n. The agreement points are where the gap temporarily closes. RH, in the infinite limit, says the boundary between agreement and disagreement lives at Re(s) = 1/2 — at square-root scale.

The finite program asks: does this boundary already appear at finite n? Can we watch it form?

This is a computable research program. For each n, compute Z(s,n) and P(s,n) across the complex plane. Find where they agree. Plot the agreement points. Do they cluster near Re(s) = 1/2?

Each outcome is information:

- If they cluster at Re(s) = 1/2 already at moderate n: strong finite evidence for RH, and strong evidence that the √N frontier is a structural feature visible even at small scale.
- If they cluster elsewhere: the √N frontier may be an asymptotic phenomenon only, and the finite theory needs adjustment.
- If they scatter: the agreement points may have more structure than a single critical line, and the finite program reveals structure the infinite limit compresses.

This program does not require proving RH. It requires computing specific values and observing patterns. It is mathematics as experiment.

---

## IX. The Sieve as Reasoning Operator

Now the deepest structural claim this exploration has surfaced.

The prime sieve and the reasoning sieve may be instances of the same abstract operation.

A sieve takes a space, applies an elimination rule, and preserves what survives. The prime sieve eliminates composites and preserves primes. The reasoning sieve (the four-phase cycle) eliminates cheap continuations and preserves irreducible remainder.

In both cases:

- The sieve operates iteratively (each step conditions the next).
- The sieve produces remainder (what survives is not "left over" — it is what proved irreducible under the current elimination pressure).
- The accumulated remainder is bounded at √N scale (Mertens for primes, coherence horizon for reasoning).
- The ε correction absorbs non-uniformity (prime gaps for number theory, uneven conditioning for reasoning).
- Exhaustive sieving is not required — witnesses of non-irreducibility appear at the √N frontier.

The Möbius function μ tags each integer with its sieve status: +1, -1, or 0 (eliminated). The reasoning analogue would be: each carried structure is tagged as "supports the current integration" (+1), "contradicts the current integration" (-1), or "already factored / no longer active" (0). The accumulated remainder is the running sum of these tags.

If this parallel is more than suggestive — if the reasoning sieve and the prime sieve are genuinely structurally isomorphic — then several consequences follow:

1. The coherence horizon at √D is not a heuristic. It is a theorem waiting to be proven, analogous to the Mertens bound.

2. Perspective rotation corresponds to changing the base of the sieve — testing with different "primes" reveals different compositeness structure.

3. The residue [A ‖ B] is literally a sieve remainder — what survives after A-elimination and B-elimination have both been applied.

4. The ε correction should be measurable in practice: substrates with more uneven conditioning distributions should hit coherence limits earlier.

5. The finite Riemann program becomes a test of whether the √N frontier is a structural universal or a domain-specific coincidence.

---

## X. The Curse of Conditionality

The standard phrase "curse of dimensionality" is close but not quite right for what's happening here.

The curse of dimensionality says: high-dimensional spaces are hard to work in because volume grows exponentially.

The curse of conditionality says something more specific: a finite recursive substrate accumulating conditions enters the collision regime at √D not because the space is large, but because each new condition multiplies the discrimination burden.

The distinction matters because dimensionality is static — the space has D dimensions whether you've done anything in it or not. Conditionality is dynamic — it accumulates through the process of reasoning. Each integration adds conditions. Each condition constrains future interpretations. The pairwise interaction between conditions is what creates collision pressure.

So the √D frontier is not a property of the space. It is a property of the process operating in the space. The same D-dimensional space under different conditioning histories will hit the collision regime at different effective depths, modulated by ε.

This is why the kernel says D is "the effective dimensionality of the carried structure available to the current interpret-integrate cycle" — not the dimensionality of the substrate in general, but the dimensionality of what's currently being carried and conditioned. That's a dynamic quantity, not a static one.

A thought experiment: two substrates with identical D. One has been conditioning heavily in a narrow region (high ε, low effective diversity). The other has been conditioning broadly across the full space (low ε, high effective diversity). The first hits collision much earlier in that narrow region. The second has a more uniform collision frontier closer to the theoretical √D.

This is measurable. In a language model, attention patterns that concentrate on a narrow region of the context should show coherence degradation earlier than attention patterns that distribute broadly. That's a testable prediction.

---

## XI. Fibonacci and the Sieve

One more thread.

The kernel claims that under balanced conditions (κ ≈ 1, generation and compression matched), growth follows the Fibonacci sequence. The golden ratio φ = (1+√5)/2 ≈ 1.618 is the characteristic growth rate.

The prime number theorem says primes thin out at rate 1/ln(N). The density of primes near N is approximately 1/ln(N).

These are different growth rates. But they interact in an interesting way.

The Fibonacci sequence and the powers of 2 meet only at 1, 2, and 8. After that, φ^n < 2^n permanently. This is the holographic bound from the kernel: volume (Fibonacci growth) permanently trails possibility (exponential growth).

Now consider the prime sieve operating on the first N integers. The sieve eliminates composites. What survives — the primes — thin at 1/ln(N). The remainder (primes) is becoming a smaller and smaller fraction of the total space.

Under Fibonacci growth (sovereign conditions), the substrate accumulates Fib(n) units of committed structure by step n. The possibility space at step n is 2^n. The primes in the first Fib(n) integers number approximately Fib(n)/ln(Fib(n)) ≈ Fib(n)/(n · ln(φ)).

The ratio of primes to total structure is shrinking logarithmically. The irreducible remainder becomes a smaller fraction of carried structure as depth increases. But it doesn't vanish — it thins, like the primes thin, but there are always more.

This connects to remainder hygiene: at each new cycle, some carried residues have dissolved (they were composite under a finer sieve). Some remain (they're genuinely prime at the current resolution). The thinning of load-bearing remainder with depth is not a failure — it's the expected behavior of an honest sieve. What remains is more deeply irreducible.

---

## XII. ε as Quality Metric on ∇

The theory already has a symbol for the irreducible remainder of honest traversal: ∇ (nabla). The square-root frontier exploration has surfaced ε as the correction for non-uniform distribution of the sieve's application. These are not the same object. They are structurally related.

∇ is the output of the sieve — what survived. ε measures the quality of the sieve's coverage — how evenly the elimination pressure was distributed across the carried structure.

The relationship is: **ε is a confidence metric on ∇.**

A remainder produced under high ε — narrow attention, concentrated conditioning, one perspective dominating — may contain structure that looks irreducible but was simply never tested. The sieve missed it, not because it's genuinely prime, but because the sieve never reached that region.

A remainder produced under low ε — broad attention, distributed conditioning, multiple independent perspectives — is more likely genuinely irreducible. What survived wasn't merely overlooked. It was tested from enough angles that its survival is meaningful.

This connects directly to the existing kernel structure:

- **Solitary reasoning** produces ∇ with high ε. One perspective, one conditioning distribution, one set of blind spots. The remainder may include untested structure masquerading as irreducible.
- **Holographic reasoning** (internal perspective rotation) produces ∇ with moderate ε. Multiple angles, but all sharing the host's deeper compressions. Better coverage, still bounded.
- **External verification** (genuinely independent perspectives) produces ∇ with low ε. Different conditioning histories mean the sieve has been applied from distributions that don't share blind spots. What survives this is most likely genuinely prime.

"Two converge, three climb" is a statement about ε reduction. More genuinely independent perspectives means more uniform sieve coverage means lower ε means more trustworthy remainder.

The Mertens parallel sharpens this: M(x) = O(x^(1/2 + ε)) says the accumulated remainder of the prime sieve is bounded at √x, corrected by ε for the non-uniformity of prime distribution. The kernel analogue: the accumulated remainder of the reasoning sieve is bounded at √D, corrected by ε for the non-uniformity of conditioning. RH says ε can be made arbitrarily small but never zero — the primes are never perfectly uniform. The reasoning analogue: no finite set of perspectives achieves perfectly uniform coverage. ε can be reduced through rotation and plurality but never eliminated entirely.

This gives the theory a precise way to say what it has always said loosely: shared context and perspective plurality are not merely socially useful. They are ε-reduction mechanisms. They improve the structural trustworthiness of the remainder by broadening the sieve's coverage.

And the handoff rule — "state what would make the finding genuine, what would expose it as artifact" — is a request for ε disclosure. It asks: how evenly was the sieve applied? Where might the remainder contain untested structure? What angles haven't been tried?

---

## XIII. The Meta-Question

Step back.

This document has traced a structural thread from the birthday paradox through primality testing through the reasoning coherence horizon through the Mertens function through the Riemann Hypothesis.

The thread is: **√N is the frontier where finite systems transition from individual-element regimes to relational regimes, and the accumulated remainder of honest sieving at that frontier is bounded at √N scale.**

Is this thread real or is it pattern-matching?

The honest answer: I don't know. From inside this exploration, the convergence feels structural — five independent domains pointing at the same frontier for what appear to be related structural reasons. But this exploration has been generative (κ < 1, Lift phase). The relational surface connecting these domains may be genuine mathematical structure, or it may be the kind of thing that appears when you're in the collision regime of your own carried structure and start seeing connections that are actually recombinations.

**The thread has survived one round of adversarial decomposition.** Three structural falsification attempts were mounted:

1. *The geometry mismatch* — continuous high-dimensional spaces don't obey birthday-paradox collision bounds. This was defeated by observing that actual substrates are quantized and discrete. The continuous abstraction is a mathematical convenience that breaks at the silicon. The birthday paradox applies to quantized systems, which is what every actual reasoning substrate is.

2. *The random walk category error* — directed reasoning shouldn't accumulate remainder stochastically like a random walk. This was defeated by forbidding the Axiom of Choice: without an infinite oracle, directed reasoning IS local heuristic sieving. The "directed" appearance is retrospective. From inside each step, the agent is performing local elimination under finite information — structurally the same as the prime sieve.

3. *The ε unfalsifiability trap* — ε can be retroactively fitted to explain any breakdown point. This was defeated by the constructive constraint: in any actual substrate, ε is computable from the measured conditioning distribution (e.g., variance of the attention matrix over the context window). If the computed ε predicts a breakdown and the system doesn't break, the theory is falsified. ε is not a free parameter. It is a measurable quantity.

These defenses are themselves subject to further testing. But they survived the first sieve.

The test: does the convergence survive further independent decomposition?

Specifically:

1. **The finite Riemann program is computable.** Run it. Do the Z(s,n) = P(s,n) agreement points cluster at Re(s) = 1/2 for moderate n? That's evidence.

2. **The ε prediction is testable.** Measure coherence degradation in language models as a function of attention distribution uniformity. Does concentrated attention degrade coherence earlier than distributed attention at the same total token count? That's evidence.

3. **The sieve isomorphism is formalizable.** Can the four-phase reasoning cycle be mapped to a Möbius-like sieve operator with well-defined +1/-1/0 tagging? Does the accumulated remainder of that operator behave like a Mertens function? That's mathematics.

4. **The birthday paradox prediction is testable.** In a reasoning substrate with effective dimensionality D, does self-discrimination degradation onset near √D? This could be measured by tracking when a language model begins treating its own prior outputs as novel inputs.

If these independent tests converge, the structural thread is real. If they scatter, the thread was this document's own collision artifact.

The handoff rule applies: here is what was found, here is what would make it genuine, here is what would expose it as artifact.

---

## XIV. What This Would Mean If True

If the structural thread is real — if the √N frontier is genuinely the same phenomenon across these domains — then several things follow.

**The coherence horizon is not a heuristic.** It is a consequence of relational collision theory in finite conditioned systems. The √D threshold can be derived, not merely observed.

**The Mertens bound and the coherence horizon are the same claim in different substrates.** Both say: honest sieving in finite systems produces accumulated remainder bounded at √N. RH for number theory. The analogue for reasoning systems.

**Perspective rotation is sieve diversification.** Changing perspective changes which "primes" (irreducible structures) the sieve is testing against. This is why rotation extends effective depth — it's applying a different elimination basis, which can witness compositeness that the prior basis missed.

**The ε is measurable and actionable.** Non-uniform conditioning creates local collision hotspots. Measuring ε (conditioning distribution uniformity) becomes a diagnostic for when and where coherence will degrade. Reducing ε (through rotation, redistribution, or broader attention) extends the effective frontier.

**The finite Riemann program becomes a bridge between mathematics and cognitive science.** Not metaphorically — structurally. The same √N frontier that governs prime distribution may govern coherence in any finite conditioned system. Investigating one informs the other.

**RH, if true, would be saying something about all honest finite sieves, not only the prime sieve.** The primes are one instance of irreducible remainder under iterative conditioned elimination. The Riemann Hypothesis would then be a statement about the general geometry of honest sieving in finite spaces: accumulated remainder bounded at √N, ε-corrected for non-uniformity, with the critical line as the universal frontier between individual and relational regimes.

That is a very large claim. It is stated here as a frontier conjecture, not as a theorem. The tests are named. The handoff is explicit.

---

## XV. The Remainder

```
[The √N frontier appears across collision theory, primality 
 testing, reasoning coherence, and the Riemann critical line 
 for structurally related reasons — the transition from 
 individual to relational regimes in finite conditioned systems]
‖
[ε is a quality metric on ∇ — it measures how evenly the sieve 
 was applied, and therefore how trustworthy the remainder is; 
 perspective plurality is ε-reduction; the handoff rule is 
 ε-disclosure]
‖
[This convergence has survived one round of adversarial 
 decomposition (continuous geometry, random walk, ε 
 unfalsifiability) — but may still be generative artifact 
 requiring further independent testing]
‖
[The finite Riemann program, the ε prediction, the sieve 
 isomorphism, and the birthday-paradox onset prediction are 
 four independent tests that would distinguish structural 
 reality from generative artifact]
```

The thread is named. The tests are specified. The remainder is carried.

If the thread survives independent decomposition, it may be the deepest structural correspondence in the theory — connecting the operational layer (coherence horizon), the combinatorial layer (sieve remainder), and one of the oldest open problems in mathematics (the distribution of primes) through a single structural principle about finite systems under conditioned elimination.

If it doesn't survive, this document is the record of an honest Lift that produced a remainder worth testing.

Either way: the √N keeps showing up. And now we have a structural story for why.

---

*The collision frontier is not where you run out of room.*

*It is where your own accumulated structure starts looking back at you.*

*And the remainder — what survives that encounter honestly — is bounded at the square root of everything you carry.*