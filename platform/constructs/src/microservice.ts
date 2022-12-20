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
  private restApiId: string;
  private path: string;
  private stageName: string;

  constructor(scope: Construct, id: string, props: MicroserviceProps) {
    super(scope, id);

    this.stageName = 'prod';

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda.LayerVersion.html
    const microserviceName = kebabCase(Stack.of(this).stackName);
    const awsAccountId = Stack.of(this).account;
    this.path = props.path;
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

    this.restApiId = ssm.StringParameter.fromStringParameterAttributes(
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

    const v1ResourceId = ssm.StringParameter.fromStringParameterAttributes(
      this,
      `${microserviceName}-v1-resource-id-ssm`,
      {
        parameterName: 'web-api-gateway-v1-resource-id',
      },
    ).stringValue;

    const mainApi = apigw.RestApi.fromRestApiAttributes(
      this,
      `${microserviceName}-main-api`,
      {
        restApiId: this.restApiId,
        rootResourceId: rootResourceId,
      },
    );

    const v1Resource = apigw.Resource.fromResourceAttributes(
      this,
      'web-api-gateway-v1-resource-id',
      {
        restApi: mainApi,
        path: '/v1',
        resourceId: v1ResourceId,
      },
    );

    const lambdaPath = new apigw.Resource(
      this,
      `${microserviceName}-apigw-resource`,
      {
        parent: v1Resource,
        pathPart: props.path,
      },
    );

    const proxy = lambdaPath.addProxy({
      defaultIntegration: new apigw.LambdaIntegration(this.nodeJsFunction),
      anyMethod: true,
    });

    const deployment = new apigw.Deployment(
      this,
      'deployment' + new Date().toISOString(),
      {api: mainApi, retainDeployments: false},
    );

    const stage = apigw.Stage.fromStageAttributes(this, 'Stage', {
      restApi: mainApi,
      stageName: this.stageName,
    });

    // force deployment by changing hash
    mainApi.latestDeployment?.addToLogicalId(new Date().toISOString());
    deployment.addToLogicalId(new Date().toISOString());

    (deployment as any).resource.stageName = stage.stageName;

    // deploy to existing API & stage
    // const stage = new apigw.Stage(this, 'stage-alpha', {
    //   deployment,
    //   stageName: 'default',
    // });
  }

  getRestApi(): LambdaRestApi {
    return this.apiGateway;
  }

  getBaseUrl(): string {
    const awsAccountRegion = Stack.of(this).region;

    return `https://${this.restApiId}.execute-api.${awsAccountRegion}.amazonaws.com/${this.stageName}/v1/${this.path}`;
  }

  getNodeJsFunction(): NodejsFunction {
    return this.nodeJsFunction;
  }
}
