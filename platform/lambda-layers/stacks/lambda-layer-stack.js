'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', {enumerable: true, value: v});
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', {value: true});
exports.LambdaLayerStack = void 0;
const cdk = __importStar(require('aws-cdk-lib'));
const aws_cdk_lib_1 = require('aws-cdk-lib');
const aws_lambda_1 = require('aws-cdk-lib/aws-lambda');
const child = __importStar(require('child_process'));
class LambdaLayerStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    const awsAccountId = aws_cdk_lib_1.Stack.of(this).account;
    const awsAccountRegion = aws_cdk_lib_1.Stack.of(this).region;
    // include in layer packages that are common or do not bundle well
    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.BundlingOutput.html
    const nestJsAppLayer = new aws_lambda_1.LayerVersion(
      this,
      'NestJsAppLayer',
      {
        layerVersionName: `arn:aws:lambda:${awsAccountRegion}:${awsAccountId}:layer:NestJsAppLayer`,
        compatibleArchitectures: [
          aws_lambda_1.Architecture.X86_64,
          aws_lambda_1.Architecture.ARM_64,
        ],
        removalPolicy: aws_cdk_lib_1.RemovalPolicy.DESTROY,
        code: aws_lambda_1.Code.fromAsset('.', {
          exclude: ['*', '!package.json'],
          bundling: {
            image: aws_lambda_1.Runtime.NODEJS_16_X.bundlingImage,
            command: [],
            local: {
              tryBundle(outputDir) {
                try {
                  child.execSync('npm --version');
                } catch (_a) {
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
            outputType: aws_cdk_lib_1.BundlingOutput.ARCHIVED,
          },
        }),
      },
    );
    new cdk.CfnOutput(this, 'layerVersionArn', {
      value: `${nestJsAppLayer.layerVersionArn}`,
    });
  }
}
exports.LambdaLayerStack = LambdaLayerStack;
