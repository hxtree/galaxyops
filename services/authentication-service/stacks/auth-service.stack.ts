import { Microservice } from '@cats-cradle/constructs';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import * as path from 'path';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { CognitoPool } from './cognito-pool';

export class AuthServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const cognitoPool = new CognitoPool(this, 'UserCognitoPool', {
      stage: 'Beta',
    });

    const microservice = new Microservice(
      this,
      'authentication-service-stack',
      {
        path: 'auth',
        projectRoot: path.join(__dirname, '..'),
      },
    );

    /**
     * A User Pool ID is a unique identifier for an Amazon Cognito User Pool.
     *  A User Pool is a user directory that helps you manage and authenticate users.
     * It stores user attributes such as username, email, and phone number.
     */
    new ssm.StringParameter(this, `${id}-user-pool-id`, {
      description: 'Cognito User Pool ID',
      parameterName: 'cognito-user-pool-id',
      stringValue: cognitoPool.cognitoPool.userPoolId,
    });

    /**
     * A Client ID is a unique identifier for a specific client application
     * that interacts with your Amazon Cognito User Pool.
     */
    new ssm.StringParameter(this, `${id}-user-pool-client-id`, {
      description: 'Cognito User Pool Client ID',
      parameterName: 'cognito-user-pool-client-id',
      stringValue: cognitoPool.client.userPoolClientId,
    });

    new cdk.CfnOutput(this, 'Localhost API Example', {
      value: `${microservice.getBaseUrl()}/users`,
    });
  }
}
