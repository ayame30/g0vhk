import React from 'react';
import styles from './index.module.scss';

export default ({ title, children }) => (
  <div className={styles.heading}>
    <span className="h2">{title}</span>
    {children}
  </div>
);