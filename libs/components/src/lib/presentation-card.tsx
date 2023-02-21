import { Presentation } from '@watheia/api/types';
import cn from 'classnames';
import { format, isAfter, isBefore, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './presentation-card.module.css';

type Props = {
  key: string;
  presentation: Presentation;
  showTime: boolean;
};

const formatDate = (date: string) => {
  // https://github.com/date-fns/date-fns/issues/946
  return format(parseISO(date), "h:mmaaaaa'm'");
};

export default function PresentationCard({
  presentation: { title, instructor, start, end },
  showTime,
}: Props) {
  const [isPresentationLive, setIsPresentationLive] = useState(false);
  const [startAndEndTime, setStartAndEndTime] = useState('');

  useEffect(() => {
    const now = Date.now();
    setIsPresentationLive(
      isAfter(now, parseISO(start)) && isBefore(now, parseISO(end))
    );
    setStartAndEndTime(`${formatDate(start)} – ${formatDate(end)}`);
  }, [end, start]);

  const firstInstructorLink = `/instructors/${instructor[0].slug}`;

  return (
    <div key={title} className={styles.presentation}>
      {showTime && (
        <p className={styles.time}>{startAndEndTime || <>&nbsp;</>}</p>
      )}
      <Link
        href={firstInstructorLink}
        className={cn(styles.card, {
          [styles['is-live']]: isPresentationLive,
        })}
      >
          <div className={styles['card-body']}>
            <h4 title={title} className={styles.title}>
              {title}
            </h4>
            <div className={styles.instructor}>
              <div className={styles['avatar-group']}>
                {instructor.map((s) => (
                  <div key={s.name} className={styles['avatar-wrapper']}>
                    <Image
                      loading="lazy"
                      alt={s.name}
                      className={styles.avatar}
                      src={s.image.url}
                      title={s.name}
                      width={24}
                      height={24}
                    />
                  </div>
                ))}
              </div>
              <h5 className={styles.name}>
                {instructor.length === 1
                  ? instructor[0].name
                  : `${instructor.length} instructors`}
              </h5>
            </div>
          </div>
      </Link>
    </div>
  );
}
