import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { RemovalPolicy, StackProps } from 'aws-cdk-lib';
import {
  Bucket,
  RedirectProtocol,
  ObjectOwnership,
  BucketAccessControl,
} from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import {
  CloudFrontWebDistribution,
  OriginAccessIdentity,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';

export class MainStack extends cdk.Stack {
  public parentDomainName: string;
  public acmCertificateArn: string;
  public hostedZoneId: string;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // DNS

    // fetch parameters from SSM Parameter Store
    this.parentDomainName = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${id}-ssm-domain-name`,
      {
        parameterName: 'DOMAIN_NAME',
      },
    ).stringValue;

    // Retrieve parameters from SSM Parameter Store
    this.hostedZoneId = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${id}-hosted-zone-id`,
      {
        parameterName: 'my-domains-hosted-zone-id',
      },
    ).stringValue;

    const subdomainName = 'design';

    const domainName = `${subdomainName}.${this.parentDomainName}`;

    // s3 bucket
    const awsAccountId = cdk.Stack.of(this).account;
    const stageName = process.env.STAGE_NAME ?? 'default';

    const redirects = [
      { from: 'authentication/', to: 'features/authentication/' },
    ];

    const bucket = new Bucket(this, `${stageName}-design-system`, {
      bucketName: `${awsAccountId}-${stageName}-design-bucket`,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      publicReadAccess: true,
      blockPublicAccess: {
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      },
      objectOwnership: ObjectOwnership.OBJECT_WRITER,
      accessControl: BucketAccessControl.PUBLIC_READ,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      websiteRoutingRules: redirects.map(({ from, to }) => ({
        condition: {
          keyPrefixEquals: from,
        },
        httpRedirectCode: '301',
        hostName: domainName,
        protocol: RedirectProtocol.HTTPS,
        replaceKey: {
          withKey: to,
        },
      })),
    });

    const originAccessIdentity = new OriginAccessIdentity(
      this,
      'OriginAccessIdentity',
    );
    bucket.grantRead(originAccessIdentity);

    this.acmCertificateArn = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${id}-orgformation-certs-wildcard-cert1-arn`,
      {
        parameterName: 'orgformation-certs-wildcard-cert1-arn',
      },
    ).stringValue;

    const certificate = acm.Certificate.fromCertificateArn(
      this,
      `${id}-acm-certificate`,
      this.acmCertificateArn,
    );

    const cloudFrontDistribution = new CloudFrontWebDistribution(
      this,
      `${id}-design-system-distribution`,
      {
        defaultRootObject: 'index.html',
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
            },
            behaviors: [
              {
                isDefaultBehavior: true,
                defaultTtl: cdk.Duration.seconds(0),
                viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
              },
            ],
          },
        ],
        errorConfigurations: [
          {
            errorCode: 404,
            responseCode: 200,
            responsePagePath: '/index.html', // Redirect to index.html for all 404 errors
            errorCachingMinTtl: 60,
          },
        ],
        viewerCertificate: {
          aliases: [domainName],
          props: {
            acmCertificateArn: certificate.certificateArn,
            sslSupportMethod: 'sni-only',
          },
        },
      },
    );
    cloudFrontDistribution.applyRemovalPolicy(RemovalPolicy.DESTROY);

    // bucket resource
    new BucketDeployment(this, 'BucketDeployment', {
      destinationBucket: bucket,
      sources: [Source.asset('./storybook-static')],
      retainOnDelete: false,
    });

    const hostedZone = route53.PublicHostedZone.fromHostedZoneAttributes(
      this,
      `${id}-hosted-zone`,
      {
        hostedZoneId: this.hostedZoneId,
        zoneName: domainName,
      },
    );

    // Create a record set for the custom domain pointing to the CloudFront distribution
    new route53.ARecord(this, 'AliasRecord', {
      recordName: domainName,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(cloudFrontDistribution),
      ),
      zone: hostedZone,
    });

    new cdk.CfnOutput(this, 'Cloud Front Distribution', {
      value: cloudFrontDistribution.distributionDomainName,
    });

    new cdk.CfnOutput(this, 'Domain Name', {
      value: `https://${domainName}`,
    });
  }
}
