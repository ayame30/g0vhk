import React, { useState } from 'react';
import ImageIcon from 'components/ImageIcon';

export const Category = ({ label, value, image, active, onSelect }) => {
  const onChange = () => onSelect(value);
  return (
    <button className="p2" onClick={onChange}>
      <ImageIcon active={active} image={image}/>
      <div className="text-center p1 h5">{label}</div>
    </button>
  );
}

export default () => {
  const options = [
    { label: '全部', value: 'all' },
    { label: '福利', value: 'bene' },
    { label: '環保', value: 'env' },
    { label: '人口', value: 'ppl' },
    { label: '基建', value: 'facility' },
    { label: '房屋', value: 'housing' },
  ];
  const [ value, setValue ] = useState(options[0].value);
  return (
    <div className="flex-row-parent fullheight multiline flex-top">
      {options.map(props => (
        <Category
          {...props}
          active={value === props.value}
          onSelect={setValue}
        />
      ))}
    </div>
  );
}