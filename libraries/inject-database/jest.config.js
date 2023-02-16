/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageReporters: [
    'clover',
    'json',
    'lcov',
    'html',
    ['text', { skipFull: true }],
  ],
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  coverageDirectory: '<rootDir>/coverage',

  moduleNameMapper: {
    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    uuid: require.resolve('uuid'),
  },
};
