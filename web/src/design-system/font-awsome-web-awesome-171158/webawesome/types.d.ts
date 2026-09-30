/*
 * JSX support for the raw Web Awesome custom-element tags.
 *
 * Prefer the typed React wrappers in ./react (WaButton, WaCard, ...) — they
 * document each element's props. This declaration exists so writing a
 * `<wa-*>` tag directly in JSX also typechecks, and it is intentionally
 * self-contained: it pulls in no npm typings, so it keeps working when Web
 * Awesome is loaded from the CDN.
 */
import type { HTMLAttributes } from "react";

interface WaElementAttributes extends HTMLAttributes<HTMLElement> {
  [attribute: string]: unknown;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tag: `wa-${string}`]: WaElementAttributes;
    }
  }
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      [tag: `wa-${string}`]: WaElementAttributes;
    }
  }
}
