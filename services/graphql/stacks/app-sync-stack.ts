import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { readFileSync } from 'fs';
import {
  CfnGraphQLApi,
  CfnApiKey,
  CfnGraphQLSchema,
  CfnDataSource,
  CfnResolver,
} from 'aws-cdk-lib/aws-appsync';
import {
  BundlingOutput,
  Duration,
  RemovalPolicy,
  StackProps,
} from 'aws-cdk-lib';
import {
  Architecture,
  Code,
  LayerVersion,
  Runtime,
} from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import {
  Effect,
  PolicyStatement,
  Role,
  ServicePrincipal,
} from 'aws-cdk-lib/aws-iam';

import path from 'path';

export class AppSyncStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new CfnGraphQLApi(this, 'graphql-api-id', {
      name: 'graphql-api-name',
      authenticationType: 'API_KEY',
      xrayEnabled: true,
    });

    const apiKey = new CfnApiKey(this, 'graphql-api-key', {
      apiId: api.attrApiId,
      // expires: cdk.Expiration.after(cdk.Duration.days(365))
    });

    const schema = new CfnGraphQLSchema(this, 'graphql-api-schema', {
      apiId: api.attrApiId,
      definition: readFileSync('./graphql/schema.graphql').toString(),
    });

    // print out the AppSync GraphQL endpoint to the terminal
    new cdk.CfnOutput(this, 'GraphQLAPIURL', {
      value: api.attrGraphQlUrl,
    });

    // print out the AppSync API Key to the terminal
    new cdk.CfnOutput(this, 'GraphQLAPIKey', {
      value: apiKey.toString() || '',
    });

    // print out the stack region
    new cdk.CfnOutput(this, 'Stack Region', {
      value: this.region,
    });

    // TODO properly configure resolvers

    // const notesLambda = new lambda.Function(this, 'AppSyncNotesHandler', {
    //   runtime: lambda.Runtime.NODEJS_18_X,
    //   handler: 'src/main.handler',
    //   code: lambda.Code.fromAsset('dist'),
    //   memorySize: 1024,
    // });

    // const notesLambda = new NodejsFunction(this, 'AppSyncNotesHandler', {
    //   timeout: cdk.Duration.seconds(5),
    //   runtime: lambda.Runtime.NODEJS_18_X,
    //   handler: 'main',
    //   entry: '/../src/main.ts',
    // });

    // const cfnDataSource = new appsync.CfnDataSource(this, 'MyCfnDataSource', {
    //   apiId: 'apiId',
    //   name: 'name',
    //   type: 'type',

    //   // the properties below are optional
    //   description: 'description',
    //   lambdaConfig: {
    //     lambdaFunctionArn: 'lambdaFunctionArn',
    //   },
    // });

    // const invokeLambdaRole = new Role(this, 'AppSync-InvokeLambdaRole', {
    //   assumedBy: new ServicePrincipal('appsync.amazonaws.com'),
    // });

    // const lambdaDataSource = new CfnDataSource(this, 'lambda-datasource', {
    //   apiId: api.attrApiId,
    //   // Note: property 'name' cannot include hyphens
    //   name: 'LambdaDataSource',
    //   type: 'AWS_LAMBDA',
    //   lambdaConfig: {
    //     lambdaFunctionArn: lambdaFunction.functionArn,
    //   },
    // });

    // invokeLambdaRole.addToPolicy(
    //   new PolicyStatement({
    //     effect: Effect.ALLOW,
    //     resources: [lambdaFunction.functionArn],
    //     actions: ['lambda:InvokeFunction'],
    //   }),
    // );

    // const lambdaResolver1 = new CfnResolver(this, 'lambda-resolver1', {
    //   apiId: api.attrApiId,
    //   typeName: 'Query',
    //   fieldName: 'getArchetypeById',
    //   dataSourceName: lambdaDataSource.name,
    // });
    // lambdaResolver1.addDependsOn(schema);

    // // set the new Lambda function as a data source for the AppSync API
    // const lambdaDs = api.addLambdaDataSource('lambdaDatasource', notesLambda);

    // // create resolvers to match GraphQL operations in schema
    // lambdaDs.createResolver({
    //   typeName: 'Query',
    //   fieldName: 'getArchetypeById',
    // });

    // lambdaDs.createResolver({
    //   typeName: 'Query',
    //   fieldName: 'listArchetypes',
    // });
  }
}
