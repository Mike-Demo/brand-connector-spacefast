import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ReactElement,
} from "react";

import "./patterns.css";

/** hCaptcha's publicly documented test key — always passes, local use only. */
export const HCAPTCHA_TEST_SITE_KEY = "10000000-ffff-ffff-ffff-000000000001";

const SCRIPT_URL = "https://js.hcaptcha.com/1/api.js?render=explicit";

interface HCaptchaRenderOptions {
  sitekey: string;
  size?: string;
  theme?: string;
  hl?: string;
  callback?: (token: string, ekey?: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: (error: string) => void;
  "open-callback"?: () => void;
  "close-callback"?: () => void;
}

interface HCaptchaApi {
  render: (container: HTMLElement, options: HCaptchaRenderOptions) => string;
  execute: (widgetId: string) => void;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
  getResponse: (widgetId: string) => string;
}

declare global {
  interface Window {
    hcaptcha?: HCaptchaApi;
  }
}

let loadPromise: Promise<HCaptchaApi> | null = null;

/**
 * The hCaptcha API, or null when it isn't ready yet.
 *
 * Guarded on `render` rather than mere presence: browsers expose any element
 * with `id="hcaptcha"` as `window.hcaptcha`, so a truthiness check can pick up
 * a DOM node instead of the API.
 */
function hcaptchaApi(): HCaptchaApi | null {
  if (typeof window === "undefined") return null;
  const candidate = (window as unknown as Record<string, unknown>)["hcaptcha"];
  return candidate && typeof (candidate as HCaptchaApi).render === "function"
    ? (candidate as HCaptchaApi)
    : null;
}

/**
 * hCaptcha only knows `light` and `dark`, so `auto` resolves against the
 * design system's color scheme (the `wa-dark` class) and the OS preference.
 */
function resolveTheme(theme: "light" | "dark" | "auto"): "light" | "dark" {
  if (theme !== "auto") return theme;
  if (typeof document === "undefined") return "light";
  if (document.documentElement.classList.contains("wa-dark")) return "dark";
  if (document.documentElement.classList.contains("wa-light")) return "light";
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Loads hCaptcha's widget script once per document. The script must come from
 * hCaptcha's own domain — it cannot be vendored or served from a mirror.
 */
function loadHCaptcha(): Promise<HCaptchaApi> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("hCaptcha can only load in the browser."));
  }
  const ready = hcaptchaApi();
  if (ready) return Promise.resolve(ready);
  if (loadPromise) return loadPromise;

  loadPromise = new Promise<HCaptchaApi>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-wa-hcaptcha="true"]',
    );
    const script = existing ?? document.createElement("script");
    const started = Date.now();

    // The script installs its API asynchronously after `load`, and a script
    // already in the document may have fired `load` before we attached — so
    // poll for the API instead of trusting a single event.
    const poll = () => {
      const api = hcaptchaApi();
      if (api) {
        resolve(api);
        return;
      }
      if (Date.now() - started > 15000) {
        loadPromise = null;
        reject(new Error("hCaptcha did not become ready in time."));
        return;
      }
      window.setTimeout(poll, 100);
    };

    script.addEventListener("error", () => {
      loadPromise = null;
      reject(new Error("Failed to load the hCaptcha script."));
    });

    if (!existing) {
      script.src = SCRIPT_URL;
      script.async = true;
      script.defer = true;
      script.dataset["waHcaptcha"] = "true";
      document.head.append(script);
    }

    poll();
  });

  return loadPromise;
}

export interface HCaptchaProps {
  /** hCaptcha site key. Public by design — safe in client code. */
  readonly siteKey: string;
  /**
   * Widget size. `invisible` renders no visible widget; trigger it with the
   * imperative `execute()` handle from your own submit button.
   * @default 'normal'
   */
  readonly size?: "normal" | "compact" | "invisible";
  /**
   * Widget colour scheme. Defaults to `auto`, which follows the design
   * system's light/dark setting.
   * @default 'auto'
   */
  readonly theme?: "light" | "dark" | "auto";
  /** Language override, e.g. `en`, `sv`, `de`. Defaults to the browser's. */
  readonly hl?: string;
  /**
   * Name of the hidden field carrying the token, so the widget works inside
   * a plain `<form>` submit without extra glue.
   * @default 'h-captcha-response'
   */
  readonly name?: string;
  /** Fires with the verification token once the user passes the challenge. */
  readonly onVerify?: (token: string, ekey?: string) => void;
  /** Fires when a previously issued token expires. */
  readonly onExpire?: () => void;
  /** Fires when the challenge errors. */
  readonly onError?: (error: string) => void;
  /** Fires when the challenge overlay opens. */
  readonly onChallengeOpen?: () => void;
  /** Fires when the challenge overlay closes. */
  readonly onChallengeClose?: () => void;
  readonly className?: string;
  readonly id?: string;
}

export interface HCaptchaHandle {
  /** Runs the challenge. Required for `size="invisible"`. */
  execute: () => void;
  /** Clears the current token and resets the widget. */
  reset: () => void;
  /** Current token, or an empty string when unverified. */
  getResponse: () => string;
}

/**
 * hCaptcha bot protection, themed to the design system.
 *
 * The token this produces proves nothing on its own: always verify it on the
 * server against your hCaptcha secret key before trusting the submission.
 */
export const HCaptcha = forwardRef<HCaptchaHandle, HCaptchaProps>(function HCaptcha(
  {
    siteKey,
    size = "normal",
    theme = "auto",
    hl,
    name = "h-captcha-response",
    onVerify,
    onExpire,
    onError,
    onChallengeOpen,
    onChallengeClose,
    className,
    id,
  },
  ref,
): ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetRef = useRef<string | null>(null);
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading");

  // Callbacks live in a ref so re-renders never force a widget re-render.
  const callbacks = useRef({ onVerify, onExpire, onError, onChallengeOpen, onChallengeClose });
  callbacks.current = { onVerify, onExpire, onError, onChallengeOpen, onChallengeClose };

  useEffect(() => {
    let cancelled = false;

    loadHCaptcha()
      .then((api) => {
        const container = containerRef.current;
        if (cancelled || !container || widgetRef.current !== null) return;

        widgetRef.current = api.render(container, {
          sitekey: siteKey,
          size,
          theme: resolveTheme(theme),
          ...(hl ? { hl } : {}),
          callback: (value: string, ekey?: string) => {
            setToken(value);
            callbacks.current.onVerify?.(value, ekey);
          },
          "expired-callback": () => {
            setToken("");
            callbacks.current.onExpire?.();
          },
          "error-callback": (error: string) => {
            setToken("");
            callbacks.current.onError?.(error);
          },
          "open-callback": () => callbacks.current.onChallengeOpen?.(),
          "close-callback": () => callbacks.current.onChallengeClose?.(),
        });
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("failed");
      });

    return () => {
      cancelled = true;
      const widgetId = widgetRef.current;
      widgetRef.current = null;
      const api = hcaptchaApi();
      if (widgetId !== null && api) {
        try {
          api.remove(widgetId);
        } catch {
          /* widget already gone with its container */
        }
      }
    };
  }, [siteKey, size, theme, hl]);

  useImperativeHandle(
    ref,
    (): HCaptchaHandle => ({
      execute: () => {
        const widgetId = widgetRef.current;
        if (widgetId !== null) hcaptchaApi()?.execute(widgetId);
      },
      reset: () => {
        const widgetId = widgetRef.current;
        if (widgetId !== null) hcaptchaApi()?.reset(widgetId);
        setToken("");
      },
      getResponse: () => {
        const widgetId = widgetRef.current;
        return widgetId !== null ? (hcaptchaApi()?.getResponse(widgetId) ?? "") : "";
      },
    }),
    [],
  );

  return (
    <div
      className={className ? `wa-hcaptcha ${className}` : "wa-hcaptcha"}
      data-size={size}
      data-status={status}
      id={id}
    >
      <div ref={containerRef} className="wa-hcaptcha-widget" />
      {status === "failed" ? (
        <p className="wa-hcaptcha-message" role="alert">
          The verification challenge could not load. Check your connection and try again.
        </p>
      ) : null}
      <input type="hidden" name={name} value={token} readOnly />
    </div>
  );
});
