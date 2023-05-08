import { IModel } from '@watheia/cabbage.model';
import * as glob from 'fast-glob';
import { existsSync, readFileSync } from 'fs';
import * as matter from 'gray-matter';
import { extname } from 'path';

const supportedFileTypes = ['md', 'json'];

export async function readMarkdownFile(filePath: string): Promise<{
  content: string;
  [key: string]: any;
}> {
  if (!existsSync(filePath)) {
    throw new Error(`Could not read markdown from ${filePath}`);
  }

  const { data, content } = await matter.read(filePath);
  return { ...data, content };
}

export function syncContentFiles(dirPath: string) {
  const globPattern = `${dirPath}/**/*.{${supportedFileTypes.join(',')}}`;
  return glob.sync(globPattern);
}

export function readContentFile(filePath: string): IModel {
  let content = null;
  switch (extname(filePath).substring(1)) {
    case 'md':
      content = readMarkdownFile(filePath);
      break;
    case 'json':
      content = JSON.parse(readFileSync(filePath, 'utf8'));
      break;
    default:
      throw Error(`Unhandled file type: ${filePath}`);
  }

  // Make Sourcebit-compatible
  content.__metadata = {
    id: filePath,
    modelName: content.type,
  };

  return content;
}
