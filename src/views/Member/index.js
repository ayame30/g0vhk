import React, { useState } from 'react';
import classnames from 'classnames';
import TabBar from 'components/TabBar';
import ImageIcon from 'components/ImageIcon';
import Overview from './Overview';
import Party from './Party';

import styles from './index.module.scss';

export default () => {
  const options = [
    { label: '表現', value: 'overview' },
    { label: '政黨', value: 'party' },
    { label: '背景', value: 'background' },
    { label: '新聞', value: 'news' },
    { label: '表決', value: 'vote' },
    { label: '質詢', value: 'question' },
    { label: '發言', value: 'speech' },
  ];
  const [ value, setValue ] = useState(options[0].value);
  return (
    <div className="flex-column-parent fullheight px-2">
      <div className="flex-row-parent py-2 flex-center">
        <ImageIcon />
        <div className="flex-expand px-2">
          <h3 className=""><b>田北辰</b></h3>
          <p>新民黨</p>
        </div>
        <div className={classnames(styles.constituency, 'flex-100')}>
          <div className="flex-self-center fullwidth">
            <div className="mb h2">
              新界東
            </div>
            <div className="h5">地區直選</div>
          </div>
        </div>
      </div>
      <TabBar options={options} value={value} onChange={setValue} />
      <div className="p flex-expand overflow-y">    
        {value === 'overview'? <Overview /> : null}
        {value === 'party'? <Party /> : null}
      </div>
    </div>
  )
}