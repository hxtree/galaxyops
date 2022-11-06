#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {LuckByDiceStack} from '../stacks/luck-by-dice-stack';

const app = new cdk.App();
new LuckByDiceStack(app, 'LuckByDiceStack');
