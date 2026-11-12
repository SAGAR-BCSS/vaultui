/**
 * Vault Icons — original masters, batch U.
 *
 * Vehicles and transport glyphs. Authored on the 24px grid, inner markup only.
 * Open-path glyphs get a solid silhouette in BATCH_U_FILLS so the fill/duotone
 * weights read correctly.
 */

export const BATCH_U = {
  "air-traffic-control": `<path d="M8.2 6.4h7.6v12.4a2.2 2.2 0 0 1-2.2 2.2h-3.2a2.2 2.2 0 0 1-2.2-2.2Z"/><rect x="9.4" y="3.4" width="5.2" height="3" rx="0.8"/><path d="M12 3.4V2.8M8.2 10.2h7.6M8.2 13.6h7.6M8.2 17h7.6"/>`,
  "airplane-in-flight": `<path d="M3.4 12.6 6 10.8c2.2 1 4.6 1.6 7 1.6h4.4l1-1 1.8 1.8-1 1H13c-2.4 0-4.8.6-7 1.6l-2.6-1.8Z"/><path d="m9.2 12.4 4-5 1.6 1.6-2.6 4Z"/><path d="M20.4 10.6h1M20.4 12.6h1M20.4 14.6h1"/>`,
  "airplane-landing": `<path d="M3.4 12.6 6 10.8c2.2 1 4.6 1.6 7 1.6h4.4l1-1 1.8 1.8-1 1H13c-2.4 0-4.8.6-7 1.6l-2.6-1.8Z"/><path d="m9.2 12.4 4-5 1.6 1.6-2.6 4Z"/><path d="M4.4 16.4h9.2"/><path d="M8.4 15.4v3M12 15.4v3"/>`,
  "airplane-takeoff": `<path d="M3.4 12.6 6 10.8c2.2 1 4.6 1.6 7 1.6h4.4l1-1 1.8 1.8-1 1H13c-2.4 0-4.8.6-7 1.6l-2.6-1.8Z"/><path d="m9.2 12.4 4-5 1.6 1.6-2.6 4Z"/><path d="M4.4 16.4h9.2"/><path d="M14.6 15.4l2.2-2.2M17.4 14.4l1.8-1.8"/>`,
  "airplane-taxiing": `<path d="M3.4 12.6 6 10.8c2.2 1 4.6 1.6 7 1.6h4.4l1-1 1.8 1.8-1 1H13c-2.4 0-4.8.6-7 1.6l-2.6-1.8Z"/><path d="m9.2 12.4 4-5 1.6 1.6-2.6 4Z"/><circle cx="7.4" cy="17.2" r="1.4"/><circle cx="15" cy="17.2" r="1.4"/>`,
  "airplane-tilt": `<path d="M3.4 12.6 6 10.8c2.2 1 4.6 1.6 7 1.6h4.4l1-1 1.8 1.8-1 1H13c-2.4 0-4.8.6-7 1.6l-2.6-1.8Z" transform="rotate(45 12 12)"/><path d="m9.2 12.4 4-5 1.6 1.6-2.6 4Z" transform="rotate(45 12 12)"/>`,
  ambulance: `<path d="M4 11.6c0-1.6 1-2.6 2.6-2.6h8.6l3.6 4.4v3c0 1.4-1 2.2-2.2 2.2H6.6c-1.4 0-2.6-1-2.6-2.4Z"/><path d="M16.2 9.8v4.4M14 12h4.4"/><circle cx="7.4" cy="17.6" r="2"/><circle cx="16.6" cy="17.6" r="2"/>`,
  bulldozer: `<path d="M4.4 13.2c0-1.6 1-2.6 2.6-2.6h3l1.2-1.8h2.4l1.2 1.8h1.2c1.6 0 2.6 1 2.6 2.6v2.4c0 1.4-1 2.2-2.2 2.2H6.6c-1.2 0-2.2-1-2.2-2.2Z"/><circle cx="7" cy="18" r="2.2"/><circle cx="16" cy="18" r="2.2"/><path d="M2.6 14.2l2.6-1 1.4 4.4-1.8 1Z"/>`,
  "cable-car": `<path d="M4 6.4h16"/><path d="M9.4 6.4v4h5.2v-4Z"/><rect x="6.4" y="10.4" width="11.2" height="8.4" rx="2"/><rect x="8.2" y="12.4" width="7.6" height="3.4" rx="0.6"/>`,
  "car-battery": `<rect x="4" y="8.4" width="16" height="11.4" rx="1.6"/><rect x="6" y="5.2" width="3.4" height="3.2" rx="0.6"/><rect x="14.6" y="5.2" width="3.4" height="3.2" rx="0.6"/><path d="M7.8 11.6h2.2M8.9 10.5v2.2M15.2 11.6h1.4"/>`,
  "car-profile": `<path d="M4.2 13c0-1.6 1-2.6 2.6-2.6h4.6l1-1.8h2.8c1.4 0 2.6.8 3.2 2l1 1.6c.6.4 1 1.2 1 2v1.8c0 1.4-1 2.2-2.2 2.2H6.4c-1.2 0-2.2-1-2.2-2.2Z"/><circle cx="7.2" cy="17.2" r="2"/><circle cx="16.6" cy="17.2" r="2"/><path d="M11.4 10.4h2.6v2.4h-2.6ZM6.2 10.4h2.4v2.4H6.2Z"/>`,
  "car-simple": `<path d="M4.4 13.2c0-1.8 1-2.8 2.6-2.8h4l1-2h3.4c1.2 0 2.2.6 2.8 1.6l1.4 2.4c.8.4 1.4 1.2 1.4 2.4v1.6c0 1.4-1 2.2-2.2 2.2h-12c-1.4 0-2.4-1-2.4-2.2Z"/><circle cx="7.4" cy="17.2" r="1.9"/><circle cx="16.6" cy="17.2" r="1.9"/>`,
  "fire-truck": `<rect x="3.4" y="8.4" width="17.2" height="9.2" rx="1.6"/><path d="M13.6 8.4V4.2l4.2 1.6V8.4Z"/><circle cx="7.4" cy="17.6" r="2.1"/><circle cx="16.6" cy="17.6" r="2.1"/>`,
  "gas-can": `<path d="M6 9.2h9l2.6 3v6.2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"/><path d="M9.6 6.6V4.8h3.2v1.8"/><path d="M7.4 13.4h6.6M7.4 16h4"/>`,
  jeep: `<path d="M4.2 12.8c0-1.6 1-2.6 2.6-2.6h3l1.2-1.8h2.8l1.2 1.8h1.2c1.6 0 2.6 1 2.6 2.6v1.6c0 1.4-1 2.2-2.2 2.2H6.4c-1.2 0-2.2-1-2.2-2.2Z"/><circle cx="7" cy="17" r="1.9"/><circle cx="17" cy="17" r="1.9"/><path d="M10.8 10.4h2.4v2.2h-2.4ZM15.4 10.4h1.2v2.2h-1.2Z"/>`,
  moped: `<path d="M4.4 14.6h7.2c1.6 0 2.8.8 3.2 2.2l1.2 2.4h3"/><circle cx="6.4" cy="17.2" r="2.4"/><circle cx="16.4" cy="17.2" r="2.4"/><path d="M10.4 11.4v3.2M10.4 11.4l3.2-1.2M13.6 10.2l3.4-.8"/>`,
  "moped-front": `<circle cx="12" cy="12" r="4.6"/><path d="M12 3.2v4M7.4 12H5M19 12h-2.4M9.2 5.2l2 2.6M14.8 5.2l-2 2.6"/><path d="M12 16.6v2.4M8.4 20.6h7.2"/>`,
  motorcycle: `<circle cx="6.4" cy="17.2" r="2.6"/><circle cx="17.6" cy="17.2" r="2.6"/><path d="M6.4 17.2c2-.4 3.6-1.4 4.6-3l2-4.6 4.6-1.4 2 .8-2.6 4.6-3.4 2.8Z"/><path d="M12 9.4V6.2M10.4 6.2h3"/>`,
  sailboat: `<path d="M4.4 16.4h15.2l-2.6 4.2H7Z"/><path d="M12 16.4V4.6M12 5.2l6.4 8.6H12Z"/>`,
  scooter: `<path d="M5.2 19.4h8.8"/><circle cx="5.6" cy="19.6" r="1.6"/><circle cx="15" cy="19.6" r="1.6"/><path d="M9.6 19.4V9.4l5-3.6M12.6 7h4.4"/>`,
  subway: `<rect x="3.4" y="5.6" width="17.2" height="14.6" rx="3.6"/><path d="M3.4 11.4h17.2"/><rect x="6.4" y="8" width="4.2" height="2.6" rx="0.6"/><rect x="13.4" y="8" width="4.2" height="2.6" rx="0.6"/>`,
  taxi: `<path d="M4.4 12.8c0-1.8 1-2.8 2.6-2.8h4l1-2h3.4c1.2 0 2.2.6 2.8 1.6l1.4 2.4c.8.4 1.4 1.2 1.4 2.4v1.6c0 1.4-1 2.2-2.2 2.2h-12c-1.4 0-2.4-1-2.4-2.2Z"/><circle cx="7.4" cy="17" r="1.9"/><circle cx="16.6" cy="17" r="1.9"/><rect x="11" y="6.2" width="2" height="2.6" rx="0.5"/>`,
  "train-regional": `<rect x="3.2" y="7.4" width="17.6" height="11.4" rx="2.4"/><path d="M5.2 9.2h2.6v2.8H5.2ZM8.8 9.2h2.6v2.8H8.8ZM12.4 9.2h2.6v2.8h-2.6ZM16 9.2h2.6v2.8H16Z"/><path d="M3.2 11.6h17.6"/>`,
  "train-simple": `<rect x="3.2" y="7.4" width="17.6" height="11.4" rx="2.4"/><path d="M5.4 9.4h4v2.4h-4ZM14.6 9.4h4v2.4h-4Z"/><path d="M3.2 11.6h17.6"/>`,
  tram: `<rect x="3.4" y="8.4" width="17.2" height="11.6" rx="1.6"/><path d="M12 8.4V3.4M9.6 3.4h4.8"/><rect x="5.4" y="11.2" width="3.2" height="2.6" rx="0.5"/><rect x="15.4" y="11.2" width="3.2" height="2.6" rx="0.5"/>`,
  truck: `<path d="M4 12.4c0-1.6 1-2.6 2.6-2.6h4.2l1-1.6h2.2c1.4 0 2.4.8 3 1.8.6.4 1 1 1 1.8v1.6c0 1.4-1 2.2-2.2 2.2H6.4c-1.4 0-2.4-1-2.4-2.2Z"/><rect x="12.2" y="8" width="8.6" height="9.6" rx="1"/><circle cx="7" cy="17.6" r="2"/><circle cx="17.6" cy="17.6" r="2"/>`,
  "truck-trailer": `<path d="M4 12.4c0-1.6 1-2.6 2.6-2.6h4.2l1-1.6h2.2c1.4 0 2.4.8 3 1.8.6.4 1 1 1 1.8v1.6c0 1.4-1 2.2-2.2 2.2H6.4c-1.4 0-2.4-1-2.4-2.2Z"/><circle cx="7" cy="17.6" r="2"/><rect x="13.6" y="8" width="7.2" height="7.6" rx="0.8"/><circle cx="17.2" cy="17.6" r="2"/>`,
  van: `<path d="M4 11.4c0-1.8 1-2.8 2.8-2.8h8.8l3.2 4v4.2c0 1.4-1 2.2-2.2 2.2H6.8c-1.6 0-2.8-1-2.8-2.8Z"/><circle cx="7.6" cy="17" r="2"/><circle cx="16.4" cy="17" r="2"/><rect x="6" y="9.8" width="5.6" height="2.6" rx="0.5"/>`,
  "trolley-suitcase": `<rect x="5.2" y="7" width="13.6" height="12" rx="1.6"/><path d="M9.2 4.4h5.6v2.6H9.2Z"/><circle cx="7.6" cy="19" r="1"/><circle cx="16.4" cy="19" r="1"/>`,
  "person-simple-bike": `<circle cx="9.6" cy="6" r="1.8"/><path d="M9.6 7.8v3.2l4.6 3.6-2.4 5.2M9.6 7.8l3.4 1.2M13 9l1.8-2.2"/><circle cx="6.4" cy="17.6" r="3"/><circle cx="17.6" cy="17.6" r="3"/>`,
};

export const BATCH_U_FILLS = {
  "air-traffic-control": `<path d="M8.2 6.4h7.6v12.4a2.2 2.2 0 0 1-2.2 2.2h-3.2a2.2 2.2 0 0 1-2.2-2.2Z"/><rect x="9.4" y="3.4" width="5.2" height="3" rx="0.8"/><rect x="11.2" y="2.4" width="1.6" height="1.2" rx="0.6"/><path d="M8.2 9.5h7.6v1.4H8.2ZM8.2 12.9h7.6v1.4H8.2ZM8.2 16.3h7.6v1.4H8.2Z"/>`,
  "airplane-in-flight": `<path d="M3.4 12.6 6 10.8c2.2 1 4.6 1.6 7 1.6h4.4l1-1 1.8 1.8-1 1H13c-2.4 0-4.8.6-7 1.6l-2.6-1.8Z"/><path d="m9.2 12.4 4-5 1.6 1.6-2.6 4Z"/><path d="M20.4 10h1v1.2h-1ZM20.4 12h1v1.2h-1ZM20.4 14h1v1.2h-1Z"/>`,
  "airplane-landing": `<path d="M3.4 12.6 6 10.8c2.2 1 4.6 1.6 7 1.6h4.4l1-1 1.8 1.8-1 1H13c-2.4 0-4.8.6-7 1.6l-2.6-1.8Z"/><path d="m9.2 12.4 4-5 1.6 1.6-2.6 4Z"/><rect x="4.4" y="15.7" width="9.2" height="1.4" rx="0.7"/><path d="M7.7 15.4h1.4v3.6H7.7ZM11.3 15.4h1.4v3.6h-1.4Z"/>`,
  "airplane-takeoff": `<path d="M3.4 12.6 6 10.8c2.2 1 4.6 1.6 7 1.6h4.4l1-1 1.8 1.8-1 1H13c-2.4 0-4.8.6-7 1.6l-2.6-1.8Z"/><path d="m9.2 12.4 4-5 1.6 1.6-2.6 4Z"/><rect x="4.4" y="15.7" width="9.2" height="1.4" rx="0.7"/><path d="M14.3 15.6l2.6-2.6 1 1-2.6 2.6ZM16.9 14.4l2.2-2.2 1 1-2.2 2.2Z"/>`,
  "airplane-taxiing": `<path d="M3.4 12.6 6 10.8c2.2 1 4.6 1.6 7 1.6h4.4l1-1 1.8 1.8-1 1H13c-2.4 0-4.8.6-7 1.6l-2.6-1.8Z"/><path d="m9.2 12.4 4-5 1.6 1.6-2.6 4Z"/><circle cx="7.4" cy="17.2" r="1.6"/><circle cx="15" cy="17.2" r="1.6"/>`,
  ambulance: `<path d="M4 11.6c0-1.6 1-2.6 2.6-2.6h8.6l3.6 4.4v3c0 1.4-1 2.2-2.2 2.2H6.6c-1.4 0-2.6-1-2.6-2.4Z"/><path d="M15.2 9.8h2v4.4h-2ZM13 11h4.4v2H13Z"/><circle cx="7.4" cy="17.6" r="2.2"/><circle cx="16.6" cy="17.6" r="2.2"/>`,
  "cable-car": `<rect x="4" y="5.7" width="16" height="1.4" rx="0.7"/><rect x="9.4" y="6.4" width="5.2" height="4"/><rect x="6.4" y="10.4" width="11.2" height="8.4" rx="2"/><rect x="8.2" y="12.4" width="7.6" height="3.4" rx="0.6"/>`,
  "car-battery": `<rect x="4" y="8.4" width="16" height="11.4" rx="1.6"/><rect x="6" y="5.2" width="3.4" height="3.2" rx="0.6"/><rect x="14.6" y="5.2" width="3.4" height="3.2" rx="0.6"/><path d="M7.1 10.9h3.6v1.4H7.1ZM8.2 9.8h1.4v3.6H8.2ZM15.2 11h1.6v1.4h-1.6Z"/>`,
  "gas-can": `<path d="M6 9.2h9l2.6 3v6.2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"/><path d="M9.4 4.8h3.6v2H9.4Z"/><path d="M7.4 12.7h6.6v1.4H7.4ZM7.4 15.3h4v1.4h-4Z"/>`,
  moped: `<path d="M4.4 13.9h7.2c1.6 0 2.8.8 3.2 2.2l1.2 2.4h3v1.4h-3.4l-1.2-2.2a2.6 2.6 0 0 0-2.6-1.8H4.4Z"/><circle cx="6.4" cy="17.2" r="2.6"/><circle cx="16.4" cy="17.2" r="2.6"/><path d="M9.7 11.4h1.4v3.6H9.7ZM10 11.4l3.6-1.4 1 1.2-3.2 1.4ZM13.4 9.4l4-1 .8 1.2-3.8.8Z"/>`,
  "moped-front": `<circle cx="12" cy="12" r="4.8"/><path d="M11.2 3.2h1.6v4.4h-1.6ZM6.4 11.2H5v1.6h1.4ZM19 11.2h1.4v1.6H19ZM9.2 4.6l2.2 2.8-1.2 1-2.2-2.8ZM14.8 4.6l-2.2 2.8-1.2-1 2.2-2.8Z"/><path d="M11.2 16.6h1.6v2.4h-1.6ZM8.4 19.8h7.2v1.4H8.4Z"/>`,
  motorcycle: `<circle cx="6.4" cy="17.2" r="2.8"/><circle cx="17.6" cy="17.2" r="2.8"/><path d="M6.4 17.2c2-.4 3.6-1.4 4.6-3l2-4.6 4.6-1.4 2 .8-2.6 4.6-3.4 2.8Z"/><path d="M11.2 6.2h1.6v3.6h-1.6ZM9.7 6.2h3v1.4h-3Z"/>`,
  sailboat: `<path d="M4.4 16.4h15.2l-2.6 4.2H7Z"/><rect x="11.2" y="4.6" width="1.6" height="11.8" rx="0.8"/><path d="M12 5l6.6 8.6H12Z"/>`,
  scooter: `<rect x="5.2" y="18.7" width="8.8" height="1.4" rx="0.7"/><circle cx="5.6" cy="19.6" r="1.8"/><circle cx="15" cy="19.6" r="1.8"/><path d="M8.9 9.4h1.4v10.6H8.9ZM9.6 9.4l5-3.6 1 1.2-4.4 3.2ZM12.4 6.3h4.8v1.4h-4.8Z"/>`,
  subway: `<rect x="3.4" y="5.6" width="17.2" height="14.6" rx="3.6"/><rect x="3.4" y="10.7" width="17.2" height="1.4"/><rect x="6.4" y="8" width="4.2" height="2.6" rx="0.6"/><rect x="13.4" y="8" width="4.2" height="2.6" rx="0.6"/>`,
  "train-regional": `<rect x="3.2" y="7.4" width="17.6" height="11.4" rx="2.4"/><path d="M5.2 9.2h2.6v2.8H5.2ZM8.8 9.2h2.6v2.8H8.8ZM12.4 9.2h2.6v2.8h-2.6ZM16 9.2h2.6v2.8H16Z"/><rect x="3.2" y="10.9" width="17.6" height="1.4"/>`,
  "train-simple": `<rect x="3.2" y="7.4" width="17.6" height="11.4" rx="2.4"/><path d="M5.4 9.4h4v2.4h-4ZM14.6 9.4h4v2.4h-4Z"/><rect x="3.2" y="10.9" width="17.6" height="1.4"/>`,
  tram: `<rect x="3.4" y="8.4" width="17.2" height="11.6" rx="1.6"/><path d="M11.2 3.4h1.6v5h-1.6ZM9.6 3h4.8v1.4H9.6Z"/><rect x="5.4" y="11.2" width="3.2" height="2.6" rx="0.5"/><rect x="15.4" y="11.2" width="3.2" height="2.6" rx="0.5"/>`,
  "person-simple-bike": `<circle cx="9.6" cy="6" r="2"/><circle cx="6.4" cy="17.6" r="3.2"/><circle cx="17.6" cy="17.6" r="3.2"/><path d="M8.8 7.8h1.6v3.6H8.8ZM13.4 10.2l3.4 2.6-1 1.4-3.4-2.6ZM12.6 14.4l-2.6 5.6-1.4-.6 2.6-5.6ZM9.6 8.4l3.4 1.2-1.4 1-2.8-1Z"/>`,
};
