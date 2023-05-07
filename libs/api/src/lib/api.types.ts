import { IDocumentModel, IPageModel } from '@watheia/waweb.model';


export interface ContentData {
  pages: IPageModel[];
  objects: IDocumentModel[];
  props: Record<string, any>;
}
