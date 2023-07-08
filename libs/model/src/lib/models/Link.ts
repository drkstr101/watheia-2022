import { ObjectModel } from '@stackbit/types';

export const Link: ObjectModel = {
  name: 'Link',
  type: 'object',
  fields: [
    { name: 'label', type: 'string', default: 'Get Started' },
    { name: 'href', type: 'string', default: '/' },
    {
      name: 'variant',
      type: 'enum',
      options: ['primary', 'neutral', 'button'],
      default: 'primary',
    },
  ],
};
