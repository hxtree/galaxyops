import fs from 'fs';
import path from 'path';

export function findFilesRecursively(
  directory: string,
  fileName: string,
): string[] {
  let results: string[] = [];

  const files = fs.readdirSync(directory, {
    withFileTypes: true,
    encoding: 'utf8',
  });

  files.forEach((file) => {
    if (file.isSymbolicLink()) {
      return;
    }

    const filePath = path.join(directory, file.name);

    const fileStat = fs.statSync(filePath);

    if (filePath.includes('node_modules/')) {
      return;
    }

    if (fileStat.isDirectory()) {
      results = results.concat(findFilesRecursively(filePath, fileName));
    } else if (file.name === fileName) {
      results.push(filePath);
    }
  });

  return results;
}
