import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codepipelineActions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import {
  CodePipeline,
  CodePipelineSource,
  ManualApprovalStep,
  ShellStep,
} from 'aws-cdk-lib/pipelines';
import { Bucket } from 'aws-cdk-lib/aws-s3';

export type DefaultPipelineStackProps = cdk.StackProps & {
  deployBucket: Bucket;
  bucketKey: string;
  pipelineName: string;
  deployToAccountId: string;
  deployToRegion: string;
  // crossAccountKeys: boolean;
};

export class DefaultPipelineStack extends cdk.NestedStack {
  crossRegionRoleArn: string;

  constructor(scope: Construct, id: string, props: DefaultPipelineStackProps) {
    super(scope, id, props);

    this.crossRegionRoleArn = 'arn:aws:iam::760440398296:role/cdk-hnb659fds-deploy-role-760440398296-us-east-2';

    // add a source stage to the pipeline
    const sourceOutput = new codepipeline.Artifact();
    const sourceAction = new codepipelineActions.S3SourceAction({
      actionName: 'Source',
      bucket: props.deployBucket,
      bucketKey: props.bucketKey,
      output: sourceOutput,
    });

    // add a build stage to the pipeline
    const buildOutput = new codepipeline.Artifact();
    const buildProject = new codebuild.Project(this, 'microservice-build', {
      environment: {
        buildImage: codebuild.LinuxBuildImage.STANDARD_7_0,
      },
      // set up the project configuration
      buildSpec: codebuild.BuildSpec.fromObject({
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
            commands: [
              'ls $CODEBUILD_SRC_DIR',
              'npm install',
              'cdk deploy --require-approval never',
            ],
          },
        },
        environmentVariables: {
          AWS_ACCOUNT_ID: props.deployToAccountId,
          AWS_REGION: props.deployToRegion,
        },
        artifacts: {
          // specify the files to include in the build output artifact
          files: ['**/*'],
        },
      }),
    });

    // Grant necessary permissions to assume role in the target account
    buildProject.addToRolePolicy(
      new iam.PolicyStatement({
        actions: ['sts:AssumeRole'],
        resources: [this.crossRegionRoleArn],
      }),
    );

    const buildAction = new codepipelineActions.CodeBuildAction({
      actionName: 'BuildAction',
      input: sourceOutput,
      outputs: [buildOutput],
      project: buildProject,
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

    //     const pipeline = new pipelines.CodePipeline(this, 'Pipeline', {
    //   codePipeline: codePipeline,
    //   synth: new pipelines.ShellStep('Synth', {
    //     input: pipelines.CodePipelineFileSet.fromArtifact(sourceArtifact),
    //     commands: ['npm ci','npm run build','npx cdk synth'],
    //   }),
    // });

    // const source = CodePipelineSource.s3(props.deployBucket, props.bucketKey);
    // const pipeline = new CodePipeline(this, 'Pipeline', {
    //   pipelineName: props.pipelineName,
    //   synth: new ShellStep('Synth', {
    //     input: source,
    //     commands: [
    //       'npm install --global ts-node',
    //       'npm install --global aws-cdk@2.63.1',
    //       'npm install --global npm@9.2.0',
    //       'npm install --global typescript',
    //       'ls $CODEBUILD_SRC_DIR',
    //       'npm install',
    //       'npm run cdk:synth',
    //     ],
    //   }),
    // });

    // create a new CodePipeline object
    const pipeline = new codepipeline.Pipeline(this, 'Pipeline', {
      pipelineName: props.pipelineName,
      // crossAccountKeys: props.crossAccountKeys,
      // restartExecutionOnUpdate: true,
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
          props.deployBucket.bucketArn,
          `${props.deployBucket.bucketArn}/*`,
          `arn:aws:cloudformation:${props.deployToAccountId}:${props.deployToAccountId}:stack/*`,
          'arn:aws:iam::760440398296:role/cdk-hnb659fds-deploy-role-760440398296-us-east-2',
        ],
      }),
    );

    pipelineRole.addToPolicy(
      new iam.PolicyStatement({
        actions: ['codebuild:StartBuild'],
        resources: [buildProject.projectArn],
      }),
    );

    pipeline.addStage({
      stageName: 'Source',
      actions: [sourceAction],
    });

    pipeline.addStage({
      stageName: 'Build',
      actions: [buildAction],
    });

    // const buildAction = new codepipelineActions({
    //   actionName: 'BuildAction',
    //   input: sourceOutput,
    //   outputs: [buildOutput],
    //   project: buildProject,
    // });

    // const pipeline = new pipelines.CodePipeline(this, 'Pipeline', {
    //   codePipeline: codePipeline,
    //   synth: new pipelines.ShellStep('Synth', {
    //     input: pipelines.CodePipelineFileSet.fromArtifact(sourceArtifact),
    //     commands: ['npm ci','npm run build','npx cdk synth'],
    //   }),
    // });

    // `npm run cdk:bootstrap aws://${props.deployToAccountId}/${props.deployToRegion} --role-arn ${this.crossRegionRoleArn}`,
    // `npm run cdk:deploy --require-approval=never --role-arn ${this.crossRegionRoleArn}`,
  }
}
