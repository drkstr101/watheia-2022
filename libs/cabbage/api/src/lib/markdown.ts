// import * as matter from 'gray-matter';
import * as matter from 'gray-matter';
import { fileExists } from 'nx/src/utils/fileutils';
import { resolve } from 'path';

export async function readMarkdownContent(pagesDir: string, slug: string) {
  const filePath = resolve(pagesDir, `${slug}.md`);
  if (!fileExists(filePath)) {
    throw new Error(`Could not read markdown from ${filePath}`);
  }

  return await matter.read(filePath);
}
