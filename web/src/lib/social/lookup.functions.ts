// Client wrappers for the SpaceFast-hosted lookup API.
//
// SpaceFast preview port: the TanStack server functions (createServerFn) are
// replaced by plain fetch() calls against the SpaceFast functions deployed
// alongside this static frontend at /api/lookup and /api/search. The exported
// names are unchanged so call sites don't need to change shape.
import type { DomainCandidate, LookupResult } from "./types";

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(path, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await res.json().catch(() => null)) as { error?: string } | null;
  if (!res.ok) {
    throw new Error(
      (data && typeof data.error === "string" && data.error) || `Request failed (${res.status}).`,
    );
  }
  return data as T;
}

// Free tier: single lookups. Bulk / MCP entry points can reuse the same
// /api/lookup endpoint behind auth later.
export function lookupSocials(url: string): Promise<LookupResult> {
  const v = url.trim();
  if (v.length < 3 || v.length > 500) return Promise.reject(new Error("Please enter a website address."));
  return postJson<LookupResult>("/api/lookup", { url: v });
}

export function searchBrand(query: string): Promise<DomainCandidate[]> {
  const q = query.trim();
  if (q.length < 2 || q.length > 120) return Promise.reject(new Error("Please enter a brand name."));
  return postJson<DomainCandidate[]>("/api/search", { query: q });
}
