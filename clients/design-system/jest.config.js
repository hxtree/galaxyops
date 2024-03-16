module.exports = {
  // Indicates that Jest should look for test files in these directories
  roots: ['<rootDir>/src'],


  preset: 'ts-jest',
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // A map from regular expressions to module names that allow to define custom transformers
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },


  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },

  // An array of file extensions Jest should look for
  moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts', 'tsx'],

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
};
