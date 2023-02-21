import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

export default function IconLogo({
  className,
  ...props
}: Omit<ImageProps, 'alt' | 'src'>) {
  return (
    <Image
      width={512}
      height={512}
      className={clsx('h-10 w-10', className)}
      alt="Icon logo"
      src="https://www.datocms-assets.com/63265/1644788631-icon.png"
      {...props}
    ></Image>
  );
}
