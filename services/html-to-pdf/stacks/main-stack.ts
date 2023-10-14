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

    const chromiumLambdaLayer = LayerVersion.fromLayerVersionAttributes(
      this,
      'ChromiumLayer',
      {
        layerVersionArn: lambdaLayerChromiumLatestVersion,
      },
    );

    const microservice = new Microservice(this, 'html-to-pdf-stack', {
      path: 'html-to-pdf',
      projectRoot: path.join(__dirname, '..'),
      layers: [chromiumLambdaLayer],
    });

    new cdk.CfnOutput(this, 'Localhost API Example', {
      value: `${microservice.getBaseUrl()}/health`,
    });
  }
}
