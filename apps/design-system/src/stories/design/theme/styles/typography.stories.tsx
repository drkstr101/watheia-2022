import type { Meta } from '@storybook/react';
import { typography } from '@watheia/base-ui';
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
          <h1 className={typography.heading1}>
            Heading1 <em>Emphasis</em> <strong>Strong</strong>
          </h1>
          <h2 className={typography.heading2}>
            Heading2 <em>Emphasis</em> <strong>Strong</strong>
          </h2>
          <h3 className={typography.heading3}>
            Heading3 <em>Emphasis</em> <strong>Strong</strong>
          </h3>
          <h4 className={typography.heading4}>
            Heading4 <em>Emphasis</em> <strong>Strong</strong>
          </h4>
          <h5 className={typography.heading5}>
            Heading5 <em>Emphasis</em> <strong>Strong</strong>
          </h5>
        </Panel>
        <Panel title="Body">
          <h1 className={typography.heading1}>
            Heading1 <em>Emphasis</em> <strong>Strong</strong>
          </h1>
          <p className={typography.body1}>
            Body1 Text <em>Body1 Emphasis</em> <strong>Body1 Strong</strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus dapibus
            placerat. Pellentesque hendrerit feugiat aliquam. Phasellus rhoncus sem odio, non
            consequat ante aliquam id. Sed quis elit commodo,
          </p>
          <h2 className={typography.heading2}>
            Heading2 <em>Emphasis</em> <strong>Strong</strong>
          </h2>
          <p className={typography.body2}>
            Body2 Text <em>Body2 Emphasis</em> <strong>Body2 Strong</strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus dapibus
            placerat. Pellentesque hendrerit feugiat aliquam. Phasellus rhoncus sem odio, non
            consequat ante aliquam id. Sed quis elit commodo,
          </p>
        </Panel>
        <Panel title="Detail">
          <p className={typography.detail}>
            Detail Text <em>Emphasis</em> <strong>Strong</strong>
          </p>
        </Panel>
        <Panel title="Code">
          <p className={typography.code}>
            <em>
              {`for(let i:int=0; i < items.length; i++) {
                console.log(items[i]);
              }`}
            </em>
            Mono Text <em>Emphasis</em> <strong>Strong</strong>
          </p>
        </Panel>
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
