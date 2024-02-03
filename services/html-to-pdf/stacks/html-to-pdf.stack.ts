import { Microservice, LambdaDomainName } from '@cats-cradle/constructs';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { StackProps, RemovalPolicy } from 'aws-cdk-lib';
import * as path from 'path';
import { LayerVersion } from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';

export class HtmlToPdfStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const awsAccountId = cdk.Stack.of(this).account;
    const stageName = process.env.STAGE_NAME ?? 'default';

    // create lambda role for uploading to bucket

    const pdfBucketBotRole = new iam.Role(this, `${id}-pdf-bucket-bot-role`, {
      roleName: 'PdfBucketBotUploadRole',
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    });

    // create a bucket to put the pdf generated in

    const pdfBucket = new s3.Bucket(this, `${id}-s3-bucket`, {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      bucketName: `${awsAccountId}-${stageName}-html-to-pdf-bucket`,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    pdfBucket.grantWrite(pdfBucketBotRole, 'uploads/*');

    // create a remote access credientals for uploading to bucket

    const policy = new iam.Policy(this, `${id}-cdk-policy`, {
      statements: [
        new iam.PolicyStatement({
          actions: ['s3:Put*', 's3:Get*', 's3:List*'],
          resources: [`arn:aws:s3:::${pdfBucket.bucketName}/*`],
        }),
      ],
    });

    const user = new iam.User(this, `${id}-pdf-bucket-user`);

    const accessKey = new iam.CfnAccessKey(
      this,
      `${id}-pdf-bucket-bot-access-key`,
      {
        userName: user.userName,
      },
    );
    policy.attachToUser(user);

    new ssm.StringParameter(this, `${id}-pdf-bucket-bot-access-key-id`, {
      parameterName: 'HTML_TO_PDF_AWS_ACCESS_KEY_ID',
      stringValue: accessKey.ref,
    });

    new ssm.StringParameter(this, `${id}-pdf-bucket-bot-secret-access-key`, {
      parameterName: 'HTML_TO_PDF_AWS_SECRET_ACCESS_KEY',
      stringValue: accessKey.attrSecretAccessKey,
    });

    // get lambda capable of creating pdf from html

    const lambdaLayerVersion = ssm.StringParameter.fromStringParameterAttributes(
      this,
      'lambda-layer-version-ssm',
      {
        parameterName: 'LAMBDA_LAYER_VERSION_CHROMIUM',
      },
    ).stringValue;

    const chromiumLambdaLayer = LayerVersion.fromLayerVersionAttributes(
      this,
      'chromium-lambda-layer',
      {
        layerVersionArn: lambdaLayerVersion,
      },
    );

    const microservice = new Microservice(this, `${id}-html-to-pdf-stack`, {
      projectRoot: path.join(__dirname, '..'),
      memorySize: 1600, // max 10240
      environment: {
        AWS_BUCKET: pdfBucket.bucketName,
      },
      layers: [chromiumLambdaLayer],
      role: pdfBucketBotRole,
    });

    // create an api endpoint
    // https://repost.aws/knowledge-center/api-gateway-binary-data-lambda
    const apiEndpoint = new LambdaDomainName(this, `${id}-api-endpoint`, {
      stageName,
      subdomainName: 'html-to-pdf',
      proxyLambda: microservice.getNodeJsFunction(),
      binaryMediaTypes: ['application/pdf'],
    });

    new cdk.CfnOutput(this, 'health check endpoint', {
      value: `${apiEndpoint.getBaseUrl()}/health`,
    });

    new cdk.CfnOutput(this, 'example test endpoint', {
      value: `${apiEndpoint.getBaseUrl()}/pdf?url=https://google.com`,
    });

    new cdk.CfnOutput(this, 'AWS_BUCKET', {
      value: pdfBucket.bucketName,
    });

    new cdk.CfnOutput(this, 'AWS_ACCESS_KEY_ID', {
      value: accessKey.ref,
    });

    new cdk.CfnOutput(this, 'AWS_SECRET_ACCESS_KEY', {
      value: accessKey.attrSecretAccessKey,
    });
  }
}
