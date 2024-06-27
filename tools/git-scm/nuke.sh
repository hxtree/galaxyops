#!/usr/bin/env bash
git clean -xdf

rm -rf node_modules
pnpm store prune
pnpm update
pnpm nx run-many --target=build --all