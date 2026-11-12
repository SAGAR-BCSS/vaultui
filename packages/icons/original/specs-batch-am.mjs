/**
 * Vault Icons - original masters, batch AM.
 *
 * Maps, sort/exchange controls and commerce marks. Authored on the 24px grid,
 * inner markup only. All glyphs are drawn from closed geometry, so the solid
 * weight reuses the regular shapes and BATCH_AM_FILLS stays empty.
 */

export const BATCH_AM = {
  "gps-slash": `<path d="M12 3.4 19.2 20.4 12 16.4 4.8 20.4Z"/><path d="M3.9 4.5 5.2 3.7 20.1 19.5 18.8 20.3Z"/>`,
  "map-pin-area": `<path d="M12 3.6a8.4 8.4 0 1 1 0 16.8 8.4 8.4 0 0 1 0-16.8Zm0 1.8a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Z" fill-rule="evenodd"/><path d="M12 6.4a3.6 3.6 0 0 1 3.6 3.6c0 2.6-3.6 7-3.6 7s-3.6-4.4-3.6-7A3.6 3.6 0 0 1 12 6.4Z"/><circle cx="12" cy="10" r="1.2"/>`,
  "map-pin-line": `<path d="M12 3.6a5.2 5.2 0 0 1 5.2 5.2c0 3.1-5.2 8.8-5.2 8.8S6.8 11.9 6.8 8.8A5.2 5.2 0 0 1 12 3.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" fill-rule="evenodd"/><rect x="8.9" y="10" width="6.2" height="1.6" rx="0.8"/>`,
  "map-pin-plus": `<path d="M12 3.8a5.2 5.2 0 0 1 5.2 5.2c0 3.1-5.2 8.6-5.2 8.6S6.8 12.1 6.8 8.6A5.2 5.2 0 0 1 12 3.8Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" fill-rule="evenodd"/><path d="M11.2 7.2h1.6v5.6h-1.6ZM9.2 9.2h5.6v1.6H9.2Z"/>`,
  "map-pin-simple": `<path d="M12 3.8a5 5 0 0 1 5 5c0 3-5 8.4-5 8.4S7 12 7 8.8a5 5 0 0 1 5-5Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" fill-rule="evenodd"/>`,
  "map-pin-simple-area": `<path d="M12 3.6a8.4 8.4 0 1 1 0 16.8 8.4 8.4 0 0 1 0-16.8Zm0 1.8a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Z" fill-rule="evenodd"/><path d="M12 5.4a4.2 4.2 0 0 1 4.2 4.2c0 2.6-4.2 7.2-4.2 7.2s-4.2-4.6-4.2-7.2A4.2 4.2 0 0 1 12 5.4Zm0 1.8a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Z" fill-rule="evenodd"/>`,
  "map-pin-simple-line": `<path d="M12 3.8a5 5 0 0 1 5 5c0 3-5 8.4-5 8.4S7 12 7 8.8a5 5 0 0 1 5-5Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" fill-rule="evenodd"/><rect x="9.4" y="8" width="5.2" height="1.6" rx="0.8"/>`,
  repeat: `<rect x="5" y="6.8" width="10.4" height="1.6" rx="0.8"/><path d="M14.6 4.6 19.8 8.6 14.8 12.6Z"/><rect x="8.6" y="15.6" width="10.4" height="1.6" rx="0.8"/><path d="M9.4 11.4 4.2 15.4 9.2 19.4Z"/>`,
  "repeat-once": `<path d="M4.6 6h9.8V3.4l4.8 4.2-4.8 4.2V9.2H4.6Z"/><path d="M19.4 14.8H9.6v2.6L4.8 13.2l4.8-4.2v2.6h9.8Z"/><path d="M11.4 9.8h1.6v4.4h-1.6Z"/>`,
  shuffle: `<path d="M4.4 17.4 5.6 18.6 17.4 6.2 16.2 5Z"/><path d="M15.6 4 20.4 4.4 19.2 9.2Z"/><path d="M4.4 6.6 5.6 5.4 17.4 17.8 16.2 19Z"/><path d="M15.6 20 19.2 14.8 20.4 19.6Z"/>`,
  "shuffle-angular": `<path d="M4.2 18.2 5.8 17.4 12.4 10.2 16 10.2 16 7.6 21 11.4 16 15.2 16 12.6 11.6 12.6Z"/><path d="M4.2 6.2 5.8 7 12.4 14.2 16 14.2 16 16.8 21 13 16 9.2 16 11.8 11.6 11.8Z"/>`,
  "shuffle-simple": `<path d="M4.6 5.8 5.4 4.4 19.4 18.6 18.6 20Z"/><path d="M4.6 18.2 5.4 19.6 19.4 5.4 18.6 4Z"/><path d="M16.6 3.2 21.4 4.6 18.6 8.6Z"/><path d="M16.6 20.8 18.6 15.4 21.4 19.4Z"/>`,
  "sign-in": `<rect x="14.6" y="4.2" width="4.6" height="15.6" rx="1.2"/><rect x="3.6" y="11.2" width="8.4" height="1.6" rx="0.8"/><path d="M10.6 6.8 16.2 12 10.6 17.2Z"/>`,
  "sign-out": `<rect x="4.8" y="4.2" width="4.6" height="15.6" rx="1.2"/><rect x="12" y="11.2" width="8.4" height="1.6" rx="0.8"/><path d="M13.4 6.8 7.8 12 13.4 17.2Z"/>`,
  "sort-ascending": `<path d="M4 6.2h5.4v1.8H4ZM4 11.1h7.6v1.8H4ZM4 16h9.8v1.8H4Z"/><path d="M17.4 3.4 21 7.6 18.8 7.6 18.8 20.2 17 20.2 17 7.6 14.8 7.6Z"/>`,
  "sort-descending": `<path d="M4 6.2h9.8v1.8H4ZM4 11.1h7.6v1.8H4ZM4 16h5.4v1.8H4Z"/><path d="M14.8 16.4 17 16.4 17 3.8 18.8 3.8 18.8 16.4 21 16.4 17.4 20.6Z"/>`,
  "split-horizontal": `<rect x="3.6" y="11.2" width="16.8" height="1.6" rx="0.8"/><path d="M6.8 9.8 12 4.6 17.2 9.8 15.6 11.4 12 7.8 8.4 11.4Z"/><path d="M6.8 14.2 8.4 12.6 12 16.2 15.6 12.6 17.2 14.2 12 19.4Z"/>`,
  "split-vertical": `<rect x="11.2" y="3.6" width="1.6" height="16.8" rx="0.8"/><path d="M9.8 6.8 11.4 8.4 7.8 12 11.4 15.6 9.8 17.2 4.6 12Z"/><path d="M14.2 6.8 12.6 8.4 16.2 12 12.6 15.6 14.2 17.2 19.4 12Z"/>`,
  swap: `<path d="M4.4 6.6h8.8V4l4.8 4-4.8 4v-2.6H4.4Z"/><path d="M19.6 12.8v1.6h-8.8v2.6L6 13.6l4.8-4v2.6h8.8Z"/>`,
  "amazon-logo": `<circle cx="11.4" cy="9.8" r="3.2"/><rect x="14" y="7" width="1.8" height="6.2" rx="0.9"/><path d="M4.4 16.8c4.2 3.4 11 3.4 15.2 0l-1-1.5c-3.8 2.8-9.4 2.8-13.2 0Z"/>`,
  "paypal-logo": `<path d="M8.6 3.8h5.6a3.6 3.6 0 0 1 0 7.2H10.4l-.6 3.4H7.4Z"/><path d="M10.8 10.8h1.4l-1.4 9.4H9.4Z"/>`,
  "receipt-x": `<path d="M5.8 3.6h12.4v17.2l-2.2-1.6-2 1.6-2.2-1.6-2 1.6-2.2-1.6-1.8 1.6Z"/><path d="M9.4 9.2 10.6 8.2 15 13.2 13.8 14.2Z"/><path d="M13.8 8.2 15 9.2 10.6 14.2 9.4 13.2Z"/>`,
  "shopping-bag-open": `<path d="M5.2 8.2h13.6l-1.2 12.2H6.4Z"/><path d="M5.4 8.2 4 4.8 7.4 4.8 9.6 8.2Z"/><path d="M18.6 8.2 20 4.8 16.6 4.8 14.4 8.2Z"/>`,
  "shopping-cart-simple": `<path d="M7.2 7.4h12.2l-1.8 6.2H9.2Z"/><path d="M2.6 4.2h1.6l2 4.4-1.6.6Z"/><circle cx="9.4" cy="18.4" r="1.8"/><circle cx="16.6" cy="18.4" r="1.8"/>`,
  "stripe-logo": `<path d="M8.4 8.4c0-1.6 1.6-2.8 3.8-2.8 1.8 0 3.2.6 4.2 1.6l-1.8 2.4a4.4 4.4 0 0 0-2.4-.9c-.8 0-1.2.3-1.2.7 0 .4.4.6 1.6 1 2.4.7 4 1.6 4 3.8 0 2.2-1.8 3.6-4.6 3.6-1.8 0-3.6-.6-4.8-1.8l1.8-2.4c1 .8 2 1.2 3.2 1.2.9 0 1.4-.3 1.4-.8 0-.5-.5-.7-1.7-1.1-2.2-.7-3.6-1.6-3.6-3.5Z"/>`,
  "tag-chevron": `<path d="M3.8 12.4V5.8a2 2 0 0 1 2-2h6.6l7.8 7.8-8.4 8.4Zm3.4-6.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z" fill-rule="evenodd"/><path d="M10 9.6 11.2 8.4 16 13.2 11.2 18 10 16.8 13.6 13.2Z"/>`,
  "tag-simple": `<path d="M3.8 12.4V5.8a2 2 0 0 1 2-2h6.6l7.8 7.8-8.4 8.4Zm3.4-6.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z" fill-rule="evenodd"/>`,
  "tip-jar": `<path d="M6.4 9.2h11.2l-1.2 10.4H7.6Z"/><rect x="5.6" y="6.2" width="12.8" height="2.6" rx="1.1"/><circle cx="12" cy="14.4" r="2"/>`,
  "treasure-chest": `<path d="M4.4 11.6h15.2v8H4.4Z"/><path d="M4.4 11.6a7.6 7.6 0 0 1 15.2 0Z"/><rect x="10.4" y="11.6" width="3.2" height="3.6" rx="1"/>`,
  "behance-logo": `<path d="M4.6 6.4h3.8a2.8 2.8 0 0 1 0 5.6H4.6Z"/><path d="M4.6 12.8h4.6a3 3 0 0 1 0 6H4.6Z"/><circle cx="16.6" cy="14.4" r="3.4"/><rect x="13.2" y="13.6" width="6.8" height="1.6"/>`,
};

export const BATCH_AM_FILLS = {};
