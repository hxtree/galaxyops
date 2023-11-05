#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MessageBusStack } from '../stacks/message-bus.stack';

const app = new cdk.App();
new MessageBusStack(app, 'message-bus-stack');
