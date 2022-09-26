#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AppsyncCdkAppStack } from '../stacks/appsync-cdk-app-stack';

const app = new cdk.App();
new AppsyncCdkAppStack(app, 'AppsyncCdkAppStack');
