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

  envelope: `<rect x="3.2" y="5.4" width="17.6" height="13.2" rx="2"/><path d="m4.2 6.8 7.8 5.8 7.8-5.8"/>`,
  phone: `<path d="M6.4 3.8 9.2 6.6 7.5 8.3c1.4 2.8 3.4 4.8 6.2 6.2l1.7-1.7 2.8 2.8-2.5 2.5c-5.4-.8-10-5.4-10.8-10.8Z"/>`,
  chat: `<path d="M4.4 5.6h15.2v10.2h-9.6L4.4 20Z"/>`,
  camera: `<path d="M3.4 8.6h3.8l1.6-2.2h6.4l1.6 2.2h3.8v10H3.4Z"/><circle cx="12" cy="13.2" r="3.2"/>`,
  image: `<rect x="3.4" y="4.6" width="17.2" height="14.8" rx="2.2"/><circle cx="8.6" cy="9.4" r="1.5"/><path d="m4.6 17.6 4.7-4.7 3.1 3.1 3-3 4.2 4.2"/>`,
  video: `<rect x="3.4" y="6.6" width="12.4" height="10.8" rx="2"/><path d="m15.8 11.2 4.8-2.8v7.2l-4.8-2.8Z"/>`,
  music: `<path d="M9 17.4V5.8l8.6-1.9v11.6"/><circle cx="6.6" cy="17.8" r="2.5"/><circle cx="15.2" cy="15.5" r="2.5"/>`,
  cloud: `<path d="M7.2 18.2a4.3 4.3 0 0 1-.5-8.6 5.5 5.5 0 0 1 10.6-1 4.1 4.1 0 0 1 1.7 8 4 4 0 0 1-1.5.3Z"/>`,
  database: `<ellipse cx="12" cy="6.4" rx="7.2" ry="2.7"/><path d="M4.8 6.4v11.2c0 1.5 3.2 2.7 7.2 2.7s7.2-1.2 7.2-2.7V6.4"/>`,
  bookmark: `<path d="M6.6 3.8h10.8v16.4L12 15.6l-5.4 4.6Z"/>`,
  tag: `<path d="M3.6 12.4V5.6a2 2 0 0 1 2-2h6.8l8 8-8.4 8.4Z"/><circle cx="8.2" cy="8.2" r="1.3"/>`,
  "credit-card": `<rect x="3.2" y="5.6" width="17.6" height="12.8" rx="2.2"/><path d="M3.6 9.8h16.8"/>`,
  "chart-bar": `<path d="M4.2 4v16h16"/><rect x="7.2" y="12" width="3" height="5" rx="1"/><rect x="12.2" y="8.4" width="3" height="8.6" rx="1"/><rect x="17.2" y="5.2" width="3" height="11.8" rx="1"/>`,
  clock: `<circle cx="12" cy="12" r="8"/><path d="M12 7.2V12l3.4 2.2"/>`,
  filter: `<path d="M3.8 5.2h16.4l-6.6 7.6v6.4l-3.2 1.8v-8.2Z"/>`,
  grid: `<rect x="3.8" y="3.8" width="7" height="7" rx="1.6"/><rect x="13.2" y="3.8" width="7" height="7" rx="1.6"/><rect x="3.8" y="13.2" width="7" height="7" rx="1.6"/><rect x="13.2" y="13.2" width="7" height="7" rx="1.6"/>`,
  list: `<path d="M8.6 6.4h11.4"/><path d="M8.6 12h11.4"/><path d="M8.6 17.6h11.4"/><circle cx="4.8" cy="6.4" r="1.3"/><circle cx="4.8" cy="12" r="1.3"/><circle cx="4.8" cy="17.6" r="1.3"/>`,
  terminal: `<rect x="3.4" y="4.6" width="17.2" height="14.8" rx="2.2"/><path d="m7 9.4 2.8 2.6L7 14.6"/><path d="M12.8 14.8h4.2"/>`,
  cart: `<path d="M3.4 4.6h2.4l2.2 9.2h9.6l2.2-6.8H6.4"/><circle cx="9.6" cy="18.8" r="1.6"/><circle cx="17.4" cy="18.8" r="1.6"/>`,
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

  envelope: `<path d="M4.4 5.4h15.2a2 2 0 0 1 2 2v9.2a2 2 0 0 1-2 2H4.4a2 2 0 0 1-2-2V7.4a2 2 0 0 1 2-2Zm.2 2.6v1l7.4 5.2 7.4-5.2v-1l-7.4 5.2Z" fill-rule="evenodd"/>`,
  camera: `<path d="M5.2 6.4h4.2l1.4-2h4.4l1.4 2h4.2a2 2 0 0 1 2 2v10.2h-19.6V8.4a2 2 0 0 1 2-2Zm6.8 4a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" fill-rule="evenodd"/>`,
  image: `<path d="M5.4 4.6h13.2a2 2 0 0 1 2 2v10.8a2 2 0 0 1-2 2H5.4a2 2 0 0 1-2-2V6.6a2 2 0 0 1 2-2Zm.2 12.6 3.6-3.6 3 3 2.4-2.4 2.8 2.8v.2Z" fill-rule="evenodd"/><circle cx="8.6" cy="9.4" r="1.5"/>`,
  video: `<rect x="3.4" y="6.6" width="12.4" height="10.8" rx="2"/><path d="m15.8 11.2 4.8-2.8v7.2l-4.8-2.8Z"/>`,
  music: `<path d="M9 17.2V5.6l8.6-1.9v11.4h-2.6V7.2L11.6 8.8v8.4Z"/><circle cx="6.6" cy="17.8" r="2.5"/><circle cx="15.2" cy="15.5" r="2.5"/>`,
  database: `<path d="M12 3.7c-4 0-7.2 1.2-7.2 2.7S8 9.1 12 9.1s7.2-1.2 7.2-2.7S16 3.7 12 3.7Zm-7.2 5.2v3.3c0 1.5 3.2 2.7 7.2 2.7s7.2-1.2 7.2-2.7V8.9c-1.7 1.3-4.3 2-7.2 2s-5.5-.7-7.2-2Zm0 5.5v3c0 1.5 3.2 2.7 7.2 2.7s7.2-1.2 7.2-2.7v-3c-1.7 1.3-4.3 2-7.2 2s-5.5-.7-7.2-2Z"/>`,
  "chart-bar": `<rect x="4" y="4" width="1.6" height="16" rx="0.8"/><rect x="4" y="18.4" width="16" height="1.6" rx="0.8"/><rect x="7.2" y="12" width="3" height="5" rx="1"/><rect x="12.2" y="8.4" width="3" height="8.6" rx="1"/><rect x="17.2" y="5.2" width="3" height="11.8" rx="1"/>`,
  clock: `<circle cx="12" cy="12" r="8"/><path d="M11 6.8h2v5.4l3 1.8-1 1.7-4-2.4Z"/>`,
  list: `<rect x="3.5" y="5.4" width="2.6" height="2.6" rx="1.3"/><rect x="3.5" y="10.7" width="2.6" height="2.6" rx="1.3"/><rect x="3.5" y="16" width="2.6" height="2.6" rx="1.3"/><rect x="8.6" y="5.8" width="11.6" height="1.8" rx="0.9"/><rect x="8.6" y="11.1" width="11.6" height="1.8" rx="0.9"/><rect x="8.6" y="16.4" width="11.6" height="1.8" rx="0.9"/>`,
  cart: `<path d="M3.4 4.6h2.4l2.2 9.2h9.6l2.2-6.8H6.4V4.6Z"/><circle cx="9.6" cy="18.8" r="1.6"/><circle cx="17.4" cy="18.8" r="1.6"/>`,
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
