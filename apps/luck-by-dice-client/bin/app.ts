#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';

// instruct CDK deploy to build stack using App
import {MainStack} from '../stacks/MainStack';

const app = new cdk.App();
new MainStack(app, 'MainStack');
