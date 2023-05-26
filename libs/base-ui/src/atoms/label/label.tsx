import styles from './label.module.css';

/* eslint-disable-next-line */
export interface LabelProps {}

export function Label(props: LabelProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Label!</h1>
    </div>
  );
}

export default Label;
