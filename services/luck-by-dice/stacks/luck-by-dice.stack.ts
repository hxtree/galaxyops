import { Microservice, LambdaDomainName } from '@cats-cradle/constructs';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import * as path from 'path';

export class LuckByDiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const stageName = process.env.STAGE_NAME ?? 'default';

    const microservice = new Microservice(this, 'luck-by-dice-stack', {
      projectRoot: path.join(__dirname, '..'),
    });

    const apiEndpoint = new LambdaDomainName(this, `${id}-api-endpoint`, {
      stageName,
      subdomainName: 'luck-by-dice',
      proxyLambda: microservice.getNodeJsFunction(),
    });

    new cdk.CfnOutput(this, 'health check endpoint', {
      value: `${apiEndpoint.getBaseUrl()}/health`,
    });

    new cdk.CfnOutput(this, 'test check endpoint', {
      value: `${apiEndpoint.getBaseUrl()}/dice-roll`,
    });
  }
}
