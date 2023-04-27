import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codepipelineActions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { awsAccounts } from '@cats-cradle/constructs';

import {
  CodePipeline,
  CodePipelineSource,
  ManualApprovalStep,
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

    // create a new CodePipeline object
    const pipeline = new codepipeline.Pipeline(this, 'Pipeline', {
      pipelineName: 'luck-by-dice', // props.pipelineName,
      // crossAccountKeys: props.crossAccountKeys,
      // restartExecutionOnUpdate: true,
    });

    // create a new IAM role object for the pipeline
    const pipelineRole = new iam.Role(this, 'MyPipelineRole', {
      assumedBy: new iam.ServicePrincipal('codepipeline.amazonaws.com'),
    });
    const pipelineServiceRolePolicy = new iam.PolicyStatement({
      actions: ['sts:AssumeRole'],
      resources: ['*'],
      conditions: {
        StringEquals: {
          'iam:ResourceTag/aws-cdk:bootstrap-role': 'lookup',
        },
      },
    });
    pipelineRole.addToPolicy(pipelineServiceRolePolicy);

    // attach the necessary policies to the pipeline role
    pipelineRole.addToPolicy(
      new iam.PolicyStatement({
        actions: [
          'sts:AssumeRole',
          's3:Get*',
          's3:List*',
          's3:PutObject',
          'cloudformation:*',
          'iam:PassRole',
        ],
        resources: [
          deployBucket.bucketArn,
          `${deployBucket.bucketArn}/*`,
          `arn:aws:cloudformation:${awsAccounts.tools.region}:${awsAccounts.tools.accountId}:stack/*`,
          `arn:aws:iam::760440398296:role/cdk-hnb659fds-deploy-role-760440398296-us-east-2`,
        ],
      }),
    );

    // add a source stage to the pipeline
    const sourceOutput = new codepipeline.Artifact();
    const sourceAction = new codepipelineActions.S3SourceAction({
      actionName: 'Source',
      bucket: deployBucket,
      bucketKey: 'luck-by-dice.zip',
      output: sourceOutput,
    });
    pipeline.addStage({
      stageName: 'Source',
      actions: [sourceAction],
    });

    // add a build stage to the pipeline
    const buildOutput = new codepipeline.Artifact();
    const buildProject = new codebuild.Project(this, 'MyProject', {
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_6_0, // or use RUSH_5_0 if available
      },
      // set up the project configuration
      buildSpec: codebuild.BuildSpec.fromObject({
        // set up the buildspec.yml file with necessary commands
        version: '0.2',
        phases: {
          install: {
            commands: [
              'npm install --global ts-node',
              'npm install --global aws-cdk@2.63.1',
              'npm install --global npm@9.2.0',
              'npm install --global typescript',
            ],
          },
          build: {
            // the code was automatically uncompressed
            commands: [
              'ls $CODEBUILD_SRC_DIR',
              'npm install',
              // `npm cdk:bootstrap aws://${awsAccounts.dev.accountId}/${awsAccounts.dev.region}`,
              'npm run cdk:deploy --require-approval=never',
            ],
          },
        },
        environmentVariables: {
          account: awsAccounts.dev.accountId,
          region: awsAccounts.dev.region,
        },
        artifacts: {
          files: [
            // specify the files to include in the build output artifact
            '**/*',
          ],
        },
      }),
    });
    const buildAction = new codepipelineActions.CodeBuildAction({
      actionName: 'BuildAction',
      input: sourceOutput,
      outputs: [buildOutput],
      project: buildProject,
    });
    pipelineRole.addToPolicy(
      new iam.PolicyStatement({
        actions: ['codebuild:StartBuild'],
        resources: [buildProject.projectArn],
      }),
    );

    pipeline.addStage({
      stageName: 'Build',
      actions: [buildAction],
    });
  }
}
