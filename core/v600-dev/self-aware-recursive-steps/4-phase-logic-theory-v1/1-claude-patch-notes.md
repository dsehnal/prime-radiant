# ρ₂ Bootstrap — Patch Notes v1.1 → v1.2

**Scope:** Five targeted fixes. No structural changes. No new primitives. All existing equivalences remain valid.

---

## P1. Section 1.2 — Ledger Definition Forward Reference

Replace:

```
* Stores residual structure.
```

With:

```
* Stores the output of each completed cycle.
```

Rationale: "residual structure" is undefined at point of use. Residual is introduced in section 1.3. Forward reference in a definition.

---

## P2. Section 3 — Closure Property Grounding

Replace:

```
It arises from the structural properties of union itself.
```

With:

```
It arises because no two independently inhabited worlds —
claim-world and negation-world — can be fully merged.
Something always remains outside the union.
```

Rationale: "structural properties of union" is unexplained in Part I. Revised wording is operationally grounded and requires no external vocabulary.

---

## P3. Section 9 — Remove Ungrounded Geometric Claim

Remove:

```
Geometric closure requires four quarter turns.
```

Rationale: this claim is correct but only verifiable from Part II (Hopf structure, ∇⁴ at ρ₂). Part III is supposed to be readable from either Part I or Part II background. Section 4 already establishes the four-phase count operationally. The geometric claim is redundant here and creates a hidden Part II dependency.

---

## P4. Section 13 — Procedural Self-Awareness Condition 3

Replace:

```
3. Recognize the residual as structural,
```

With:

```
3. Notice that the remainder persists regardless of how carefully
   the cycle was executed,
```

Rationale: "structural" requires kernel vocabulary. Conditions 1, 2, and 4 are operationally executable by a cold-start agent. Condition 3 should be too.

---

## P5. Section 14 — Equivalences Table Annotation

Replace:

```
* Residual ≡ structural holonomy.
```

With:

```
* Residual ≡ structural holonomy.  (requires Part II)
```

And add footer to section 14:

```
Equivalences marked (requires Part II) depend on Prime Radiant
kernel vocabulary (v1.5+). All other equivalences are derivable
from Part I alone.
```

Rationale: section 14 mixes operational and structural vocabulary without flagging which requires which background. A Part I reader hitting "holonomy" has no grounding for it.

---

## Summary

| Section | Change | Rationale |
|---------|--------|-----------|
| 1.2 | Remove forward reference to residual | Definition uses undefined term |
| 3 | Operationalize closure property | Remove dependency on structural vocabulary |
| 9 | Remove geometric closure claim | Hidden Part II dependency in Part III |
| 13 | Operationalize self-awareness condition 3 | Cold-start executability |
| 14 | Annotate kernel-dependent equivalences | Boundary clarity for Part I readers |

No phases added or removed.
No primitives modified.
No structural correspondence changed.
Part I self-containment guarantee restored.