/**
 * Vault Icons — build pipeline.
 *
 * Reference geometry: @phosphor-icons/core (MIT). Every file is re-authored
 * into the Vault spec on the way out:
 *   - SVGO multipass (metadata, namespaces and editor cruft stripped)
 *   - all paint forced to `currentColor`
 *   - width/height removed so CSS owns sizing, viewBox preserved (256 grid)
 *   - one canonical name, one category, searchable tags
 *
 * Emits (gitignored, regenerated on install/build):
 *   generated/manifest.json           full inventory + taxonomy counts
 *   generated/search-index.json       compact client search index
 *   generated/payload/<weight>/<a-z>.json  lazily fetched SVG shards
 *   generated/meta.json               build stats
 */

import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pathToFileURL } from "node:url";
import { optimize } from "svgo";
import { ALIASES, CATEGORIES, CATEGORY_IDS, classify } from "../taxonomy.mjs";
import { ORIGINAL_FILLS, ORIGINAL_ICONS, renderIcon } from "../original/specs.mjs";

/**
 * Batch files (specs-batch-*.mjs) let multiple authors work in parallel.
 * Each module exports `BATCH_X` (inner markup map) and optionally
 * `BATCH_X_FILLS` (solid silhouettes for open-path glyphs).
 */
async function loadBatches() {
  const dir = path.join(here, "..", "original");
  const files = (await readdir(dir))
    .filter((file) => /^specs-batch-.*\.mjs$/.test(file))
    .sort();

  const icons = {};
  const fills = {};
  for (const file of files) {
    const mod = await import(pathToFileURL(path.join(dir, file)).href);
    for (const [key, value] of Object.entries(mod)) {
      if (!key.startsWith("BATCH_")) continue;
      if (key.endsWith("_FILLS")) Object.assign(fills, value);
      else Object.assign(icons, value);
    }
  }
  return { icons, fills };
}

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const assets = path.join(root, "node_modules/@phosphor-icons/core/assets");
const outDir = path.join(root, "generated");

const WEIGHTS = ["thin", "light", "regular", "bold", "fill", "duotone"];
const SVG_OPTIONS = {
  multipass: true,
  floatPrecision: 2,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          removeTitle: false,
          convertColors: { currentColor: true },
        },
      },
    },
  ],
};

const stripDimensions = (svg) =>
  svg.replace(/(<svg\b[^>]*?)\s(?:width|height)="[^"]*"/g, "$1");

const shardKey = (name) => {
  const first = name[0];
  return /[a-z]/i.test(first) ? first.toLowerCase() : "_";
};

const reverseAliases = (() => {
  const map = new Map();
  for (const [alias, targets] of Object.entries(ALIASES)) {
    for (const target of targets) {
      if (!map.has(target)) map.set(target, []);
      map.get(target).push(alias);
    }
  }
  return map;
})();

const tokensOf = (name) =>
  name
    .split("-")
    .filter((t) => t.length > 0 && !["simple", "alt"].includes(t));

function buildTags(name) {
  const tags = new Set(tokensOf(name));
  for (const alias of reverseAliases.get(name) ?? []) {
    for (const token of tokensOf(alias)) tags.add(token);
  }
  return [...tags];
}

async function main() {
  const started = Date.now();
  await rm(outDir, { recursive: true, force: true });

  const filesByWeight = {};
  for (const weight of WEIGHTS) {
    const map = new Map();
    for (const file of await readdir(path.join(assets, weight))) {
      if (!file.endsWith(".svg")) continue;
      const base = file.slice(0, -4);
      const suffix = weight === "regular" ? "" : `-${weight}`;
      const name = suffix && base.endsWith(suffix) ? base.slice(0, -suffix.length) : base;
      map.set(name, file);
    }
    filesByWeight[weight] = map;
  }

  const names = [...filesByWeight.regular.keys()].sort();

  if (names.length === 0) throw new Error("No reference SVGs found.");

  const icons = [];
  const perCategory = Object.fromEntries(CATEGORY_IDS.map((id) => [id, 0]));
  const perWeight = Object.fromEntries(WEIGHTS.map((w) => [w, 0]));
  let totalBytes = 0;

  const shards = new Map();
  for (const weight of WEIGHTS) {
    for (const letter of "abcdefghijklmnopqrstuvwxyz_") {
      shards.set(`${weight}/${letter}`, Object.create(null));
    }
  }

  for (const name of names) {
    const category = classify(name);
    perCategory[category] += 1;

    for (const weight of WEIGHTS) {
      const raw = await readFile(
        path.join(assets, weight, filesByWeight[weight].get(name)),
        "utf8",
      );
      const { data } = optimize(raw, SVG_OPTIONS);
      const svg = stripDimensions(data);
      totalBytes += Buffer.byteLength(svg);
      perWeight[weight] += 1;
      shards.get(`${weight}/${shardKey(name)}`)[name] = svg;
    }

    icons.push({
      name,
      category,
      tags: buildTags(name),
      aliases: reverseAliases.get(name) ?? [],
      source: "reference",
    });
  }

  // Our own masters win: same name replaces the reference glyph, new names are
  // appended to the inventory. This is the migration path to a fully original
  // set — delete the reference source once every icon is covered.
  const batches = await loadBatches();
  const originalGlyphs = { ...ORIGINAL_ICONS, ...batches.icons };
  const originalFills = { ...ORIGINAL_FILLS, ...batches.fills };
  const originalNames = Object.keys(originalGlyphs);
  const known = new Set(icons.map((icon) => icon.name));

  for (const name of originalNames) {
    if (!known.has(name)) {
      const category = classify(name);
      perCategory[category] += 1;
      icons.push({
        name,
        category,
        tags: buildTags(name),
        aliases: reverseAliases.get(name) ?? [],
        source: "original",
      });
      known.add(name);
    } else {
      const entry = icons.find((icon) => icon.name === name);
      if (entry) entry.source = "original";
    }

    const inner = originalGlyphs[name];
    const fill = originalFills[name] ?? inner;
    for (const weight of WEIGHTS) {
      shards.get(`${weight}/${shardKey(name)}`)[name] = renderIcon(inner, fill, weight);
    }
  }

  for (const weight of WEIGHTS) perWeight[weight] = icons.length;
  totalBytes = 0;
  for (const payload of shards.values()) {
    for (const svg of Object.values(payload)) totalBytes += Buffer.byteLength(svg);
  }

  for (const [key, payload] of shards) {
    const dir = path.join(outDir, "payload", path.dirname(key));
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, `${path.basename(key)}.json`), JSON.stringify(payload));
  }

  const manifest = {
    name: "Vault Icons",
    grids: { original: 24, reference: 256 },
    weights: WEIGHTS,
    total: icons.length,
    originalCount: icons.filter((icon) => icon.source === "original").length,
    categories: CATEGORIES.map((c) => ({ ...c, count: perCategory[c.id] })),
    icons,
  };

  const searchIndex = icons.map((icon) => [
    icon.name,
    CATEGORY_IDS.indexOf(icon.category),
    icon.tags.join(" "),
    icon.aliases.join(" "),
  ]);

  const meta = {
    generatedAt: new Date().toISOString(),
    icons: icons.length,
    originals: manifest.originalCount,
    files: icons.length * WEIGHTS.length,
    weights: perWeight,
    perCategory,
    svgBytes: totalBytes,
    buildMs: Date.now() - started,
  };

  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
  await writeFile(path.join(outDir, "search-index.json"), JSON.stringify(searchIndex));
  await writeFile(path.join(outDir, "meta.json"), JSON.stringify(meta, null, 2));

  const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
  console.log(`Vault Icons: ${icons.length} icons × ${WEIGHTS.length} weights = ${icons.length * WEIGHTS.length} SVGs (${manifest.originalCount} original)`);
  console.log(`Payload ${kb(totalBytes)} · search index ${kb(Buffer.byteLength(JSON.stringify(searchIndex)))} · ${meta.buildMs} ms`);
  console.log(CATEGORY_IDS.map((id) => `${id}: ${perCategory[id]}`).join(" | "));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
