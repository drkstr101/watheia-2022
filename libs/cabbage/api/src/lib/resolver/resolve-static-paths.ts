import {
  ContentModel,
  IModel,
  IPageModel,
  PostFeedCategoryPageProps,
  PostFeedPageProps,
  generatePagedPathsForPage,
  getAllCategoryPostsSorted,
  getAllNonFeaturedPostsSorted,
  isPublished,
} from '@watheia/cabbage.model';

export function resolveStaticPaths({ pages, objects }: ContentModel): string[] {
  const paths = pages.reduce((paths, page) => {
    if (!process.env['stackbitPreview'] && page.isDraft) {
      return paths;
    }
    const objectType = page.__metadata.modelName;
    const pageUrlPath = page.__metadata.urlPath ?? '';

    if (objectType && StaticPathsResolvers[objectType]) {
      const resolver = StaticPathsResolvers[objectType];
      return paths.concat(resolver(page, objects));
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return paths.concat(pageUrlPath);
  }, []) as string[];

  paths.sort();

  return paths;
}

const StaticPathsResolvers: Record<string, any> = {
  PostFeedLayout: (page: IPageModel, objects: IModel[]) => {
    let posts = getAllNonFeaturedPostsSorted(objects as IPageModel[]);
    if (!process.env['stackbitPreview']) {
      posts = posts.filter(isPublished);
    }
    const numOfPostsPerPage =
      (page as PostFeedPageProps).numOfPostsPerPage ?? 10;
    return generatePagedPathsForPage(page, posts, numOfPostsPerPage);
  },
  PostFeedCategoryLayout: (page: IPageModel, objects: IModel[]) => {
    const categoryId = page.__metadata.id;
    const numOfPostsPerPage =
      (page as PostFeedCategoryPageProps).numOfPostsPerPage ?? 10;
    let categoryPosts = getAllCategoryPostsSorted(
      objects as IPageModel[],
      categoryId ?? ''
    );
    if (!process.env['stackbitPreview']) {
      categoryPosts = categoryPosts.filter(isPublished);
    }
    return generatePagedPathsForPage(page, categoryPosts, numOfPostsPerPage);
  },
};
