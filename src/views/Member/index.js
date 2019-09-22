import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Avatar from 'components/Avatar';
import getMember from 'api/member';
import { Badge, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import classnames from 'classnames';
import Tabs from './Tabs';
import styles from './index.module.scss';

function Member({ history, match }) {
  const { id } = match.params;
  const [ member, setMember ] = useState({});
  
  useEffect(() => {
    getMember(id).then(setMember);
  }, [id]);
  
  return (
    <div className={styles.root}>
      <Breadcrumb>
        <BreadcrumbItem active><Link to="/">主頁</Link></BreadcrumbItem>
        <BreadcrumbItem active><Link to="/area/ke">九龍東</Link></BreadcrumbItem>
        <BreadcrumbItem active>{member.name}</BreadcrumbItem>
      </Breadcrumb>
      <div className={classnames('animated fadeIn bg-white row', styles.info)}>
        <Avatar src={member.avatar} />
        <div className={classnames('col', styles.topLine)}>
          <div className={classnames('row justify-content-between', styles.topLineFlex)}>
            <div className={styles.infoText}>
              <h3>{member.name} <h6>{member.name_en}</h6></h3>
              <div>政黨: {member.party}</div>
              {member.tags ?
                <div className={classnames(styles.tags)}>
                  <div>分類: 
                    {member.tags.map(t => <h5><Badge color="primary">{t}</Badge></h5>)}
                  </div>
                </div>
              : null} 
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className={styles.statNumber}>
            <span className={styles.number}>{member.attendanceRate}%</span>
            <span className={styles.label}>出席率</span>
          </div>
          <div className={styles.statNumber}>
            <span className={styles.number}>{member.voteRate}%</span>
            <span className={styles.label}>投票率</span>
          </div>
        </div>
      </div>
      <Tabs id={id} member={member} />
    </div>
  );
}

export default withRouter(Member);
