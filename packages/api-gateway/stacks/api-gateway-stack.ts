import {Construct} from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import {StackProps} from 'aws-cdk-lib';

export class ApiGatewayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // // API Gateway resource
    // const rest = new apigateway.LambdaRestApi(this, 'Endpoint', {
    //   handler: lambdaFunction,
    //   defaultCorsPreflightOptions: {
    //     allowHeaders: [
    //       'Content-Type',
    //       'X-Amz-Date',
    //       'Authorization',
    //       'X-Api-Key',
    //     ],
    //     allowOrigins: apigateway.Cors.ALL_ORIGINS,
    //     allowCredentials: true,
    //     allowMethods: ['GET', 'POST'],
    //   },
    // });

    const restApi = new apigateway.RestApi(this, 'my-api', {
      restApiName: `my-api`,
    });

    const mockIntegration = new apigateway.MockIntegration();

    const someResource = new apigateway.Resource(this, 'new-resource', {
      parent: restApi.root,
      pathPart: 'somePath',
      defaultIntegration: mockIntegration,
    });
    someResource.addMethod('GET', mockIntegration);

    // https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-ssm.StringListParameter.html
    new ssm.StringParameter(this, 'rest-api', {
      description: 'ApiGateway arn',
      parameterName: 'rest-api',
      stringValue: restApi.restApiId,
    });

    new cdk.CfnOutput(this, `my-api-export`, {
      exportName: `my-api-id`,
      value: restApi.restApiId,
    });

    new cdk.CfnOutput(this, `my-api-somepath-export`, {
      exportName: `my-api-somepath-resource-id`,
      value: someResource.resourceId,
    });

    new cdk.CfnOutput(this, 'Region', {
      value: this.region,
    });
  }
}

// const restApi = apigateway .RestApi.fromRestApiAttributes(this, "my-api", {
//   restApiId: cdk.Fn.importValue(`my-api-id`),
//   rootResourceId: cdk.Fn.importValue(`my-api-somepath-resource-id`),
// });

// const mockIntegration = new apigateway .MockIntegration();
// new apigateway .Resource(this, "new-resource", {
//   parent: restApi.root,
//   pathPart: "new",
//   defaultIntegration: mockIntegration,
// });
