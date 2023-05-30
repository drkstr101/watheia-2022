import type { Meta } from '@storybook/react';
import { ReactNode } from 'react';

function Panel({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="divide-y divide-neutral-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="bg-neutral-100 font-bold px-4 py-5">{title}</div>
      <div className="px-4 py-5">{children}</div>
    </div>
  );
}

function Composition() {
  return (
    <>
      <h1 className="text-base font-extrabold p-2 pb-4">Typography Styles</h1>
      <div className="space-y-6">
        <Panel title="Heading">
          <h1 className="text-4xl font-black tracking-tight text-black mt-2 mb-4">
            Heading1 <em>Emphasis</em> <strong>Strong</strong>
          </h1>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Heading2 <em>Emphasis</em> <strong>Strong</strong>
          </h2>
          <h3 className="text-black font-bold text-2xl">
            Heading3 <em>Emphasis</em> <strong>Strong</strong>
          </h3>
          <h4 className="text-base font-semibold leading-7 text-neutral-900">
            Heading4 <em>Emphasis</em> <strong>Strong</strong>
          </h4>
          <h5 className="text-sm font-semibold leading-6 text-black">
            Heading5 <em>Emphasis</em> <strong>Strong</strong>
          </h5>
        </Panel>
        <Panel title="Body"></Panel>
        <Panel title="Detail"></Panel>
        <Panel title="Code"></Panel>
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
