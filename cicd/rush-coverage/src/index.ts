import { getCoverageReports } from './get-coverage-reports';
import { mergeCoverageReports } from './merge-coverage-reports';
import { makeCoverageReports } from './make-coverage-reports';

const coverageReports = getCoverageReports();

const coverageMap = mergeCoverageReports(coverageReports);

makeCoverageReports(coverageMap, ['json', 'text', 'lcov', 'html']);
