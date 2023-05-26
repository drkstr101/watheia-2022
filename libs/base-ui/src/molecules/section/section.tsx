import styles from './section.module.css';

/* eslint-disable-next-line */
export interface SectionProps {}

export function Section(props: SectionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Section!</h1>
    </div>
  );
}

export default Section;
