import * as cdk from 'aws-cdk-lib';
import {Template} from 'aws-cdk-lib/assertions';

import {MainStack} from '../MainStack';

test('Stack contains', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new MainStack(app, 'TestStack');

  // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::CloudFront::Distribution', {
    Handler: "index.handler"
  });
});
