/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';

const istanbulReport = require('istanbul-lib-report');
const istanbulReports = require('istanbul-reports');

const rootDir = path.resolve(__dirname, '../../../');
const reportDir = `${rootDir}/coverage`;

export function makeCoverageReports(coverageMap: any, formats: string[]) {
  const reportGenerationContext = istanbulReport.createContext({
    dir: reportDir,
    defaultSummarizer: 'nested',
    coverageMap,
  });

  try {
    formats.forEach((reporter: string) => {
      istanbulReports
        .create(reporter, {
          projectRoot: rootDir,
        })
        .execute(reportGenerationContext);
      console.log(`create ${reporter}`);
    });
    console.log('Complete');
  } catch (error) {
    const err = error as Error;
    console.log(err);
  }
}
