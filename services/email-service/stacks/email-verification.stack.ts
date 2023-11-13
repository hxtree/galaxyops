import * as cdk from 'aws-cdk-lib';
import * as ses from 'aws-cdk-lib/aws-ses';
import { Construct } from 'constructs';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export class EmailVerificationStack extends cdk.NestedStack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // TODO: Currently this is manually set in SSM

    // Create an Amazon SES Identity (email address) and verify it
    const senderEmailAddress = ssm.StringParameter.fromStringParameterAttributes(
      scope,
      'sender-email-address',
      {
        parameterName: 'SENDER_EMAIL_ADDRESS',
      },
    ).stringValue;

    const sesIdentity = new ses.CfnEmailIdentity(this, 'SesIdentity', {
      emailIdentity: senderEmailAddress,
    });

    new cdk.CfnOutput(this, 'EmailAddressOutput', {
      value: senderEmailAddress,
    });

    // Need to check email the verification status of email
  }
}
