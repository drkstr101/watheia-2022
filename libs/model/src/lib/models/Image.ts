import { ObjectModel } from '@stackbit/types';

export const Image: ObjectModel = {
  name: 'Image',
  type: 'object',
  fields: [
    { name: 'src', type: 'string', required: true },
    { name: 'alt', type: 'string', required: true, default: '' },
    { name: 'width', type: 'number' },
    { name: 'height', type: 'number' },
    { name: 'fill', type: 'boolean' },
    { name: 'priority', type: 'boolean' },
    { name: 'quality', type: 'number', default: 75 },
  ],
};
