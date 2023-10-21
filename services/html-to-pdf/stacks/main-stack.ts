import { Microservice } from '@cats-cradle/constructs';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import { StackProps } from 'aws-cdk-lib';
import * as path from 'path';
import { LayerVersion } from 'aws-cdk-lib/aws-lambda';

export class HtmlToPdfStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    /**
     * @link https://github.com/shelfio/chrome-aws-lambda-layer/tree/master
     */
    const lambdaLayerChromiumLatestVersion = ssm.StringParameter.fromStringParameterAttributes(
      this,
      'lambda-layer-chromium-latest-version-ssm',
      {
        parameterName: 'lambda-layer-chromium-latest-version',
      },
    ).stringValue;

    // const chromiumLambdaLayer = LayerVersion.fromLayerVersionAttributes(
    //   this,
    //   'ChromiumLayer',
    //   {
    //     layerVersionArn: lambdaLayerChromiumLatestVersion,
    //   },
    // );

    // const chromiumLambdaLayer = LayerVersion.fromLayerVersionArn(
    //   this,
    //   'chromium-lambda-layer',
    //   'arn:aws:lambda:us-east-2:764866452798:layer:chrome-aws-lambda:38',
    // );

    const microservice = new Microservice(this, 'html-to-pdf-stack', {
      path: 'html-to-pdf',
      projectRoot: path.join(__dirname, '..'),
      memorySize: 1600,
      // layers: [chromiumLambdaLayer],
    });

    new cdk.CfnOutput(this, 'health check endpoint', {
      value: `${microservice.getBaseUrl()}/health`,
    });

    new cdk.CfnOutput(this, 'test endpoint', {
      value: `${microservice.getBaseUrl()}/pdf/example-pdf`,
    });
  }
}
