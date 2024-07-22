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

    expect(template).toMatchSnapshot();
  });
});
