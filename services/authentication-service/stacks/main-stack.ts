import { Microservice } from '@cats-cradle/constructs';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import * as path from 'path';

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const microservice = new Microservice(
      this,
      'authentication-service-stack',
      {
        path: 'character',
        projectRoot: path.join(__dirname, '..'),
      },
    );

    new cdk.CfnOutput(this, 'Localhost API Example', {
      value: `${microservice.getBaseUrl()}/archetypes`,
    });
  }
}
