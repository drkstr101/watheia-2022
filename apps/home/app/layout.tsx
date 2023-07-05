import { Analytics } from '@vercel/analytics/react';

import './global.css';

export const metadata = {
  title: 'Watheia Labs',
  description: 'We make technology simple.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fafafa" />
        <meta name="msapplication-TileColor" content="#fafafa" />
        <meta name="theme-color" content="#fafafa"></meta>
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
