#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { EmailServiceStack } from '../stacks/email-service-stack';

const app = new cdk.App();
new EmailServiceStack(app, 'EmailServiceStack');
