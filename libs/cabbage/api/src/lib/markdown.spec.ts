import { expect } from 'chai';
import { resolve } from 'path';
import { readMarkdownContent } from './markdown';

const fixturesPath = resolve(__dirname, '../fixtures');

describe('@watheia/cabbage.api.markdown', () => {
  describe('readMarkdownContent', () => {
    it('MUST read page data from a markdown file', () => {
      const result = readMarkdownContent(fixturesPath, 'example');
      expect(result).to.be.ok;
    });
  });
});
