import Image from 'next/image';

export default function IconLogo() {
  return (
    <div className="h-12 w-12">
      <Image
        width={512}
        height={512}
        src="https://www.datocms-assets.com/63265/1644788631-icon.png"
      />
    </div>
  );
}
