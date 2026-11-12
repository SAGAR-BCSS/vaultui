/**
 * Vault Icons - original masters, batch AT.
 *
 * Selection, math/set notation and geometric shapes. Authored on the 24px
 * grid, inner markup only. Open detail or knocked-out fills live in
 * BATCH_AT_FILLS so the fill and duotone weights read correctly.
 */

const BRACKETS = `<path d="M3.4 3.4h5.2v1.8H5.2v3.4H3.4ZM15.4 3.4h5.2v5.2h-1.8V5.2h-3.4ZM3.4 15.4h1.8v3.4h3.4v1.8H3.4ZM20.6 15.4v5.2h-5.2v-1.8h3.4v-3.4Z"/>`;

const SPIRAL = `<path d="M12 10.3L12.33 10.23L12.68 10.23L13.04 10.3L13.4 10.45L13.73 10.67L14.03 10.96L14.28 11.32L14.46 11.74L14.57 12.2L14.58 12.69L14.5 13.19L14.32 13.68L14.04 14.15L13.67 14.57L13.21 14.92L12.68 15.18L12.09 15.35L11.46 15.41L10.82 15.34L10.18 15.16L9.57 14.85L9.02 14.42L8.54 13.88L8.16 13.25L7.9 12.54L7.78 11.78L7.79 10.99L7.96 10.2L8.28 9.44L8.74 8.74L9.33 8.12L10.04 7.6L10.85 7.23L11.74 7L12.67 6.94L13.61 7.05L14.53 7.34L15.39 7.81L16.18 8.43L16.84 9.21L17.36 10.1L17.71 11.1L17.88 12.15L17.85 13.24L17.61 14.32L17.18 15.36L16.55 16.32L15.74 17.15L14.78 17.83L13.7 18.34L12.52 18.64L11.29 18.72L10.05 18.57L8.84 18.19L7.71 17.59L6.69 16.78L5.83 15.78L5.15 14.63L4.69 13.36L4.47 12L4.5 10.61L4.79 9.23L5.33 7.91L6.11 6.7L7.12 5.64L8.32 4.77L9.67 4.12L11.13 3.73L12.66 3.62L14.2 3.78L15.7 4.24L17.11 4.96L16.11 6.34L14.97 5.77L13.76 5.43L12.53 5.31L11.31 5.43L10.15 5.75L9.09 6.28L8.15 6.99L7.38 7.84L6.78 8.8L6.37 9.84L6.17 10.92L6.17 12L6.36 13.05L6.74 14.02L7.27 14.9L7.95 15.64L8.74 16.24L9.62 16.68L10.54 16.94L11.47 17.03L12.39 16.94L13.26 16.7L14.05 16.3L14.74 15.78L15.31 15.15L15.75 14.44L16.04 13.67L16.18 12.89L16.18 12.11L16.03 11.36L15.76 10.67L15.37 10.06L14.88 9.54L14.32 9.13L13.72 8.84L13.08 8.67L12.44 8.63L11.83 8.7L11.25 8.88L10.73 9.16L10.29 9.52L9.94 9.94L9.68 10.4L9.51 10.89L9.45 11.39L9.48 11.87L9.59 12.32L9.78 12.72L10.03 13.07L10.34 13.35L10.67 13.55L11.03 13.68L11.38 13.74L11.73 13.73L12.04 13.65L12.32 13.52L12.56 13.35L12.74 13.14L12.87 12.92L12.94 12.69L12.97 12.46L12.94 12.25L12.87 12.07L12.77 11.92L12.65 11.81L12.52 11.74L12.39 11.7L12.26 11.71L12.15 11.75L12.07 11.81L12.04 11.8L12 11.8Z"/>`;

const STAR = `<path d="M12 3.6 14.12 9.09 19.99 9.4 15.42 13.11 16.94 18.8 12 15.6 7.06 18.8 8.58 13.11 4.01 9.4 9.88 9.09Z"/>`;

export const BATCH_AT = {
  "selection-all": `${BRACKETS}<rect x="6.8" y="6.8" width="10.4" height="10.4" rx="1.6"/>`,
  "selection-background": `${BRACKETS}<rect x="10.8" y="10.8" width="7.6" height="7.6" rx="1.4"/>`,
  "selection-foreground": `${BRACKETS}<rect x="5.6" y="5.6" width="7.6" height="7.6" rx="1.4"/>`,
  "selection-inverse": `${BRACKETS}<rect x="6.4" y="6.4" width="11.2" height="11.2" rx="1.6"/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1.0"/>`,
  "selection-plus": `${BRACKETS}<path d="M10.8 6.8h2.4v4.0h4.0v2.4h-4.0v4.0h-2.4v-4.0H6.8v-2.4h4.0Z"/>`,
  "selection-slash": `${BRACKETS}<path d="M8.1 16.5 6.9 15.3 15.3 6.9 16.5 8.1Z"/>`,
  sigma: `<path d="M5.6 5.0h12.8v2.6h-8.0l3.6 4.4-3.6 4.4h8.0V19H5.6l5.0-7.0Z"/>`,
  sliders: `<path d="M3.4 7.2h17.2M3.4 12h17.2M3.4 16.8h17.2"/><circle cx="9.0" cy="7.2" r="2.0"/><circle cx="15.4" cy="12" r="2.0"/><circle cx="8.0" cy="16.8" r="2.0"/>`,
  "sliders-horizontal": `<path d="M7.2 3.4v17.2M12 3.4v17.2M16.8 3.4v17.2"/><circle cx="7.2" cy="9.0" r="2.0"/><circle cx="12" cy="15.4" r="2.0"/><circle cx="16.8" cy="8.0" r="2.0"/>`,
  sphere: `<circle cx="12" cy="12" r="8.4"/><path d="M12 3.6c3.2 2.4 3.2 14.4 0 16.8-3.2-2.4-3.2-14.4 0-16.8Z"/><path d="M3.6 12c2.4-3.2 14.4-3.2 16.8 0-2.4 3.2-14.4 3.2-16.8 0Z"/>`,
  spiral: SPIRAL,
  "square-half": `<rect x="3.4" y="3.4" width="17.2" height="17.2" rx="1.4"/><rect x="11.2" y="3.4" width="1.6" height="17.2"/>`,
  "square-half-bottom": `<rect x="3.4" y="3.4" width="17.2" height="17.2" rx="1.4"/><rect x="3.4" y="11.2" width="17.2" height="1.6"/>`,
  "square-logo": `<rect x="3.4" y="3.4" width="17.2" height="17.2" rx="4.4"/><circle cx="12" cy="12" r="3.0"/>`,
  "square-split-horizontal": `<rect x="3.4" y="3.4" width="7.4" height="17.2" rx="1.4"/><rect x="13.2" y="3.4" width="7.4" height="17.2" rx="1.4"/>`,
  "square-split-vertical": `<rect x="3.4" y="3.4" width="17.2" height="7.4" rx="1.4"/><rect x="3.4" y="13.2" width="17.2" height="7.4" rx="1.4"/>`,
  "squares-four": `<rect x="3.4" y="3.4" width="7.4" height="7.4" rx="1.4"/><rect x="13.2" y="3.4" width="7.4" height="7.4" rx="1.4"/><rect x="3.4" y="13.2" width="7.4" height="7.4" rx="1.4"/><rect x="13.2" y="13.2" width="7.4" height="7.4" rx="1.4"/>`,
  "star-and-crescent": `<path d="M15.0 3.8c-4.6 0-8.2 3.7-8.2 8.2s3.6 8.2 8.2 8.2c-3.0-2.0-4.8-5.0-4.8-8.2s1.8-6.2 4.8-8.2Z"/><path d="M17.2 6.6 17.79 8.19 19.48 8.26 18.15 9.31 18.61 10.94 17.2 10.0 15.79 10.94 16.25 9.31 14.92 8.26 16.61 8.19Z"/>`,
  "star-half": `${STAR}<rect x="11.2" y="3.6" width="1.6" height="15.2"/>`,
  "star-of-david": `<path d="M12 3.8 20.2 18.0H3.8Z"/><path d="M12 20.2 3.8 6.0h16.4Z"/>`,
  steps: `<path d="M3.4 18.2h4.4v-3.6h4.4V11h4.4V7.4h4.0v13.2H3.4Z"/>`,
  "subset-of": `<path d="M16.2 4.2A7.8 7.8 0 0 0 16.2 19.8L16.2 17.8A5.8 5.8 0 0 1 16.2 6.2Z"/>`,
  "subset-proper-of": `<path d="M16.2 4.0A7.8 7.8 0 0 0 16.2 19.4L16.2 17.4A5.8 5.8 0 0 1 16.2 6.0Z"/><rect x="8.4" y="20.0" width="9.2" height="1.4" rx="0.7"/>`,
  subtract: `<circle cx="8.6" cy="12" r="5.4"/><circle cx="15.4" cy="12" r="5.4"/>`,
  "subtract-square": `<rect x="3.4" y="4.2" width="13.4" height="13.4" rx="1.6"/><circle cx="15.4" cy="13.2" r="4.8"/>`,
  "superset-of": `<path d="M7.8 4.2A7.8 7.8 0 0 1 7.8 19.8L7.8 17.8A5.8 5.8 0 0 0 7.8 6.2Z"/>`,
  "superset-proper-of": `<path d="M7.8 4.0A7.8 7.8 0 0 1 7.8 19.4L7.8 17.4A5.8 5.8 0 0 0 7.8 6.0Z"/><rect x="6.4" y="20.0" width="9.2" height="1.4" rx="0.7"/>`,
  swatches: `<circle cx="8.2" cy="8.2" r="4.8"/><circle cx="15.8" cy="8.2" r="4.8"/><circle cx="12" cy="15.4" r="4.8"/>`,
  table: `<rect x="3.4" y="4.2" width="17.2" height="15.6" rx="1.4"/><path d="M3.4 8.6h17.2M9.8 8.6v11.2"/>`,
  tabs: `<rect x="3.4" y="4.6" width="5.2" height="14.8" rx="1.4"/><rect x="9.4" y="4.6" width="5.2" height="10.4" rx="1.4"/><rect x="15.4" y="4.6" width="5.2" height="7.6" rx="1.4"/>`,
};

export const BATCH_AT_FILLS = {
  "selection-inverse": `${BRACKETS}<path d="M6.4 6.4h11.2v11.2H6.4Z M9.6 9.6h4.8v4.8H9.6Z" fill-rule="evenodd"/>`,
  sliders: `<path d="M3.4 6.2h17.2v2.0H3.4ZM3.4 11.0h17.2v2.0H3.4ZM3.4 15.8h17.2v2.0H3.4ZM7 7.2a2 2 0 1 0 4 0 2 2 0 1 0-4 0ZM13.4 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0ZM6 16.8a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z"/>`,
  "sliders-horizontal": `<path d="M6.2 3.4h2.0v17.2h-2.0ZM11.0 3.4h2.0v17.2h-2.0ZM15.8 3.4h2.0v17.2h-2.0ZM5.2 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0ZM10 15.4a2 2 0 1 0 4 0 2 2 0 1 0-4 0ZM14.8 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z"/>`,
  "square-half": `<path d="M3.4 3.4h17.2v17.2H3.4ZM12 3.4h8.6v17.2H12Z" fill-rule="evenodd"/>`,
  "square-half-bottom": `<path d="M3.4 3.4h17.2v17.2H3.4ZM3.4 12h17.2v8.6H3.4Z" fill-rule="evenodd"/>`,
  "square-logo": `<path d="M7.8 3.4h8.4a4.4 4.4 0 0 1 4.4 4.4v8.4a4.4 4.4 0 0 1-4.4 4.4H7.8a4.4 4.4 0 0 1-4.4-4.4V7.8a4.4 4.4 0 0 1 4.4-4.4ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill-rule="evenodd"/>`,
  "star-half": `<path d="M12 3.6 14.12 9.09 19.99 9.4 15.42 13.11 16.94 18.8 12 15.6 7.06 18.8 8.58 13.11 4.01 9.4 9.88 9.09Z M12 3.0h8.6v18.0H12Z" fill-rule="evenodd"/>`,
  table: `<path d="M3.4 4.2h17.2v15.6H3.4ZM3.4 7.8h17.2v1.6H3.4ZM9.0 9.4h1.6v10.4H9.0Z" fill-rule="evenodd"/>`,
};
