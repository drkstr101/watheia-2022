import { defineStackbitConfig } from '@stackbit/types';
import { models } from './dist/libs/waweb/model';
import { resolve } from 'path';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '18',
  buildCommand: 'nx run home:build:production',
  devCommand: 'nx run home:serve:developmenzt --port {PORT}',
  models: models.reduce((models, model, name) => ({ ...models, [name]: model }), {}),
  pagesDir: resolve(__dirname, 'content/pages'),
  dataDir: resolve(__dirname, 'content/data'),
  presetSource: {
    type: 'files',
    presetDirs: ['content/presets'],
  },
  assets: {
    referenceType: 'static',
    staticDir: 'apps/home/public',
    uploadDir: 'images',
    publicPath: '/',
  },
  pageLayoutKey: 'type',
  // contentSources: [
  //   new GitContentSource({
  //     rootPath: __dirname,
  //     contentDirs: [resolve('content')],
  //     models,
  //   }),
  // ],
});
