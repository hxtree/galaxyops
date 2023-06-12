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

export class KillBillStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // EC2

    // print out the stack region
    new cdk.CfnOutput(this, 'Stack Region', {
      value: this.region,
    });
  }
}
