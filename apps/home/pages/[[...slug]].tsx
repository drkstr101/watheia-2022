import { StackbitConfig } from '@stackbit/types';
import {
  resolveContent,
  resolveStaticPaths,
  resolveStaticProps,
} from '@watheia/cabbage.api';
import { ConfigProps, IPageModel } from '@watheia/cabbage.model';
import { getComponent } from '@watheia/cabbage.ui';
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = {
  site: ConfigProps;
  page: IPageModel;
  path: string;
};

const getConfig = async (): Promise<StackbitConfig> =>
  import('../../../stackbit.config').then((it) => it.default);

export const getStaticPaths: GetStaticPaths = async () => {
  const config = await getConfig();
  const data = await resolveContent(config);
  const paths = await resolveStaticPaths(data);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const config = await getConfig();
  const model = await resolveContent(config);
  const props = await resolveStaticProps('/', model);
  return { props };
};

export function DynamicPage(props: Props) {
  const { page, site } = props;
  const { modelName } = page.__metadata;
  if (!modelName) {
    throw new Error(`page has no type, page '${props.path}'`);
  }
  const PageLayout = getComponent(modelName) as any;
  if (!PageLayout) {
    throw new Error(`no page layout matching the page model: ${modelName}`);
  }
  return <PageLayout page={page} site={site} />;
}

export default DynamicPage;
