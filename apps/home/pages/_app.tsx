import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import '@watheia/design.theme.styles.global';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Watheia Labs"
        defaultTitle="Watheia Labs - We make technology easy"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://watheia.com/',
          siteName: 'watheia',
        }}
      />
      <Component {...pageProps} />
      <GoogleAnalytics trackPageViews />
      <VercelAnalytics />
    </>
  );
}

export default CustomApp;
