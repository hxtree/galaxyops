#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { MainStack } from '../stacks/main.stack';

const app = new App();
new MainStack(app, 'DesignSystem');
