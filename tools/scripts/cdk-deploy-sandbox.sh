#!/bin/bash

nx run-many --target=build --all

# Start the command in the background
nx run aws-sso:start DeveloperSandbox &

# Capture the PID of the last command
PID=$!

# Wait for the command to complete
wait $PID

# Continue with the next commands
# TODO exclude pipeline projects
nx run-many --target=cdk:bootstrap --all
nx run-many --target=cdk:deploy --projects=tag:scope:platform --parallel=false --require-approval never
nx run-many --target=cdk:deploy --projects=tag:scope:services --parallel=false --require-approval never
nx run-many --target=cdk:deploy --projects=tag:scope:middleware --parallel=false --require-approval never
nx run-many --target=cdk:deploy --projects=tag:scope:clients --parallel=false --require-approval never