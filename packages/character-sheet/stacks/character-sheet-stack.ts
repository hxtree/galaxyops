import {Construct} from 'constructs';
import * as cdk from 'aws-cdk-lib';

import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import {BundlingOutput, Duration, RemovalPolicy, StackProps} from 'aws-cdk-lib';
import {
  Architecture,
  Code,
  LayerVersion,
  Runtime,
} from 'aws-cdk-lib/aws-lambda';
import {RetentionDays} from 'aws-cdk-lib/aws-logs';

export class CharacterSheetStack extends cdk.Stack {
  // TODO Move to param store, etc.
  DB_PASSWORD = 'test';
  DB_USERNAME = 'test';

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // packages that are common or do not bundle include in layer
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.BundlingOutput.html
    const nodejsModuleLayer = new LayerVersion(this, 'AuthorizerLayer', {
      removalPolicy: RemovalPolicy.DESTROY,
      // TODO auto build in docker container
      // compatibleArchitectures: [Architecture.X86_64, Architecture.ARM_64],
      code: Code.fromAsset('build/layer'),
      // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_s3_assets.AssetOptions.html
      // code: Code.fromAsset('.', {
      //   // exclude: ['*', '!package.json'],
      //   bundling: {
      //     // privileged: true,
      //     image: Runtime.NODEJS_16_X.bundlingImage,
      //     environment: {
      //       npm_config_cache: '/tmp/npm_cache',
      //       npm_config_update_notifier: 'false',
      //     },
      //     command: [
      //       'sh',
      //       '-c',
      //       // [
      //       //   // 'cd $(mktemp -d)',
      //       //   // 'cp /asset-input/* .',
      //       //   // 'npm install --production',
      //       //   // 'cp -r ./node_modules /asset-output/nodejs/node_modules',
      //       ].join(' && '),
      //     ],
      //     outputType: BundlingOutput.ARCHIVED,
      //   },
      // }),
    });

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs-readme.html
    const lambdaFunction = new NodejsFunction(this, 'nodejsFunction', {
      handler: 'handler',
      entry: 'src/index.ts',
      depsLockFilePath: 'build/layer/nodejs/package-lock.json',
      runtime: Runtime.NODEJS_16_X,
      bundling: {
        dockerImage: Runtime.NODEJS_16_X.bundlingImage,
        keepNames: true,
        minify: false,
        target: 'es2021',
        sourceMap: true,

        // By default, all node modules referenced in your Lambda code will be bundled by esbuild.
        // Use the nodeModules prop under bundling to specify a list of modules that should not be bundled
        // but instead included in the node_modules folder of the Lambda package. This is useful
        // when working with native dependencies or when esbuild fails to bundle a module.
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
      layers: [nodejsModuleLayer],
      memorySize: 1024, // 128 -- TODO reduce
      environment: {
        ACCOUNT_ID: this.account,
        DB_USERNAME: this.DB_USERNAME,
        DB_PASSWORD: this.DB_PASSWORD,
      },
      logRetention: RetentionDays.ONE_DAY,
      timeout: Duration.seconds(30),
      // deadLetterQueueEnabled: true
    });

    // API Gateway resource
    const rest = new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: lambdaFunction,
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowCredentials: true,
        allowMethods: ['GET', 'POST'],
      },
    });

    new cdk.CfnOutput(this, 'Region', {
      value: this.region,
    });

    new cdk.CfnOutput(this, 'archetype/:id', {
      value: `${rest.url}archetype/id/MeekuOni`,
    });
  }
}
