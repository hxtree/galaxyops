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
    region: 'us-east-2',
  },
  test: {
    accountId: '298217020330',
    description: 'Use to run Acceptance Test',
    region: 'us-east-2',
  },
  prod: {
    accountId: '298217020330',
    description: 'Use for production',
    region: 'us-east-2',
  },
  tools: {
    accountId: '760440398296', // '124653296725',
    description: 'Use to deploy resources to other accounts',
    region: 'us-east-2',
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

export const awsConfigFilepath = '~/.aws/config';

export const awsConfigFileContent = (): string => {
  let output = '';
  awsProfiles.forEach((awsProfile: AwsProfileType) => {
    output += `
  [profile ${awsProfile.name}]
  sso_start_url = ${awsProfile.sso.startUrl}
  sso_region = ${awsProfile.sso.region}
  sso_account_id = ${awsProfile.sso.accountId}
  sso_role_name =${awsProfile.sso.roleName}
  region = ${awsProfile.region};
  `;
  });

  return output;
};
