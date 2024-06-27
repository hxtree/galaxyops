#!/bin/bash

# TODO ADD
# pnpm nx test                     | run all unit tests.
# pnpm nx sso                      | authenticate to AWS SSO and set profile.
# pnpm nx nuke                     | git clean, purge, and update.
# pnpm nx purge                    | purge packages.

cat <<EOF
pnpm nx dep-graph                    | graph dependencies.
pnpm update                          | update workspace files.
pnpm add @a/b                        | add a new package to app.
pnpm up -r --workspace --interactive | make package versions consistent across.

pnpm nx release
pnpm nx run-many [command] --all     | run a command in bulk or globally.
pnpm nx run package:[command]        | run a command relative to the current working directory.
pnpm nx run package:build            | build projects.
pnpm nx run package:watch            | watch for changes and compile.
pnpm nx run package:lint             | eslint static code analysis.
pnpm nx run package:test             | test a package within directory.
pnpm nx run package:docs             | generate documents from code.
pnpm nx run package:cdk:bootstrap    | bootstrap deploy for the first time.
pnpm nx run package:cdk:synth        | show synthesized CloudFormation template.
pnpm nx run package:cdk:diff         | compare deployed stack with current state.
pnpm nx run package:cdk:deploy       | deploy apps using AWS CDK.
pnpm nx run package:cdk deploy --hotswap        | speed up dev deployment.
pnpm nx run package:cdk watch                   | hotswap on changes.
pnpm nx run package:cdk doctor                  | Checks your CDK project for potential problems.
EOF
