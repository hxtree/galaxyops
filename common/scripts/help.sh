#!/bin/bash
# a list of commands displayed via help

cat <<EOF
rush [command]             run a command in bulk or globally.
rush sso                   authenticate to AWS SSO and set profile.
rush test                  run all unit tests.
rush nuke                  git clean, purge, and update.
rush purge                 purge packages.
rush update                update workspace files.
  --full                   full update of workspace files.
rush add -p @a/b           add a new package to app.
 --make-consistent         make package version consistant across monorepo.
 --dev                     install as dev dependency.
rush upgrade-interactive   interactively update packages.
 --make-consistent         make package version consistant across monorepo.

rushx [command]      run a command relative to the current working directory.
rushx cdk:bootstrap  bootstrap deploy for the first time.
rushx build          build projects.
rushx lint           eslint static code analysis.
rushx test           test a package within directory.
rushx docs           generate documents from code.
rushx cdk:synth      show synthesized CloudFormation template.
rushx cdk:diff       compare deployed stack with current state.
rushx cdk:deploy     deploy apps using AWS CDK.

npm run watch        watch for changes and compile.
cdk deploy --hotswap speed up dev deployment.
cdk watch            hotsawp on changes.
cdk doctor           Checks your CDK project for potential problems.
EOF
