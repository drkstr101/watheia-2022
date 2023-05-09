import { expect } from 'chai';
import { resolveContent } from './local-resolver';
import { resolveStaticPaths } from './resolve-static-paths';

describe('@watheia/cabbage.api.resolver.resolve-static-paths', () => {
  describe('readMarkdownFile', () => {
    it('SHOULD resolve a content model from the specified options', async () => {
      const config = await import('../../fixtures/stackbit.config').then(
        (mod) => mod.default
      );
      const model = await resolveContent(config);
      const paths = await resolveStaticPaths(model);
      expect(paths).to.deep.equal(['/', '/about']);
    });
  });
});
