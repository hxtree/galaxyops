import { Microservice } from '@cats-cradle/constructs';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import * as path from 'path';
import { Code, LayerVersion, Runtime } from 'aws-cdk-lib/aws-lambda';
import { CHROMIUM_ZIP_FILEPATH } from './download-lambda-layer';

export class HtmlToPdfStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const chromiumLambdaLayer = new LayerVersion(this, 'ChromiumLayer', {
      layerVersionName: 'ChromiumLayer',
      code: Code.fromAsset(CHROMIUM_ZIP_FILEPATH),
      compatibleRuntimes: [Runtime.NODEJS_18_X],
      description: 'Chromium layer for Lambda',
    });

    const microservice = new Microservice(this, 'html-to-pdf-stack', {
      path: 'html-to-pdf',
      projectRoot: path.join(__dirname, '..'),
      memorySize: 1600,
      layers: [chromiumLambdaLayer],
    });

    new cdk.CfnOutput(this, 'health check endpoint', {
      value: `${microservice.getBaseUrl()}/health`,
    });

    new cdk.CfnOutput(this, 'test endpoint', {
      value: `${microservice.getBaseUrl()}/pdf/example-pdf`,
    });
  }
}
