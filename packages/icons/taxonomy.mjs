/**
 * Vault Icons — master taxonomy.
 *
 * Nine development categories, evaluated in priority order (first match wins).
 * Every icon lands in exactly one category, so the inventory can never lose an
 * icon to a "misc" bucket.
 */

export const CATEGORIES = [
  {
    id: "core-ui",
    label: "Core UI & Interface",
    blurb: "Menus, navigation chrome, actions, users and account affordances.",
  },
  {
    id: "arrows-navigation",
    label: "Arrows & Navigation",
    blurb: "Directional arrows, carets, chevrons, resize and movement.",
  },
  {
    id: "alerts-status",
    label: "Alerts & Status",
    blurb: "Warnings, confirmations, shields, timers and system state.",
  },
  {
    id: "dev-data",
    label: "Development & Data",
    blurb: "Code, terminals, databases, servers, git and cloud plumbing.",
  },
  {
    id: "text-editing",
    label: "Text Editing",
    blurb: "Typography controls, formatting, links and writing tools.",
  },
  {
    id: "media-devices",
    label: "Media & Devices",
    blurb: "Playback, audio, capture, screens and hardware.",
  },
  {
    id: "files-folders",
    label: "Files & Folders",
    blurb: "Documents, archives, books, folders and storage.",
  },
  {
    id: "commerce-finance",
    label: "Commerce & Finance",
    blurb: "Carts, currency, charts, wallets and pricing.",
  },
  {
    id: "communication",
    label: "Communication",
    blurb: "Mail, chat, telephony, broadcast and social.",
  },
  {
    id: "objects-life",
    label: "Objects & Lifestyle",
    blurb: "Transport, food, nature, sports, health, household and people.",
  },
];

export const CATEGORY_IDS = CATEGORIES.map((c) => c.id);

const SOCIAL = [
  "behance", "discord", "dribbble", "facebook", "fediverse", "goodreads",
  "instagram", "lastfm", "linkedin", "linktree", "mastodon", "medium",
  "messenger", "meta", "patreon", "pinterest", "reddit", "skype", "slack",
  "snapchat", "soundcloud", "spotify", "steam", "telegram", "threads",
  "tiktok", "tumblr", "twitch", "twitter", "wechat", "whatsapp", "x", "youtube",
  "tidal", "pix", "read-cv", "ny-times",
];

const DEV_BRANDS = [
  "android", "apple", "app-store", "coda", "codepen", "codesandbox", "dev-to",
  "dropbox", "figma", "framer", "github", "gitlab", "google", "google-chrome",
  "google-drive", "google-play", "linux", "markdown", "matrix", "notion",
  "open-ai", "phosphor", "replit", "sketch", "stack-overflow", "windows",
  "microsoft", "npm", "docker", "supabase", "vercel",
];

const FINANCE_BRANDS = ["amazon", "paypal", "stripe", "visa", "mastercard"];

/** token === name or name.startsWith(token + "-") */
const prefix = (name, token) => name === token || name.startsWith(token + "-");
const anyPrefix = (name, tokens) => tokens.some((t) => prefix(name, t));

const RULES = [
  { id: "communication", match: (n) => anyPrefix(n, SOCIAL) },
  { id: "commerce-finance", match: (n) => anyPrefix(n, FINANCE_BRANDS) },
  { id: "dev-data", match: (n) => anyPrefix(n, DEV_BRANDS) },

  {
    id: "commerce-finance",
    match: (n) =>
      anyPrefix(n, [
        "currency", "shopping", "bag", "basket", "handbag", "coin", "coins",
        "money", "piggy-bank", "wallet", "bank", "cash-register", "calculator",
        "percent", "tag", "gift", "medal", "trophy", "trend", "chart", "graph",
        "ranking", "invoice", "receipt", "scales", "storefront", "ticket",
        "barcode", "qr-code", "tip-jar", "treasure-chest", "sales", "discount",
        "coupon", "pricing", "cardholder", "contactless-payment", "charging-station",
      ]),
  },
  {
    id: "communication",
    match: (n) =>
      anyPrefix(n, [
        "envelope", "mail", "mailbox", "chat", "chats", "paper-plane", "phone",
        "broadcast", "cell-tower", "cell-signal", "megaphone", "rss",
        "voicemail", "at", "hash", "translate", "user-sound", "share-network",
        "share-fat", "share",
      ]),
  },
  {
    id: "media-devices",
    match: (n) =>
      anyPrefix(n, [
        "play", "pause", "stop", "skip", "rewind", "fast-forward", "speaker",
        "microphone", "video", "camera", "image", "images", "film", "television",
        "radio", "screencast", "airplay", "headphones", "headset", "music",
        "guitar", "piano", "metronome", "disc", "vinyl", "cassette", "equalizer",
        "waveform", "subtitles", "closed-captioning", "eject", "record", "gif",
        "picture-in-picture", "webcam", "projector", "slideshow", "presentation",
        "high-definition", "standard-definition", "playlist", "game-controller",
        "joystick", "virtual-reality", "drone", "boombox", "amplifier",
        "video-conference", "monitor-play", "cast", "wave-sine", "wave-square",
        "wave-sawtooth", "wave-triangle", "waves",
      ]),
  },
  {
    id: "files-folders",
    match: (n) =>
      anyPrefix(n, [
        "file", "files", "folder", "folders", "archive", "book", "books",
        "notebook", "bookmark", "bookmarks", "briefcase", "map", "package",
        "tray", "certificate", "identification", "vault", "cabinet", "lockers",
        "address-book",
      ]),
  },
  {
    id: "text-editing",
    match: (n) =>
      anyPrefix(n, [
        "text", "align", "article", "paragraph", "quotes", "link", "scissors",
        "clipboard", "paperclip", "highlighter", "pencil", "pen", "marker",
        "eraser", "signature", "ruler", "list", "indent", "outdent", "backspace",
        "keyboard", "cursor-text", "note", "notepad", "chalkboard", "log",
        "line-segment", "line-segments", "spell", "type",
      ]),
  },
  {
    id: "dev-data",
    match: (n) =>
      anyPrefix(n, [
        "code", "terminal", "database", "server", "hard-drive", "hard-drives",
        "cpu", "memory", "graphics-card", "git", "cube", "stack", "layout",
        "monitor", "desktop", "laptop", "device", "devices", "computer-tower",
        "cloud", "activity", "pulse", "webhooks", "brackets", "bug", "binary",
        "tree-structure", "tree-view", "network", "plug", "plugs", "usb", "wifi",
        "bluetooth", "browser", "browsers", "app-window", "rows", "columns",
        "grid", "kanban", "function", "matrix", "command", "option", "sim-card",
        "vibrate", "scan", "flow-arrow", "sidebar", "queue", "circuitry",
        "blueprint", "bounding-box", "gradient", "vector", "bezier", "path",
        "polygon", "shapes", "perspective", "three-d", "anchor", "linktree",
      ]),
  },
  {
    id: "alerts-status",
    match: (n) =>
      anyPrefix(n, [
        "warning", "check", "seal", "shield", "flag", "timer", "clock",
        "hourglass", "spinner", "siren", "alarm", "prohibit", "info", "question",
        "first-aid", "heartbeat", "bell", "notification", "lifebuoy", "battery",
        "gauge", "speedometer", "traffic", "radioactive", "biohazard", "sos",
      ]),
  },
  {
    id: "arrows-navigation",
    match: (n) =>
      anyPrefix(n, [
        "arrow", "arrows", "caret", "chevron", "corner", "corners", "resize",
        "navigation", "compass", "sign-in", "sign-out", "repeat", "shuffle",
        "swap", "sort", "flip", "split-horizontal", "split-vertical", "signpost",
        "stairs", "escalator", "elevator", "road-horizon", "gps", "crosshair",
      ]),
  },
  {
    id: "objects-life",
    match: (n) =>
      anyPrefix(n, [
        // transport
        "airplane", "air-traffic-control", "car", "bus", "truck", "van", "taxi",
        "train", "tram", "subway", "boat", "sailboat", "bicycle", "motorcycle",
        "scooter", "moped", "jeep", "ambulance", "rocket", "tractor",
        "bulldozer", "crane", "forklift", "traffic-cone", "traffic-sign",
        "gas-pump", "gas-can", "tire", "steering-wheel", "seatbelt", "engine",
        "headlights", "bridge", "wheelchair", "footprints", "parachute",
        "flying-saucer", "cable-car", "park", "garage", "charging-station",
        // food & drink
        "bread", "cake", "coffee", "cookie", "pizza", "hamburger", "ice-cream",
        "bowl-food", "bowl-steam", "fork-knife", "wine", "beer-bottle",
        "beer-stein", "brandy", "martini", "champagne", "cooking-pot", "oven",
        "carrot", "pepper", "orange", "cherries", "avocado", "fish", "shrimp",
        "egg", "cheese", "popcorn", "popsicle", "onigiri", "grains", "jar",
        "tea-bag", "pint-glass", "coffee-bean", "hamburger",
        // nature & weather
        "cat", "dog", "bird", "butterfly", "rabbit", "horse", "cow", "paw-print",
        "bone", "tree", "plant", "leaf", "flower", "cactus", "mountains",
        "island", "campfire", "sun", "moon", "snowflake", "rainbow", "tornado",
        "hurricane", "wind", "fire", "flame", "drop", "meteor", "planet",
        "shooting-star", "sparkle", "lightning", "umbrella", "tent", "tipi",
        "lighthouse", "windmill", "barn", "farm", "factory", "warehouse",
        "building", "buildings", "city", "church", "mosque", "synagogue",
        "castle-turret", "tower",
        // sports & games
        "baseball", "basketball", "football", "soccer-ball", "tennis-ball",
        "volleyball", "golf", "hockey", "boxing-glove", "barbell", "ping-pong",
        "bowling-ball", "racquet", "cricket", "boules", "court-basketball",
        "beach-ball", "dice", "cards", "puzzle-piece", "lego", "poker-chip",
        "balloon", "confetti", "pinwheel", "sword", "cross", "crown",
        // clothing & personal
        "shirt", "t-shirt", "hoodie", "pants", "dress", "sock", "sneaker",
        "boot", "high-heel", "coat-hanger", "backpack", "handbag", "belt",
        "beanie", "baseball-cap", "eyeglasses", "sunglasses", "goggles", "watch",
        "visor", "diaper", "baby",
        // health
        "pill", "syringe", "stethoscope", "thermometer", "hospital", "brain",
        "tooth", "bandaids", "face-mask", "virus", "dna", "first-aid-kit",
        "wheelchair-motion", "asclepius", "skull", "potted-plant",
        // household & tools
        "armchair", "couch", "bed", "chair", "desk", "dresser", "lamp", "rug",
        "toilet", "shower", "bathtub", "washing-machine", "fan", "hair-dryer",
        "broom", "toolbox", "wrench", "hammer", "screwdriver", "axe", "shovel",
        "ladder", "pipe-wrench", "paint-brush", "paint-roller", "paint-bucket",
        "palette", "magnet", "flashlight", "fire-extinguisher", "needle",
        "binoculars", "lasso", "anchor-simple", "sketch", "chair",
        // assorted objects that would otherwise fall through to Core UI
        "acorn", "alien", "atom", "bomb", "clover", "club", "spade",
        "cigarette", "cowboy-hat", "detective", "finn-the-human", "ghost",
        "knife", "robot", "feather", "flask", "gavel", "graduation-cap",
        "hard-hat", "head-circuit", "lectern", "microscope", "stamp",
        "sticker", "suitcase", "tote", "recycle", "scroll", "barricade",
      ]),
  },
  {
    id: "core-ui",
    match: () => true,
  },
];

export function classify(name) {
  for (const rule of RULES) {
    if (rule.match(name)) return rule.id;
  }
  return "core-ui";
}

/**
 * Search aliases reconcile the shared nomenclature (lucide/heroicons style,
 * e.g. "menu", "close", "log-in") with the canonical geometry names.
 */
export const ALIASES = {
  menu: ["list", "sidebar"],
  "menu-alt": ["sidebar-simple"],
  close: ["x"],
  "close-circle": ["x-circle"],
  search: ["magnifying-glass"],
  "zoom-in": ["magnifying-glass-plus"],
  "zoom-out": ["magnifying-glass-minus"],
  settings: ["gear-six"],
  cog: ["gear"],
  sliders: ["sliders-horizontal"],
  filter: ["funnel"],
  grid: ["grid-four", "squares-four"],
  list: ["list"],
  "more-horizontal": ["dots-three"],
  "more-vertical": ["dots-three-vertical"],
  "external-link": ["arrow-square-out"],
  share: ["share-network"],
  download: ["download-simple"],
  upload: ["upload-simple"],
  trash: ["trash", "trash-simple"],
  edit: ["pencil-simple"],
  copy: ["copy-simple"],
  save: ["floppy-disk"],
  "eye-off": ["eye-slash"],
  unlock: ["lock-simple-open"],
  home: ["house"],
  dashboard: ["squares-four"],
  "refresh-cw": ["arrows-clockwise"],
  "refresh-ccw": ["arrows-counter-clockwise"],
  "rotate-cw": ["arrow-clockwise"],
  "log-in": ["sign-in"],
  "log-out": ["sign-out"],
  maximize: ["corners-out"],
  minimize: ["corners-in"],
  "dollar-sign": ["currency-dollar"],
  euro: ["currency-eur"],
  pound: ["currency-gbp"],
  bitcoin: ["currency-btc"],
  award: ["medal"],
  "trending-up": ["trend-up"],
  "trending-down": ["trend-down"],
  "pie-chart": ["chart-pie"],
  "bar-chart": ["chart-bar"],
  "bar-chart-2": ["chart-bar-horizontal"],
  mail: ["envelope-simple"],
  "message-circle": ["chat-circle"],
  "message-square": ["chat-centered"],
  send: ["paper-plane-tilt"],
  "phone-missed": ["phone-x"],
  "phone-off": ["phone-slash"],
  contact: ["address-book"],
  "radio-tower": ["cell-tower"],
  "chat-bubble": ["chat-teardrop"],
  server: ["hard-drives"],
  webhook: ["webhooks-logo"],
  api: ["plug"],
  container: ["cube", "shipping-container"],
  bracket: ["brackets-curly"],
  bold: ["text-b"],
  italic: ["text-italic"],
  type: ["text-t"],
  "align-center": ["text-align-center"],
  "align-justify": ["text-align-justify"],
  "align-left": ["text-align-left"],
  "align-right": ["text-align-right"],
  "list-ordered": ["list-numbers"],
  "list-unordered": ["list-bullets"],
  "link-2": ["link-simple"],
  "edit-2": ["pencil"],
  "edit-3": ["pencil-line"],
  quote: ["quotes"],
  indent: ["text-indent"],
  outdent: ["text-outdent"],
  volume: ["speaker-high"],
  "volume-1": ["speaker-low"],
  "volume-2": ["speaker-high"],
  "volume-x": ["speaker-x"],
  mic: ["microphone"],
  "mic-off": ["microphone-slash"],
  "video-off": ["video-camera-slash"],
  tv: ["television"],
  "file-text": ["file-text"],
  "folder-zip": ["file-zip"],
  "shield-alert": ["shield-warning"],
  "shield-check": ["shield-check"],
  "alert-circle": ["warning-circle"],
  "alert-triangle": ["warning"],
  "check-circle": ["check-circle"],
  "help-circle": ["question"],
  "loader": ["spinner"],
  "warning-hex": ["warning-diamond"],
  "x-octagon": ["x-circle"],
};
