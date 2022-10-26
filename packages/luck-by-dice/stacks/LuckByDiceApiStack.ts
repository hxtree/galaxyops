import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class LuckByDiceApiStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda resource
    const awsLambdaResource = new lambda.Function(this, 'IndexHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('dist/src'),
      handler: 'index.handler',
    });

    // API Gateway resource
    const rest = new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: awsLambdaResource,
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

    // TODO DTO?
    new cdk.CfnOutput(this, 'endpoint', {
      value: `${rest.url}?notionation10d4&luck=4`,
    });
  }
}
