# 💎 Vault UI

[![npm version](https://img.shields.io/npm/v/@vaultui/ui?color=5b66e8&label=npm%20v)](https://www.npmjs.com/package/@vaultui/ui)
[![npm downloads](https://img.shields.io/npm/dm/@vaultui/ui?color=5b66e8)](https://www.npmjs.com/package/@vaultui/ui)
[![bun ready](https://img.shields.io/badge/bun-ready-5b66e8?logo=bun&label=bun)](https://bun.sh/)
[![license](https://img.shields.io/badge/license-MIT%20%2B%20Commercial-5b66e8)](./LICENSE)
[![CI](https://github.com/SAGARBABU123/vaultui/actions/workflows/ci.yml/badge.svg)](https://github.com/SAGARBABU123/vaultui/actions/workflows/ci.yml)

**Premium React + Tailwind components — the ones you can't find elsewhere.**

A Turborepo monorepo with three apps (component docs, icon explorer, Storybook), package-per-kit, one token-driven theme engine, and a free tier published once to **npm** — installable with **npm, yarn, pnpm, or bun** (`@vaultui/ui`, `@vaultui/tokens`, `@vaultui/utils`).

> ⚠️ **Working name.** Renaming later = one find-replace of `@vault` / `vault-ui`.

## Structure

```
vault-ui/
├── apps/
│   ├── components/   # React + Vite — docs, marketplace, guidelines, playground
│   ├── icons/        # Astro — 1,512-icon explorer (6 weights, static)
│   └── storybook/    # Storybook — the component storefront
├── packages/
│   ├── ai-chat/      # 🤖 AI Agent Kit
│   ├── cli/          # vault-ui scaffolding CLI
│   ├── collab/       # realtime collaboration kit
│   ├── commerce/     # 🛒 Commerce Kit
│   ├── configs/      # shared tsconfig
│   ├── data-viz/     # 📈 Data Viz Pro
│   ├── dev-tools/    # 🧰 Dev Tools Kit
│   ├── icons/        # icon pipeline + generated dataset (Phosphor, MIT)
│   ├── marketing/    # landing / marketing sections
│   ├── project/      # 🗂️ Project Mgmt Kit
│   ├── tokens/       # design tokens / theme engine (Tailwind v4 CSS-first)
│   ├── ui/           # free-tier components (MIT teaser)
│   └── utils/        # cn() + shared helpers
├── scripts/          # registry + tailwind source generators
├── .github/workflows # CI + Cloudflare deploy pipelines
├── LICENSE           # MIT (free tier)
├── COMMERCIAL-LICENSE.md
├── RELEASE.md        # release guide + consumer smoke tests
└── pnpm-workspace.yaml
```

## Getting started

```bash
pnpm install
pnpm typecheck         # turbo: every package + app
pnpm build             # turbo: every package + app
pnpm components        # docs app      → http://localhost:3000
pnpm icons             # icon explorer → http://localhost:4321
pnpm storybook         # Storybook     → http://localhost:6006
```

## Install the components

One package, one registry (npm) — pick your package manager:

```bash
# npm
npm i @vaultui/ui @vaultui/tokens

# yarn
yarn add @vaultui/ui @vaultui/tokens

# pnpm
pnpm add @vaultui/ui @vaultui/tokens

# bun (installs the same npm tarball — no separate bun registry)
bun add @vaultui/ui @vaultui/tokens
```

## Roadmap

See [`../component-marketplace-roadmap.md`](../component-marketplace-roadmap.md) for the full phased plan (Phase 0–6).

## Commands (Turborepo)

| Command             | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `turbo dev`         | run every app/package dev task                 |
| `turbo build`       | build everything (turbo-cached)                |
| `turbo typecheck`   | typecheck every package and app                |
| `pnpm components`   | components docs app only (Vite, :3000)         |
| `pnpm icons`        | icon explorer only (Astro, :4321)              |
| `pnpm storybook`    | Storybook only (:6006)                         |
| `pnpm icons:build`  | static icon site → `apps/icons/dist`           |
| `pnpm components:build` | production components build → `apps/components/dist` |

## Vault Icons (`apps/icons`)

> Program status, agent assignments and the resume playbook live in
> [`ICON-PROGRAM.md`](./ICON-PROGRAM.md). Read it before continuing icon work.

A static icon explorer for the 1,512-icon Vault set — six weights, 9,072 SVG files — built with **Astro + Tailwind v4** and shipped to Cloudflare Pages.

- `packages/icons` — build pipeline: ingests the MIT-licensed Phosphor geometry, strips metadata, forces `currentColor`, assigns the 10-category taxonomy and search tags, then emits `manifest.json`, `search-index.json` and per-weight/per-letter SVG shards.
- `apps/icons` — floating app shell, virtualized icon grid, fuzzy search, and a right-side inspector drawer with React / Vue / Svelte / HTML snippets.

```bash
pnpm icons        # dev server — http://localhost:4321
pnpm icons:build  # static build — apps/icons/dist
```

**Cloudflare Pages:** build command `pnpm icons:build`, output directory `apps/icons/dist`.
