#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { NestJsLambdaLayerStack } from '../stacks/nestjs-lambda-layer.stack';

const app = new cdk.App();
new NestJsLambdaLayerStack(app, 'MainStack');
