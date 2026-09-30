import { forwardRef } from "react";
import type { ReactNode } from "react";

import { type WaBaseProps, waAttributes } from "./create-component";

export interface WaIncludeProps extends WaBaseProps {
  /**
   * The location of the content to include. This can be a URL to an HTML file, a same-page reference to an element's id
   * (e.g. `#my-id`), or a URL with a fragment that targets an element's id within the fetched file
   * (e.g. `/partials.html#my-id`). When targeting an element by id, its content is cloned. If the target is a
   * `<template>`, its child nodes are cloned. Be sure you trust the content you are including as it will be executed as
   * code and can result in XSS attacks.
   */
  src?: string;

  /**
   * The fetch mode to use.
   * @default 'cors'
   */
  mode?: 'cors' | 'no-cors' | 'same-origin';

  /**
   * Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
   * code and can result in XSS attacks.
   * @default false
   */
  "allow-scripts"?: boolean;

  dir?: string;

  lang?: string;

  "did-ssr"?: string;
}

/**
 * Fetches an external HTML file and embeds its contents inline on the page. Useful for reusing shared markup
 * Renders the `<wa-include>` Web Awesome custom element.
 * Events: wa-load, wa-include-error (listen with the matching on* prop or a ref).
 */
export const WaInclude = forwardRef<HTMLElement, WaIncludeProps>(function WaInclude(
  { children, ...props }: WaIncludeProps,
  ref,
): ReactNode {
  return (
    <wa-include ref={ref} {...waAttributes(props)}>
      {children}
    </wa-include>
  );
});
