#!/bin/bash

# Start the command in the background
nx run aws-sso:start DeveloperSandbox &

# Capture the PID of the last command
PID=$!

# Wait for the command to complete
wait $PID

# Continue with the next commands
nx run-many --target=build --all
nx affected --target=cdk:deploy --base=main~1 --head=main --parallel=false --require-approval never