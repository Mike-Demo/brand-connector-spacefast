#!/usr/bin/env bash
# Publishes the Brand Connector Pro SpaceFast preview.
# Usage: ./scripts/publish.sh [message]
# NOTE: preview only — magicmanta.com DNS is untouched.
set -euo pipefail

MESSAGE="${1:-brand-connector preview publish}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$(mktemp -d)/sf-publish"

rm -rf "$OUT"
mkdir -p "$OUT"
cp -a "$ROOT/public/." "$OUT/"
cp -a "$ROOT/functions" "$ROOT/sf.jsonc" "$OUT/"

npx -y spacefast publish "$OUT" --space brand-connector-preview -m "$MESSAGE" -y --wait
