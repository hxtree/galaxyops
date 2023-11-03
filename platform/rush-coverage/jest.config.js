/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/*.{ts,tsx}',
    'stacks/*.{ts}',
    '!**/node_modules/**',
    '!src/index.ts',
  ],
  coverageReporters: [
    'clover',
    'json',
    'lcov',
    'html',
    ['text', { skipFull: true }],
  ],
  testMatch: ['<rootDir>/src/**/*.test.ts', '<rootDir>/stacks/**/*.test.ts'],
  coverageDirectory: '<rootDir>/coverage',
};
