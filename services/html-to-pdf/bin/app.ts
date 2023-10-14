#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { HtmlToPdfStack } from '../stacks/main-stack';

const app = new cdk.App();

new HtmlToPdfStack(app, 'HtmlToPdfStack', {});
