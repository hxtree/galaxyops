// import * as cdk from 'aws-cdk-lib';
// import * as s3 from 'aws-cdk-lib/aws-s3';
// import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
// import * as route53 from 'aws-cdk-lib/aws-route53';
// import * as targets from 'aws-cdk-lib/aws-route53-targets';

// const app = new cdk.App();
// const stack = new cdk.Stack(app, 'CloudFrontStack');

// // Define your S3 bucket for hosting the contents of the 'src' directory
// const srcBucket = new s3.Bucket(stack, 'SrcBucket', {
//   removalPolicy: cdk.RemovalPolicy.DESTROY, // Only for demonstration purposes
// });

// // Upload the contents of the 'src' directory to the S3 bucket
// srcBucket.addDirectory('./src', {
//   destinationKeyPrefix: 'src', // This will create 'src' prefix in the S3 bucket
// });

// // Define your CloudFront distribution
// const cloudFrontDistribution = new cloudfront.CloudFrontWebDistribution(stack, 'MyCloudFrontDistribution', {
//   originConfigs: [
//     {
//       s3OriginSource: {
//         s3BucketSource: srcBucket,
//       },
//       behaviors: [{ isDefaultBehavior: true }],
//     },
//   ],
// });

// // Define your custom domain
// const domainName = 'example.com';

// // Create a Route 53 hosted zone (replace hostedZoneId with your actual Hosted Zone ID)
// const hostedZoneId = 'your-hosted-zone-id';
// const hostedZone = route53.HostedZone.fromHostedZoneAttributes(stack, 'HostedZone', {
//   hostedZoneId: hostedZoneId,
//   zoneName: domainName,
// });

// // Create a record set for the custom domain pointing to the CloudFront distribution
// new route53.ARecord(stack, 'AliasRecord', {
//   recordName: domainName,
//   target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(cloudFrontDistribution)),
//   zone: hostedZone,
// });

// app.synth();
