#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AppSyncStack } from '../stacks/app-sync.stack';

const app = new cdk.App();

new AppSyncStack(app, 'AppSyncStack', {});
