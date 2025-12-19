#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MessageBusStack } from '../stacks/message-bus.stack';

const app = new cdk.App();
new MessageBusStack(app, 'message-bus-stack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT || process.env.AWS_ACCOUNT_ID,
    region:
      process.env.CDK_DEFAULT_REGION || process.env.AWS_REGION || 'us-east-1',
  },
});
