import { allContent } from './cabbage-api';

describe('@watheia/cabbage.api', () => {
  describe('allContent', () => {
    it('MAY resolve an empty content model', () => {
      expect(allContent()).toEqual({
        config: { pagesDir: 'content/pages' },
        objects: [],
        pages: [],
        props: {},
      });
    });
  });
});
