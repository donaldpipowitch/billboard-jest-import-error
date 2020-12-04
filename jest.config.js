module.exports = {
  testMatch: [
    '<rootDir>/tests/pages/**/*.(js|jsx|ts|tsx)',
  ],
  transform: {
    '\\.(ts|tsx|js|jsx)$': [
      require.resolve('babel-jest'),
      require('./tests/babel.config'),
    ],
  },
  moduleNameMapper: {
    '^!file-loader!': '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
  },
};
