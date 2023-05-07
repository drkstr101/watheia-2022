import '../src/css/main.css';
import { WithNinetailedProvider } from '../src/utils/ninetailed-helpers';

export default function MyApp({ Component, pageProps }) {
  return (
    <WithNinetailedProvider>
      <Component {...pageProps} />
    </WithNinetailedProvider>
  );
}
