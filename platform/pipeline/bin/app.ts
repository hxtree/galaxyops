#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DefaultPipelineStack } from '../stacks/default-pipeline.stack';
import { awsAccounts } from '@cats-cradle/constructs';

// TODO only deploy if in tools account
const TOOLS_DEPLOY = true;

if (TOOLS_DEPLOY) {
  const app = new cdk.App();
  new DefaultPipelineStack(app, 'DefaultPipelineStack', {
    env: {
      account: awsAccounts.tools.accountId,
      region: awsAccounts.tools.region,
    },
  });

  app.synth();
} else {
  console.log('skipping deployment not tools account');
}
