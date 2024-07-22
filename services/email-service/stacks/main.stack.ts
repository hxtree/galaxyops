import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaDomainName } from '@galaxyops/constructs';
import { EmailVerificationStack } from './email-verification.stack';
import { EmailServiceStack } from './email-service.stack';

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new EmailVerificationStack(this, 'EmailVerificationStack');

    const stageName = process.env.STAGE_NAME ?? 'default';

    const emailServiceStack = new EmailServiceStack(this, 'EmailServiceStack');

    const apiEndpoint = new LambdaDomainName(this, `${id}-api-endpoint`, {
      stageName,
      subdomainName: 'email-service',
      proxyLambda: emailServiceStack.microservice.getNodeJsFunction(),
    });

    new cdk.CfnOutput(this, 'health check endpoint', {
      value: `${apiEndpoint.getBaseUrl()}/health`,
    });
  }
}
