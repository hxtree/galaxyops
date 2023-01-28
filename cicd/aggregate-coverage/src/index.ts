const istanbulCoverage = require('istanbul-lib-coverage');
const istanbulReport = require('istanbul-lib-report');
const istanbulReports = require('istanbul-reports');

import { getCoverageReports } from './get-coverage-reports';

const rootDir = '/usr/src/app/';
const coverageReports = getCoverageReports();

const map = istanbulCoverage.createCoverageMap({});

coverageReports.forEach((coverageReport: any) => {
  const coverage = require(coverageReport);
  Object.keys(coverage).forEach(filename =>
    map.addFileCoverage(coverage[filename]),
  );
});

const context = istanbulReport.createContext({ coverageMap: map });

['json', 'lcov', 'text'].forEach(reporter =>
  istanbulReports
    .create(reporter, {
      projectRoot: rootDir,
    })
    .execute(context),
);
