import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Stack } from 'aws-cdk-lib';
import { LayerVersion } from 'aws-cdk-lib/aws-lambda';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { ApiEndpoint } from '../api-endpoint/api-endpoint';
import { NestJs } from '../nestjs/nestjs';

export interface MicroserviceProps {
  path: string;
  projectRoot: string;
  layers?: lambda.ILayerVersion[];
}

export class Microservice extends Construct {
  private nestJs: NestJs;

  private apiEndpoint: ApiEndpoint;

  constructor(scope: Construct, id: string, props: MicroserviceProps) {
    super(scope, id);

    const { region } = Stack.of(this);
    const stageName = 'default';
    const apiId = ssm.StringParameter.fromStringParameterAttributes(
      scope,
      'rest-api-id-ssm',
      {
        parameterName: 'web-api-gateway-rest-api-id',
      },
    ).stringValue;

    const lambdaLayerNestJsLatestVersion = ssm.StringParameter.fromStringParameterAttributes(
      scope,
      'lambda-layer-nestjs-latest-version-ssm',
      {
        parameterName: 'lambda-layer-nestjs-latest-version',
      },
    ).stringValue;

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda.LayerVersion.html
    const nestJsAppLayer = LayerVersion.fromLayerVersionAttributes(
      this,
      'NestJsAppLayer',
      {
        layerVersionArn: lambdaLayerNestJsLatestVersion,
      },
    );

    let lambdaLayers: lambda.ILayerVersion[] = [];
    if (props.layers !== undefined) {
      lambdaLayers = props.layers;
    }
    lambdaLayers.push(nestJsAppLayer);

    this.nestJs = new NestJs(scope, `${id}-nestjs`, {
      projectRoot: props.projectRoot,
      apiId,
      region,
      stageName,
      layers: lambdaLayers,
    });

    this.apiEndpoint = new ApiEndpoint(this, `${id}-api-endpoint`, {
      stageName,
      path: props.path,
      nodeJsFunction: this.nestJs.getNodeJsFunction(),
    });
  }

  getBaseUrl(): string {
    return this.apiEndpoint.getBaseUrl();
  }

  getNodeJsFunction(): NodejsFunction {
    return this.nestJs.getNodeJsFunction();
  }
}
