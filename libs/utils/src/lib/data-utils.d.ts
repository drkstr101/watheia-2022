import { IDocumentModel, IPageModel } from '@watheia/waweb.model';
export declare function getAllPostsSorted(objects: IDocumentModel[]): IDocumentModel[];
export declare function getAllCategoryPostsSorted(objects: IDocumentModel[], categoryId: string): IDocumentModel[];
export declare function getAllPosts(objects: IDocumentModel[]): IDocumentModel[];
export declare function getAllFeaturedPostsSorted(objects: IDocumentModel[]): IDocumentModel[];
export declare function getAllNonFeaturedPostsSorted(objects: IDocumentModel[]): IDocumentModel[];
export declare function sortPosts(posts: IDocumentModel[]): IDocumentModel[];
export declare function isPublished(page: IDocumentModel): boolean;
export type DebugContext = {
    keyPath: any[];
    stack: any[];
};
export declare function resolveReferences(object: any, fieldPaths: string[], objects: IDocumentModel[], debugContext?: DebugContext): any;
export declare function resolveReferenceField(object: any, fieldName: string, objects: IDocumentModel[], debugContext?: DebugContext): any;
export declare function resolveReferenceArray(object: any, fieldName: string, objects: IDocumentModel[], debugContext: DebugContext): any;
export declare function mapObjectsById(objectIds: string[], objects: IDocumentModel[], debugContext: DebugContext): (IDocumentModel | null)[];
export declare function findObjectById(objectId: string, objects: IDocumentModel[], debugContext: DebugContext): IDocumentModel | null;
export declare function getRootPagePath(pagePath: string): string;
export declare function generatePagedPathsForPage(page: IPageModel, items: unknown[], numOfItemsPerPage: number): (string | undefined)[];
export declare function getPagedItemsForPage(page: IPageModel, items: IDocumentModel[], numOfItemsPerPage: number): {
    pageIndex: number;
    baseUrlPath: string;
    numOfPages: number;
    numOfTotalItems: number;
    items: IDocumentModel[];
};
export declare function mapDeepAsync(value: any, iteratee: (arg0: any, arg1: any, arg2: any) => any, options?: {
    postOrder?: boolean;
}): Promise<any>;
