# Brand Connector Pro

I want to build an app where you can paste in the URL of a company or brand and find all of their social profiles on Threads, X, Instagram, Facebook, LinkedIn, Bluesky, Tumblr, TikTok, Product Hunt, Tweet.app, et cetera, so that I can easily find and copy their specific handles to tag them properly.

Build the single-lookup MVP with these requirements:
- Individual lookups are free; design the architecture so bulk lookups and MCP support can be added later as premium features. Leverage open-source frameworks and tools as much as possible.
- Verification model:
  - Collapse structured data (JSON-LD sameAs) and direct site links into a single "Verified" badge, keeping the exact source distinction in the evidence line (e.g., "Found in JSON-LD sameAs" vs "Found in footer on domain.com"). No percentage confidence scores.
  - Unverified results (found via fallback search when not linked on the site): include reciprocal verification that checks whether the candidate profile links back to the brand domain.
  - When JSON-LD and the site footer/DOM disagree on a platform's handle, display both with a conflict flag instead of picking silently.
  - Every result must include a "last checked" timestamp.
  - Result cards provide quick one-click copying formatted for tagging (like @handle or platform-appropriate slug), full profile URL, and an option to copy all verified handles at once.
- Disambiguation:
  - When a brand search matches multiple entities, lead with the domain and always offer manual URL entry.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://domain-to-social.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/831c3fbb-ecd3-4cce-aa6f-d171c291f992).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
