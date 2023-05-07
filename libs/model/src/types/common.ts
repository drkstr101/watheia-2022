export type IDocumentModel = SiteModel | IPageModel;

export type ModelAlias = IDocumentModel['type'];

export type Metadata = { id?: string; modelName: ModelAlias };

/** Document types */
export type SiteModel = {
  __metadata?: Metadata;
  type: 'Config';
  [x: string]: any;
};

export type IPageModel =
  | PageModel
  | PostPageModel
  | PostFeedPageModel
  | PostFeedCategoryModel;

export type PageModel = {
  __metadata?: Metadata & { urlPath?: string };
  type: 'PageLayout';
  slug: string;
  isDraft?: boolean;
  [x: string]: any;
};

export type PostPageModel = {
  __metadata?: Metadata & { urlPath?: string };
  type: 'PostLayout';
  slug: string;
  isDraft?: boolean;
  isFeatured?: boolean;
  date?: Date;
  category?: string;
  [x: string]: any;
};

export type PostFeedPageModel = {
  __metadata?: Metadata & { urlPath?: string };
  type: 'PostFeedLayout';
  numOfPostsPerPage: number;
  [x: string]: any;
};

export type PostFeedCategoryModel = {
  __metadata?: Metadata & { urlPath?: string };
  type: 'PostFeedCategoryLayout';
  numOfPostsPerPage: number;
  [x: string]: any;
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
  __metadata?: Metadata;
  type: 'Card';
};

export type CardsSectionModel = {
  __metadata?: Metadata;
  type: 'CardsSection';
};

export type HeroSectionModel = {
  __metadata?: Metadata;
  type: 'HeroSection';
};

export type RecentPostsSectionModel = {
  __metadata?: Metadata;
  type: 'RecentPostsSection';
  recentCount?: number;
};

export type FeaturedPostsSectionModel = {
  __metadata?: Metadata;
  type: 'FeaturedPostsSection';
};

export type FeaturedPeopleSectionModel = {
  __metadata?: Metadata;
  type: 'FeaturedPeopleSection';
};

export type FooterModel = {
  __metadata?: Metadata;
  type: 'Footer';
};

export type HeaderModel = {
  __metadata?: Metadata;
  type: 'Header';
};

export type ImageModel = {
  __metadata?: Metadata;
  type: 'Image';
};

export type IActionModel = ButtonModel | LinkModel;

export type ButtonModel = {
  __metadata?: Metadata;
  type: 'Button';
};

export type LinkModel = {
  __metadata?: Metadata;
  type: 'Link';
};

export type IBlockModel = FormBlockModel;

export type FormBlockModel = {
  __metadata?: Metadata;
  type: 'FormBlock';
  destination?: string;
};
