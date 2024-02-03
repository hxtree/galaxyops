import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ChromiumLayerStack } from './chromium-layer.stack';
import { NestJsLayerStack } from './nestjs-layer.stack';

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const nestJsLayer = new NestJsLayerStack(this, `${id}-nestjs-layer-stack`);
    const chromiumLayer = new ChromiumLayerStack(
      this,
      `${id}-chromium-layer-stack`,
    );

    new cdk.CfnOutput(this, 'NestJsLayerVersionArn', {
      value: `${nestJsLayer.layerVersion.layerVersionArn}`,
    });

    new cdk.CfnOutput(this, 'ChromiumLayerVersionArn', {
      value: `${chromiumLayer.layerVersion.layerVersionArn}`,
    });
  }
}
