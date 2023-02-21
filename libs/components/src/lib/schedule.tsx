import { Course, Presentation } from '@watheia/model';
import cn from 'clsx';
import PresentationCard from './presentation-card';
import styles from './schedule.module.css';

function CourseRow({ course }: { course: Course }) {
  // Group presentations by the time block
  const timeBlocks = course.schedule.reduce((allBlocks: any, presentation) => {
    allBlocks[presentation.start] = [
      ...(allBlocks[presentation.start] || []),
      presentation,
    ];
    return allBlocks;
  }, {});

  return (
    <div key={course.name} className={styles.row}>
      <h3 className={cn(styles['course-name'], styles[course.slug])}>
        <span>{course.name}</span>
      </h3>
      <div className={cn(styles.presentations, styles[course.slug])}>
        {Object.keys(timeBlocks).map((startTime: string) => (
          <div key={startTime}>
            {timeBlocks[startTime].map(
              (presentation: Presentation, index: number) => (
                <PresentationCard
                  key={presentation.title}
                  presentation={presentation}
                  showTime={index === 0}
                />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  allCourses: Course[];
};

export default function Schedule({ allCourses }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles['row-wrapper']}>
        {allCourses.map((course) => (
          <CourseRow key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
