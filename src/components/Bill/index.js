import React from 'react';
import TagList from '../TagList';
import Card, { SecondReadStatus } from '../Card';

export default ({ readStatus = null, tags = [], name, meetingDate}) => (
  <Card statusComponent={readStatus === 2 ? <SecondReadStatus /> : null}>
    <TagList list={tags} />
    <h3 className="my-1">{name}</h3>
    <small>下次開會 {meetingDate}</small>
  </Card>
);