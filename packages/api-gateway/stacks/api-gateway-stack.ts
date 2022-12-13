import {Construct} from 'constructs';
import {Fn, IResolvable, StackProps} from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import {Asset} from 'aws-cdk-lib/aws-s3-assets';
import {
  ApiDefinition,
  InlineApiDefinition,
  MethodLoggingLevel,
  SpecRestApi,
} from 'aws-cdk-lib/aws-apigateway';
import path from 'path';

export class ApiGatewayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // https://github.com/aws-samples/aws-cdk-openapi
    // https://medium.com/@gwieser/solving-a-nightmare-aws-cdk-openapi-and-api-gateway-a1b6fdc1fd24

    const openApiasset = new Asset(this, 'openApiFile', {
      path: path.join(__dirname, '../openapi-spec.json'),
    });

    const transformMap = {
      Location: openApiasset.s3ObjectUrl,
    };

    const data: IResolvable = Fn.transform('AWS::Include', transformMap);

    const apiDefinition: InlineApiDefinition = ApiDefinition.fromInline(data);

    const specRestApi = new SpecRestApi(this, 'RestApi', {
      apiDefinition: apiDefinition,
      restApiName: 'open-api',
      deployOptions: {
        stageName: process.env.stage ?? 'default',        let raw = yaml.stringify(
          yaml.parse(fs.readFileSync(this.path, 'utf8'))
      );
      props.lambdas?.map((lambda) => {
          raw = raw.replace(`\${${lambda.name}.Arn}`, lambda.arn);
      });
      const openapi = yaml.parse(raw);

      const openApiDef = AssetApiDefinition.fromInline(openapi);

      const service = this.node.tryGetContext('service');
      const api = new SpecRestApi(this, 'OpenApiSpec', {
          restApiName: capitalize(service),
          apiDefinition: openApiDef,
          deployOptions: {
              stageName: 'dev',
          },
      });

        loggingLevel: MethodLoggingLevel.INFO,
      },
      deploy: true,
    });

    // import using openapi spec
    // https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-quick-start-import-export.html

    // https://medium.com/@gwieser/solving-a-nightmare-aws-cdk-openapi-and-api-gateway-a1b6fdc1fd24

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-apigatewayv2-alpha-readme.html

    // const api = new apigateway.RestApi(this, 'api', {
    //   description: 'Mono API Gateway',
    //   deployOptions: {
    //     stageName: 'dev',
    //   },
    //   defaultCorsPreflightOptions: {
    //     allowHeaders: [
    //       'Content-Type',
    //       'X-Amz-Date',
    //       'Authorization',
    //       'X-Api-Key',
    //     ],
    //     allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    //     allowCredentials: true,
    //     allowOrigins: ['http://localhost:3000'],
    //   },
    // });

    // new cdk.CfnOutput(this, 'apiUrl', {value: api.url});

    // const getTodosLambda = new lambda.Function(this, 'get-todos-lambda', {
    //   runtime: lambda.Runtime.NODEJS_16_X,
    //   handler: 'index.main',
    //   code: lambda.Code.fromAsset(path.join(__dirname, '/../src/get-todos')),
    // });

    // 👇 add a /todos resource
    // const todos = api.root.addResource('todos');

    // // 👇 integrate GET /todos with getTodosLambda
    // todos.addMethod(
    //   'GET',
    //   new apigateway.LambdaIntegration(getTodosLambda, {proxy: true}),
    // );

    // // API Gateway resource
    // const rest = new apigateway.LambdaRestApi(this, 'Endpoint', {
    //   handler: lambdaFunction,
    //   defaultCorsPreflightOptions: {
    //     allowHeaders: [
    //       'Content-Type',
    //       'X-Amz-Date',
    //       'Authorization',
    //       'X-Api-Key',
    //     ],
    //     allowOrigins: apigateway.Cors.ALL_ORIGINS,
    //     allowCredentials: true,
    //     allowMethods: ['GET', 'POST'],
    //   },
    // });

    // const restApi = new apigateway.RestApi(this, 'my-api', {
    //   restApiName: `my-api`,
    // });

    // const mockIntegration = new apigateway.MockIntegration();

    // const someResource = new apigateway.Resource(this, 'new-resource', {
    //   parent: restApi.root,
    //   pathPart: 'somePath',
    //   defaultIntegration: mockIntegration,
    // });
    // someResource.addMethod('GET', mockIntegration);

    // https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-ssm.StringListParameter.html
    // new ssm.StringParameter(this, 'rest-api', {
    //   description: 'ApiGateway arn',
    //   parameterName: 'rest-api',
    //   stringValue: restApi.restApiId,
    // });

    //   new cdk.CfnOutput(this, `my-api-export`, {
    //     exportName: `my-api-id`,
    //     value: restApi.restApiId,
    //   });

    //   new cdk.CfnOutput(this, `my-api-somepath-export`, {
    //     exportName: `my-api-somepath-resource-id`,
    //     value: someResource.resourceId,
    //   });

    //   new cdk.CfnOutput(this, 'Region', {
    //     value: this.region,
    //   });
    // }
  }

  // const restApi = apigateway .RestApi.fromRestApiAttributes(this, "my-api", {
  //   restApiId: cdk.Fn.importValue(`my-api-id`),
  //   rootResourceId: cdk.Fn.importValue(`my-api-somepath-resource-id`),
  // });

  // const mockIntegration = new apigateway .MockIntegration();
  // new apigateway .Resource(this, "new-resource", {
  //   parent: restApi.root,
  //   pathPart: "new",
  //   defaultIntegration: mockIntegration,
  // });
}
