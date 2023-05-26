import styles from './image.module.css';

/* eslint-disable-next-line */
export interface ImageProps {}

export function Image(props: ImageProps) {
  return (
    <div className={styles['image']}>
      <h1>Welcome to Image!</h1>
    </div>
  );
}

export default Image;
