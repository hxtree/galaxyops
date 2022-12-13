import {Microservice} from '@org-platform/constructs';
import {Construct} from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as fs from 'fs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import {Fn, IResolvable, StackProps} from 'aws-cdk-lib';
import {Asset} from 'aws-cdk-lib/aws-s3-assets';
import {
  AssetApiDefinition,
  ApiDefinition,
  InlineApiDefinition,
  MethodLoggingLevel,
  SpecRestApi,
} from 'aws-cdk-lib/aws-apigateway';
import path from 'path';
import {Role, ServicePrincipal, PolicyStatement} from 'aws-cdk-lib/aws-iam';
import {json} from 'stream/consumers';

export class LuckByDiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const microservice = new Microservice(this, 'luck-by-dice-stack', {});
    // store micoservice endpoint

    // API Gateway resource
    const rest = new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: microservice.getNodeJsFunction(),
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowCredentials: true,
        allowMethods: ['GET', 'POST'],
      },
    });

    // Store API Gateway URL
    new ssm.StringParameter(this, 'Parameter', {
      description: 'LuckByDiceApiUrl',
      parameterName: 'LuckByDiceApiUrl',
      stringValue: `${rest.url}api`,
    });

    new cdk.CfnOutput(this, 'Region', {
      value: this.region,
    });

    new cdk.CfnOutput(this, 'Localhost API Docs', {
      value: `${rest.url}roll/notation/1d6/luck/2`,
    });

    // TODO intergrate API gateway with openapi spec

    // const openapiFilepath: string = path.join(
    //   __dirname,
    //   '/../openapi-spec.json',
    // );
    // var openapiFilecontent = fs.readFileSync(openapiFilepath, 'utf8');
    // const openApiObj = JSON.parse(openapiFilecontent);
    // const openApiDef = AssetApiDefinition.fromInline(openApiObj);

    // const asset = new Asset(this, 'SwaggerAsset', {
    //   path: path.join(__dirname, '/../openapi-spec.json'),
    // });

    // const data = Fn.transform('AWS::Include', {Location: asset.s3ObjectUrl});

    // const openApiDef = AssetApiDefinition.fromInline(data);

    // const service = microservice.node.tryGetContext('service');
    // const api: SpecRestApi = new SpecRestApi(this, 'RestAPI', {
    //   restApiName: service, // kebacase
    //   apiDefinition: openApiDef,
    //   deployOptions: {
    //     stageName: 'dev',
    //   },
    // });

    // const apiRole: Role = new Role(this, 'apiRole', {
    //   roleName: 'RestAPIRole',
    //   assumedBy: new ServicePrincipal('apigateway.amazonaws.com'),
    // });
  }
}
