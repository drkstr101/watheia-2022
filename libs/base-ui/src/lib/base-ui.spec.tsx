import { render } from '@testing-library/react';

import BaseUi from './base-ui';

describe('BaseUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseUi />);
    expect(baseElement).toBeTruthy();
  });
});
