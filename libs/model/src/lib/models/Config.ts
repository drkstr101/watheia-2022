import { DataModel } from '@stackbit/types';

export const Config: DataModel = {
  name: 'Config',
  type: 'data',
  filePath: 'content/data/config.json',
  singleInstance: true,
  fields: [
    { name: 'brandName', type: 'string', default: 'Acme' },
    { name: 'legalName', type: 'string', default: 'Acme, Inc.' },
  ],
};
