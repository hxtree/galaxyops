#!/bin/bash
# Setup AWS credentials and environment for CDK commands
# Usage: source setup-aws-cdk-env.sh

PROFILE=${AWS_PROFILE:-DeveloperSandbox}
echo "🔐 Setting up AWS credentials for CDK..."
echo "   Profile: $PROFILE"

eval "$(aws configure export-credentials --profile $PROFILE --format env)"
export CDK_DEFAULT_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
export CDK_DEFAULT_REGION=$(aws configure get region --profile $PROFILE || echo 'us-east-1')

echo "   Account: $CDK_DEFAULT_ACCOUNT"
echo "   Region:  $CDK_DEFAULT_REGION"
echo "─────────────────────────────────────────────────────────────"
echo ""
