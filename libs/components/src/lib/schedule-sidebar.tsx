import { SHORT_DATE } from '@watheia/api/constants';
import { Course } from '@watheia/api/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PresentationCard from './presentation-card';
import styles from './schedule-sidebar.module.css';
import Select from './select';

type Props = {
  allCourses: Course[];
};

export default function ScheduleSidebar({ allCourses }: Props) {
  const router = useRouter();
  const [currentCourseSlug, setCurrentCourseSlug] = useState(router.query.slug);
  const currentCourse = allCourses.find(
    (s: Course) => s.slug === currentCourseSlug
  );

  useEffect(() => {
    setCurrentCourseSlug(router.query.slug);
  }, [router.query.slug]);

  return (
    <div className={styles.schedule}>
      <h3 className={styles.header}>Schedule</h3>
      <p>{SHORT_DATE}</p>
      <Select
        aria-label="Select a course"
        value={currentCourseSlug}
        onChange={(e) => {
          const slug = e.target.value;
          setCurrentCourseSlug(slug);
          router.push(`/course/${slug}`);
        }}
      >
        {allCourses.map((course) => (
          <option key={course.slug} value={course.slug}>
            {course.name}
          </option>
        ))}
      </Select>
      <div className={styles.presentations}>
        {currentCourse?.schedule.map((presentation) => (
          <PresentationCard
            key={presentation.title}
            presentation={presentation}
            showTime
          />
        ))}
      </div>
    </div>
  );
}
