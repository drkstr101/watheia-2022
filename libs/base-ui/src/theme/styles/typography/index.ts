import styles from './typography.module.css';

const { heading1, heading2, heading3, heading4, heading5, body1, body2, detail, code } = styles;

export default {
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  body1,
  body2,
  detail,
  code,
} as const;
