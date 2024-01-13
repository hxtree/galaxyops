/* eslint-disable */
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as route53 from 'aws-cdk-lib/aws-route53';

export class ApiGatewayStack extends cdk.Stack {
  public apiGateway: apigw.RestApi;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // TODO compute this based on account
    const parentDomainName = 'sandbox.nekosgate.com';

    // Define the custom domain
    const subdomainName = 'api';
    const stageName = 'default';

    const logs = new LogGroup(this, `${id}-log-group`);

    const domainName = `${subdomainName}.${parentDomainName}`;

    // Define the API Gateway
    this.apiGateway = new apigateway.RestApi(this, `${id}-rest-api`, {
      restApiName: 'ServicesRestAPI',
      description: 'Services API Gateway',
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowHeaders: apigateway.Cors.DEFAULT_HEADERS,
      },
      deployOptions: {
        throttlingBurstLimit: 10,
        throttlingRateLimit: 10,
        accessLogDestination: new apigw.LogGroupLogDestination(logs),
        // stageName, // Default stage name
      },
      // TODO consider API key
      // apiKeySourceType: apigateway.ApiKeySourceType.HEADER,
    });

    const mock = this.apiGateway.root.addResource('mock').addMethod(
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

    const healthCheckLambda = new lambda.Function(
      this,
      `${id}-health-check-lambda`,
      {
        runtime: lambda.Runtime.NODEJS_16_X,
        handler: 'index.handler',
        code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          return {
            statusCode: 200,
            body: JSON.stringify({"status": "ok","info": {"api": {"status": "up"}}}),
          };
        };
      `),
      },
    );

    // Create integration between API Gateway and Lambda
    const integration = new apigateway.LambdaIntegration(healthCheckLambda);
    const resource = this.apiGateway.root.addResource('health');
    resource.addMethod('GET', integration, {
      apiKeyRequired: false,
    });

    const acmCertificateArn = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${id}-orgformation-certs-wildcard-cert1-arn`,
      {
        parameterName: 'orgformation-certs-wildcard-cert1-arn',
      },
    ).stringValue;

    const certificate = acm.Certificate.fromCertificateArn(
      this,
      `${id}-acm-certificate`,
      acmCertificateArn,
    );

    // Retrieve parameters from SSM Parameter Store
    const hostedZoneId = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${id}-hosted-zone-id`,
      {
        parameterName: 'my-domains-hosted-zone-id',
      },
    ).stringValue;

    const zone = route53.PublicHostedZone.fromHostedZoneAttributes(
      this,
      `${id}-hosted-zone`,
      {
        hostedZoneId,
        zoneName: domainName,
      },
    );

    // API Gateway Domain Name
    const customDomain = new apigateway.DomainName(
      this,
      `${id}-custom-domain`,
      {
        domainName,
        certificate,
        securityPolicy: apigateway.SecurityPolicy.TLS_1_2,
      },
    );

    // Connect custom domain to rest api
    customDomain.addBasePathMapping(this.apiGateway);

    // Placeholder resource to add services to
    const webApiGatewayV1Resource = new apigw.Resource(
      this,
      `${id}-web-api-gateway-v1-resource`,
      {
        parent: this.apiGateway.root,
        pathPart: 'v1',
      },
    );

    // Add a DNS record to map the custom domain to the API Gateway
    new route53.ARecord(this, `${id}-api-gateway-alias-record`, {
      recordName: domainName,
      zone,
      target: route53.RecordTarget.fromAlias(
        new route53Targets.ApiGatewayDomain(customDomain),
      ),
    });

    // Deploy the API
    const deployment = new apigateway.Deployment(
      this,
      `${id}-deployment${new Date().toISOString()}`,
      {
        api: this.apiGateway,
        retainDeployments: false,
      },
    );

    // Create a stage associate it with the deployment
    const stage = new apigateway.Stage(this, `${id}-api-stage`, {
      stageName,
      deployment,
    });

    // eslint-disable-next-line no-new
    new ssm.StringParameter(this, `${id}-web-api-gateway-id`, {
      description: 'Web API Gateway Rest API ID',
      parameterName: 'web-api-gateway-rest-api-id',
      stringValue: this.apiGateway.restApiId,
    });

    // eslint-disable-next-line no-new
    new ssm.StringParameter(this, `${id}-web-api-gateway-resource-id`, {
      description: 'Web Gateway Resource ID',
      parameterName: 'web-api-gateway-root-resource-id',
      stringValue: this.apiGateway.restApiRootResourceId,
    });

    // eslint-disable-next-line no-new
    new ssm.StringParameter(this, `${id}-web-api-gateway-v1-resource-id`, {
      description: 'Web API Gateway V1 Resource ID',
      parameterName: 'web-api-gateway-v1-resource-id',
      stringValue: webApiGatewayV1Resource.resourceId,
    });

    // eslint-disable-next-line no-new
    new ssm.StringParameter(this, `${id}-web-mock-resource-id`, {
      description: 'Web Mock Resource ID',
      parameterName: 'web-mockapi-gateway-root-resource-id',
      stringValue: this.apiGateway.restApiRootResourceId,
    });

    new cdk.CfnOutput(this, 'HealthCheck Endpoint', {
      value: `https://${customDomain.domainName}/health`,
    });
  }
}
