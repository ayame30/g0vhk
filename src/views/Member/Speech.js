import React from 'react';
import { withRouter } from 'react-router';
import classnames from 'classnames';
import styles from './index.module.scss';

function Member({ history, match }) {


  return (
    <div className={classnames('animated fadeIn row', styles.info)}>
      Speech
    </div>
  );
}

export default withRouter(Member);
