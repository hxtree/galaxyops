import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Construct } from 'constructs';
import { NestJsLayerStack } from './nestjs-layer.stack';

describe('NestJsLambdaLayerStack', () => {
  it('should match snapshot test', () => {
    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new NestJsLayerStack(this, 'test-stack');
      }
    }

    const app = new cdk.App();
    const stack = new TestStack(app, 'TestStack');
    const template = Template.fromStack(stack);

    // TODO consider reworking to use DNS instead of incrementing and deploying each time
    const customSnapshotSerializer = {
      test: (val: any) => typeof val === 'string',
      print: (val: any) => val
        .replace(/deployment\d{8}T\d{9}Z[^:]+/, 'deployment_UNIQUE_HASH')
        .replace(/[a-fA-F0-9]+\.zip/, 'UNIQUE_HASH.zip'),
    };
    expect.addSnapshotSerializer(customSnapshotSerializer);

    expect(template.toJSON()).toMatchSnapshot();
  });
});
