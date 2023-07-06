import { ObjectModel } from '@stackbit/types';

export const Container: ObjectModel = {
  name: 'Container',
  type: 'object',
  fields: [
    {
      name: 'children',
      type: 'list',
      items: {
        type: 'model',
        models: ['Button', 'DescriptionList', 'Heading', 'Image', 'Label', 'Link', 'Text'],
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
