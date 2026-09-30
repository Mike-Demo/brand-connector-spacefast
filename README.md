# Brand Connector Pro — SpaceFast port

Magic Manta / Brand Connector Pro (https://magicmanta.com) ported from Lovable Cloud to SpaceFast.

## Layout

- `functions/` — SpaceFast functions (the deployment's backend)
  - `functions/api/lookup.ts` — `POST /api/lookup`
  - `functions/api/search.ts` — `POST /api/search`
  - `functions/_core/` — dependency-free port of the lookup engine: HTML parsing, platform registry, SSRF guards, rate limits, evidence labels
- `public/` — prerendered static frontend (built output; this is what gets served)
- `web/` — frontend source (TanStack app converted to plain `fetch()` + static prerendering)
- `scripts/publish.sh` — publish helper
- `sf.jsonc` — SpaceFast project config

## Rebuild the frontend

```bash
cd web
npm install
npm run build        # prerenders to web/.output/public
cp -r web/.output/public/* ../public/
```

The `llms.txt` and `.well-known/agent.json` in `public/` are maintained by hand to honestly describe the `/api/*` endpoints.

## Publish

```bash
./scripts/publish.sh "message"
```

Target spaces: `brand-connector-preview` (staging), `brand-connector` (production, serves magicmanta.com).

## Notes

- The lookup core is a port of `web/src/lib/social/lookup.server.ts`; platform rules live only in `functions/_core/platforms.ts` (mirrors `web/src/lib/social/platforms.ts`).
- Evidence strength is a computed label (strong/moderate/weak), never a percentage.
- Analytics is intentionally absent: production magicmanta.com ships no third-party analytics script in its HTML (only Lovable's own `/~flock.js`), so there is nothing to port.
- Known limitation: the DuckDuckGo HTML fallback (`/api/search`, and the lookup's unverified tier) returns empty from server environments because DDG serves a bot-check page to non-browser TLS fingerprints. The original code anticipated this — swap behind `ddgSearch` in `functions/_core/scrape.ts`.
- No DNS, production, or Lovable changes are made from this repo. Cutover is a DNS flip at the registrar.
