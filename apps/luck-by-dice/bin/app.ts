#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';

// instruct CDK deploy to build stack using App
import {LuckByDiceStack} from '../stacks/api-stack';

const app = new cdk.App();
new LuckByDiceStack(app, 'LuckByDiceStack');
