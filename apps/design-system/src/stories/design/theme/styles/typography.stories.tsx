import type { Meta } from '@storybook/react';

function Composition() {
  return (
    <>
      <h1 className="text-base font-extrabold p-2 pb-4">Typography Styles</h1>
      <div className="space-y-3">
        <div className="overflow-hidden rounded-md bg-neutral-100 px-6 py-4 shadow">
          <h2>Heading</h2>
        </div>
        <div className="overflow-hidden rounded-md bg-neutral-100 px-6 py-4 shadow">
          <h2>Body</h2>
        </div>
        <div className="overflow-hidden rounded-md bg-neutral-100 px-6 py-4 shadow">
          <h2>Detail</h2>
        </div>
      </div>
    </>
  );
}

const Story: Meta<typeof Composition> = {
  component: Composition,
  title: 'watheia.design/theme/styles/typography',
};
export default Story;

export const Primary = {
  args: {},
};
