import { defineStackbitConfig } from '@stackbit/types';
import model from './libs/cabbage/model/src';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  cmsName: 'git',
  nodeVersion: '18',
  buildCommand: 'nx build home',
  devCommand: 'nx serve home',
  models: model,
  pagesDir: 'content/pages',
  dataDir: 'content/data',
  presetSource: {
    type: 'files',
    presetDirs: ['content/presets'],
  },
  assets: {
    referenceType: 'static',
    staticDir: 'content/assets',
    uploadDir: 'images',
    publicPath: '/',
  },
  pageLayoutKey: 'type',
  styleObjectModelName: 'ThemeStyle',
});
