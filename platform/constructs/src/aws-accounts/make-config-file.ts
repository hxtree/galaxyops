import { writeFile } from 'fs';
import { awsConfigFileContent, awsConfigFilepath } from './profiles';

writeFile(awsConfigFilepath, awsConfigFileContent(), (err: any) => {
  if (err) {
    return console.error(err);
  }
  return console.log('AWS Config file updated.');
});
