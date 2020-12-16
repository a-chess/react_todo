module.exports = {
  roots: ['<rootDir>/frontend/javascript'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@js/(.*)$': '<rootDir>/frontend/javascript/$1',
  },
  globals: {
    __DEV__: true,
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
}
