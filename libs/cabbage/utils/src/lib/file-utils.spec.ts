import { PersonProps } from '@watheia/cabbage.model';
import { expect } from 'chai';
import { resolve } from 'path';
import { readContentFile, syncContentFiles } from './file-utils';

const fixturesPath = resolve(__dirname, '../fixtures');

describe('@watheia/cabbage.utils.file-utils', () => {
  describe('readContentFile', () => {
    it('SHOULD read simple json content', async () => {
      const filePath = resolve(fixturesPath, 'subdir/person1.json');
      const result = await readContentFile<PersonProps>(filePath, fixturesPath);
      expect(result).to.be.ok;
      expect(result).to.deep.eq({
        __metadata: { id: 'subdir/person1.json', modelName: 'Person' },
        name: 'Jane Doe',
        type: 'Person',
      });
    });
    it('SHOULD read valid markdown content', async () => {
      const filePath = resolve(fixturesPath, 'example.md');
      const result = await readContentFile(filePath);
      expect(result).to.be.ok;
      expect(result['title']).to.eq('Hello, World!');
      expect(result['date']).to.eq('2023-05-08T05:35:07.322Z');
      expect(result['author']['name']).to.eq('John Doe');
    });
  });

  describe('syncContentFiles', () => {
    it('SHOULD return a synchronous list of all supported files in a directory', () => {
      const result = syncContentFiles(fixturesPath, ['md', 'json', 'yaml']);
      expect(result).to.be.ok;
      expect(result).to.have.lengthOf(3);
    });
  });
});
