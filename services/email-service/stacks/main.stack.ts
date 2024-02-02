import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { EmailVerificationStack } from './email-verification.stack';
import { EmailServiceStack } from './email-service.stack';

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new EmailVerificationStack(this, 'EmailVerificationStack');

    const emailServiceStack = new EmailServiceStack(this, 'EmailServiceStack');

    // new cdk.CfnOutput(this, 'Localhost API Example', {
    //   value: `${emailServiceStack.microservice.getBaseUrl()}/`,
    // });
  }
}
