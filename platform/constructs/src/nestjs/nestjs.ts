import { Construct } from 'constructs';
import { Duration, Stack } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as path from 'path';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { EnvironmentType } from './environment.type';

export interface NestJsProps {
  functionName?: string;
  projectRoot: string;
  region: string;
  stageName: string;
  environment?: EnvironmentType;
  memorySize?: number;
  layers?: lambda.ILayerVersion[];
  role?: IRole;
}

export class NestJs extends Construct {
  private nodeJsFunction: lambda.Function;

  constructor(scope: Construct, id: string, props: NestJsProps) {
    super(scope, id);

    const mongoDatabaseUri = ssm.StringParameter.fromStringParameterAttributes(
      scope,
      'mongo-database-uri-ssm',
      {
        parameterName: 'MONGO_DATABASE_URI',
      },
    ).stringValue;

    const mongoDatabaseUser = ssm.StringParameter.fromStringParameterAttributes(
      scope,
      'mongo-database-user-ssm',
      {
        parameterName: 'MONGO_DATABASE_USER',
      },
    ).stringValue;

    const mongoDatabasePassword = ssm.StringParameter.fromStringParameterAttributes(
      scope,
      'mongo-database-password-ssm',
      {
        parameterName: 'MONGO_DATABASE_PASSWORD',
      },
    ).stringValue;

    const awsAccountId = Stack.of(this).account;

    /**
     * Environmental variables
     */
    const defaultEnvironment = {
      /**
       * The following ENV are reserved by AWS, set by default AWS, and used
       * They are not visible in AWS Management Console under Lambda Environment
       * {@link https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html }
       *
       * AWS_REGION
       */
      AWS_ACCOUNT_ID: awsAccountId,
      STAGE_NAME: props.stageName,
      MONGO_DATABASE_URI: mongoDatabaseUri,
      MONGO_DATABASE_USER: mongoDatabaseUser,
      MONGO_DATABASE_PASSWORD: mongoDatabasePassword,
      // BASE_URL: getBaseUrl(props.apiId, props.region, props.stageName),
    };

    this.nodeJsFunction = new lambda.Function(this, 'NodeJsLambda', {
      // functionName: `${awsAccountId}-${props.stageName}-${props.functionName}-function`,
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset(path.join(props.projectRoot, 'dist')),
      handler: 'index.handler',
      layers: props.layers,
      memorySize: props.memorySize ?? 1024, // 128 -- TODO reduce
      environment: {
        ...defaultEnvironment,
        ...props.environment,
      },
      logRetention: RetentionDays.ONE_DAY,
      timeout: Duration.seconds(30),
      role: props.role,
    });
  }

  getNodeJsFunction(): lambda.Function {
    return this.nodeJsFunction;
  }
}
