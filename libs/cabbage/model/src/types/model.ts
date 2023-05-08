export type IDocumentModel = SiteModel | IPageModel;

export type IModel =
  | ButtonModel
  | CardModel
  | CardsSectionModel
  | FeaturedPeopleSectionModel
  | FeaturedPostsSectionModel
  | FooterModel
  | FormBlockModel
  | HeaderModel
  | HeroSectionModel
  | ImageModel
  | PageModel
  | PostFeedCategoryPageModel
  | PostFeedPageModel
  | PostPageModel
  | RecentPostsSectionModel
  | SiteModel;

// export type ModelAlias = IModel['type'];

// export type Metadata = { id?: string; modelName: IModel['type'] };

/** Document types */
export type SiteModel = {
  __metadata: { id?: string; modelName: 'Config' };
  type: 'Config';
  [x: string]: any;
};

// Pages
// ----------------

export type IPageModel =
  | PageModel
  | PostPageModel
  | PostFeedPageModel
  | PostFeedCategoryPageModel;

export type PageModel = {
  __metadata: {
    id?: string;
    modelName: 'PageLayout';
    urlPath?: string;
  };
  type: 'PageLayout';
  slug: string;
  isDraft?: boolean;
};

export type PostPageModel = {
  __metadata: { id?: string; modelName: 'PostLayout'; urlPath?: string };
  type: 'PostLayout';
  slug: string;
  isDraft?: boolean;
  isFeatured?: boolean;
  date?: string;
  category?: string;
};

export type PostFeedPageModel = {
  __metadata: { id?: string; modelName: 'PostFeedLayout'; urlPath?: string };
  type: 'PostFeedLayout';
  slug: string;
  isDraft?: boolean;
  numOfPostsPerPage: number;
};

export type PostFeedCategoryPageModel = {
  __metadata: {
    id?: string;
    modelName: 'PostFeedCategoryLayout';
    urlPath?: string;
  };
  type: 'PostFeedCategoryLayout';
  slug: string;
  isDraft?: boolean;
  numOfPostsPerPage: number;
};

// Sections
// ----------------

export type ISectionModel =
  | CardsSectionModel
  | HeroSectionModel
  | RecentPostsSectionModel
  | FeaturedPostsSectionModel
  | FeaturedPeopleSectionModel;

export type CardModel = {
  __metadata: { id?: string; modelName: 'Card' };
  type: 'Card';
};

export type CardsSectionModel = {
  __metadata: { id?: string; modelName: 'CardSection' };
  type: 'CardsSection';
};

export type HeroSectionModel = {
  __metadata: { id?: string; modelName: 'HeroSection' };
  type: 'HeroSection';
};

export type RecentPostsSectionModel = {
  __metadata: { id?: string; modelName: 'RecentPostsSection' };
  type: 'RecentPostsSection';
  recentCount?: number;
};

export type FeaturedPostsSectionModel = {
  __metadata: { id?: string; modelName: 'FeaturedPostsSection' };
  type: 'FeaturedPostsSection';
};

export type FeaturedPeopleSectionModel = {
  __metadata: { id?: string; modelName: 'FeaturedPeopleSection' };
  type: 'FeaturedPeopleSection';
};

export type FooterModel = {
  __metadata: { id?: string; modelName: 'Footer' };
  type: 'Footer';
};

export type HeaderModel = {
  __metadata: { id?: string; modelName: 'Header' };
  type: 'Header';
};

export type ImageModel = {
  __metadata: { id?: string; modelName: 'Image' };
  type: 'Image';
};

export type IActionModel = ButtonModel | LinkModel;

export type ButtonModel = {
  __metadata: { id?: string; modelName: 'Button' };
  type: 'Button';
};

export type LinkModel = {
  __metadata: { id?: string; modelName: 'Link' };
  type: 'Link';
};

export type IBlockModel = FormBlockModel;

export type FormBlockModel = {
  __metadata: { id?: string; modelName: 'FormBlock' };
  type: 'FormBlock';
  destination?: string;
};
