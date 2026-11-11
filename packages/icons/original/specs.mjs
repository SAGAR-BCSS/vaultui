/**
 * Vault Icons — original masters.
 *
 * Every glyph here is drawn by us on a 24px grid (stroke-based). No path data
 * is taken from any third-party set. The generator derives all six weights
 * from these masters:
 *
 *   thin / light / regular / bold → stroke width variants
 *   fill    → solid pass of the same geometry
 *   duotone → 22%-opacity fill layer under the outline
 *
 * Keep geometry on the 24 grid, strokes centred on half-pixels where possible,
 * and prefer closed shapes so the fill weight reads as a solid glyph.
 */

export const STROKE_WEIGHTS = {
  thin: 0.9,
  light: 1.25,
  regular: 1.6,
  bold: 2.4,
};

export const ORIGINAL_ICONS = {
  "arrow-up": `<path d="M12 19.5V4.5"/><path d="M5.5 11 12 4.5 18.5 11"/>`,
  "arrow-down": `<path d="M12 4.5v15"/><path d="M5.5 13 12 19.5 18.5 13"/>`,
  "arrow-left": `<path d="M19.5 12h-15"/><path d="M11 5.5 4.5 12 11 18.5"/>`,
  "arrow-right": `<path d="M4.5 12h15"/><path d="M13 5.5 19.5 12 13 18.5"/>`,

  "chevron-up": `<path d="m5 15 7-7 7 7"/>`,
  "chevron-down": `<path d="m5 9 7 7 7-7"/>`,
  "chevron-left": `<path d="m15 5-7 7 7 7"/>`,
  "chevron-right": `<path d="m9 5 7 7-7 7"/>`,

  plus: `<path d="M12 5v14"/><path d="M5 12h14"/>`,
  minus: `<path d="M5 12h14"/>`,
  x: `<path d="m6 6 12 12"/><path d="m18 6-12 12"/>`,
  check: `<path d="m5 12.5 4.5 4.5L19 7"/>`,

  "magnifying-glass": `<circle cx="11" cy="11" r="6.2"/><path d="m15.6 15.6 4.4 4.4"/>`,
  gear: `<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7"/>`,

  house: `<path d="M3.8 10.6 12 3.8l8.2 6.8"/><path d="M5.6 9.6V20h12.8V9.6"/><path d="M10 20v-5h4v5"/>`,
  user: `<circle cx="12" cy="8" r="3.6"/><path d="M4.8 20c1.4-4 4-5.8 7.2-5.8s5.8 1.8 7.2 5.8"/>`,
  bell: `<path d="M6 16.2V11a6 6 0 0 1 12 0v5.2l1.4 1.9H4.6Z"/><path d="M10 20.2a2 2 0 0 0 4 0"/>`,

  trash: `<path d="M4 6.8h16"/><path d="M9.2 6.8V4.6h5.6v2.2"/><path d="m6.4 6.8 1 13.4h9.2l1-13.4"/><path d="M10.2 10.6v6.2M13.8 10.6v6.2"/>`,
  copy: `<rect x="8.2" y="8.2" width="11.6" height="11.6" rx="2.2"/><path d="M15.8 8.2V5.6a2 2 0 0 0-2-2H5.6a2 2 0 0 0-2 2v8.2a2 2 0 0 0 2 2h2.6"/>`,
  download: `<path d="M12 4v11"/><path d="m7 10.2 5 4.8 5-4.8"/><path d="M4 20h16"/>`,
  upload: `<path d="M12 20V9"/><path d="m7 13.8 5-4.8 5 4.8"/><path d="M4 4h16"/>`,

  lock: `<rect x="4.8" y="10.4" width="14.4" height="9.4" rx="2.2"/><path d="M8.4 10.4V7.4a3.6 3.6 0 0 1 7.2 0v3"/><path d="M12 14.2v2.2"/>`,
  eye: `<path d="M2.4 12S6 5.9 12 5.9 21.6 12 21.6 12 18 18.1 12 18.1 2.4 12 2.4 12Z"/><circle cx="12" cy="12" r="2.8"/>`,

  calendar: `<rect x="4" y="5.6" width="16" height="14.4" rx="2.2"/><path d="M4 10.2h16"/><path d="M8.4 3.6v3.6M15.6 3.6v3.6"/>`,
  folder: `<path d="M3.4 8.2a2 2 0 0 1 2-2h3.8l2 2h7.4a2 2 0 0 1 2 2v7.4a2 2 0 0 1-2 2H5.4a2 2 0 0 1-2-2Z"/>`,
  file: `<path d="M6.2 3.4h7.6l4 4v13.2H6.2Z"/><path d="M13.8 3.4v4h4"/>`,

  play: `<path d="M8 5.2 19 12 8 18.8Z"/>`,
  pause: `<rect x="8" y="5" width="3.2" height="14" rx="1"/><rect x="12.8" y="5" width="3.2" height="14" rx="1"/>`,
  heart: `<path d="M12 20.2S4.4 15.4 4.4 10.2A4.1 4.1 0 0 1 12 7.1a4.1 4.1 0 0 1 7.6 3.1c0 5.2-7.6 10-7.6 10Z"/>`,
  star: `<path d="m12 3.4 2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 17.3 6.6 20.2l1.1-6.1L3.2 9.8l6.1-.8Z"/>`,

  home: `<path d="M3.8 10.6 12 3.8l8.2 6.8"/><path d="M5.6 9.6V20h12.8V9.6"/>`,
  search: `<circle cx="11" cy="11" r="6.2"/><path d="m15.6 15.6 4.4 4.4"/>`,
  settings: `<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7"/>`,
  menu: `<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>`,
  close: `<path d="m6 6 12 12"/><path d="m18 6-12 12"/>`,
  "more-horizontal": `<circle cx="5.5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="18.5" cy="12" r="1.3"/>`,
};

/**
 * Solid silhouettes for the fill weight (and the duotone under-layer).
 * Open-path glyphs need an explicit solid drawing; closed-shape glyphs reuse
 * their outline, which fills correctly.
 */
export const ORIGINAL_FILLS = {
  "arrow-up": `<path d="M12 3.4 4 11.4h5v9.2h6v-9.2h5Z"/>`,
  "arrow-down": `<path d="M12 20.6 4 12.6h5V3.4h6v9.2h5Z"/>`,
  "arrow-left": `<path d="M3.4 12 11.4 4v5h9.2v6h-9.2v5Z"/>`,
  "arrow-right": `<path d="M20.6 12 12.6 4v5H3.4v6h9.2v5Z"/>`,

  "chevron-up": `<path d="M12 6.2 3.4 14.8l2.3 2.3L12 10.8l6.3 6.3 2.3-2.3Z"/>`,
  "chevron-down": `<path d="M12 17.8 3.4 9.2l2.3-2.3L12 13.2l6.3-6.3 2.3 2.3Z"/>`,
  "chevron-left": `<path d="M6.2 12 14.8 3.4l2.3 2.3L10.8 12l6.3 6.3-2.3 2.3Z"/>`,
  "chevron-right": `<path d="M17.8 12 9.2 3.4 6.9 5.7 13.2 12l-6.3 6.3 2.3 2.3Z"/>`,

  plus: `<rect x="10.6" y="4" width="2.8" height="16" rx="1.4"/><rect x="4" y="10.6" width="16" height="2.8" rx="1.4"/>`,
  minus: `<rect x="4" y="10.6" width="16" height="2.8" rx="1.4"/>`,
  x: `<path d="M5.6 7.4 7.4 5.6 12 10.2l4.6-4.6 1.8 1.8L13.8 12l4.6 4.6-1.8 1.8L12 13.8l-4.6 4.6-1.8-1.8L10.2 12Z"/>`,
  close: `<path d="M5.6 7.4 7.4 5.6 12 10.2l4.6-4.6 1.8 1.8L13.8 12l4.6 4.6-1.8 1.8L12 13.8l-4.6 4.6-1.8-1.8L10.2 12Z"/>`,
  check: `<path d="M4.4 12.6 9.6 17.8 19.9 7.5 17.9 5.5 9.6 13.8 6.4 10.6Z"/>`,

  "magnifying-glass": `<path d="M11 4.6a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8Zm0 2.6a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Z" fill-rule="evenodd"/><path d="M15.6 14.5 21 19.9l-1.6 1.6-5.4-5.4Z"/>`,
  search: `<path d="M11 4.6a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8Zm0 2.6a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Z" fill-rule="evenodd"/><path d="M15.6 14.5 21 19.9l-1.6 1.6-5.4-5.4Z"/>`,

  gear: `<path d="M12 4.4a7.6 7.6 0 1 0 0 15.2 7.6 7.6 0 0 0 0-15.2Zm0 4.4a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Z" fill-rule="evenodd"/>`,
  settings: `<path d="M12 4.4a7.6 7.6 0 1 0 0 15.2 7.6 7.6 0 0 0 0-15.2Zm0 4.4a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Z" fill-rule="evenodd"/>`,

  house: `<path d="M12 3 3 10.6l1.6 2.1 1-.8V20h5.2v-5h2.4v5H18v-8.1l1 .8 1.6-2.1Z"/>`,
  home: `<path d="M12 3 3 10.6l1.6 2.1 1-.8V20h5.2v-5h2.4v5H18v-8.1l1 .8 1.6-2.1Z"/>`,
  user: `<circle cx="12" cy="8" r="3.8"/><path d="M4.2 20.4c1.4-4.2 4.2-6.2 7.8-6.2s6.4 2 7.8 6.2Z"/>`,
  bell: `<path d="M6.2 11a5.8 5.8 0 0 1 11.6 0v4.6l1.6 2.2H4.6l1.6-2.2Zm3.6 9.2a2.2 2.2 0 0 0 4.4 0Z"/>`,

  download: `<path d="M12 3.6 7 8.8h2.6V14h4.8V8.8H17Z"/><rect x="4" y="18.2" width="16" height="2.6" rx="1.3"/>`,
  upload: `<path d="M12 20.4 7 15.2h2.6V10h4.8v5.2H17Z"/><rect x="4" y="3.2" width="16" height="2.6" rx="1.3"/>`,
  menu: `<rect x="4" y="6.6" width="16" height="2.4" rx="1.2"/><rect x="4" y="10.8" width="16" height="2.4" rx="1.2"/><rect x="4" y="15" width="16" height="2.4" rx="1.2"/>`,
};

export function renderOriginal(name, weight) {
  const inner = ORIGINAL_ICONS[name];
  if (!inner) return "";
  const fill = ORIGINAL_FILLS[name] ?? inner;
  const open = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"';

  if (weight === "fill") {
    return `${open} fill="currentColor">${fill}</svg>`;
  }

  if (weight === "duotone") {
    return `${open} fill="none">` +
      `<g opacity="0.22" fill="currentColor" stroke="none">${fill}</g>` +
      `<g stroke="currentColor" stroke-width="${STROKE_WEIGHTS.regular}" stroke-linecap="round" stroke-linejoin="round">${inner}</g>` +
      `</svg>`;
  }

  const stroke = STROKE_WEIGHTS[weight] ?? STROKE_WEIGHTS.regular;
  return `${open} fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}
