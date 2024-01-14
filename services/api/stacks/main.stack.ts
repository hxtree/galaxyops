/* eslint-disable */
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { LambdaDomainName } from '@cats-cradle/constructs';

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // TODO set SSM set as env during deployment
    const routes = {
      '/roll': 'LUCK_BY_DICE_SVC_DOMAIN_NAME',
    };

    // TODO
    const healthCheckLambda = new lambda.Function(
      this,
      `${id}-health-check-lambda`,
      {
        runtime: lambda.Runtime.NODEJS_16_X,
        handler: 'index.handler',
        code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          return {
            statusCode: 200,
            body: JSON.stringify({"status": "ok","info": {"api": {"status": "up"}}}),
          };
        };
      `),
      },
    );

    const lambdaDomainName = new LambdaDomainName(this, `${id}-dns-domain`, {
      subdomainName: 'api',
      proxyLambda: healthCheckLambda,
      stageName: 'default',
    });

    new cdk.CfnOutput(this, 'dd', {
      value: lambdaDomainName.getBaseUrl(),
    });
  }
}
