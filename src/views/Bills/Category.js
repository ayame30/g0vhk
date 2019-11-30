import React from 'react';
import ImageIcon from 'components/ImageIcon';
import classnames from 'classnames';
import styles from './index.module.scss';

export const Category = ({ label, value, image, active, onSelect }) => {
  const onChange = () => onSelect(value);
  return (
    <button className="p2" onClick={onChange}>
      <ImageIcon active={active} image={image}/>
      <div className="text-center p1 h5">{label}</div>
    </button>
  );
}

export default ({ open, options, value, onChange }) => {
  return (
    <div className={classnames('flex-row-parent fullheight multiline flex-top', styles.category, { [styles.open]: open })}>
      {options.map(props => (
        <Category
          {...props}
          active={value === props.value}
          onSelect={onChange}
        />
      ))}
    </div>
  );
}