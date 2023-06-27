const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  transform: tsjPreset.transform,
  rootDir: './src',
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**'],
  testMatch: ['<rootDir>/**/*.test.ts'],
  coverageDirectory: '<rootDir>/coverage',
};
