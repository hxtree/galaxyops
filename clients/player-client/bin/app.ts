#!/usr/bin/env node

import * as cdk from 'aws-cdk-lib';
import { PlayerClientStack } from '../stacks/player-client.stack';

const app = new cdk.App();

new PlayerClientStack(app, 'PlayerClientStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT || process.env.AWS_ACCOUNT_ID,
    region:
      process.env.CDK_DEFAULT_REGION || process.env.AWS_REGION || 'us-east-1',
  },
});
