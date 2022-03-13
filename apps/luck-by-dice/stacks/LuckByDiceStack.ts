import * as cdk from 'aws-cdk-lib';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class LuckByDiceStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda resource
    const awsLambdaResource = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('dist/src'),
      handler: 'index.handler'
    });

    // API Gateway resource
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: awsLambdaResource
    });

  }
}