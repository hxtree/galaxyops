#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { HtmlToPdfStack } from '../stacks/html-to-pdf.stack';

const app = new cdk.App();

new HtmlToPdfStack(app, 'HtmlToPdfStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT || process.env.AWS_ACCOUNT_ID,
    region:
      process.env.CDK_DEFAULT_REGION || process.env.AWS_REGION || 'us-east-1',
  },
});
