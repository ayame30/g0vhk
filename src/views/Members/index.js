import React, { useState } from 'react';
import Member from 'components/Member';
import classnames from 'classnames';
import styles from './index.module.scss';


const MemberCard = ({ index }) => (
  <div className="flex-row-parent flex-middle">
    <div className="h2 flex-self-center flex-40 text-left"><b>{index}</b></div>
    <div className="flex-expand">
      <Member
        name="田北辰"
        party="新民黨"
        image=""
        constituencyType="G"
        constituency="新界東"
      />
    </div>
  </div>
);

export default () => {
  const [ openFilter, setOpenFilter ] = useState(false);
  return (
    <div className="fullheight">
      <div className="flex-column-parent fullheight">
        <div className="flex-row-parent flex-center">
          <div className="flex-row-parent flex-center flex-expand p2 overflow-y">
            <div className="nowrap"><span>排序</span><span className="arrow-right" /></div>
            <button className={styles.sortButton}>動議數目</button>
            <button className={styles.sortButton}>近月投票率</button>
            <button className={styles.sortButton}>近月出席率</button>
          </div>
            <button onClick={() => setOpenFilter(prev => !prev)} className="p2">
              <i className="fas fa-filter"></i>
            </button>
        </div>
        <div className="flex-expand fullheight">
          <div className={classnames(styles.sidemenuContainer,{ [styles.active]: openFilter })}>
            <button className={styles.overlay} onClick={() => setOpenFilter(false)} />
            <div className={classnames(styles.sidemenu, 'overflow-y', { [styles.active]: openFilter })}>
              <div className="border-bottom py-1">議席</div>
              <div className="flex-row-parent multiline py-1">
                <div className="halfwidth px-1 mb-1">
                  <button className={styles.filterButton}>新界東</button>
                </div>
                <div className="halfwidth px-1 mb-1">
                  <button className={styles.filterButton}>新界東</button>
                </div>
                <div className="halfwidth px-1 mb-1">
                  <button className={styles.filterButton}>新界東</button>
                </div>
                <div className="halfwidth px-1 mb-1">
                  <button className={styles.filterButton}>新界東</button>
                </div>
              </div>
              <div className="border-bottom py-1">政黨</div>
              <div className="flex-row-parent multiline py-1">
                <div className="halfwidth px-1 mb-1">
                  <button className={styles.filterButton}>新民黨</button>
                </div>
                <div className="halfwidth px-1 mb-1">
                  <button className={styles.filterButton}>民建聯</button>
                </div>
                <div className="halfwidth px-1 mb-1">
                  <button className={styles.filterButton}>工黨</button>
                </div>
                <div className="halfwidth px-1 mb-1">
                  <button className={styles.filterButton}>街工</button>
                </div>
              </div>
            </div>
          </div>
          <div className="p3 fullheight overflow-y">
            <MemberCard index="1" />
            <MemberCard index="2" />
            <MemberCard index="3" />
            <MemberCard index="4" />
            <MemberCard index="5" />
            <MemberCard index="6" />
            <MemberCard index="7" />
            <MemberCard index="8" />
            <MemberCard index="9" />
            <MemberCard index="10" />
            <MemberCard index="11" />
            <MemberCard index="12" />
          </div>
        </div>
      </div>
    </div>
    
  )
}