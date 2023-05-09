import { IPageModel } from '@watheia/cabbage.model';

export function cssClassesFromUrlPath(urlPath: string): string[] {
  const parts = urlPath
    .replace(/^\/|\/$/g, '')
    .split('/')
    .filter(Boolean);

  let css = 'page';
  return parts.map((part) => {
    css += `-${part}`;
    return css;
  });
}

export function getPageUrl(page: IPageModel): string {
  if (!page || !page.slug) {
    throw new Error(`Failed to get slug value from ${page}`);
  }

  if (['PostLayout'].includes(page.__metadata?.modelName ?? '')) {
    return `/blog${page.slug.startsWith('/') ? page.slug : `/${page.slug}`}`;
  }

  return page.slug.startsWith('/') ? page.slug : `/${page.slug}`;
}

export default function setEnvironmentVariables() {
  return {
    ...(process?.env?.['URL'] && { URL: process.env['URL'] }),
  };
}
