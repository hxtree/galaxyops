#!/bin/bash
# Setup AWS credentials and environment for CDK commands
# Usage: source setup-aws-cdk-env.sh

PROFILE=${AWS_PROFILE:-DeveloperSandbox}

# Check if already authenticated
if ! aws sts get-caller-identity --profile "$PROFILE" &>/dev/null; then
  echo "🔐 Authenticating with AWS SSO..."
  nx run aws-sso:start "$PROFILE" 2>/dev/null || true
  echo "🔐 Setting up AWS credentials for CDK..."
else
  echo "🔐 Using existing AWS credentials for CDK..."
fi

echo "   Profile: $PROFILE"

# Export credentials with error checking
CREDENTIALS=$(aws configure export-credentials --profile "$PROFILE" --format env 2>&1)
if [ $? -ne 0 ]; then
  echo "❌ Failed to export credentials for profile: $PROFILE"
  echo "$CREDENTIALS"
  return 1 2>/dev/null || exit 1
fi
eval "$CREDENTIALS"

export CDK_DEFAULT_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
export CDK_DEFAULT_REGION=$(aws configure get region --profile "$PROFILE" || echo 'us-east-1')

echo "   Account: $CDK_DEFAULT_ACCOUNT"
echo "   Region:  $CDK_DEFAULT_REGION"
echo "─────────────────────────────────────────────────────────────"
echo ""
