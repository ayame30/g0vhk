import React from 'react';
import Tag from './components/Tag';
import TagList from './components/TagList';
import Card from './components/Card';
import Section from './components/Section';
import Heading from './components/Heading';

const sampleCard = (
  <Card statusComponent={(
    <div>
      <div className="h1">
        <i class="fas fa-check-circle" />
      </div>
      <div className="h3">二讀</div>
    </div>
  )}>
    <TagList>
      <Tag>長者</Tag>
      <Tag>福利</Tag>
    </TagList>
    <h3>全方位支援 60 歲至 64 歲長者</h3>
    <small>下次開會 2019-11-12</small>
  </Card>
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