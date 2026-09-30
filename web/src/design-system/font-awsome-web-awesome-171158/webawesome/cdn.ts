/**
 * CDN delivery for Web Awesome — optional.
 *
 * By default this design system registers custom elements from the vendored
 * bundle in ./vendor, so nothing is fetched from a third party at runtime.
 * CDN mode is the alternative: the browser loads Web Awesome's own autoloader
 * from a version-pinned CDN, which then registers each element on demand.
 *
 *   Bundle mode  — no network dependency, one larger JS file up front.
 *   CDN mode     — smaller app payload, lazily loaded elements, but the page
 *                  depends on the CDN being reachable.
 *
 * Two CDNs are in play, deliberately:
 *
 *   Stylesheets come from jsDelivr, which serves the published files verbatim
 *   (see ./theme.css). The URLs are exported here too, for projects that
 *   prefer <link> tags in the document head over the CSS import.
 *
 *   JavaScript comes from esm.sh, which rewrites the package's bare imports
 *   into resolvable URLs. Web Awesome's published modules import bare
 *   specifiers (@shoelace-style/animations, @shoelace-style/localize, Lit's
 *   SSR client), so loading them straight off jsDelivr fails in the browser
 *   with "Failed to resolve module specifier" unless the page ships an
 *   import map for every one of them.
 */
import { FONT_AWESOME_VERSION, WEB_AWESOME_VERSION } from "./setup";

/** Font Awesome Free CDN root for the pinned release. */
export const FONT_AWESOME_CDN = `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@${FONT_AWESOME_VERSION}`;

/** jsDelivr root for Web Awesome's published files (stylesheets). */
export const WEB_AWESOME_ASSET_CDN = `https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@${WEB_AWESOME_VERSION}/dist`;

/** esm.sh root for Web Awesome's JavaScript modules (bare imports resolved). */
export const WEB_AWESOME_MODULE_CDN = `https://esm.sh/@awesome.me/webawesome@${WEB_AWESOME_VERSION}/dist`;

/** Web Awesome autoloader — registers elements lazily as they appear. */
export const WEB_AWESOME_LOADER_URL = `${WEB_AWESOME_MODULE_CDN}/webawesome.loader.js`;

/** Web Awesome autoloader with Lit hydration support, for SSR'd markup. */
export const WEB_AWESOME_SSR_LOADER_URL = `${WEB_AWESOME_MODULE_CDN}/webawesome.ssr-loader.js`;

/** Configures where the autoloader resolves components and icons from. */
const WEB_AWESOME_BASE_PATH_URL = `${WEB_AWESOME_MODULE_CDN}/utilities/base-path.js`;

/** Complete Web Awesome stylesheet: base styles, theme, palette, utilities. */
export const WEB_AWESOME_STYLE_URL = `${WEB_AWESOME_ASSET_CDN}/styles/webawesome.css`;

/** Font Awesome Free stylesheet: fa-* utility classes and webfonts. */
export const FONT_AWESOME_STYLE_URL = `${FONT_AWESOME_CDN}/css/all.min.css`;

/** Where <wa-icon> fetches SVGs from. */
export const FONT_AWESOME_ICON_PATH = `${FONT_AWESOME_CDN}/svgs`;

/** Anti-FOUCE utility stylesheet: wa-cloak hides unregistered elements. */
export const WEB_AWESOME_FOUCE_STYLE_URL = `${WEB_AWESOME_ASSET_CDN}/styles/utilities/fouce.css`;

/** Both stylesheets, in load order, for <link rel="stylesheet"> tags. */
export const WEB_AWESOME_STYLE_URLS = [WEB_AWESOME_STYLE_URL, FONT_AWESOME_STYLE_URL] as const;

/** The pinned releases the URLs above point at. */
export const CDN_VERSIONS = {
  webAwesome: WEB_AWESOME_VERSION,
  fontAwesome: FONT_AWESOME_VERSION,
} as const;

export interface CdnLoadOptions {
  /**
   * Load the hydration-aware loader instead of the standard one. Required
   * when <wa-*> markup is server-rendered with declarative shadow DOM.
   */
  hydrate?: boolean;
}

interface BasePathModule {
  setBasePath: (path: string) => void;
  setIconPath: (path: string) => void;
}

let loadPromise: Promise<void> | undefined;

/**
 * Loads Web Awesome from the pinned CDN. Browser-only and idempotent: repeat
 * calls reuse the first load, so elements are never registered twice.
 *
 * Order matters. The autoloader starts registering elements the moment its
 * module evaluates, and it resolves component files against a base path it
 * only auto-detects for same-origin scripts. So the base-path module is
 * imported and configured FIRST — base path to the CDN's module root, icon
 * path to the pinned Font Awesome release (the stock resolver targets an older
 * release whose CDN 404s for icons added since) — and the autoloader second.
 */
export function loadWebAwesomeFromCdn(options: CdnLoadOptions = {}): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();
  loadPromise ??= (async () => {
    const basePath = (await import(
      /* @vite-ignore */ WEB_AWESOME_BASE_PATH_URL
    )) as BasePathModule;
    basePath.setBasePath(WEB_AWESOME_MODULE_CDN);
    basePath.setIconPath(FONT_AWESOME_ICON_PATH);

    await import(
      /* @vite-ignore */ options.hydrate ? WEB_AWESOME_SSR_LOADER_URL : WEB_AWESOME_LOADER_URL
    );
  })();
  return loadPromise;
}


