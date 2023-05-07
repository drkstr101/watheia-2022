import {
  FeaturedPeopleSectionModel,
  FeaturedPostsSectionModel,
  FormBlockModel,
  PostFeedCategoryModel,
  PostFeedPageModel,
  PostPageModel,
  RecentPostsSectionModel,
} from '@watheia/waweb.model';
import {
  DebugContext,
  getAllCategoryPostsSorted,
  getAllNonFeaturedPostsSorted,
  getAllPostsSorted,
  getPagedItemsForPage,
  getRootPagePath,
  isPublished,
  mapDeepAsync,
  resolveReferences,
} from '@watheia/waweb.utils';
import { createHash } from 'crypto';
import { SignJWT } from 'jose/jwt/sign';
import { ContentData } from './api.types';

export function resolveStaticProps(urlPath: string, data: ContentData) {
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
      const objectType: keyof typeof StaticPropsResolvers =
        value?.__metadata?.modelName;
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
  PostLayout: (
    props: PostPageModel,
    data: ContentData,
    debugContext: DebugContext
  ) => {
    return resolveReferences(
      props,
      ['author', 'category'],
      data.objects,
      debugContext
    );
  },
  PostFeedLayout: (props: PostFeedPageModel, data: ContentData) => {
    const numOfPostsPerPage = props.numOfPostsPerPage ?? 10;
    let allPosts = getAllNonFeaturedPostsSorted(data.objects);
    if (!process.env['stackbitPreview']) {
      allPosts = allPosts.filter(isPublished);
    }
    const paginationData = getPagedItemsForPage(
      props,
      allPosts,
      numOfPostsPerPage
    );
    const items = resolveReferences(
      paginationData.items,
      ['author', 'category'],
      data.objects
    );
    return {
      ...props,
      ...paginationData,
      items,
    };
  },
  PostFeedCategoryLayout: (props: PostFeedCategoryModel, data: ContentData) => {
    const categoryId = props.__metadata?.id;
    const numOfPostsPerPage = props.numOfPostsPerPage ?? 10;
    let allCategoryPosts = getAllCategoryPostsSorted(
      data.objects,
      categoryId ?? ''
    );
    if (!process.env['stackbitPreview']) {
      allCategoryPosts = allCategoryPosts.filter(isPublished);
    }
    const paginationData = getPagedItemsForPage(
      props,
      allCategoryPosts,
      numOfPostsPerPage
    );
    const items = resolveReferences(
      paginationData.items,
      ['author', 'category'],
      data.objects
    );
    return {
      ...props,
      ...paginationData,
      items,
    };
  },
  RecentPostsSection: (props: RecentPostsSectionModel, data: ContentData) => {
    let allPosts = getAllPostsSorted(data.objects);
    if (!process.env['stackbitPreview']) {
      allPosts = allPosts.filter(isPublished);
    }
    allPosts = allPosts.slice(0, props.recentCount || 6);
    const recentPosts = resolveReferences(
      allPosts,
      ['author', 'category'],
      data.objects
    );
    return {
      ...props,
      posts: recentPosts,
    };
  },
  FeaturedPostsSection: (
    props: FeaturedPostsSectionModel,
    data: ContentData,
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
    props: FeaturedPeopleSectionModel,
    data: ContentData,
    debugContext: DebugContext
  ) => {
    return resolveReferences(props, ['people'], data.objects, debugContext);
  },
  FormBlock: async (props: FormBlockModel) => {
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
