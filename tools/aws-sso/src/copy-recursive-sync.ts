import * as fs from 'fs';
import * as path from 'path';

export function copyRecursiveSync(source: string, target: string) {
  const files = fs.readdirSync(source);

  files.forEach((file) => {
    const currentSource = path.join(source, file);
    const currentTarget = path.join(target, file);

    if (fs.statSync(currentSource).isDirectory()) {
      fs.mkdirSync(currentTarget);
      copyRecursiveSync(currentSource, currentTarget);
    } else {
      fs.copyFileSync(currentSource, currentTarget);
    }
  });
}
