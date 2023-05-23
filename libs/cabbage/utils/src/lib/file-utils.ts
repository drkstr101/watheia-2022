import { sync } from 'fast-glob';
import { existsSync, readFileSync } from 'fs';
import { read } from 'gray-matter';
import { join, posix, win32 } from 'path';

export async function readMarkdownFile(filePath: string): Promise<{
  content: string;
  [key: string]: any;
}> {
  if (!existsSync(filePath)) {
    throw new Error(`Could not read markdown from ${filePath}`);
  }

  const { data, content } = await read(filePath);
  return { ...data, content };
}

export function syncContentFiles(dirPath: string, supportedFileTypes = ['md', 'json']) {
  const globPattern = `**/*.{${supportedFileTypes.join(',')}}`;
  return sync(globPattern, { cwd: dirPath }).map((f) => join(dirPath, f));
}

export async function readContentFile<T = Record<string, any>>(
  filePath: string,
  baseDir = ''
): Promise<T> {
  let content: any = null;
  switch (posix.extname(filePath).substring(1)) {
    case 'md':
      content = await readMarkdownFile(filePath);
      break;
    case 'json':
      content = JSON.parse(readFileSync(filePath, 'utf8'));
      break;
    default:
      throw Error(`Unhandled file type: ${filePath}`);
  }

  // Make Sourcebit-compatible
  content.__metadata = {
    // strip the entire length of baseDir plus leading '/'
    // and ensure a normalized posix path
    id: posix.normalize(
      filePath
        .substring(baseDir.length + 1)
        .split(win32.sep)
        .join(posix.sep)
    ),
    modelName: content.type,
  };

  return content;
}
