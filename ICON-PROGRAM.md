# Vault Icons — Program State & Resume Playbook

> Source of truth for resuming the icon program. If a session is lost, read this
> file top-to-bottom and continue. Update the snapshot after every collected batch.

Last updated: 2026-11-12 (batches O & P collected)
Repo: `C:\Users\Sagar Babu\vaultui` — GitHub `SAGARBABU123/vaultui`
Working branch: **`sagar/dev`** (do not work on `main`)

---

## 1. Current snapshot

| Item | Value |
| --- | --- |
| Commit (`sagar/dev`) | `8907848` |
| Remote tip (`origin/sagar/dev`) | `8907848` |
| Inventory | **1,557 icons × 6 weights = 9,342 SVGs** |
| Original masters | **473 (30.4%)** |
| Reference source | Phosphor MIT (being replaced batch by batch) |
| Validator | **PASS** — 0 problems |
| Site pages | 1,559 (index + 1,556 icon pages + 404) |
| Live URL | **https://vault-icons.kaundinya.workers.dev** |
| Worker version | `29a55934` |
| Cloudflare account subdomain | `kaundinya` |
| Existing workers (do not overwrite) | `admin`, `app`, `kaundinya-consultancy-marketing-page` |

Per-category counts (after taxonomy rebalance): core-ui 259 · arrows 166 · alerts 97 ·
dev 166 · text 98 · media 117 · files 86 · commerce 76 · communication 118 · objects-life 374.

---

## 2. Role model

- **Manager (me):** collect agent branches, verify diffs, build, validate, typecheck,
  deploy, update this file, assign next batches. Does not hand-draw icons.
- **Agent 1:** batch author (currently Batch R).
- **Agent 2:** batch author + taxonomy/QA tooling (currently Batch S).
- **Agent 3:** batch author (currently Batch T).

**Hard rules for every agent**
1. Work in a **separate clone / git worktree** — never the manager's checkout.
2. One new file per batch: `packages/icons/original/specs-batch-<letter>.mjs`.
3. Never `git add -A`, never push `main`, never edit `build.mjs`, `specs.mjs`,
   `taxonomy.mjs`, app files, lockfiles or CI.
4. Base the branch on the latest `origin/sagar/dev`.
5. Commit only that one file; push the branch; report commit hash + counts.

**Master file contract**
```js
export const BATCH_X = { "icon-name": `<path .../>` };
export const BATCH_X_FILLS = { "icon-name": `<path .../>` }; // open-path icons only
```
- 24×24 grid, geometry inside 2.4–21.6, outline stroke 1.6 optically.
- Inner markup only — no `<svg>`, no `fill=`, no `stroke=`.
- 1–4 shapes, rounded caps/joins, closed shapes preferred.
- Every open-path glyph needs a solid silhouette in `*_FILLS`.
- Original geometry only — never copy/trace third-party sets.
- Skip names already `source: "original"` in `packages/icons/generated/manifest.json`.

---

## 3. Collection protocol (manager)

```bash
git fetch origin sagar/icons-batch-<letter>
git log --oneline -1 FETCH_HEAD
git diff --stat FETCH_HEAD^ FETCH_HEAD        # must be exactly 1 file
git checkout FETCH_HEAD -- packages/icons/original/specs-batch-<letter>.mjs
git commit -m "feat(icons): collect batch <X> originals (30 glyphs)"
node packages/icons/scripts/build.mjs
node packages/icons/scripts/validate-icons.mjs
pnpm --filter @vaultui/icons-site typecheck
pnpm --filter @vaultui/icons-site build
git push origin sagar/dev
# deploy (from apps/icons)
pnpm exec wrangler deploy
```
Then update §1 and §4 here.

`build.mjs` auto-merges every `original/specs-batch-*.mjs` file, so no wiring is needed.

---

## 4. Batch ledger

| Batch | Agent | Icons | Status | Originals after |
| --- | --- | --- | --- | --- |
| base `specs.mjs` | manager | 55 | done | 55 |
| C | Agent 1 | 30 | collected `152d95b` | 85 |
| D | Agent 3 | 30 | collected `f01a64a` | 115 |
| F | Agent 3 | 30 | collected `8fcd4d8` | 145 |
| E | Agent 1 | 30 | collected `16f1474` | 175 |
| G | Agent 2 | 30 | collected `ba1f239` | 205 |
| H | Agent 3 | 30 | collected `0b6823e` | 233 |
| I | Agent 1 | 30 | collected `c2348bd` | 263 |
| J | Agent 2 | 30 | collected `9ed477e` | 293 |
| K | Agent 3 | 30 | collected `56331be` | 323 |
| L | Agent 1 | 30 | collected `7a768e5` | 353 |
| M | Agent 2 | 30 | collected `c509851` | 383 |
| N | Agent 3 | 30 | collected `e705cde` | 413 |
| O | Agent 1 | 30 | collected `3a411c3` | 443 |
| P | Agent 2 | 30 | collected `3064dd9` | 473 |
| **Q** | Agent 3 | 30 | **in flight** | ~503 |
| **R** | Agent 1 | 30 | assigned | ~533 |
| **S** | Agent 2 | 30 | assigned | ~563 |
| **T** | Agent 3 | 30 | assigned | ~593 |

Next letters: U, V, W … (30 per batch). Remaining reference glyphs ≈ 1,084 → ~36 batches.

---

## 5. Phase board

**Complete**
1. Monorepo (`apps/components`, `apps/icons`, `apps/storybook`)
2. Icon pipeline (6 weights, shards, taxonomy, search index)
3. Icons app (light Vault theme, floating shell, virtualized grid, drawer, snippets)
4. SEO (1,556 per-icon pages, sitemap, 404, canonical, JSON-LD)
5. Interaction/a11y (keyboard grid nav, history-aware drawer, focus trap, skip link)
6. Cloudflare deploy (`vault-icons.kaundinya.workers.dev`)
7. QA tooling (`validate-icons.mjs`, `contact-sheet.mjs`) + CI validation
8. Original program started (413 glyphs)

**Pending**
9. Finish original batch program (~38 more batches)
10. Batch QA/audit (fill/duotone, optical consistency) per delivery
11. App: favorites/recents + persistence of weight/code tab
12. App: all-weights comparison + size control in drawer
13. Docs page (getting started / usage)
14. Distribution: `@vaultui/icons` npm package, sprite sheet, bulk download
15. SEO v2: category pages, OG images, internal linking
16. QA: Playwright e2e, Lighthouse CI, visual regression
17. CI/CD v2: Workers deploy workflow (currently Pages-based), preview deploys
18. Release ops: merge `main` PR (protected), Vercel root → `apps/components`
19. Cleanup: remove Phosphor + `THIRD-PARTY.md` when coverage hits 100%
20. Perf: font preload, hashed assets, cache headers
21. Search v2: ranking/typo tolerance, zero-result suggestions

---

## 6. Git & deploy notes

- `main` is **protected** (PR + 3 required checks). Direct push is rejected.
  Monorepo PR branch: `feat/monorepo` (`d7bc610`).
  Compare: `https://github.com/SAGARBABU123/vaultui/compare/main...feat/monorepo?expand=1`
- Cloudflare auth is already stored (wrangler OAuth, `gudipudimani63@gmail.com`).
- `apps/icons/wrangler.jsonc`: worker `vault-icons`, static assets `./dist`,
  `not_found_handling: "404-page"`.
- The requested `app.vault-icons.workers.dev` is impossible without changing the
  account subdomain (currently `kaundinya`) and the `app` worker already exists —
  do not overwrite it.
- The old `apps/web/design inspiratipn zip/*:Zone.Identifier` paths are invalid on
  Windows. The repo uses sparse-checkout; avoid plain `git add -A` on this checkout.

---

## 7. Resume prompt (paste this when you come back)

```text
Read ICON-PROGRAM.md at the repo root and resume the Vault Icons program as manager.
1) Check sagar/dev and origin; collect any pushed sagar/icons-batch-* branches that are not merged.
2) For each: verify one-file diff, apply, build, validate, typecheck, site build, push, deploy.
3) Update ICON-PROGRAM.md snapshot + batch ledger.
4) Assign next 30-icon batches (R/S/T) to Agents 1/2/3 with the standard brief.
5) Report counts, coverage %, live URL and worker version.
```
