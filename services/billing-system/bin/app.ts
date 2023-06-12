#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { KillBillStack } from '../stacks/kill-bill-stack';

const app = new cdk.App();

new KillBillStack(app, 'KillBillStack', {});
