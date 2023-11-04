import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { NestJsLambdaLayerStack } from './nestjs-lambda-layer.stack';

describe('MainStack', () => {
  it('should match snapshot test', () => {
    const app = new cdk.App();
    const stack = new NestJsLambdaLayerStack(app, 'MyTestStack');
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });
});
