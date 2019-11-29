import React from 'react';
import Bill from 'components/Bill';
import Section from 'components/Section';
import Heading from 'components/Heading';

const sampleCard = (
  <Bill
    readStatus={2}
    tags={['長者', '福利']}
    name="全方位支援 60 歲至 64 歲長者"
    meetingDate="2019-11-12"
  />
);
export default () => {
  return (
    <div>
      <Section>
        <Heading title="熱門法案">
          <button className="float-right">更多</button>
        </Heading>
        <div>
          {sampleCard}
          {sampleCard}
          {sampleCard}
        </div>
      </Section>
      <Section>
        <Heading title="即將表決法案">
          <button className="float-right">更多</button>
        </Heading>
        <div>
          {sampleCard}
          {sampleCard}
          {sampleCard}
        </div>
      </Section>
      <Section>
        <Heading title="最近表決法案">
          <button className="float-right">更多</button>
        </Heading>
        <div>
          {sampleCard}
          {sampleCard}
          {sampleCard}
        </div>
      </Section>
    </div>
  )
}