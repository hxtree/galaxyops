/* eslint-disable @typescript-eslint/no-var-requires */
const istanbulReport = require('istanbul-lib-report');
const istanbulReports = require('istanbul-reports');

/**
 * the outputDir is the cwd to avoid coverage files being relative to npx path
 * e.g. /home/runner/.npm/_npx/0cb0be537d78c849/node_modules/coverage
 */

export function makeCoverageReports(
  outputDir: string,
  coverageMap: any,
  formats: string[],
) {
  const reportDir = `${outputDir}/coverage`;
  const reportGenerationContext = istanbulReport.createContext({
    dir: reportDir,
    defaultSummarizer: 'nested',
    coverageMap,
  });

  try {
    formats.forEach((reporter: string) => {
      istanbulReports
        .create(reporter, {
          projectRoot: outputDir,
        })
        .execute(reportGenerationContext);
      console.log(`create ${reporter} to ${reportDir}`);
    });
    console.log('Complete');
  } catch (error) {
    const err = error as Error;
    console.log(err);
  }
}
