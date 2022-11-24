import {Construct} from 'constructs';
import * as cdk from 'aws-cdk-lib';
import {BundlingOutput, RemovalPolicy, Stack, StackProps} from 'aws-cdk-lib';
import {
  Architecture,
  Code,
  LayerVersion,
  Runtime,
} from 'aws-cdk-lib/aws-lambda';

import * as child from 'child_process';

export class LambdaLayerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const awsAccountId = Stack.of(this).account;
    const awsAccountRegion = Stack.of(this).region;

    // packages that are common or do not bundle well include in layer
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.BundlingOutput.html
    const nestJsAppLayer = new LayerVersion(this, 'NestJsAppLayer', {
      layerVersionName: `arn:aws:lambda:${awsAccountRegion}:${awsAccountId}:layer:NestJsAppLayer`,
      compatibleArchitectures: [Architecture.X86_64, Architecture.ARM_64],
      removalPolicy: RemovalPolicy.DESTROY,
      code: Code.fromAsset('.', {
        exclude: ['*', '!package.json'],
        bundling: {
          image: Runtime.NODEJS_16_X.bundlingImage,
          command: [],
          local: {
            tryBundle(outputDir: string) {
              try {
                child.execSync('npm --version');
              } catch {
                return false;
              }

              const commands = [
                'LAYER_TMP_DIR=dist',
                'mkdir -p "${LAYER_TMP_DIR}/nodejs"',
                'cat package.json | jq \'del(.devDependencies)\' > "${LAYER_TMP_DIR}/nodejs/package.json"',
                'cd "${LAYER_TMP_DIR}/nodejs"',
                'npm install --prefer-offline --production',
                'cd ..',
                'zip -rq layer.zip nodejs',
                `cp layer.zip ${outputDir}`,
              ];

              child.execSync(commands.join(' && '));
              return true;
            },
          },
          outputType: BundlingOutput.ARCHIVED,
        },
      }),
    });

    new cdk.CfnOutput(this, 'layerVersionArn', {
      value: `${nestJsAppLayer.layerVersionArn}`,
    });
  }
}
