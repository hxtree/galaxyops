import {Construct} from 'constructs';
import {StackProps} from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

/**
 * each api is broken up by client
 * backends for frontends
 * these are base clients which other stacks add resources to
 */
export class ApiGatewayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    /**
     * Mobile API Gateway
     * used for mobile clients
     */

    // TODO

    /**
     * Web API Gateway
     * used for web browsers clients
     */
    const webApiGateway = new apigw.RestApi(this, 'web-api-gateway', {
      restApiName: `web-api-gateway`,
      deploy: false,
    });

    new ssm.StringParameter(this, 'web-api-gateway-id', {
      description: `Web API Gateway Rest API ID`,
      parameterName: 'web-api-gateway-rest-api-id',
      stringValue: webApiGateway.restApiId,
    });

    new ssm.StringParameter(this, 'web-api-gateway-resource-id', {
      description: `Web Gateway Resource ID`,
      parameterName: 'web-api-gateway-root-resource-id',
      stringValue: webApiGateway.restApiRootResourceId,
    });

    const mock = webApiGateway.root.addResource('mock').addMethod(
      'ANY',
      new apigw.MockIntegration({
        integrationResponses: [
          {
            statusCode: '200',
          },
        ],
        passthroughBehavior: apigw.PassthroughBehavior.NEVER,
        requestTemplates: {
          'application/json': '{ "statusCode": 200 }',
        },
      }),
      {
        methodResponses: [{statusCode: '200'}],
      },
    );

    new ssm.StringParameter(this, 'web-mock-resource-id', {
      description: `Web Mock Resource ID`,
      parameterName: 'web-mock-root-resource-id',
      stringValue: webApiGateway.restApiRootResourceId,
    });

    // // API Gateway resource
    // this.apiGateway = new LambdaRestApi(this, 'Endpoint', {
    //   handler: this.nodeJsFunction,
    //   defaultCorsPreflightOptions: {
    //     allowHeaders: [
    //       'Content-Type',
    //       'X-Amz-Date',
    //       'Authorization',
    //       'X-Api-Key',
    //     ],
    //     allowOrigins: Cors.ALL_ORIGINS,
    //     allowCredentials: true,
    //     allowMethods: ['GET', 'POST'],
    //   },
    // });
  }
}
