#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';

// instruct CDK deploy to build stack using App
import {LuckByDiceStack} from '../stacks/LuckByDiceStack';

const app = new cdk.App();
new LuckByDiceStack(app, 'LuckByDiceStack');
