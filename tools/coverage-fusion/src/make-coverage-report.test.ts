/* eslint-disable @typescript-eslint/no-var-requires */
import { makeCoverageReports } from './make-coverage-reports';

jest.mock('istanbul-lib-report', () => ({
  createContext: jest.fn(),
}));

jest.mock('istanbul-reports', () => ({
  create: jest.fn().mockReturnValue({
    execute: jest.fn(),
  }),
}));

const istanbulReport = require('istanbul-lib-report');
const istanbulReports = require('istanbul-reports');

describe('makeCoverageReports', () => {
  const mockOutputDir = '/mock/output';
  const mockCoverageMap = {}; // You can add a mock coverage map if needed
  const mockFormats = ['text', 'html'];

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(); // Mock console.log
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore console.log after each test
  });

  it('should create reports for specified formats', () => {
    const reportGenerationContext = {
      dir: `${mockOutputDir}/coverage`,
      defaultSummarizer: 'nested',
      coverageMap: mockCoverageMap,
    };

    istanbulReport.createContext.mockReturnValue(reportGenerationContext);

    makeCoverageReports(mockOutputDir, mockCoverageMap, mockFormats);

    expect(istanbulReport.createContext).toHaveBeenCalledWith({
      dir: reportGenerationContext.dir,
      defaultSummarizer: 'nested',
      coverageMap: mockCoverageMap,
    });

    mockFormats.forEach((format) => {
      expect(istanbulReports.create).toHaveBeenCalledWith(format, {
        projectRoot: mockOutputDir,
      });
      expect(istanbulReports.create().execute).toHaveBeenCalledWith(
        reportGenerationContext,
      );
    });

    expect(console.log).toHaveBeenCalledWith('Complete');
  });

  it('should log an error if report generation fails', () => {
    const errorMessage = 'Report generation failed';
    const reportGenerationContext = {
      dir: `${mockOutputDir}/coverage`,
      defaultSummarizer: 'nested',
      coverageMap: mockCoverageMap,
    };

    istanbulReport.createContext.mockReturnValue(reportGenerationContext);
    istanbulReports.create.mockImplementation(() => {
      throw new Error(errorMessage);
    });

    makeCoverageReports(mockOutputDir, mockCoverageMap, mockFormats);

    expect(console.log).toHaveBeenCalledWith(expect.any(Error));
    expect(console.log).toHaveBeenCalledWith(new Error(errorMessage));
  });
});
