#!/usr/bin/env bash
# Repository bootstrap for Cloud Agents: refresh workspace dependencies.
# Idempotent and safe to re-run against cached state.
set -euo pipefail

cd "$(dirname "$0")/.."

# shellcheck source=.cursor/use-node.sh
. .cursor/use-node.sh

echo "node: $(node --version)"
echo "pnpm: $(pnpm --version)"

pnpm install --frozen-lockfile
