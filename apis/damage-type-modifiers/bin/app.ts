#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';

// instruct CDK deploy to build stack using App
import {LuckByDiceApiStack} from '../stacks/LuckByDiceApiStack';

const app = new cdk.App();

// stack name in CloudFormation
new LuckByDiceApiStack(app, 'LuckByDiceApiStack');
