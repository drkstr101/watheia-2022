import executor from './executor';
import { TypegenExecutorSchema } from './schema';

const options: TypegenExecutorSchema = {
  name: 'test-model',
  output: 'output.ts',
};

describe('Typegen Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});