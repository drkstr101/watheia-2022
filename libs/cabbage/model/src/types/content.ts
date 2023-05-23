export type IDocumentModel = ConfigProps | IPageModel;

export type IModel =
  | ButtonProps
  | CardProps
  | CardsSectionProps
  | FeaturedPeopleSectionProps
  | FeaturedPostsSectionProps
  | FooterProps
  | FormBlockProps
  | HeaderProps
  | HeroSectionProps
  | ImageProps
  | PageProps
  | PostFeedCategoryPageProps
  | PostFeedPageProps
  | PostPageProps
  | RecentPostsSectionProps
  | ConfigProps;

// export type ModelAlias = IModel['type'];

// export type Metadata = { id?: string; modelName: IModel['type'] };

/** Document types */
export type ConfigProps = {
  __metadata: { id?: string; modelName: 'Config' };
  type: 'Config';
  // [x: string]: any;
};

// Pages
// ----------------

export type IPageModel =
  | PageProps
  | PostPageProps
  | PostFeedPageProps
  | PostFeedCategoryPageProps;

export type PageProps = {
  __metadata: {
    id?: string;
    modelName: 'PageLayout';
    urlPath?: string;
  };
  type: 'PageLayout';
  slug: string;
  isDraft?: boolean;
};

export type PostPageProps = {
  __metadata: { id?: string; modelName: 'PostLayout'; urlPath?: string };
  type: 'PostLayout';
  slug: string;
  isDraft?: boolean;
  isFeatured?: boolean;
  date?: string;
  category?: string;
};

export type PostFeedPageProps = {
  __metadata: { id?: string; modelName: 'PostFeedLayout'; urlPath?: string };
  type: 'PostFeedLayout';
  slug: string;
  isDraft?: boolean;
  numOfPostsPerPage: number;
};

export type PostFeedCategoryPageProps = {
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
  | CardsSectionProps
  | HeroSectionProps
  | RecentPostsSectionProps
  | FeaturedPostsSectionProps
  | FeaturedPeopleSectionProps;

export type CardProps = {
  __metadata: { id?: string; modelName: 'Card' };
  type: 'Card';
};

export type CardsSectionProps = {
  __metadata: { id?: string; modelName: 'CardSection' };
  type: 'CardsSection';
};

export type HeroSectionProps = {
  __metadata: { id?: string; modelName: 'HeroSection' };
  type: 'HeroSection';
};

export type RecentPostsSectionProps = {
  __metadata: { id?: string; modelName: 'RecentPostsSection' };
  type: 'RecentPostsSection';
  recentCount?: number;
};

export type FeaturedPostsSectionProps = {
  __metadata: { id?: string; modelName: 'FeaturedPostsSection' };
  type: 'FeaturedPostsSection';
};

export type FeaturedPeopleSectionProps = {
  __metadata: { id?: string; modelName: 'FeaturedPeopleSection' };
  type: 'FeaturedPeopleSection';
};

export type FooterProps = {
  __metadata: { id?: string; modelName: 'Footer' };
  type: 'Footer';
};

export type HeaderProps = {
  __metadata: { id?: string; modelName: 'Header' };
  type: 'Header';
};

export type ImageProps = {
  __metadata: { id?: string; modelName: 'Image' };
  type: 'Image';
};

export type IActionModel = ButtonProps | LinkProps;

export type ButtonProps = {
  __metadata: { id?: string; modelName: 'Button' };
  type: 'Button';
};

export type LinkProps = {
  __metadata: { id?: string; modelName: 'Link' };
  type: 'Link';
};

export type IBlockModel = FormBlockProps;

export type FormBlockProps = {
  __metadata: { id?: string; modelName: 'FormBlock' };
  type: 'FormBlock';
  destination?: string;
};

export type PersonProps = {
  __metadata: { id?: string; modelName: 'Person' };
  type: 'Person';
  name: string;
  role: string;
  bio: string;
  image: string;
};
