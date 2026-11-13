# A1 QA sweep - waves 1-2 (bd-by)

- Base: `fork/sagar/dev` @ `19cf600`
- Branch: `sagar/icons-qa-a1`
- Worktree: `C:\Users\Sagar Babu\AppData\Local\Temp\opencode\vaultui-a1-wave1`
- Scope: `specs-batch-bd.mjs` through `specs-batch-by.mjs` (22 files)
- Glyphs: 592 | SVGs at 6 weights: 3552
- Mode: read-only on icon sources; no `specs-batch-*` or `taxonomy.mjs` edits

> Note: the task parenthetical (540+540+540+294+384 = 2298) does not match base `19cf600`, which carries 22 files in bd-by (592 glyphs / 3552 SVGs). This report covers the full stated range.

## 1. Bounds audit

- Checked: 1184 SVGs (regular + fill for 592 glyphs)
- Failures: 1 glyph / 2 SVGs
- FAIL `specs-batch-br.mjs:forceps` [regular, fill] - minY lands just under 2.4 (source dot sits exactly on the 2.4 rail, arc sampling rounds to 2.40)
  - Fix: nudge the two pivot dots down by ~0.1 (e.g. 2.4 -> 2.5) or shrink the radius 1.4 -> 1.3
- All other glyphs sit inside 2.4-21.6 in both weights.

## 2. XML well-formedness

- Parsed: 3552 generated SVGs (all six weights, every scope glyph)
- Failures: 0 (real XML parser: .NET `[xml]`)

## 3. Fill coverage

- Open-path glyphs: 367
- Missing silhouettes: 0
- Orphan fills (key with no icon): 0
- Declared silhouettes: 387 (20 extras supplied for closed-only glyphs; allowed)

## 4. Duplicate / synonym audit

- Exact name collisions inside bd-by: 0
- Exact name collisions against bc and earlier: 0
- Exact geometry duplicates (normalized markup, whole repo): 0
- Name-stem heuristic pairs: 22; after manual review: 1 true synonym, 21 intentional variants.

### True synonym (action recommended)

| A | B | Keep | Reason |
| --- | --- | --- | --- |
| honeypot | honey-pot | honeypot | Same object name; honeypot already exists in bg, honey-pot (bv) is a synonym. Keep canonical honeypot and alias or retire honey-pot. |

### Heuristic hits reviewed as intentional variants

| A | B | Keep | Reason |
| --- | --- | --- | --- |
| certificate | certificate-check | both | Certificate document vs document + check badge; intentional modifier. |
| certificate | certificate-warning | both | Certificate document vs document + warning badge; intentional modifier. |
| certificate-check | certificate-warning | both | Different badge symbol in the same certificate family. |
| domain | domain-check | both | Domain globe vs globe + check badge; intentional modifier. |
| domain | domain-plus | both | Domain globe vs globe + plus badge; intentional modifier. |
| domain | domain-x | both | Domain globe vs globe + x badge; intentional modifier. |
| domain-check | domain-plus | both | Same family, different badge symbol. |
| domain-check | domain-x | both | Same family, different badge symbol. |
| domain-plus | domain-x | both | Same family, different badge symbol. |
| identity | identity-check | both | Portrait frame vs portrait + check; intentional modifier. |
| server | server-check | both | Plain server vs server + check badge. |
| server | server-off | both | Plain server vs server + power badge. |
| server | server-slash | both | Plain server vs slashed server. |
| server-check | server-off | both | Different status badge. |
| server-check | server-slash | both | Badge vs slash state. |
| server-off | server-slash | both | Power badge vs slash state. |
| password | password-check | both | Field of dots vs field + check badge. |
| menu | menu-simple | both | Simple line-count variant. |
| police-car | police-car-light | both | Light-bar variant. |
| luggage | left-luggage | both | Left-arrow variant authored in the same bn batch; silhouettes differ. |
| airplane | small-airplane | both | Detailed vs simplified airplane; silhouettes differ. |

### Manual semantic overlaps (not name-stem hits)

| A | B | Keep | Reason |
| --- | --- | --- | --- |
| pan | frying-pan | both | Lidded saucepan vs open skillet; distinct silhouettes. |
| doughnut | bagel | both | Glazed ring with drips vs seed-topped ring; distinct. |
| cheese | cheese-wedge | both | Rectangular block vs triangular wedge; distinct. |
| beer-stein | beer-mug | both | Faceted stein vs handled mug with foam; distinct. |
| pint-glass | glass-of-milk | both | Tapered pint with fill lines vs milk glass with splash; distinct. |
| barbell | dumbbell | both | Long bar with end plates vs short thick dumbbell; distinct. |
| badminton | shuttlecock | both | Rounded feather fan in flight vs flat-top shuttle at rest; distinct. |
| cricket-bat | cricket-game | both | Bat alone vs bat + ball + stumps; distinct. |
| field-hockey | hockey-stick | both | Stick + ball vs stick + puck; distinct. |
| archery | bow | both | Bow with string and arrow vs bow only; distinct. |
| firecracker | sparkler | both | Fused firecracker vs sparkler stick with sparks; distinct. |
| doll | teddy-bear | both | Rag doll with pigtails vs bear with round ears; distinct. |
| backpack | duffel-bag | both | Two-strap backpack vs cylindrical duffel; distinct. |
| hammer | mallet | both | Claw hammer vs round-headed mallet; distinct. |
| diamond | gem-stone | both | Brilliant outline vs emerald-cut facets; distinct. |
| nail | sewing-needle | both | Flat-head nail vs eyed sewing needle; distinct. |

## 5. Contact sheet

- `qa/wave1-2/contact-sheet-bd-by.html` - 592 icons x 6 weights, self-contained, inline CSS/JS/SVG, no network, deterministic sort/category order.
- Generated with `packages/icons/scripts/contact-sheet.mjs` (same generator; a temp copy adds a name-scope filter because the committed script has no CLI filter).
- Full-set reference sheet also generated by the unmodified script: `packages/icons/generated/contact-sheet.html` (2364 icons, gitignored).

## 6. Per-file inventory

| File | Icons | Fills |
| --- | ---: | ---: |
| specs-batch-bd.mjs | 30 | 24 |
| specs-batch-be.mjs | 30 | 19 |
| specs-batch-bf.mjs | 30 | 25 |
| specs-batch-bg.mjs | 30 | 20 |
| specs-batch-bh.mjs | 30 | 29 |
| specs-batch-bi.mjs | 30 | 27 |
| specs-batch-bj.mjs | 30 | 23 |
| specs-batch-bk.mjs | 30 | 25 |
| specs-batch-bl.mjs | 30 | 27 |
| specs-batch-bm.mjs | 25 | 19 |
| specs-batch-bn.mjs | 21 | 12 |
| specs-batch-bo.mjs | 25 | 0 |
| specs-batch-bp.mjs | 10 | 0 |
| specs-batch-bq.mjs | 30 | 27 |
| specs-batch-br.mjs | 30 | 29 |
| specs-batch-bs.mjs | 30 | 30 |
| specs-batch-bt.mjs | 28 | 17 |
| specs-batch-bu.mjs | 30 | 17 |
| specs-batch-bv.mjs | 30 | 17 |
| specs-batch-bw.mjs | 27 | 0 |
| specs-batch-bx.mjs | 29 | 0 |
| specs-batch-by.mjs | 7 | 0 |

## Verdict

- Status: **issues**
  1. `br:forceps` clips the 2.4 lower bound by ~0.0003 (regular + fill). Owner: batch br.
  2. `honey-pot` duplicates the earlier `honeypot` concept; keep `honeypot` as canonical.
- Everything else: bounds, XML, fill coverage, and geometry uniqueness are clean.
