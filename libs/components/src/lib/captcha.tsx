import type HCaptcha from '@hcaptcha/react-hcaptcha';
import { IS_CAPTCHA_ENABLED } from '@watheia/api/captcha';

import {
  ComponentProps,
  forwardRef,
  lazy,
  Suspense,
  useCallback,
  useRef,
} from 'react';

type Props = Omit<ComponentProps<typeof HCaptcha>, 'sitekey'>;

const LazyCaptcha = lazy(() => import('@hcaptcha/react-hcaptcha'));

export function useCaptcha() {
  const ref = useRef<HCaptcha>(null);

  const execute = useCallback(() => ref.current?.execute(), []);
  const reset = useCallback(() => ref.current?.resetCaptcha(), []);

  return { ref, execute, reset, isEnabled: IS_CAPTCHA_ENABLED };
}

const Captcha = forwardRef<HCaptcha, Props>((props, ref) => {
  if (!IS_CAPTCHA_ENABLED) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <LazyCaptcha
        ref={ref}
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY as string}
        size="invisible"
        {...props}
      />
    </Suspense>
  );
});

export default Captcha;
