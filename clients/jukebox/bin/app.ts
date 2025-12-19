#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AudioServiceStack } from '../stacks/audio-service.stack';

const app = new cdk.App();
new AudioServiceStack(app, 'AudioServiceStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT || process.env.AWS_ACCOUNT_ID,
    region:
      process.env.CDK_DEFAULT_REGION || process.env.AWS_REGION || 'us-east-1',
  },
});
