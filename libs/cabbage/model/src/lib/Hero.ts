import { ObjectModel } from '@stackbit/types';
import { Button } from './Button';

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
        { name: 'src', type: 'image' },
        { name: 'alt', type: 'string' },
      ],
    },
    { name: 'actions', type: 'list', items: { type: 'model', models: [Button.name] } },
    { name: 'variant', type: 'enum', options: ['imgLeft', 'imgRight'] },
  ],
};
