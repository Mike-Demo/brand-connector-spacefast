import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell, SubHeader } from "@/components/diggr/Chrome";
import { ProfileSlab, copyText } from "@/components/diggr/ProfileSlab";
import { allVerifiedTags, formatCheckedAt } from "@/lib/social/format";
import { decodeResult } from "@/lib/social/share";
import type { LookupResult } from "@/lib/social/types";

export const Route = createFileRoute("/r")({
  head: () => ({
    meta: [
      { title: "M4G1C M4NT4 // Shared Footprint — read-only lookup snapshot" },
      { name: "description", content: "A read-only snapshot of a brand's social profiles found by M4G1C M4NT4." },
      { property: "og:title", content: "M4G1C M4NT4 // Shared Footprint" },
      { property: "og:description", content: "Read-only snapshot of a brand's verified social handles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SharedResult,
});

function SharedResult() {
  const [result, setResult] = useState<LookupResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = window.location.hash.slice(1);
    if (!token) {
      setError("This link is empty or incomplete.");
      return;
    }
    decodeResult(token)
      .then(setResult)
      .catch(() => setError("This share link is broken or was cut off."));
  }, []);

  const verified = result?.platforms.filter((p) => p.status === "verified") ?? [];
  const unverified = result?.platforms.filter((p) => p.status === "unverified") ?? [];

  return (
    <Shell>
      <SubHeader badge="SHARED SNAPSHOT // READ-ONLY" note="// FROZEN AT TIME OF LOOKUP //" />
      <section className="px-margin-mobile sm:px-margin py-space-xl bg-bg-deep">
        <div className="gap-space-xl mx-auto flex max-w-7xl flex-col">
          {error && (
            <div className="p-space-md font-code-terminal text-code-terminal border-2 border-error-container text-on-error-container">
              <p>! {error}</p>
              <Link to="/" className="text-primary-container mt-2 inline-block underline">
                Run a fresh lookup
              </Link>
            </div>
          )}
          {!result && !error && (
            <p className="font-code-terminal text-code-terminal text-acid-lime">&gt; DECRYPTING SNAPSHOT…</p>
          )}
          {result && (
            <>
              <div className="p-space-lg gap-space-md flex flex-col border-3 border-primary-container bg-grit-black shadow-stamp-xl lg:flex-row lg:items-center lg:justify-between">
                <div className="gap-space-xs flex flex-col">
                  <span className="font-label-stamp text-label-stamp text-electric-magenta uppercase">
                    TARGET: {result.brandName}
                  </span>
                  <h1 className="font-headline text-headline-lg text-paper-distressed uppercase">
                    {result.domain} — social footprint snapshot
                  </h1>
                  <span className="font-code-terminal text-code-terminal text-on-surface-variant">
                    SNAPSHOT TAKEN: {formatCheckedAt(result.checkedAt)}
                  </span>
                </div>
                <div className="gap-space-sm flex flex-wrap">
                  {verified.length > 0 && (
                    <button
                      onClick={() => copyText(allVerifiedTags(result), "all verified handles")}
                      className="font-label-stamp text-label-stamp bg-primary-container text-on-primary-container px-4 py-3 uppercase shadow-stamp"
                    >
                      Copy all verified handles
                    </button>
                  )}
                  <Link
                    to="/"
                    className="font-label-stamp text-label-stamp text-paper-distressed border-2 border-paper-distressed px-4 py-3 uppercase"
                  >
                    Re-run live
                  </Link>
                </div>
              </div>
              {verified.length > 0 && (
                <div className="gap-space-md grid md:grid-cols-2 xl:grid-cols-3">
                  {verified.map((r) => (
                    <ProfileSlab key={r.platformId} result={r} />
                  ))}
                </div>
              )}
              {unverified.length > 0 && (
                <div>
                  <h2 className="font-headline text-headline-md text-paper-distressed mb-space-md uppercase">
                    SHADOW / UNCONFIRMED NODES
                  </h2>
                  <div className="gap-space-md grid md:grid-cols-2 xl:grid-cols-3">
                    {unverified.map((r) => (
                      <ProfileSlab key={r.platformId} result={r} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </Shell>
  );
}
