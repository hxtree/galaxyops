import { Command } from 'commander';
import path from 'path';
import { findFiles, processDotEnvFiles } from './hydrate-bin';
import { envConfig } from './env-config';

const program = new Command();

program
  .name('hydrate-dotenvs')
  .description('CLI to hydrate dotenv files')
  .version('0.0.1');

program
  .command('hydrate')
  .description('populate env files')
  .argument('<string>', 'filepath')
  .action((argPath: string) => {
    console.log('Hydrating dotenv files');
    const searchDirectory = path.join(__dirname, argPath);
    console.log(searchDirectory);
    const envFiles = findFiles(searchDirectory);
    console.log(`${envFiles.length} files found`);
    console.log(envFiles);
    processDotEnvFiles(envFiles, envConfig);
    console.log('Script execution complete.');
  });

program.parse();
