import clsx from 'clsx';
import styles from './icon.module.css';

/* eslint-disable-next-line */
export interface IconProps {}

export function Icon(props: IconProps) {
  return (
    <div className={clsx('wa-icon', styles['icon'])}>
      <h1>Welcome to Icon!</h1>
    </div>
  );
}

export default Icon;
