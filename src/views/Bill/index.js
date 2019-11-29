import React, { useState } from 'react';
import classnames from 'classnames';
import Bill from 'components/Bill';
import Card, { CardImage } from 'components/Card';

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
const vote = <i className={classnames('fas fa-check-circle', styles.vote)} />;

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
    <div className="p2 overflow-y fullheight">
      <h1><b>全方位支援 60 歲至 64 歲長者</b></h1>
      <h5 className="py-1"><b>田北辰</b> 提交的議案</h5>
      
      <article>
        <h3><b>摘要</b></h3>
        <div className="py-2">
          <p>現時，本港並沒有法定退休年齡，故不少僱員年齡達60歲便被迫退休；他們在退休後，往往因為年齡、身體狀況、適合的職位不足及年齡歧視等因素，以致難以重投勞動市場，而政府為長者提供的大部分社會服務及福利的申請門檻均在65歲或以上，令60歲至64歲的長者未能獲得支援；就此，本會促請政府檢討各部門的長者政策及服務，並在就業、福利、醫療、交通等方面全方位支援60歲至64歲長者。</p>
        </div>
      </article>
      
      <article>
        <h3><b>進度</b></h3>
        <div className="flex-row-parent flex-space-between py-2">
          <ReadingStatus label="一讀" active />
          <ReadingStatus label="討論" active />
          <ReadingStatus label="二讀" active />
          <ReadingStatus label="討論" active/>
          <ReadingStatus label="三讀" lastActive/>
        </div>
      </article>
      
      <article>
        <h3><b>二讀表決結果</b></h3>
        <div className="py-2">
          <div>
            <span>排序</span><span className="arrow-right" />
            <button className={styles.sortButton}>按議席</button>
            <button className={styles.sortButton}>按政黨</button>
          </div>
          <div className="flex-column-parent">
            <div className={classnames('flex-row-parent', styles.resultRow)}>
              <div className="flex-100 flex-self-center">表決結果</div>
              <div className="flex-expand flex-self-center">通過</div>
              <div className="flex-100 flex-self-center"><b>田北辰</b> 主持</div>
            </div>
            <div className={classnames('flex-row-parent', styles.resultRow)}>
              <div className="flex-100 flex-self-center">地區直選</div>
              <div className="flex-expand flex-self-center">
                {vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}
              </div>
              <div className="flex-100 flex-row-parent multiline flex-self-center">
                <span>21 贊成</span>
                <span>21 贊成</span>
                <span>21 贊成</span>
                <span>21 贊成</span>
              </div>
            </div>
            <div className={classnames('flex-row-parent', styles.resultRow)}>
              <div className="flex-100 flex-self-center">功能組別</div>
              <div className="flex-expand flex-self-center">
                {vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}
                {vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}
              </div>
              <div className="flex-100 flex-row-parent multiline flex-self-center">
                <span>21 贊成</span>
                <span>21 贊成</span>
                <span>21 贊成</span>
                <span>21 贊成</span>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <article>
        <h3>
          <b>相關新聞</b>
          <button className="float-right">更多</button>
        </h3>
        <div className="py-2">
          <Card>
            <div className="flex-row-parent">
              <div className="flex-100"><CardImage /></div>
              <div className="flex-expand pl-1">
                <h5>60至64歲長者福利、就業支援「百無」　議員斥港府帶頭虐老促補漏</h5>
                <div className="flex-row-parent flex-space-between py-1">
                  <span>Flag - 香港01</span>
                  <span>2019-08-28</span>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex-row-parent">
              <div className="flex-100"><CardImage /></div>
              <div className="flex-expand pl-1">
                <h5>60至64歲長者福利、就業支援「百無」　議員斥港府帶頭虐老促補漏</h5>
                <div className="flex-row-parent flex-space-between py-1">
                  <span>Flag - 香港01</span>
                  <span>2019-08-28</span>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex-row-parent">
              <div className="flex-100"><CardImage /></div>
              <div className="flex-expand pl-1">
                <h5>60至64歲長者福利、就業支援「百無」　議員斥港府帶頭虐老促補漏</h5>
                <div className="flex-row-parent flex-space-between py-1">
                  <span>Flag - 香港01</span>
                  <span>2019-08-28</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </article>
      
      <article>
        <h3><b>質詢紀錄</b></h3>
      </article>
    </div>
    
  )
}