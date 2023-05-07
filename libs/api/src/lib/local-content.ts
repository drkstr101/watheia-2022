import models, {
  ContentModel,
  ContentOptions,
  IDocumentModel,
} from '@watheia/waweb.model';
import { getPageUrl } from '@watheia/waweb.utils';
import { readFileSync } from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import { extname, resolve } from 'path';

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

const supportedFileTypes = ['md', 'json'];
function contentFilesInPath(dir: string) {
  const globPattern = `${dir}/**/*.{${supportedFileTypes.join(',')}}`;
  return sync(globPattern);
}

function readContent(file: string) {
  const rawContent = readFileSync(file, 'utf8');
  let content = null;
  switch (extname(file).substring(1)) {
    case 'md':
      // eslint-disable-next-line no-case-declarations
      const { data, content: body } = matter(rawContent);
      content = {
        ...data,
        content: body,
      };
      break;
    case 'json':
      content = JSON.parse(rawContent);
      break;
    default:
      throw Error(`Unhandled file type: ${file}`);
  }

  // Make Sourcebit-compatible
  content.__metadata = {
    id: file,
    modelName: content.type,
  };

  return content;
}

function resolveReferences(
  content: IDocumentModel,
  fileToContent: Record<string, any>
) {
  if (!content || !content.type) return;

  const modelName = content.type;
  // Make Sourcebit-compatible
  if (!content.__metadata) content.__metadata = { modelName: content.type };

  for (const fieldName in content) {
    let fieldValue = content[fieldName];
    if (!fieldValue) continue;

    const isRef = isRefField(modelName, fieldName);
    if (Array.isArray(fieldValue)) {
      if (fieldValue.length === 0) continue;
      if (isRef && typeof fieldValue[0] === 'string') {
        fieldValue = fieldValue.map((filename) => fileToContent[filename]);
        content[fieldName] = fieldValue;
      }
      if (typeof fieldValue[0] === 'object') {
        fieldValue.forEach((o: IDocumentModel) =>
          resolveReferences(o, fileToContent)
        );
      }
    } else {
      if (isRef && typeof fieldValue === 'string') {
        fieldValue = fileToContent[fieldValue];
        content[fieldName] = fieldValue;
      }
      if (typeof fieldValue === 'object') {
        resolveReferences(fieldValue, fileToContent);
      }
    }
  }
}

export function allContent(config: ContentOptions): ContentModel {
  const pagesDir = resolve(config?.pagesDir ?? 'content/pages');
  const dataDir = resolve(config?.dataDir ?? 'content/data');
  const [data, pages] = [dataDir, pagesDir].map((dir) => {
    return contentFilesInPath(dir).map((file) => readContent(file));
  });
  const objects = [...pages, ...data];
  const fileToContent = Object.fromEntries(
    objects.map((e) => [e.__metadata.id, e])
  );

  objects.forEach((e) => resolveReferences(e, fileToContent));

  pages.forEach((page) => {
    page.__metadata.urlPath = getPageUrl(page);
  });

  const siteConfig = data.find(
    (e) => e.__metadata.modelName === models.Config.name
  );
  return { config, objects, pages, props: { site: siteConfig } };
}
