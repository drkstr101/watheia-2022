import { expect } from 'chai';
import { resolve } from 'path';
import { readMarkdownFile } from './file-utils';

const fixturesPath = resolve(__dirname, '../fixtures');

describe('@watheia/cabbage.utils.file-utils', () => {
  describe('readMarkdownFile', () => {
    it('MUST read markdown data from a file path', async () => {
      const filePath = resolve(fixturesPath, 'example.md');
      const result = await readMarkdownFile(filePath);
      expect(result).to.be.ok;
      expect(result['title']).to.eq('Hello, World!');
      expect(result['date']).to.eq('2023-05-08T05:35:07.322Z');
      expect(result['author']['name']).to.eq('John Doe');
    });
  });
});
