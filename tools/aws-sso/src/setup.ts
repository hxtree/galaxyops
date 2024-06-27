import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { copyRecursiveSync } from './copy-recursive-sync';

export function setupAwsHomeDir() {
  const sourceDir = path.join(__dirname, '../.aws');
  const destinationDir = path.join(os.homedir(), '.aws');

  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir);
  }

  copyRecursiveSync(sourceDir, destinationDir);
}
