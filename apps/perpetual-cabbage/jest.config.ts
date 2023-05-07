import type { Config } from 'jest';
import { resolve } from 'path';

/* eslint-disable */
const config: Config = {
  displayName: 'perpetual-cabbage',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/perpetual-cabbage',
  setupFilesAfterEnv: [resolve('tools/jest-jsdom-env.ts')],
};

export default config;
