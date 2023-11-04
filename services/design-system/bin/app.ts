#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DesignSystemStack } from '../stacks/design-system.stack';

const app = new cdk.App();
new DesignSystemStack(app, 'DesignSystemStack');
