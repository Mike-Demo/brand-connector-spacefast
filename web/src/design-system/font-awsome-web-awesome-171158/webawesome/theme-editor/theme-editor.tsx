import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from "react";

import { WaButton } from "../react/button";
import { WaCallout } from "../react/callout";
import { WaIcon } from "../react/icon";

import {
  FONT_CHOICES,
  SEMANTIC_GROUPS,
  STOCK_VALUES,
  isDefaultOverrides,
  serializeThemeCss,
  type SemanticGroup,
  type ThemeOverrides,
} from "./theme-tokens";
import { useThemeOverrides, type ThemeOverridesController } from "./use-theme-overrides";

import "./theme-editor.css";

/** Listens for native custom-element events, which React does not surface. */
function useElementEvent<T extends HTMLElement>(
  ref: RefObject<T | null>,
  events: readonly string[],
  handler: (event: Event) => void,
): void {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;
  const key = events.join(",");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const names = key.split(",");
    const listener = (event: Event) => handlerRef.current(event);
    for (const name of names) element.addEventListener(name, listener);
    return () => {
      for (const name of names) element.removeEventListener(name, listener);
    };
  }, [ref, key]);
}

interface ControlValue {
  value?: string;
}

/** Color swatch + picker for one semantic group. */
function ColorControl({
  group,
  value,
  onChange,
}: {
  group: SemanticGroup;
  value: string | null;
  onChange: (hex: string | null) => void;
}): ReactElement {
  const ref = useRef<HTMLElement | null>(null);
  const fallback = `var(--wa-color-${group}-${group === "neutral" ? "40" : "50"})`;

  useElementEvent(ref, ["input", "change"], () => {
    const next = (ref.current as (HTMLElement & ControlValue) | null)?.value;
    if (next) onChange(next);
  });

  return (
    <div className="wa-stack wa-gap-2xs">
      <div className="wa-split wa-gap-xs wa-align-items-center">
        <label className="wa-theme-editor__label" htmlFor={`wa-theme-color-${group}`}>
          {group}
        </label>
        {value ? (
          <WaButton
            appearance="plain"
            size="small"
            onClick={() => onChange(null)}
            aria-label={`Reset ${group} color`}
          >
            <WaIcon name="rotate-left" label={`Reset ${group} color`}></WaIcon>
          </WaButton>
        ) : null}
      </div>
      <div className="wa-cluster wa-gap-xs wa-align-items-center">
        <wa-color-picker
          id={`wa-theme-color-${group}`}
          size="small"
          format="hex"
          value={value ?? ""}
          aria-label={`${group} color`}
          ref={(element: HTMLElement | null) => {
            ref.current = element;
          }}
        ></wa-color-picker>
        <span className="wa-theme-editor__swatch" style={{ background: value ?? fallback }} />
        <code className="wa-theme-editor__value">{value ?? "default"}</code>
      </div>
    </div>
  );
}

/** Labelled slider bound to a numeric override. */
function ScaleControl({
  id,
  label,
  hint,
  min,
  max,
  step,
  stock,
  value,
  onChange,
}: {
  id: string;
  label: string;
  hint?: string;
  min: number;
  max: number;
  step: number;
  stock: number;
  value: number | null;
  onChange: (next: number | null) => void;
}): ReactElement {
  const ref = useRef<HTMLElement | null>(null);

  useElementEvent(ref, ["input", "change"], () => {
    const next = (ref.current as (HTMLElement & { value?: number }) | null)?.value;
    if (typeof next === "number") onChange(next === stock ? null : next);
  });

  return (
    <div className="wa-stack wa-gap-2xs">
      <div className="wa-split wa-gap-xs wa-align-items-center">
        <label className="wa-theme-editor__label" htmlFor={id}>
          {label}
        </label>
        <code className="wa-theme-editor__value">{(value ?? stock).toFixed(2)}×</code>
      </div>
      <wa-slider
        id={id}
        min={min}
        max={max}
        step={step}
        value={value ?? stock}
        with-tooltip="never"
        ref={(element: HTMLElement | null) => {
          ref.current = element;
        }}
      ></wa-slider>
      {hint ? <p className="wa-theme-editor__hint">{hint}</p> : null}
    </div>
  );
}

/** Font family picker for one text role. */
function FontControl({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string | null;
  onChange: (next: string | null) => void;
}): ReactElement {
  const ref = useRef<HTMLElement | null>(null);

  useElementEvent(ref, ["change"], () => {
    const next = (ref.current as (HTMLElement & ControlValue) | null)?.value ?? "";
    onChange(next === "" ? null : next);
  });

  return (
    <wa-select
      id={id}
      label={label}
      size="small"
      value={value ?? ""}
      ref={(element: HTMLElement | null) => {
        ref.current = element;
      }}
    >
      <wa-option value="">System default</wa-option>
      {FONT_CHOICES.map((choice) => (
        <wa-option key={choice.id} value={choice.id}>
          {choice.label}
        </wa-option>
      ))}
    </wa-select>
  );
}

function Group({
  title,
  icon,
  onReset,
  children,
}: {
  title: string;
  icon: string;
  onReset: () => void;
  children: ReactNode;
}): ReactElement {
  return (
    <section className="wa-theme-editor__group wa-stack wa-gap-m">
      <div className="wa-split wa-gap-s wa-align-items-center">
        {/* h2: group titles sit directly under the page h1 in the outline */}
        <h2 className="wa-theme-editor__group-title wa-cluster wa-gap-2xs wa-align-items-center">
          <WaIcon name={icon}></WaIcon>
          {title}
        </h2>
        <WaButton appearance="plain" size="small" onClick={onReset}>
          Reset
        </WaButton>
      </div>
      {children}
    </section>
  );
}

export interface ThemeEditorProps {
  /**
   * Called with the generated CSS when the user asks to save it as the
   * system default. Omit it to hide the save button and offer copying only.
   */
  readonly onSave?: (css: string, overrides: ThemeOverrides) => Promise<void> | void;
  /** Extra classes on the panel. */
  readonly className?: string;
  /** Receives the live controller, e.g. to preview values elsewhere. */
  readonly onController?: (controller: ThemeOverridesController) => void;
}

/**
 * Theme editor panel.
 *
 * Edits the design system's color, type, spacing, and shape tokens live —
 * every change is applied to `<html>` as `--wa-*` custom properties, so the
 * entire document (including component shadow roots) updates immediately and
 * is remembered between visits. `onSave` receives the same values serialised
 * as CSS, for writing into the system's brand.css.
 */
export function ThemeEditor({ onSave, className, onController }: ThemeEditorProps): ReactElement {
  const controller = useThemeOverrides();
  const { overrides, patch, reset, resetGroup, hydrated } = controller;
  const [status, setStatus] = useState<"idle" | "copied" | "saving" | "saved" | "failed">("idle");
  const [error, setError] = useState("");

  const controllerCallback = useRef(onController);
  controllerCallback.current = onController;
  useEffect(() => {
    controllerCallback.current?.(controller);
  }, [controller]);

  const css = serializeThemeCss(overrides);
  const pristine = isDefaultOverrides(overrides);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(css);
      setStatus("copied");
    } catch {
      setStatus("failed");
      setError("Copying to the clipboard was blocked by the browser.");
    }
  }, [css]);

  const save = useCallback(async () => {
    if (!onSave) return;
    setStatus("saving");
    setError("");
    try {
      await onSave(css, overrides);
      setStatus("saved");
      reset();
    } catch (cause) {
      setStatus("failed");
      // On a statically hosted site there is no server to write the file, so
      // the request itself fails. Say that plainly instead of surfacing a raw
      // network error; the generated CSS can still be copied.
      const message =
        cause instanceof Error && /^Saving theme defaults/.test(cause.message)
          ? cause.message
          : "Saving defaults isn't available on this site — it only works while developing. Use “Copy CSS” and commit it to src/webawesome/brand.css instead.";
      setError(message);
    }
  }, [css, onSave, overrides, reset]);

  return (
    <div className={`wa-theme-editor wa-stack wa-gap-l${className ? ` ${className}` : ""}`}>
      <div className="wa-theme-editor__groups wa-grid wa-gap-l">
        <Group title="Colors" icon="palette" onReset={() => resetGroup("colors")}>
          <p className="wa-theme-editor__hint">
            Pick a color per group; the full light and dark ramps are generated from it, so
            contrast pairings keep working in both modes.
          </p>
          {SEMANTIC_GROUPS.map((group) => (
            <ColorControl
              key={group}
              group={group}
              value={overrides.colors[group]}
              onChange={(hex) => patch({ colors: { [group]: hex } })}
            />
          ))}
        </Group>

        <Group title="Typography" icon="font" onReset={() => resetGroup("fonts")}>
          <FontControl
            id="wa-theme-font-body"
            label="Body font"
            value={overrides.fonts.body}
            onChange={(body) => patch({ fonts: { body } })}
          />
          <FontControl
            id="wa-theme-font-heading"
            label="Heading font"
            value={overrides.fonts.heading}
            onChange={(heading) => patch({ fonts: { heading } })}
          />
          <FontControl
            id="wa-theme-font-code"
            label="Code font"
            value={overrides.fonts.code}
            onChange={(code) => patch({ fonts: { code } })}
          />
          <ScaleControl
            id="wa-theme-font-scale"
            label="Text size"
            hint="Scales every step of the type scale together."
            min={0.85}
            max={1.25}
            step={0.05}
            stock={STOCK_VALUES.sizeScale}
            value={overrides.fonts.sizeScale}
            onChange={(sizeScale) => patch({ fonts: { sizeScale } })}
          />
          <p className="wa-theme-editor__hint">
            Only system font stacks are offered — a web font needs a stylesheet in the page head.
          </p>
        </Group>

        <Group title="Spacing & density" icon="arrows-left-right-to-line" onReset={() => resetGroup("space")}>
          <ScaleControl
            id="wa-theme-space-scale"
            label="Spacing scale"
            hint="Every gap, pad, and stack step at once."
            min={0.75}
            max={1.4}
            step={0.05}
            stock={STOCK_VALUES.spaceScale}
            value={overrides.space.scale}
            onChange={(scale) => patch({ space: { scale } })}
          />
          <ScaleControl
            id="wa-theme-density-block"
            label="Control height"
            hint="Vertical padding inside inputs, buttons, and selects."
            min={0.4}
            max={1.1}
            step={0.05}
            stock={STOCK_VALUES.densityBlock}
            value={overrides.space.densityBlock}
            onChange={(densityBlock) => patch({ space: { densityBlock } })}
          />
          <ScaleControl
            id="wa-theme-density-inline"
            label="Control padding"
            hint="Horizontal padding inside form controls."
            min={0.5}
            max={1.6}
            step={0.05}
            stock={STOCK_VALUES.densityInline}
            value={overrides.space.densityInline}
            onChange={(densityInline) => patch({ space: { densityInline } })}
          />
        </Group>

        <Group title="Corners & shadows" icon="border-top-left" onReset={() => resetGroup("shape")}>
          <ScaleControl
            id="wa-theme-radius-scale"
            label="Corner radius"
            hint="0 is square; higher is rounder."
            min={0}
            max={3}
            step={0.25}
            stock={STOCK_VALUES.radiusScale}
            value={overrides.shape.radiusScale}
            onChange={(radiusScale) => patch({ shape: { radiusScale } })}
          />
          <ScaleControl
            id="wa-theme-shadow-scale"
            label="Shadow strength"
            hint="0 is flat; higher lifts surfaces further off the page."
            min={0}
            max={2.5}
            step={0.25}
            stock={STOCK_VALUES.shadowScale}
            value={overrides.shape.shadowScale}
            onChange={(shadowScale) => patch({ shape: { shadowScale } })}
          />
        </Group>
      </div>

      <div className="wa-cluster wa-gap-xs wa-align-items-center">
        {onSave ? (
          <WaButton
            variant="brand"
            onClick={save}
            disabled={pristine || status === "saving"}
            loading={status === "saving"}
          >
            <WaIcon slot="start" name="floppy-disk"></WaIcon>
            Save as default
          </WaButton>
        ) : null}
        <WaButton appearance="outlined" onClick={copy} disabled={pristine}>
          <WaIcon slot="start" name="copy"></WaIcon>
          Copy CSS
        </WaButton>
        <WaButton appearance="plain" onClick={reset} disabled={pristine}>
          Reset everything
        </WaButton>
        {hydrated && !pristine ? (
          <span className="wa-theme-editor__hint">Unsaved changes are kept in this browser.</span>
        ) : null}
      </div>

      {status === "copied" ? (
        <WaCallout variant="success" size="small">
          <WaIcon slot="icon" name="circle-check"></WaIcon>
          CSS copied to the clipboard.
        </WaCallout>
      ) : null}
      {status === "saved" ? (
        <WaCallout variant="success" size="small">
          <WaIcon slot="icon" name="circle-check"></WaIcon>
          Saved as the system default. The browser-only copy has been cleared.
        </WaCallout>
      ) : null}
      {status === "failed" ? (
        <WaCallout variant="danger" size="small">
          <WaIcon slot="icon" name="triangle-exclamation"></WaIcon>
          {error}
        </WaCallout>
      ) : null}

      <details className="wa-theme-editor__code">
        <summary>Generated CSS</summary>
        <pre>
          <code>{css}</code>
        </pre>
      </details>
    </div>
  );
}
