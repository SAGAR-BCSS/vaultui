/**
 * Vault Icons - original masters, batch AZ.
 *
 * Objects, games and identity marks. Authored on the 24px grid, inner markup
 * only. Glyphs with punched detail keep a silhouette in BATCH_AZ_FILLS.
 */

const DICE_BODY = `M6.6 3.6h10.8a3 3 0 0 1 3 3v10.8a3 3 0 0 1-3 3H6.6a3 3 0 0 1-3-3V6.6a3 3 0 0 1 3-3Z`;

const PIP = {
  tl: "M7.3 8.4a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0Z",
  tr: "M14.5 8.4a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0Z",
  bl: "M7.3 15.6a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0Z",
  br: "M14.5 15.6a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0Z",
  ml: "M7.3 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0Z",
  mr: "M14.5 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0Z",
  c: "M10.9 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0Z",
};

const dice = (pips) => `<rect x="3.6" y="3.6" width="16.8" height="16.8" rx="3.0"/><path d="${pips.join(" ")}"/>`;
const diceFill = (pips) => `<path d="${DICE_BODY} ${pips.join(" ")}" fill-rule="evenodd"/>`;

export const BATCH_AZ = {
  "building-office": `<rect x="6.0" y="3.4" width="12.0" height="17.2" rx="1.2"/><rect x="11.2" y="2.6" width="1.6" height="1.2"/><path d="M8.0 6.2h2.0v2.6h-2.0ZM14.0 6.2h2.0v2.6h-2.0ZM8.0 9.6h2.0v2.6h-2.0ZM14.0 9.6h2.0v2.6h-2.0ZM8.0 13.0h2.0v2.6h-2.0ZM14.0 13.0h2.0v2.6h-2.0ZM8.0 16.4h2.0v2.6h-2.0ZM14.0 16.4h2.0v2.6h-2.0Z"/>`,
  cards: `<rect x="3.6" y="6.4" width="9.6" height="12.0" rx="1.4"/><rect x="10.8" y="5.0" width="9.6" height="12.0" rx="1.4"/><path d="M15.6 8.8 17.4 11.0 15.6 13.2 13.8 11.0Z"/>`,
  "cards-three": `<rect x="3.4" y="8.0" width="7.6" height="9.6" rx="1.2"/><rect x="8.2" y="6.4" width="7.6" height="9.6" rx="1.2"/><rect x="13.0" y="4.8" width="7.6" height="9.6" rx="1.2"/>`,
  checkerboard: `<path d="M4.0 4.0h3.4v3.4H4.0ZM12.0 4.0h3.4v3.4H12.0ZM8.0 8.0h3.4v3.4H8.0ZM16.0 8.0h3.4v3.4H16.0ZM4.0 12.0h3.4v3.4H4.0ZM12.0 12.0h3.4v3.4H12.0ZM8.0 16.0h3.4v3.4H8.0ZM16.0 16.0h3.4v3.4H16.0Z"/>`,
  cheers: `<path d="M4.2 5.0h5.0l-.8 5.4H5.0ZM14.8 5.0h5.0l-.8 5.4h-3.4Z"/><path d="M6.2 10.4h1.0v5.2h-1.0ZM4.8 15.6h3.6v1.2H4.8ZM16.4 10.4h1.0v5.2h-1.0ZM15.2 15.6h3.6v1.2h-3.6Z"/><path d="M12 2.8 12.6 4.2 14.0 4.8 12.6 5.4 12 6.8 11.4 5.4 10.0 4.8 11.4 4.2Z"/>`,
  cigarette: `<rect x="3.4" y="10.6" width="4.0" height="3.2" rx="0.8"/><rect x="7.4" y="10.6" width="10.4" height="3.2" rx="0.8"/><path d="M18.2 9.8c1.8-1.4 1.8-3.4 0-4.8h1.2c2.0 1.6 2.0 3.6 0 5.2Z"/>`,
  "cigarette-slash": `<rect x="3.4" y="10.6" width="4.0" height="3.2" rx="0.8"/><rect x="7.4" y="10.6" width="10.4" height="3.2" rx="0.8"/><path d="M18.2 9.8c1.8-1.4 1.8-3.4 0-4.8h1.2c2.0 1.6 2.0 3.6 0 5.2Z"/><path d="M4.6 3.2 6.0 4.6 20.0 18.6 18.6 20.0Z"/>`,
  club: `<circle cx="8.2" cy="8.6" r="3.4"/><circle cx="15.8" cy="8.6" r="3.4"/><circle cx="12" cy="14.4" r="3.4"/><path d="M12 16.2c1.8.8 2.6 2.4 2.6 4.4h-5.2c0-2 .8-3.6 2.6-4.4Z"/>`,
  "crane-tower": `<rect x="4.2" y="5.4" width="2.0" height="15.0" rx="0.4"/><rect x="4.2" y="5.4" width="15.6" height="1.8" rx="0.4"/><rect x="17.0" y="7.2" width="1.2" height="4.6"/><circle cx="17.6" cy="13.6" r="1.6"/>`,
  cross: `<path d="M9.8 3.8h4.4v4.2h3.8v4.4h-3.8v7.8H9.8v-7.8H6.0V8.0h3.8Z"/>`,
  "crown-cross": `<path d="M11.2 2.6h1.6v1.6h1.6v1.6h-1.6v1.8h-1.6V5.8H9.6V4.2h1.6Z"/><path d="M4.2 10.0l3.2 3.0 2.6-4.6 2.0 3.0 2.0-3.0 2.6 4.6 3.2-3.0-1.6 8.0H5.8Z"/>`,
  "crown-simple": `<path d="M4.4 16.8 5.8 7.6l4.0 4.0L12 5.8l2.2 5.8 4.0-4.0 1.4 9.2Z"/><rect x="4.4" y="16.8" width="15.2" height="1.8" rx="0.9"/>`,
  "dice-five": dice([PIP.tl, PIP.tr, PIP.bl, PIP.br, PIP.c]),
  "dice-four": dice([PIP.tl, PIP.tr, PIP.bl, PIP.br]),
  "dice-one": dice([PIP.c]),
  "dice-six": dice([PIP.tl, PIP.ml, PIP.bl, PIP.tr, PIP.mr, PIP.br]),
  "dice-three": dice([PIP.tl, PIP.c, PIP.br]),
  "dice-two": dice([PIP.tl, PIP.br]),
  "egg-crack": `<path d="M12 3.4c3.4 0 6.4 4.6 6.4 9.2 0 4.6-2.8 7.4-6.4 7.4s-6.4-2.8-6.4-7.4c0-4.6 3.0-9.2 6.4-9.2Z"/><path d="M8.2 11.2 9.6 12.6 8.6 14.2 10.2 15.4"/>`,
  "finn-the-human": `<circle cx="12" cy="11" r="5.2"/><path d="M6.8 8.6c1.2-3.4 4.0-5.2 7.0-4.6 1.4.3 2.4 1.0 3.0 2.0-2.2-.6-4.4-.2-6.2 1.2-1.4 1.0-2.6 2.4-3.8 1.4Z"/><circle cx="10" cy="11.4" r="0.9"/><circle cx="14" cy="11.4" r="0.9"/>`,
  "fire-simple": `<path d="M12 2.8c.8 3.2 4.6 5.2 4.6 9.2 0 3.8-2.0 6.8-4.6 6.8s-4.6-3.0-4.6-6.8c0-2.0 1.0-3.6 2.2-5.0.4 1.4 1.2 2.2 2.0 2.2.8 0 1.2-.6 1.2-1.6 0-1.8-.8-3.4-.8-4.8Z"/><path d="M12 11.0c.6 1.6 1.8 2.6 1.8 4.2 0 1.6-1.0 2.8-1.8 2.8s-1.8-1.2-1.8-2.8c0-1.4.8-2.4 1.8-4.2Z"/>`,
  "flying-saucer": `<path d="M3.4 12.6c0-1.6 3.9-2.8 8.6-2.8s8.6 1.2 8.6 2.8-3.9 2.8-8.6 2.8-8.6-1.2-8.6-2.8Z"/><path d="M8.2 10.0c.4-2.6 1.9-4.2 3.8-4.2s3.4 1.6 3.8 4.2Z"/><path d="M8.6 15.2 9.8 19.8h4.4l1.2-4.6Z"/>`,
  "gender-female": `<circle cx="12" cy="8.6" r="4.6"/><rect x="11.2" y="13.2" width="1.6" height="6.6"/><rect x="8.4" y="15.4" width="7.2" height="1.6" rx="0.8"/>`,
  "gender-intersex": `<circle cx="12" cy="9.0" r="4.2"/><rect x="11.2" y="13.2" width="1.6" height="6.0"/><rect x="8.6" y="15.2" width="6.8" height="1.6" rx="0.8"/><path d="M14.6 10.6 13.5 9.5 17.7 5.3h-2.0V3.7h5.2v5.2h-1.6V6.9l-4.2 4.2Z"/>`,
  "gender-male": `<circle cx="9.4" cy="14.6" r="4.6"/><path d="M14.2 11.6 13.1 10.5 17.9 5.7h-2.2V3.9h5.6v5.6h-1.8V7.0l-4.8 4.8Z"/>`,
  "gender-neuter": `<circle cx="12" cy="13.4" r="4.8"/><rect x="11.2" y="3.6" width="1.6" height="5.0"/><rect x="8.6" y="5.4" width="6.8" height="1.6" rx="0.8"/>`,
  "gender-nonbinary": `<circle cx="12" cy="14.2" r="4.4"/><rect x="11.2" y="4.2" width="1.6" height="5.6"/><path d="M12 2.6 14.6 5.2 13.0 5.2 13.0 7.2 11.0 7.2 11.0 5.2 9.4 5.2Z"/>`,
  "gender-transgender": `<circle cx="12" cy="14.0" r="4.2"/><path d="M13.4 12.4 12.3 11.3 17.1 6.5h-2.0V4.9h5.2v5.2h-1.6V7.9l-4.8 4.8Z"/><path d="M6.0 8.4 7.0 7.4 16.0 16.4 15.0 17.4Z"/>`,
  "grains-slash": `<rect x="11.2" y="5.0" width="1.6" height="15.4" rx="0.8"/><path d="M10.8 7.6 6.8 6.0 8.8 9.4ZM13.2 7.6 17.2 6.0 15.2 9.4ZM10.8 11.2 6.8 9.6 8.8 13.0ZM13.2 11.2 17.2 9.6 15.2 13.0ZM10.8 14.8 6.8 13.2 8.8 16.6ZM13.2 14.8 17.2 13.2 15.2 16.6Z"/><path d="M4.6 3.2 6.0 4.6 20.0 18.6 18.6 20.0Z"/>`,
  "head-circuit": `<path d="M9.0 3.8c3.2 0 5.6 2.4 5.6 5.8v2.2c0 2.2-1.2 3.8-3.2 4.4v4.0H8.2v-2.6H6.4a1.8 1.8 0 0 1-1.8-1.8V8.0c0-2.4 1.8-4.2 4.4-4.2Z"/><path d="M15.4 7a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 1 0-2.4 0ZM17.2 12a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 1 0-2.4 0ZM15.4 16.6a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 1 0-2.4 0Z"/><path d="M14.6 6.4h0.8v1.2h-0.8ZM14.6 11.4h2.6v1.2h-2.6ZM14.6 16.0h0.8v1.2h-0.8Z"/>`,
};

export const BATCH_AZ_FILLS = {
  "building-office": `<path d="M7.2 3.4h9.6a1.2 1.2 0 0 1 1.2 1.2v16.0H6.0V4.6a1.2 1.2 0 0 1 1.2-1.2ZM8.0 6.2h2.0v2.6H8.0ZM14.0 6.2h2.0v2.6h-2.0ZM8.0 9.6h2.0v2.6H8.0ZM14.0 9.6h2.0v2.6h-2.0ZM8.0 13.0h2.0v2.6H8.0ZM14.0 13.0h2.0v2.6h-2.0ZM8.0 16.4h2.0v2.6H8.0ZM14.0 16.4h2.0v2.6h-2.0Z" fill-rule="evenodd"/><rect x="11.2" y="2.6" width="1.6" height="1.2"/>`,
  cards: `<path d="M10.8 5.0h9.6v12h-9.6ZM15.6 8.8 17.4 11.0 15.6 13.2 13.8 11.0Z" fill-rule="evenodd"/><path d="M3.6 6.4h9.6v12H3.6Z"/>`,
  "dice-five": diceFill([PIP.tl, PIP.tr, PIP.bl, PIP.br, PIP.c]),
  "dice-four": diceFill([PIP.tl, PIP.tr, PIP.bl, PIP.br]),
  "dice-one": diceFill([PIP.c]),
  "dice-six": diceFill([PIP.tl, PIP.ml, PIP.bl, PIP.tr, PIP.mr, PIP.br]),
  "dice-three": diceFill([PIP.tl, PIP.c, PIP.br]),
  "dice-two": diceFill([PIP.tl, PIP.br]),
  "egg-crack": `<path d="M12 3.4c3.4 0 6.4 4.6 6.4 9.2 0 4.6-2.8 7.4-6.4 7.4s-6.4-2.8-6.4-7.4c0-4.6 3.0-9.2 6.4-9.2Z"/>`,
  "finn-the-human": `<path d="M12 5.8a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4ZM10 10.5a0.9 0.9 0 1 0 0 1.8 0.9 0.9 0 0 0 0-1.8ZM14 10.5a0.9 0.9 0 1 0 0 1.8 0.9 0.9 0 0 0 0-1.8Z" fill-rule="evenodd"/><path d="M6.8 8.6c1.2-3.4 4.0-5.2 7.0-4.6 1.4.3 2.4 1.0 3.0 2.0-2.2-.6-4.4-.2-6.2 1.2-1.4 1.0-2.6 2.4-3.8 1.4Z"/>`,
  "fire-simple": `<path d="M12 2.8c.8 3.2 4.6 5.2 4.6 9.2 0 3.8-2.0 6.8-4.6 6.8s-4.6-3.0-4.6-6.8c0-2.0 1.0-3.6 2.2-5.0.4 1.4 1.2 2.2 2.0 2.2.8 0 1.2-.6 1.2-1.6 0-1.8-.8-3.4-.8-4.8ZM12 11.0c.6 1.6 1.8 2.6 1.8 4.2 0 1.6-1.0 2.8-1.8 2.8s-1.8-1.2-1.8-2.8c0-1.4.8-2.4 1.8-4.2Z" fill-rule="evenodd"/>`,
};
