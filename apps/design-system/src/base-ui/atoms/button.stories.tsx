import type { Meta } from '@storybook/react';
import { Button } from '@watheia/base-ui';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'watheia.base-ui/atoms/button',
  args: { children: 'Button label', color: 'neutral', variant: 'solid' },
};
export default Story;

export const Primary = {
  args: {},
};
