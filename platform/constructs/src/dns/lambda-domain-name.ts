/* eslint-disable */
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { snakeCase } from 'lodash';

export type LambdaDomainNameProps = {
  stageName: string;
  subdomainName: string;
  proxyLambda: lambda.Function;
};

export class LambdaDomainName extends Construct {
  public apiGateway: apigw.RestApi;
  public customDomain: apigw.DomainName;
  public parentDomainName: string;
  public domainName: string;
  public acmCertificateArn: string;
  public hostedZoneId: string;
  public id: string;

  constructor(scope: Construct, id: string, props: LambdaDomainNameProps) {
    super(scope, id);
    const { subdomainName, proxyLambda, stageName } = props;

    this.id = id;
    this.init();

    const certificate = acm.Certificate.fromCertificateArn(
      this,
      `${id}-acm-certificate`,
      this.acmCertificateArn,
    );

    const domainName = `${subdomainName}.${this.parentDomainName}`;

    const zone = route53.PublicHostedZone.fromHostedZoneAttributes(
      this,
      `${id}-hosted-zone`,
      {
        hostedZoneId: this.hostedZoneId,
        zoneName: domainName,
      },
    );

    // Define the API Gateway
    this.apiGateway = new apigateway.LambdaRestApi(this, `${id}-rest-api`, {
      restApiName: `${subdomainName} RestAPI`,
      description: `${subdomainName} Service API Gateway`,
      handler: proxyLambda,
      deployOptions: {
        throttlingBurstLimit: 10,
        throttlingRateLimit: 10,
      },
      // TODO consider API key
      // apiKeySourceType: apigateway.ApiKeySourceType.HEADER,
    });

    // API Gateway Domain Name
    this.customDomain = new apigateway.DomainName(this, `${id}-custom-domain`, {
      domainName,
      certificate,
      securityPolicy: apigateway.SecurityPolicy.TLS_1_2,
    });

    // Connect custom domain to rest api
    this.customDomain.addBasePathMapping(this.apiGateway);

    // Add a DNS record to map the custom domain to the API Gateway
    new route53.ARecord(this, `${id}-api-gateway-alias-record`, {
      recordName: domainName,
      zone,
      target: route53.RecordTarget.fromAlias(
        new route53Targets.ApiGatewayDomain(this.customDomain),
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
    new ssm.StringParameter(this, `${id}-${subdomainName}-svc-domain-name`, {
      description: `${subdomainName} service domain name`,
      parameterName: `${snakeCase(
        subdomainName,
      ).toUpperCase()}_SVC_DOMAIN_NAME`,
      stringValue: `${this.customDomain.domainName}`,
    });
  }

  getBaseUrl(): string {
    return `https://${this.customDomain.domainName}`;
  }

  init() {
    // fetch parameters from SSM Parameter Store
    this.parentDomainName = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${this.id}-ssm-domain-name`,
      {
        parameterName: 'DOMAIN_NAME',
      },
    ).stringValue;

    this.acmCertificateArn = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${this.id}-orgformation-certs-wildcard-cert1-arn`,
      {
        parameterName: 'orgformation-certs-wildcard-cert1-arn',
      },
    ).stringValue;

    // Retrieve parameters from SSM Parameter Store
    this.hostedZoneId = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${this.id}-hosted-zone-id`,
      {
        parameterName: 'my-domains-hosted-zone-id',
      },
    ).stringValue;
  }
}
