import React, { useState } from 'react';
import classnames from 'classnames';
import Bill from 'components/Bill';
import styles from './index.module.scss';

const sampleCard = (
  <Bill
    readStatus={2}
    tags={['長者', '福利']}
    name="全方位支援 60 歲至 64 歲長者"
    meetingDate="2019-11-12"
  />
);


const ReadingStatus = ({ label, active, lastActive }) => (
  <div
    className={classnames(
      'flex-expand text-center',
      styles.readStatus,
      {
        [styles.active]: active,
        [styles.lastActive]: lastActive,
      },
    )}
  >
    <div className={classnames('h1', styles.icon)}>
      <i class="fas fa-check-circle icon-lg" />
    </div>
    <div className="h3 p1">{label}</div>
  </div>
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
    <div className="p2">
      <h1><b>全方位支援 60 歲至 64 歲長者</b></h1>
      <h5 className="py-1"><b>田北辰</b> 提交的議案</h5>
      
      <article>
        <h3><b>摘要</b></h3>
        <p>現時，本港並沒有法定退休年齡，故不少僱員年齡達60歲便被迫退休；他們在退休後，往往因為年齡、身體狀況、適合的職位不足及年齡歧視等因素，以致難以重投勞動市場，而政府為長者提供的大部分社會服務及福利的申請門檻均在65歲或以上，令60歲至64歲的長者未能獲得支援；就此，本會促請政府檢討各部門的長者政策及服務，並在就業、福利、醫療、交通等方面全方位支援60歲至64歲長者。</p>
      </article>
      
      <article>
        <h3><b>進度</b></h3>
        <div className="flex-row-parent flex-space-between">
          <ReadingStatus label="一讀" active />
          <ReadingStatus label="討論" active />
          <ReadingStatus label="二讀" active />
          <ReadingStatus label="討論" active/>
          <ReadingStatus label="三讀" lastActive/>
        </div>
      </article>
      
      <article>
        <h3><b>二讀表決結果</b></h3>
      </article>
      
      <article>
        <h3><b>相關新聞</b></h3>
      </article>
      
      <article>
        <h3><b>質詢紀錄</b></h3>
      </article>
    </div>
    
  )
}