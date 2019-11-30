import React from 'react';

export default () => {
  return (
    <div className="p2 overflow-y fullheight">
      <article>
        <h3><b>現時職務</b></h3>
        <div className="py-2">
          <div className="flex-row-parent flex-center">
            <span className="flex-100 text-right p2 py-1 h6">現時政黨</span>
            <span className="flex-expand h3 p2 py-1"><b>實政圓桌</b></span>
          </div>
          <div className="flex-row-parent flex-center">
            <span className="flex-100 text-right p2 py-1 h6">黨內職務</span>
            <span className="flex-expand h3 p2 py-1"><b>召集人</b></span>
          </div>
        </div>
      </article>
      <article>
        <h3>
          <b>參黨歷史</b>
        </h3>
        <div className="py-2">
          <div className="flex-row-parent flex-center">
            <span className="flex-100 text-right p2 py-1"><b>2017 八月至今</b></span>
            <span className="flex-expand h3 p2 py-1">退出新民黨，創立實政圓桌</span>
          </div>
          <div className="flex-row-parent flex-center">
            <span className="flex-100 p2 py-1"><b>2016 七月</b></span>
            <span className="flex-expand h3 p2 py-1">連任新界西地區直選議員</span>
          </div>
        </div>
      </article>
    </div>
  )
}
