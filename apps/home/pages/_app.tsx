// import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </>
  );
}

export default CustomApp;
