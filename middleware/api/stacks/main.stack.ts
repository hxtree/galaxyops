/* eslint-disable */
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { LambdaDomainName, Microservice } from '@galaxyops/constructs';
import path from 'path';

interface Secret {
  key: string;
}

export class MainStack extends cdk.Stack {
  secrets: Secret[] = [
    { key: 'API_SVC_DOMAIN_NAME' },
    { key: 'USER_SVC_DOMAIN_NAME' },
    { key: 'CHARACTER_SHEETS_SVC_DOMAIN_NAME' },
    { key: 'EMAIL_SERVICE_SVC_DOMAIN_NAME' },
    { key: 'HTML_TO_PDF_SVC_DOMAIN_NAME' },
    { key: 'INSTANCES_SVC_DOMAIN_NAME' },
    { key: 'LUCK_BY_DICE_SVC_DOMAIN_NAME' },
    { key: 'PLAYER_ACHIEVEMENTS_SVC_DOMAIN_NAME' },
  ];

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const environment: { [key: string]: string } = {};

    for (const secret of this.secrets) {
      environment[secret.key] = `{{resolve:ssm:/${secret.key}}}`;
    }

    // TODO add abilitiy for lambda to handle cognito auth
    const lambdaFunction = new Microservice(this, `api-service-stack`, {
      projectRoot: path.join(__dirname, '..'),
      environment: environment,
    });

    const lambdaDomainName = new LambdaDomainName(this, `${id}-dns-domain`, {
      subdomainName: 'api',
      proxyLambda: lambdaFunction.getNodeJsFunction(),
      stageName: 'default',
    });

    lambdaDomainName.domainName;

    new cdk.CfnOutput(this, 'Endpoint', {
      value: lambdaDomainName.getBaseUrl(),
    });
  }
}
