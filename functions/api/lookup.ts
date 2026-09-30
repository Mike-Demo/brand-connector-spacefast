/** POST /api/lookup — single domain social lookup. SpaceFast port of the
 *  TanStack server fn `lookupSocials`. Same best-effort per-client rate
 *  limiting: the tool is intentionally free and open, so we throttle how
 *  many lookups one client can trigger. In-memory buckets are per isolate,
 *  so this is a soft limit — good enough to deter casual abuse. */

import { lookupDomain } from "../_core/lookup";

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

function clientKey(request: Request): string {
  const h = request.headers;
  return (
    h.get("cf-connecting-ip") ??
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

function assertWithinLimit(request: Request): void {
  const key = `lookup:${clientKey(request)}`;
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return;
  }
  bucket.count += 1;
  if (bucket.count > MAX_PER_WINDOW) {
    const err = new Error("Too many requests — please wait a minute and try again.");
    (err as Error & { status?: number }).status = 429;
    throw err;
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    assertWithinLimit(request);
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Request body must be JSON." }, { status: 400 });
    }
    const url = typeof (body as Record<string, unknown>)?.url === "string"
      ? ((body as Record<string, string>).url.trim())
      : "";
    if (url.length < 3 || url.length > 500) {
      return Response.json({ error: "Please provide a website address." }, { status: 400 });
    }
    const result = await lookupDomain(url);
    return Response.json(result, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    const status = (e as Error & { status?: number })?.status ?? 500;
    const message = e instanceof Error ? e.message : "Something went wrong.";
    if (status === 500) console.error(e);
    return Response.json({ error: message }, { status });
  }
}
