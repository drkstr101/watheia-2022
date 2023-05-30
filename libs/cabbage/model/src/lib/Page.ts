import { PageModel } from '@stackbit/types';
import { Hero } from './Hero';
import { Stats } from './Stats';

export const Page: PageModel = {
  name: 'Page',
  type: 'page',
  hideContent: true,
  urlPath: '/{slug}',
  fields: [
    { name: 'title', type: 'string', required: true },
    {
      name: 'sections',
      type: 'list',
      items: { type: 'model', models: [Hero.name, Stats.name] },
    },
  ],
};
