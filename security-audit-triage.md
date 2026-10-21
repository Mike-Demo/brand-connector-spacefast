# Security audit triage backlog

Issue creation is not available in this session, so the prioritized issue titles and ready-to-file bodies are recorded below. Each issue links back to [parent issue #1](https://github.com/Mike-Demo/brand-connector-spacefast/issues/1).

## Priority

1. **Unbounded response-body buffering** — Both findings are medium severity, but this is first because an unauthenticated `/api/lookup` caller can reach the network-fetch path and trigger excessive response buffering. The fix is contained to response reading.
2. **Unpinned production publish CLI** — This requires an operator to run the publish script, so it is less reachable to a lower-trust caller; however, a compromised package release would run with production publish authority. Pinning and verifying the CLI is a small, scoped change.

These findings have distinct root causes and should be tracked separately.

---

## `[security][medium] Cap response-body bytes while reading`

**Body:**

### Evidence

`functions/_core/lookup.ts` reads fetched pages with `(await res.text()).slice(0, 3_000_000)` (line 107), so the full response is buffered before truncation. The DuckDuckGo search path also reads the entire response with `await res.text()` (line 237). The lookup endpoint is an unauthenticated `POST /api/lookup` (`functions/api/lookup.ts`).

### Root cause

`fetchText` and `ddgSearch` buffer complete response bodies before applying any limit; there is no streaming byte cap, `Content-Length` pre-check, or reader cancellation.

### Smallest fix

Read response bodies incrementally in `fetchText` and `ddgSearch`, count bytes, and cancel the reader when the 3,000,000-byte cap is exceeded. Reject responses up front when a declared `Content-Length` exceeds the cap.

Parent: [Security audit #1](https://github.com/Mike-Demo/brand-connector-spacefast/issues/1).

---

## `[security][medium] Pin the production publish CLI`

**Body:**

### Evidence

`scripts/publish.sh` targets the production space `magic-manta` (line 4), which serves `magicmanta.com`, and invokes `npx -y spacefast publish` without a version pin (line 21). No lockfile, integrity hash, or vendored binary is used on this publish path.

### Root cause

The publish script executes the latest-at-runtime `spacefast` package through `npx -y`, allowing unreviewed package code to run with the operator's production publish credentials.

### Smallest fix

Pin an exact reviewed `spacefast` CLI version with integrity verification (for example, a locked devDependency invoked through the repository lockfile, or a vendored binary with a recorded hash), and invoke that pinned copy from `publish.sh`.

Parent: [Security audit #1](https://github.com/Mike-Demo/brand-connector-spacefast/issues/1).

---

## `[security][needs-validation] Audit leads to validate`

**Body:**

Validate the following leads. No severity is assigned because each depends on the missing platform or runtime fact listed.

- **Fingerprint:** `rate-limit-spoofable-forwarded-for-key`
  **Claimed root cause:** `clientKey` in both handlers trusts the first `x-forwarded-for` entry as the rate-limit bucket key when `cf-connecting-ip` is absent, without any source-visible guarantee that the SpaceFast edge injects a trusted client-IP header or overwrites client-supplied forwarding headers.
  **Missing fact:** Which client-IP header SpaceFast's edge actually injects or overwrites on requests to functions: does it set cf-connecting-ip, does it strip or overwrite client-supplied x-forwarded-for (and with what value), or does it pass client headers through untouched? This platform header behavior is decisive and is not determinable from source.

- **Fingerprint:** `share-link-unvalidated-profile-url-scheme`
  **Claimed root cause:** `decodeResult` casts attacker-authored parsed JSON to `LookupResult` after checking only domain and platforms shape, with no per-entry http(s) scheme validation, and `ProfileSlab` renders `entry.url` verbatim as a link href.
  **Missing fact:** Whether the pinned React 19.2 runtime (web/package.json lines 59-61) and current browsers execute a javascript: href rendered by React when a victim clicks it with target _blank and rel noreferrer noopener, or block/neutralize it. This framework/browser behavior fact cannot be settled from source, and executing the target frontend requires the app to run.

- **Fingerprint:** `ssrf-dns-resolution-to-private-address`
  **Claimed root cause:** The SSRF guard validates only the hostname string form and never the DNS-resolved address, and the fetch path performs no resolved-address check or address pinning, so a public name resolving to a private address passes all source-visible controls.
  **Missing fact:** Whether SpaceFast's function fetch egress resolves hostnames and blocks (or fails to block) connections whose A/AAAA records point to private, loopback, link-local, or metadata addresses - i.e. whether the platform enforces resolved-address policy that the source lacks. This decisive control, if any, lives in SpaceFast's fetch egress, which the repository source cannot establish.

Parent: [Security audit #1](https://github.com/Mike-Demo/brand-connector-spacefast/issues/1).

---

The independently rejected `lookup-fanout-amplification` candidate is intentionally not included.
