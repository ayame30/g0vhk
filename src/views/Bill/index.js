import React, { useState } from 'react';
import TabBar from 'components/TabBar';
import Bill from 'components/Bill';
const sampleCard = (
  <Bill
    readStatus={2}
    tags={['長者', '福利']}
    name="全方位支援 60 歲至 64 歲長者"
    meetingDate="2019-11-12"
  />
);

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
    <div className="flex-column-parent fullheight">
      <div className="flex-row-parent flex-center p1">
        <div className="flex-expand">
          <TabBar options={options} value={value} onChange={setValue} />
        </div>
        <hr className="vertical ml-1"/>
        <button className="px-2 flex-100">
          <i class="fas fa-layer-group mr-1" />
          分類
        </button>
      </div>
      <div className="p2 flex-expand overflow-y">
          {sampleCard}
          {sampleCard}
          {sampleCard}
          {sampleCard}
          {sampleCard}
          {sampleCard}
          {sampleCard}
          {sampleCard}
          {sampleCard}
          {sampleCard}
      </div>
    </div>
    
  )
}