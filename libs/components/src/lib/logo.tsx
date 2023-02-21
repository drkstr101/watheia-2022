import { SITE_NAME_MULTILINE } from '@watheia/api/constants';
import IconLogo from '../../../components/src/lib/icons/icon-logo';
import styles from './logo.module.css';

export default function Logo({ textSecondaryColor = 'var(--accents-5)' }) {
  return (
    <div className={styles.logo}>
      <div className={styles.icon}>
        <IconLogo />
      </div>
      <div className={styles.text}>
        <div>{SITE_NAME_MULTILINE[0]}</div>
        <div
          style={{ ['--color' as string]: textSecondaryColor }}
          className={styles['text-secondary']}
        >
          {SITE_NAME_MULTILINE[1]}
        </div>
      </div>
    </div>
  );
}
