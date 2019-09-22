import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export default function Avatar({ type, party, size, src, className, ...props }) {
  return (
    <div className={classnames(styles.avatar, className)} style={{ 'background-image': `url(${src})`}}>
      {party ? <div className={styles.party}>{party}</div> : null}
    </div>
  );
  
}