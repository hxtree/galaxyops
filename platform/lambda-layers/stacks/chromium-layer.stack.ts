import { Construct } from 'constructs';
import { NestedStack, Stack, StackProps } from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { Code, LayerVersion, Runtime } from 'aws-cdk-lib/aws-lambda';
import { CHROMIUM_ZIP_FILEPATH } from './download-lambda-layer';

export class ChromiumLayerStack extends NestedStack {
  layerVersion: LayerVersion;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const awsAccountId = Stack.of(this).account;
    const awsAccountRegion = Stack.of(this).region;

    // create a lambda capable of creating pdf from html
    this.layerVersion = new LayerVersion(this, 'Chromium', {
      layerVersionName: `arn:aws:lambda:${awsAccountRegion}:${awsAccountId}:layer:Chromium`,
      code: Code.fromAsset(CHROMIUM_ZIP_FILEPATH),
      compatibleRuntimes: [Runtime.NODEJS_18_X],
      description: 'Chromium layer for Lambda',
    });

    new ssm.StringParameter(this, `${id}-lambda-layer-latest-version`, {
      description: 'Lambda Layer Chromium Latest Version',
      parameterName: 'LAMBDA_LAYER_VERSION_CHROMIUM',
      stringValue: this.layerVersion.layerVersionArn,
    });
  }
}
