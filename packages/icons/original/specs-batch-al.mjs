/**
 * Vault Icons - original masters, batch AL.
 *
 * Carets, compass and viewport controls. Authored on the 24px grid, inner
 * markup only. Open-path glyphs get a solid silhouette in BATCH_AL_FILLS so
 * the fill/duotone weights read correctly.
 */

export const BATCH_AL = {
  "caret-circle-double-left": `<circle cx="12" cy="12" r="8.4"/><path d="M11.6 8.6 8 12l3.6 3.4M16 8.6 12.4 12l3.6 3.4"/>`,
  "caret-circle-double-right": `<circle cx="12" cy="12" r="8.4"/><path d="M8.4 8.6 12 12l-3.6 3.4M12.4 8.6 16 12l-3.6 3.4"/>`,
  "caret-circle-double-up": `<circle cx="12" cy="12" r="8.4"/><path d="M8.6 13.8 12 10.4l3.4 3.4M8.6 9.8 12 6.4l3.4 3.4"/>`,
  "caret-circle-down": `<circle cx="12" cy="12" r="8.4"/><path d="M8 9.8 12 13.4 16 9.8"/>`,
  "caret-circle-left": `<circle cx="12" cy="12" r="8.4"/><path d="M13.6 8.6 10 12l3.6 3.4"/>`,
  "caret-circle-right": `<circle cx="12" cy="12" r="8.4"/><path d="M10.4 8.6 14 12l-3.6 3.4"/>`,
  "caret-circle-up": `<circle cx="12" cy="12" r="8.4"/><path d="M8 13.4 12 9.8 16 13.4"/>`,
  "caret-circle-up-down": `<circle cx="12" cy="12" r="8.4"/><path d="M8.4 10.4 12 6.8l3.6 3.6M8.4 13.6 12 17.2l3.6-3.6"/>`,
  "caret-double-down": `<path d="M6 8.6 12 14.2 18 8.6M6 13.4 12 19 18 13.4"/>`,
  "caret-double-left": `<path d="M13 6 7.4 12 13 18M8.2 6 2.6 12 8.2 18"/>`,
  "caret-double-right": `<path d="M11 6 16.6 12 11 18M15.8 6 21.4 12 15.8 18"/>`,
  "caret-double-up": `<path d="M6 15.4 12 9.8 18 15.4M6 10.6 12 5 18 10.6"/>`,
  "caret-down": `<path d="M6.4 9.4 12 15l5.6-5.6"/>`,
  "caret-left": `<path d="M14.6 6.4 9 12l5.6 5.6"/>`,
  "caret-line-down": `<path d="M12 4.6v9M7.4 11.4 12 16l4.6-4.6"/>`,
  "caret-line-left": `<path d="M19.4 12h-9M13 7.4 8.4 12l4.6 4.6"/>`,
  "caret-line-right": `<path d="M4.6 12h9M11 7.4 15.6 12 11 16.6"/>`,
  "caret-line-up": `<path d="M12 19.4v-9M7.4 12.6 12 8l4.6 4.6"/>`,
  "caret-right": `<path d="M9.4 6.4 15 12l-5.6 5.6"/>`,
  "caret-up": `<path d="M6.4 14.6 12 9l5.6 5.6"/>`,
  "caret-up-down": `<path d="M6.4 10.4 12 4.8l5.6 5.6M6.4 13.6 12 19.2l5.6-5.6"/>`,
  "compass-rose": `<circle cx="12" cy="12" r="8.4"/><path d="M12 4.2 14.2 9.8 19.8 12 14.2 14.2 12 19.8 9.8 14.2 4.2 12 9.8 9.8Z"/>`,
  "compass-tool": `<circle cx="12" cy="4.6" r="1.4"/><path d="M11 5.6 7.4 19.4M13 5.6 16.6 19.4"/><path d="M7.4 19.4A8.4 8.4 0 0 1 16.6 19.4"/>`,
  "corners-in": `<path d="M2.6 6.6V2.6h4M17.4 2.6h4v4M21.4 17.4v4h-4M6.6 21.4h-4v-4"/>`,
  "corners-out": `<path d="M2.6 2.6h4v4M21.4 2.6h-4v4M21.4 21.4h-4v-4M2.6 21.4h4v-4"/>`,
  "crosshair-simple": `<circle cx="12" cy="12" r="3.2"/><path d="M12 3.6v4.2M12 16.2v4.2M3.6 12h4.2M16.2 12h4.2"/>`,
  "flip-horizontal": `<rect x="11.2" y="3.4" width="1.6" height="17.2" rx="0.8"/><path d="M9 7.4 4.4 12 9 16.6Z"/><path d="M15 7.4 19.6 12 15 16.6Z"/>`,
  "flip-vertical": `<rect x="3.4" y="11.2" width="17.2" height="1.6" rx="0.8"/><path d="M7.4 9 12 4.4 16.6 9Z"/><path d="M7.4 15 12 19.6 16.6 15Z"/>`,
  gps: `<path d="M12 20.8c-3.6-4.2-6-7.2-6-10.2a6 6 0 0 1 12 0c0 3-2.4 6-6 10.2Z"/><circle cx="12" cy="10.4" r="2.2"/>`,
  "gps-fix": `<path d="M12 3.2 18.4 20.4 12 16.4 5.6 20.4Z"/><circle cx="12" cy="12.6" r="1.4"/>`,
};

export const BATCH_AL_FILLS = {
  "caret-circle-double-left": `<path d="M12 3.6a8.4 8.4 0 1 1 0 16.8 8.4 8.4 0 0 1 0-16.8Zm0 1.6a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6Z" fill-rule="evenodd"/><path d="M11.6 8.6 8 12 11.6 15.4 11.6 13.9 9.5 12 11.6 10.1ZM16 8.6 12.4 12 16 15.4 16 13.9 13.9 12 16 10.1Z"/>`,
  "caret-circle-double-right": `<path d="M12 3.6a8.4 8.4 0 1 1 0 16.8 8.4 8.4 0 0 1 0-16.8Zm0 1.6a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6Z" fill-rule="evenodd"/><path d="M8.4 8.6 8.4 10.1 10.5 12 8.4 13.9 8.4 15.4 12 12ZM12.4 8.6 12.4 10.1 14.5 12 12.4 13.9 12.4 15.4 16 12Z"/>`,
  "caret-circle-double-up": `<path d="M12 3.6a8.4 8.4 0 1 1 0 16.8 8.4 8.4 0 0 1 0-16.8Zm0 1.6a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6Z" fill-rule="evenodd"/><path d="M8.6 13 12 9.6 15.4 13 15.4 14.6 12 11.2 8.6 14.6ZM8.6 9 12 5.6 15.4 9 15.4 10.6 12 7.2 8.6 10.6Z"/>`,
  "caret-circle-down": `<path d="M12 3.6a8.4 8.4 0 1 1 0 16.8 8.4 8.4 0 0 1 0-16.8Zm0 1.6a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6Z" fill-rule="evenodd"/><path d="M8 9 12 12.6 16 9 16 10.6 12 14.2 8 10.6Z"/>`,
  "caret-circle-left": `<path d="M12 3.6a8.4 8.4 0 1 1 0 16.8 8.4 8.4 0 0 1 0-16.8Zm0 1.6a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6Z" fill-rule="evenodd"/><path d="M13.6 8.6 10 12 13.6 15.4 13.6 13.9 11.5 12 13.6 10.1Z"/>`,
  "caret-circle-right": `<path d="M12 3.6a8.4 8.4 0 1 1 0 16.8 8.4 8.4 0 0 1 0-16.8Zm0 1.6a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6Z" fill-rule="evenodd"/><path d="M10.4 8.6 10.4 10.1 12.5 12 10.4 13.9 10.4 15.4 14 12Z"/>`,
  "caret-circle-up": `<path d="M12 3.6a8.4 8.4 0 1 1 0 16.8 8.4 8.4 0 0 1 0-16.8Zm0 1.6a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6Z" fill-rule="evenodd"/><path d="M8 12.6 12 9 16 12.6 16 14.2 12 10.6 8 14.2Z"/>`,
  "caret-circle-up-down": `<path d="M12 3.6a8.4 8.4 0 1 1 0 16.8 8.4 8.4 0 0 1 0-16.8Zm0 1.6a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6Z" fill-rule="evenodd"/><path d="M8.4 9.6 12 6 15.6 9.6 15.6 11.2 12 7.6 8.4 11.2ZM8.4 12.8 12 16.4 15.6 12.8 15.6 14.4 12 18 8.4 14.4Z"/>`,
  "caret-double-down": `<path d="M6 7.8 12 13.4 18 7.8 18 9.4 12 15 6 9.4ZM6 12.6 12 18.2 18 12.6 18 14.2 12 19.8 6 14.2Z"/>`,
  "caret-double-left": `<path d="M13 6 7.4 12 13 18 13 16.4 9.1 12 13 7.6ZM8.2 6 2.6 12 8.2 18 8.2 16.4 4.3 12 8.2 7.6Z"/>`,
  "caret-double-right": `<path d="M11 6 11 7.6 14.9 12 11 16.4 11 18 16.6 12ZM15.8 6 15.8 7.6 19.7 12 15.8 16.4 15.8 18 21.4 12Z"/>`,
  "caret-double-up": `<path d="M6 14.6 12 9 18 14.6 18 16.2 12 10.6 6 16.2ZM6 9.8 12 4.2 18 9.8 18 11.4 12 5.8 6 11.4Z"/>`,
  "caret-down": `<path d="M6.4 8.6 12 14.2 17.6 8.6 17.6 10.2 12 15.8 6.4 10.2Z"/>`,
  "caret-left": `<path d="M14.6 6.4 9 12 14.6 17.6 14.6 16 10.6 12 14.6 8Z"/>`,
  "caret-line-down": `<path d="M11.2 4.6h1.6v9h-1.6ZM7.4 10.6 12 15.2 16.6 10.6 16.6 12.2 12 16.8 7.4 12.2Z"/>`,
  "caret-line-left": `<path d="M10.4 11.2h9v1.6h-9ZM13 7.4 8.4 12 13 16.6 13 15.1 9.9 12 13 8.9Z"/>`,
  "caret-line-right": `<path d="M4.6 11.2h9v1.6h-9ZM11 7.4 11 8.9 14.1 12 11 15.1 11 16.6 15.6 12Z"/>`,
  "caret-line-up": `<path d="M11.2 10.4h1.6v9h-1.6ZM7.4 11.8 12 7.2 16.6 11.8 16.6 13.4 12 8.8 7.4 13.4Z"/>`,
  "caret-right": `<path d="M9.4 6.4 9.4 8 13.4 12 9.4 16 9.4 17.6 15 12Z"/>`,
  "caret-up": `<path d="M6.4 13.8 12 8.2 17.6 13.8 17.6 15.4 12 9.8 6.4 15.4Z"/>`,
  "caret-up-down": `<path d="M6.4 9.6 12 4 17.6 9.6 17.6 11.2 12 5.6 6.4 11.2ZM6.4 12.8 12 18.4 17.6 12.8 17.6 14.4 12 20 6.4 14.4Z"/>`,
  "compass-tool": `<circle cx="12" cy="4.6" r="1.4"/><path d="M10.2 5.4 11.8 5.8 6.6 19.2 8.2 19.6ZM10.2 5.8 11.8 5.4 17.4 19.2 15.8 19.6Z"/><path d="M6.8 19.4a9.4 9.4 0 0 1 10.4 0l-1.2 1.2a7.8 7.8 0 0 0-8 0Z"/>`,
  "corners-in": `<path d="M2.6 2.6h4.8v1.6H4.2v3.2H2.6ZM16.6 2.6h4.8v4.8h-1.6V4.2h-3.2ZM19.8 16.6h1.6v4.8h-4.8v-1.6h3.2ZM2.6 16.6h1.6v3.2h3.2v1.6H2.6Z"/>`,
  "corners-out": `<path d="M2.6 2.6h5.6v1.6H4.2v4H2.6ZM15.8 2.6h5.6v5.6h-1.6v-4h-4ZM15.8 21.4h5.6v-5.6h-1.6v4h-4ZM2.6 15.8h1.6v4h4v1.6H2.6Z"/>`,
  "crosshair-simple": `<path d="M12 8.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Zm0 1.4a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Z" fill-rule="evenodd"/><path d="M11.2 3.6h1.6v4.2h-1.6ZM11.2 16.2h1.6v4.2h-1.6ZM3.6 11.2h4.2v1.6H3.6ZM16.2 11.2h4.2v1.6h-4.2Z"/>`,
};
