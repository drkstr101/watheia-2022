import { PageModel } from '@watheia/waweb.model';

export default function getPageUrl(page: PageModel) {
  if (!page || !page.slug) {
    return null;
  }

  if (['PostLayout'].includes(page.__metadata?.modelName ?? '')) {
    return `/blog${page.slug.startsWith('/') ? page.slug : `/${page.slug}`}`;
  }

  return page.slug.startsWith('/') ? page.slug : `/${page.slug}`;
}
