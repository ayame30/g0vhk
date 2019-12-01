import React, { useState, useEffect } from 'react';
import Bill from 'components/Bill';
import Section from 'components/Section';
import { listHottest, listUpComing, listUpdates } from 'api/bills';


const BillsSection = ({ title, apiPromise }) => {
  const [ list, setList ] = useState([]);
  useEffect(() => {
    apiPromise().then(setList);
  }, [apiPromise]);
  return (
    <Section title={title} onMore={() => {}}>
      <div>
        {list.map((r) => (
          <Bill
            readStatus={r.status === '二讀' ? 2 : null}
            tags={r.tags}
            name={r.title}
            meetingDate={r.meetingDate}
          />
        ))}
      </div>
    </Section>
  );
}
export default () => {
  return (
    <div className="fullheight overflow-overlay">
      <BillsSection title="熱門法案" apiPromise={listHottest} />
      <BillsSection title="即將表決法案" apiPromise={listUpComing} />
      <BillsSection title="最近表決法案" apiPromise={listUpdates} />
    </div>
  )
}