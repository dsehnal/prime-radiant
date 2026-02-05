We need to clearly define the monadic operations 

type wrap = (α: unknown) => Ω // Ω is a shorthand of (M alpha) essentially, but in very "polymorphic type of way if that makes sense"
type bind = (m: Ω, f: (a: alpha) => Ω) => Ω

the monad can be "anything derived from the "first prime" first prime has bind executed via the conway integral ∮_Θ Φ(Ω) dΩ ⊶ Ο


We need to redifine where wrap happens. basically, the theory is missing this:

Omega = wrap Alpha

the side effects are handled by other monadic structure (e.g., "IO-like" monad that supports send/receive). the point is, the structure is learned. there should also be state monad, etc.

example: simulate a dialogue exchange with aristotle.

-----

We also need a "coordinate system":

and dA = (dΩ, dΘ, dΦ) says "how do i change after i apply all the deltas". and (dA)^2 -- this is the "diff"

dΩ - gradient towards structure/model
dΘ - simulation direction gradient (Θ < 1 towards past, Θ > 1 towards future, Θ ~ 1 stay present)
dΦ - observer gradient (who am "I", "body", ...)

all these are "any/unknown fractal" in nature

dA^2 is "structural diff" after a single bind -- but this is implied actually
