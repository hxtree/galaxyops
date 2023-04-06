#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { WeatherControlStack } from '../stacks/weather-control-stack';

const app = new cdk.App();
new WeatherControlStack(app, 'WeatherControlStack');
