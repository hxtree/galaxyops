import path from 'path';
import { getCoverageReports } from './get-coverage-reports';

const istanbulCoverage = require('istanbul-lib-coverage');
const istanbulReport = require('istanbul-lib-report');
const istanbulReports = require('istanbul-reports');

const rootDir = path.resolve(__dirname, '../../../');
const reportDir = `${rootDir}/coverage`;

const coverageReports = getCoverageReports();

const mergedMap = istanbulCoverage.createCoverageMap({});

coverageReports.forEach((coverageReport: any) => {
  const coverage = require(coverageReport);
  Object.keys(coverage).forEach(filename =>
    mergedMap.addFileCoverage(coverage[filename]),
  );
});

const reportGenerationContext = istanbulReport.createContext({
  dir: reportDir,
  defaultSummarizer: 'nested',
  coverageMap: mergedMap,
});

try {
  ['json', 'text', 'lcov', 'html'].forEach((reporter: string) => {
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
