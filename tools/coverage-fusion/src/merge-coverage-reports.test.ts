/* eslint-disable global-require, @typescript-eslint/no-var-requires */

import { mergeCoverageReports } from './merge-coverage-reports';

jest.mock('istanbul-lib-coverage', () => ({
  createCoverageMap: jest.fn().mockReturnValue({
    addFileCoverage: jest.fn(),
  }),
}));

const istanbulCoverage = require('istanbul-lib-coverage');

describe('mergeCoverageReports', () => {
  const mockCoverageReports = [
    './mockCoverageReport1',
    './mockCoverageReport2',
  ];

  const mockCoverage1 = {
    'file1.js': {
      /* some coverage data */
    },
    'file2.js': {
      /* some coverage data */
    },
  };

  const mockCoverage2 = {
    'file3.js': {
      /* some coverage data */
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules(); // Clear the module cache
  });

  it('should merge coverage reports correctly', () => {
    jest.doMock(mockCoverageReports[0], () => mockCoverage1, { virtual: true });
    jest.doMock(mockCoverageReports[1], () => mockCoverage2, { virtual: true });

    const mergedMap = mergeCoverageReports(mockCoverageReports);

    expect(istanbulCoverage.createCoverageMap).toHaveBeenCalledWith({});
    expect(mergedMap.addFileCoverage).toHaveBeenCalledWith(
      mockCoverage1['file1.js'],
    );
    expect(mergedMap.addFileCoverage).toHaveBeenCalledWith(
      mockCoverage1['file2.js'],
    );
    expect(mergedMap.addFileCoverage).toHaveBeenCalledWith(
      mockCoverage2['file3.js'],
    );
  });

  it('should handle empty coverage reports array', () => {
    const mergedMap = mergeCoverageReports([]);

    expect(istanbulCoverage.createCoverageMap).toHaveBeenCalledWith({});
    expect(mergedMap.addFileCoverage).not.toHaveBeenCalled();
  });

  it('should throw an error if a coverage report cannot be required', () => {
    jest.doMock(
      mockCoverageReports[0],
      () => {
        throw new Error('File not found');
      },
      { virtual: true },
    );

    expect(() => mergeCoverageReports(mockCoverageReports)).toThrow(
      'File not found',
    );
  });
});
