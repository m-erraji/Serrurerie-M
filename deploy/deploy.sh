#!/usr/bin/env bash
# Build the site and swap in the new release. Run from anywhere as medxd:
#   ~/Serrurerie-M/deploy/deploy.sh
# The site is fully static: nginx serves ~/serrurerie-app/current directly, so
# there is no Node process to reload. The release lives outside the repo, so a
# rebuild never deletes the files nginx is serving.
set -euo pipefail

SRC="$(cd "$(dirname "$0")/.." && pwd)"
APP_DIR="$HOME/serrurerie-app"

cd "$SRC"
npm ci
npm run build

# Without a real site.url, canonicals and the sitemap point to example.com.
if grep -q "example.com" dist/sitemap-index.xml; then
  echo "site.url is still https://example.com: set it in src/config/site.ts first." >&2
  exit 1
fi

mkdir -p "$APP_DIR"
rm -rf "$APP_DIR/release.new"
cp -r dist "$APP_DIR/release.new"

# Keep the previous release for a quick rollback.
cd "$APP_DIR"
rm -rf release.old
if [ -d current ]; then mv current release.old; fi
mv release.new current

echo "Deployed. Rollback: cd $APP_DIR && mv current release.bad && mv release.old current"
