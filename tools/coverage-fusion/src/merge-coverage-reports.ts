/* eslint-disable global-require */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const istanbulCoverage = require('istanbul-lib-coverage');

type CoverageReports = string[];

export function mergeCoverageReports(coverageReports: CoverageReports) {
  const mergedMap = istanbulCoverage.createCoverageMap({});

  coverageReports.forEach((coverageReport: string) => {
    // eslint-disable-next-line import/no-dynamic-require, @typescript-eslint/no-var-requires
    const coverage = require(coverageReport);

    Object.keys(coverage).forEach((filename: string) =>
      mergedMap.addFileCoverage(coverage[filename]),
    );
  });

  return mergedMap;
}
