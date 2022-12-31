module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/stacks/'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
