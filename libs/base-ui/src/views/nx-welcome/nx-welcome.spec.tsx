import { render } from '@testing-library/react';

import { NxWelcome } from './nx-welcome';

const CID = '@watheia/base-ui.views.nx-welcome';

describe('NxWelcome', () => {
  it('SHOULD provide a component', () => {
    expect(NxWelcome.__cid__).toEqual(CID);
  });

  it('SHOULD render successfully', () => {
    const { getByTestId } = render(<NxWelcome title="TESTING" />);
    expect(getByTestId(CID)).toMatchSnapshot();
  });
});
