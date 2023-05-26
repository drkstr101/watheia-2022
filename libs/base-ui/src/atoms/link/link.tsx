import styles from './link.module.css';

/* eslint-disable-next-line */
export interface LinkProps {}

export function Link(props: LinkProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Link!</h1>
    </div>
  );
}

export default Link;
