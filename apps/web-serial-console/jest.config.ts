import type { Config } from 'jest';

const esmPackages = ['@angular/apps/web-serial-console', '@testing-library/angular'];

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^@constants/(.*)$': '<rootDir>/src/app/constants/$1',
    '^@containers/(.*)$': '<rootDir>/src/app/containers/$1',
    '^@guards/(.*)$': '<rootDir>/src/app/guards/$1',
    '^@pages/(.*)$': '<rootDir>/src/app/pages/$1',
    '^@services/(.*)$': '<rootDir>/src/app/services/$1',
  },
};

export default config;
