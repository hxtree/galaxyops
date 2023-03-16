import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Duration, Stack } from 'aws-cdk-lib';
import { LayerVersion, Runtime } from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { getBaseUrl } from '../api-endpoint/get-base-url';

export interface NestJsProps {
  apiId: string;
  region: string;
  stageName: string;
}

export class NestJs extends Construct {
  private nodeJsFunction: NodejsFunction;

  constructor(scope: Construct, id: string, props: NestJsProps) {
    super(scope, id);

    const lambdaLayerNestJsLatestVersion =
      ssm.StringParameter.fromStringParameterAttributes(
        scope,
        'lambda-layer-nestjs-latest-version-ssm',
        {
          parameterName: 'lambda-layer-nestjs-latest-version',
        },
      ).stringValue;

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda.LayerVersion.html
    const awsAccountId = Stack.of(this).account;
    const nestJsAppLayer = LayerVersion.fromLayerVersionAttributes(
      this,
      'NestJsAppLayer',
      {
        layerVersionArn: lambdaLayerNestJsLatestVersion,
      },
    );

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs-readme.html
    this.nodeJsFunction = new NodejsFunction(this, 'nodejsFunction', {
      projectRoot: process.env.PROJECT_ROOT ?? '',
      handler: 'handler',
      entry: 'src/index.ts',
      depsLockFilePath: `${process.env.PROJECT_ROOT}/pnpm-lock.yaml`,
      runtime: Runtime.NODEJS_16_X,
      bundling: {
        preCompilation: false,
        esbuildArgs: {
          '--log-limit': '0',
        },
        dockerImage: Runtime.NODEJS_16_X.bundlingImage,
        keepNames: true,
        minify: false,
        target: 'es2021',
        sourceMap: true,

        /**
         * By default, all node modules referenced in your Lambda code will be bundled by esbuild.
         * Use the nodeModules prop under bundling to specify a list of modules that
         * should not be bundled, but instead included in the node_modules folder of the
         * Lambda package. This is useful when working with native dependencies or when
         * esbuild fails to bundle a module.
         */
        externalModules: [
          'express',
          'reflect-metadata',
          'rxjs',
          'source-map-support',
          'aws-lambda',
          'class-transformer',
          'class-validator',
          '@nestjs/common',
          '@nestjs/core',
          '@nestjs/terminus',
          '@vendia/serverless-express',
          'express',
          'node-cache',
          'reflect-metadata',
          'rxjs',
        ],
      },
      layers: [nestJsAppLayer],
      memorySize: 1024, // 128 -- TODO reduce
      environment: {
        AWS_ACCOUNT_ID: awsAccountId,
        AWS_REGION: props.region,
        STAGE_NAME: props.stageName,
        BASE_URL: getBaseUrl(props.apiId, props.region, props.stageName),
      },
      logRetention: RetentionDays.ONE_DAY,
      timeout: Duration.seconds(30),
      // deadLetterQueueEnabled: true
    });
  }

  getNodeJsFunction(): NodejsFunction {
    return this.nodeJsFunction;
  }
}
