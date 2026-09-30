/**
 * Server function behind the theme editor's "Save as default" button.
 *
 * Client-safe module path: it imports the file-writing helper lazily inside
 * the handler so the server-only code never enters the browser bundle.
 */
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  /** Full contents of brand.css, produced by serializeThemeCss(). */
  css: z
    .string()
    .min(1)
    .max(64_000)
    // Only token declarations belong here — reject anything with an import or
    // a URL so a saved theme can never pull in remote code.
    .refine((value) => !/@import|url\(|<\/?script/i.test(value), {
      message: "Theme CSS may only contain token declarations.",
    }),
});

export const saveThemeDefaults = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const { writeBrandCss } = await import("./theme-editor-write.server");
    const path = await writeBrandCss(data.css);
    return { path };
  });
