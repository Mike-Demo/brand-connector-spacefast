import type { LookupResult } from "./types";

// Snapshot links: the whole result is compressed into the URL hash, so no server storage is needed
// and the link can never change after it is shared.

const toB64Url = (bytes: Uint8Array): string => {
  let s = "";
  bytes.forEach((b) => (s += String.fromCharCode(b)));
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

const fromB64Url = (str: string): Uint8Array => {
  const s = atob(str.replace(/-/g, "+").replace(/_/g, "/"));
  return Uint8Array.from(s, (c) => c.charCodeAt(0));
};

const pipe = async (bytes: Uint8Array, stream: CompressionStream | DecompressionStream): Promise<Uint8Array> => {
  const out = new Blob([bytes.slice().buffer as ArrayBuffer]).stream().pipeThrough(stream);
  return new Uint8Array(await new Response(out).arrayBuffer());
};

export const encodeResult = async (result: LookupResult): Promise<string> =>
  toB64Url(await pipe(new TextEncoder().encode(JSON.stringify(result)), new CompressionStream("deflate-raw")));

export const decodeResult = async (token: string): Promise<LookupResult> => {
  const bytes = await pipe(fromB64Url(token), new DecompressionStream("deflate-raw"));
  const parsed = JSON.parse(new TextDecoder().decode(bytes)) as LookupResult;
  if (!parsed || typeof parsed.domain !== "string" || !Array.isArray(parsed.platforms)) {
    throw new Error("Invalid share link");
  }
  return parsed;
};

export const buildShareUrl = async (result: LookupResult): Promise<string> =>
  `${window.location.origin}/r#${await encodeResult(result)}`;
