import models, {
  ContentModel,
  ContentOptions,
  IModel,
  IPageModel,
} from '@watheia/cabbage.model';
import {
  getPageUrl,
  readContentFile,
  syncContentFiles,
} from '@watheia/cabbage.utils';
import { resolve } from 'path';

const allReferenceFields: Record<string, any> = {};
Object.entries(models).forEach(([modelName, model]) => {
  const fields = model.fields ?? [];
  fields.forEach((field) => {
    if (
      field.type === 'reference' ||
      (field.type === 'list' && field.items?.type === 'reference')
    ) {
      allReferenceFields[modelName + ':' + field.name] = true;
    }
  });
});

function isRefField(modelName: string, fieldName: string) {
  return !!allReferenceFields[modelName + ':' + fieldName];
}

function resolveReferences(
  content: IModel,
  fileToContent: Record<string, any>
) {
  if (!content || !content.type) return;

  const modelName = content.type;
  type Field = keyof typeof content;
  // Make Sourcebit-compatible
  if (!content.__metadata)
    content.__metadata = {
      modelName: content.type as IModel['__metadata']['modelName'],
    };

  for (const fieldName in content) {
    let fieldValue: any = content[fieldName as Field];
    if (!fieldValue) continue;

    const isRef = isRefField(modelName, fieldName);
    if (Array.isArray(fieldValue)) {
      if (fieldValue.length === 0) continue;
      if (isRef && typeof fieldValue[0] === 'string') {
        fieldValue = fieldValue.map((filename) => fileToContent[filename]);
        content[fieldName as Field] = fieldValue;
      }
      if (typeof fieldValue[0] === 'object') {
        fieldValue.forEach((o: IModel) => resolveReferences(o, fileToContent));
      }
    } else {
      if (isRef && typeof fieldValue === 'string') {
        fieldValue = fileToContent[fieldValue];
        content[fieldName as Field] = fieldValue;
      }
      if (typeof fieldValue === 'object') {
        resolveReferences(fieldValue, fileToContent);
      }
    }
  }
}

export async function resolveContent(
  config: ContentOptions
): Promise<ContentModel> {
  const pagesDir = resolve(config.pagesDir ?? 'content/pages');
  const dataDir = resolve(config.dataDir ?? 'content/data');

  const data = (await Promise.all(
    syncContentFiles(dataDir).map((f) => readContentFile(f, dataDir))
  )) as IModel[];

  const pages = (await Promise.all(
    syncContentFiles(pagesDir).map((f) => readContentFile(f, pagesDir))
  )) as IPageModel[];

  const objects = [...pages, ...data];

  const fileToContent = Object.fromEntries(
    objects.map((o) => [o.__metadata.id, o])
  );

  objects.forEach((o) => resolveReferences(o, fileToContent));

  pages.forEach((page) => {
    page.__metadata.urlPath = getPageUrl(page);
  });

  const siteConfig = data.find(
    (e) => e.__metadata.modelName === models.Config.name
  );
  return { config, objects, pages, props: { site: siteConfig } };
}
