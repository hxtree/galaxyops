import { messageRegistry } from '@cats-cradle/messaging-schemas';
import { Construct } from 'constructs';
import { StackProps, RemovalPolicy } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as firehose from 'aws-cdk-lib/aws-kinesisfirehose';
import * as iam from 'aws-cdk-lib/aws-iam';

export class MessageBusStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const awsAccountId = cdk.Stack.of(this).account;
    const awsAccountRegion = cdk.Stack.of(this).region;
    const stageName = process.env.STAGE_NAME ?? 'default';

    // provision a S3 bucket to contain a record of every message
    // this will allow for analytics to be performed independent of tier systems
    const dataLakeBucket = new s3.Bucket(this, `${stageName}-data-lake`, {
      bucketName: `${awsAccountId}-${stageName}-data-lake-bucket`,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      removalPolicy: RemovalPolicy.RETAIN,
    });

    // Create a Kinesis Data Firehose delivery stream
    // https://github.com/aws/aws-cdk/issues/14391
    const snsRoleToPutMessagesInFirehose = new iam.Role(
      this,
      'SnsRoleToPutMessagesInFirehose',
      {
        assumedBy: new iam.ServicePrincipal('sns.amazonaws.com'),
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            'service-role/AmazonSNSRole',
          ),
        ],
      },
    );
    snsRoleToPutMessagesInFirehose.addToPolicy(
      new iam.PolicyStatement({
        actions: [
          'firehose:DescribeDeliveryStream',
          'firehose:ListDeliveryStreams',
          'firehose:ListTagsForDeliveryStream',
          'firehose:PutRecord',
          'firehose:PutRecordBatch',
        ],
        resources: [
          `arn:aws:firehose:${awsAccountRegion}:${awsAccountId}:deliverystream/*`,
        ],
      }),
    );

    const kinesisFirehoseRole = new iam.Role(this, 'KinesisFirehoseRole', {
      assumedBy: new iam.ServicePrincipal('firehose.amazonaws.com'),
    });

    // Attach a policy that allows writing to the S3 bucket
    dataLakeBucket.grantReadWrite(kinesisFirehoseRole);

    // outputs file as`${projectFolder}${year}/${month}/${day}/${folder}/${file}`
    const firehoseStream = new firehose.CfnDeliveryStream(
      this,
      'DataLakeFirehoseDeliveryStream',
      {
        deliveryStreamName: 'test-firehose-delivery-stream',
        deliveryStreamType: 'DirectPut',
        s3DestinationConfiguration: {
          bucketArn: dataLakeBucket.bucketArn,
          roleArn: kinesisFirehoseRole.roleArn,
          bufferingHints: {
            sizeInMBs: cdk.Size.mebibytes(1).toMebibytes(),
            intervalInSeconds: cdk.Duration.seconds(60).toSeconds(),
          },
          compressionFormat: 'UNCOMPRESSED',
          encryptionConfiguration: {
            noEncryptionConfig: 'NoEncryption',
          },
          prefix: 'messages/',
          errorOutputPrefix: 'messages-logs/',
        },
      },
    );

    // create a topic for every type of message
    for (const [className, classReference] of messageRegistry
      .getClassRegistry()
      .entries()) {
      console.log(`provision ${className} topic`);

      const snsTopic = new sns.Topic(this, classReference.name, {
        topicName: classReference.topicName(),
        displayName: classReference.displayName(),
        fifo: false,
      });

      new sns.Subscription(
        this,
        `DataLakeFirehoseSubscriptionFor${className}`,
        {
          protocol: sns.SubscriptionProtocol.FIREHOSE,
          topic: snsTopic,
          rawMessageDelivery: true,
          endpoint: firehoseStream.attrArn,
          subscriptionRoleArn: snsRoleToPutMessagesInFirehose.roleArn,
        },
      );
    }
  }
}
