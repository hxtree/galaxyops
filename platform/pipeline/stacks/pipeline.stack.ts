import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import {
  Bucket,
  BlockPublicAccess,
  BucketEncryption,
} from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
// import {
//   CodePipeline,
//   CodePipelineSource,
//   ShellStep,
// } from 'aws-cdk-lib/pipelines';

export class DefaultPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // provision deployment-bucket to store rush deployments
    const deployBucket = new Bucket(this, `${id}-rush-deploy-bucket`, {
      bucketName: `${this.account}-rush-deploy-bucket`,
      blockPublicAccess: BlockPublicAccess.BLOCK_ACLS,
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // setup a GithubUser with permission to put files in deployment-bucket
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

    deployBucket.grantPut(githubCIGroup);
    deployBucket.grantPutAcl(githubCIGroup);
    deployBucket.grantReadWrite(githubCIUser);

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
      stringValue: deployBucket.bucketName,
    });

    new ssm.StringParameter(this, `${id}-github-ci-aws-region`, {
      description: 'GithubCI secret.AWS_REGION',
      parameterName: 'github-ci-aws-region',
      stringValue: this.region,
    });

    /**
     * Use the aws cli to test these credentials and then store in github secret
     *
     *  aws configure
     *  aws s3api put-object --bucket 760440398296-rush-deploy-bucket --key test.txt
     */
    new cdk.CfnOutput(this, 'AWS_BUCKET', { value: deployBucket.bucketName });
    new cdk.CfnOutput(this, 'AWS_ACCESS_KEY', {
      value: accessKey.accessKeyId,
    });
    new cdk.CfnOutput(this, 'AWS_SECRET_ACCESS_KEY', {
      value: accessKey.secretAccessKey.toString(),
    });
    new cdk.CfnOutput(this, 'AWS_REGION', {
      value: this.region,
    });
  }

  // setup a pipeline for each project and trigger when deployment file changes in bucket
  // deploy s3 bucket
  //   const owner = 'hxtree';
  //   const repo = 'cats-cradle';
  //   const branch = 'main';
  //   const pipeline = new CodePipeline(this, 'Pipeline', {
  //     pipelineName: 'MyPipeline',
  //     synth: new ShellStep('Synth', {
  //       input: CodePipelineSource.gitHub(`${owner}/${repo}`, branch),
  //       commands: ['npm ci', 'npm run build', 'npx cdk synth'],
  //     }),
  //   });
  // }
}
