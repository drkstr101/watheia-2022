import { expect } from 'chai';
import { resolve } from 'path';
import { allContent } from './local-content';
// import chai from 'chai'
// import chaiString from 'chai-string'

// chai.use(chaiString);

describe('@watheia/waweb.utils.local-content', () => {
  describe('allContent', () => {
    it('SHOULD resolve content using default config', async () => {
      const dataDir = resolve(__dirname, '../fixtures/minimal/data');
      const pagesDir = resolve(__dirname, '../fixtures/minimal/pages');
      const { config } = allContent({
        stackbitVersion: '~0.6.0',
        dataDir,
        pagesDir,
        // contentSources: [
        //   new GitContentSource({
        //     rootPath: resolve(__dirname, '../fixtures/minimal'),
        //     contentDirs: ['data', 'pages'],
        //     models: Object.values(models),
        //   }),
        // ],
      });
      expect(config).to.be.ok;
      expect(config.stackbitVersion).to.eq('~0.6.0');
      expect(config.dataDir).to.eq(dataDir);
      expect(config.pagesDir).to.eq(pagesDir);
      // expect(config.contentSources?.at(0)).to.be.instanceOf(GitContentSource);
      // expect(fsify).to.be.instanceOf(Function);
      // const filesystem = [
      //   {
      //     type: fsify.DIRECTORY,
      //     name: 'content',
      //     contents: [
      //       {
      //         type: fsify.DIRECTORY,
      //         name: 'data',
      //         contents: [
      //           {
      //             type: fsify.FILE,
      //             name: 'config.json',
      //             contents: JSON.stringify({ title: 'Hello, World!' }),
      //           },
      //         ],
      //       },
      //       {
      //         type: fsify.DIRECTORY,
      //         name: 'pages',
      //         contents: [
      //           {
      //             type: fsify.FILE,
      //             name: 'index.md',
      //             contents: `
      //             slug: /
      //             title: Hello, World!
      //             ---
      //             `,
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // ];
      // const fsify = await import('fsify').then((fsify) =>
      //   fsify({ persistent: false })
      // );
      // fsify(filesystem).then(() => {
      //   expect(existsSync('content/data/config.json')).to.be.true;
      //   expect(existsSync('content/pages/index.md')).to.be.true;
      // });
    });
  });
});
