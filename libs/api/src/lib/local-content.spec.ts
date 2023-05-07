import { allContent } from './local-content';

describe('utils/local-content', () => {
  describe('allContent', () => {
    it('SHOULD resolve all content entries', () => {
      const result = allContent();
      expect(result).toBeTruthy();
      expect(result.objects).toBeTruthy();
      expect(result.objects.length).toBeGreaterThan(0);
      expect(result.pages).toBeTruthy();
      expect(result.pages.length).toBeGreaterThan(0);
      expect(result.props).toBeTruthy();
    });
  });
});
