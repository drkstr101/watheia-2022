import type { Meta } from '@storybook/react';
import { Heading } from '@watheia/base-ui';

function MyComposition() {
  const Item = ({ level = 1 }) => (
    <Heading level={level}>
      Heading{level} <em>Emphasis</em> <strong>Strong</strong>
    </Heading>
  );
  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map((level) => (
        <Item key={level} level={level} />
      ))}
    </div>
  );
}

const Story: Meta<typeof MyComposition> = {
  component: MyComposition,
  title: 'watheia.base-ui/atoms/heading',
};
export default Story;

export const Composition = {
  args: {},
};
