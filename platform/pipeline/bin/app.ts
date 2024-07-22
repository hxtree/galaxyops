#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { awsAccounts } from '@galaxyops/constructs';
import { MainStack } from '../stacks/main.stack';

// TODO only deploy if in tools account
const TOOLS_DEPLOY = true;

if (TOOLS_DEPLOY) {
  const app = new cdk.App();
  new MainStack(app, 'MainStack', {
    env: {
      account: awsAccounts.tools.accountId,
      region: awsAccounts.tools.region,
    },
  });

  app.synth();
} else {
  console.log('skipping deployment not tools account');
}
