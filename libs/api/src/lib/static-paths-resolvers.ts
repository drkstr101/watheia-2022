import { IDocumentModel, IPageModel, ModelAlias } from '@watheia/waweb.model';
import {
  generatePagedPathsForPage,
  getAllCategoryPostsSorted,
  getAllNonFeaturedPostsSorted,
  isPublished,
} from '@watheia/waweb.utils';
import { ContentData } from './api.types';

export function resolveStaticPaths({ pages, objects }: ContentData) {
  return pages.reduce((paths, page) => {
    if (!process.env['stackbitPreview'] && page.isDraft) {
      return paths;
    }
    const objectType = page.__metadata?.modelName as ModelAlias;
    const pageUrlPath = page.__metadata?.urlPath ?? '';

    if (objectType && StaticPathsResolvers[objectType]) {
      const resolver = StaticPathsResolvers[objectType];
      return paths.concat(resolver(page, objects));
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return paths.concat(pageUrlPath);
  }, [] as string[]);
}

const StaticPathsResolvers: Record<string, any> = {
  PostFeedLayout: (page: IPageModel, objects: IDocumentModel[]) => {
    let posts = getAllNonFeaturedPostsSorted(objects as IPageModel[]);
    if (!process.env['stackbitPreview']) {
      posts = posts.filter(isPublished);
    }
    const numOfPostsPerPage = page.numOfPostsPerPage ?? 10;
    return generatePagedPathsForPage(page, posts, numOfPostsPerPage);
  },
  PostFeedCategoryLayout: (page: IPageModel, objects: IDocumentModel[]) => {
    const categoryId = page.__metadata?.id;
    const numOfPostsPerPage = page.numOfPostsPerPage ?? 10;
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
