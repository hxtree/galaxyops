#!/usr/bin/env bash
LC_ALL=C

LOCAL_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

VALID_BRANCH_REGEX="^(feature|bugfix|improvement|hotfix|dependabot)\/[a-z0-9.\/_-]+$"

message="Branch name does not adhere to : $VALID_BRANCH_REGEX. Rename branch to a valid name and try again."

if [[ ! $LOCAL_BRANCH =~ $VALID_BRANCH_REGEX ]]; then
  echo "$message"
  exit 1
fi

exit 0
