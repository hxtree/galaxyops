import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Stack } from 'aws-cdk-lib';
import { kebabCase } from 'lodash';
import { IRestApi } from 'aws-cdk-lib/aws-apigateway';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { getBaseUrl } from './get-base-url';

export interface ApiEndpointProps {
  stageName: string;
  path: string;
  nodeJsFunction: NodejsFunction;
}

export class ApiEndpoint extends Construct {
  private nodeJsFunction: NodejsFunction;

  private region: string;

  private restApi: IRestApi;

  private restApiId: string;

  private path: string;

  private stageName: string;

  constructor(scope: Construct, id: string, props: ApiEndpointProps) {
    super(scope, id);

    this.region = Stack.of(this).region;
    this.stageName = props.stageName;
    this.path = props.path;

    const [restApiId, rootResourceId, v1ResourceId] = this.getSsm();
    this.restApiId = restApiId;

    this.restApi = apigw.RestApi.fromRestApiAttributes(this, `${id}-main-api`, {
      restApiId,
      rootResourceId,
    });

    const v1Resource = apigw.Resource.fromResourceAttributes(
      this,
      `${id}-web-api-gateway-v1-resource-id`,
      {
        restApi: this.restApi,
        path: '/v1',
        resourceId: v1ResourceId,
      },
    );

    const lambdaPath = new apigw.Resource(this, `${id}-apigw-resource`, {
      parent: v1Resource,
      pathPart: props.path,
    });

    const proxy = lambdaPath.addProxy({
      defaultIntegration: new apigw.LambdaIntegration(props.nodeJsFunction),
      anyMethod: true,
    });

    const deployment = new apigw.Deployment(
      this,
      `${id}-deployment${new Date().toISOString()}`,
      { api: this.restApi, retainDeployments: false },
    );

    const stage = apigw.Stage.fromStageAttributes(
      this,
      `${id}-stage${new Date().toISOString()}`,
      {
        restApi: this.restApi,
        stageName: props.stageName,
      },
    );

    // force deployment by changing hash
    this.restApi.latestDeployment?.addToLogicalId(new Date().toISOString());
    stage.restApi.latestDeployment?.addToLogicalId(new Date().toISOString());
    deployment.addToLogicalId(new Date().toISOString());

    (deployment as any).resource.stageName = stage.stageName;
  }

  getBaseUrl(): string {
    return getBaseUrl(this.restApiId, this.region, this.stageName, this.path);
  }

  getNodeJsFunction(): NodejsFunction {
    return this.nodeJsFunction;
  }

  getSsm() {
    const restApiId = ssm.StringParameter.fromStringParameterAttributes(
      this,
      'rest-api-id-ssm',
      {
        parameterName: 'web-api-gateway-rest-api-id',
      },
    ).stringValue;

    const rootResourceId = ssm.StringParameter.fromStringParameterAttributes(
      this,
      'root-resource-id-ssm',
      {
        parameterName: 'web-api-gateway-root-resource-id',
      },
    ).stringValue;

    const v1ResourceId = ssm.StringParameter.fromStringParameterAttributes(
      this,
      'v1-resource-id-ssm',
      {
        parameterName: 'web-api-gateway-v1-resource-id',
      },
    ).stringValue;

    return [restApiId, rootResourceId, v1ResourceId] as const;
  }
}
