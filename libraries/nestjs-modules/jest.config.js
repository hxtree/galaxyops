/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**'],
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  coverageDirectory: '<rootDir>/coverage',
};
