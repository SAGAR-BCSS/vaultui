/**
 * Vault Icons — framework component generator.
 *
 * Reads the original spec files (base specs.mjs + specs-batch-*.mjs) and emits
 * tree-shakeable framework packages:
 *   @vaultui/icons-react   → src/icons/<name>.tsx   (6 named exports per file)
 *   @vaultui/icons-vue     → src/icons/<name>.vue   (1 SFC per weight)
 *   @vaultui/icons-svelte  → src/icons/<name>.svelte (1 component per weight)
 *
 * Weights: thin, light, regular, bold, fill, duotone.
 *   - thin/light/regular/bold: stroke widths 0.9 / 1.25 / 1.6 / 2.4
 *   - fill:    solid silhouette, fill="currentColor", no stroke
 *   - duotone: dim fill silhouette + regular stroke outline
 */

import { readdir, mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { ORIGINAL_ICONS, ORIGINAL_FILLS } from "../original/specs.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const iconsRoot = path.resolve(here, "..");
const originalDir = path.join(iconsRoot, "original");
const repoRoot = path.resolve(iconsRoot, "..", "..");

const WEIGHTS = ["thin", "light", "regular", "bold", "fill", "duotone"];
const STROKE = { thin: "0.9", light: "1.25", regular: "1.6", bold: "2.4" };

const SUFFIX = { thin: "Thin", light: "Light", regular: "", bold: "Bold", fill: "Fill", duotone: "Duotone" };

async function loadBatches() {
  const files = (await readdir(originalDir))
    .filter((file) => /^specs-batch-.*\.mjs$/.test(file))
    .sort();
  const icons = {};
  const fills = {};
  for (const file of files) {
    const mod = await import(pathToFileURL(path.join(originalDir, file)).href);
    for (const [key, value] of Object.entries(mod)) {
      if (!key.startsWith("BATCH_")) continue;
      if (key.endsWith("_FILLS")) Object.assign(fills, value);
      else Object.assign(icons, value);
    }
  }
  return { icons, fills };
}

function pascal(name) {
  return name
    .split("-")
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : ""))
    .join("");
}

const JSX_ATTR = {
  "fill-rule": "fillRule",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-dasharray": "strokeDasharray",
  "stroke-miterlimit": "strokeMiterlimit",
  "clip-rule": "clipRule",
};

// Split inner markup into { tag, attrs } objects (self-closing only: path/circle/rect).
function parseElements(inner) {
  const out = [];
  const re = /<(\w+)([^>]*?)\/?>/g;
  let m;
  while ((m = re.exec(inner))) {
    const attrs = {};
    const are = /([\w-]+)="([^"]*)"/g;
    let a;
    while ((a = are.exec(m[2]))) attrs[a[1]] = a[2];
    out.push({ tag: m[1], attrs });
  }
  return out;
}

function toJsx(inner, indent = "      ") {
  return parseElements(inner)
    .map(({ tag, attrs }) => {
      const a = Object.entries(attrs)
        .map(([k, v]) => `${JSX_ATTR[k] ?? k}="${v}"`)
        .join(" ");
      return `${indent}<${tag} ${a} />`;
    })
    .join("\n");
}

function iconName(component, weight) {
  return component + SUFFIX[weight];
}

// ---------------------------------------------------------------------------
// React
// ---------------------------------------------------------------------------
function reactComponent(component, name, inner, fill) {
  const parts = [];
  for (const weight of WEIGHTS) {
    const exportName = iconName(component, weight);
    parts.push(reactWeight(exportName, weight, inner, fill));
  }
  parts.push(`export { ${WEIGHTS.map((w) => iconName(component, w)).join(", ")} };`);
  return `import type { VaultIconProps } from "../types";

${parts.join("\n\n")}
`;
}

function reactWeight(exportName, weight, inner, fill) {
  const attrs = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "{size}",
    height: "{size}",
    ...(weight === "fill"
      ? { fill: "currentColor" }
      : { fill: "none" }),
    ...(weight !== "fill" ? { stroke: "currentColor" } : {}),
    ...(STROKE[weight] ? { strokeWidth: `{${STROKE[weight]}}` } : {}),
    ...(weight !== "fill" ? { strokeLinecap: "round", strokeLinejoin: "round" } : {}),
    "aria-hidden": "true",
    ...{ "...props" : "" },
  };
  const body = reactBody(weight, inner, fill);
  const attrLines = Object.entries(attrs)
    .filter(([, v]) => v !== "")
    .map(([k, v]) => `        ${k}={${v}}`)
    .join("\n");
  return `function ${exportName}({ size = 24, ...props }: VaultIconProps) {
  return (
    <svg
${attrLines}
    >
${body}
    </svg>
  );
}`;
}

function reactBody(weight, inner, fill) {
  if (weight === "fill") {
    return toJsx(fill);
  }
  if (weight === "duotone") {
    return `      <g opacity={0.22} fill="currentColor" stroke="none">\n${toJsx(fill, "        ")}\n      </g>\n      <g stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">\n${toJsx(inner, "        ")}\n      </g>`;
  }
  return toJsx(inner);
}

// ---------------------------------------------------------------------------
// Vue (SFC, one file per weight)
// ---------------------------------------------------------------------------
function vueComponent(name, weight, inner, fill) {
  const script = `<script setup lang="ts">
const props = withDefaults(defineProps<{ size?: number | string }>(), { size: 24 });
</script>`;
  const svgAttrs = vueSvgAttrs(weight);
  const body = vueBody(weight, inner, fill);
  return `${script}

<template>
  <svg ${svgAttrs}>
${body}
  </svg>
</template>
`;
}

function vueSvgAttrs(weight) {
  const parts = [
    'xmlns="http://www.w3.org/2000/svg"',
    'viewBox="0 0 24 24"',
    ':width="props.size"',
    ':height="props.size"',
  ];
  if (weight === "fill") {
    parts.push('fill="currentColor"');
  } else {
    parts.push('fill="none"', 'stroke="currentColor"');
    if (STROKE[weight]) parts.push(`stroke-width="${STROKE[weight]}"`);
    parts.push('stroke-linecap="round"', 'stroke-linejoin="round"');
  }
  parts.push('aria-hidden="true"');
  return parts.join(" ");
}

function vueBody(weight, inner, fill) {
  if (weight === "fill") return indentSvg(inner, 4);
  if (weight === "duotone") {
    return `    <g opacity="0.22" fill="currentColor" stroke="none">\n${indentSvg(fill, 6)}\n    </g>\n    <g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n${indentSvg(inner, 6)}\n    </g>`;
  }
  return indentSvg(inner, 4);
}

function indentSvg(markup, spaces) {
  const pad = " ".repeat(spaces);
  return markup
    .trim()
    .split("\n")
    .map((line) => pad + line.trim())
    .join("\n");
}

// ---------------------------------------------------------------------------
// Svelte (one component per weight)
// ---------------------------------------------------------------------------
function svelteComponent(name, weight, inner, fill) {
  const script = `<script lang="ts">
  let { size = 24 }: { size?: number | string } = $props();
</script>`;
  const svgAttrs = svelteSvgAttrs(weight);
  const body = svelteBody(weight, inner, fill);
  return `${script}

<svg ${svgAttrs}>
${body}
</svg>
`;
}

function svelteSvgAttrs(weight) {
  const parts = [
    'xmlns="http://www.w3.org/2000/svg"',
    'viewBox="0 0 24 24"',
    "width={size}",
    "height={size}",
  ];
  if (weight === "fill") {
    parts.push('fill="currentColor"');
  } else {
    parts.push('fill="none"', 'stroke="currentColor"');
    if (STROKE[weight]) parts.push(`stroke-width="${STROKE[weight]}"`);
    parts.push('stroke-linecap="round"', 'stroke-linejoin="round"');
  }
  parts.push('aria-hidden="true"');
  return parts.join(" ");
}

function svelteBody(weight, inner, fill) {
  if (weight === "fill") return indentSvg(inner, 2);
  if (weight === "duotone") {
    return `  <g opacity="0.22" fill="currentColor" stroke="none">\n${indentSvg(fill, 4)}\n  </g>\n  <g stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">\n${indentSvg(inner, 4)}\n  </g>`;
  }
  return indentSvg(inner, 2);
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
async function main() {
  const { icons: batchIcons, fills: batchFills } = await loadBatches();

  const icons = { ...ORIGINAL_ICONS, ...batchIcons };
  const fills = { ...ORIGINAL_FILLS, ...batchFills };

  const names = Object.keys(icons).sort();

  const reactDir = path.join(repoRoot, "packages", "icons-react", "src", "icons");
  const vueDir = path.join(repoRoot, "packages", "icons-vue", "src", "icons");
  const svelteDir = path.join(repoRoot, "packages", "icons-svelte", "src", "icons");

  await rm(path.join(reactDir), { recursive: true, force: true });
  await rm(path.join(vueDir), { recursive: true, force: true });
  await rm(path.join(svelteDir), { recursive: true, force: true });
  await mkdir(reactDir, { recursive: true });
  await mkdir(vueDir, { recursive: true });
  await mkdir(svelteDir, { recursive: true });

  const reactBarrel = [];
  const vueBarrel = [];
  const svelteBarrel = [];

  for (const name of names) {
    const inner = icons[name];
    const fill = fills[name] ?? inner;
    const component = pascal(name);
    if (!inner || !component) continue;

    // React: one file, six named exports
    await writeFile(
      path.join(reactDir, `${name}.tsx`),
      reactComponent(component, name, inner, fill),
      "utf8",
    );
    reactBarrel.push(`export { ${WEIGHTS.map((w) => iconName(component, w)).join(", ")} } from "./icons/${name}";`);

    // Vue: one SFC per weight
    for (const weight of WEIGHTS) {
      const filename = weight === "regular" ? `${name}.vue` : `${name}-${weight}.vue`;
      await writeFile(
        path.join(vueDir, filename),
        vueComponent(name, weight, inner, fill),
        "utf8",
      );
    }
    vueBarrel.push(
      WEIGHTS.map((w) => {
        const file = w === "regular" ? `${name}.vue` : `${name}-${w}.vue`;
        return `export { default as ${iconName(component, w)} } from "./icons/${file}";`;
      }).join("\n"),
    );

    // Svelte: one component per weight
    for (const weight of WEIGHTS) {
      const filename = weight === "regular" ? `${name}.svelte` : `${name}-${weight}.svelte`;
      await writeFile(
        path.join(svelteDir, filename),
        svelteComponent(name, weight, inner, fill),
        "utf8",
      );
    }
    svelteBarrel.push(
      WEIGHTS.map((w) => {
        const file = w === "regular" ? `${name}.svelte` : `${name}-${w}.svelte`;
        return `export { default as ${iconName(component, w)} } from "./icons/${file}";`;
      }).join("\n"),
    );
  }

  await writeFile(
    path.join(repoRoot, "packages", "icons-react", "src", "index.ts"),
    reactBarrel.join("\n") + "\n",
    "utf8",
  );
  await writeFile(
    path.join(repoRoot, "packages", "icons-vue", "src", "index.ts"),
    vueBarrel.join("\n") + "\n",
    "utf8",
  );
  await writeFile(
    path.join(repoRoot, "packages", "icons-svelte", "src", "index.ts"),
    svelteBarrel.join("\n") + "\n",
    "utf8",
  );

  console.log(`Generated ${names.length} icons → react (1 file/icon), vue + svelte (6 files/icon).`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
