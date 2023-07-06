import { ObjectModel } from '@stackbit/types';

export const Button: ObjectModel = {
    name: 'Button',
    type: 'object',
    fields: [
        { name: 'label', type: 'string', default: 'Get Started' },
        { name: 'url', type: 'string', default: '/' },
        { name: 'variant', type: 'enum', options: ['solid', 'outline', 'clear'], default: 'solid' }
    ]
};
