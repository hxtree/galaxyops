import {Construct} from 'constructs';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import {ApiEndpoint} from '../api-endpoint/api-endpoint';
import {NestJs} from '../nestjs/nestjs';

export interface MicroserviceProps {
  path: string;
}

export class Microservice extends Construct {
  private nestJs: NestJs;
  private apiEndpoint: ApiEndpoint;

  constructor(scope: Construct, id: string, props: MicroserviceProps) {
    super(scope, id);

    this.nestJs = new NestJs(this, `${id}-nestjs`, {});

    this.apiEndpoint = new ApiEndpoint(this, `${id}-api-endpoint`, {
      stageName: 'default',
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
