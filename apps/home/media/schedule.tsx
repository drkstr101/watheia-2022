import { GetStaticProps } from 'next';

import Header from '@watheia/components/header';
import Layout from '@watheia/components/layout';
import Page from '@watheia/components/page';
import Schedule from '@watheia/components/schedule';

import { getAllCourses } from '@watheia/api/cms-api';
import { META_DESCRIPTION } from '@watheia/api/constants';
import { Course } from '@watheia/api/types';

type Props = {
  allCourses: Course[];
};

export default function SchedulePage({ allCourses }: Props) {
  const meta = {
    title: 'Schedule - Virtual Event Starter Kit',
    description: META_DESCRIPTION,
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Schedule" description={meta.description} />
        <Schedule allCourses={allCourses} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allCourses = await getAllCourses();

  return {
    props: {
      allCourses,
    },
    revalidate: 60,
  };
};
