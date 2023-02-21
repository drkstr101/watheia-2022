import px from '@watheia/api/to-pixels';
import cn from 'clsx';
import styles from './loading-dots.module.css';

interface Props {
  size?: number;
  height?: number | string;
  reverse?: boolean;
  children?: React.ReactNode;
}

export default function LoadingDots({
  size = 2,
  height,
  children,
  reverse,
}: Props) {
  return (
    <span
      className={cn(styles.loading, { [styles.reverse]: reverse })}
      style={{
        ['--loading-dots-height' as string]: height ? px(height) : undefined,
        ['--loading-dots-size' as string]: size !== 2 ? px(size) : undefined,
      }}
    >
      {children && <div className={styles.spacer}>{children}</div>}
      <span />
      <span />
      <span />
    </span>
  );
}
