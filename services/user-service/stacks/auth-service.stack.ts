import { LambdaDomainName, Microservice } from '@cats-cradle/constructs';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import * as path from 'path';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { CognitoPool } from './cognito-pool';

export class AuthServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const stageName = process.env.STAGE_NAME ?? 'default';

    // User Pool
    const cognitoPool = new CognitoPool(this, `${id}-user-cognito-pool`, {
      stage: stageName,
    });

    const userPoolId = new ssm.StringParameter(this, `${id}-user-pool-id`, {
      parameterName: 'USER_POOL_ID',
      description: 'A unique identifier for an Amazon Cognito User Pool.',
      stringValue: cognitoPool.cognitoPool.userPoolId,
    });

    const userPoolClientId = new ssm.StringParameter(
      this,
      `${id}-user-pool-client-id`,
      {
        parameterName: 'USER_POOL_CLIENT_ID',
        description:
          'A unique identifier for a specific client application that interacts with your Amazon Cognito User Pool.',
        stringValue: cognitoPool.client.userPoolClientId,
      },
    );

    // Function

    const environment: { [key: string]: string } = {};
    environment.USER_POOL_ID = cognitoPool.cognitoPool.userPoolId;
    environment.USER_POOL_CLIENT_ID = cognitoPool.client.userPoolClientId;

    const microservice = new Microservice(this, 'user-service-stack', {
      projectRoot: path.join(__dirname, '..'),
      environment,
    });

    userPoolId.grantRead(microservice.getNodeJsFunction());
    userPoolClientId.grantRead(microservice.getNodeJsFunction());

    // API

    const apiEndpoint = new LambdaDomainName(this, `${id}-api-endpoint`, {
      stageName,
      subdomainName: 'user',
      proxyLambda: microservice.getNodeJsFunction(),
    });

    new cdk.CfnOutput(this, 'health check endpoint', {
      value: `${apiEndpoint.getBaseUrl()}/health`,
    });

    new cdk.CfnOutput(this, 'USER_POOL_ID', {
      value: cognitoPool.cognitoPool.userPoolId,
    });

    new cdk.CfnOutput(this, 'USER_POOL_CLIENT_ID', {
      value: cognitoPool.client.userPoolClientId,
    });
  }
}
