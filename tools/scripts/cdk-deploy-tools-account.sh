#!/bin/bash

nx run-many --target=build --all

# Start the command in the background
nx run aws-sso:start tools &

# Capture the PID of the last command
PID=$!

# Wait for the command to complete
wait $PID

# Continue with the next commands
nx run-many --target=cdk:bootstrap --all
nx run-many --target=cdk:deploy --scope:platform-aws-tools-account --parallel=false