import {Construct} from 'constructs';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import {Duration, Resource, Stack} from 'aws-cdk-lib';
import {LayerVersion, Runtime} from 'aws-cdk-lib/aws-lambda';
import {RetentionDays} from 'aws-cdk-lib/aws-logs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import {kebabCase, rest} from 'lodash';
import {
  LambdaRestApi,
  Cors,
  LambdaIntegration,
} from 'aws-cdk-lib/aws-apigateway';
import * as cdk from 'aws-cdk-lib';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
// import {ApiRoute} from './api-route';

export interface MicroserviceProps {
  path: string;
  //insert properties you wish to expose
}

export class Microservice extends Construct {
  private nodeJsFunction: NodejsFunction;
  private apiGateway: LambdaRestApi;

  constructor(scope: Construct, id: string, props: MicroserviceProps) {
    super(scope, id);

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda.LayerVersion.html
    const microserviceName = kebabCase(Stack.of(this).stackName);
    const awsAccountId = Stack.of(this).account;

    const awsAccountRegion = Stack.of(this).region;
    const layerVerison = '1'; // TODO store in ssm?
    const nestJsAppLayer = LayerVersion.fromLayerVersionAttributes(
      this,
      'NestJsAppLayer',
      {
        layerVersionArn: `arn:aws:lambda:${awsAccountRegion}:${awsAccountId}:layer:NestJsAppLayer:${layerVerison}`,
      },
    );

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs-readme.html
    this.nodeJsFunction = new NodejsFunction(this, 'nodejsFunction', {
      handler: 'handler',
      entry: 'src/index.ts',
      depsLockFilePath: '/usr/src/app/common/config/rush/pnpm-lock.yaml',
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
        ACCOUNT_ID: awsAccountId,
      },
      logRetention: RetentionDays.ONE_DAY,
      timeout: Duration.seconds(30),
      // deadLetterQueueEnabled: true
    });

    // TODO separate into multiple Constucts,

    // const apiRoute = new ApiRoute(this, 'microservice-api-route', {
    //   nodeJsFunction: this.nodeJsFunction,
    //   prefix: 'v1',
    // });

    // const stage = process.env.STAGE ?? 'default';
    // const stackName = Stack.of(this).stackName;

    const restApiId = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${microserviceName}-rest-api-id-ssm`,
      {
        parameterName: 'web-api-gateway-rest-api-id',
      },
    ).stringValue;

    const rootResourceId = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${microserviceName}-root-resource-id-ssm`,
      {
        parameterName: 'web-api-gateway-root-resource-id',
      },
    ).stringValue;

    const mainApi = apigw.RestApi.fromRestApiAttributes(this, 'main-api', {
      restApiId: restApiId,
      rootResourceId: rootResourceId,
    });

    const webApiGateway = new apigw.Resource(
      this,
      `${microserviceName}-apigw-resource`,
      {
        parent: mainApi.root,
        pathPart: props.path,
      },
    );

    const proxy = webApiGateway.addProxy({
      defaultIntegration: new apigw.LambdaIntegration(this.nodeJsFunction),
      anyMethod: true,
    });

    const deployment = new apigw.Deployment(
      this,
      'deployment-' + new Date().toISOString(),
      {
        api: apigw.RestApi.fromRestApiId(this, 'RestApi', restApiId),
        description: `...`,
        retainDeployments: true,
      },
    );

    // force deployment by changing hash
    deployment.addToLogicalId(new Date().toISOString());

    // props.methods!.forEach((method) => deployment.node.addDependency(method));
    //  if the 'stageName' already exists (from the core apigateway deployment) then the existing stage will be used !
    const stage = new apigw.Stage(this, 'Stage', {deployment});

    new cdk.CfnOutput(this, 'Rest API Stack Name', {
      value: `https://${restApiId}.execute-api.${awsAccountRegion}.amazonaws.com/prod/v1/roll/notation/1d2/luck/1`,
    });
  }

  getRestApi(): LambdaRestApi {
    return this.apiGateway;
  }

  getBaseUrl(): string {
    const awsAccountRegion = Stack.of(this).region;
    const restApiId = ssm.StringParameter.fromStringParameterAttributes(
      this,
      'web-api-gateway-rest-api-id-ssm',
      {
        parameterName: 'web-api-gateway-rest-api-id',
      },
    ).stringValue;

    return `https://${restApiId}.execute-api.${awsAccountRegion}.amazonaws.com/prod/`;
  }

  getNodeJsFunction(): NodejsFunction {
    return this.nodeJsFunction;
  }
}
