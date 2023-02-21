import { SHORT_DATE } from '@watheia/api/constants';
import { Course } from '@watheia/model';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PresentationCard from './presentation-card';
import styles from './schedule-sidebar.module.css';

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
