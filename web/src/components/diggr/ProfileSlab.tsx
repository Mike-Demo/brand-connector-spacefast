import { toast } from "sonner";
import { formatCheckedAt } from "@/lib/social/format";
import type { PlatformResult, ProfileEntry } from "@/lib/social/types";

export async function copyText(text: string, label: string): Promise<void> {
  await navigator.clipboard.writeText(text);
  toast.success(`COPIED // ${label}`);
}

const PLATFORM_GLYPH: Record<string, string> = {
  x: "𝕏",
  threads: "@",
  instagram: "◎",
  facebook: "f",
  linkedin: "in",
  bluesky: "☁",
  tumblr: "t",
  tiktok: "♪",
  producthunt: "P",
  youtube: "▶",
  pinterest: "P",
  github: "⌘",
  tweetapp: "✦",
};

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-2 border-outline-variant bg-grit-black px-2 py-1.5">
      <p className="font-label-stamp text-micro tracking-widest text-on-surface-variant uppercase">{label}</p>
      <p className="font-code-terminal text-code-terminal text-primary-container mt-0.5 break-all">{value}</p>
    </div>
  );
}

function Entry({ entry }: { entry: ProfileEntry }) {
  return (
    <div className="pt-space-sm border-t-2 border-outline-variant first:border-t-0 first:pt-0">
      <div className="gap-space-sm flex flex-wrap items-center">
        <span className="font-code-terminal text-headline-sm text-paper-distressed break-all">{entry.tag}</span>
        {entry.rating && (
          <span
            className={`font-label-stamp text-label-stamp px-1.5 py-0.5 uppercase ${
              entry.rating === "strong"
                ? "bg-primary-container text-on-primary-container"
                : entry.rating === "moderate"
                  ? "bg-cyber-cyan text-grit-black"
                  : "bg-surface-highest text-on-surface-variant"
            }`}
          >
            {entry.rating} signal
          </span>
        )}
        {entry.reciprocal === "links_back" && (
          <span className="font-label-stamp text-label-stamp bg-toxic-green text-paper-distressed px-1.5 py-0.5 uppercase">
            links back
          </span>
        )}
      </div>

      <ul className="mt-space-sm font-code-terminal text-code-terminal text-on-surface-variant space-y-1">
        {entry.evidence.map((ev) => (
          <li key={ev} className="flex gap-2">
            <span aria-hidden className="text-primary-container">
              &gt;
            </span>
            {ev}
          </li>
        ))}
      </ul>

      <div className="mt-space-sm gap-space-xs grid grid-cols-2 sm:grid-cols-3">
        <Metric label="Handle" value={entry.tag} />
        <Metric label="Sources" value={entry.sources.join(" / ")} />
        <Metric label="Checked" value={formatCheckedAt(entry.checkedAt)} />
      </div>

      <div className="mt-space-sm gap-space-xs flex flex-wrap">
        <button
          onClick={() => copyText(entry.tag, entry.tag)}
          className="font-label-stamp text-label-stamp bg-primary-container text-on-primary-container px-3 py-2 uppercase shadow-stamp-sm transition-transform hover:-translate-y-0.5"
        >
          Copy handle
        </button>
        <button
          onClick={() => copyText(entry.url, "profile URL")}
          className="font-label-stamp text-label-stamp text-paper-distressed border-2 border-paper-distressed px-3 py-2 uppercase hover:bg-paper-distressed hover:text-grit-black"
        >
          Copy URL
        </button>
        <a
          href={entry.url}
          target="_blank"
          rel="noreferrer noopener"
          className="font-label-stamp text-label-stamp text-cyber-cyan border-2 border-cyber-cyan px-3 py-2 uppercase hover:bg-cyber-cyan hover:text-grit-black"
        >
          Inspect stream ↗
        </a>
      </div>
    </div>
  );
}

export function ProfileSlab({ result }: { result: PlatformResult }) {
  const verified = result.status === "verified";
  return (
    <article className="p-space-md gap-space-md flex flex-col border-3 border-outline-variant bg-surface-low shadow-stamp-lg">
      <header className="gap-space-sm flex items-start justify-between border-b-2 border-outline-variant pb-2">
        <div className="gap-space-sm flex items-center">
          <span className="font-headline text-headline-md flex h-10 w-10 items-center justify-center border-2 border-primary-container bg-grit-black text-primary-container">
            {PLATFORM_GLYPH[result.platformId] ?? "#"}
          </span>
          <div>
            <h3 className="font-headline text-headline-sm text-paper-distressed uppercase">{result.platformName}</h3>
            <p className="font-code-terminal text-body-sm text-on-surface-variant uppercase">
              {result.entries.length} node{result.entries.length === 1 ? "" : "s"} resolved
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span
            className={`font-label-stamp text-label-stamp px-2 py-1 uppercase shadow-stamp-xs ${
              verified ? "bg-primary-container text-on-primary-container" : "bg-hazard-orange text-grit-black"
            }`}
          >
            {verified ? "Captured" : "Unconfirmed"}
          </span>
          {result.conflict && (
            <span className="font-label-stamp text-label-stamp bg-error-container text-on-error-container px-2 py-1 uppercase">
              Conflict
            </span>
          )}
        </div>
      </header>

      {result.conflict && (
        <p className="font-code-terminal text-code-terminal bg-error-container/30 text-on-error-container border-2 border-error-container p-2">
          ! STRUCTURED DATA AND SITE LINKS DISAGREE — BOTH HANDLES SHOWN, NO SILENT PICK.
        </p>
      )}

      <div className="gap-space-md flex flex-col">
        {result.entries.map((e) => (
          <Entry key={e.url} entry={e} />
        ))}
      </div>

      <footer className="font-code-terminal mt-auto text-body-sm text-on-surface-variant uppercase">
        Last pulse: {formatCheckedAt(result.checkedAt)}
      </footer>
    </article>
  );
}
