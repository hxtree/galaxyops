#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LuckByDiceStack } from '../stacks/luck-by-dice.stack';

const app = new cdk.App();

new LuckByDiceStack(app, 'LuckByDiceStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT || process.env.AWS_ACCOUNT_ID,
    region:
      process.env.CDK_DEFAULT_REGION || process.env.AWS_REGION || 'us-east-1',
  },
});
