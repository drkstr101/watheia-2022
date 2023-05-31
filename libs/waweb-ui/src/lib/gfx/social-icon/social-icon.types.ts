import { SVGProps } from 'react';

export type SocialVariant = 'Facebook' | 'Instagram' | 'Twitter' | 'GitHub' | 'YouTube';

export interface SocialIconProps extends SVGProps<SVGSVGElement> {
  variant: SocialVariant;
}
