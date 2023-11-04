import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { DefaultPipelineStack } from './default-pipeline.stack';

describe('DefaultPipelineStack', () => {
  it('should match snapshot test', () => {
    const app = new cdk.App();
    const stack = new DefaultPipelineStack(app, 'MyTestStack');
    const template = Template.fromStack(stack);

    expect(template).toMatchSnapshot();
  });
});
