import { DATE, SITE_URL } from '@watheia/api/constants';
import VercelLogo from '@watheia/components/icons/icon-platform';
import Logo from './logo';
import styles from './ticket-info.module.css';
import styleUtils from './utils.module.css';

const siteUrl = new URL(SITE_URL);
const siteUrlForTicket = `${siteUrl.host}${siteUrl.pathname}`.replace(
  /\/$/,
  ''
);

export default function TicketInfo({
  logoTextSecondaryColor = 'var(--accents-5)',
}) {
  const createdBy = (
    <div className={styles['created-by']}>
      <div className={styles['created-by-text']}>Created by </div>
      <div className={styles['created-by-logo']}>
        <VercelLogo height="100%" color="var(--accents-4)" />
      </div>
    </div>
  );
  return (
    <div className={styles.info}>
      <div className={styles.logo}>
        <Logo textSecondaryColor={logoTextSecondaryColor} />
      </div>
      <div className={styles.date}>
        <div>{DATE}</div>
        <div>ONLINE</div>
      </div>
      <div className={styleUtils['hide-on-mobile']}>{createdBy}</div>
      <div className={styles.url}>{siteUrlForTicket}</div>
      <div className={styleUtils['show-on-mobile']}>{createdBy}</div>
    </div>
  );
}
