import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
// import { AcmCertificateStack } from './acm-certifcate.stack';
// import { Route53Stack } from './route-53.stack';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
// import { RestApiBase } from 'aws-cdk-lib/aws-apigateway';
// import { AwsAccountService } from '@cats-cradle/constructs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import {
  ARecord,
  CnameRecord,
  PrivateHostedZone,
  PublicHostedZone,
  RecordTarget,
} from 'aws-cdk-lib/aws-route53';
import {
  BundlingOutput, RemovalPolicy, Stack, StackProps,
} from 'aws-cdk-lib';

export class ApiGatewayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

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

    const acmCertificate = acm.Certificate.fromCertificateArn(
      this,
      `${id}-acm-certificate`,
      acmCertificateArn,
    );

    // console.log(domainName);
    // const hostedZone = route53.HostedZone.fromLookup(
    //   this,
    //   `${id}-hosted-zone`,
    //   {
    //   // TODO passing in domainName doesn't work as it's not resolved
    //   domainName: 'sandbox.nekosgate.com', //domainName,
    // });
    const hostedZone = PublicHostedZone.fromHostedZoneAttributes(
      this,
      `${id}-hosted-zone`,
      {
        hostedZoneId,
        zoneName: domainName,
      },
    );

    const subdomainName = 'api';
    // const fqdn = `${subdomainName}.${domainName}`;
    const fqdn = 'api.sandbox.nekosgate.com';
    console.log(fqdn);

    const apiGateway = new apigw.RestApi(this, `${id}-web-api-gateway`, {
      restApiName: 'web-api-gateway',
      deploy: false,
    });

    const mock = apiGateway.root.addResource('mock').addMethod(
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
        methodResponses: [{ statusCode: '200' }],
      },
    );

    const webApiGatewayV1Resource = new apigw.Resource(
      this,
      `${id}-web-api-gateway-v1-resource`,
      {
        parent: apiGateway.root,
        pathPart: 'v1',
      },
    );

    const deployment = new apigw.Deployment(
      this,
      `${id}-deployment${new Date().toISOString()}`,
      { api: apiGateway, retainDeployments: false },
    );

    const stage = new apigw.Stage(this, `${id}-stage`, {
      stageName: 'default',
      deployment,
    });

    // const customDomain = new apigw.DomainName(this, `${id}-custom-domain`, {
    //   domainName: fqdn,
    //   certificate: acmCertificate,
    //   endpointType: apigw.EndpointType.EDGE,
    //   securityPolicy: apigw.SecurityPolicy.TLS_1_2,
    // });

    apiGateway.addDomainName('ApiDomain', {
      domainName: fqdn,
      certificate: acmCertificate,
      endpointType: apigw.EndpointType.EDGE,
      securityPolicy: apigw.SecurityPolicy.TLS_1_2,
    });

    new route53.ARecord(this, `${id}-api-gateway-alias-record`, {
      zone: hostedZone,
      recordName: fqdn,
      target: route53.RecordTarget.fromAlias(
        new targets.ApiGateway(apiGateway),
      ),
    });
  }
}
