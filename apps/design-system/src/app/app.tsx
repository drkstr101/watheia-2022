// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseUi } from '@watheia/base-ui';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <BaseUi />
      <NxWelcome title="design-system" />
    </div>
  );
}

export default App;
