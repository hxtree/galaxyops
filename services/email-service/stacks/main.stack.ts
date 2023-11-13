import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EmailVerificationStack } from './email-verification.stack';
import { EmailServiceStack } from './email-service.stack';

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new EmailVerificationStack(this, 'EmailVerificationStack');

    new EmailServiceStack(this, 'EmailServiceStack');
  }
}
