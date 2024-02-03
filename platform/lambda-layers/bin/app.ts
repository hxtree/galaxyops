#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { downloadChromiumZip } from '../stacks/download-lambda-layer';
import { MainStack } from '../stacks/main.stack';

downloadChromiumZip().then(() => {
  const app = new cdk.App();
  new MainStack(app, 'LambdaLayerMainStack', {});
});
