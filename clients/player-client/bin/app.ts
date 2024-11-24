#!/usr/bin/env node

import * as cdk from 'aws-cdk-lib';
import { PlayerClientStack } from '../stacks/player-client.stack';

const app = new cdk.App();

new PlayerClientStack(app, 'PlayerClientStack', {});
