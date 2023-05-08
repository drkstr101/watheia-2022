import { expect } from 'chai';
import mockConfig from '../fixtures/stackbit.config';
import { resolveContent } from './cabbage-api';

describe('@watheia/cabbage.api', () => {
  describe('resolveContent', () => {
    it('SHOULD resolve the default content model', async () => {
      const { config } = resolveContent(mockConfig);
      expect(config).to.be.ok;
      expect(config.stackbitVersion).to.eq('~0.6.0');
      expect(config.dataDir).to.be.ok;
      expect(config.pagesDir).to.be.ok;
    });
  });
});
