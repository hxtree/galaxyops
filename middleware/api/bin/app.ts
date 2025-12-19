#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MainStack } from '../stacks/main.stack';

const app = new cdk.App();
new MainStack(app, 'ApiGatewayStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT || process.env.AWS_ACCOUNT_ID,
    region:
      process.env.CDK_DEFAULT_REGION || process.env.AWS_REGION || 'us-east-1',
  },
});
