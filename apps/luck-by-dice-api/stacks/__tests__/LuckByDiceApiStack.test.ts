import * as cdk from 'aws-cdk-lib';
import {Template} from 'aws-cdk-lib/assertions';
import * as LuckByDiceApiStack from '../LuckByDiceApiStack';

test('AWS Lambda Function handler set', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new LuckByDiceApiStack.LuckByDiceApiStack(app, 'MyTestStack');

  // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    Handler: "index.handler"
  });
});
