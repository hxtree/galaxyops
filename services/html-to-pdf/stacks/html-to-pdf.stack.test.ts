import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { HtmlToPdfStack } from './html-to-pdf.stack';
import { downloadChromiumZip } from './download-lambda-layer';

describe('HtmlToPdfStack', () => {
  beforeAll(async () => {
    await downloadChromiumZip();
  });

  it('should match snapshot test', () => {
    const app = new cdk.App();
    const stack = new HtmlToPdfStack(app, 'MyTestStack');
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
