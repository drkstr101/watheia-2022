import { PageModel } from '@watheia/cabbage.model';

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

export function getPageUrl(page: PageModel): string | null {
  if (!page || !page.slug) {
    return null;
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
