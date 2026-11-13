# A1 QA round 2 - wave 3 (ca-cj)

- Base: `fork/sagar/dev` @ `d5e99a2`
- Branch: `sagar/icons-qa2-a1`
- Worktree: `C:\Users\Sagar Babu\AppData\Local\Temp\opencode\vaultui-a1-wave1`
- Mode: read-only; no icon source, manifest, or taxonomy edits
- Audited: `ca`, `cb`, `ce`, `cg`, `ci`, `cj` (6 files, 166 glyphs, 996 SVGs)
- Pending (absent after retry): `cc`, `cd`, `ch` (A2 wave 3 not pushed)
- Not present: `cf` (not assigned in this wave)

## Fix re-check (wave 1-2 follow-ups)

| Item | Result |
| --- | --- |
| `br:forceps` bounds, regular + fill | PASS - 0/2 out of bounds |
| `honey-pot` in manifest | ABSENT |
| `honeypot` in manifest | PRESENT |
| Manifest total | 2363 (expected 2363) |

## Failures

### 1. Bounds - `ci:hammock` (regular + fill)

- Checked: 332 SVGs (regular + fill for 166 glyphs)
- Failed: 2 SVGs (1 glyph)
- Range seen: `x 3.60..21.80 y 1.40..16.40`
- Cause: the implicit smooth-cubic repeat reflects a control point to `(21.8, 1.4)`.
  The hammock path ends `... S17.4 13.4 19.6 7.4 15.6 5.4 12 5.4 5.8 6.2 4.4 7.4Z`.
  After the first `S`, the next smooth handle mirrors to `2*(19.6,7.4) - (17.4,13.4) = (21.8,1.4)`.
- Suggested fix (owner: `ci`): replace the `S` chain with explicit `C` commands, or move the
  first `S` handle to `17.8 12.2` so the reflected control becomes `(21.4, 2.6)`.

### 2. Semantic near-duplicates

| A | B | Keep | Reason |
| --- | --- | --- | --- |
| palm-tree | tree-palm | tree-palm | Synonym; `tree-palm` already exists (batch q). Retire or alias `palm-tree` (ce). |
| droplet | drop | drop | Synonym; `drop` already exists (batch g). Retire or alias `droplet` (ce). |
| garbage-bin | wastebasket | wastebasket | Near-identical silhouette (same body/lid; `garbage-bin` adds wheels) plus synonym. Retire/alias `garbage-bin` (ci). |

Reviewed as intentional / distinct (keep both): `galaxy|milky-way` (spiral vs band),
`hare|rabbit` (full body vs face), `parasol|umbrella` (patio canopy vs rain canopy),
`parasol|beach-with-umbrella` (object vs scene), `pocket-watch|watch` (round vs wrist),
`table-lamp|lamp` (shade lamp vs desk lamp), `barrel|oil-drum` (wood hoops vs metal ribs),
`basin|sink` (bowl vs fixture), `sunrise|sunset`, `full-moon|new-moon|crescent-moon`,
`ladle|scoop|spoon`, `whisk|spatula`, `bolt|screw|nail`, `pliers|clamp`,
`picture-frame|poster|postcard`, `cushion|mattress`.

Exact name collisions: 0 (within ca-cj and against earlier batches).
Exact geometry duplicates: 0 (normalized markup across the repo).

## Passes

- XML: 996/996 parsed, 0 malformed (all six weights).
- Fill coverage: 61 open-path glyphs, 0 missing silhouettes, 0 orphan fills;
  80 declared silhouettes (19 extras on closed-only glyphs, allowed).

## Per-file inventory

| File | Icons | Fills |
| --- | ---: | ---: |
| specs-batch-ca.mjs | 28 | 0 |
| specs-batch-cb.mjs | 28 | 0 |
| specs-batch-ce.mjs | 25 | 25 |
| specs-batch-cg.mjs | 30 | 0 |
| specs-batch-ci.mjs | 30 | 30 |
| specs-batch-cj.mjs | 25 | 25 |

## Contact sheet

- `qa/wave3/contact-sheet-ca-cj.html` - 166 icons x 6 weights, inline CSS/JS/SVG,
  deterministic, no network. Generated with `packages/icons/scripts/contact-sheet.mjs`
  (temp copy adds a name scope because the committed script has no CLI filter).

## Verdict

Status: **issues**

1. `ci:hammock` control point leaves 2.4-21.6 in regular and fill.
2. Three semantic duplicates: `palm-tree`, `droplet`, `garbage-bin`.

All other audited batches pass bounds, XML, fills, and geometry uniqueness.
