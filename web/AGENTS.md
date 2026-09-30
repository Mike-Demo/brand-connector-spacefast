<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Social lookup core lives in `src/lib/social/lookup.server.ts` (framework-agnostic `lookupDomain`); server fns are thin wrappers. Why: bulk lookups and an MCP server can reuse it later as premium entry points.
- Platform rules live only in `src/lib/social/platforms.ts`. Why: one registry drives extraction, search fallback, and UI.
- Fallback search uses DuckDuckGo HTML (no API key). Why: free/open for the MVP; swap behind `ddgSearch` if rate-limited.
- Tier 3 fallback = direct per-platform existence probes (`probe` in `platforms.ts`) on guessed handles, kept only when the profile links back, always unverified. Why: cheap, no 1000-site machinery.
- qeeqbox/social-analyzer is reference-only, never a dependency; if a probe library is ever needed, prefer MIT Sherlock. Why: AGPL-3.0 conflicts with a hosted premium service, and it pulls Firefox/Selenium/tesseract.
- Evidence strength is a computed label (strong/moderate/weak from counted signals via `rateEntry`), never a percentage. Why: honest, explainable confidence.
- Share links are self-contained snapshots: the lookup result is deflate-compressed into the `/r#<token>` hash (`src/lib/social/share.ts`). Why: read-only, tamper-evident-by-design links with no backend storage.
