#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyPipelineStack } from '../stacks/pipeline.stack';
import { awsAccounts } from '@cats-cradle/constructs';

// TODO only deploy if in tools account
const TOOLS_DEPLOY = true;

if (TOOLS_DEPLOY) {
  const app = new cdk.App();
  // new MyPipelineStack(app, 'MyPipelineStack', {
  //   env: {
  //     // account: awsAccounts.tools.accountId,
  //     // region: awsAccounts.tools.region,
  //   },
  // });

  app.synth();
} else {
  console.log('skipping deployment not tools account');
}
