import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

export default ({ open }) => {
  const [ search, setSearch ] = useState('');
  return (
      <div className={classnames(styles.sidemenu, {[styles.open]: open})}>
        <div className={classnames(styles.input, 'flex-row-parent flex-center')}>
          <i class="fas fa-search p2 flex-50 text-center"></i>
          <input placeholder="議員／議案" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <div className={classnames(styles.menu, 'py-2')}>
          <button className="fullwidth flex-row-parent flex-center h3">
            <i className="fas fa-home p2 flex-50 text-center"></i>
            <div className="">首頁</div>
          </button>
          <button className="fullwidth flex-row-parent flex-center h3">
            <i className="fas fa-book p2 flex-50 text-center"></i>
            <div className="">法案</div>
          </button>
          <button className="fullwidth flex-row-parent flex-center h3">
            <i className="fas fa-user-tie p2 flex-50 text-center"></i>
            <div className="">議員</div>
          </button>
          <button className="fullwidth flex-row-parent flex-center h3">
            <i className="fas fa-users p2 flex-50 text-center"></i>
            <div className="">政黨</div>
          </button>
          <button className="fullwidth flex-row-parent flex-center h3">
            <i className="fas fa-star p2 flex-50 text-center"></i>
            <div className="">小遊戲</div>
          </button>
        </div>
      </div>
  );
}