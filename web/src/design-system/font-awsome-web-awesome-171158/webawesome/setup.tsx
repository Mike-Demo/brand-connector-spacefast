import { useEffect } from "react";

/** Pinned Web Awesome release the vendor bundle and stylesheets come from. */
export const WEB_AWESOME_VERSION = "3.12.0";

/** Pinned Font Awesome Free release the icon set is loaded from. */
export const FONT_AWESOME_VERSION = "7.3.1";

/** Base URL for the pinned Web Awesome stylesheets (see theme.css). */
export const WEB_AWESOME_CDN = `https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@${WEB_AWESOME_VERSION}/dist`;

/**
 * Classes for the root <html> element. They activate the default theme,
 * the default color palette, and light color scheme. Swap "wa-light" for
 * "wa-dark" (or toggle it at runtime) for dark mode.
 */
export const WEB_AWESOME_HTML_CLASSES = "wa-theme-default wa-palette-default wa-light";

/**
 * Client-side bootstrap for Web Awesome custom elements.
 *
 * Mount once INSIDE your page content (e.g. in a shared layout that route
 * components render), not above lazy route boundaries. Its effect fires
 * after the surrounding tree hydrates and imports the vendor bundle that
 * registers every <wa-*> element. The bundle ships with this design system,
 * so no npm install is required at runtime.
 *
 * Mounting it above a lazy route (e.g. the root route) can register
 * elements while the route's SSR markup is still hydrating; the upgrade
 * reflects attributes onto the DOM mid-hydration and React logs a
 * hydration-mismatch warning. Mounting inside the routed content makes
 * registration strictly post-hydration.
 *
 * Loading is browser-only and runs once per document. Server-rendered
 * <wa-*> markup is fine — the tags ship as plain HTML and upgrade in the
 * browser once the bundle arrives.
 *
 * Two optional modes:
 *   source="cdn"   loads Web Awesome's own autoloader from the pinned CDN
 *                  instead of the bundle shipped with this design system.
 *   hydrate        loads the hydration-aware build, required only when
 *                  <wa-*> markup is server-rendered with declarative
 *                  shadow DOM (see ./ssr).
 */
export interface WebAwesomeLoaderProps {
  /** Where element definitions come from. Defaults to the shipped bundle. */
  source?: "bundle" | "cdn";
  /** Hydrate server-rendered declarative shadow roots instead of replacing them. */
  hydrate?: boolean;
}

export function WebAwesomeLoader({
  source = "bundle",
  hydrate = false,
}: WebAwesomeLoaderProps = {}): null {
  useEffect(() => {
    const flag = window as typeof window & { __waLoaderStarted?: boolean };
    if (flag.__waLoaderStarted) return;
    flag.__waLoaderStarted = true;

    void (async () => {
      if (hydrate) {
        // Lets the FOUC rule in theme.css apply only in SSR mode, where
        // elements that were not server-rendered stay hidden until defined.
        document.documentElement.dataset["waSsr"] = "";
      }

      if (source === "cdn") {
        const { loadWebAwesomeFromCdn } = await import("./cdn");
        await loadWebAwesomeFromCdn({ hydrate });
        return;
      }

      // Element definitions come from a self-contained vendor bundle that
      // ships with this design system (see scripts/build-vendor.ts), so
      // consumers need no npm install and no JavaScript CDN. Importing it
      // registers all 70 <wa-*> elements and pins the Font Awesome icon
      // path to FONT_AWESOME_VERSION.
      if (hydrate) {
        await import("./vendor/webawesome.ssr.bundle.js");
        return;
      }
      await import("./vendor/webawesome.bundle.js");
    })();
  }, [source, hydrate]);

  return null;
}


