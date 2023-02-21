import { GetStaticPaths, GetStaticProps } from 'next';

import CourseContainer from '@watheia/components/course-container';
import Layout from '@watheia/components/layout';
import Page from '@watheia/components/page';

import { getAllCourses } from '@watheia/api/cms-api';
import { META_DESCRIPTION } from '@watheia/api/constants';
import { Course } from '@watheia/api/types';

type Props = {
  course: Course;
  allCourses: Course[];
};

export default function CoursePage({ course, allCourses }: Props) {
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION,
  };
  return (
    <Page meta={meta} fullViewport>
      <Layout isLive={course.isLive}>
        <CourseContainer course={course} allCourses={allCourses} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const courses = await getAllCourses();
  const course = courses.find((s: Course) => s.slug === slug) || null;

  if (!course) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      course,
      allCourses: courses,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const courses = await getAllCourses();
  const slugs = courses.map((s: Course) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false,
  };
};
