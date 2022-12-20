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
      // deploy: true,      // deploy: false,
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

    const webApiGatewayV1Resource = new apigw.Resource(
      this,
      `web-api-gateway-v1-resource`,
      {
        parent: webApiGateway.root,
        pathPart: 'v1',
      },
    );

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

    new ssm.StringParameter(this, 'web-api-gateway-v1-resource-id', {
      description: `Web API Gateway V1 Resource ID`,
      parameterName: 'web-api-gateway-v1-resource-id',
      stringValue: webApiGatewayV1Resource.resourceId,
    });

    new ssm.StringParameter(this, 'web-mock-resource-id', {
      description: `Web Mock Resource ID`,
      parameterName: 'web-mockapi-gateway-root-resource-id',
      stringValue: webApiGateway.restApiRootResourceId,
    });

    const deployment = new apigw.Deployment(
      this,
      'deployment' + new Date().toISOString(),
      {api: webApiGateway, retainDeployments: false},
    );

    const stage = new apigw.Stage(this, 'default', {
      stageName: 'prod',
      deployment,
    });

    // const deployment = new apigw.Deployment(
    //   this,
    //   `${microserviceName}-deployment-` + new Date().toISOString(),
    //   {
    //     api: apigw.RestApi.fromRestApiId(this, 'RestApi', this.restApiId),
    //     description: `...`,
    //     retainDeployments: true,
    //   },
    // );

    // // // props.methods!.forEach((method) => deployment.node.addDependency(method));
    // // //  if the 'stageName' already exists (from the core apigateway deployment) then the existing stage will be used !
    // const stage = new apigw.Stage(this, `${microserviceName}-stage`, {
    //   deployment,
    // });

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
