#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { DesignSystemStack } from '../stacks/design-system.stack';

const app = new App();
new DesignSystemStack(app, 'DesignSystemStack');
