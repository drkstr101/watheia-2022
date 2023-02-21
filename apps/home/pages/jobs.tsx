import { GetStaticProps } from 'next';

import Header from '@watheia/components/header';
import JobsGrid from '@watheia/components/jobs-grid';
import Layout from '@watheia/components/layout';
import Page from '@watheia/components/page';

import { getAllJobs } from '@watheia/api/cms-api';
import { META_DESCRIPTION } from '@watheia/api/constants';
import { Job } from '@watheia/model';

type Props = {
  jobs: Job[];
};

export default function Jobs({ jobs }: Props) {
  const meta = {
    title: 'Career Fair - Virtual Event Starter Kit',
    description: META_DESCRIPTION,
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Career Fair" description={meta.description} />
        <JobsGrid jobs={jobs} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const jobs = await getAllJobs();

  return {
    props: {
      jobs,
    },
    revalidate: 60,
  };
};
