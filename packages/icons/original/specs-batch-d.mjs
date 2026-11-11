/**
 * Vault Icons — original masters, batch D.
 *
 * Alerts & status glyphs plus a few extra navigation arrows. Authored on the
 * 24px grid, inner markup only. Open-path glyphs get a solid silhouette in
 * BATCH_D_FILLS so the fill/duotone weights read correctly.
 */

export const BATCH_D = {
  info: `<circle cx="12" cy="12" r="8"/><path d="M12 11.2v5.2"/><path d="M12 7.8h.01"/>`,
  warning: `<path d="M12 3.4 21.2 19.4H2.8Z"/><path d="M12 9.4v4.4"/><path d="M12 17.1h.01"/>`,
  "warning-circle": `<circle cx="12" cy="12" r="8"/><path d="M12 7.4v5.4"/><path d="M12 16.4h.01"/>`,
  "check-circle": `<circle cx="12" cy="12" r="8"/><path d="m8 12.4 2.7 2.7 5.3-5.5"/>`,
  "x-circle": `<circle cx="12" cy="12" r="8"/><path d="m9.3 9.3 5.4 5.4"/><path d="m14.7 9.3-5.4 5.4"/>`,
  "plus-circle": `<circle cx="12" cy="12" r="8"/><path d="M12 8.2v7.6"/><path d="M8.2 12h7.6"/>`,
  "minus-circle": `<circle cx="12" cy="12" r="8"/><path d="M8.2 12h7.6"/>`,
  question: `<circle cx="12" cy="12" r="8"/><path d="M9.4 9.6a2.7 2.7 0 1 1 3.7 2.5c-.7.3-1.1 1-1.1 1.8v.5"/><path d="M12 17.4h.01"/>`,

  shield: `<path d="M12 3.4 19.4 6v6.1c0 4.3-3 7.3-7.4 8.4-4.4-1.1-7.4-4.1-7.4-8.4V6Z"/>`,
  "shield-check": `<path d="M12 3.4 19.4 6v6.1c0 4.3-3 7.3-7.4 8.4-4.4-1.1-7.4-4.1-7.4-8.4V6Z"/><path d="m9 11.8 2.1 2.1 3.9-4.1"/>`,
  flag: `<path d="M6.4 21.2V3.2"/><path d="M6.4 4.4h11.2l-2 4 2 4H6.4Z"/>`,
  timer: `<circle cx="12" cy="13.4" r="7"/><path d="M9.6 2.8h4.8M12 2.8v2.6"/><path d="M12 13.4V9.6M12 13.4l2.8 1.8"/>`,
  hourglass: `<path d="M7 3.4h10v1.2l-4.4 5.4v4l4.4 5.4v1.2H7v-1.2l4.4-5.4v-4L7 4.6Z"/>`,
  siren: `<path d="M6.4 18.4v-4.4a5.6 5.6 0 0 1 11.2 0v4.4Z"/><path d="M4.2 18.9h15.6"/><path d="M4.8 6.6 6.8 8.2"/><path d="M19.2 6.6 17.2 8.2"/>`,
  "first-aid": `<rect x="3.4" y="6.6" width="17.2" height="13.4" rx="2.4"/><path d="M9.2 6.6V5.2a1.6 1.6 0 0 1 1.6-1.6h2.4a1.6 1.6 0 0 1 1.6 1.6v1.4"/><path d="M12 10v6.6"/><path d="M8.7 13.3h6.6"/>`,
  heartbeat: `<path d="M12 20.8C9 18.6 4 14.4 4 10.4a4.8 4.8 0 0 1 8-3.4 4.8 4.8 0 0 1 8 3.4c0 4-5 8.2-8 10.4Z"/><path d="M6.8 11.4h3.1l1.4-2.6 1.6 4.6 1.3-2h3.2"/>`,

  battery: `<rect x="2.8" y="7.4" width="16.4" height="9.2" rx="2.2"/><path d="M21 10.4v3.2"/>`,
  "battery-low": `<rect x="2.8" y="7.4" width="16.4" height="9.2" rx="2.2"/><path d="M21 10.4v3.2"/><rect x="5.2" y="10" width="2.6" height="4" rx="1"/>`,
  "battery-full": `<rect x="2.8" y="7.4" width="16.4" height="9.2" rx="2.2"/><path d="M21 10.4v3.2"/><rect x="4.8" y="9.8" width="13.4" height="4.4" rx="1.2"/>`,

  bluetooth: `<path d="M6.2 7.2 17.8 16.8 12 21V3l5.8 4.2L6.2 16.8"/>`,
  usb: `<path d="M12 20.6V4.6"/><path d="M12 11.4 8.2 7.8V5.2"/><path d="M12 11.4l3.8-3.6V5.2"/><path d="m9.8 4.4 2.2-2 2.2 2"/>`,
  plug: `<path d="M8.4 3.2v4.2M15.6 3.2v4.2"/><path d="M6.4 7.4h11.2v2.4a5.6 5.6 0 0 1-11.2 0Z"/><path d="M12 15.4v5.4"/>`,
  power: `<path d="M12 3.4v8.2"/><path d="M6.4 8.1a6.8 6.8 0 1 0 11.2 0"/>`,

  "arrow-up-right": `<path d="M5.6 18.4 18.4 5.6"/><path d="M8.8 5.6h9.6v9.6"/>`,
  "arrow-down-left": `<path d="M18.4 5.6 5.6 18.4"/><path d="M15.2 18.4H5.6V8.8"/>`,
  "arrow-down-right": `<path d="M5.6 5.6 18.4 18.4"/><path d="M8.8 18.4h9.6V8.8"/>`,
  "arrows-clockwise": `<path d="M15.6 5.8A7.2 7.2 0 1 1 5.8 8.4"/><path d="M6 12 5.8 8.4 2.7 10.1"/>`,
  "arrows-counter-clockwise": `<path d="M8.4 5.8A7.2 7.2 0 1 0 18.2 8.4"/><path d="M18 12 18.2 8.4 21.3 10.1"/>`,
  "corner-down-left": `<path d="M18.6 3.6v9.6a3 3 0 0 1-3 3H4.4"/><path d="m9.6 11.6-5.2 4.6 5.2 4.6"/>`,
  "corner-down-right": `<path d="M5.4 3.6v9.6a3 3 0 0 0 3 3h11.2"/><path d="m14.4 11.6 5.2 4.6-5.2 4.6"/>`,
};

export const BATCH_D_FILLS = {
  info: `<path d="M12 3.4a8.6 8.6 0 1 0 0 17.2 8.6 8.6 0 0 0 0-17.2ZM12 6.9a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM10.8 11h2.4v6.2h-2.4Z" fill-rule="evenodd"/>`,
  warning: `<path d="M12 2.6 21.4 19.8H2.6ZM12 8.8a1.2 1.2 0 0 0-1.2 1.2v3.6a1.2 1.2 0 0 0 2.4 0V10a1.2 1.2 0 0 0-1.2-1.2ZM12 16a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7Z" fill-rule="evenodd"/>`,
  "warning-circle": `<path d="M12 3.4a8.6 8.6 0 1 0 0 17.2 8.6 8.6 0 0 0 0-17.2ZM12 6.6a1.15 1.15 0 0 1 1.15 1.15v4.1a1.15 1.15 0 0 1-2.3 0v-4.1A1.15 1.15 0 0 1 12 6.6ZM12 14.4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" fill-rule="evenodd"/>`,
  "check-circle": `<path d="M12 3.4a8.6 8.6 0 1 0 0 17.2 8.6 8.6 0 0 0 0-17.2ZM10.5 16 6.9 12.4l1.7-1.7 1.9 1.9 5-5.2 1.7 1.7Z" fill-rule="evenodd"/>`,
  "x-circle": `<path d="M12 3.4a8.6 8.6 0 1 0 0 17.2 8.6 8.6 0 0 0 0-17.2ZM14.6 8.5l1.6 1.6-2.6 2.6 2.6 2.6-1.6 1.6-2.6-2.6-2.6 2.6-1.6-1.6 2.6-2.6-2.6-2.6 1.6-1.6 2.6 2.6Z" fill-rule="evenodd"/>`,
  "plus-circle": `<path d="M12 3.4a8.6 8.6 0 1 0 0 17.2 8.6 8.6 0 0 0 0-17.2ZM13.15 8.5v2.35h2.35v2.3h-2.35v2.35h-2.3v-2.35H8.5v-2.3h2.35V8.5Z" fill-rule="evenodd"/>`,
  "minus-circle": `<path d="M12 3.4a8.6 8.6 0 1 0 0 17.2 8.6 8.6 0 0 0 0-17.2ZM15.65 10.85v2.3H8.35v-2.3Z" fill-rule="evenodd"/>`,
  question: `<path d="M12 3.4a8.6 8.6 0 1 0 0 17.2 8.6 8.6 0 0 0 0-17.2ZM12 6.2c-2.5 0-4.2 1.6-4.2 4h2.4c0-1.1.7-1.8 1.8-1.8 1 0 1.7.6 1.7 1.4 0 .7-.4 1.1-1.2 1.6-1.1.6-1.6 1.3-1.6 2.4v.7h2.4v-.5c0-.7.4-1.1 1.1-1.6 1.1-.7 1.7-1.5 1.7-2.7 0-2-1.7-3.5-4.1-3.5ZM12 16.3a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z" fill-rule="evenodd"/>`,

  "shield-check": `<path d="M12 2.6 20.2 5.6v6.6c0 4.8-3.3 8.2-8.2 9.4-4.9-1.2-8.2-4.6-8.2-9.4V5.6ZM7.5 11.6 9.5 13.6l5.8-6.2 1.6 1.6-7.4 7.8-3.6-3.6Z" fill-rule="evenodd"/>`,
  flag: `<rect x="5.2" y="2.4" width="2.4" height="18.8" rx="1.2"/><path d="M6.4 3.6h12.2l-2.4 4.5 2.4 4.5H6.4Z"/>`,
  timer: `<rect x="8.9" y="2.4" width="6.2" height="2.3" rx="1.15"/><rect x="10.9" y="2.4" width="2.2" height="5.2" rx="1.1"/><path d="M12 5.8a7.6 7.6 0 1 0 0 15.2 7.6 7.6 0 0 0 0-15.2ZM10.8 11.7h2.4v3.9l2.3 1.5-1.3 2-3.4-2.3Z" fill-rule="evenodd"/>`,
  siren: `<path d="M6.4 13.9a5.6 5.6 0 0 1 11.2 0v4.5H6.4Z"/><rect x="3.8" y="17.7" width="16.4" height="2.4" rx="1.2"/><path d="M4.6 5.9 7 7.6 5.8 9.3 3.4 7.6Z"/><path d="M19.4 5.9 17 7.6l1.2 1.7 2.4-1.7Z"/>`,
  "first-aid": `<path d="M5.8 6h12.4a2.4 2.4 0 0 1 2.4 2.4v9.2a2.4 2.4 0 0 1-2.4 2.4H5.8a2.4 2.4 0 0 1-2.4-2.4V8.4A2.4 2.4 0 0 1 5.8 6ZM10.9 9.4h2.2v2.7h2.7v2.2h-2.7v2.7h-2.2v-2.7H8.2v-2.2h2.7Z" fill-rule="evenodd"/><path d="M9.6 3.6h4.8v2.6H9.6Z"/>`,
  heartbeat: `<path d="M12 20.8C9 18.6 4 14.4 4 10.4a4.8 4.8 0 0 1 8-3.4 4.8 4.8 0 0 1 8 3.4c0 4-5 8.2-8 10.4ZM6.8 11.4h3.1l1.4-2.6 1.6 4.6 1.3-2h3.2v2.1h-2l-2.6 4.2-1.8-5.2-.5 1H6.8Z" fill-rule="evenodd"/>`,

  battery: `<rect x="2.8" y="7.4" width="16.4" height="9.2" rx="2.2"/><rect x="20" y="10.2" width="1.6" height="3.6" rx="0.8"/>`,
  "battery-low": `<path d="M5 7.4h11.4a2.6 2.6 0 0 1 2.6 2.6v4a2.6 2.6 0 0 1-2.6 2.6H5A2.6 2.6 0 0 1 2.4 14v-4A2.6 2.6 0 0 1 5 7.4ZM5.6 9.8a0.6 0.6 0 0 0-0.6 0.6v3.2a0.6 0.6 0 0 0 0.6 0.6h10.2a0.6 0.6 0 0 0 0.6-0.6v-3.2a0.6 0.6 0 0 0-0.6-0.6Z" fill-rule="evenodd"/><rect x="5.2" y="9.8" width="2.8" height="4.4" rx="1.2"/><rect x="20" y="10.2" width="1.6" height="3.6" rx="0.8"/>`,
  "battery-full": `<path d="M5 7.4h11.4a2.6 2.6 0 0 1 2.6 2.6v4a2.6 2.6 0 0 1-2.6 2.6H5A2.6 2.6 0 0 1 2.4 14v-4A2.6 2.6 0 0 1 5 7.4ZM5.6 9.8a0.6 0.6 0 0 0-0.6 0.6v3.2a0.6 0.6 0 0 0 0.6 0.6h10.2a0.6 0.6 0 0 0 0.6-0.6v-3.2a0.6 0.6 0 0 0-0.6-0.6Z" fill-rule="evenodd"/><rect x="4.8" y="9.8" width="13.4" height="4.4" rx="1.2"/><rect x="20" y="10.2" width="1.6" height="3.6" rx="0.8"/>`,

  bluetooth: `<rect x="11" y="2.8" width="2.4" height="18.4" rx="1.2"/><path d="M12 2.8 18.2 7.4 12 13.2Z"/><path d="M12 21.2 18.2 16.6 12 10.8Z"/>`,
  usb: `<rect x="10.7" y="4.2" width="2.6" height="16.4" rx="1.3"/><path d="M12 2.4 15.8 5.4H8.2Z"/><path d="M7 5h2.4v2.4l2.6 2.6-1.3 1.3L7 7.4Z"/><path d="M17 5h-2.4v2.4L12 10l1.3 1.3L17 7.4Z"/>`,
  plug: `<rect x="7.4" y="2.6" width="2" height="5" rx="1"/><rect x="14.6" y="2.6" width="2" height="5" rx="1"/><path d="M6.4 7.4h11.2v2.4a5.6 5.6 0 0 1-5.6 5.6 5.6 5.6 0 0 1-5.6-5.6Z"/><rect x="10.8" y="15" width="2.4" height="6" rx="1.2"/>`,
  power: `<rect x="10.9" y="2.4" width="2.2" height="8.6" rx="1.1"/><path d="M15.7 5.6A7.4 7.4 0 1 1 8.3 5.6L9.5 7.7A5 5 0 1 0 14.5 7.7Z"/>`,

  "arrow-up-right": `<path d="M4 16.6 14.4 6.2H10.6V3.6h10v10h-2.6V9.8L8.6 19.4Z"/>`,
  "arrow-down-left": `<path d="M20 7.4 9.6 17.8h3.8v2.6H3.4V10.4H6v3.8L15.4 4.6Z"/>`,
  "arrow-down-right": `<path d="M4 7.4 14.4 17.8h-3.8v2.6h10V10.4H18v3.8L8.6 4.6Z"/>`,
  "arrows-clockwise": `<path d="M15.9 5.2A7.8 7.8 0 1 1 5.2 8.1L6.9 9.1A5.9 5.9 0 1 0 15 6.9Z"/><path d="M6.4 7.4 6.3 11.9 2.5 9.7Z"/>`,
  "arrows-counter-clockwise": `<path d="M8.1 5.2A7.8 7.8 0 1 0 18.8 8.1L17.1 9.1A5.9 5.9 0 1 1 9 6.9Z"/><path d="M17.6 7.4 17.7 11.9 21.5 9.7Z"/>`,
  "corner-down-left": `<rect x="17.4" y="3.2" width="2.4" height="12.2" rx="1.2"/><rect x="5.6" y="15" width="13" height="2.4" rx="1.2"/><path d="M10 11.2 2.8 16.2 10 21.2Z"/>`,
  "corner-down-right": `<rect x="4.2" y="3.2" width="2.4" height="12.2" rx="1.2"/><rect x="5.4" y="15" width="13" height="2.4" rx="1.2"/><path d="M14 11.2 21.2 16.2 14 21.2Z"/>`,
};
