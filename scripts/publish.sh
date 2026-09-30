#!/usr/bin/env bash
# Publishes the Brand Connector Pro SpaceFast build.
# Usage: ./scripts/publish.sh [--space brand-connector-preview|magic-manta] [message]
# Default space: brand-connector-preview (staging). Production: magic-manta (serves magicmanta.com).
set -euo pipefail

SPACE="brand-connector-preview"
if [[ "${1:-}" == "--space" ]]; then
  SPACE="$2"
  shift 2
fi
MESSAGE="${1:-brand-connector publish to $SPACE}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$(mktemp -d)/sf-publish"

rm -rf "$OUT"
mkdir -p "$OUT"
cp -a "$ROOT/public/." "$OUT/"
cp -a "$ROOT/functions" "$ROOT/sf.jsonc" "$OUT/"

npx -y spacefast publish "$OUT" --space "$SPACE" -m "$MESSAGE" -y --wait
