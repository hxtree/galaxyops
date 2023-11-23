#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PlayerAchievementsStack } from '../stacks/player-achievements.stack';

const app = new cdk.App();
new PlayerAchievementsStack(app, 'PlayerAchievementsStack');
