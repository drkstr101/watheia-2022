import {
  ContentModel,
  DebugContext,
  FeaturedPeopleSectionProps,
  FeaturedPostsSectionProps,
  FormBlockProps,
  PostFeedCategoryPageProps,
  PostFeedPageProps,
  PostPageProps,
  RecentPostsSectionProps,
  getAllCategoryPostsSorted,
  getAllNonFeaturedPostsSorted,
  getAllPostsSorted,
  getPagedItemsForPage,
  getRootPagePath,
  isPublished,
  mapDeepAsync,
  resolveReferences,
} from '@watheia/cabbage.model';
import { createHash } from 'crypto';
import { SignJWT } from 'jose';

export function resolveStaticProps(urlPath: string, data: ContentModel) {
  // console.log('resolveStaticProps(urlPath, data)', urlPath, data);

  // get root path of paged path: /blog/page/2 => /blog
  const rootUrlPath = getRootPagePath(urlPath);
  const { __metadata, ...rest } =
    data.pages.find((page) => page?.__metadata?.urlPath === rootUrlPath) ?? {};
  const props = {
    page: {
      __metadata: {
        ...__metadata,
        // override urlPath in metadata with paged path: /blog => /blog/page/2
        urlPath,
      },
      ...rest,
    },
    ...data.props,
  };
  return mapDeepAsync(
    props,
    async (value, keyPath, stack) => {
      const objectType: keyof typeof StaticPropsResolvers = value?.__metadata?.modelName;
      if (objectType && StaticPropsResolvers[objectType]) {
        const resolver = StaticPropsResolvers[objectType];
        return resolver(value, data, { keyPath, stack });
      }
      return value;
    },
    { postOrder: true }
  );
}

const StaticPropsResolvers = {
  PostLayout: (props: PostPageProps, data: ContentModel, debugContext: DebugContext) => {
    return resolveReferences(props, ['author', 'category'], data.objects, debugContext);
  },
  PostFeedLayout: (props: PostFeedPageProps, data: ContentModel) => {
    const numOfPostsPerPage = props.numOfPostsPerPage ?? 10;
    let allPosts = getAllNonFeaturedPostsSorted(data.objects);
    if (!process.env['stackbitPreview']) {
      allPosts = allPosts.filter(isPublished);
    }
    const paginationData = getPagedItemsForPage(props, allPosts, numOfPostsPerPage);
    const items = resolveReferences(paginationData.items, ['author', 'category'], data.objects);
    return {
      ...props,
      ...paginationData,
      items,
    };
  },
  PostFeedCategoryLayout: (props: PostFeedCategoryPageProps, data: ContentModel) => {
    const categoryId = props.__metadata?.id;
    const numOfPostsPerPage = props.numOfPostsPerPage ?? 10;
    let allCategoryPosts = getAllCategoryPostsSorted(data.objects, categoryId ?? '');
    if (!process.env['stackbitPreview']) {
      allCategoryPosts = allCategoryPosts.filter(isPublished);
    }
    const paginationData = getPagedItemsForPage(props, allCategoryPosts, numOfPostsPerPage);
    const items = resolveReferences(paginationData.items, ['author', 'category'], data.objects);
    return {
      ...props,
      ...paginationData,
      items,
    };
  },
  RecentPostsSection: (props: RecentPostsSectionProps, data: ContentModel) => {
    let allPosts = getAllPostsSorted(data.objects);
    if (!process.env['stackbitPreview']) {
      allPosts = allPosts.filter(isPublished);
    }
    allPosts = allPosts.slice(0, props.recentCount || 6);
    const recentPosts = resolveReferences(allPosts, ['author', 'category'], data.objects);
    return {
      ...props,
      posts: recentPosts,
    };
  },
  FeaturedPostsSection: (
    props: FeaturedPostsSectionProps,
    data: ContentModel,
    debugContext: DebugContext
  ) => {
    return resolveReferences(
      props,
      ['posts.author', 'posts.category'],
      data.objects,
      debugContext
    );
  },
  FeaturedPeopleSection: (
    props: FeaturedPeopleSectionProps,
    data: ContentModel,
    debugContext: DebugContext
  ) => {
    return resolveReferences(props, ['people'], data.objects, debugContext);
  },
  FormBlock: async (props: FormBlockProps) => {
    if (!props.destination) {
      return props;
    }
    if (!process.env['STACKBIT_CONTACT_FORM_SECRET']) {
      console.error(
        `No STACKBIT_CONTACT_FORM_SECRET provided. It will not work properly for production build.`
      );
      return props;
    }
    const secretKey = createHash('sha256')
      .update(process.env['STACKBIT_CONTACT_FORM_SECRET'])
      .digest();
    const destination = await new SignJWT({ email: props.destination })
      .setProtectedHeader({ alg: 'HS256' })
      .sign(secretKey);
    return {
      ...props,
      destination,
    };
  },
};
