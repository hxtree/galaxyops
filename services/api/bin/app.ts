#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MainStack } from '../stacks/main.stack';

const app = new cdk.App();
new MainStack(app, 'ApiGatewayStack');
