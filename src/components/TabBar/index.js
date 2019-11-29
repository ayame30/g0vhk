import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export const Tab = ({ children, active, value, onClick }) => {
  const onChange = () => onClick(value);
  return (
    <button
      onClick={onChange}
      className={classnames(styles.tab, { [styles.active]: active })}
    >
      {children}
    </button>
  );
};

export default ({ children, options = [], value, onChange }) => {
  return (
    <div classnames={styles.root}>
      <div className={styles.tabBar}>
        {options.map(({ value: thisValue, label }) => (
          <Tab
            active={thisValue === value }
            value={thisValue}
            onClick={onChange}
          >
            {label}
          </Tab>
        ))}
      </div>
    </div>
  );
}