import { ObjectModel } from '@stackbit/types';

export const Text: ObjectModel = {
  name: 'Text',
  type: 'object',
  fields: [
    { name: 'content', type: 'markdown', required: true, default: '' },
    {
      name: 'variant',
      type: 'enum',
      options: ['lead', 'description', 'primary', 'neutral', 'label', 'code'],
      default: 'primary',
    },
  ],
};
