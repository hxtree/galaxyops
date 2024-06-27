#!/usr/bin/env node
import { getCoverageReports } from './get-coverage-reports';
import { mergeCoverageReports } from './merge-coverage-reports';
import { makeCoverageReports } from './make-coverage-reports';
import path from 'path';

const directoryToSearch = path.join(__dirname, '../../../');
const fileNameToFind = 'coverage-final.json';

const coverageReports = getCoverageReports(directoryToSearch, fileNameToFind);

const coverageMap = mergeCoverageReports(coverageReports);

makeCoverageReports(coverageMap, ['json', 'text', 'lcov', 'html']);
