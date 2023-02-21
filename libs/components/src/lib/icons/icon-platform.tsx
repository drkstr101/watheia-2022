type Props = { color: 'light' | 'dark'; height?: number | string };

const LIGHT_URL = 'https://www.datocms-assets.com/63265/1646107015-logo.png';

const DARK_URL = 'https://www.datocms-assets.com/63265/1646107055-logo-alt.png';

export default function PlatformLogo({ color, height = 20 }: Props) {
  return <img height={height} src={color === 'light' ? LIGHT_URL : DARK_URL} />;
}
