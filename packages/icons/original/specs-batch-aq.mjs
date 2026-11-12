/**
 * Vault Icons - original masters, batch AQ.
 *
 * Core UI glyphs authored on the 24px grid, inner markup only. Glyphs that
 * use an open path get a solid silhouette in BATCH_AQ_FILLS so the fill and
 * duotone weights read correctly.
 */

export const BATCH_AQ = {
  export: `<path d="M12 12.6V3.4M8.2 6.6 12 2.8l3.8 3.8"/><path d="M4.4 12.6v5.6a2 2 0 0 0 2 2h11.2a2 2 0 0 0 2-2v-5.6"/>`,
  "eye-slash": `<path d="M2.8 12s3.4-6 9.2-6 9.2 6 9.2 6-3.4 6-9.2 6S2.8 12 2.8 12Z"/><circle cx="12" cy="12" r="2.8"/><path d="M4 4l16 16"/>`,
  faders: `<path d="M6.4 3.4v17.2M12 3.4v17.2M17.6 3.4v17.2"/><rect x="4.8" y="7.4" width="3.2" height="3.6" rx="1"/><rect x="10.4" y="13" width="3.2" height="3.6" rx="1"/><rect x="16" y="6" width="3.2" height="3.6" rx="1"/>`,
  "faders-horizontal": `<path d="M3.4 6.4h17.2M3.4 12h17.2M3.4 17.6h17.2"/><rect x="7.4" y="4.8" width="3.6" height="3.2" rx="1"/><rect x="13" y="10.4" width="3.6" height="3.2" rx="1"/><rect x="6" y="16" width="3.6" height="3.2" rx="1"/>`,
  "fallout-shelter": `<circle cx="12" cy="12" r="8"/><path d="M12 9.4 8.53 5.47 15.47 5.47ZM14.25 13.3 19.4 12.26 15.92 18.27ZM9.75 13.3 8.08 18.27 4.6 12.26Z"/>`,
  "four-k": `<rect x="2.8" y="6.4" width="18.4" height="11.2" rx="3"/><path d="M9.2 9.4 6.6 12.6h2.6M9.2 9.4v5M13.4 9.4v5M16.4 9.4l-3 2.5 3 2.5"/>`,
  funnel: `<path d="M3.4 4.4h17.2l-6.6 8v7.2l-4-2.2v-5Z"/>`,
  "funnel-simple": `<path d="M3.4 4.4h17.2l-6.6 8.4H10.2Z"/>`,
  "funnel-simple-x": `<path d="M3.4 4.4h17.2l-6.6 8.4H10.2Z"/><path d="M9.4 14.6l6.2 5.2M15.6 14.6l-6.2 5.2"/>`,
  "funnel-x": `<path d="M3.4 4.4h17.2l-6.6 8v7.2l-4-2.2v-5Z"/><path d="M9.4 14.6l6.2 5.2M15.6 14.6l-6.2 5.2"/>`,
  "gear-fine": `<circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.8"/><path d="M17 12h2.2M15.54 15.54l1.55 1.55M12 17v2.2M8.46 15.54l-1.55 1.55M7 12H4.8M8.46 8.46 6.91 6.91M12 7V4.8M15.54 8.46l1.55-1.55"/>`,
  "gear-six": `<circle cx="12" cy="12" r="5.2"/><circle cx="12" cy="12" r="2"/><path d="M17.2 12h2.4M14.6 16.5l1.2 2.08M9.4 16.5l-1.2 2.08M6.8 12H4.4M9.4 7.5 8.2 5.42M14.6 7.5l1.2-2.08"/>`,
  handshake: `<path d="M2.6 9.6h5.2a2 2 0 0 1 2 2v3.2H7.4l-1.2 1.6H4.4a1.8 1.8 0 0 1-1.8-1.8Z"/><path d="M21.4 9.6h-5.2a2 2 0 0 0-2 2v3.2h2.4l1.2 1.6h1.8a1.8 1.8 0 0 0 1.8-1.8Z"/><path d="M9.4 12.2h5.2M9.8 14.4h4.4"/>`,
  "house-line": `<path d="M3.4 11 12 3.4 20.6 11"/><path d="M5.4 9.6v8.6a2 2 0 0 0 2 2h9.2a2 2 0 0 0 2-2V9.6"/>`,
  "house-simple": `<path d="M3.4 10.8 12 3.2l8.6 7.6v7.6a2 2 0 0 1-2 2H5.4a2 2 0 0 1-2-2Z"/>`,
  infinity: `<path d="M8.4 8.4a3.6 3.6 0 0 1 2.6 1.2L12 11l1-1.4a3.6 3.6 0 0 1 2.6-1.2 3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1-2.6-1.2L12 13l-1 1.4a3.6 3.6 0 0 1-2.6 1.2 3.6 3.6 0 1 1 0-7.2Z"/>`,
  intersect: `<circle cx="9" cy="12" r="5.4"/><circle cx="15" cy="12" r="5.4"/><path d="M12 7.51a5.4 5.4 0 0 1 0 8.98 5.4 5.4 0 0 1 0-8.98Z"/>`,
  "intersect-square": `<rect x="3.4" y="3.4" width="11" height="11" rx="2"/><rect x="9.6" y="9.6" width="11" height="11" rx="2"/><rect x="9.6" y="9.6" width="4.8" height="4.8"/>`,
  "intersect-three": `<circle cx="12" cy="8" r="4.6"/><circle cx="8.2" cy="14.4" r="4.6"/><circle cx="15.8" cy="14.4" r="4.6"/>`,
  intersection: `<path d="M5.4 20.6V12a6.6 6.6 0 0 1 13.2 0v8.6"/>`,
  "key-return": `<path d="M19.6 6.4v5.4a2.2 2.2 0 0 1-2.2 2.2H6.4"/><path d="M10 9.8 6.2 14l3.8 4.2"/>`,
  "letter-circle-h": `<circle cx="12" cy="12" r="8"/><path d="M9.4 8.4v7.2M14.6 8.4v7.2M9.4 12h5.2"/>`,
  "letter-circle-p": `<circle cx="12" cy="12" r="8"/><path d="M9.6 15.8V8.2h2.8a2.4 2.4 0 0 1 0 4.8H9.6"/>`,
  "letter-circle-v": `<circle cx="12" cy="12" r="8"/><path d="M8.8 8.4 12 15.6l3.2-7.2"/>`,
  lightbulb: `<path d="M12 2.8a6.2 6.2 0 0 0-3.6 11.2c.7.5 1.1 1.1 1.2 1.8h4.8c.1-.7.5-1.3 1.2-1.8A6.2 6.2 0 0 0 12 2.8Z"/><path d="M10.4 18.4h3.2M10.8 20.6h2.4"/>`,
  "lightbulb-filament": `<path d="M12 2.8a6.2 6.2 0 0 0-3.6 11.2c.7.5 1.1 1.1 1.2 1.8h4.8c.1-.7.5-1.3 1.2-1.8A6.2 6.2 0 0 0 12 2.8Z"/><path d="M10.6 13.4v-2l1.4 1.2 1.4-1.2v2M10.4 18.4h3.2M10.8 20.6h2.4"/>`,
  "line-vertical": `<path d="M12 3.4v17.2"/>`,
  "magic-wand": `<path d="M4.2 19.8 15.4 8.6"/><path d="M17.2 3.4l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8Z"/><path d="M7.4 5.2l.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5L5.3 7.9l1.5-.6Z"/>`,
  "magnifying-glass-minus": `<circle cx="10.8" cy="10.8" r="6.4"/><path d="m15.5 15.5 4.5 4.5"/><path d="M8 10.8h5.6"/>`,
  "magnifying-glass-plus": `<circle cx="10.8" cy="10.8" r="6.4"/><path d="m15.5 15.5 4.5 4.5"/><path d="M10.8 8v5.6M8 10.8h5.6"/>`,
};

export const BATCH_AQ_FILLS = {
  export: `<path d="M12 2.8 8.2 6.6h2.6v6h2.4v-6h2.6Z"/><path d="M4.4 12.6v5.6a2 2 0 0 0 2 2h11.2a2 2 0 0 0 2-2v-5.6h-1.6v5.6a.4.4 0 0 1-.4.4H6.4a.4.4 0 0 1-.4-.4v-5.6Z"/>`,
  "eye-slash": `<path d="M2.8 12s3.4-6 9.2-6 9.2 6 9.2 6-3.4 6-9.2 6S2.8 12 2.8 12Z"/>`,
  faders: `<path d="M5.6 3.4h1.6v17.2H5.6ZM11.2 3.4h1.6v17.2h-1.6ZM16.8 3.4h1.6v17.2h-1.6Z"/><rect x="4.8" y="7.4" width="3.2" height="3.6" rx="1"/><rect x="10.4" y="13" width="3.2" height="3.6" rx="1"/><rect x="16" y="6" width="3.2" height="3.6" rx="1"/>`,
  "faders-horizontal": `<path d="M3.4 5.6h17.2v1.6H3.4ZM3.4 11.2h17.2v1.6H3.4ZM3.4 16.8h17.2v1.6H3.4Z"/><rect x="7.4" y="4.8" width="3.6" height="3.2" rx="1"/><rect x="13" y="10.4" width="3.6" height="3.2" rx="1"/><rect x="6" y="16" width="3.6" height="3.2" rx="1"/>`,
  "fallout-shelter": `<path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM12 9.4 8.53 5.47 15.47 5.47ZM14.25 13.3 19.4 12.26 15.92 18.27ZM9.75 13.3 8.08 18.27 4.6 12.26Z" fill-rule="evenodd"/>`,
  "four-k": `<rect x="2.8" y="6.4" width="18.4" height="11.2" rx="3"/>`,
  "funnel-simple-x": `<path d="M3.4 4.4h17.2l-6.6 8.4H10.2Z"/>`,
  "funnel-x": `<path d="M3.4 4.4h17.2l-6.6 8v7.2l-4-2.2v-5Z"/>`,
  "gear-fine": `<path d="M12 4.2a7.8 7.8 0 1 0 0 15.6 7.8 7.8 0 0 0 0-15.6Zm0 2a5.8 5.8 0 1 1 0 11.6 5.8 5.8 0 0 1 0-11.6Z" fill-rule="evenodd"/><circle cx="12" cy="12" r="1.8"/>`,
  "gear-six": `<path d="M12 4.2a7.8 7.8 0 1 0 0 15.6 7.8 7.8 0 0 0 0-15.6Zm0 2a5.8 5.8 0 1 1 0 11.6 5.8 5.8 0 0 1 0-11.6Z" fill-rule="evenodd"/><circle cx="12" cy="12" r="2"/>`,
  handshake: `<path d="M2.6 9.6h5.2a2 2 0 0 1 2 2v3.2H7.4l-1.2 1.6H4.4a1.8 1.8 0 0 1-1.8-1.8Z"/><path d="M21.4 9.6h-5.2a2 2 0 0 0-2 2v3.2h2.4l1.2 1.6h1.8a1.8 1.8 0 0 0 1.8-1.8Z"/>`,
  "house-line": `<path d="M12 3 21.2 11.2l-1.4 1.5L18.4 11.5v8.3H5.6v-8.3l-1.4 1.2L2.8 11.2Z"/>`,
  intersection: `<path d="M5.4 20.6h3.2V12a3.4 3.4 0 0 1 6.8 0v8.6h3.2V12a6.6 6.6 0 0 0-13.2 0Z"/>`,
  "key-return": `<path d="M18.4 6.4h1.6v5.4a3 3 0 0 1-3 3H9.2l2.6 2.6-1.2 1.2-4.6-4.6 4.6-4.6 1.2 1.2-2.6 2.6h7.8a.6.6 0 0 0 .6-.6Z"/>`,
  "letter-circle-h": `<circle cx="12" cy="12" r="8"/>`,
  "letter-circle-p": `<circle cx="12" cy="12" r="8"/>`,
  "letter-circle-v": `<circle cx="12" cy="12" r="8"/>`,
  lightbulb: `<path d="M12 2.8a6.2 6.2 0 0 0-3.6 11.2c.7.5 1.1 1.1 1.2 1.8h4.8c.1-.7.5-1.3 1.2-1.8A6.2 6.2 0 0 0 12 2.8Z"/><rect x="10.2" y="16.2" width="3.6" height="4.8" rx="1"/>`,
  "lightbulb-filament": `<path d="M12 2.8a6.2 6.2 0 0 0-3.6 11.2c.7.5 1.1 1.1 1.2 1.8h4.8c.1-.7.5-1.3 1.2-1.8A6.2 6.2 0 0 0 12 2.8Z"/><rect x="10.2" y="16.2" width="3.6" height="4.8" rx="1"/>`,
  "line-vertical": `<rect x="11.2" y="3.4" width="1.6" height="17.2" rx="0.8"/>`,
  "magic-wand": `<path d="M3.4 20.6 4.2 19.8 15 9l1.2 1.2L5.4 21Z"/><path d="M17.2 3.4l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8Z"/><path d="M7.4 5.2l.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5L5.3 7.9l1.5-.6Z"/>`,
  "magnifying-glass-minus": `<path d="M10.8 3.4a7.4 7.4 0 1 0 0 14.8 7.4 7.4 0 0 0 0-14.8Zm0 2a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8Z" fill-rule="evenodd"/><path d="M14.8 15.2 16.4 13.6 20.8 18l-1.6 1.6Z"/>`,
  "magnifying-glass-plus": `<path d="M10.8 3.4a7.4 7.4 0 1 0 0 14.8 7.4 7.4 0 0 0 0-14.8Zm0 2a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8Z" fill-rule="evenodd"/><path d="M14.8 15.2 16.4 13.6 20.8 18l-1.6 1.6Z"/>`,
};
