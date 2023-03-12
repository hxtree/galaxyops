import { Microservice } from '@cats-cradle/constructs';
import * as cdk from 'aws-cdk-lib';
import { Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class MessageBrokerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // provision data-lake-bucket to store published messages
    const dataLakeBucket = new Bucket(this, `${id}-data-lake-bucket`, {
      bucketName: `${this.account}-data-lake-bucket`,
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // deploy lambda
    const microservice = new Microservice(this, 'message-broker-stack', {
      path: 'message-broker',
    });

    // add permissions to send message to data lake
    const nodeJsFunction = microservice.getNodeJsFunction();
    dataLakeBucket.grantPut(nodeJsFunction);

    new cdk.CfnOutput(this, 'AWS_BUCKET', { value: dataLakeBucket.bucketName });
  }
}
