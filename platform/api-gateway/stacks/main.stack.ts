/* eslint-disable */
import * as cdk from 'aws-cdk-lib/core';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { LogGroup } from 'aws-cdk-lib/aws-logs';

export class ApiGatewayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Retrieve parameters from SSM Parameter Store
    const hostedZoneId = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${id}-hosted-zone-id`,
      {
        parameterName: 'my-domains-hosted-zone-id',
      },
    ).stringValue;

    const domainName = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${id}-hosted-zone-name`,
      {
        parameterName: 'my-domains-hosted-zone-name',
      },
    ).stringValue;

    const acmCertificateArn = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${id}-orgformation-certs-wildcard-cert1-arn`,
      {
        parameterName: 'orgformation-certs-wildcard-cert1-arn',
      },
    ).stringValue;

    const rootDomain = 'sandbox.nekosgate.com';

    // const zone = route53.HostedZone.fromLookup(this, "baseZone", {
    //   domainName: rootDomain,
    // });
    const hostedZone = route53.PublicHostedZone.fromHostedZoneAttributes(
      this,
      `${id}-hosted-zone`,
      {
        hostedZoneId,
        zoneName: domainName,
      },
    );

    // const backend = new lambda.Function(this, "MyLayeredLambda", {
    //   code: new lambda.InlineCode("foo"),
    //   handler: "index.handler",
    //   runtime: lambda.Runtime.NODEJS_10_X,
    // });

    // Create an ACM certificate from the ARN
    const acmCertificate = acm.Certificate.fromCertificateArn(
      this,
      `${id}-acm-certificate`,
      acmCertificateArn,
    );

    // const restApi = new apigw.LambdaRestApi(this, "myapi", {
    //   handler: backend,
    //   domainName: {
    //     domainName: `api-test.${rootDomain}`,
    //     certificate: acmCertificate,
    //     endpointType: apigw.EndpointType.REGIONAL,
    //   },
    // });

    // Create a Log Group for API Gateway access logs
    // const logs = new LogGroup(this, `${id}-LogGroup`);

    // const restApi = new apigw.RestApi(this, `${id}-web-api-gateway`, {
    //   restApiName: 'web-api-gateway',
    //   deployOptions: {
    //     stageName: 'default', // Default stage name
    //     throttlingBurstLimit: 10,
    //     throttlingRateLimit: 10,
    //     accessLogDestination: new apigw.LogGroupLogDestination(logs),
    //   },
    //   // domainName: {
    //   //   domainName: 'api-test.sandbox.nekosgate.com', //fqdn,
    //   //   certificate: acmCertificate,
    //   //   endpointType: apigw.EndpointType.EDGE,
    //   //   securityPolicy: apigw.SecurityPolicy.TLS_1_2,
    //   // },
    // });

    //     // Create a domain name for the API Gateway
    // const domainNameObj = new apigw.DomainName(this, `${id}-custom-domain`, {
    //   domainName:  `api-test.${rootDomain}`,
    //   certificate: acmCertificate,
    // });

    // // Create an API mapping for the custom domain
    // new apigw.BasePathMapping(this, `${id}-base-path-mapping`, {
    //   domainName: domainNameObj,
    //   restApi: restApi,
    // });

    // Create a mock API endpoint
    // const mock = restApi.root.addResource('mock').addMethod(
    //   'ANY',
    //   new apigw.MockIntegration({
    //     integrationResponses: [{ statusCode: '200' }],
    //     passthroughBehavior: apigw.PassthroughBehavior.NEVER,
    //     requestTemplates: {
    //       'application/json': '{ "statusCode": 200 }',
    //     },
    //   }),
    //   {
    //     methodResponses: [{ statusCode: '200' }],
    //   },
    // );
    // const apigwDomainName = new DomainName(scope, `${props.region}DomainName`, {
    // 	domainName: domainName,
    // 	acmCertificate,
    //   securityPolicy: apigw.SecurityPolicy.TLS_1_2,
    // });

    new cdk.CfnOutput(this, 'hostedZone', {
      value: hostedZone.zoneName,
    });
    console.log(hostedZone);

    const shortHostedZone = route53.HostedZone.fromHostedZoneAttributes(
      this,
      `HostedZone-ss`,
      {
        hostedZoneId: hostedZone.hostedZoneId,
        zoneName: hostedZone.zoneName,
      },
    );

    const stage = 'default';

    const shortUrl = 'api-test.sandbox.nekosgate.com';

    const forwarderApi = new apigw.RestApi(this, `ForwarderApi-${stage}`, {
      deployOptions: {
        stageName: stage,
        throttlingBurstLimit: 10,
        throttlingRateLimit: 10,
      },
      domainName: {
        domainName: shortUrl,
        certificate: acmCertificate,
        endpointType: apigw.EndpointType.EDGE,
        //   securityPolicy: apigw.SecurityPolicy.TLS_1_2,
      },
    });

    // Create a resource for shared path
    const sharedResource = forwarderApi.root.addResource('shared');

    const mock = forwarderApi.root.addResource('mock').addMethod(
      'ANY',
      new apigw.MockIntegration({
        integrationResponses: [{ statusCode: '200' }],
        passthroughBehavior: apigw.PassthroughBehavior.NEVER,
        requestTemplates: {
          'application/json': '{ "statusCode": 200 }',
        },
      }),
      {
        methodResponses: [{ statusCode: '200' }],
      },
    );

    new route53.ARecord(this, `ShortARecord-${stage}`, {
      zone: shortHostedZone,
      recordName: shortUrl,
      target: route53.RecordTarget.fromAlias(
        new route53Targets.ApiGateway(forwarderApi),
      ),
    });

    // new route53.ARecord(this, 'AliasRecord', {
    //   zone: shortHostedZone,
    //   // target: route53.RecordTarget.fromAlias(new route53Targets.ApiGateway(restApi)),

    //   target: route53.RecordTarget.fromAlias(
    //     new route53Targets.ApiGatewayDomain(domainNameObj)
    //   ),
    // })

    // new route53.ARecord(this, `${id}-short-arecord`, {
    //   zone: hostedZone,
    //   recordName: 'api-test.sandbox.nekosgate.com',
    //   target: route53.RecordTarget.fromAlias(
    //     new route53Targets.ApiGateway(restApi)
    //   ),
    // });

    // new route53.ARecord(this, "CustomDomainAliasRecord", {
    //   zone: hostedZone,
    //   recordName: domainName,
    //   target: route53.RecordTarget.fromAlias(
    //     new route53Targets.ApiGatewayDomain(restApi.domainName),
    //     // new route53Targets.ApiGateway(restApi)
    //   ),
    // });

    // new route53.ARecord(this, "apiDNS", {
    //   zone: hostedZone,
    //   recordName: 'api-test.sandbox.nekosgate.com',
    //   target: route53.RecordTarget.fromAlias(
    //     new route53Targets.ApiGateway(restApi)
    //   ),
    //  ttl: Duration.seconds(30),
    // });
  }
}

// import * as acm from 'aws-cdk-lib/aws-certificatemanager';
// import * as cdk from 'aws-cdk-lib/core';
// import { Construct } from 'constructs';
// import * as route53 from 'aws-cdk-lib/aws-route53';
// import * as targets from 'aws-cdk-lib/aws-route53-targets';
// import * as ssm from 'aws-cdk-lib/aws-ssm';
// import * as apigw from 'aws-cdk-lib/aws-apigateway';
// import { LogGroup } from 'aws-cdk-lib/aws-logs';

// export class ApiGatewayStack extends cdk.Stack {
//   constructor(scope: Construct, id: string, props?: cdk.StackProps) {
//     super(scope, id, props);

//     // Retrieve parameters from SSM Parameter Store
//     const hostedZoneId = ssm.StringParameter.fromStringParameterAttributes(
//       this,
//       `${id}-hosted-zone-id`,
//       {
//         parameterName: 'my-domains-hosted-zone-id',
//       },
//     ).stringValue;

//     const domainName = ssm.StringParameter.fromStringParameterAttributes(
//       this,
//       `${id}-hosted-zone-name`,
//       {
//         parameterName: 'my-domains-hosted-zone-name',
//       },
//     ).stringValue;

//     const acmCertificateArn = ssm.StringParameter.fromStringParameterAttributes(
//       this,
//       `${id}-orgformation-certs-wildcard-cert1-arn`,
//       {
//         parameterName: 'orgformation-certs-wildcard-cert1-arn',
//       },
//     ).stringValue;

//     // Create an ACM certificate from the ARN
//     const acmCertificate = acm.Certificate.fromCertificateArn(
//       this,
//       `${id}-acm-certificate`,
//       acmCertificateArn,
//     );

//     // Create a hosted zone
//     const hostedZone = route53.PublicHostedZone.fromHostedZoneAttributes(
//       this,
//       `${id}-hosted-zone`,
//       {
//         hostedZoneId,
//         zoneName: domainName,
//       },
//     );

//     // Create a custom domain name for the API Gateway
//     const customDomainName = 'api.sandbox.nekosgate.com';

//     // Create a Log Group for API Gateway access logs
//     const logs = new LogGroup(this, `${id}-LogGroup`);

//     // Create API Gateway with a custom domain, certificate, and a mock API endpoint
//     const apiGateway = new apigw.RestApi(this, `${id}-web-api-gateway`, {
//       restApiName: 'web-api-gateway',
//       deployOptions: {
//         stageName: 'default', // Default stage name
//         accessLogDestination: new apigw.LogGroupLogDestination(logs),
//       },
//     });

//     // Create a domain name for the API Gateway
//     const domainNameObj = new apigw.DomainName(this, `${id}-custom-domain`, {
//       domainName: customDomainName,
//       certificate: acmCertificate,
//     });

//     // Create an API mapping for the custom domain
//     new apigw.BasePathMapping(this, `${id}-base-path-mapping`, {
//       domainName: domainNameObj,
//       restApi: apiGateway,
//     });

//     // Create a mock API endpoint
//     const mock = apiGateway.root.addResource('mock').addMethod(
//       'ANY',
//       new apigw.MockIntegration({
//         integrationResponses: [{ statusCode: '200' }],
//         passthroughBehavior: apigw.PassthroughBehavior.NEVER,
//         requestTemplates: {
//           'application/json': '{ "statusCode": 200 }',
//         },
//       }),
//       {
//         methodResponses: [{ statusCode: '200' }],
//       },
//     );

//     // Create Route 53 record set for the custom domain
//     new route53.ARecord(this, `${id}-api-gateway-alias-record`, {
//       recordName: 'api', //customDomainName,
//       zone: hostedZone,
//       target: route53.RecordTarget.fromAlias(new targets.ApiGatewayDomain(domainNameObj)),
//     });
//   }
// }

// // import * as acm from 'aws-cdk-lib/aws-certificatemanager';
// // import * as cdk from 'aws-cdk-lib/core';
// // import { Construct } from 'constructs';
// // // import { AcmCertificateStack } from './acm-certifcate.stack';
// // // import { Route53Stack } from './route-53.stack';
// // import * as route53 from 'aws-cdk-lib/aws-route53';
// // import * as targets from 'aws-cdk-lib/aws-route53-targets';
// // // import { RestApiBase } from 'aws-cdk-lib/aws-apigateway';
// // // import { AwsAccountService } from '@cats-cradle/constructs';
// // import * as ssm from 'aws-cdk-lib/aws-ssm';
// // import * as apigw from 'aws-cdk-lib/aws-apigateway';
// // import { LogGroup } from "aws-cdk-lib/aws-logs";
// // import {
// //   ARecord,
// //   CnameRecord,
// //   PrivateHostedZone,
// //   PublicHostedZone,
// //   RecordTarget,
// // } from 'aws-cdk-lib/aws-route53';
// // import {
// //   BundlingOutput, RemovalPolicy, Stack, StackProps,
// // } from 'aws-cdk-lib';

// // export class ApiGatewayStack extends cdk.Stack {
// //   constructor(scope: Construct, id: string, props?: cdk.StackProps) {
// //     super(scope, id, props);

// //     const hostedZoneId = ssm.StringParameter.fromStringParameterAttributes(
// //       this,
// //       `${id}-hosted-zone-id`,
// //       {
// //         parameterName: 'my-domains-hosted-zone-id',
// //       },
// //     ).stringValue;

// //     const domainName = ssm.StringParameter.fromStringParameterAttributes(
// //       this,
// //       `${id}-hosted-zone-name`,
// //       {
// //         parameterName: 'my-domains-hosted-zone-name',
// //       },
// //     ).stringValue;

// //     const acmCertificateArn = ssm.StringParameter.fromStringParameterAttributes(
// //       this,
// //       `${id}-orgformation-certs-wildcard-cert1-arn`,
// //       {
// //         parameterName: 'orgformation-certs-wildcard-cert1-arn',
// //       },
// //     ).stringValue;

// //     const acmCertificate = acm.Certificate.fromCertificateArn(
// //       this,
// //       `${id}-acm-certificate`,
// //       acmCertificateArn,
// //     );

// //     // console.log(domainName);
// //     // const hostedZone = route53.HostedZone.fromLookup(
// //     //   this,
// //     //   `${id}-hosted-zone`,
// //     //   {
// //     //   // TODO passing in domainName doesn't work as it's not resolved
// //     //   domainName: 'sandbox.nekosgate.com', //domainName,
// //     // });
// //     const hostedZone = PublicHostedZone.fromHostedZoneAttributes(
// //       this,
// //       `${id}-hosted-zone`,
// //       {
// //         hostedZoneId,
// //         zoneName: domainName,
// //       },
// //     );

// //     const subdomainName = 'api';
// //     // const fqdn = `${subdomainName}.${domainName}`;
// //     const fqdn = 'api.sandbox.nekosgate.com';
// //     console.log(fqdn);

// //     const logs = new LogGroup(this, id + 'LogGroup');
// //     const apiGateway = new apigw.RestApi(this, `${id}-web-api-gateway`, {
// //       restApiName: 'web-api-gateway',
// //       // deploy: false,

// //       deployOptions: {
// //         stageName: 'stage',
// //         accessLogDestination: new apigw.LogGroupLogDestination(logs),
// //       },
// //       domainName: {
// //         domainName: 'api2.sandbox.nekosgate.com', //fqdn,
// //         certificate: acmCertificate,
// //         endpointType: apigw.EndpointType.EDGE,
// //         securityPolicy: apigw.SecurityPolicy.TLS_1_2,
// //       },

// //     });

// //     // apiGateway.addDomainName('ApiDomain', {
// //     //   domainName: fqdn,
// //     //   certificate: acmCertificate,
// //     //   endpointType: apigw.EndpointType.EDGE,
// //     //   securityPolicy: apigw.SecurityPolicy.TLS_1_2,
// //     // });

// //     const mock = apiGateway.root.addResource('mock').addMethod(
// //       'ANY',
// //       new apigw.MockIntegration({
// //         integrationResponses: [
// //           {
// //             statusCode: '200',
// //           },
// //         ],
// //         passthroughBehavior: apigw.PassthroughBehavior.NEVER,
// //         requestTemplates: {
// //           'application/json': '{ "statusCode": 200 }',
// //         },
// //       }),
// //       {
// //         methodResponses: [{ statusCode: '200' }],
// //       },
// //     );

// //     const webApiGatewayV1Resource = new apigw.Resource(
// //       this,
// //       `${id}-web-api-gateway-v1-resource`,
// //       {
// //         parent: apiGateway.root,
// //         pathPart: 'v1',
// //       },
// //     );
// //     // const deployment = new apigw.Deployment(
// //     //   this,
// //     //   `${id}-deployment${new Date().toISOString()}`,
// //     //   {
// //     //     api: apiGateway,
// //     //     retainDeployments: false,
// //     //   },
// //     // );
// //     // const stage = new apigw.Stage(this, `${id}-stage`, {
// //     //   stageName: 'default',
// //     //   deployment,
// //     // });
// //     new route53.ARecord(this, `${id}-api-gateway-alias-record`, {
// //       recordName: `${subdomainName}.${domainName}`, // Assuming hostedZone.zoneName already includes the necessary domain part
// //       zone: hostedZone,
// //       target: route53.RecordTarget.fromAlias(
// //         new targets.ApiGateway(apiGateway),
// //       ),
// //     });
// //   }
// // }
