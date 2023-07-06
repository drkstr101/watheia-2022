import * as model from './model';

describe('model', () => {
  it('SHOULD export all models by name', () => {
    expect(model.Button).toHaveProperty('type', 'object');
    expect(model.DescriptionList).toHaveProperty('type', 'object');
    expect(model.Hero).toHaveProperty('type', 'object');
    expect(model.Page).toHaveProperty('type', 'page');
  });
});
