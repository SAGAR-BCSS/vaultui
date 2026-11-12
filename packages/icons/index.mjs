/**
 * Vault Icons — package entry.
 *
 * The generated data lives in ./generated (rebuild with `pnpm --filter
 * @vaultui/icons build`). This module only exposes the taxonomy and the
 * weight list, which are needed by the docs site at build time.
 */

export { ALIASES, CATEGORIES, CATEGORY_IDS, classify } from "./taxonomy.mjs";

export const WEIGHTS = ["thin", "light", "regular", "bold", "fill", "duotone"];

export const WEIGHT_LABELS = {
  thin: "Thin",
  light: "Light",
  regular: "Regular",
  bold: "Bold",
  fill: "Fill",
  duotone: "Duotone",
};
