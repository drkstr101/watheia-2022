import type { Meta } from '@storybook/react';
import { NxWelcome } from '../app/nx-welcome';

const Story: Meta<typeof NxWelcome> = {
  component: NxWelcome,
  title: 'NxWelcome',
};
export default Story;

export const Primary = {
  args: {},
};
