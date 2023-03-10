import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class MessageBrokerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // provision data-lake-bucket to store published messages
    const dataLakeBucket = new Bucket(this, `${id}-data-lake-bucket`, {
      bucketName: `${this.account}-data-lake-bucket`,
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // setup a lambda with permission to put files in deployment-bucket
    const githubCIUser = new iam.User(this, `${id}-github-ci-user`, {
      userName: 'GithubCI',
    });

    const githubCIGroup = new iam.Group(this, `${id}-github-ci-group`, {
      groupName: 'GithubCIGroup',
    });
    githubCIUser.addToGroup(githubCIGroup);

    const accessKey = new iam.AccessKey(this, `${id}-github-ci-access-key`, {
      user: githubCIUser,
    });

    dataLakeBucket.grantPut(githubCIGroup);
    dataLakeBucket.grantPutAcl(githubCIGroup);
    dataLakeBucket.grantReadWrite(githubCIUser);

    // store credentials in SSM for github ci
    new ssm.StringParameter(this, `${id}-github-ci-aws-key-id`, {
      description: 'GithubCI secret.AWS_KEY_ID',
      parameterName: 'github-ci-aws-key-id',
      stringValue: accessKey.accessKeyId,
    });

    new ssm.StringParameter(this, `${id}-github-ci-aws-secret-access-key`, {
      description: 'GithubCI secret.AWS_SECRET_ACCESS_KEY',
      parameterName: 'github-ci-aws-secret-access-key',
      stringValue: accessKey.secretAccessKey.toString(),
    });

    new ssm.StringParameter(this, `${id}-github-ci-aws-bucket`, {
      description: 'GithubCI secret.AWS_BUCKET',
      parameterName: 'github-ci-aws-bucket',
      stringValue: dataLakeBucket.bucketName,
    });

    new ssm.StringParameter(this, `${id}-github-ci-aws-region`, {
      description: 'GithubCI secret.AWS_REGION',
      parameterName: 'github-ci-aws-region',
      stringValue: this.region,
    });

    new cdk.CfnOutput(this, 'AWS_BUCKET', { value: dataLakeBucket.bucketName });
  }
}
