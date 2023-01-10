/** @type {import(@jest/types).Config.InitialOptions} */

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/entry.*.*',
    '!**/node_modules/**',
    '!**/root.*',
    '!**/routes/**',
    '!**/index.*',
  ],
  coverageDirectory: '<rootDir>/reports',

  coverageReporters: ['json', 'lcov', 'text'],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 50,
      statements: 50,
    },
  },

  moduleDirectories: ['node_modules', '<rootDir>/node_modules'],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jsdom',

  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  transform: {
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.[jt]sx?$': [
      'babel-jest',
      {
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
        plugins: ['@babel/plugin-transform-runtime'],
      },
    ],
  },
}
