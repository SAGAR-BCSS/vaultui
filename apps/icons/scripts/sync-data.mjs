/**
 * Copies the generated icon dataset from @vaultui/icons into public/data so the
 * static site can ship it as immutable edge assets.
 *
 * Run automatically before `astro dev` and `astro build`.
 */

import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(here, "..");
const iconsRoot = path.dirname(fileURLToPath(import.meta.resolve("@vaultui/icons")));
const generated = path.join(iconsRoot, "generated");
const publicData = path.join(appRoot, "public", "data");

try {
  await readFile(path.join(generated, "manifest.json"));
} catch {
  console.error(
    "Missing @vaultui/icons/generated. Run `pnpm --filter @vaultui/icons build` first.",
  );
  process.exit(1);
}

await mkdir(publicData, { recursive: true });
await cp(generated, publicData, { recursive: true });

const manifest = JSON.parse(await readFile(path.join(generated, "manifest.json"), "utf8"));
const searchIndex = JSON.parse(
  await readFile(path.join(generated, "search-index.json"), "utf8"),
);

const catalog = {
  weights: manifest.weights,
  categories: manifest.categories,
  total: manifest.total,
  icons: searchIndex,
};

await writeFile(path.join(publicData, "catalog.json"), JSON.stringify(catalog));
console.log(`Synced ${manifest.total} icons → public/data`);
