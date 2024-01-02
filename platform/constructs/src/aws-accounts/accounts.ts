/**
 * Master List of AWS Account Ids
 */
export type AwsAccountType = {
  accountId: string;
  description: string;
  region: string;
  domainName: string;
};

export const awsAccounts = [
  {
    name: 'dev',
    description: 'Development environment',
    accountId: '298217020330',
    region: 'us-east-2',
    domainName: 'sandbox.nekosgate.com',
  },
  // {
  //   name: 'test',
  //   description: 'Acceptance Test environment',
  //   accountId: '298217020330',
  //   region: 'us-east-2',
  //   fqdn: 'test.nekosgate.com'
  // },
  {
    name: 'prod',
    description: 'Production environment',
    accountId: '124653296725',
    region: 'us-east-2',
    domainName: 'nekosgate.com',
  },
  {
    name: 'tools',
    description: 'Use to deploy resources to other accounts',
    accountId: '760440398296',
    region: 'us-east-2',
    domainName: 'tools.nekosgate.com',
  },
];
