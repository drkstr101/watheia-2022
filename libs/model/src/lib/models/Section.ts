import { ObjectModel } from '@stackbit/types';

export const Section: ObjectModel = {
  name: 'Section',
  type: 'object',
  fields: [
    { name: 'title', type: 'string', required: true },
    {
      name: 'children',
      type: 'list',
      items: {
        type: 'model',
        models: [
          'Button',
          'Container',
          'DescriptionList',
          'Heading',
          'Image',
          'Label',
          'Link',
          'Text',
        ],
      },
    },
    {
      name: 'variant',
      type: 'enum',
      options: ['wide', 'narrow', 'fixed'],
      default: 'fixed',
    },
  ],
};
