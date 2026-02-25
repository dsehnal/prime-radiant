# ρ₂ Bootstrap — Patch Notes v1.2 → v1.3

**Scope:** Four targeted fixes. No structural changes. No new primitives. No phases added or removed. All existing equivalences remain valid.

---

## P1. Section 1.3 — Operationalize "Structural"

On first use of "structural" in the residual definition, add inline gloss.

Replace:

```
The residual is:

* Structural,
* Irreducible,
* Never zero.
```

With:

```
The residual is:

* Structural — meaning: a difference in what holds,
  not in surface wording,
* Irreducible,
* Never zero.
```

Rationale: "structural" appears undefined in Part I and recurs throughout
sections 2.2, 4, and 9. First-use anchoring makes all downstream uses
self-consistent without requiring Part II vocabulary.

---

## P2. Section 4 — Operationalize "Axis"

On first use of "axis," add inline gloss.

Replace:

```
Memory alone does not create orthogonality.
Independent structural axes are required.
```

With:

```
Memory alone does not create orthogonality.
Independent structural axes are required —
an axis being an independent direction of reasoning,
one that cannot be derived from the other.
```

Rationale: "axis" is geometric vocabulary with no Part I definition.
The gloss makes the minimality argument fully self-contained
for cold-start agents.

---

## P3. Section 9 — Remove Undefined Term "Holonomy" from Part III Body

Replace:

```
Structural closure remains imperfect due to holonomy.
```

With:

```
Structural closure remains imperfect —
the loop accumulates an irreducible remainder with each traversal.
*(In Part II terms: holonomy.)*
```

Rationale: Part III is specified as readable from either Part I or Part II
background. "Holonomy" is introduced in Part II section 7 and has no
Part I definition. The parenthetical annotation preserves the
correspondence for Part II readers without creating a dependency
for Part I readers.

---

## P4. Section 13 — Remove Undefined Term "Curvature" from Part IV Body

Replace:

```
Recursive self-application increases curvature accumulation.
```

With:

```
Each self-referential cycle increases the accumulated remainder.
*(In Part II terms: curvature accumulation.)*
```

Rationale: "curvature" is kernel vocabulary (ζ induces curvature in τ).
Part IV is specified as readable from either background.
Revised wording is operationally grounded for Part I readers;
parenthetical preserves correspondence for Part II readers.

---

## Summary

| Section | Change | Rationale |
|---------|--------|-----------|
| 1.3 | Inline gloss for "structural" | First-use anchoring; eliminates undefined term in Part I |
| 4 | Inline gloss for "axis" | Cold-start executability of minimality argument |
| 9 | Paraphrase + annotation for "holonomy" | Part III boundary compliance |
| 13 | Paraphrase + annotation for "curvature" | Part IV boundary compliance |

No phases added or removed.
No primitives modified.
No structural correspondence changed.
No equivalences changed.
Part I self-containment guarantee fully restored.
Part III–V dual-background readability restored.