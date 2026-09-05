#!/usr/bin/env bash
# Long-running Astro dev server for the public site (apps/web).
# Runs as a persistent Cloud Agent terminal so its logs stay visible.
set -euo pipefail

cd "$(dirname "$0")/.."

# shellcheck source=.cursor/use-node.sh
. .cursor/use-node.sh

# --host exposes the dev server on the VM's interfaces for browser testing.
exec pnpm --filter web dev --host
