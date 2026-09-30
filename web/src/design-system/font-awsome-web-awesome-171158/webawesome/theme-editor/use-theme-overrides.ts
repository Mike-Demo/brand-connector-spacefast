import { useCallback, useEffect, useMemo, useState } from "react";

import {
  DEFAULT_OVERRIDES,
  themeCustomProperties,
  type ThemeOverrides,
} from "./theme-tokens";

const STORAGE_KEY = "wa-theme-overrides";

/** Merges a stored (possibly partial or stale) object onto the defaults. */
function normalize(value: unknown): ThemeOverrides {
  if (typeof value !== "object" || value === null) return DEFAULT_OVERRIDES;
  const raw = value as Partial<ThemeOverrides>;
  return {
    colors: { ...DEFAULT_OVERRIDES.colors, ...(raw.colors ?? {}) },
    fonts: { ...DEFAULT_OVERRIDES.fonts, ...(raw.fonts ?? {}) },
    space: { ...DEFAULT_OVERRIDES.space, ...(raw.space ?? {}) },
    shape: { ...DEFAULT_OVERRIDES.shape, ...(raw.shape ?? {}) },
  };
}

export interface ThemeOverridesController {
  readonly overrides: ThemeOverrides;
  /** Replaces one group of overrides, keeping the rest. */
  readonly patch: (patch: {
    colors?: Partial<ThemeOverrides["colors"]>;
    fonts?: Partial<ThemeOverrides["fonts"]>;
    space?: Partial<ThemeOverrides["space"]>;
    shape?: Partial<ThemeOverrides["shape"]>;
  }) => void;
  /** Clears every override, back to the shipped defaults. */
  readonly reset: () => void;
  /** Clears one group. */
  readonly resetGroup: (group: keyof ThemeOverrides) => void;
  /** True once the stored value has been read (client-side only). */
  readonly hydrated: boolean;
}

/**
 * Live theme overrides.
 *
 * Applies `--wa-*` custom properties to `<html>` and remembers them in
 * localStorage, so the whole document — including component shadow roots,
 * which inherit custom properties — retints instantly. Reading and writing
 * happen in effects, so server rendering is unaffected.
 */
export function useThemeOverrides(): ThemeOverridesController {
  const [overrides, setOverrides] = useState<ThemeOverrides>(DEFAULT_OVERRIDES);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setOverrides(normalize(JSON.parse(stored) as unknown));
    } catch {
      // Ignore unreadable or malformed storage; defaults still apply.
    }
    setHydrated(true);
  }, []);

  const properties = useMemo(() => themeCustomProperties(overrides), [overrides]);

  useEffect(() => {
    if (!hydrated) return;
    const root = document.documentElement;
    const names = Object.keys(properties);
    for (const name of names) root.style.setProperty(name, properties[name] as string);

    try {
      const empty = names.length === 0;
      if (empty) window.localStorage.removeItem(STORAGE_KEY);
      else window.localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    } catch {
      // Storage may be unavailable (private mode); live editing still works.
    }

    return () => {
      for (const name of names) root.style.removeProperty(name);
    };
  }, [properties, overrides, hydrated]);

  const patch = useCallback<ThemeOverridesController["patch"]>((next) => {
    setOverrides((current) => ({
      colors: { ...current.colors, ...(next.colors ?? {}) },
      fonts: { ...current.fonts, ...(next.fonts ?? {}) },
      space: { ...current.space, ...(next.space ?? {}) },
      shape: { ...current.shape, ...(next.shape ?? {}) },
    }));
  }, []);

  const reset = useCallback(() => setOverrides(DEFAULT_OVERRIDES), []);

  const resetGroup = useCallback((group: keyof ThemeOverrides) => {
    setOverrides((current) => ({ ...current, [group]: DEFAULT_OVERRIDES[group] }));
  }, []);

  return { overrides, patch, reset, resetGroup, hydrated };
}

export { STORAGE_KEY as THEME_OVERRIDES_STORAGE_KEY };
