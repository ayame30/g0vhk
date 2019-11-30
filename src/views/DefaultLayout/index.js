import React, { useState } from 'react';
import Sidemenu from './Sidemenu';
import styles from './index.module.scss';
// routes config

function DefaultLayout({ children, history }) {
  const [ open, setOpen ] = useState(false);
  return (
    <div className={styles.app}>
      <div className={styles.topbar}>
        <div className="fullheight flex-row-parent flex-center">
          <button onClick={() => setOpen(prev => !prev)} className="flex-70">
            {!open ?
              <i className="fas fa-bars h2 px-3" />
            :
              <i className="fas fa-times h2 px-3" />
            }
          </button>
          <span className="h2 px-1">首頁</span>
        </div>
      </div>
      <main className="main">
        <Sidemenu open={open}/>
        {children}
      </main>
    </div>
  );
}

export default DefaultLayout;