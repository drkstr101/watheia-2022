import { StackbitConfig } from '@stackbit/types';

export type ContentOptions = StackbitConfig;

export interface ContentModel {
  readonly config: ContentOptions;
  readonly objects: any[];
  readonly pages: any[];
  readonly props: Record<string, any>;
}
