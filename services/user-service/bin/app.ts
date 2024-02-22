#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AuthServiceStack } from '../stacks/auth-service.stack';

const app = new cdk.App();
new AuthServiceStack(app, 'AuthServiceStack');
