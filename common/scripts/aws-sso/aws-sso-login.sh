#!/usr/bin/env bash
#
# This script is for authenticating to aws w/ SSO. Unfortunately, SSO login doesn't set a `.aws/credentials` file. This
# script adds that functionality so Terraform can continue to auth w/ AWS on our local machines.
#
# This is a known issue:
# - https://github.com/hashicorp/terraform-provider-aws/issues/10110
# - https://github.com/aws/aws-cli/issues/4982
#
# It assumes named profiles set up in ~/.aws/config (https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)
#
# ./scripts/aws-sso-login.sh <PROFILE NAME>

set -e

main() {
  local profile="${2}" # assumes profiles setup in ~/.aws/config
  if [ -z "${profile}" ]; then
    echo -e "Account profile arg is required\nUSAGE: ./aws-sso-login.sh <PROFILE NAME>" && exit 1
  fi

  echo "Logging in..."
  # Retrieves SSO token that represents a session scoped to the user; NOT scoped to the account/role.
  # This command primarily just needs the start url and SSO region associated with the profile, but currently *validates*
  # account ID, role name (there's an open issue requesting the latter to not be needed: https://github.com/aws/aws-cli/issues/5727)

  # The resulting SSO token is cached in ~/.aws/sso/cache (one file per start url).
  # Note, however, this command forces a token refresh every time, despite cached token.
  aws sso login --profile "${profile}"

  local cli_cache_dir cli_cache_file cache_file_contents
  cli_cache_dir="${HOME}/.aws/cli/cache"

  # Loads SSO token from SSO cache, retrieves creds and caches at ~/.aws/cli/cache
  echo "Retrieving & caching creds for: ${profile}..."
  aws sts get-caller-identity --profile "${profile}"

  # The following is only needed for Terraform
  # Runs aws configure with creds pulled from cache; results in ~/.aws/credentials
  cli_cache_file="$(find "${cli_cache_dir}" | sort --general-numeric-sort | tail -n1)"
  cache_file_contents="$(cat "${cli_cache_file}")"

  aws configure set aws_access_key_id "$(jq -r '.Credentials.AccessKeyId' <<<"${cache_file_contents}")"
  aws configure set aws_secret_access_key "$(jq -r '.Credentials.SecretAccessKey' <<<"${cache_file_contents}")"
  aws configure set aws_session_token "$(jq -r '.Credentials.SessionToken' <<<"${cache_file_contents}")"
}

main "${@}"