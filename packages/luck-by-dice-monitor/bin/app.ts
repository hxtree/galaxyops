#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';

// instruct CDK deploy to build stack using App
import {LuckByDiceClientStack} from '../stacks/LuckByDiceClientStack';

const app = new cdk.App();
new LuckByDiceClientStack(app, 'LuckByDiceClientStack');
