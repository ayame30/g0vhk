import React from 'react';
import Bill from 'components/Bill';
import SwipeableViews from 'react-swipeable-views';

const sampleCard = (
  <Bill
    id={123}
    readStatus={2}
    tags={['長者', '福利']}
    name="全方位支援 60 歲至 64 歲長者"
    meetingDate="2019-11-12"
  />
);

export default ({ index, onChange }) => {
  return (
    <SwipeableViews index={index} onChangeIndex={onChange}>
      <div className="p3 py-1 fullheight overflow-y">
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
      <div className="p3 py-1 fullheight overflow-y">
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
      <div className="p3 py-1 fullheight overflow-y">
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
    </SwipeableViews>
  )
}