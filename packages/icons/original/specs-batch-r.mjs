/**
 * Vault Icons - original masters, batch R.
 *
 * Home, interior and everyday-object glyphs authored on the 24px grid,
 * inner markup only. Glyphs that use an open path get a solid silhouette in
 * BATCH_R_FILLS so the fill and duotone weights read correctly.
 */

export const BATCH_R = {
  "lamp-pendant": `<path d="M12 2.8v5.8"/><path d="M4.8 14.6h14.4L15.4 8.6H8.6Z"/><path d="M10.4 14.6h3.2v1.4a1.6 1.6 0 0 1-3.2 0Z"/>`,
  "office-chair": `<rect x="7.2" y="3.2" width="9.6" height="7.6" rx="2.6"/><rect x="5.4" y="10.8" width="13.2" height="3.2" rx="1.6"/><path d="M12 14v3.2M12 17.2 7.4 20.2M12 17.2l4.6 3"/>`,
  rug: `<rect x="3.2" y="6.8" width="17.6" height="10.4" rx="1.4"/><rect x="6.2" y="9.4" width="11.6" height="5.2" rx="0.8"/><path d="M3.2 9.2H2.6M3.2 12H2.6M3.2 14.8H2.6M20.8 9.2h.6M20.8 12h.6M20.8 14.8h.6"/>`,
  desk: `<rect x="2.8" y="8.2" width="18.4" height="2.2" rx="0.8"/><rect x="4.6" y="10.4" width="1.6" height="10.2"/><rect x="17.8" y="10.4" width="1.6" height="10.2"/><rect x="11.6" y="12.4" width="5.2" height="4.6" rx="0.8"/>`,
  "coat-hanger": `<path d="M12 8.4 3.6 14.6a1.4 1.4 0 0 0 1.2 2.2h14.4a1.4 1.4 0 0 0 1.2-2.2Z"/><path d="M12 8.4V6.4a2 2 0 0 1 4 0v1.2"/>`,
  "ladder-simple": `<path d="M7.4 3.2h1.4L7.2 20.8H5.8Z"/><path d="M15.2 3.2h1.4l1.6 17.6h-1.4Z"/><path d="M7.6 8.2h8.4v1.2H7.6ZM7 12.4h9.6v1.2H7ZM6.4 16.6h10.8v1.2H6.4Z"/>`,
  "toilet-paper": `<circle cx="13.6" cy="9.4" r="5.8"/><circle cx="13.6" cy="9.4" r="2"/><path d="M8.6 14.4h6.2v5.4a1.6 1.6 0 0 1-1.6 1.6h-3a1.6 1.6 0 0 1-1.6-1.6Z"/>`,
  towel: `<rect x="3.2" y="4.6" width="17.6" height="1.6" rx="0.8"/><path d="M6.2 6.2h11.6v11.4a2.6 2.6 0 0 1-2.6 2.6H8.8a2.6 2.6 0 0 1-2.6-2.6Z"/><rect x="8" y="13.2" width="8" height="1.4" rx="0.7"/>`,
  "hand-soap": `<rect x="7.4" y="8.6" width="9.2" height="12" rx="2.4"/><rect x="10.4" y="5.6" width="3.2" height="3.2"/><path d="M10.4 5.6V4a1.2 1.2 0 0 1 1.2-1.2h4.8v1.6h-4.4V5.6Z"/><rect x="16.2" y="2.8" width="2.6" height="1.6" rx="0.8"/>`,
  "spray-bottle": `<path d="M8.4 10h7.2v9.2a2.2 2.2 0 0 1-2.2 2.2h-2.8a2.2 2.2 0 0 1-2.2-2.2Z"/><rect x="10.2" y="7.2" width="3.6" height="2.8"/><rect x="9" y="4.2" width="6.8" height="3" rx="1.2"/><path d="M15.8 4.8h2.8v1.6h-2.8ZM19.4 3.2h1.2v1.2h-1.2ZM19.8 7h1.2v1.2h-1.2ZM7 3.4h1.2v1.2H7ZM6.2 6.6H7.4v1.2H6.2Z"/>`,
  "picnic-table": `<rect x="3.2" y="8.2" width="17.6" height="2" rx="0.8"/><rect x="2.4" y="14.6" width="5.6" height="1.8" rx="0.8"/><rect x="16" y="14.6" width="5.6" height="1.8" rx="0.8"/><path d="M6.6 10.2h1.2L6 20.4H4.8ZM8.4 10.2h1.2l1.8 10.2H10.2ZM14.4 10.2h1.2l-1.8 10.2H12.6ZM17.4 10.2h1.2l-1.8 10.2H15.6Z"/>`,
  recycle: `<path d="M5 7 8.2 5 8.2 6.2 16.4 6.2 16.4 7.8 8.2 7.8 8.2 9Z"/><path d="M19.8 8.4 20 12.2 18.9 11.6 14.8 18.7 13.4 17.9 17.5 10.8 16.5 10.2Z"/><path d="M11.2 20.6 7.8 18.8 8.9 18.2 4.8 11.1 6.2 10.3 10.3 17.4 11.3 16.8Z"/>`,
  yarn: `<circle cx="12" cy="12" r="8.2"/><path d="M4.4 7.4c3.6 2.2 6.8 5.6 8.8 10l-1.4 1C9.8 14.2 6.6 10.8 3 8.6Z"/><path d="M7 3.8c2.8 4 5.4 8 7.4 12.4l-1.5.6C11 12.6 8.4 8.6 5.6 4.6Z"/><path d="M17.6 4.2c-2.8 4.6-4.2 8.8-4.6 13.6h-1.6c.4-5 1.9-9.4 4.8-14.2Z"/>`,
  needle: `<path d="M18.4 3.6a1.6 1.6 0 0 1 2.2 2.2l-11.8 12-2.6-2.6Z"/><circle cx="18.8" cy="5.6" r="1"/>`,
  "paint-roller": `<rect x="4.2" y="5.2" width="12.4" height="5.2" rx="1.6"/><path d="M16.6 6.6h2.2a2.6 2.6 0 0 1 2.6 2.6v2.4a2.6 2.6 0 0 1-2.6 2.6h-3.6v-1.6h3.6a1 1 0 0 0 1-1v-2.4a1 1 0 0 0-1-1h-2.2Z"/><rect x="12.6" y="12.6" width="3" height="7.8" rx="1.4"/>`,
  "paint-brush-household": `<rect x="3.6" y="13.6" width="16.8" height="4.6" rx="1.4"/><rect x="6.4" y="11" width="11.2" height="2.6" rx="0.6"/><rect x="9.6" y="3.2" width="4.8" height="7.8" rx="1.8"/>`,
  "paint-brush-broad": `<path d="M3.4 14.6h17.2v3.4a2.2 2.2 0 0 1-2.2 2.2H5.6a2.2 2.2 0 0 1-2.2-2.2Z"/><rect x="5.2" y="11.8" width="13.6" height="2.8" rx="0.6"/><rect x="9.4" y="3.2" width="5.2" height="8.6" rx="2.6"/>`,
  "hard-hat": `<path d="M4.6 15.2a7.4 7.4 0 0 1 14.8 0Z"/><rect x="2.8" y="15.2" width="18.4" height="2.4" rx="1.2"/><rect x="10.2" y="7.8" width="3.6" height="7.4" rx="1.8"/>`,
  trolley: `<path d="M6.8 5.2h14l-2.2 8.4H9Z"/><path d="M2.8 3.6h3.4l3.2 11.2"/><circle cx="9.4" cy="18.6" r="1.6"/><circle cx="16.8" cy="18.6" r="1.6"/>`,
  "suitcase-simple": `<rect x="2.8" y="7.4" width="18.4" height="13" rx="2.4"/><path d="M8.2 7.4V5.6a2.2 2.2 0 0 1 2.2-2.2h3.2a2.2 2.2 0 0 1 2.2 2.2v1.8h-1.6V5.6a.6.6 0 0 0-.6-.6h-3.2a.6.6 0 0 0-.6.6v1.8Z"/><rect x="10.6" y="12.6" width="2.8" height="2.4" rx="0.6"/>`,
  "suitcase-rolling": `<rect x="5.6" y="8.6" width="12.8" height="11.8" rx="2.2"/><path d="M8.4 2.8h1.6v5.8H8.4ZM14 2.8h1.6v5.8H14ZM8.4 2.8h7.2v1.6H8.4Z"/><circle cx="8.6" cy="20.2" r="1.2"/><circle cx="15.4" cy="20.2" r="1.2"/>`,
  "tote-simple": `<path d="M4.4 8.4h15.2l-1.6 11.2a2.2 2.2 0 0 1-2.2 1.8H8.2a2.2 2.2 0 0 1-2.2-1.8Z"/><path d="M8.2 8.4V6.6a3.8 3.8 0 0 1 7.6 0v1.8h-1.6V6.6a2.2 2.2 0 0 0-4.4 0v1.8Z"/><rect x="4.4" y="11.4" width="15.2" height="1.4"/>`,
  "shipping-container": `<rect x="2.8" y="6.4" width="18.4" height="11.2" rx="1"/><path d="M6 6.4h.7v11.2H6ZM8.9 6.4h.7v11.2H8.9ZM11.8 6.4h.7v11.2h-.7ZM14.7 6.4h.7v11.2h-.7ZM17.6 6.4h.7v11.2h-.7Z"/><rect x="18.6" y="9" width="1.4" height="4.8" rx="0.4"/>`,
  seat: `<path d="M6.2 10.6V5.4a2.2 2.2 0 0 1 2.2-2.2h7.2a2.2 2.2 0 0 1 2.2 2.2v5.2h-1.8V5.4a.4.4 0 0 0-.4-.4H8.4a.4.4 0 0 0-.4.4v5.2Z"/><rect x="5.2" y="10.6" width="13.6" height="2.6" rx="1.3"/><path d="M6.8 13.2h1.4l-1.2 7.6H5.6ZM15.8 13.2h1.4l1.2 7.6h-1.4Z"/>`,
  gavel: `<rect x="5.2" y="3.4" width="13.6" height="5.4" rx="2"/><rect x="10.4" y="8.8" width="3.2" height="8.6" rx="1.6"/><rect x="4.8" y="18.4" width="14.4" height="2.8" rx="1.4"/>`,
  scroll: `<rect x="4.8" y="3.2" width="14.4" height="3.4" rx="1.7"/><path d="M6.6 6.6h10.8v11.2a2.4 2.4 0 0 1-2.4 2.4H9a2.4 2.4 0 0 1-2.4-2.4Z"/><path d="M9 10h6v1.2H9ZM9 13.4h6v1.2H9Z"/>`,
  stamp: `<rect x="3.4" y="16.4" width="17.2" height="3.6" rx="1.3"/><path d="M6.4 16.4v-2.6a2 2 0 0 1 2-2h7.2a2 2 0 0 1 2 2v2.6Z"/><rect x="10" y="6.6" width="4" height="5.8"/><path d="M9.6 6.6V5a2 2 0 0 1 2-2h.8a2 2 0 0 1 2 2v1.6Z"/>`,
  lectern: `<path d="M4.8 6.2h14.4l-1.4 4.2H6.2Z"/><path d="M7.2 10.4h9.6l1 9.2H6.2Z"/><rect x="6" y="19.6" width="12" height="1.8" rx="0.9"/>`,
  "jar-label": `<rect x="7.2" y="3.4" width="9.6" height="3.4" rx="1.4"/><rect x="6.2" y="6.8" width="11.6" height="14.4" rx="2.6"/><rect x="8" y="10.8" width="8" height="6.4" rx="0.8"/><path d="M9.6 12.8h4.8v1H9.6ZM9.6 15h3.2v1H9.6Z"/>`,
  dress: `<path d="M9.2 3.4 14.8 3.4 14.4 6.6 17 10.2 15.7 11.4 18.2 19.6a1.8 1.8 0 0 1-1.8 2H7.6a1.8 1.8 0 0 1-1.8-2l2.5-8.2-1.3-1.2 2.6-3.6Z"/><rect x="8.4" y="11.4" width="7.2" height="1.2"/>`,
};

export const BATCH_R_FILLS = {
  "lamp-pendant": `<rect x="11.2" y="2.8" width="1.6" height="5.8" rx="0.6"/><path d="M4.8 14.6h14.4L15.4 8.6H8.6Z"/><rect x="10.2" y="14.2" width="3.6" height="2.4" rx="1.2"/>`,
  "office-chair": `<rect x="7.2" y="3.2" width="9.6" height="7.6" rx="2.6"/><rect x="5.4" y="10.8" width="13.2" height="3.2" rx="1.6"/><path d="M11.2 14h1.6v3.4l4.2 2.8-1 1.3-4-2.7-4 2.7-1-1.3 4.2-2.8Z"/>`,
  rug: `<rect x="3.2" y="6.8" width="17.6" height="10.4" rx="1.4"/><rect x="6.2" y="9.4" width="11.6" height="5.2" rx="0.8"/><path d="M2.6 9.2h.8v.6h-.8ZM2.6 12h.8v.6h-.8ZM2.6 14.8h.8v.6h-.8ZM20.6 9.2h.8v.6h-.8ZM20.6 12h.8v.6h-.8ZM20.6 14.8h.8v.6h-.8Z"/>`,
  "coat-hanger": `<path d="M11.4 8.4h1.2l7.6 6.4v1.6H3.6v-1.6Z"/><path d="M11.2 8.4V6.4a2.8 2.8 0 0 1 5.6 0v1.6h-1.6V6.4a1.2 1.2 0 0 0-2.4 0v2Z"/>`,
  trolley: `<path d="M6.8 5.2h14l-2.2 8.4H9Z"/><path d="M2.8 3.2h4l3.4 10.8H8.2L5.2 4.8H2.8Z"/><circle cx="9.4" cy="18.6" r="1.6"/><circle cx="16.8" cy="18.6" r="1.6"/>`,
};
