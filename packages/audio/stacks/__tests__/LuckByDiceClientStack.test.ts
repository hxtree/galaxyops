import * as cdk from 'aws-cdk-lib';
import {Template} from 'aws-cdk-lib/assertions';

import {LuckByDiceClientStack} from '../LuckByDiceClientStack';

test('Stack contains', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new LuckByDiceClientStack(app, 'TestStack');

  // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::CloudFront::Distribution', {
    Handler: 'index.handler',
  });
});
