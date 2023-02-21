import { HMSRoomProvider } from '@100mslive/react-sdk';
import NProgress from '@watheia/components/nprogress';
import ResizeHandler from '@watheia/components/resize-handler';
import '@watheia/theme.styles/chrome-bug.css';
import '@watheia/theme.styles/global.css';
import '@watheia/theme.styles/nprogress.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { OverlayProvider, SSRProvider } from 'react-aria';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);
  return (
    <SSRProvider>
      <OverlayProvider>
        <HMSRoomProvider>
          <Component {...pageProps} />
          <ResizeHandler />
          <NProgress />
        </HMSRoomProvider>
      </OverlayProvider>
    </SSRProvider>
  );
}
