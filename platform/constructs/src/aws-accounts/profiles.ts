export type SSO = {
  startUrl: string;
  region: string;
  accountId: string;
  roleName: string;
};

export type Profile = {
  sso: SSO;
  region: string;
  output: string;
  credentialProcess: string;
};

const Profiles: Profile[] = [
  {
    sso: {
      startUrl: 'https://ouxsoft.awsapps.com/start',
      region: 'us-east-2',
      accountId: '298217020330',
      roleName: 'ManagementAccount',
    },
    region: 'us-east-2',
    output: 'json',
    credentialProcess: 'aws-sso-credential-process --profile ManagementAccount',
  },
  {
    sso: {
      startUrl: 'https://ouxsoft.awsapps.com/start',
      region: 'us-east-2',
      accountId: '298217020330',
      roleName: 'AdministratorAccess',
    },
    region: 'us-east-2',
    output: 'json',
    credentialProcess: 'aws-sso-credential-process --profile DeveloperSandbox',
  },
];
