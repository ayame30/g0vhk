import React from 'react';
import Bill from 'components/Bill';
import Section from 'components/Section';

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
    <div className="px-1">
      <Section title="熱門法案" onMore={() => {}}>
        <div>
          {sampleCard}
          {sampleCard}
          {sampleCard}
        </div>
      </Section>
      <Section title="即將表決法案" onMore={() => {}}>
        <div>
          {sampleCard}
          {sampleCard}
          {sampleCard}
        </div>
      </Section>
      <Section title="最近表決法案" onMore={() => {}}>
        <div>
          {sampleCard}
          {sampleCard}
          {sampleCard}
        </div>
      </Section>
    </div>
  )
}