import type { Meta } from '@storybook/react';
import { BaseUi } from './base-ui';

const Story: Meta<typeof BaseUi> = {
  component: BaseUi,
  title: 'BaseUi',
};
export default Story;

export const Primary = {
  args: {},
};
