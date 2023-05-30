import { ObjectModel } from '@stackbit/types';

export const Button: ObjectModel = {
  name: 'Button',
  type: 'object',
  fields: [
    { name: 'label', type: 'string' },
    { name: 'href', type: 'string' },
    { name: 'variant', type: 'enum', options: ['solid', 'outline'] },
  ],
};
