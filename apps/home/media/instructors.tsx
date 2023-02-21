import { GetStaticProps } from 'next';

import Header from '@watheia/components/header';
import InstructorsGrid from '@watheia/components/instructors-grid';
import Layout from '@watheia/components/layout';
import Page from '@watheia/components/page';

import { getAllInstructors } from '@watheia/api/cms-api';
import { META_DESCRIPTION } from '@watheia/api/constants';
import { Instructor } from '@watheia/model';

type Props = {
  instructors: Instructor[];
};

export default function Instructors({ instructors }: Props) {
  const meta = {
    title: 'Instructors - Virtual Event Starter Kit',
    description: META_DESCRIPTION,
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Instructors" description={meta.description} />
        <InstructorsGrid instructors={instructors} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const instructors = await getAllInstructors();

  return {
    props: {
      instructors,
    },
    revalidate: 60,
  };
};
