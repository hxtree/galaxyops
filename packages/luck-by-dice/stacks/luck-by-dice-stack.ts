import {Microservice} from '@org-platform/constructs';
import {Construct} from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import {StackProps} from 'aws-cdk-lib';

export class LuckByDiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const microservice = new Microservice(this, 'luck-by-dice-stack', {});

    // API Gateway resource
    const rest = new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: microservice.getNodeJsFunction(),
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowCredentials: true,
        allowMethods: ['GET', 'POST'],
      },
    });

    // Store API Gateway URL
    new ssm.StringParameter(this, 'Parameter', {
      description: 'LuckByDiceApiUrl',
      parameterName: 'LuckByDiceApiUrl',
      stringValue: `${rest.url}api`,
    });

    new cdk.CfnOutput(this, 'Region', {
      value: this.region,
    });

    new cdk.CfnOutput(this, 'Localhost API Docs', {
      value: `${rest.url}roll/notation/1d6/luck/2`,
    });
  }
}
