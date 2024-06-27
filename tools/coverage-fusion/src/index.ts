#!/usr/bin/env node
import path from 'path';
import { Command } from 'commander';
import { getCoverageReports } from './get-coverage-reports';
import { mergeCoverageReports } from './merge-coverage-reports';
import { makeCoverageReports } from './make-coverage-reports';

function main() {
  const program = new Command();

  program
    .name('coverage-fusion')
    .description('CLI consolidate coverage reports')
    .version('0.0.1');

  program
    .arguments('<directory>')
    .description(
      'The directory that coverage reports will be consolidated from.',
    )
    .action(async (directory: string) => {
      try {
        const cwd = __dirname;
        const directoryToSearch = path.join(cwd, directory);
        const fileNameToFind = 'coverage-final.json';

        console.log(
          `Consolidating ${fileNameToFind} coverage report in ${directoryToSearch}`,
        );

        const coverageReports = getCoverageReports(
          directoryToSearch,
          fileNameToFind,
        );

        const coverageMap = mergeCoverageReports(coverageReports);

        makeCoverageReports(directoryToSearch, coverageMap, [
          'json',
          'text',
          'lcov',
          'html',
        ]);

        console.log('Successfully made consolidated coverage report');
      } catch (err) {
        const error = err as Error;
        console.error('An error occurred:', error.message);
        process.exit(1);
      }
    });

  program.parse(process.argv);
}

main();
