import * as fs from 'fs';
import { globSync } from 'glob';
import { EnvironmentConfig } from './env-config';

export interface FindReplace {
  find: string;
  replace: string;
}

export function createFindReplaceMappings(
  object: EnvironmentConfig,
): FindReplace[] {
  return Object.entries(object).map(([key, value]) => ({
    find: `${key}=`,
    replace: `${key}=${value}`,
  }));
}

export function replaceLinesInFile(
  content: string,
  findAndReplace: FindReplace[],
): string {
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    for (const { find, replace } of findAndReplace) {
      if (lines[i].startsWith(find)) {
        lines[i] = replace;
        break;
      }
    }
  }

  return lines.join('\n');
}

export function processDotEnvFile(
  file: string,
  envConfig: EnvironmentConfig,
): void {
  const envFile: string = file.replace('.env.dist', '.env');
  fs.copyFileSync(file, envFile);
  const content: string = fs.readFileSync(envFile, 'utf8');
  const findAndReplace = createFindReplaceMappings(envConfig);
  const newContent = replaceLinesInFile(content, findAndReplace);
  fs.writeFileSync(envFile, newContent);
  console.log(`Created and updated ${envFile}`);
}

export function findFiles(
  searchDirectory: string,
  searchFileName = '.env.dist',
): string[] {
  return globSync(`${searchDirectory}/**/${searchFileName}`);
}

export function processDotEnvFiles(
  envFiles: string[],
  envConfig: EnvironmentConfig,
): void {
  envFiles.forEach((file) => processDotEnvFile(file, envConfig));
}
