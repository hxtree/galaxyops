#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AdminClientStack } from '../stacks/admin-client.stack';

const app = new cdk.App();

new AdminClientStack(app, 'AdminClientStack', {});
