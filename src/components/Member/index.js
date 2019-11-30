import React from 'react';
import ImageIcon from '../ImageIcon';
import Card from '../Card';

const TYPE = {
  G: '地區直選',
  F: '功能組別',
};

export default ({ name, party, image, constituencyType = 'G', constituency}) => (
  <Card statusComponent={(
    <div className="flex-self-center">
      <div className="h1">
        {constituency}
      </div>
      <div className="p1">{TYPE[constituencyType]}</div>
    </div>
  )}>
    <div className="flex-row-parent">
      <ImageIcon image={image} />
      <div className="flex-expand px-2 flex-self-center">
        <h3 className=""><b>{name}</b></h3>
        <p>{party}</p>
      </div>
    </div>
  </Card>
);