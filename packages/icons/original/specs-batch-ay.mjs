/**
 * Vault Icons - original masters, batch AY.
 *
 * Containers, input devices, audio waves and small objects. Authored on the
 * 24px grid, inner markup only. All glyphs are closed geometry, so the solid
 * weight reuses the regular shapes and BATCH_AY_FILLS stays empty.
 */

export const BATCH_AY = {
  package: `<path d="M12 3.4 20 7.4v9.2L12 20.6 4 16.6V7.4Z"/><path d="M4 7.4 12 11.4 20 7.4 18.6 6.8 12 10 5.4 6.8Z"/><rect x="11.1" y="11.2" width="1.8" height="9.2" rx="0.9"/>`,
  tray: `<path d="M4.4 4.6h15.2v14.8H4.4Zm1.8 1.8v11.2h11.6V6.4Z" fill-rule="evenodd"/><rect x="7.4" y="13.6" width="9.2" height="1.8"/>`,
  "tray-arrow-down": `<path d="M4.4 4.6h15.2v14.8H4.4Zm1.8 1.8v11.2h11.6V6.4Z" fill-rule="evenodd"/><path d="M11.1 6.4h1.8v6.2h2.4l-3.3 3.6-3.3-3.6h2.4Z"/>`,
  "tray-arrow-up": `<path d="M4.4 4.6h15.2v14.8H4.4Zm1.8 1.8v11.2h11.6V6.4Z" fill-rule="evenodd"/><path d="M11.1 17.6h1.8v-6.2h2.4l-3.3-3.6-3.3 3.6h2.4Z"/>`,
  vault: `<path d="M12 3.4a8.6 8.6 0 1 1 0 17.2 8.6 8.6 0 0 1 0-17.2Zm0 1.8a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6Z" fill-rule="evenodd"/><circle cx="12" cy="12" r="2.4"/><path d="M11.1 4.9h1.8v3.2h-1.8ZM11.1 15.9h1.8v3.2h-1.8ZM4.9 11.1h3.2v1.8H4.9ZM15.9 11.1h3.2v1.8h-3.2Z"/>`,
  eyedropper: `<path d="M14.2 3.6a2.9 2.9 0 0 1 4.1 4.1l-1.4 1.4 1.2 1.2-1.6 1.6-5.9-5.9 1.6-1.6 1.2 1.2Z"/><path d="M11.4 7.6 5.6 13.4l3 3 5.8-5.8Z"/><path d="M5.2 14 3.6 19.2 8.8 17.6Z"/>`,
  "eyedropper-sample": `<path d="M13.4 3.8a2.7 2.7 0 0 1 3.8 3.8l-1.2 1.2 1 1-1.5 1.5-5.1-5.1 1.5-1.5 1 1Z"/><path d="M11 7.8 6.4 12.4l3.2 3.2 4.6-4.6Z"/><path d="M7 15.4c1.4 0 2.4 1 2.4 2.4 0 1.5-1.1 2.6-2.4 2.6s-2.4-1.1-2.4-2.6c0-1.4 1-2.4 2.4-2.4Z"/>`,
  "mouse-left-click": `<path d="M12 3.6a5.4 5.4 0 0 1 5.4 5.4v5.4a5.4 5.4 0 0 1-10.8 0V9A5.4 5.4 0 0 1 12 3.6Zm0 1.8A3.6 3.6 0 0 0 8.4 9v5.4a3.6 3.6 0 0 0 7.2 0V9A3.6 3.6 0 0 0 12 5.4Z" fill-rule="evenodd"/><path d="M8.4 9.2A3.6 3.6 0 0 1 12 5.6v3.6Z"/>`,
  "mouse-middle-click": `<path d="M12 3.6a5.4 5.4 0 0 1 5.4 5.4v5.4a5.4 5.4 0 0 1-10.8 0V9A5.4 5.4 0 0 1 12 3.6Zm0 1.8A3.6 3.6 0 0 0 8.4 9v5.4a3.6 3.6 0 0 0 7.2 0V9A3.6 3.6 0 0 0 12 5.4Z" fill-rule="evenodd"/><rect x="11.1" y="5.8" width="1.8" height="3.6" rx="0.9"/>`,
  "mouse-right-click": `<path d="M12 3.6a5.4 5.4 0 0 1 5.4 5.4v5.4a5.4 5.4 0 0 1-10.8 0V9A5.4 5.4 0 0 1 12 3.6Zm0 1.8A3.6 3.6 0 0 0 8.4 9v5.4a3.6 3.6 0 0 0 7.2 0V9A3.6 3.6 0 0 0 12 5.4Z" fill-rule="evenodd"/><path d="M15.6 9.2A3.6 3.6 0 0 0 12 5.6v3.6Z"/>`,
  "speaker-none": `<path d="M4.4 9.4h3.2l4.6-4v13.2l-4.6-4H4.4Z"/>`,
  "speaker-simple-none": `<path d="M4.6 9.6h3l4.2-3.6v12l-4.2-3.6h-3Z"/>`,
  "speaker-slash": `<path d="M4.4 9.4h3.2l4.6-4v13.2l-4.6-4H4.4Z"/><path d="M3.9 4.5 5.2 3.7 20.1 19.5 18.8 20.3Z"/>`,
  "virtual-reality": `<path d="M3.6 9.2h16.8v5.6a2.4 2.4 0 0 1-2.4 2.4h-3a2.4 2.4 0 0 1-2-1.1l-.6-.9h-.8l-.6.9a2.4 2.4 0 0 1-2 1.1h-3a2.4 2.4 0 0 1-2.4-2.4Z"/><rect x="2.8" y="9.6" width="1.6" height="4" rx="0.8"/><rect x="19.6" y="9.6" width="1.6" height="4" rx="0.8"/>`,
  "wave-sawtooth": `<path d="M3 15 9 7 15 15 21 7 21 9.4 15.6 16.6 9.6 8.6 4.4 15.8Z"/>`,
  "wave-sine": `<path d="M3 12C5 6.5 7 6.5 9 12S13 17.5 15 12 19 6.5 21 12V14C19 19.5 17 19.5 15 14S11 8.5 9 14 5 19.5 3 14Z"/>`,
  "wave-square": `<path d="M3 15V9H9V15H15V9H21V17H15V11H9V17H3Z"/>`,
  "wave-triangle": `<path d="M3 15 9 9 15 15 21 9 21 11.2 15.6 17 9.6 11 3 17Z"/>`,
  "waveform-slash": `<path d="M4.6 9h2v6h-2ZM8.4 6.4h2v11.2h-2ZM12.2 8.2h2v7.6h-2ZM16 5.4h2v13.2h-2Z"/><path d="M3.9 4.5 5.2 3.7 20.1 19.5 18.8 20.3Z"/>`,
  waves: `<path d="M3 8.2c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0V10c-2-1.6-4-1.6-6 0s-4 1.6-6 0-4-1.6-6 0ZM3 12.2c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0V14c-2-1.6-4-1.6-6 0s-4 1.6-6 0-4-1.6-6 0ZM3 16.2c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0V18c-2-1.6-4-1.6-6 0s-4 1.6-6 0-4-1.6-6 0Z"/>`,
  atom: `<path d="M12 6.4c4.4 0 8 2.5 8 5.6s-3.6 5.6-8 5.6-8-2.5-8-5.6 3.6-5.6 8-5.6Zm0 1.7c-3.4 0-6.1 1.7-6.1 3.9s2.7 3.9 6.1 3.9 6.1-1.7 6.1-3.9-2.7-3.9-6.1-3.9Z" fill-rule="evenodd"/><path d="M12 3.4c1.6 0 2.9 3.8 2.9 8.6s-1.3 8.6-2.9 8.6-2.9-3.8-2.9-8.6 1.3-8.6 2.9-8.6Zm0 1.7c-.7 0-1.2 2.9-1.2 6.9s.5 6.9 1.2 6.9 1.2-2.9 1.2-6.9-.5-6.9-1.2-6.9Z" fill-rule="evenodd"/><circle cx="12" cy="12" r="2.2"/>`,
  barricade: `<rect x="3.4" y="10" width="17.2" height="2.4" rx="1.2"/><path d="M6.4 12.4h2l-2.4 7.2H4Z"/><path d="M17.6 12.4h-2l2.4 7.2H20Z"/>`,
  "beer-bottle": `<path d="M10 3.8h4v3.4l1.8 2.6v10.4H8.2V9.8L10 7.2Z"/><rect x="9.6" y="3.4" width="4.8" height="1.6" rx="0.8"/><rect x="8.2" y="12.6" width="7.6" height="3" rx="0.6"/>`,
  belt: `<rect x="3.6" y="9.4" width="16.8" height="2.6" rx="1.3"/><path d="M9 8.2h6v7.6H9Zm1.6 1.6v4.4h2.8v-4.4Z" fill-rule="evenodd"/><rect x="15.8" y="10.2" width="2.6" height="1" rx="0.5"/>`,
  binoculars: `<rect x="4.2" y="7.4" width="5.4" height="9.2" rx="2.7"/><rect x="14.4" y="7.4" width="5.4" height="9.2" rx="2.7"/><rect x="9.6" y="9.2" width="4.8" height="2.4" rx="1.2"/><rect x="10.6" y="5.4" width="2.8" height="2.2" rx="1"/>`,
  bomb: `<circle cx="11" cy="14.4" r="6"/><path d="M15.4 9.8 18.4 6.6l1.6 1.2-2.8 3.4Z"/><path d="M18.6 4.6l.5 2.2 2.3.4-2.1 1 1.2 2-2.2-.6-1.4 1.9-.4-2.3-2.2-.6 2-1.1Z"/>`,
  "bowl-steam": `<path d="M3.6 11.4h16.8a8.4 8.4 0 0 1-16.8 0Z"/><path d="M8.2 4.4c1.4 1 1.4 2.2 0 3.2s-1.4 2.2 0 3.2l-1 1.4c-1.8-1.4-1.8-3 0-4.4s1.8-3 0-4.4Z"/><path d="M12.8 4.4c1.4 1 1.4 2.2 0 3.2s-1.4 2.2 0 3.2l-1 1.4c-1.8-1.4-1.8-3 0-4.4s1.8-3 0-4.4Z"/>`,
  brandy: `<path d="M6.4 4.6h11.2v4.2a5.6 5.6 0 0 1-11.2 0Z"/><rect x="11.1" y="14" width="1.8" height="4" rx="0.9"/><rect x="7.8" y="17.8" width="8.4" height="1.8" rx="0.9"/>`,
  building: `<path d="M5.4 3.8h13.2v16.4H5.4Z"/><path d="M8 6.6h2.6v2.6H8ZM13.4 6.6h2.6v2.6h-2.6ZM8 11.2h2.6v2.6H8ZM13.4 11.2h2.6v2.6h-2.6Z"/><rect x="10.6" y="16" width="2.8" height="4.2"/>`,
  "building-apartment": `<path d="M6 3.4h12v16.8H6Z"/><path d="M8.4 6.2h2.4v2.4H8.4ZM13.2 6.2h2.4v2.4h-2.4ZM8.4 10.4h2.4V12.8H8.4ZM13.2 10.4h2.4V12.8h-2.4ZM8.4 14.6h2.4v2.4H8.4ZM13.2 14.6h2.4v2.4h-2.4Z"/><rect x="10.6" y="16.6" width="2.8" height="3.6"/>`,
};

export const BATCH_AY_FILLS = {};
