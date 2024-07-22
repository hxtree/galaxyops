import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { awsAccounts } from '@cats-cradle/constructs';
import { MainStack } from './main.stack';

describe('MainStack', () => {
  it('should match snapshot test', () => {
    const app = new cdk.App();

    const stack = new MainStack(app, 'MainStack', {
      env: {
        account: awsAccounts.tools.accountId,
        region: awsAccounts.tools.region,
      },
    });
    const template = Template.fromStack(stack);

    // TODO consider reworking to use DNS instead of incrementing and deploying each time
    const customSnapshotSerializer = {
      print: (val: any) => val
        .replace(/deployment\d{8}T\d{9}Z[^:]+/, 'deployment_UNIQUE_HASH')
        .replace(/[a-fA-F0-9]+\.zip/, 'UNIQUE_HASH.zip')
        .replace(/[^/]+\.json/, '/UNIQUE_HASH.json'),
      test: (val: any) => typeof val === 'string',
    };
    expect.addSnapshotSerializer(customSnapshotSerializer);

    expect(template.toJSON()).toMatchSnapshot();
  });
});
