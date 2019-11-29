import React from 'react';
import styles from './index.module.scss';

export default ({ children }) => (
  <div className={styles.tagList}>{children}</div>
);