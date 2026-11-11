/**
 * Vault Icons — original masters, batch M.
 *
 * Media, audio and playback glyphs. Authored on the 24px grid, inner markup
 * only. Open-path glyphs get a solid silhouette in BATCH_M_FILLS so the
 * fill/duotone weights read correctly.
 */

export const BATCH_M = {
  stop: `<rect x="6.6" y="6.6" width="10.8" height="10.8" rx="2.4"/>`,
  "skip-back": `<path d="M18.4 5.4 9 12l9.4 6.6Z"/><path d="M6.2 5.4v13.2"/>`,
  "skip-forward": `<path d="M5.6 5.4 15 12l-9.4 6.6Z"/><path d="M17.8 5.4v13.2"/>`,
  rewind: `<path d="M11.4 6.2 3.6 12l7.8 5.8Z"/><path d="M20.4 6.2 12.6 12l7.8 5.8Z"/>`,
  "fast-forward": `<path d="M12.6 6.2 20.4 12l-7.8 5.8Z"/><path d="M3.6 6.2 11.4 12l-7.8 5.8Z"/>`,
  "music-note": `<path d="M10.2 16.8V5.6l8.4-1.8v9.8"/><circle cx="7.8" cy="17.4" r="2.4"/><circle cx="16.2" cy="15.6" r="2.4"/>`,
  playlist: `<path d="M3.4 6.4h11M3.4 10.8h11M3.4 15.2h7.4"/><path d="M16 14.4v-6l4.2-1v6"/><circle cx="14.2" cy="15.6" r="1.9"/><circle cx="18.4" cy="13.6" r="1.9"/>`,
  cast: `<rect x="3.4" y="4.6" width="17.2" height="10.8" rx="2.2"/><path d="M4.2 14.6a5.2 5.2 0 0 1 5.2 5.2M4.2 17.6a2.2 2.2 0 0 1 2.2 2.2"/><circle cx="4.2" cy="19.8" r="1"/>`,
  screencast: `<rect x="3.2" y="4.8" width="17.6" height="10.8" rx="2.2"/><path d="M19.8 14.6a5.2 5.2 0 0 0-5.2 5.2M19.8 17.6a2.2 2.2 0 0 0-2.2 2.2"/><circle cx="19.8" cy="19.8" r="1"/>`,
  airplay: `<rect x="3.4" y="4.6" width="17.2" height="11.2" rx="2.2"/><path d="M12 13.8 8.6 19.4h6.8Z"/>`,
  television: `<rect x="2.8" y="5" width="18.4" height="12.4" rx="2.2"/><path d="M8.2 20h7.6M12 17.4V20"/><path d="M8.6 2.8 12 5.6 15.4 2.8"/>`,
  images: `<rect x="6.2" y="3.4" width="14.4" height="11.2" rx="2"/><path d="M3.4 7.4v9.4a2 2 0 0 0 2 2h10.2"/><circle cx="10.4" cy="7.4" r="1.2"/><path d="m7.2 12.6 3.4-3 2.6 2.4 2.2-2 3 2.6"/>`,
  "picture-in-picture": `<rect x="2.8" y="4.6" width="18.4" height="13.2" rx="2.2"/><rect x="12.2" y="10.4" width="7" height="5.4" rx="1.4"/>`,
  ear: `<path d="M9.4 9a5.6 5.6 0 0 1 11.2 0c0 2.6-1.6 4.2-3.4 5.4-1.4 1-2.2 1.8-2.2 3.2a2.6 2.6 0 0 1-5.2 0"/><path d="M11.8 9.6a2.6 2.6 0 0 1 2.6-2.2 3.4 3.4 0 0 1 3.4 3.4c0 1.6-1 2.4-2.2 3.2"/>`,
  "ear-slash": `<path d="M9.4 9a5.6 5.6 0 0 1 11.2 0c0 2.6-1.6 4.2-3.4 5.4-1.4 1-2.2 1.8-2.2 3.2a2.6 2.6 0 0 1-5.2 0"/><path d="M11.8 9.6a2.6 2.6 0 0 1 2.6-2.2 3.4 3.4 0 0 1 3.4 3.4c0 1.6-1 2.4-2.2 3.2"/><path d="M4.2 4.2 19.8 19.8"/>`,
  metronome: `<path d="M6.4 20.4 9.2 5.2a2.4 2.4 0 0 1 2.4-2h.8a2.4 2.4 0 0 1 2.4 2l2.8 15.2Z"/><path d="m15.4 6.2-4.2 9.4"/><path d="M6.6 15.6h10.8"/>`,
  guitar: `<rect x="9.8" y="2.4" width="4.4" height="1.8" rx="0.8"/><rect x="11" y="3.6" width="2" height="8" rx="1"/><path d="M12 10.4c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5Z"/><circle cx="12" cy="15.4" r="1.6"/>`,
  "piano-keys": `<rect x="2.8" y="5.4" width="18.4" height="13.2" rx="2"/><rect x="6.2" y="5.4" width="3" height="6" rx="0.6"/><rect x="10.5" y="5.4" width="3" height="6" rx="0.6"/><rect x="14.8" y="5.4" width="3" height="6" rx="0.6"/>`,
  "vinyl-record": `<circle cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="5.6"/><circle cx="12" cy="12" r="1.8"/>`,
  "cassette-tape": `<rect x="2.8" y="5.4" width="18.4" height="13.2" rx="2.2"/><circle cx="8.2" cy="11" r="2.2"/><circle cx="15.8" cy="11" r="2.2"/><path d="M7.4 18.6 9.2 15h5.6l1.8 3.6"/>`,
  waveform: `<path d="M3.4 8.6h1.8v6.8H3.4ZM6.6 5.4h1.8v13.2H6.6ZM9.8 2.8h1.8v18.4H9.8ZM13 6.2h1.8v11.6H13ZM16.2 4h1.8v16H16.2ZM19.4 8.8h1.8v6.4h-1.8Z"/>`,
  subtitles: `<rect x="2.8" y="4.6" width="18.4" height="13.2" rx="2.2"/><rect x="6" y="12" width="5.2" height="2.4" rx="1.2"/><rect x="13.2" y="12" width="4.8" height="2.4" rx="1.2"/>`,
  "closed-captioning": `<rect x="2.8" y="5" width="18.4" height="13.2" rx="2.2"/><path d="M10.2 10.2a2.6 2.6 0 1 0 0 4M16.6 10.2a2.6 2.6 0 1 0 0 4"/>`,
  "high-definition": `<rect x="2.8" y="5" width="18.4" height="13.2" rx="2.2"/><path d="M7.6 9.4v5.2M7.6 12h3.2M10.8 9.4v5.2"/><path d="M14 9.4v5.2M14 9.4h1.8a2.6 2.6 0 0 1 0 5.2H14"/>`,
  "standard-definition": `<rect x="2.8" y="5" width="18.4" height="13.2" rx="2.2"/><path d="M10.8 9.6c-1.4 0-2.4.8-2.4 1.9 0 .9.7 1.4 2 1.7l.9.2c.5.1.8.3.8.6 0 .4-.5.7-1.2.7-.9 0-1.6-.4-2-1l-1.3.8c.5 1.1 1.8 1.8 3.3 1.8 1.7 0 3-.9 3-2.2 0-1.1-.8-1.6-2.1-1.9l-.9-.2c-.5-.1-.7-.3-.7-.5 0-.3.3-.5.8-.5.7 0 1.2.3 1.5.8l1.3-.8c-.5-.9-1.5-1.4-3-1.4Z"/><path d="M15.4 9.4v5.2M15.4 9.4h1.8a2.6 2.6 0 0 1 0 5.2h-1.8"/>`,
  "radio-button": `<circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="3.2"/>`,
  "speaker-high": `<path d="M4.4 9.6h3.4l4.6-4.4v13.6l-4.6-4.4H4.4Z"/><path d="M15.6 9.4a4 4 0 0 1 0 5.2"/><path d="M18 7.2a7.4 7.4 0 0 1 0 9.6"/>`,
  "speaker-low": `<path d="M4.4 9.6h3.4l4.6-4.4v13.6l-4.6-4.4H4.4Z"/><path d="M15.6 9.4a4 4 0 0 1 0 5.2"/>`,
  "speaker-x": `<path d="M4.4 9.6h3.4l4.6-4.4v13.6l-4.6-4.4H4.4Z"/><path d="m15.4 9.6 4.4 4.8M19.8 9.6l-4.4 4.8"/>`,
  "microphone-stage": `<rect x="9.2" y="2.8" width="5.6" height="10.6" rx="2.8"/><path d="M12 13.4v4.8M8 18.2h8"/><path d="M6.6 8.6a5.4 5.4 0 0 0 10.8 0"/>`,
};

export const BATCH_M_FILLS = {
  "skip-back": `<path d="M18.4 5.4 9 12l9.4 6.6Z"/><rect x="5.3" y="4.8" width="1.8" height="14.4" rx="0.9"/>`,
  "skip-forward": `<path d="M5.6 5.4 15 12l-9.4 6.6Z"/><rect x="16.9" y="4.8" width="1.8" height="14.4" rx="0.9"/>`,
  "music-note": `<path d="M9.4 16.8V5.6l11-2.4v9.8h-1.8V5.6l-7.4 1.6v9.6Z"/><circle cx="7.8" cy="17.4" r="2.6"/><circle cx="16.2" cy="15.6" r="2.6"/>`,
  playlist: `<path d="M3.4 5.7h11v1.4h-11ZM3.4 10.1h11v1.4h-11ZM3.4 14.5h7.4v1.4H3.4ZM16 14.4v-6l4.2-1v6h-1.6V8.6l-1 .2v5.6Z"/><circle cx="14.2" cy="15.6" r="2.1"/><circle cx="18.4" cy="13.6" r="2.1"/>`,
  cast: `<rect x="3.4" y="4.6" width="17.2" height="10.8" rx="2.2"/><path d="M4.2 13.8a6 6 0 0 1 6 6H8.6a4.4 4.4 0 0 0-4.4-4.4ZM4.2 16.8a3 3 0 0 1 3 3H5.8a1.4 1.4 0 0 0-1.4-1.4Z"/><circle cx="4.2" cy="19.8" r="1.4"/>`,
  screencast: `<rect x="3.2" y="4.8" width="17.6" height="10.8" rx="2.2"/><path d="M19.8 13.8a6 6 0 0 0-6 6h1.6a4.4 4.4 0 0 1 4.4-4.4ZM19.8 16.8a3 3 0 0 0-3 3h1.4a1.4 1.4 0 0 1 1.4-1.4Z"/><circle cx="19.8" cy="19.8" r="1.4"/>`,
  television: `<rect x="2.8" y="5" width="18.4" height="12.4" rx="2.2"/><path d="M8.2 19.3h7.6v1.4H8.2ZM11.2 17.4h1.6V20h-1.6Z"/>`,
  images: `<rect x="6.2" y="3.4" width="14.4" height="11.2" rx="2"/><path d="M3.8 7.6v8.6a2.4 2.4 0 0 0 2.4 2.4h9.8v-1.8H6.4a1 1 0 0 1-1-1V7.6Z"/><circle cx="10.4" cy="7.4" r="1.4"/>`,
  ear: `<path d="M14.6 3a6.8 6.8 0 0 1 6.8 6.8c0 2.6-1.5 4.2-3.4 5.4-1.4 1-2.2 1.8-2.2 3.2a3.2 3.2 0 0 1-6.4 0h1.8a1.4 1.4 0 0 0 2.8 0c0-1.5.9-2.4 2.2-3.3 1.7-1.2 3.2-2.5 3.2-5.3a5 5 0 0 0-10 0h-1.8a6.8 6.8 0 0 1 6.8-6.8Z"/>`,
  "ear-slash": `<path d="M14.6 3a6.8 6.8 0 0 1 6.8 6.8c0 2.6-1.5 4.2-3.4 5.4-1.4 1-2.2 1.8-2.2 3.2a3.2 3.2 0 0 1-6.4 0h1.8a1.4 1.4 0 0 0 2.8 0c0-1.5.9-2.4 2.2-3.3 1.7-1.2 3.2-2.5 3.2-5.3a5 5 0 0 0-10 0h-1.8a6.8 6.8 0 0 1 6.8-6.8Z"/><path d="M3.034 4.166 19.834 20.966 20.966 19.834 4.166 3.034Z"/>`,
  metronome: `<path d="M6.4 20.4 9.2 5.2a2.4 2.4 0 0 1 2.4-2h.8a2.4 2.4 0 0 1 2.4 2l2.8 15.2Z"/><path d="M14.761 5.914 10.561 15.314 11.839 15.886 16.039 6.486Z"/><rect x="6.6" y="14.9" width="10.8" height="1.4" rx="0.7"/>`,
  "vinyl-record": `<path d="M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Zm0 2.6a6.2 6.2 0 1 1 0 12.4 6.2 6.2 0 0 1 0-12.4Z" fill-rule="evenodd"/><circle cx="12" cy="12" r="1.8"/>`,
  "cassette-tape": `<path d="M5 5.4h14a2.4 2.4 0 0 1 2.4 2.4v9a2.4 2.4 0 0 1-2.4 2.4H5a2.4 2.4 0 0 1-2.4-2.4v-9A2.4 2.4 0 0 1 5 5.4Zm3.2 3.2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm7.6 0a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Z" fill-rule="evenodd"/>`,
  "closed-captioning": `<rect x="2.8" y="5" width="18.4" height="13.2" rx="2.2"/><path d="M10.4 10.06A2.8 2.8 0 1 0 10.4 14.34L9.5 13.27A1.4 1.4 0 1 1 9.5 11.13ZM18.2 10.06A2.8 2.8 0 1 0 18.2 14.34L17.3 13.27A1.4 1.4 0 1 1 17.3 11.13Z"/>`,
  "high-definition": `<rect x="2.8" y="5" width="18.4" height="13.2" rx="2.2"/><path d="M7 9.2h1.6v1.9h2.2V9.2h1.6v5.8h-1.6v-2.3H8.6v2.3H7ZM13.8 9.2h1.8a2.9 2.9 0 0 1 0 5.8h-1.8Zm1.6 1.4v3h.2a1.5 1.5 0 0 0 0-3Z" fill-rule="evenodd"/>`,
  "standard-definition": `<rect x="2.8" y="5" width="18.4" height="13.2" rx="2.2"/><path d="M8.4 10.4a2.2 2.2 0 0 1 2.2-2.2h1.6v1.4H10.6a.8.8 0 0 0 0 1.6h1.4a2.2 2.2 0 0 1 0 4.4H8.6v-1.4h3.4a.8.8 0 0 0 0-1.6H10.6a2.2 2.2 0 0 1-2.2-2.2ZM15.4 9.2h1.8a2.9 2.9 0 0 1 0 5.8h-1.8Zm1.6 1.4v3h.2a1.5 1.5 0 0 0 0-3Z" fill-rule="evenodd"/>`,
  "radio-button": `<path d="M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Zm0 2.4a6.4 6.4 0 1 1 0 12.8 6.4 6.4 0 0 1 0-12.8Z" fill-rule="evenodd"/><circle cx="12" cy="12" r="3.4"/>`,
  "speaker-high": `<path d="M4.4 9.6h3.4l4.6-4.4v13.6l-4.6-4.4H4.4Z"/><path d="M15.4 9.2a4.2 4.2 0 0 1 0 5.6l-1.4-1a2.4 2.4 0 0 0 0-3.6Z"/><path d="M17.8 6.8a7.8 7.8 0 0 1 0 10.4l-1.4-1.1a6 6 0 0 0 0-8.2Z"/>`,
  "speaker-low": `<path d="M4.4 9.6h3.4l4.6-4.4v13.6l-4.6-4.4H4.4Z"/><path d="M15.4 9.2a4.2 4.2 0 0 1 0 5.6l-1.4-1a2.4 2.4 0 0 0 0-3.6Z"/>`,
  "speaker-x": `<path d="M4.4 9.6h3.4l4.6-4.4v13.6l-4.6-4.4H4.4Z"/><path d="M14.884 10.073 19.284 14.873 20.316 13.927 15.916 9.127ZM19.284 9.127 20.316 10.073 15.916 14.873 14.884 13.927Z"/>`,
  "microphone-stage": `<rect x="9.2" y="2.8" width="5.6" height="10.6" rx="2.8"/><path d="M6.2 8.6h1.6a4.2 4.2 0 0 0 8.4 0h1.6a5.8 5.8 0 0 1-5 5.7v2.9h2.6v1.6H8.6v-1.6h2.6v-2.9a5.8 5.8 0 0 1-5-5.7Z"/>`,
};
