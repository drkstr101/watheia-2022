import { SkipNavContent } from '@reach/skip-nav';
import { NAVIGATION } from '@watheia/api/constants';
import cn from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { hmsConfig } from '../../../components/src/lib/hms/config';
import DemoButton from '../../../components/src/lib/hms/demo-cta';
import RoomCta from '../../../components/src/lib/hms/demo-cta/room-cta';
import Logo from '../../../components/src/lib/icons/icon-logo';
import Footer from './footer';
import styles from './layout.module.css';
import MobileMenu from './mobile-menu';
import ViewSource from './view-source';

type Props = {
  children: React.ReactNode;
  className?: string;
  hideNav?: boolean;
  layoutStyles?: any;
  isLive?: boolean;
};

export default function Layout({
  children,
  className,
  hideNav,
  layoutStyles,
  isLive = false,
}: Props) {
  const router = useRouter();
  const activeRoute = router.asPath;
  const disableCta = ['/schedule', '/instructors', '/expo', '/jobs'];

  return (
    <div className={styles.background}>
      {!hideNav && (
        <header className={cn(styles.header)}>
          <div className={styles['header-logos']}>
            <MobileMenu key={router.asPath} />
            <Link href="/" className={styles.logo}>
              <Logo />
            </Link>
          </div>
          <div className={styles.tabs}>
            {NAVIGATION.map(({ name, route }) => (
              <a
                key={name}
                href={route}
                className={cn(styles.tab, {
                  [styles['tab-active']]: activeRoute.startsWith(route),
                })}
              >
                {name}
              </a>
            ))}
          </div>

          {(hmsConfig.hmsIntegration &&
            !!isLive &&
            !disableCta.includes(activeRoute)) ||
          activeRoute === '/' ? (
            <div className={cn(styles['header-right'])}>
              {activeRoute === '/' ? <DemoButton /> : <RoomCta />}
            </div>
          ) : (
            <div />
          )}
        </header>
      )}
      <ViewSource />
      <div className={styles.page}>
        <main className={styles.main} style={layoutStyles}>
          <SkipNavContent />
          <div className={cn(styles.full, className)}>{children}</div>
        </main>
        {!activeRoute.startsWith('/course') && <Footer />}
      </div>
    </div>
  );
}
