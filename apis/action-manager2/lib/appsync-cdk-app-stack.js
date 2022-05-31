"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsyncCdkAppStack = void 0;
const cdk = require("@aws-cdk/core");
const appsync = require("@aws-cdk/aws-appsync");
const ddb = require("@aws-cdk/aws-dynamodb");
const lambda = require("@aws-cdk/aws-lambda");
class AppsyncCdkAppStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const api = new appsync.GraphqlApi(this, 'Api', {
            name: 'cdk-notes-appsync-api',
            schema: appsync.Schema.fromAsset('graphql/schema.graphql'),
            authorizationConfig: {
                defaultAuthorization: {
                    authorizationType: appsync.AuthorizationType.API_KEY,
                    apiKeyConfig: {
                        expires: cdk.Expiration.after(cdk.Duration.days(365))
                    }
                },
            },
            xrayEnabled: true,
        });
        // print out the AppSync GraphQL endpoint to the terminal
        new cdk.CfnOutput(this, "GraphQLAPIURL", {
            value: api.graphqlUrl
        });
        // print out the AppSync API Key to the terminal
        new cdk.CfnOutput(this, "GraphQLAPIKey", {
            value: api.apiKey || ''
        });
        // print out the stack region
        new cdk.CfnOutput(this, "Stack Region", {
            value: this.region
        });
        const notesLambda = new lambda.Function(this, 'AppSyncNotesHandler', {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: 'main.handler',
            code: lambda.Code.fromAsset('lambda-fns'),
            memorySize: 1024
        });
        // set the new Lambda function as a data source for the AppSync API
        const lambdaDs = api.addLambdaDataSource('lambdaDatasource', notesLambda);
        // create resolvers to match GraphQL operations in schema
        lambdaDs.createResolver({
            typeName: "Query",
            fieldName: "getNoteById"
        });
        lambdaDs.createResolver({
            typeName: "Query",
            fieldName: "listNotes"
        });
        lambdaDs.createResolver({
            typeName: "Mutation",
            fieldName: "createNote"
        });
        lambdaDs.createResolver({
            typeName: "Mutation",
            fieldName: "deleteNote"
        });
        lambdaDs.createResolver({
            typeName: "Mutation",
            fieldName: "updateNote"
        });
        // create DynamoDB table
        const notesTable = new ddb.Table(this, 'CDKNotesTable', {
            billingMode: ddb.BillingMode.PAY_PER_REQUEST,
            partitionKey: {
                name: 'id',
                type: ddb.AttributeType.STRING,
            },
        });
        // enable the Lambda function to access the DynamoDB table (using IAM)
        notesTable.grantFullAccess(notesLambda);
        notesLambda.addEnvironment('NOTES_TABLE', notesTable.tableName);
    }
}
exports.AppsyncCdkAppStack = AppsyncCdkAppStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwc3luYy1jZGstYXBwLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwc3luYy1jZGstYXBwLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyxnREFBZ0Q7QUFDaEQsNkNBQTZDO0FBQzdDLDhDQUE4QztBQUU5QyxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQy9DLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7WUFDOUMsSUFBSSxFQUFFLHVCQUF1QjtZQUM3QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUM7WUFDMUQsbUJBQW1CLEVBQUU7Z0JBQ25CLG9CQUFvQixFQUFFO29CQUNwQixpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsT0FBTztvQkFDcEQsWUFBWSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDdEQ7aUJBQ0Y7YUFDRjtZQUNELFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztRQUVILHlEQUF5RDtRQUN6RCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUN4QyxLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVU7U0FDckIsQ0FBQyxDQUFDO1FBRUgsZ0RBQWdEO1FBQ2hELElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3ZDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUU7U0FDeEIsQ0FBQyxDQUFDO1FBRUgsNkJBQTZCO1FBQzdCLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3RDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNuQixDQUFDLENBQUM7UUFFSCxNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQ25FLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLGNBQWM7WUFDdkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUN6QyxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7UUFFSCxtRUFBbUU7UUFDbkUsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRTFFLHlEQUF5RDtRQUN6RCxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3RCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxhQUFhO1NBQ3pCLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDdEIsUUFBUSxFQUFFLE9BQU87WUFDakIsU0FBUyxFQUFFLFdBQVc7U0FDdkIsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUN0QixRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsWUFBWTtTQUN4QixDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3RCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDdEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLFlBQVk7U0FDeEIsQ0FBQyxDQUFDO1FBRUgsd0JBQXdCO1FBQ3hCLE1BQU0sVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3RELFdBQVcsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLGVBQWU7WUFDNUMsWUFBWSxFQUFFO2dCQUNaLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU07YUFDL0I7U0FDRixDQUFDLENBQUM7UUFFSCxzRUFBc0U7UUFDdEUsVUFBVSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUV2QyxXQUFXLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFbEUsQ0FBQztDQUNGO0FBcEZELGdEQW9GQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcclxuaW1wb3J0ICogYXMgYXBwc3luYyBmcm9tICdAYXdzLWNkay9hd3MtYXBwc3luYyc7XHJcbmltcG9ydCAqIGFzIGRkYiBmcm9tICdAYXdzLWNkay9hd3MtZHluYW1vZGInO1xyXG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwc3luY0Nka0FwcFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xyXG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgY29uc3QgYXBpID0gbmV3IGFwcHN5bmMuR3JhcGhxbEFwaSh0aGlzLCAnQXBpJywge1xyXG4gICAgICBuYW1lOiAnY2RrLW5vdGVzLWFwcHN5bmMtYXBpJyxcclxuICAgICAgc2NoZW1hOiBhcHBzeW5jLlNjaGVtYS5mcm9tQXNzZXQoJ2dyYXBocWwvc2NoZW1hLmdyYXBocWwnKSxcclxuICAgICAgYXV0aG9yaXphdGlvbkNvbmZpZzoge1xyXG4gICAgICAgIGRlZmF1bHRBdXRob3JpemF0aW9uOiB7XHJcbiAgICAgICAgICBhdXRob3JpemF0aW9uVHlwZTogYXBwc3luYy5BdXRob3JpemF0aW9uVHlwZS5BUElfS0VZLFxyXG4gICAgICAgICAgYXBpS2V5Q29uZmlnOiB7XHJcbiAgICAgICAgICAgIGV4cGlyZXM6IGNkay5FeHBpcmF0aW9uLmFmdGVyKGNkay5EdXJhdGlvbi5kYXlzKDM2NSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeHJheUVuYWJsZWQ6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwcmludCBvdXQgdGhlIEFwcFN5bmMgR3JhcGhRTCBlbmRwb2ludCB0byB0aGUgdGVybWluYWxcclxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwiR3JhcGhRTEFQSVVSTFwiLCB7XHJcbiAgICAgdmFsdWU6IGFwaS5ncmFwaHFsVXJsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwcmludCBvdXQgdGhlIEFwcFN5bmMgQVBJIEtleSB0byB0aGUgdGVybWluYWxcclxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwiR3JhcGhRTEFQSUtleVwiLCB7XHJcbiAgICAgIHZhbHVlOiBhcGkuYXBpS2V5IHx8ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwcmludCBvdXQgdGhlIHN0YWNrIHJlZ2lvblxyXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgXCJTdGFjayBSZWdpb25cIiwge1xyXG4gICAgICB2YWx1ZTogdGhpcy5yZWdpb25cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5vdGVzTGFtYmRhID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnQXBwU3luY05vdGVzSGFuZGxlcicsIHtcclxuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEyX1gsXHJcbiAgICAgIGhhbmRsZXI6ICdtYWluLmhhbmRsZXInLFxyXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYS1mbnMnKSxcclxuICAgICAgbWVtb3J5U2l6ZTogMTAyNFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIHNldCB0aGUgbmV3IExhbWJkYSBmdW5jdGlvbiBhcyBhIGRhdGEgc291cmNlIGZvciB0aGUgQXBwU3luYyBBUElcclxuICAgIGNvbnN0IGxhbWJkYURzID0gYXBpLmFkZExhbWJkYURhdGFTb3VyY2UoJ2xhbWJkYURhdGFzb3VyY2UnLCBub3Rlc0xhbWJkYSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIHJlc29sdmVycyB0byBtYXRjaCBHcmFwaFFMIG9wZXJhdGlvbnMgaW4gc2NoZW1hXHJcbiAgICBsYW1iZGFEcy5jcmVhdGVSZXNvbHZlcih7XHJcbiAgICAgIHR5cGVOYW1lOiBcIlF1ZXJ5XCIsXHJcbiAgICAgIGZpZWxkTmFtZTogXCJnZXROb3RlQnlJZFwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBsYW1iZGFEcy5jcmVhdGVSZXNvbHZlcih7XHJcbiAgICAgIHR5cGVOYW1lOiBcIlF1ZXJ5XCIsXHJcbiAgICAgIGZpZWxkTmFtZTogXCJsaXN0Tm90ZXNcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgbGFtYmRhRHMuY3JlYXRlUmVzb2x2ZXIoe1xyXG4gICAgICB0eXBlTmFtZTogXCJNdXRhdGlvblwiLFxyXG4gICAgICBmaWVsZE5hbWU6IFwiY3JlYXRlTm90ZVwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBsYW1iZGFEcy5jcmVhdGVSZXNvbHZlcih7XHJcbiAgICAgIHR5cGVOYW1lOiBcIk11dGF0aW9uXCIsXHJcbiAgICAgIGZpZWxkTmFtZTogXCJkZWxldGVOb3RlXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGxhbWJkYURzLmNyZWF0ZVJlc29sdmVyKHtcclxuICAgICAgdHlwZU5hbWU6IFwiTXV0YXRpb25cIixcclxuICAgICAgZmllbGROYW1lOiBcInVwZGF0ZU5vdGVcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIER5bmFtb0RCIHRhYmxlXHJcbiAgICBjb25zdCBub3Rlc1RhYmxlID0gbmV3IGRkYi5UYWJsZSh0aGlzLCAnQ0RLTm90ZXNUYWJsZScsIHtcclxuICAgICAgYmlsbGluZ01vZGU6IGRkYi5CaWxsaW5nTW9kZS5QQVlfUEVSX1JFUVVFU1QsXHJcbiAgICAgIHBhcnRpdGlvbktleToge1xyXG4gICAgICAgIG5hbWU6ICdpZCcsXHJcbiAgICAgICAgdHlwZTogZGRiLkF0dHJpYnV0ZVR5cGUuU1RSSU5HLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZW5hYmxlIHRoZSBMYW1iZGEgZnVuY3Rpb24gdG8gYWNjZXNzIHRoZSBEeW5hbW9EQiB0YWJsZSAodXNpbmcgSUFNKVxyXG4gICAgbm90ZXNUYWJsZS5ncmFudEZ1bGxBY2Nlc3Mobm90ZXNMYW1iZGEpXHJcbiAgICBcclxuICAgIG5vdGVzTGFtYmRhLmFkZEVudmlyb25tZW50KCdOT1RFU19UQUJMRScsIG5vdGVzVGFibGUudGFibGVOYW1lKTtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==