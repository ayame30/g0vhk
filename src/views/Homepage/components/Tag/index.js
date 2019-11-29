import React from 'react';
import styles from './index.module.scss';

export default ({ children }) => (
  <span className={styles.tag}>{children}</span>
);