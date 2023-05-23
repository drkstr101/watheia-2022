import { StackbitConfig } from '@stackbit/types';

export interface ContentModel {
  readonly config: StackbitConfig;
  readonly objects: any[];
  readonly pages: any[];
  readonly props: Record<string, any>;
}
