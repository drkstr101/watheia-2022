import type { Meta } from '@storybook/react';
import { Heading } from '@watheia/base-ui';

const Story: Meta<typeof Heading> = {
  component: Heading,
  title: 'watheia.base-ui/atoms/heading',
  args: {
    weight: 'regular',
    children: (
      <>
        Heading text <em>emphasis</em> <strong>strong</strong> 0123456789
      </>
    ),
  },
};
export default Story;

export const Heading1 = {
  args: {
    level: 1,
  },
};

export const Heading2 = {
  args: {
    level: 2,
  },
};

export const Heading3 = {
  args: {
    level: 3,
  },
};
