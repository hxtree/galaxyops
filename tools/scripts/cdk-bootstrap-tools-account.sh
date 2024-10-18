#!/bin/bash

# Start the command in the background
nx run aws-sso:start DeveloperSandbox &

# Capture the PID of the last command
PID=$!

# Wait for the command to complete
wait $PID

# Continue with the next commands
nx run-many --target=build --all
nx run-many --target=cdk:bootstrap --projects=scope:platform-aws-tools-account --parallel=false --require-approval never
