import React from 'react';
import classnames from 'classnames';
import Card, { CardImage } from 'components/Card';
import Article from 'components/Article';
import Vote from './Vote';

import styles from './index.module.scss';

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
      <i className="fas fa-check-circle icon-lg" />
    </div>
    <div className="h3 p1">{label}</div>
  </div>
);

export default () => {
  return (
    <div className="p2 overflow-y fullheight">
      <h1><b>全方位支援 60 歲至 64 歲長者</b></h1>
      <h5 className="py-1"><b>田北辰</b> 提交的議案</h5>
      
      <Article title="摘要">
        <p>現時，本港並沒有法定退休年齡，故不少僱員年齡達60歲便被迫退休；他們在退休後，往往因為年齡、身體狀況、適合的職位不足及年齡歧視等因素，以致難以重投勞動市場，而政府為長者提供的大部分社會服務及福利的申請門檻均在65歲或以上，令60歲至64歲的長者未能獲得支援；就此，本會促請政府檢討各部門的長者政策及服務，並在就業、福利、醫療、交通等方面全方位支援60歲至64歲長者。</p>
      </Article>
      
      <Article title="進度">
        <div className="flex-row-parent flex-space-between">
          <ReadingStatus label="一讀" active />
          <ReadingStatus label="討論" active />
          <ReadingStatus label="二讀" active />
          <ReadingStatus label="討論" active/>
          <ReadingStatus label="三讀" lastActive/>
        </div>
      </Article>
      
      <Article title="二讀表決結果">
        <Vote />
      </Article>
      
      <Article title="相關新聞" onMore={() => {}}>
        <Card>
          <div className="flex-row-parent">
            <div className="flex-100"><CardImage /></div>
            <div className="flex-expand flex-column-parent flex-space-between pl-1">
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
            <div className="flex-expand flex-column-parent flex-space-between pl-1">
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
            <div className="flex-expand flex-column-parent flex-space-between pl-1">
              <h5>60至64歲長者福利、就業支援「百無」　議員斥港府帶頭虐老促補漏</h5>
              <div className="flex-row-parent flex-space-between py-1">
                <span>Flag - 香港01</span>
                <span>2019-08-28</span>
              </div>
            </div>
          </div>
        </Card>
      </Article>
      
      <Article title="質詢紀錄" onMore={() => {}}>
        <div className="flex-row-parent border-bottom my-2">
          <div className="flex-50">1</div>
          <div className="flex-50"><b>田北辰</b></div>
          <div className="flex-expand">向 <b>社會福利署</b> 就 <b>現時長者福利</b> 質詢</div>
        </div>
        <div className="flex-row-parent border-bottom my-2">
          <div className="flex-50">2</div>
          <div className="flex-50"><b>田北辰</b></div>
          <div className="flex-expand">向 <b>社會福利署</b> 就 <b>現時長者福利</b> 質詢</div>
        </div>
        <div className="flex-row-parent border-bottom my-2">
          <div className="flex-50">3</div>
          <div className="flex-50"><b>田北辰</b></div>
          <div className="flex-expand">向 <b>社會福利署</b> 就 <b>現時長者福利</b> 質詢</div>
        </div>
        <div className="flex-row-parent border-bottom my-2">
          <div className="flex-50">4</div>
          <div className="flex-50"><b>田北辰</b></div>
          <div className="flex-expand">向 <b>社會福利署</b> 就 <b>現時長者福利</b> 質詢</div>
        </div>
        <div className="flex-row-parent border-bottom my-2">
          <div className="flex-50">5</div>
          <div className="flex-50"><b>田北辰</b></div>
          <div className="flex-expand">向 <b>社會福利署</b> 就 <b>現時長者福利</b> 質詢</div>
        </div>
      </Article>
    </div>
    
  )
}