import { DATE, SITE_DESCRIPTION, SITE_NAME } from '@watheia/api/constants';
import cn from 'clsx';
import styles from './hero.module.css';
import styleUtils from './utils.module.css';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-mobile'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <h1
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styles.hero
        )}
      >
        Welcome to
        <br className={styleUtils['show-on-desktop']} /> {SITE_NAME}
      </h1>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-tablet'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <div
        className={cn(
          styleUtils.appear,
          styleUtils['appear-fourth'],
          styles.info
        )}
      >
        <p>{DATE}</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Online</strong>
        </p>
      </div>
    </div>
  );
}
