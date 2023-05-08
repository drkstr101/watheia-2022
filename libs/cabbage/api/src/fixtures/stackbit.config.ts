import { GitContentSource } from '@stackbit/cms-git';
import { defineStackbitConfig } from '@stackbit/types';
import model from '@watheia/cabbage.model';
import { resolve } from 'path';
import { cwd } from 'process';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  dataDir: resolve(__dirname, 'minimal/pages'),
  pagesDir: resolve(__dirname, 'minimal/pages'),
  contentSources: [
    new GitContentSource({
      rootPath: cwd(),
      contentDirs: ['content'],
      models: Object.values(model),
    }),
  ],
});
