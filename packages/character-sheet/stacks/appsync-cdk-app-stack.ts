import * as cdk from '@aws-cdk/core';
import * as appsync from '@aws-cdk/aws-appsync';
import * as lambda from '@aws-cdk/aws-lambda';

export class AppsyncCdkAppStack extends cdk.Stack {
  // TODO Move to param store, etc.
  DB_PASSWORD = 'test';
  DB_USERNAME = 'test';

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new appsync.GraphqlApi(this, 'Api', {
      name: 'cdk-notes-appsync-api',
      schema: appsync.Schema.fromAsset('graphql/schema.graphql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
          apiKeyConfig: {
            expires: cdk.Expiration.after(cdk.Duration.days(365)),
          },
        },
      },
      xrayEnabled: true,
    });

    // print out the AppSync GraphQL endpoint to the terminal
    new cdk.CfnOutput(this, 'GraphQLAPIURL', {
      value: api.graphqlUrl,
    });

    // print out the AppSync API Key to the terminal
    new cdk.CfnOutput(this, 'GraphQLAPIKey', {
      value: api.apiKey || '',
    });

    // print out the stack region
    new cdk.CfnOutput(this, 'Stack Region', {
      value: this.region,
    });

    const notesLambda = new lambda.Function(this, 'AppSyncNotesHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'main.handler',
      code: lambda.Code.fromAsset('dist/src'),
      memorySize: 1024,
    });
    notesLambda.addEnvironment('DB_USERNAME', this.DB_USERNAME);
    notesLambda.addEnvironment('DB_PASSWORD', this.DB_PASSWORD);

    // set the new Lambda function as a data source for the AppSync API
    const lambdaDs = api.addLambdaDataSource('lambdaDatasource', notesLambda);

    // create resolvers to match GraphQL operations in schema
    lambdaDs.createResolver({
      typeName: 'Query',
      fieldName: 'getArchetypeById',
    });

    lambdaDs.createResolver({
      typeName: 'Query',
      fieldName: 'listArchetypes',
    });
  }
}
