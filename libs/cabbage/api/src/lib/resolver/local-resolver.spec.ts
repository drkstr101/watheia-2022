import { expect } from 'chai';
import { join } from 'path';
import { resolveContent } from './local-resolver';

const EXPECTED_CONTENT = {
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
};

const configPath = '../../fixtures/stackbit.config';

const baseDir = join(__dirname, '..', '..', 'fixtures');
const pagesDir = join(baseDir, 'pages');
const dataDir = join(baseDir, 'data');

const getConfig = async () => import(configPath).then((mod) => mod.default);

describe('@watheia/cabbage.api.resolver.local-resolver', () => {
  describe('resolveContent', () => {
    it('MUST be importable', () => {
      expect(resolveContent).to.be.instanceOf(Function);
    });

    it('SHOULD resolve a content model from the specified options', async () => {
      const { config, objects } = await resolveContent(await getConfig());

      expect(config).to.be.ok;
      expect(config.pagesDir).to.eq(pagesDir);
      expect(config.dataDir).to.deep.eq(dataDir);

      expect(objects).to.be.ok;
      expect(objects).to.have.length.greaterThan(0);
    });
  });
});
