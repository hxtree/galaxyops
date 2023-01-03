export type AwsProfileSsoType = {
  startUrl: string;
  region: string;
  accountId: string;
  roleName: string;
};

export type AwsProfileType = {
  name: string;
  sso: AwsProfileSsoType;
  region: string;
  output: string;
  credentialProcess: string;
};

/**
 * Master List of AWS Account Ids
 */
export const awsAccounts = {
  dev: {
    accountId: '298217020330',
    description: 'Use for development',
  },
  test: {
    accountId: '298217020330',
    description: 'Use to run Acceptance Test',
  },
  prod: {
    accountId: '298217020330',
    description: 'Use for production',
  },
  tools: {
    accountId: '298217020330',
    description: 'Use to deploy resources to other accounts',
  },
};

/**
 * Master List of AWS Profiles
 */
export const awsProfiles: AwsProfileType[] = [
  {
    name: 'dev-mgmt',
    sso: {
      startUrl: 'https://ouxsoft.awsapps.com/start',
      region: 'us-east-2',
      accountId: awsAccounts.dev.accountId,
      roleName: 'ManagementAccount',
    },
    region: 'us-east-2',
    output: 'json',
    credentialProcess: 'aws-sso-credential-process --profile ManagementAccount',
  },
  {
    name: 'dev',
    sso: {
      startUrl: 'https://ouxsoft.awsapps.com/start',
      region: 'us-east-2',
      accountId: awsAccounts.dev.accountId,
      roleName: 'AdministratorAccess',
    },
    region: 'us-east-2',
    output: 'json',
    credentialProcess: 'aws-sso-credential-process --profile DeveloperSandbox',
  },
];
