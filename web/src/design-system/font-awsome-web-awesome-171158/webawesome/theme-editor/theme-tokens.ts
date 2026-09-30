/**
 * The editable theme model.
 *
 * A single `ThemeOverrides` object describes every knob the theme editor
 * exposes. It is serialised two ways from the same source of truth:
 *
 *   - `themeCustomProperties()` → a map applied live to `<html>`
 *   - `serializeThemeCss()`     → the CSS written into brand.css
 *
 * Everything resolves to `--wa-*` design tokens; no component is styled
 * directly, so swapping the underlying Web Awesome theme keeps working.
 */

/** Semantic color groups a project can retint. */
export const SEMANTIC_GROUPS = ["brand", "neutral", "success", "warning", "danger"] as const;
export type SemanticGroup = (typeof SEMANTIC_GROUPS)[number];

/** Palette steps Web Awesome defines for every semantic group. */
const RAMP_STEPS = ["95", "90", "80", "70", "60", "50", "40", "30", "20", "10", "05"] as const;

/**
 * Lightness/chroma curve of the stock Web Awesome ramps, in OKLCH. Ramps
 * generated from it read as part of the system rather than as a foreign
 * palette. `chroma` is a multiplier applied to the picked color's chroma.
 */
const RAMP_CURVE: Record<(typeof RAMP_STEPS)[number], { lightness: number; chroma: number }> = {
  "95": { lightness: 0.964, chroma: 0.1 },
  "90": { lightness: 0.925, chroma: 0.22 },
  "80": { lightness: 0.846, chroma: 0.46 },
  "70": { lightness: 0.767, chroma: 0.7 },
  "60": { lightness: 0.688, chroma: 0.87 },
  "50": { lightness: 0.589, chroma: 1 },
  "40": { lightness: 0.487, chroma: 0.94 },
  "30": { lightness: 0.412, chroma: 0.74 },
  "20": { lightness: 0.333, chroma: 0.55 },
  "10": { lightness: 0.243, chroma: 0.39 },
  "05": { lightness: 0.19, chroma: 0.31 },
};

/** Font stacks offered for body, heading, and code text. */
export interface FontChoice {
  readonly id: string;
  readonly label: string;
  readonly stack: string;
}

export const FONT_CHOICES: readonly FontChoice[] = [
  { id: "system-sans", label: "System sans", stack: "ui-sans-serif, system-ui, sans-serif" },
  { id: "system-serif", label: "System serif", stack: "ui-serif, Georgia, serif" },
  { id: "system-mono", label: "System mono", stack: "ui-monospace, monospace" },
  {
    id: "geometric",
    label: "Geometric sans",
    stack: '"Avenir Next", "Century Gothic", ui-sans-serif, sans-serif',
  },
  {
    id: "grotesque",
    label: "Neo-grotesque",
    stack: '"Helvetica Neue", Arial, ui-sans-serif, sans-serif',
  },
  {
    id: "humanist",
    label: "Humanist sans",
    stack: '"Segoe UI", Tahoma, ui-sans-serif, sans-serif',
  },
  { id: "transitional", label: "Transitional serif", stack: 'Charter, "Times New Roman", serif' },
  { id: "slab", label: "Slab serif", stack: 'Rockwell, "Courier New", ui-serif, serif' },
];

export interface ThemeOverrides {
  /** Picked hex color per semantic group; `null` keeps the stock ramp. */
  readonly colors: Readonly<Record<SemanticGroup, string | null>>;
  readonly fonts: {
    /** Font choice id from FONT_CHOICES, or `null` for the stock stack. */
    readonly body: string | null;
    readonly heading: string | null;
    readonly code: string | null;
    /** Multiplier on the whole type scale. `null` keeps 1. */
    readonly sizeScale: number | null;
  };
  readonly space: {
    /** Multiplier on the whole spacing scale. */
    readonly scale: number | null;
    /** Form control padding in `em`, driving control height too. */
    readonly densityBlock: number | null;
    readonly densityInline: number | null;
  };
  readonly shape: {
    /** Multiplier on the border radius scale. */
    readonly radiusScale: number | null;
    /** Multiplier on shadow blur, offset, and spread. */
    readonly shadowScale: number | null;
  };
}

/** Stock values — an all-`null` override set means "ship Web Awesome's defaults". */
export const DEFAULT_OVERRIDES: ThemeOverrides = {
  colors: { brand: null, neutral: null, success: null, warning: null, danger: null },
  fonts: { body: null, heading: null, code: null, sizeScale: null },
  space: { scale: null, densityBlock: null, densityInline: null },
  shape: { radiusScale: null, shadowScale: null },
};

/** Stock reference values, used as slider starting points. */
export const STOCK_VALUES = {
  sizeScale: 1,
  spaceScale: 1,
  densityBlock: 0.75,
  densityInline: 1,
  radiusScale: 1,
  shadowScale: 1,
} as const;

/** Stock shadow axis scales from tokens.css; the slider multiplies these. */
const STOCK_SHADOW = { offsetX: 0, offsetY: 1, blur: 1, spread: -0.5 } as const;

/** True when nothing is overridden. */
export function isDefaultOverrides(overrides: ThemeOverrides): boolean {
  return Object.keys(themeCustomProperties(overrides)).length === 0;
}

/* ------------------------------------------------------------------ color */

interface Oklch {
  lightness: number;
  chroma: number;
  hue: number;
}

function srgbToLinear(channel: number): number {
  return channel <= 0.04045 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
}

/** Parses `#rgb`/`#rrggbb` (and `#rrggbbaa`, alpha ignored) into OKLCH. */
export function hexToOklch(hex: string): Oklch | null {
  const value = hex.trim().replace(/^#/, "");
  const expanded =
    value.length === 3
      ? value
          .split("")
          .map((c) => c + c)
          .join("")
      : value.slice(0, 6);
  if (!/^[0-9a-f]{6}$/i.test(expanded)) return null;

  const [r, g, b] = [0, 2, 4].map((offset) =>
    srgbToLinear(parseInt(expanded.slice(offset, offset + 2), 16) / 255),
  ) as [number, number, number];

  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);

  const lightness = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const a = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const bb = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;

  const chroma = Math.sqrt(a * a + bb * bb);
  const hue = ((Math.atan2(bb, a) * 180) / Math.PI + 360) % 360;
  return { lightness, chroma, hue };
}

function round(value: number, places: number): number {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
}

/**
 * Builds the eleven-step ramp for one semantic group from a picked color.
 *
 * The picked color decides hue and saturation; lightness follows the stock
 * curve so contrast pairings (`fill-*` against `on-*`) keep working in both
 * light and dark mode.
 */
export function rampFromColor(group: SemanticGroup, hex: string): Record<string, string> {
  const picked = hexToOklch(hex);
  if (!picked) return {};

  // Keep the picked chroma in a range the ramp can carry: a near-grey pick
  // stays neutral, a vivid pick stays vivid, without ever leaving gamut.
  const baseChroma = Math.min(picked.chroma, 0.23);
  const out: Record<string, string> = {};

  for (const step of RAMP_STEPS) {
    const { lightness, chroma } = RAMP_CURVE[step];
    out[`--wa-color-${group}-${step}`] =
      `oklch(${round(lightness * 100, 2)}% ${round(baseChroma * chroma, 4)} ${round(picked.hue, 2)})`;
  }
  out[`--wa-color-${group}`] = `var(--wa-color-${group}-${group === "neutral" ? "40" : "50"})`;
  return out;
}

/* ------------------------------------------------------------- properties */

/** The `--wa-*` custom properties a set of overrides produces. */
export function themeCustomProperties(overrides: ThemeOverrides): Record<string, string> {
  const out: Record<string, string> = {};

  for (const group of SEMANTIC_GROUPS) {
    const hex = overrides.colors[group];
    if (hex) Object.assign(out, rampFromColor(group, hex));
  }

  const fontStack = (id: string | null): string | null =>
    FONT_CHOICES.find((choice) => choice.id === id)?.stack ?? null;

  const body = fontStack(overrides.fonts.body);
  const heading = fontStack(overrides.fonts.heading);
  const code = fontStack(overrides.fonts.code);
  if (body) out["--wa-font-family-body"] = body;
  if (heading) out["--wa-font-family-heading"] = heading;
  if (code) out["--wa-font-family-code"] = code;
  if (overrides.fonts.sizeScale !== null) {
    out["--wa-font-size-scale"] = String(overrides.fonts.sizeScale);
  }

  if (overrides.space.scale !== null) out["--wa-space-scale"] = String(overrides.space.scale);
  if (overrides.space.densityBlock !== null) {
    out["--wa-form-control-padding-block"] = `${overrides.space.densityBlock}em`;
  }
  if (overrides.space.densityInline !== null) {
    out["--wa-form-control-padding-inline"] = `${overrides.space.densityInline}em`;
  }

  if (overrides.shape.radiusScale !== null) {
    out["--wa-border-radius-scale"] = String(overrides.shape.radiusScale);
  }
  if (overrides.shape.shadowScale !== null) {
    // Multiply the stock shadow shape rather than flattening every axis to the
    // same number: offset-x stays 0, offset-y and blur grow, and spread keeps
    // its negative sign so shadows tighten instead of bulging outward.
    const factor = overrides.shape.shadowScale;
    out["--wa-shadow-offset-x-scale"] = String(round(STOCK_SHADOW.offsetX * factor, 4));
    out["--wa-shadow-offset-y-scale"] = String(round(STOCK_SHADOW.offsetY * factor, 4));
    out["--wa-shadow-blur-scale"] = String(round(STOCK_SHADOW.blur * factor, 4));
    out["--wa-shadow-spread-scale"] = String(round(STOCK_SHADOW.spread * factor, 4));
  }

  return out;
}

const BRAND_CSS_HEADER = `/*
 * Brand overrides — the design system's own defaults.
 *
 * Generated by the theme editor (see src/webawesome/theme-editor). Tokens
 * live inside the wa-theme layer so themes stay swappable, and they are the
 * ONLY place raw color values belong. Edit through the editor rather than by
 * hand so the two never disagree.
 */`;

/** The full contents of brand.css for a set of overrides. */
export function serializeThemeCss(overrides: ThemeOverrides): string {
  const properties = themeCustomProperties(overrides);
  const names = Object.keys(properties);

  if (names.length === 0) {
    return `${BRAND_CSS_HEADER}\n\n/* No overrides: the stock Web Awesome default theme ships as-is. */\n`;
  }

  const declarations = names.map((name) => `    ${name}: ${properties[name]};`).join("\n");
  return `${BRAND_CSS_HEADER}\n\n@layer wa-theme {\n  :root,\n  .wa-theme-default {\n${declarations}\n  }\n}\n`;
}
