import { ObjectModel } from '@stackbit/types';

export const DescriptionList: ObjectModel = {
  name: 'DescriptionList',
  type: 'object',
  fields: [
    { name: 'heading', type: 'string' },
    { name: 'body', type: 'markdown' },
    {
      name: 'items',
      type: 'list',
      items: {
        type: 'object',
        fields: [
          { name: 'label', type: 'string', default: 'Five-star reviews' },
          { name: 'value', type: 'string', default: '5M' },
        ],
      },
    },
    { name: 'theme', type: 'enum', options: ['light', 'dark', 'neutral'], default: 'light' },
  ],
};
