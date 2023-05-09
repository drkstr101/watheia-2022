import { expect } from 'chai';
import { resolveContent } from './local-resolver';

describe('@watheia/cabbage.api.resolver.local-resolver', () => {
  describe('readMarkdownFile', () => {
    it('MUST be importable', () => {
      expect(resolveContent).to.be.instanceOf(Function);
    });

    it('SHOULD resolve a content model from the specified options', async () => {
      const config = await import('../../fixtures/stackbit.config').then(
        (mod) => mod.default
      );
      const model = await resolveContent(config);
      expect(model).to.deep.equal({
        config,
        objects: [
          {
            type: 'PageLayout',
            slug: '/about',
            title: 'About Us',
            content:
              '\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n',
            __metadata: {
              id: 'about.md',
              modelName: 'PageLayout',
              urlPath: '/about',
            },
          },
          {
            type: 'PageLayout',
            slug: '/',
            title: 'Home',
            content:
              '\n## Lorem Ipsum\n\nTristique senectus et netus et malesuada fames ac turpis.\n',
            __metadata: {
              id: 'index.md',
              modelName: 'PageLayout',
              urlPath: '/',
            },
          },
          {
            type: 'Config',
            title: 'Hello, Site!',
            __metadata: { id: 'config.json', modelName: 'Config' },
          },
        ],
        pages: [
          {
            type: 'PageLayout',
            slug: '/about',
            title: 'About Us',
            content:
              '\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n',
            __metadata: {
              id: 'about.md',
              modelName: 'PageLayout',
              urlPath: '/about',
            },
          },
          {
            type: 'PageLayout',
            slug: '/',
            title: 'Home',
            content:
              '\n## Lorem Ipsum\n\nTristique senectus et netus et malesuada fames ac turpis.\n',
            __metadata: {
              id: 'index.md',
              modelName: 'PageLayout',
              urlPath: '/',
            },
          },
        ],
        props: {
          site: {
            type: 'Config',
            title: 'Hello, Site!',
            __metadata: { id: 'config.json', modelName: 'Config' },
          },
        },
      });
    });
  });
});
