#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { HtmlToPdfStack } from '../stacks/html-to-pdf.stack';
import { downloadChromiumZip } from '../stacks/download-lambda-layer';

downloadChromiumZip().then(() => {
  const app = new cdk.App();

  new HtmlToPdfStack(app, 'HtmlToPdfStack', {});
});
