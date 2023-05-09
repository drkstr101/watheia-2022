import { defineStackbitConfig } from '@stackbit/types';
import { resolve } from 'path';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  dataDir: resolve(__dirname, 'data'),
  pagesDir: resolve(__dirname, 'pages'),
});
