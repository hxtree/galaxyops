import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codepipelineActions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import {
  Bucket,
  BlockPublicAccess,
  BucketEncryption,
} from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from 'aws-cdk-lib/pipelines';

export class DefaultPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // provision deployment-bucket to store rush deployments
    const deployBucket = new Bucket(this, `${id}-rush-deploy-bucket`, {
      bucketName: `${this.account}-rush-deploy-bucket`,
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

    // 			`cd ${dirPipeline}`,
    // 			"npm ci",
    // 			"npm run build",
    // 			"npx cdk synth",

    const project = new codebuild.Project(this, 'MyProject', {
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_5_0, // or use RUSH_5_0 if available
      },
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          install: {
            commands: ['npm install -g @microsoft/rush', 'rush install'],
          },
          build: {
            commands: [
              'node create-links.js create',
              'pnpm install',
              'npm cdk:deploy',
            ],
          },
        },
        artifacts: {
          files: ['**/*'],
        },
      }),
    });

    // create a new CodePipeline object
    const pipeline = new codepipeline.Pipeline(this, 'Pipeline', {
      pipelineName: 'character-sheet', // props.pipelineName,
      // crossAccountKeys: props.crossAccountKeys,
      // restartExecutionOnUpdate: true,
    });

    // create a new IAM role object for the pipeline
    const pipelineRole = new iam.Role(this, 'MyPipelineRole', {
      assumedBy: new iam.ServicePrincipal('codepipeline.amazonaws.com'),
    });

    // attach the necessary policies to the pipeline role
    pipelineRole.addToPolicy(
      new iam.PolicyStatement({
        actions: ['s3:Get*', 's3:List*', 's3:PutObject'],
        resources: [deployBucket.bucketArn, `${deployBucket.bucketArn}/*`],
      }),
    );

    pipelineRole.addToPolicy(
      new iam.PolicyStatement({
        actions: ['codebuild:StartBuild'],
        resources: [project.projectArn],
      }),
    );

    // create an S3 source action
    const sourceAction = new codepipelineActions.S3SourceAction({
      actionName: 'Source',
      bucket: deployBucket,
      bucketKey: 'luck-by-dice.zip',
      output: new codepipeline.Artifact('Source'),
    });

    // add the source action to the pipeline
    pipeline.addStage({
      stageName: 'Source',
      actions: [sourceAction],
    });

    // add a CodeBuild action to a stage in the pipeline
    const buildAction = new codepipelineActions.CodeBuildAction({
      actionName: 'Build',
      project: project,
      input: new codepipeline.Artifact('Source'),
      outputs: [new codepipeline.Artifact('Output')],
    });

    pipeline.addStage({
      stageName: 'Build',
      actions: [buildAction],
    });
  }
}
