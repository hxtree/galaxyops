import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { GithubUploadStack } from './github-upload.stack';
import { DefaultPipelineStack } from './default-pipeline.stack';

export type MainStackProps = cdk.StackProps & {
  readonly env: {
    readonly account: string;
    readonly region: string;
  };
};

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: MainStackProps) {
    super(scope, id, props);

    const stageName = process.env.STAGE_NAME ?? 'default';

    const githubUploadStack = new GithubUploadStack(this, 'GithubUploadStack', {
      env: {
        account: props.env.account,
        region: props.env.region,
      },
    });

    new DefaultPipelineStack(this, 'LuckByDicePipelineStack', {
      bucketKey: 'luck-by-dice.zip',
      pipelineName: `LuckByDiceServiceDeployPipeline-${stageName}`,
      deployBucket: githubUploadStack.deployBucket,
      env: {
        account: props.env.account,
        region: props.env.region,
      },
    });

    /**
     * Use the aws cli to test these credentials and then store in github secret
     *
     *  aws configure
     *  aws s3api put-object --bucket 760440398296-rush-deploy-bucket --key test.txt
     */
    new cdk.CfnOutput(this, 'AWS_BUCKET', {
      value: githubUploadStack.deployBucket.bucketName,
    });
    new cdk.CfnOutput(this, 'AWS_ACCESS_KEY', {
      value: githubUploadStack.accessKey.accessKeyId,
    });
    new cdk.CfnOutput(this, 'AWS_SECRET_ACCESS_KEY', {
      value: githubUploadStack.accessKey.secretAccessKey.toString(),
    });
    new cdk.CfnOutput(this, 'AWS_REGION', {
      value: this.region,
    });
  }
}
