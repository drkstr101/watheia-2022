import {
  allContent,
  resolveStaticPaths,
  resolveStaticProps,
} from '@watheia/waweb.api';
import { getComponent } from '../src/components/components-registry';

function Page(props) {
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

export function getStaticPaths() {
  const data = allContent();
  const paths = resolveStaticPaths(data);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = allContent();
  const urlPath = '/' + (params.slug || []).join('/');
  const props = await resolveStaticProps(urlPath, data);
  return { props };
}

export default Page;
