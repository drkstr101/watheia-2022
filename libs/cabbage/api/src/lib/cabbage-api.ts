import { ContentModel, ContentOptions } from '@watheia/cabbage.model';

export function resolveContent(config: ContentOptions): ContentModel {
  return { config, objects: [], pages: [], props: {} };
}
