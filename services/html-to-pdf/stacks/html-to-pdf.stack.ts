import { Microservice } from '@cats-cradle/constructs';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { StackProps, RemovalPolicy } from 'aws-cdk-lib';
import * as path from 'path';
import { Code, LayerVersion, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';
import { CHROMIUM_ZIP_FILEPATH } from './download-lambda-layer';

export class HtmlToPdfStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const awsAccountId = cdk.Stack.of(this).account;
    const stageName = process.env.STAGE_NAME ?? 'default';

    // create a bucket to put the pdf generated in

    const pdfBucket = new s3.Bucket(this, `${id}-s3-bucket`, {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      bucketName: `${awsAccountId}-${stageName}-html-to-pdf-bucket`,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const pdfBucketBotRole = new iam.Role(this, `${id}-pdf-bucket-bot-role`, {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    });

    pdfBucket.grantWrite(pdfBucketBotRole, 'uploads/*');

    // create a lambda capable of creating pdf from html

    const chromiumLambdaLayer = new LayerVersion(this, `${id}-chromium-layer`, {
      layerVersionName: 'ChromiumLayer',
      code: Code.fromAsset(CHROMIUM_ZIP_FILEPATH),
      compatibleRuntimes: [Runtime.NODEJS_18_X],
      description: 'Chromium layer for Lambda',
    });

    const microservice = new Microservice(this, 'html-to-pdf-stack', {
      path: 'html-to-pdf',
      projectRoot: path.join(__dirname, '..'),
      memorySize: 1600,
      layers: [chromiumLambdaLayer],
      // role: pdfBucketBotRole
    });

    // TODO Add or remove media types that contain binary data.
    // https://repost.aws/knowledge-center/api-gateway-binary-data-lambda
    // Media type
    // application/pdf

    new cdk.CfnOutput(this, 'health check endpoint', {
      value: `${microservice.getBaseUrl()}/health`,
    });

    new cdk.CfnOutput(this, 'example test endpoint', {
      value: `${microservice.getBaseUrl()}/pdf?url=https://google.com`,
    });
  }
}
