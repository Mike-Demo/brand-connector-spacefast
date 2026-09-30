import type { LookupResult } from "./types";

export function looksLikeUrl(input: string): boolean {
  return /^(https?:\/\/)?[^\s/]+\.[a-z]{2,}(\/\S*)?$/i.test(input.trim());
}

export function formatCheckedAt(iso: string): string {
  return new Date(iso).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
}

export function allVerifiedTags(result: LookupResult): string {
  return result.platforms
    .filter((p) => p.status === "verified")
    .flatMap((p) => p.entries.map((e) => `${p.platformName}: ${e.tag}`))
    .join("\n");
}
