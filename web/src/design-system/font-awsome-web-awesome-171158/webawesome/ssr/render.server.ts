/**
 * Server-side rendering of Web Awesome markup — opt-in and experimental.
 *
 * Web Awesome's SSR support (https://webawesome.com/docs/ssr) renders each
 * component's shadow root into the HTML as a declarative shadow DOM template,
 * so a <wa-*> element already looks roughly like its final self before its
 * JavaScript runs. It reduces layout shift and gives crawlers real markup; it
 * does NOT make components work without JavaScript.
 *
 * IMPORTANT — this module is deliberately NOT part of the design system's
 * default path and is NOT re-exported from the barrel:
 *
 *   - It is the one piece that needs npm packages at runtime. A project that
 *     wants it must install `@awesome.me/webawesome` and Lit's SSR packages
 *     itself; everything else in this design system stays install-free.
 *   - Lit's SSR package is experimental and expects a Node-like server. Treat
 *     it as build-time / Node-only rendering (static generation, prerendering)
 *     rather than something to put on a hot request path in a serverless edge
 *     runtime.
 *   - It renders an HTML *string*, so it suits static blocks of markup, not a
 *     React tree. React SSR does not produce the declarative shadow roots.
 *
 * Usage (after installing the packages above), inside a server-only module:
 *
 *   import { renderWebAwesomeMarkup } from "<design-system>/webawesome/ssr/render.server";
 *
 *   const html = await renderWebAwesomeMarkup(
 *     `<wa-card with-header>
 *        <h3 slot="header">Pricing</h3>
 *        <wa-button variant="brand">Choose plan</wa-button>
 *      </wa-card>`,
 *   );
 *
 * Then inject `html` as raw HTML and mount `<WebAwesomeLoader hydrate />` so
 * the server-rendered shadow roots are hydrated rather than replaced.
 *
 * Remember the `with-*` attributes: components that decide what to render from
 * slot content (card header/footer, dialog footer, input label/hint, ...) can't
 * inspect slots on the server, so the matching `with-*` attribute is required
 * for those parts to appear in the server-rendered markup.
 *
 * Known SSR gaps, per Web Awesome's docs: <wa-icon> renders an empty SVG,
 * <wa-qr-code> and chart components need a browser canvas, <wa-animated-image>
 * has no static fallback, localization always falls back to English, and `dir`
 * is not inherited. Never set properties on an element before awaiting
 * `customElements.whenDefined(tag)` and its `updateComplete`, or Lit throws a
 * hydration error.
 */

/** Renders a string of <wa-*> HTML to declarative-shadow-DOM markup. */
export async function renderWebAwesomeMarkup(html: string): Promise<string> {
  // Imported lazily and by string specifier so the module only resolves when a
  // project has actually installed the packages, and never enters a client or
  // edge bundle by accident.
  await import(/* @vite-ignore */ "@awesome.me/webawesome/dist/ssr/all.js");
  const { renderString } = (await import(
    /* @vite-ignore */ "@awesome.me/webawesome/dist/ssr/render-string.js"
  )) as { renderString: (markup: string) => string };

  return renderString(html);
}
