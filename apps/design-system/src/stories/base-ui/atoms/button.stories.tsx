import type { Meta } from '@storybook/react';
import { Button, ButtonProps } from '@watheia/base-ui';

function Composition(props: ButtonProps) {
  return (
    <Button
      className="rounded-md bg-primary-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      {...props}
    >
      Button label
    </Button>
  );
}

const Story: Meta<typeof Button> = {
  component: Composition,
  title: 'watheia.base-ui/atoms/button',
};
export default Story;

export const Primary = {
  args: {},
};
