import { Construct } from 'constructs';
import { StackProps, RemovalPolicy } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as firehose from 'aws-cdk-lib/aws-kinesisfirehose';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import { messageRegistry } from '@cats-cradle/messaging-schemas';

export class MessageBusStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const awsAccountId = cdk.Stack.of(this).account;
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
    // const firehoseStream = new firehose.CfnDeliveryStream(
    //   this,
    //   'DataLakeFirehoseDeliveryStream',
    //   {
    //     deliveryStreamType: 'DirectPut',
    //     s3DestinationConfiguration: {
    //       bucketArn: dataLakeBucket.bucketArn,
    //       roleArn: 'ARN_OF_FIREHOSE_ROLE', // Replace with the ARN of the role for Firehose
    //     },
    //   },
    // );

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

      // snsTopic.addSubscription({
      //   protocol: sns.SubscriptionProtocol.FIREHOSE,
      //   topic: snsTopic,
      //   subscriberId: 'FirehoseSubscription',
      //   endpoint: firehoseStream.attrArn, // Use the ARN of the Firehose stream
      // });
    }

    // structure data lake for analysis
    // https://www.youtube.com/watch?v=4xjckHvapFk
    // const file = `${projectFolder}${year}/${month}/${day}/${folder}/${file}`

    // TODO add firehose to save message to data lake

    // Subscribe SNS topic to the Firehose stream

    // TODO make a construct for turn key pub sub, e.g.
    // import { Queue } from 'aws-cdk-lib/aws-sqs';
    // new Queue(this, 'EmailSendCommand', { queueName: EmailSendCommand.topicName });
    // Queues should be deployed with the service they run on
    // Make turn-key DLE
  }
}
