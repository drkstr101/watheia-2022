import { GetStaticProps } from 'next';

import Header from '@watheia/components/header';
import Layout from '@watheia/components/layout';
import Page from '@watheia/components/page';
import Schedule from '@watheia/components/schedule';

import { getAllStages } from '@watheia/api/cms-api';
import { META_DESCRIPTION } from '@watheia/api/constants';
import { Stage } from '@watheia/api/types';

type Props = {
  allStages: Stage[];
};

export default function SchedulePage({ allStages }: Props) {
  const meta = {
    title: 'Schedule - Virtual Event Starter Kit',
    description: META_DESCRIPTION,
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Schedule" description={meta.description} />
        <Schedule allStages={allStages} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allStages = await getAllStages();

  return {
    props: {
      allStages,
    },
    revalidate: 60,
  };
};
