#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DynamoImageStack } from '../stacks/dynamo-image.stack';

const app = new cdk.App();
new DynamoImageStack(app, 'DynamoImageStack');
