import { Model } from '@stackbit/types';

export const PageLayout: Model = {
  type: 'page',
  name: 'PageLayout',
  label: 'Page',
  labelField: 'title',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      required: true,
      default: 'This is a new page',
      hidden: false,
      localized: false,
    },
    {
      type: 'slug',
      name: 'slug',
      label: 'Slug',
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and post page would be "posts/new-post/"',
      required: true,
      hidden: false,
      localized: false,
    },
    {
      type: 'list',
      name: 'sections',
      label: 'Sections',
      required: false,
      hidden: false,
      localized: false,
      items: {
        type: 'model',
        models: [
          'CarouselSection',
          'DividerSection',
          'FeaturedItemsSection',
          'FeaturedPeopleSection',
          'FeaturedPostsSection',
          'GenericSection',
          'ImageGallerySection',
          'PricingSection',
          'RecentPostsSection',
        ],
      },
    },
    {
      type: 'boolean',
      name: 'isDraft',
      label: 'Draft',
      required: false,
      default: false,
      hidden: false,
      localized: false,
      group: 'settings',
    },
    {
      type: 'model',
      name: 'seo',
      label: 'SEO',
      required: false,
      hidden: false,
      localized: false,
      models: ['Seo'],
      group: 'seo',
    },
  ],
  urlPath: '/{slug}',
  thumbnail:
    'https://assets.stackbit.com/components/models/thumbnails/default.png',
  fieldGroups: [
    {
      name: 'settings',
      label: 'Settings',
      icon: 'gear',
    },
    {
      name: 'seo',
      label: 'SEO',
      icon: 'page',
    },
  ],
};
