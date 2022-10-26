import {Construct} from 'constructs';
import * as cdk from 'aws-cdk-lib';
import {readFileSync} from 'fs';

// import * as cdk from '@aws-cdk/core';
import {
  CfnGraphQLApi,
  CfnApiKey,
  CfnGraphQLSchema,
  CfnDataSource,
  CfnResolver,
} from 'aws-cdk-lib/aws-appsync';
// import * as lambda from '@aws-cdk/aws-lambda';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import {BundlingOutput, Duration, RemovalPolicy, StackProps} from 'aws-cdk-lib';
import {
  Architecture,
  Code,
  LayerVersion,
  Runtime,
} from 'aws-cdk-lib/aws-lambda';
import {RetentionDays} from 'aws-cdk-lib/aws-logs';
import {
  Effect,
  PolicyStatement,
  Role,
  ServicePrincipal,
} from 'aws-cdk-lib/aws-iam';

import path from 'path';

export class AppsyncCdkAppStack extends cdk.Stack {
  // TODO Move to param store, etc.
  DB_PASSWORD = 'test';
  DB_USERNAME = 'test';

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new CfnGraphQLApi(this, 'graphql-api-id', {
      name: 'graphql-api-name',
      authenticationType: 'API_KEY',
      xrayEnabled: true,
    });

    const apiKey = new CfnApiKey(this, 'graphql-api-key', {
      apiId: api.attrApiId,
      // expires: cdk.Expiration.after(cdk.Duration.days(365))
    });

    const schema = new CfnGraphQLSchema(this, 'graphql-api-schema', {
      apiId: api.attrApiId,
      definition: readFileSync('./graphql/schema.graphql').toString(),
    });

    // print out the AppSync GraphQL endpoint to the terminal
    new cdk.CfnOutput(this, 'GraphQLAPIURL', {
      value: api.attrGraphQlUrl,
    });

    // print out the AppSync API Key to the terminal
    new cdk.CfnOutput(this, 'GraphQLAPIKey', {
      value: apiKey.toString() || '',
    });

    // print out the stack region
    new cdk.CfnOutput(this, 'Stack Region', {
      value: this.region,
    });

    // const notesLambda = new lambda.Function(this, 'AppSyncNotesHandler', {
    //   runtime: lambda.Runtime.NODEJS_16_X,
    //   handler: 'src/main.handler',
    //   code: lambda.Code.fromAsset('dist'),
    //   memorySize: 1024,
    // });

    // const notesLambda = new NodejsFunction(this, 'AppSyncNotesHandler', {
    //   timeout: cdk.Duration.seconds(5),
    //   runtime: lambda.Runtime.NODEJS_16_X,
    //   handler: 'main',
    //   entry: '/../src/main.ts',
    // });

    // const cfnDataSource = new appsync.CfnDataSource(this, 'MyCfnDataSource', {
    //   apiId: 'apiId',
    //   name: 'name',
    //   type: 'type',

    //   // the properties below are optional
    //   description: 'description',
    //   lambdaConfig: {
    //     lambdaFunctionArn: 'lambdaFunctionArn',
    //   },
    // });

    // put common troublesome node_modules in a layer
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.BundlingOutput.html
    const layer = new LayerVersion(this, 'AuthorizerLayer', {
      removalPolicy: RemovalPolicy.DESTROY,
      code: Code.fromAsset('build/layer'),

      compatibleArchitectures: [Architecture.X86_64, Architecture.ARM_64],
      // code: Code.fromAsset('.', {

      //   exclude: ['*', '!package.json', '!package-lock.json'],
      //   bundling: {
      //     image: Runtime.NODEJS_16_X.bundlingImage,
      //     command: [
      //       'bash',
      //       '-c',
      //       [
      //         'mkdir /tmp/build',
      //         'cd $_',
      //         'cp /{package.json,package-lock.json} .',
      //         'npm ci --production',
      //         'cd /tmp',
      //         'zip -qr /layer.zip build',
      //       ].join(' && '),
      //     ],
      //     environment: {HOME: '/tmp/home'},
      //     outputType: BundlingOutput.NOT_ARCHIVED,
      //   },
      // }),
    });

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs-readme.html
    const lambdaFunction = new NodejsFunction(this, 'nodejsFunction', {
      entry: 'src/main.ts',
      handler: 'handler',

      depsLockFilePath: 'build/layer/nodejs/package-lock.json',

      // depsLockFilePath: '../../common/config/rush/pnpm-lock.yaml',

      runtime: Runtime.NODEJS_16_X,
      bundling: {
        dockerImage: Runtime.NODEJS_16_X.bundlingImage,
        keepNames: true,
        // emitDecoratorMetadata: true,
        // externalModules: [
        //   'kafkajs',
        //   'mqtt',
        //   'amqplib',
        //   'amqp-connection-manager',
        //   'nats',
        //   '@grpc/grpc-js',
        //   '@grpc/proto-loader',
        //   '@nestjs/websockets/socket-module',
        //   'class-transformer/storage',
        // externalModules: ['mqtt', 'amqplib', 'class-transformer/storage'],
        minify: false,
        target: 'es2021',
        sourceMap: true,
        //   // By default, all node modules referenced in your Lambda code will be bundled by esbuild.
        //   // Use the nodeModules prop under bundling to specify a list of modules that should not be bundled
        //   // but instead included in the node_modules folder of the Lambda package. This is useful
        //   // when working with native dependencies or when esbuild fails to bundle a module.
        // nodeModules: [
        //   //   externalModules: [
        //   //     'aws-cdk-lib',
        //   '@nestjs/common',
        //   '@nestjs/core',
        //   '@nestjs/terminus',
        //   //     '@vendia/serverless-express',
        // ],

        externalModules: [
          // '@aws-sdk/client-apigatewaymanagementapi',
          // '@aws-sdk/client-dynamodb',
          // '@aws-sdk/client-eventbridge',
          // '@aws-sdk/client-iam',
          // '@aws-sdk/client-s3',
          // '@aws-sdk/client-schemas',
          // '@aws-sdk/client-secrets-manager',
          // // '@azure/msal-node',
          // '@nestjs/common',
          // '@nestjs/core',
          // // '@nestjs/config',
          // // '@nestjs/passport',
          // '@nestjs/mapped-types',
          // '@nestjs/microservices',
          // '@nestjs/platform-express',
          // '@vendia/serverless-express',
          // 'cache-manager',
          // 'class-transformer',
          // 'class-validator',
          // 'express',
          // // 'joi',
          // // 'jsonwebtoken',
          // // 'lodash',
          // // 'passport',
          // // 'passport-azure-ad',
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
      layers: [layer],
      memorySize: 1024,
      // memorySize: 128,
      environment: {
        ACCOUNT_ID: this.account,
        DB_USERNAME: this.DB_USERNAME,
        DB_PASSWORD: this.DB_PASSWORD,
      },
      logRetention: RetentionDays.ONE_DAY,
      timeout: Duration.seconds(30),
      // deadLetterQueueEnabled: true
    });

    const invokeLambdaRole = new Role(this, 'AppSync-InvokeLambdaRole', {
      assumedBy: new ServicePrincipal('appsync.amazonaws.com'),
    });

    const lambdaDataSource = new CfnDataSource(this, 'lambda-datasource', {
      apiId: api.attrApiId,
      // Note: property 'name' cannot include hyphens
      name: 'LambdaDataSource',
      type: 'AWS_LAMBDA',
      lambdaConfig: {
        lambdaFunctionArn: lambdaFunction.functionArn,
      },
    });

    invokeLambdaRole.addToPolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        resources: [lambdaFunction.functionArn],
        actions: ['lambda:InvokeFunction'],
      }),
    );

    const lambdaResolver1 = new CfnResolver(this, 'lambda-resolver1', {
      apiId: api.attrApiId,
      typeName: 'Query',
      fieldName: 'getArchetypeById',
      dataSourceName: lambdaDataSource.name,
    });
    lambdaResolver1.addDependsOn(schema);

    // // set the new Lambda function as a data source for the AppSync API
    // const lambdaDs = api.addLambdaDataSource('lambdaDatasource', notesLambda);

    // // create resolvers to match GraphQL operations in schema
    // lambdaDs.createResolver({
    //   typeName: 'Query',
    //   fieldName: 'getArchetypeById',
    // });

    // lambdaDs.createResolver({
    //   typeName: 'Query',
    //   fieldName: 'listArchetypes',
    // });
  }
}
