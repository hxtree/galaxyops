/* eslint-disable */
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { LambdaDomainName } from '@cats-cradle/constructs';

interface Secret {
  key: string;
}

export class MainStack extends cdk.Stack {
  secrets: Secret[] = [
    { key: 'CHARACTER_SVC_DOMAIN_NAME' },
    { key: 'EMAIL_MESSAGE_SVC_DOMAIN_NAME' },
    { key: 'HTML_TO_PDF_SVC_DOMAIN_NAME' },
    { key: 'INSTANCES_SVC_DOMAIN_NAME' },
    { key: 'LUCK_BY_DICE_SVC_DOMAIN_NAME' },
    { key: 'PLAYER_ACHIEVEMENTS_SVC_DOMAIN_NAME' },
  ];

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const healthCheckLambda = this.setupLambda(`${id}-health-check-lambda`);

    const lambdaDomainName = new LambdaDomainName(this, `${id}-dns-domain`, {
      subdomainName: 'api',
      proxyLambda: healthCheckLambda,
      stageName: 'default',
    });

    new cdk.CfnOutput(this, 'Endpoint', {
      value: lambdaDomainName.getBaseUrl(),
    });
  }

  setupLambda(lambdaId: string): lambda.Function {
    const environment: { [key: string]: string } = {};

    for (const secret of this.secrets) {
      environment[secret.key] = `{{resolve:ssm:/${secret.key}}}`;
    }

    // TODO have lambda handle cognito auth
    // TODO have lambda actually fetch from resources
    const lambdaFunction = new lambda.Function(this, lambdaId, {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
          exports.handler = async (event) => {
            // Respond with all environment variables
            return {
              statusCode: 200,
              body: JSON.stringify({"environment": process.env}),
            };
          };
        `),
      environment,
    });

    return lambdaFunction;
  }
}
