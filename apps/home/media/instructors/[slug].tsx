import { GetStaticPaths, GetStaticProps } from 'next';

import InstructorSection from '@watheia/components/instructor-section';
import Layout from '@watheia/components/layout';
import Page from '@watheia/components/page';

import { getAllInstructors } from '@watheia/api/cms-api';
import { META_DESCRIPTION } from '@watheia/api/constants';
import { Instructor } from '@watheia/api/types';

type Props = {
  instructor: Instructor;
};

export default function InstructorPage({ instructor }: Props) {
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION,
  };

  return (
    <Page meta={meta}>
      <Layout>
        <InstructorSection instructor={instructor} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const instructors = await getAllInstructors();
  const currentInstructor =
    instructors.find((s: Instructor) => s.slug === slug) || null;

  if (!currentInstructor) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      instructor: currentInstructor,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const instructors = await getAllInstructors();
  const slugs = instructors.map((s: Instructor) => ({
    params: { slug: s.slug },
  }));

  return {
    paths: slugs,
    fallback: false,
  };
};
