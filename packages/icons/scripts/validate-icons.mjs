#!/usr/bin/env node
/**
 * Vault Icons - QA validator.
 *
 * Dependency-free checks over the generated icon set:
 *   - every manifest icon has a non-empty SVG in every weight
 *   - every SVG has a viewBox, no <script>, no on* handlers, no root width/height
 *   - no hardcoded colors (hex / rgb / hsl); only currentColor / none / opacity
 *   - unique names, category + tags present, originals present in all weights
 *
 * Exits 1 if any check fails.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PKG_DIR = path.resolve(SCRIPT_DIR, "..");
const GENERATED_DIR = path.join(PKG_DIR, "generated");
const MANIFEST_FILE = path.join(GENERATED_DIR, "manifest.json");
const PAYLOAD_DIR = path.join(GENERATED_DIR, "payload");

const MAX_DETAILS_PER_CHECK = 8;
const MAX_FAILURES_PRINTED = 40;

const ALLOWED_COLOR_VALUES = new Set([
  "currentcolor",
  "none",
  "transparent",
  "inherit",
]);

const failures = [];
const checkStats = new Map();

function fail(check, message) {
  failures.push({ check, message });
}

function stat(check, passed, total) {
  const entry = checkStats.get(check) || { passed: 0, total: 0 };
  entry.passed += passed;
  entry.total += total;
  checkStats.set(check, entry);
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function loadWeight(weight) {
  const dir = path.join(PAYLOAD_DIR, weight);
  if (!fs.existsSync(dir)) {
    throw new Error(`missing payload directory for weight "${weight}": ${dir}`);
  }
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .sort();
  const icons = new Map();
  for (const file of files) {
    const shard = readJson(path.join(dir, file));
    for (const [name, svg] of Object.entries(shard)) {
      icons.set(name, svg);
    }
  }
  return icons;
}

function rootSvgTag(svg) {
  const match = svg.match(/<svg\b[^>]*>/i);
  return match ? match[0] : "";
}

function hasEventHandler(svg) {
  const tags = svg.match(/<[a-zA-Z][^>]*>/g) || [];
  return tags.some((tag) => /\son[a-z]+\s*=/i.test(tag));
}

function findHardcodedColors(svg) {
  const problems = [];
  if (/#[0-9a-fA-F]{3,8}\b/.test(svg)) problems.push("hex color");
  if (/\b(?:rgba?|hsla?)\s*\(/i.test(svg)) problems.push("rgb()/hsl() color");

  const attrPattern =
    /\b(?:fill|stroke|stop-color|color|flood-color|lighting-color)\s*=\s*"([^"]*)"/gi;
  for (const match of svg.matchAll(attrPattern)) {
    const value = match[1].trim().toLowerCase();
    if (!value) continue;
    if (ALLOWED_COLOR_VALUES.has(value)) continue;
    if (value.startsWith("url(")) continue;
    problems.push(`color value "${value}"`);
  }
  if (/style\s*=\s*"[^"]*(?:color|fill|stroke)[^"]*:/i.test(svg)) {
    const style = svg.match(/style\s*=\s*"([^"]*)"/gi) || [];
    for (const block of style) {
      if (/#[0-9a-fA-F]{3,8}|rgba?\s*\(|hsla?\s*\(/i.test(block)) {
        problems.push("style color");
      }
    }
  }
  return [...new Set(problems)];
}

function checkSvg(weight, name, svg) {
  const label = `${name} [${weight}]`;

  const nonEmpty =
    typeof svg === "string" && svg.trim().length > 0 && /<svg\b/i.test(svg);
  stat("non-empty SVG", nonEmpty ? 1 : 0, 1);
  if (!nonEmpty) {
    fail("non-empty SVG", `${label}: missing or empty SVG`);
    return;
  }

  const root = rootSvgTag(svg);

  const hasViewBox = /\bviewBox\s*=\s*"[^"]*"/.test(root);
  stat("has viewBox", hasViewBox ? 1 : 0, 1);
  if (!hasViewBox) fail("has viewBox", `${label}: root <svg> has no viewBox`);

  const hasScript = /<script\b/i.test(svg);
  stat("no <script>", hasScript ? 0 : 1, 1);
  if (hasScript) fail("no <script>", `${label}: contains <script>`);

  const hasOnAttr = hasEventHandler(svg);
  stat("no on* handlers", hasOnAttr ? 0 : 1, 1);
  if (hasOnAttr) fail("no on* handlers", `${label}: contains an on* attribute`);

  const hasSizeAttrs = /\s(?:width|height)\s*=/.test(root);
  stat("no root width/height", hasSizeAttrs ? 0 : 1, 1);
  if (hasSizeAttrs) {
    fail("no root width/height", `${label}: root <svg> has width/height`);
  }

  const colorProblems = findHardcodedColors(svg);
  stat("no hardcoded colors", colorProblems.length === 0 ? 1 : 0, 1);
  if (colorProblems.length > 0) {
    fail(
      "no hardcoded colors",
      `${label}: ${colorProblems.join(", ")}`,
    );
  }
}

function printCheck(label, key) {
  const entry = checkStats.get(key);
  if (!entry) return;
  const ok = entry.passed === entry.total;
  const status = ok ? "ok" : "FAIL";
  console.log(
    `  ${label.padEnd(26)} ${String(entry.passed).padStart(6)}/${String(entry.total).padEnd(6)} ${status}`,
  );
}

function main() {
  if (!fs.existsSync(MANIFEST_FILE)) {
    console.error(`Cannot find ${MANIFEST_FILE}`);
    console.error("Run `pnpm --filter @vaultui/icons build` first.");
    process.exit(1);
  }
  if (!fs.existsSync(PAYLOAD_DIR)) {
    console.error(`Cannot find ${PAYLOAD_DIR}`);
    console.error("Run `pnpm --filter @vaultui/icons build` first.");
    process.exit(1);
  }

  const manifest = readJson(MANIFEST_FILE);
  const icons = Array.isArray(manifest.icons) ? manifest.icons : [];
  const weights = Array.isArray(manifest.weights) ? manifest.weights : [];
  const categories = Array.isArray(manifest.categories) ? manifest.categories : [];
  const categoryIds = new Set(categories.map((c) => c.id));

  console.log("");
  console.log("Vault Icons - QA validation");
  console.log("===========================");
  console.log(
    `Manifest: ${icons.length} icons, ${weights.length} weights, ${categories.length} categories, ${icons.filter((i) => i.source === "original").length} originals`,
  );

  if (icons.length === 0) fail("manifest", "manifest.icons is empty");
  if (weights.length === 0) fail("manifest", "manifest.weights is empty");

  // --- manifest integrity -------------------------------------------------
  const seenNames = new Set();
  let uniqueCount = 0;
  let metaOk = 0;
  let categoryOk = 0;

  for (const icon of icons) {
    const name = icon && icon.name;
    if (!name || typeof name !== "string") {
      fail("manifest", `icon with invalid name: ${JSON.stringify(icon)}`);
      continue;
    }
    if (seenNames.has(name)) {
      fail("unique names", `duplicate icon name "${name}"`);
    } else {
      uniqueCount += 1;
    }
    seenNames.add(name);

    const hasTags =
      Array.isArray(icon.tags) &&
      icon.tags.length > 0 &&
      icon.tags.every((t) => typeof t === "string" && t.trim().length > 0);
    const hasCategory =
      typeof icon.category === "string" && icon.category.trim().length > 0;
    if (hasTags && hasCategory) {
      metaOk += 1;
    } else {
      fail("category + tags", `"${name}": missing category or tags`);
    }

    if (hasCategory && categoryIds.has(icon.category)) {
      categoryOk += 1;
    } else {
      fail("known category", `"${name}": unknown category "${icon.category}"`);
    }
  }

  stat("unique names", uniqueCount, icons.length);
  stat("category + tags", metaOk, icons.length);
  stat("known category", categoryOk, icons.length);

  if (typeof manifest.total === "number" && manifest.total !== icons.length) {
    fail(
      "manifest totals",
      `manifest.total (${manifest.total}) !== icons.length (${icons.length})`,
    );
  }
  const originals = icons.filter((i) => i.source === "original");
  if (
    typeof manifest.originalCount === "number" &&
    manifest.originalCount !== originals.length
  ) {
    fail(
      "manifest totals",
      `manifest.originalCount (${manifest.originalCount}) !== originals (${originals.length})`,
    );
  }
  stat("totals consistent", failures.some((f) => f.check === "manifest totals") ? 0 : 1, 1);

  // --- payload coverage + SVG checks -------------------------------------
  const payloadByWeight = new Map();
  for (const weight of weights) {
    try {
      payloadByWeight.set(weight, loadWeight(weight));
    } catch (error) {
      fail("payload", `weight "${weight}": ${error.message}`);
    }
  }

  const expectedNames = new Set(icons.map((i) => i.name));
  let coverage = 0;
  let originalCoverage = 0;

  for (const icon of icons) {
    if (!icon || typeof icon.name !== "string") continue;
    let complete = true;
    for (const weight of weights) {
      const map = payloadByWeight.get(weight);
      const svg = map ? map.get(icon.name) : undefined;
      if (typeof svg !== "string" || svg.trim().length === 0) {
        complete = false;
        fail("coverage", `"${icon.name}": missing SVG for weight "${weight}"`);
      }
      if (map) checkSvg(weight, icon.name, svg);
    }
    if (complete) coverage += 1;
    if (icon.source === "original" && complete) originalCoverage += 1;
  }
  stat("all weights present", coverage, icons.length);
  stat("originals in all weights", originalCoverage, originals.length);

  for (const weight of weights) {
    const map = payloadByWeight.get(weight);
    if (!map) continue;
    let orphans = 0;
    for (const name of [...map.keys()].sort()) {
      if (!expectedNames.has(name)) {
        orphans += 1;
        fail("orphan payload", `weight "${weight}": "${name}" not in manifest`);
      }
    }
    if (orphans === 0) stat("no orphan payload", 1, 1);
    else stat("no orphan payload", 0, 1);
    console.log(`Payload:  ${weight.padEnd(8)} ${map.size} icons`);
  }

  // --- report -------------------------------------------------------------
  console.log("");
  console.log("Coverage");
  printCheck("all weights present", "all weights present");
  printCheck("non-empty SVG", "non-empty SVG");
  printCheck("originals in all weights", "originals in all weights");

  console.log("");
  console.log("SVG safety & shape");
  printCheck("viewBox present", "has viewBox");
  printCheck("no <script>", "no <script>");
  printCheck("no on* handlers", "no on* handlers");
  printCheck("no root width/height", "no root width/height");
  printCheck("no hardcoded colors", "no hardcoded colors");

  console.log("");
  console.log("Manifest integrity");
  printCheck("unique names", "unique names");
  printCheck("category + tags", "category + tags");
  printCheck("known categories", "known category");
  printCheck("no orphan payload names", "no orphan payload");
  printCheck("totals consistent", "totals consistent");

  if (failures.length === 0) {
    console.log("");
    console.log(
      `PASS - ${icons.length} icons x ${weights.length} weights validated with 0 problems.`,
    );
    process.exit(0);
  }

  console.log("");
  console.log(`FAIL - ${failures.length} problem(s) found:`);
  const byCheck = new Map();
  for (const item of failures) {
    if (!byCheck.has(item.check)) byCheck.set(item.check, []);
    byCheck.get(item.check).push(item.message);
  }
  let printed = 0;
  for (const [check, messages] of byCheck) {
    console.log(`  [${check}] ${messages.length}`);
    for (const message of messages.slice(0, MAX_DETAILS_PER_CHECK)) {
      if (printed >= MAX_FAILURES_PRINTED) break;
      console.log(`    - ${message}`);
      printed += 1;
    }
    if (messages.length > MAX_DETAILS_PER_CHECK) {
      console.log(`    ... and ${messages.length - MAX_DETAILS_PER_CHECK} more`);
    }
  }
  if (failures.length > MAX_FAILURES_PRINTED) {
    console.log(`  (${failures.length - MAX_FAILURES_PRINTED} additional problems not shown)`);
  }
  process.exit(1);
}

main();
