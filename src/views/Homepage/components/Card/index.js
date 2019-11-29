import React from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';

export default ({ children, statusComponent = null }) => (
  <div className={classnames(styles.card, { [styles.withStatus]: !!statusComponent })}>
    {children}
    {statusComponent ? (
      <div className={styles.status}>
        {statusComponent}
      </div>
    ): null}
  </div>
);