/* eslint-disable no-undef */
module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*index.ts','!src/**/*stories.tsx','!src/**/*main.tsx']

};


  