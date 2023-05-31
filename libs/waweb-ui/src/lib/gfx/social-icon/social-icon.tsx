import { Facebook } from './Facebook';
import { GitHub } from './GitHub';
import { Instagram } from './Instagram';
import { Twitter } from './Twitter';
import { YouTube } from './YouTube';
import { SocialIconProps } from './social-icon.types';

export const SocialIcon = ({ variant, ...props }: SocialIconProps): JSX.Element | null => {
  switch (variant) {
    case 'Facebook':
      return <Facebook {...props} />;
    case 'Instagram':
      return <Instagram {...props} />;
    case 'Twitter':
      return <Twitter {...props} />;
    case 'GitHub':
      return <GitHub {...props} />;
    case 'YouTube':
      return <YouTube {...props} />;
  }
};

export default SocialIcon;
