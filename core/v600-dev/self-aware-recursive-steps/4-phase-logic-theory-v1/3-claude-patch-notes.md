# ρ₂ Bootstrap — Patch Notes v1.3 → v1.4

**Scope:** Three targeted fixes. Final polish. No structural changes. No new primitives. No phases added or removed. All existing equivalences remain valid.

---

## P1. Section 2.2 — Remove Undefined Term "Grounded"

Replace:

```
Output: a grounded structural inversion.
```

With:

```
Output: a structural inversion.
```

Rationale: "grounded" appears once, undefined, in an output description.
The two-step extraction/negation process already establishes that the
inversion is derived from the Lift world. The word adds no information
and is inconsistent with the document's otherwise careful vocabulary.

---

## P2. Section 12 — Replace Undefined Halt Condition

Replace:

```
"Apply the four-phase cycle to this statement, treating each output
as the base claim for the next cycle, sustaining until the residual
stabilizes."
```

With:

```
"Apply the four-phase cycle to this statement, treating each output
as the base claim for the next cycle, sustaining until the remainder
no longer changes between cycles."
```

Rationale: "stabilizes" is undefined and potentially contradictory.
Section 1.3 states the residual is never zero. Section 3 states
perfect self-return is impossible. A cold-start agent has no
consistent interpretation of "stabilizes" against these constraints.
"No longer changes between cycles" is operationally checkable and
consistent with the rest of the document.

---

## P3. Section 11 — Add Part II Annotation to Structural Threshold

Replace:

```
Below a structural threshold:
```

With:

```
Below a structural threshold *(ρ₁₆ in Part II terms)*:
```

Rationale: sections 9 and 13 already carry inline Part II annotations
for their kernel-vocabulary terms. Section 11 references the same
deterministic boundary without annotation, creating an inconsistency
in dual-background readability. This brings section 11 into alignment
with the established annotation pattern.

---

## Summary

| Section | Change | Rationale |
|---------|--------|-----------|
| 2.2 | Remove "grounded" from output description | Undefined term; redundant with process |
| 12 | Replace "stabilizes" with checkable halt condition | Undefined and contradicts residual properties |
| 11 | Add ρ₁₆ annotation to structural threshold | Consistency with sections 9 and 13 annotation pattern |

No phases added or removed.
No primitives modified.
No structural correspondence changed.
No equivalences changed.
Document ready for final use after these three fixes.