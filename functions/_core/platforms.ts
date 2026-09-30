// Platform registry: pure, browser-safe. Add a platform here and it is picked up
// by extraction, fallback search, and the UI automatically.

export type PlatformId =
  | "x"
  | "threads"
  | "instagram"
  | "facebook"
  | "linkedin"
  | "bluesky"
  | "tumblr"
  | "tiktok"
  | "producthunt"
  | "youtube"
  | "pinterest"
  | "github"
  | "tweetapp";

export interface ParsedProfile {
  handle: string;
  tag: string;
  url: string;
}

export interface PlatformProbe {
  /** URL fetched to test whether a guessed handle exists (public page or public API). */
  url: (handle: string) => string;
  /** Canonical profile URL for that handle; parsed back through `parse`. */
  profileUrl: (handle: string) => string;
  accept?: string;
}

export interface PlatformDef {
  id: PlatformId;
  name: string;
  searchHost: string;
  parse: (host: string, segs: string[]) => ParsedProfile | null;
  /** Direct existence check (Tier 3). Omitted for platforms that wall off logged-out visitors. */
  probe?: PlatformProbe;
}

const COMMON_RESERVED = new Set([
  "share",
  "sharer",
  "sharer.php",
  "intent",
  "home",
  "hashtag",
  "search",
  "i",
  "login",
  "signup",
  "explore",
  "privacy",
  "legal",
  "about",
  "help",
  "settings",
  "tos",
  "terms",
  "dialog",
  "plugins",
  "tr",
  "watch",
  "embed",
]);

const HANDLE_RE = /^[A-Za-z0-9._-]{1,100}$/;

function simple(
  segs: string[],
  reserved: string[],
  build: (h: string) => ParsedProfile,
): ParsedProfile | null {
  const h = segs[0]?.replace(/^@/, "");
  if (!h || !HANDLE_RE.test(h)) return null;
  const lower = h.toLowerCase();
  if (COMMON_RESERVED.has(lower) || reserved.includes(lower)) return null;
  return build(h);
}

export const PLATFORMS: PlatformDef[] = [
  {
    id: "x",
    name: "X (Twitter)",
    searchHost: "x.com",
    parse: (host, segs) =>
      host === "x.com" || host === "twitter.com"
        ? simple(segs, ["messages", "notifications", "compose"], (h) => ({
            handle: h,
            tag: `@${h}`,
            url: `https://x.com/${h}`,
          }))
        : null,
  },
  {
    id: "threads",
    name: "Threads",
    searchHost: "threads.net",
    parse: (host, segs) =>
      (host === "threads.net" || host === "threads.com") && segs[0]?.startsWith("@")
        ? simple(segs, [], (h) => ({ handle: h, tag: `@${h}`, url: `https://www.threads.net/@${h}` }))
        : null,
  },
  {
    id: "instagram",
    name: "Instagram",
    searchHost: "instagram.com",
    parse: (host, segs) =>
      host === "instagram.com"
        ? simple(segs, ["p", "reel", "reels", "stories", "accounts", "tv", "direct"], (h) => ({
            handle: h,
            tag: `@${h}`,
            url: `https://www.instagram.com/${h}`,
          }))
        : null,
  },
  {
    id: "facebook",
    name: "Facebook",
    searchHost: "facebook.com",
    parse: (host, segs) => {
      if (host !== "facebook.com" && host !== "fb.com") return null;
      const s = segs[0]?.toLowerCase() === "pages" ? segs.slice(1) : segs;
      return simple(s, ["profile.php", "groups", "events", "photo", "photos", "watch", "people"], (h) => ({
        handle: h,
        tag: `@${h}`,
        url: `https://www.facebook.com/${h}`,
      }));
    },
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    searchHost: "linkedin.com",
    parse: (host, segs) => {
      if (host !== "linkedin.com") return null;
      const kind = segs[0]?.toLowerCase();
      if (!kind || !["company", "school", "showcase", "in"].includes(kind)) return null;
      return simple(segs.slice(1), [], (h) => ({
        handle: `${kind}/${h}`,
        tag: h,
        url: `https://www.linkedin.com/${kind}/${h}`,
      }));
    },
  },
  {
    id: "bluesky",
    name: "Bluesky",
    searchHost: "bsky.app",
    parse: (host, segs) =>
      host === "bsky.app" && segs[0] === "profile"
        ? simple(segs.slice(1), [], (h) => ({ handle: h, tag: `@${h}`, url: `https://bsky.app/profile/${h}` }))
        : null,
  },
  {
    id: "tumblr",
    name: "Tumblr",
    searchHost: "tumblr.com",
    parse: (host, segs) => {
      const build = (h: string): ParsedProfile => ({ handle: h, tag: `@${h}`, url: `https://www.tumblr.com/${h}` });
      if (host.endsWith(".tumblr.com")) {
        const sub = host.slice(0, -".tumblr.com".length);
        return HANDLE_RE.test(sub) && !["www", "assets", "static"].includes(sub) ? build(sub) : null;
      }
      if (host !== "tumblr.com") return null;
      const s = segs[0] === "blog" ? segs.slice(1) : segs;
      return simple(s, ["tagged", "dashboard", "register", "widgets"], build);
    },
  },
  {
    id: "tiktok",
    name: "TikTok",
    searchHost: "tiktok.com",
    parse: (host, segs) =>
      host === "tiktok.com" && segs[0]?.startsWith("@")
        ? simple(segs, [], (h) => ({ handle: h, tag: `@${h}`, url: `https://www.tiktok.com/@${h}` }))
        : null,
  },
  {
    id: "producthunt",
    name: "Product Hunt",
    searchHost: "producthunt.com",
    parse: (host, segs) => {
      if (host !== "producthunt.com") return null;
      if (segs[0] === "products" && segs[1])
        return simple(segs.slice(1), [], (h) => ({ handle: h, tag: h, url: `https://www.producthunt.com/products/${h}` }));
      if (segs[0]?.startsWith("@"))
        return simple(segs, [], (h) => ({ handle: h, tag: `@${h}`, url: `https://www.producthunt.com/@${h}` }));
      return null;
    },
  },
  {
    id: "youtube",
    name: "YouTube",
    searchHost: "youtube.com",
    parse: (host, segs) => {
      if (host !== "youtube.com") return null;
      if (segs[0]?.startsWith("@"))
        return simple(segs, [], (h) => ({ handle: h, tag: `@${h}`, url: `https://www.youtube.com/@${h}` }));
      if (["c", "user", "channel"].includes(segs[0] ?? "") && segs[1])
        return simple(segs.slice(1), [], (h) => ({
          handle: h,
          tag: h,
          url: `https://www.youtube.com/${segs[0]}/${h}`,
        }));
      return null;
    },
  },
  {
    id: "pinterest",
    name: "Pinterest",
    searchHost: "pinterest.com",
    parse: (host, segs) =>
      host === "pinterest.com"
        ? simple(segs, ["pin", "ideas", "today", "business"], (h) => ({
            handle: h,
            tag: `@${h}`,
            url: `https://www.pinterest.com/${h}`,
          }))
        : null,
  },
  {
    id: "github",
    name: "GitHub",
    searchHost: "github.com",
    parse: (host, segs) => {
      if (host !== "github.com") return null;
      const s = segs[0] === "orgs" ? segs.slice(1) : segs;
      return simple(s, ["features", "sponsors", "marketplace", "topics", "enterprise", "pricing"], (h) => ({
        handle: h,
        tag: `@${h}`,
        url: `https://github.com/${h}`,
      }));
    },
  },
  {
    id: "tweetapp",
    name: "Tweet.app",
    searchHost: "tweet.app",
    parse: (host, segs) =>
      host === "tweet.app"
        ? simple(segs, [], (h) => ({ handle: h, tag: `@${h}`, url: `https://tweet.app/${h}` }))
        : null,
  },
];

export function normalizeHost(host: string): string {
  return host.toLowerCase().replace(/^(www\.|m\.|mobile\.)/, "");
}

export function matchProfile(rawUrl: string): { platform: PlatformDef; profile: ParsedProfile } | null {
  let u: URL;
  try {
    u = new URL(rawUrl);
  } catch {
    return null;
  }
  if (!/^https?:$/.test(u.protocol)) return null;
  const host = normalizeHost(u.hostname);
  const segs = u.pathname.split("/").filter(Boolean).map(decodeURIComponent);
  for (const platform of PLATFORMS) {
    const profile = platform.parse(host, segs);
    if (profile) return { platform, profile };
  }
  return null;
}

export const SOCIAL_HOSTS = [
  "x.com",
  "twitter.com",
  "threads.net",
  "threads.com",
  "instagram.com",
  "facebook.com",
  "linkedin.com",
  "bsky.app",
  "tumblr.com",
  "tiktok.com",
  "producthunt.com",
  "youtube.com",
  "pinterest.com",
  "github.com",
  "tweet.app",
  "wikipedia.org",
  "duckduckgo.com",
];
