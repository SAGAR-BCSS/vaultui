#!/usr/bin/env node
/**
 * Vault Icons - static contact sheet.
 *
 * Reads generated/manifest.json plus generated/payload/<weight>/*.json and
 * writes a single self-contained HTML file (inline CSS/JS, no network, no
 * dependencies): icons grouped by category, all weights per card, with a text
 * filter and a weight filter.
 *
 * Output is deterministic: stable category order (manifest order), icons sorted
 * by name, weights in manifest order, no timestamps.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PKG_DIR = path.resolve(SCRIPT_DIR, "..");
const GENERATED_DIR = path.join(PKG_DIR, "generated");
const MANIFEST_FILE = path.join(GENERATED_DIR, "manifest.json");
const PAYLOAD_DIR = path.join(GENERATED_DIR, "payload");
const OUTPUT_FILE = path.join(GENERATED_DIR, "contact-sheet.html");

const FALLBACK_WEIGHTS = ["thin", "light", "regular", "bold", "fill", "duotone"];

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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function byName(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

function main() {
  if (!fs.existsSync(MANIFEST_FILE)) {
    console.error(`Cannot find ${MANIFEST_FILE}`);
    console.error("Run `pnpm --filter @vaultui/icons build` first.");
    process.exit(1);
  }

  const manifest = readJson(MANIFEST_FILE);
  const icons = (Array.isArray(manifest.icons) ? manifest.icons : [])
    .filter((icon) => icon && typeof icon.name === "string")
    .slice()
    .sort(byName);
  const weights =
    Array.isArray(manifest.weights) && manifest.weights.length > 0
      ? manifest.weights
      : FALLBACK_WEIGHTS;
  const categories = Array.isArray(manifest.categories) ? manifest.categories : [];

  const payload = new Map();
  for (const weight of weights) {
    payload.set(weight, loadWeight(weight));
  }

  const groups = new Map();
  for (const category of categories) {
    groups.set(category.id, []);
  }
  const uncategorized = [];
  for (const icon of icons) {
    if (groups.has(icon.category)) groups.get(icon.category).push(icon);
    else uncategorized.push(icon);
  }

  const labelById = new Map(categories.map((c) => [c.id, c.label || c.id]));
  const parts = [];

  parts.push("<!doctype html>");
  parts.push('<html lang="en">');
  parts.push("<head>");
  parts.push('<meta charset="utf-8">');
  parts.push('<meta name="viewport" content="width=device-width, initial-scale=1">');
  parts.push("<title>Vault Icons - Contact Sheet</title>");
  parts.push("<style>");
  parts.push(
    [
      ":root{--bg:#f6f6f7;--panel:#fff;--ink:#16161a;--muted:#6a6a75;--line:#e3e3e8;--chip:#efeff2}",
      "@media (prefers-color-scheme:dark){:root{--bg:#0c0c10;--panel:#15151b;--ink:#f2f2f5;--muted:#a0a0ad;--line:#26262f;--chip:#1d1d25}}",
      "*{box-sizing:border-box}",
      "[hidden]{display:none!important}",
      "html,body{margin:0}",
      'body{background:var(--bg);color:var(--ink);font:14px/1.45 ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}',
      ".top{position:sticky;top:0;z-index:10;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;padding:12px 20px;background:var(--bg);border-bottom:1px solid var(--line)}",
      ".brand{display:flex;align-items:center;gap:10px;min-width:0}",
      ".brand h1{font-size:16px;margin:0;letter-spacing:-.01em}",
      ".brand .dot{width:10px;height:10px;border-radius:50%;background:var(--ink)}",
      ".brand .meta{color:var(--muted);font-size:12px;white-space:nowrap}",
      ".controls{display:flex;flex-wrap:wrap;gap:8px;align-items:center}",
      '#q{width:min(340px,56vw);appearance:none;border:1px solid var(--line);background:var(--panel);color:var(--ink);border-radius:9px;padding:8px 11px;font:inherit;outline:none}',
      "#q:focus{border-color:var(--ink)}",
      ".wsel{display:flex;align-items:center;gap:6px;color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.05em}",
      "#weight{appearance:none;border:1px solid var(--line);background:var(--panel);color:var(--ink);border-radius:9px;padding:8px 10px;font:inherit;text-transform:none;letter-spacing:0}",
      "main{max-width:1680px;margin:0 auto;padding:8px 20px 60px}",
      ".cat{margin:26px 0 0}",
      ".cat>header{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;margin:0 0 12px}",
      ".cat h2{font-size:15px;margin:0;letter-spacing:-.01em}",
      ".cat .count{color:var(--muted);font-size:12px;font-variant-numeric:tabular-nums}",
      ".cat .blurb{color:var(--muted);font-size:12px;flex-basis:100%}",
      ".grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(228px,1fr));gap:12px}",
      ".card{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:10px}",
      '.card .name{margin:0 0 8px;font:600 12.5px/1.3 ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      ".tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}",
      ".tile{margin:0;display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 4px;border:1px solid var(--line);border-radius:8px;color:var(--ink)}",
      ".tile .ico{width:28px;height:28px;display:flex;align-items:center;justify-content:center}",
      ".tile .ico svg{display:block;width:100%;height:100%}",
      ".tile figcaption{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.05em}",
      ".empty{margin:40px auto;text-align:center;color:var(--muted)}",
      ".foot{margin-top:40px;padding-top:16px;border-top:1px solid var(--line);color:var(--muted);font-size:12px}",
    ].join("\n"),
  );
  parts.push("</style>");
  parts.push("</head>");
  parts.push("<body>");

  parts.push('<header class="top">');
  parts.push('<div class="brand"><span class="dot" aria-hidden="true"></span>');
  parts.push("<h1>Vault Icons</h1>");
  parts.push(
    `<span class="meta">${icons.length} icons &middot; ${weights.length} weights</span></div>`,
  );
  parts.push('<div class="controls">');
  parts.push(
    '<input id="q" type="search" placeholder="Filter by name, tag or category..." autocomplete="off" spellcheck="false" aria-label="Filter icons">',
  );
  parts.push('<label class="wsel">Weight');
  parts.push('<select id="weight" aria-label="Weight filter">');
  parts.push('<option value="all">All</option>');
  for (const weight of weights) {
    parts.push(`<option value="${escapeHtml(weight)}">${escapeHtml(weight)}</option>`);
  }
  parts.push("</select></label>");
  parts.push("</div>");
  parts.push("</header>");

  parts.push("<main>");
  parts.push(`<div id="empty" class="empty" hidden>No icons match the current filters.</div>`);

  function renderSection(id, label, blurb, sectionIcons) {
    parts.push(`<section class="cat" data-cat="${escapeHtml(id)}">`);
    parts.push("<header>");
    parts.push(`<h2>${escapeHtml(label)}</h2>`);
    parts.push(
      `<span class="count">${sectionIcons.length} icon${sectionIcons.length === 1 ? "" : "s"}</span>`,
    );
    if (blurb) parts.push(`<span class="blurb">${escapeHtml(blurb)}</span>`);
    parts.push("</header>");
    parts.push('<div class="grid">');

    for (const icon of sectionIcons) {
      const name = icon.name;
      const tags = Array.isArray(icon.tags) ? icon.tags.filter((t) => typeof t === "string") : [];
      const search = [name, icon.category, label, ...tags].join(" ").toLowerCase();
      parts.push(`<article class="card" data-name="${escapeHtml(name)}" data-search="${escapeHtml(search)}">`);
      parts.push(`<p class="name" title="${escapeHtml(name)}">${escapeHtml(name)}</p>`);
      parts.push('<div class="tiles">');
      for (const weight of weights) {
        const map = payload.get(weight);
        const svg = map ? map.get(name) : undefined;
        parts.push(`<figure class="tile" data-weight="${escapeHtml(weight)}">`);
        parts.push('<div class="ico">');
        if (typeof svg === "string" && svg.trim().length > 0) {
          parts.push(svg);
        } else {
          parts.push('<span class="missing" aria-hidden="true">?</span>');
        }
        parts.push("</div>");
        parts.push(`<figcaption>${escapeHtml(weight)}</figcaption>`);
        parts.push("</figure>");
      }
      parts.push("</div>");
      parts.push("</article>");
    }

    parts.push("</div>");
    parts.push("</section>");
  }

  for (const category of categories) {
    const sectionIcons = groups.get(category.id) || [];
    if (sectionIcons.length === 0) continue;
    renderSection(
      category.id,
      category.label || category.id,
      category.blurb || "",
      sectionIcons,
    );
  }
  if (uncategorized.length > 0) {
    renderSection("uncategorized", "Uncategorized", "", uncategorized);
  }

  parts.push(
    `<footer class="foot">Static contact sheet generated from generated/manifest.json + payload shards. ${icons.length} icons x ${weights.length} weights across ${categories.length} categories.</footer>`,
  );
  parts.push("</main>");

  parts.push("<script>");
  parts.push(
    [
      "(function () {",
      "  var q = document.getElementById('q');",
      "  var weight = document.getElementById('weight');",
      "  var empty = document.getElementById('empty');",
      "  var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));",
      "  var sections = Array.prototype.slice.call(document.querySelectorAll('.cat'));",
      "  var tiles = Array.prototype.slice.call(document.querySelectorAll('.tile'));",
      "  function apply() {",
      "    var term = q.value.trim().toLowerCase();",
      "    var selected = weight.value;",
      "    var visible = 0;",
      "    for (var i = 0; i < cards.length; i++) {",
      "      var card = cards[i];",
      "      var match = !term || (card.getAttribute('data-search') || '').indexOf(term) !== -1;",
      "      card.hidden = !match;",
      "      if (match) visible++;",
      "    }",
      "    for (var j = 0; j < tiles.length; j++) {",
      "      var tile = tiles[j];",
      "      tile.hidden = selected !== 'all' && tile.getAttribute('data-weight') !== selected;",
      "    }",
      "    for (var k = 0; k < sections.length; k++) {",
      "      var section = sections[k];",
      "      section.hidden = !section.querySelector('.card:not([hidden])');",
      "    }",
      "    empty.hidden = visible !== 0;",
      "  }",
      "  q.addEventListener('input', apply);",
      "  weight.addEventListener('change', apply);",
      "  document.addEventListener('keydown', function (event) {",
      "    if (event.key === '/' && document.activeElement !== q) {",
      "      event.preventDefault();",
      "      q.focus();",
      "    }",
      "  });",
      "  apply();",
      "})();",
    ].join("\n"),
  );
  parts.push("</script>");
  parts.push("</body>");
  parts.push("</html>");

  const html = parts.join("\n") + "\n";
  fs.writeFileSync(OUTPUT_FILE, html, "utf8");

  const bytes = Buffer.byteLength(html, "utf8");
  const relative = path.relative(process.cwd(), OUTPUT_FILE) || OUTPUT_FILE;
  console.log(
    `Wrote ${relative} (${(bytes / 1024).toFixed(1)} KB) - ${icons.length} icons, ${weights.length} weights, ${categories.length} categories`,
  );
}

main();
