import styles from './base-ui.module.css';

/* eslint-disable-next-line */
export interface BaseUiProps {}

export function BaseUi(props: BaseUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BaseUi!</h1>
    </div>
  );
}

export default BaseUi;
