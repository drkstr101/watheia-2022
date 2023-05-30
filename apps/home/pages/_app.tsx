import { Analytics } from '@vercel/analytics/react';
import '@watheia/design.theme.styles.global';
import { AppProps } from 'next/app';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default CustomApp;
