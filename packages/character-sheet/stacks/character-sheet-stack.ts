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

import * as child from 'child_process';

export class CharacterSheetStack extends cdk.Stack {
  // TODO Move to param store, etc.
  DB_PASSWORD = 'test';
  DB_USERNAME = 'test';

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // packages that are common or do not bundle well include in layer
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.BundlingOutput.html
    const nestJsAppLayer = new LayerVersion(this, 'NestJsAppLayer', {
      compatibleArchitectures: [Architecture.X86_64, Architecture.ARM_64],
      removalPolicy: RemovalPolicy.DESTROY,
      code: Code.fromAsset('.', {
        exclude: ['*', '!package.json'],
        bundling: {
          image: Runtime.NODEJS_16_X.bundlingImage,
          command: [],
          local: {
            tryBundle(outputDir: string) {
              try {
                child.execSync('npm --version');
              } catch {
                return false;
              }

              const commands = [
                'LAYER_TMP_DIR=`mktemp -t ${lambda-layer}` || exit 1',
                'mkdir -p "$LAYER_TMP_DIR/nodejs"',
                `cat package.json | jq 'del(.devDependencies)' > "$LAYER_TMP_DIR/nodejs/package.json"`,
                'cd "$LAYER_TMP_DIR/nodejs"',
                'npm install --prefer-offline --production',
                'cd ..',
                'zip -rq layer.zip nodejs',
                `cp layer.zip ${outputDir}`,
              ];

              child.execSync(commands.join(' && '));
              return true;
            },
          },
          outputType: BundlingOutput.ARCHIVED,
        },
      }),
    });

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs-readme.html
    const lambdaFunction = new NodejsFunction(this, 'nodejsFunction', {
      handler: 'handler',
      entry: 'src/index.ts',
      depsLockFilePath: '../../common/config/rush/pnpm-lock.yaml',
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
      layers: [nestJsAppLayer],
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

    new cdk.CfnOutput(this, 'Localhost API Docs', {
      value: `${rest.url}api`,
    });

    new cdk.CfnOutput(this, 'Localhost API Example', {
      value: `${rest.url}archetype/list`,
    });
  }
}
