import fs from 'fs';
import path from 'path';

export function findFilesRecursively(
  directory: string,
  fileName: string,
): string[] {
  let results: string[] = [];

  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const fileStat = fs.statSync(filePath);

    if (filePath.includes('node_modules/')) {
      return;
    }

    if (fileStat.isDirectory()) {
      results = results.concat(findFilesRecursively(filePath, fileName));
    } else if (file === fileName) {
      results.push(filePath);
    }
  });

  return results;
}
