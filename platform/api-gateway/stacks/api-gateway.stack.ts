// import { Construct } from 'constructs';
// import { StackProps } from 'aws-cdk-lib';
// import * as cdk from 'aws-cdk-lib';
// import * as ssm from 'aws-cdk-lib/aws-ssm';
// import * as apigw from 'aws-cdk-lib/aws-apigateway';
// import * as acm from 'aws-cdk-lib/aws-certificatemanager';

// /**
//  * each api is broken up by client
//  * backends for front ends
//  * these are base clients which other stacks add resources to
//  */

// interface ApiGatewayStackProps extends cdk.StackProps {
//   domainName: string,
//   certificate: acm.Certificate
// }

// // eslint-disable-next-line import/prefer-default-export
// export class ApiGatewayStack extends cdk.NestedStack {
//   public apiGateway: apigw.RestApi;

//   constructor(scope: Construct, id: string, props: ApiGatewayStackProps) {
//     super(scope, id, props);

//     const { domainName, certificate } = props;

//     /**
//      * Mobile API Gateway
//      * used for mobile clients
//      */

//     /**
//      * Web API Gateway
//      * used for web browsers clients
//      */
//     const customDomain = new apigw.DomainName(this, `${id}-custom-domain`, {
//       domainName: `api.${domainName}`,
//       certificate: certificate,
//       endpointType: apigw.EndpointType.EDGE,
//       securityPolicy: apigw.SecurityPolicy.TLS_1_2,
//     });

//     this.apiGateway = new apigw.RestApi(this, `${id}-web-api-gateway`, {
//       restApiName: 'web-api-gateway',
//       deploy: true,
//     });

//     this.apiGateway.addDomainName('ApiDomain', {
//       domainName: customDomain.domainName,
//       certificate: certificate,
//       endpointType: apigw.EndpointType.EDGE,
//       securityPolicy: apigw.SecurityPolicy.TLS_1_2,
//     });

//   //   const mock = this.apiGateway.root.addResource('mock').addMethod(
//   //     'ANY',
//   //     new apigw.MockIntegration({
//   //       integrationResponses: [
//   //         {
//   //           statusCode: '200',
//   //         },
//   //       ],
//   //       passthroughBehavior: apigw.PassthroughBehavior.NEVER,
//   //       requestTemplates: {
//   //         'application/json': '{ "statusCode": 200 }',
//   //       },
//   //     }),
//   //     {
//   //       methodResponses: [{ statusCode: '200' }],
//   //     },
//   //   );

//   //   const webApiGatewayV1Resource = new apigw.Resource(
//   //     this,
//   //     `${id}-web-api-gateway-v1-resource`,
//   //     {
//   //       parent: this.apiGateway.root,
//   //       pathPart: 'v1',
//   //     },
//   //   );

//   //   // eslint-disable-next-line no-new
//   //   new ssm.StringParameter(this, `${id}-web-api-gateway-id`, {
//   //     description: 'Web API Gateway Rest API ID',
//   //     parameterName: 'web-api-gateway-rest-api-id',
//   //     stringValue: this.apiGateway.restApiId,
//   //   });

//   //   // eslint-disable-next-line no-new
//   //   new ssm.StringParameter(this, `${id}-web-api-gateway-resource-id`, {
//   //     description: 'Web Gateway Resource ID',
//   //     parameterName: 'web-api-gateway-root-resource-id',
//   //     stringValue: this.apiGateway.restApiRootResourceId,
//   //   });

//   //   // eslint-disable-next-line no-new
//   //   new ssm.StringParameter(this, `${id}-web-api-gateway-v1-resource-id`, {
//   //     description: 'Web API Gateway V1 Resource ID',
//   //     parameterName: 'web-api-gateway-v1-resource-id',
//   //     stringValue: webApiGatewayV1Resource.resourceId,
//   //   });

//   //   // eslint-disable-next-line no-new
//   //   new ssm.StringParameter(this, `${id}-web-mock-resource-id`, {
//   //     description: 'Web Mock Resource ID',
//   //     parameterName: 'web-mockapi-gateway-root-resource-id',
//   //     stringValue: this.apiGateway.restApiRootResourceId,
//   //   });

//   //   const deployment = new apigw.Deployment(
//   //     this,
//   //     `${id}-deployment${new Date().toISOString()}`,
//   //     { api: this.apiGateway, retainDeployments: false },
//   //   );

//   //   const stage = new apigw.Stage(this, `${id}-stage`, {
//   //     stageName: 'default',
//   //     deployment,
//   //   });
//   // }
// }
