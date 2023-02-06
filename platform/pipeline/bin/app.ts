#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyPipelineStack } from '../stacks/pipeline.stack';
import { awsAccounts } from '@cats-cradle/constructs';

// TODO only deploy if in tools account
const TOOLS_DEPLOY = false;

if (TOOLS_DEPLOY) {
  const app = new cdk.App();
  new MyPipelineStack(app, 'MyPipelineStack', {
    env: {
      account: awsAccounts.dev.accountId,
      region: awsAccounts.dev.region,
    },
  });

  app.synth();
} else {
  console.log('skipping deployment not tools account');
}
