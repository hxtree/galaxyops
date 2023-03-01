import * as cdk from 'aws-cdk-lib';
import {
  Bucket,
  BlockPublicAccess,
  BucketEncryption,
} from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import {
//   CodePipeline,
//   CodePipelineSource,
//   ShellStep,
// } from 'aws-cdk-lib/pipelines';

export class DefaultPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // provision bucket to store compressed deployment files
    const deployBucket = new Bucket(
      this,
      `cats-cradle-${this.account}-deployments-bucket`,
      {
        blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
        encryption: BucketEncryption.S3_MANAGED,
        enforceSSL: true,
        versioned: true,
        removalPolicy: cdk.RemovalPolicy.RETAIN,
      },
    );
  }

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
