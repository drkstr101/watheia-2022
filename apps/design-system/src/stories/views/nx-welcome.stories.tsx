import type { Meta } from '@storybook/react';
import { NxWelcome } from '@watheia/base-ui';

const Story: Meta<typeof NxWelcome> = {
  component: NxWelcome,
  title: '@watheia/design.views.nx-welcome',
};
export default Story;

export const Primary = {
  args: {},
};
