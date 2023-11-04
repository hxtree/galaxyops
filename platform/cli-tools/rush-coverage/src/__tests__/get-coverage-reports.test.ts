import { getCoverageReports } from '../get-coverage-reports';

describe('getCoverageReports', () => {
  it('it should return a list', () => {
    const reports = getCoverageReports();

    expect(typeof reports).toBe('object');
  });
});
