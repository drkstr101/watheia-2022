import { REPO } from '@watheia/api/constants';
import cn from 'clsx';
import styles from './contact.module.css';
import styleUtils from './utils.module.css';

export default function LearnMore() {
  return (
    <div
      className={cn(
        styleUtils.appear,
        styleUtils['appear-fifth'],
        styles.contact
      )}
    >
      Learn more on{' '}
      <a
        href={REPO}
        className={styles['contact-email']}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      .
    </div>
  );
}
