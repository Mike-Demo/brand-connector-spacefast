import type { CSSProperties, ReactNode } from "react";

/**
 * Props every Web Awesome wrapper accepts on top of its own attributes.
 *
 * Wrappers forward their ref to the custom element host and spread any
 * remaining props onto it, so `id`, `slot`, `aria-*`, `data-*`, and event
 * handlers all pass straight through.
 */
export interface WaBaseProps {
  /** Content rendered into the element's default slot. */
  children?: ReactNode;
  /** Additional classes merged onto the custom element host. */
  className?: string;
  /** Inline styles, including `--wa-*` custom properties. */
  style?: CSSProperties;
  /** Element id. */
  id?: string;
  /** Slot name when the element is placed inside another component's slot. */
  slot?: string;
  /** Native `title` attribute (tooltip text). */
  title?: string;
  /** Any other attribute, `data-*`, `aria-*`, or event handler. */
  [key: string]: unknown;
}

/**
 * Normalises props for a custom element.
 *
 * React stringifies unknown props, which would turn `open={false}` into
 * `open="false"` — and Web Awesome treats a present boolean attribute as
 * true regardless of its value. Booleans are therefore emitted as `""`
 * when true and omitted when false. `className` becomes `class`, and
 * `undefined`/`null` values are dropped.
 */
export function waAttributes(props: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null) continue;

    if (key === "className") {
      out["class"] = value;
      continue;
    }

    if (typeof value === "boolean") {
      if (value) out[key] = "";
      continue;
    }

    out[key] = value;
  }

  return out;
}
