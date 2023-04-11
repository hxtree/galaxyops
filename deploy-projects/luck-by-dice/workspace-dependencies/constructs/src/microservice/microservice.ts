import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Stack } from 'aws-cdk-lib';
import { ApiEndpoint } from '../api-endpoint/api-endpoint';
import { NestJs } from '../nestjs/nestjs';

export interface MicroserviceProps {
  path: string;
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

    this.nestJs = new NestJs(scope, `${id}-nestjs`, {
      apiId,
      region,
      stageName,
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
