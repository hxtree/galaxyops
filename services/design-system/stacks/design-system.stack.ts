import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { RemovalPolicy, StackProps } from 'aws-cdk-lib';
import { Bucket, BucketAccessControl } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import {
  Distribution,
  OriginAccessIdentity,
  ResponseHeadersPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
// import * as s3 from 'aws-cdk-lib/aws-s3';
// import * as route53 from 'aws-cdk-lib/aws-route53';

export class DesignSystemStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const awsAccountId = cdk.Stack.of(this).account;
    const stageName = process.env.STAGE_NAME ?? 'default';
    const bucket = new Bucket(this, `${stageName}-design-system`, {
      bucketName: `${awsAccountId}-${stageName}-design-system-bucket`,
      accessControl: BucketAccessControl.PRIVATE,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const originAccessIdentity = new OriginAccessIdentity(
      this,
      'OriginAccessIdentity',
    );
    bucket.grantRead(originAccessIdentity);

    // cloudfront distribution
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const distribution = new Distribution(this, 'Distribution', {
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: new S3Origin(bucket, { originAccessIdentity }),
        // todo lock down CORS later
        responseHeadersPolicy:
          ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS_WITH_PREFLIGHT,
      },
    });

    // bucket resource
    new BucketDeployment(this, 'BucketDeployment', {
      destinationBucket: bucket,
      sources: [Source.asset('./storybook-static')],
      retainOnDelete: false,
    });

    new cdk.CfnOutput(this, 'Domain Name', {
      value: distribution.domainName,
    });

    // TODO assign to url
    // const recordName = 'monitor';
    // const domainName = 'ouxsoft.com';

    // const bucketWebsite = new s3.Bucket(this, 'BucketWebsite', {
    //   bucketName: [recordName, domainName].join('.'), // www.example.com
    //   publicReadAccess: true,
    //   websiteIndexDocument: 'index.html',
    // });

    // const zone = route53.HostedZone.fromLookup(this, 'Zone', {domainName}); // example.com

    // new route53.ARecord(this, 'AliasRecord', {
    //   zone,
    //   recordName, // www
    //   target: route53.RecordTarget.fromAlias(
    //     new targets.BucketWebsiteTarget(bucketWebsite),
    //   ),
    // });
  }
}
