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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwc3luYy1jZGstYXBwLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcHN5bmMtY2RrLWFwcC1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsZ0RBQWdEO0FBQ2hELDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFFOUMsTUFBYSxrQkFBbUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUMvQyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO1lBQzlDLElBQUksRUFBRSx1QkFBdUI7WUFDN0IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDO1lBQzFELG1CQUFtQixFQUFFO2dCQUNuQixvQkFBb0IsRUFBRTtvQkFDcEIsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU87b0JBQ3BELFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3REO2lCQUNGO2FBQ0Y7WUFDRCxXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7UUFFSCx5REFBeUQ7UUFDekQsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDeEMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVO1NBQ3JCLENBQUMsQ0FBQztRQUVILGdEQUFnRDtRQUNoRCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUN2QyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFO1NBQ3hCLENBQUMsQ0FBQztRQUVILDZCQUE2QjtRQUM3QixJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDbkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRTtZQUNuRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7WUFDekMsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO1FBRUgsbUVBQW1FO1FBQ25FLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUUxRSx5REFBeUQ7UUFDekQsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUN0QixRQUFRLEVBQUUsT0FBTztZQUNqQixTQUFTLEVBQUUsYUFBYTtTQUN6QixDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3RCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxXQUFXO1NBQ3ZCLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDdEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLFlBQVk7U0FDeEIsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUN0QixRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsWUFBWTtTQUN4QixDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3RCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FBQztRQUVILHdCQUF3QjtRQUN4QixNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUN0RCxXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxlQUFlO1lBQzVDLFlBQVksRUFBRTtnQkFDWixJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNO2FBQy9CO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsc0VBQXNFO1FBQ3RFLFVBQVUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFdkMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRWxFLENBQUM7Q0FDRjtBQXBGRCxnREFvRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XHJcbmltcG9ydCAqIGFzIGFwcHN5bmMgZnJvbSAnQGF3cy1jZGsvYXdzLWFwcHN5bmMnO1xyXG5pbXBvcnQgKiBhcyBkZGIgZnJvbSAnQGF3cy1jZGsvYXdzLWR5bmFtb2RiJztcclxuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcHN5bmNDZGtBcHBTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IGFwaSA9IG5ldyBhcHBzeW5jLkdyYXBocWxBcGkodGhpcywgJ0FwaScsIHtcclxuICAgICAgbmFtZTogJ2Nkay1ub3Rlcy1hcHBzeW5jLWFwaScsXHJcbiAgICAgIHNjaGVtYTogYXBwc3luYy5TY2hlbWEuZnJvbUFzc2V0KCdncmFwaHFsL3NjaGVtYS5ncmFwaHFsJyksXHJcbiAgICAgIGF1dGhvcml6YXRpb25Db25maWc6IHtcclxuICAgICAgICBkZWZhdWx0QXV0aG9yaXphdGlvbjoge1xyXG4gICAgICAgICAgYXV0aG9yaXphdGlvblR5cGU6IGFwcHN5bmMuQXV0aG9yaXphdGlvblR5cGUuQVBJX0tFWSxcclxuICAgICAgICAgIGFwaUtleUNvbmZpZzoge1xyXG4gICAgICAgICAgICBleHBpcmVzOiBjZGsuRXhwaXJhdGlvbi5hZnRlcihjZGsuRHVyYXRpb24uZGF5cygzNjUpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHhyYXlFbmFibGVkOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcHJpbnQgb3V0IHRoZSBBcHBTeW5jIEdyYXBoUUwgZW5kcG9pbnQgdG8gdGhlIHRlcm1pbmFsXHJcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIkdyYXBoUUxBUElVUkxcIiwge1xyXG4gICAgIHZhbHVlOiBhcGkuZ3JhcGhxbFVybFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcHJpbnQgb3V0IHRoZSBBcHBTeW5jIEFQSSBLZXkgdG8gdGhlIHRlcm1pbmFsXHJcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIkdyYXBoUUxBUElLZXlcIiwge1xyXG4gICAgICB2YWx1ZTogYXBpLmFwaUtleSB8fCAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcHJpbnQgb3V0IHRoZSBzdGFjayByZWdpb25cclxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwiU3RhY2sgUmVnaW9uXCIsIHtcclxuICAgICAgdmFsdWU6IHRoaXMucmVnaW9uXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBub3Rlc0xhbWJkYSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ0FwcFN5bmNOb3Rlc0hhbmRsZXInLCB7XHJcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMl9YLFxyXG4gICAgICBoYW5kbGVyOiAnbWFpbi5oYW5kbGVyJyxcclxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEtZm5zJyksXHJcbiAgICAgIG1lbW9yeVNpemU6IDEwMjRcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyBzZXQgdGhlIG5ldyBMYW1iZGEgZnVuY3Rpb24gYXMgYSBkYXRhIHNvdXJjZSBmb3IgdGhlIEFwcFN5bmMgQVBJXHJcbiAgICBjb25zdCBsYW1iZGFEcyA9IGFwaS5hZGRMYW1iZGFEYXRhU291cmNlKCdsYW1iZGFEYXRhc291cmNlJywgbm90ZXNMYW1iZGEpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSByZXNvbHZlcnMgdG8gbWF0Y2ggR3JhcGhRTCBvcGVyYXRpb25zIGluIHNjaGVtYVxyXG4gICAgbGFtYmRhRHMuY3JlYXRlUmVzb2x2ZXIoe1xyXG4gICAgICB0eXBlTmFtZTogXCJRdWVyeVwiLFxyXG4gICAgICBmaWVsZE5hbWU6IFwiZ2V0Tm90ZUJ5SWRcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgbGFtYmRhRHMuY3JlYXRlUmVzb2x2ZXIoe1xyXG4gICAgICB0eXBlTmFtZTogXCJRdWVyeVwiLFxyXG4gICAgICBmaWVsZE5hbWU6IFwibGlzdE5vdGVzXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGxhbWJkYURzLmNyZWF0ZVJlc29sdmVyKHtcclxuICAgICAgdHlwZU5hbWU6IFwiTXV0YXRpb25cIixcclxuICAgICAgZmllbGROYW1lOiBcImNyZWF0ZU5vdGVcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgbGFtYmRhRHMuY3JlYXRlUmVzb2x2ZXIoe1xyXG4gICAgICB0eXBlTmFtZTogXCJNdXRhdGlvblwiLFxyXG4gICAgICBmaWVsZE5hbWU6IFwiZGVsZXRlTm90ZVwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBsYW1iZGFEcy5jcmVhdGVSZXNvbHZlcih7XHJcbiAgICAgIHR5cGVOYW1lOiBcIk11dGF0aW9uXCIsXHJcbiAgICAgIGZpZWxkTmFtZTogXCJ1cGRhdGVOb3RlXCJcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBEeW5hbW9EQiB0YWJsZVxyXG4gICAgY29uc3Qgbm90ZXNUYWJsZSA9IG5ldyBkZGIuVGFibGUodGhpcywgJ0NES05vdGVzVGFibGUnLCB7XHJcbiAgICAgIGJpbGxpbmdNb2RlOiBkZGIuQmlsbGluZ01vZGUuUEFZX1BFUl9SRVFVRVNULFxyXG4gICAgICBwYXJ0aXRpb25LZXk6IHtcclxuICAgICAgICBuYW1lOiAnaWQnLFxyXG4gICAgICAgIHR5cGU6IGRkYi5BdHRyaWJ1dGVUeXBlLlNUUklORyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGVuYWJsZSB0aGUgTGFtYmRhIGZ1bmN0aW9uIHRvIGFjY2VzcyB0aGUgRHluYW1vREIgdGFibGUgKHVzaW5nIElBTSlcclxuICAgIG5vdGVzVGFibGUuZ3JhbnRGdWxsQWNjZXNzKG5vdGVzTGFtYmRhKVxyXG4gICAgXHJcbiAgICBub3Rlc0xhbWJkYS5hZGRFbnZpcm9ubWVudCgnTk9URVNfVEFCTEUnLCBub3Rlc1RhYmxlLnRhYmxlTmFtZSk7XHJcblxyXG4gIH1cclxufVxyXG4iXX0=