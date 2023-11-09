#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { InstanceStack } from '../stacks/instance.stack';

const app = new cdk.App();
new InstanceStack(app, 'InstanceStack');
