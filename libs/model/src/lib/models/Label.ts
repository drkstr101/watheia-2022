import { ObjectModel } from '@stackbit/types';

export const Label: ObjectModel = {
  name: 'Label',
  type: 'object',
  fields: [
    { name: 'content', type: 'markdown', required: true, default: '' },
    {
      name: 'variant',
      type: 'enum',
      options: ['neutral', 'accent'],
      default: 'neutral',
    },
  ],
};
