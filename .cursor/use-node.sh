#!/usr/bin/env bash
# Select the Node runtime this repo expects.
#
# The Cloud Agent base image ships Node 22 on PATH (as /exec-daemon/node), but
# this repo requires Node >=24 (package.json "engines") and CI runs on node@24
# (.github/workflows/ci.yml). Load nvm, ensure Node 24 is present, and pin its
# bin dir to the front of PATH so pnpm/astro run under the expected runtime.
#
# Meant to be sourced, not executed:  . .cursor/use-node.sh
set -euo pipefail

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
# shellcheck disable=SC1091
. "$NVM_DIR/nvm.sh"

# Idempotent: a no-op reselect if v24 is already installed.
nvm install 24 >/dev/null
nvm alias default 24 >/dev/null

export PATH="$NVM_DIR/versions/node/$(nvm version 24)/bin:$PATH"

# Provide the repo-pinned pnpm (package.json "packageManager") via Corepack so
# pnpm runs under Node 24 regardless of the base image's global pnpm.
corepack enable >/dev/null 2>&1 || true
corepack prepare pnpm@11.25.0 --activate >/dev/null 2>&1 || true
