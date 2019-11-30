import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

const vote = <i className={classnames('fas fa-check-circle', styles.vote)} />;
const vote2 = <i className={classnames('fas fa-circle', styles.vote)} />;
const vote3 = <i className={classnames('fas fa-times-circle', styles.vote)} />;

export default () => {
  const options = [
    { label: '按議席', value: 'constituency'},
    { label: '按政黨', value: 'party'},
  ]
  const [ sort, setSort ] = useState(options[0].value);

  
  return (
    <div>
      <div className="py-1 flex-row-parent">
        <div><span>排序</span><span className="arrow-right" /></div>
        {options.map((opt) => (
          <button
            key={opt.value}
            className={classnames(styles.sortButton, {[styles.active]: opt.value === sort})}
            onClick={() => setSort(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {sort === 'constituency' ?
        <div className="flex-column-parent">
          <div className={classnames('flex-row-parent p2', styles.resultRow)}>
            <div className="flex-100 flex-self-center">表決結果</div>
            <div className="flex-expand flex-self-center">通過</div>
            <div className="flex-100 flex-self-center"><b>田北辰</b> 主持</div>
          </div>
          <div className={classnames('flex-row-parent p2', styles.resultRow)}>
            <div className="flex-100 flex-self-center">地區直選</div>
            <div className="flex-expand flex-self-center">
              {vote2}{vote3}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}{vote}
            </div>
            <div className="flex-100 flex-row-parent multiline flex-self-center">
              <span>21 贊成</span>
              <span>21 贊成</span>
              <span>21 贊成</span>
              <span>21 贊成</span>
            </div>
          </div>
          <div className={classnames('flex-row-parent p2', styles.resultRow)}>
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
        </div> : null}
      {sort === 'party' ?
        <div className="flex-column-parent">
          <div className={classnames('flex-column-parent p2')}>
            <div className="flex-row-parent py-2">
              <div className="flex-expand flex-self-center">政黨</div>
              <div className="flex-50 text-center">贊成</div>
              <div className="flex-50 text-center">反對</div>
              <div className="flex-50 text-center">棄權</div>
              <div className="flex-50 text-center">缺席</div>
            </div>
            <div className="flex-row-parent py-2">
              <div className="flex-expand flex-self-center">民主黨</div>
              <div className="flex-50 text-center">5</div>
              <div className="flex-50 text-center">0</div>
              <div className="flex-50 text-center">0</div>
              <div className="flex-50 text-center">2</div>
            </div>
            <div className="flex-row-parent py-2">
              <div className="flex-expand flex-self-center">自由黨</div>
              <div className="flex-50 text-center">4</div>
              <div className="flex-50 text-center">0</div>
              <div className="flex-50 text-center">0</div>
              <div className="flex-50 text-center">0</div>
            </div>
            <div className="flex-row-parent py-2">
              <div className="flex-expand flex-self-center">民建聯</div>
              <div className="flex-50 text-center">3</div>
              <div className="flex-50 text-center">2</div>
              <div className="flex-50 text-center">2</div>
              <div className="flex-50 text-center">2</div>
            </div>
            <div className="flex-row-parent py-2">
              <div className="flex-expand flex-self-center">街工</div>
              <div className="flex-50 text-center">2</div>
              <div className="flex-50 text-center">0</div>
              <div className="flex-50 text-center">0</div>
              <div className="flex-50 text-center">2</div>
            </div>
            <div className="flex-row-parent py-2">
              <div className="flex-expand flex-self-center">人民力量</div>
              <div className="flex-50 text-center">0</div>
              <div className="flex-50 text-center">4</div>
              <div className="flex-50 text-center">4</div>
              <div className="flex-50 text-center">0</div>
            </div>
              
          </div>
        </div> : null}
    </div>
  )
}