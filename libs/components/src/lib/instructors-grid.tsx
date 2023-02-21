import { Instructor } from '@watheia/model';
import Image from 'next/image';
import Link from 'next/link';
import styles from './instructors-grid.module.css';

type Props = {
  instructors: Instructor[];
};

export default function InstructorsGrid({ instructors }: Props) {
  return (
    <div className={styles.grid}>
      {instructors.map((instructor) => (
        <Link
          key={instructor.name}
          href={`/instructors/${instructor.slug}`}
          role="button"
          tabIndex={0}
          className={styles.card}
        >
          <div className={styles.imageWrapper}>
            <Image
              alt={instructor.name}
              src={instructor.image.url}
              className={styles.image}
              loading="lazy"
              quality="50"
              title={instructor.name}
              placeholder={instructor.image.blurDataURL ? 'blur' : 'empty'}
              blurDataURL={instructor.image.blurDataURL}
              width={300}
              height={300}
            />
          </div>
          <div className={styles.cardBody}>
            <div>
              <h2 className={styles.name}>{instructor.name}</h2>
              <p className={styles.title}>
                {`${instructor.title} @ `}
                <span className={styles.company}>{instructor.company}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
