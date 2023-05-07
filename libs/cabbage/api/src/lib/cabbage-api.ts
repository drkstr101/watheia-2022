export interface ContentOptions {
  pagesDir: string;
}

export interface ContentModel {
  readonly config: ContentOptions;
  readonly objects: any[];
  readonly pages: any[];
  readonly props: Record<string, any>;
}

export function allContent(
  config: ContentOptions = { pagesDir: 'content/pages' }
): ContentModel {
  return { config, objects: [], pages: [], props: {} };
}
