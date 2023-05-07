import { StackbitConfig } from '@stackbit/types';
import { IDocumentModel, IPageModel } from './common';

export type ContentOptions = StackbitConfig;

export interface ContentModel {
  config: ContentOptions;
  objects: IDocumentModel[];
  pages: IPageModel[];
  props: Record<string, any>;
}
