#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {ApiGatewayStack} from '../stacks/api-gateway-stack';

const app = new cdk.App();
new ApiGatewayStack(app, 'apigw-stack');
