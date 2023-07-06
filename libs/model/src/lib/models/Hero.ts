import { ObjectModel } from '@stackbit/types';

export const Hero: ObjectModel = {
  name: 'Hero',
  type: 'object',
  fields: [
    { name: 'heading', type: 'string' },
    { name: 'body', type: 'markdown' },
    {
      name: 'image',
      type: 'object',
      fields: [
        { name: 'src', type: 'image', default: '/images/fpo-shapes.png' },
        { name: 'alt', type: 'string' },
      ],
    },
    { name: 'button', type: 'model', models: ['Button'] },
    { name: 'variant', type: 'enum', options: ['imgLeft', 'imgRight'] },
  ],
};
