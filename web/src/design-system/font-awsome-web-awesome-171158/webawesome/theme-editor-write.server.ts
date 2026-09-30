/**
 * Server-only file writer for the theme editor.
 *
 * Isolated in a `.server.ts` module so nothing here can reach a browser
 * bundle. The write targets the design system's brand.css, and is refused
 * outside development: a deployed app has no writable source tree.
 */
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const BRAND_CSS_PATH = "src/webawesome/brand.css";

export async function writeBrandCss(css: string): Promise<string> {
  if (process.env["NODE_ENV"] === "production") {
    throw new Error(
      "Saving theme defaults only works while developing. Copy the CSS instead and commit it to src/webawesome/brand.css.",
    );
  }

  const target = resolve(process.cwd(), BRAND_CSS_PATH);
  await writeFile(target, css, "utf8");
  return BRAND_CSS_PATH;
}
