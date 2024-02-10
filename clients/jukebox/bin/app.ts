#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AudioServiceStack } from '../stacks/audio-service.stack';

const app = new cdk.App();
new AudioServiceStack(app, 'AudioServiceStack');
