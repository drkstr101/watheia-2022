import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import executor from './executor';
import { TypegenExecutorSchema } from './schema';

const options: TypegenExecutorSchema = {
  name: 'test-model',
  output: 'tmp/model.ts',
};

const tempDir = resolve('tmp');

describe('@watheia/nx-cabbage.generator', () => {
  if (!existsSync(tempDir)) {
    mkdirSync(tempDir);
  }

  it('SHOULD generate model types', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
