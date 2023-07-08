import { ObjectModel } from '@stackbit/types';

export const Heading: ObjectModel = {
  name: 'Heading',
  type: 'object',
  fields: [
    { name: 'content', type: 'markdown', required: true, default: '' },
    {
      name: 'variant',
      type: 'enum',
      options: [
        'title',
        'subtitle',
        'detail',
        'heading1',
        'heading2',
        'heading3',
        'heading4',
        'heading5',
      ],
      default: 'solid',
    },
  ],
};
