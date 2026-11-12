/**
 * Vault Icons - original masters, batch AR.
 *
 * Math notation and numerals. Digits use a segmented construction on the
 * 24px grid, inner markup only. Open-path glyphs get a solid silhouette in
 * BATCH_AR_FILLS so the fill/duotone weights read correctly.
 */

export const BATCH_AR = {
  "math-operations": `<path d="M6.4 4.8h1.6v2.4h2.4V8.8H8v2.4H6.4V8.8H4V7.2h2.4Z"/><rect x="14" y="7" width="5.2" height="1.6" rx="0.8"/><path d="M4.8 14.8 5.9 13.7 9.6 17.4 8.5 18.5ZM9.6 14.8 8.5 13.7 4.8 17.4 5.9 18.5Z"/><path d="M14 15.8h5.2v1.6H14ZM16.6 13.2a1 1 0 0 1 0 2 1 1 0 0 1 0-2ZM16.6 18.8a1 1 0 0 1 0 2 1 1 0 0 1 0-2Z"/>`,
  "member-of": `<path d="M16.6 6.2A6.6 6.6 0 1 0 16.6 17.8"/><path d="M7.2 12h9.4"/>`,
  "minus-square": `<rect x="3.4" y="3.4" width="17.2" height="17.2"/><rect x="7" y="11.2" width="10" height="1.6" rx="0.8"/>`,
  "not-member-of": `<path d="M16.6 6.2A6.6 6.6 0 1 0 16.6 17.8"/><path d="M7.2 12h9.4"/><path d="M4.6 4.6 19.4 19.4"/>`,
  "not-subset-of": `<path d="M17 4.6H7v14.8h10"/><path d="M4.6 4.6 19.4 19.4"/>`,
  "not-superset-of": `<path d="M7 4.6h10v14.8H7"/><path d="M4.6 4.6 19.4 19.4"/>`,
  notches: `<path d="M3.4 3.4h5v2h6v-2h5v5h-2v6h2v5h-5v-2h-6v2h-5v-5h2v-6h-2Z"/>`,
  "number-eight": `<path d="M7.8 3.6h8.4v1.6H7.8ZM15.8 4.8h1.6v6.4h-1.6ZM15.8 12.8h1.6v6.4h-1.6ZM7.8 19.6h8.4v1.6H7.8ZM6.2 12.8h1.6v6.4H6.2ZM6.2 4.8h1.6v6.4H6.2ZM7.8 11.6h8.4v1.6H7.8Z"/>`,
  "number-five": `<path d="M7.8 3.6h8.4v1.6H7.8ZM6.2 4.8h1.6v6.4H6.2ZM7.8 11.6h8.4v1.6H7.8ZM15.8 12.8h1.6v6.4h-1.6ZM7.8 19.6h8.4v1.6H7.8Z"/>`,
  "number-four": `<path d="M6.2 4.8h1.6v6.4H6.2ZM7.8 11.6h8.4v1.6H7.8ZM15.8 4.8h1.6v6.4h-1.6ZM15.8 12.8h1.6v6.4h-1.6Z"/>`,
  "number-nine": `<path d="M7.8 3.6h8.4v1.6H7.8ZM15.8 4.8h1.6v6.4h-1.6ZM15.8 12.8h1.6v6.4h-1.6ZM7.8 19.6h8.4v1.6H7.8ZM6.2 4.8h1.6v6.4H6.2ZM7.8 11.6h8.4v1.6H7.8Z"/>`,
  "number-one": `<path d="M15.8 4.8h1.6v6.4h-1.6ZM15.8 12.8h1.6v6.4h-1.6Z"/>`,
  "number-seven": `<path d="M7.8 3.6h8.4v1.6H7.8ZM15.8 4.8h1.6v6.4h-1.6ZM15.8 12.8h1.6v6.4h-1.6Z"/>`,
  "number-six": `<path d="M7.8 3.6h8.4v1.6H7.8ZM6.2 4.8h1.6v6.4H6.2ZM7.8 11.6h8.4v1.6H7.8ZM6.2 12.8h1.6v6.4H6.2ZM15.8 12.8h1.6v6.4h-1.6ZM7.8 19.6h8.4v1.6H7.8Z"/>`,
  "number-circle-eight": `<circle cx="12" cy="12" r="8.4"/><path d="M8.8 5.6h6.4v1.4H8.8ZM15 6.6h1.4v5H15ZM15 12.4h1.4v5H15ZM8.8 17.4h6.4v1.4H8.8ZM7.6 12.4h1.4v5H7.6ZM7.6 6.6h1.4v5H7.6ZM8.8 11.4h6.4v1.4H8.8Z"/>`,
  "number-circle-five": `<circle cx="12" cy="12" r="8.4"/><path d="M8.8 5.6h6.4v1.4H8.8ZM7.6 6.6h1.4v5H7.6ZM8.8 11.4h6.4v1.4H8.8ZM15 12.4h1.4v5H15ZM8.8 17.4h6.4v1.4H8.8Z"/>`,
  "number-circle-four": `<circle cx="12" cy="12" r="8.4"/><path d="M7.6 6.6h1.4v5H7.6ZM8.8 11.4h6.4v1.4H8.8ZM15 6.6h1.4v5H15ZM15 12.4h1.4v5H15Z"/>`,
  "number-circle-nine": `<circle cx="12" cy="12" r="8.4"/><path d="M8.8 5.6h6.4v1.4H8.8ZM15 6.6h1.4v5H15ZM15 12.4h1.4v5H15ZM8.8 17.4h6.4v1.4H8.8ZM7.6 6.6h1.4v5H7.6ZM8.8 11.4h6.4v1.4H8.8Z"/>`,
  "number-circle-one": `<circle cx="12" cy="12" r="8.4"/><path d="M15 6.6h1.4v5H15ZM15 12.4h1.4v5H15Z"/>`,
  "number-circle-seven": `<circle cx="12" cy="12" r="8.4"/><path d="M8.8 5.6h6.4v1.4H8.8ZM15 6.6h1.4v5H15ZM15 12.4h1.4v5H15Z"/>`,
  "number-circle-six": `<circle cx="12" cy="12" r="8.4"/><path d="M8.8 5.6h6.4v1.4H8.8ZM7.6 6.6h1.4v5H7.6ZM8.8 11.4h6.4v1.4H8.8ZM7.6 12.4h1.4v5H7.6ZM15 12.4h1.4v5H15ZM8.8 17.4h6.4v1.4H8.8Z"/>`,
  "number-circle-three": `<circle cx="12" cy="12" r="8.4"/><path d="M8.8 5.6h6.4v1.4H8.8ZM15 6.6h1.4v5H15ZM8.8 11.4h6.4v1.4H8.8ZM15 12.4h1.4v5H15ZM8.8 17.4h6.4v1.4H8.8Z"/>`,
  "number-circle-two": `<circle cx="12" cy="12" r="8.4"/><path d="M8.8 5.6h6.4v1.4H8.8ZM15 6.6h1.4v5H15ZM8.8 11.4h6.4v1.4H8.8ZM7.6 12.4h1.4v5H7.6ZM8.8 17.4h6.4v1.4H8.8Z"/>`,
  "number-circle-zero": `<circle cx="12" cy="12" r="8.4"/><path d="M8.8 5.6h6.4v1.4H8.8ZM15 6.6h1.4v5H15ZM15 12.4h1.4v5H15ZM8.8 17.4h6.4v1.4H8.8ZM7.6 12.4h1.4v5H7.6ZM7.6 6.6h1.4v5H7.6Z"/>`,
  "number-square-eight": `<rect x="3.4" y="3.4" width="17.2" height="17.2"/><path d="M8.8 5.6h6.4v1.4H8.8ZM15 6.6h1.4v5H15ZM15 12.4h1.4v5H15ZM8.8 17.4h6.4v1.4H8.8ZM7.6 12.4h1.4v5H7.6ZM7.6 6.6h1.4v5H7.6ZM8.8 11.4h6.4v1.4H8.8Z"/>`,
  "number-square-five": `<rect x="3.4" y="3.4" width="17.2" height="17.2"/><path d="M8.8 5.6h6.4v1.4H8.8ZM7.6 6.6h1.4v5H7.6ZM8.8 11.4h6.4v1.4H8.8ZM15 12.4h1.4v5H15ZM8.8 17.4h6.4v1.4H8.8Z"/>`,
  "number-square-four": `<rect x="3.4" y="3.4" width="17.2" height="17.2"/><path d="M7.6 6.6h1.4v5H7.6ZM8.8 11.4h6.4v1.4H8.8ZM15 6.6h1.4v5H15ZM15 12.4h1.4v5H15Z"/>`,
  "number-square-nine": `<rect x="3.4" y="3.4" width="17.2" height="17.2"/><path d="M8.8 5.6h6.4v1.4H8.8ZM15 6.6h1.4v5H15ZM15 12.4h1.4v5H15ZM8.8 17.4h6.4v1.4H8.8ZM7.6 6.6h1.4v5H7.6ZM8.8 11.4h6.4v1.4H8.8Z"/>`,
  "number-square-one": `<rect x="3.4" y="3.4" width="17.2" height="17.2"/><path d="M15 6.6h1.4v5H15ZM15 12.4h1.4v5H15Z"/>`,
  "number-square-seven": `<rect x="3.4" y="3.4" width="17.2" height="17.2"/><path d="M8.8 5.6h6.4v1.4H8.8ZM15 6.6h1.4v5H15ZM15 12.4h1.4v5H15Z"/>`,
};

export const BATCH_AR_FILLS = {
  "member-of": `<path d="M17.4 5.4A7.4 7.4 0 1 0 17.4 18.6l-1.4-1a5.8 5.8 0 0 0 0-11.2Z"/><rect x="7.2" y="11.2" width="9.4" height="1.6"/>`,
  "not-member-of": `<path d="M17.4 5.4A7.4 7.4 0 1 0 17.4 18.6l-1.4-1a5.8 5.8 0 0 0 0-11.2Z"/><rect x="7.2" y="11.2" width="9.4" height="1.6"/><path d="M3.6 5.2 5.2 3.6 20.4 18.8 18.8 20.4Z"/>`,
  "not-subset-of": `<path d="M17.8 3.8H6.2v16.4h11.6v-1.6H7.8V5.4h10Z"/><path d="M3.6 5.2 5.2 3.6 20.4 18.8 18.8 20.4Z"/>`,
  "not-superset-of": `<path d="M6.2 3.8h11.6v16.4H6.2v-1.6h10V5.4h-10Z"/><path d="M3.6 5.2 5.2 3.6 20.4 18.8 18.8 20.4Z"/>`,
};
