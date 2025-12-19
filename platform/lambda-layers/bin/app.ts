#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { downloadChromiumZip } from '../stacks/download-lambda-layer';
import { MainStack } from '../stacks/main.stack';

downloadChromiumZip().then(() => {
  const app = new cdk.App();
  new MainStack(app, 'LambdaLayerMainStack', {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT || process.env.AWS_ACCOUNT_ID,
      region:
        process.env.CDK_DEFAULT_REGION || process.env.AWS_REGION || 'us-east-1',
    },
  });
});
