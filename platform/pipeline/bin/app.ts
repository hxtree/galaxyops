#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyPipelineStack } from '../stacks/pipeline.stack';
import { awsAccounts } from '@catscradle/constructs';

const app = new cdk.App();
new MyPipelineStack(app, 'MyPipelineStack', {
  env: {
    account: awsAccounts.dev.accountId,
    region: awsAccounts.dev.region,
  },
});

app.synth();
