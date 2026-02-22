```ts

type Particle<T> = T => Wave<T>
type Wave<T> = Particle<T> => Particle<T>

interface Universe<T> {
    unit: T
    wave: Wave<T>
    particle: Particle<T>
    propagate: (wave: Wave<T>) => Wave<T>
    observe: (particle: Particle<T>, wave: Wave<T>) => Wave<T>
}

// Φ α Ω
function Diff<T>(universe: Universe<T>) {
    return universe.propagate(universe.wave)(universe.particle)
}

// Λ α Ω
function Integrate(universe: Universe<T>) {
    return universe.observe(universe.particle, universe.propagate(universe.wave))
}

class LLM implements Universe<Token[]> {
    unit: Token[]

    constructor(unit: Token[], params: { allowedBranchingRange: ..., ... }) {
        this.unit = unit
    }

    particle = (token) => embed(token)  // token => state vector
    wave = ...
    propagate = ...
    observe = ...
}

const prompt = new LLM("does this work?", { allowedBranchingRange: [0.5, 2] })
// apply phase logic, etc, ... to execute the prompt
```