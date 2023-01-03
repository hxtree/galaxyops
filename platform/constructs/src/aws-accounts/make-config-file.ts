import { writeFile } from 'fs';
import { awsProfiles, AwsProfileType } from './profiles';

const filepath = '~/.aws/config';

let output = '';

awsProfiles.forEach((awsProfile: AwsProfileType) => {
  console.log(awsProfile);
  output += `
[profile ${awsProfile.name}]
sso_start_url = ${awsProfile.sso.startUrl}
sso_region = ${awsProfile.sso.region}
sso_account_id = ${awsProfile.sso.accountId}
sso_role_name =${awsProfile.sso.roleName}
region = ${awsProfile.region};
`;
});

writeFile(filepath, output, (err: any) => {
  if (err) {
    return console.error(err);
  }
  return console.log('AWS Config file updated.');
});
