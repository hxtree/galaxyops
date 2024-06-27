export function installAwsCli() {
  console.log('AWS CLI v2 is required but not found.');
  console.log('Please follow the instructions to install AWS CLI v2:');
  console.log(
    '1. Visit https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html',
  );
  console.log(
    '2. Download and install AWS CLI v2 according to your operating system.',
  );
  console.log(
    '3. Configure AWS CLI with appropriate profiles and credentials.',
  );
  console.log(
    'Once installed and configured, you can proceed with running this script.',
  );
  process.exit(1);
}
