import * as matter from 'gray-matter';
import { fileExists } from 'nx/src/utils/fileutils';

export async function readMarkdownFile(filePath: string): Promise<{
  content: string;
  [key: string]: any;
}> {
  if (!fileExists(filePath)) {
    throw new Error(`Could not read markdown from ${filePath}`);
  }

  const { data, content } = await matter.read(filePath);
  return { ...data, content };
}
