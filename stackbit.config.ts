import { defineStackbitConfig } from '@stackbit/types';
import models from '@watheia/waweb.model';

export const config = defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  cmsName: 'git',
  nodeVersion: '18',
  models,
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
  // contentSources: [
  //   new GitContentSource({
  //     rootPath: __dirname,
  //     contentDirs: ['content'],
  //     models: Object.values(allModels),
  //   }),
  // ],
});
export default config;
