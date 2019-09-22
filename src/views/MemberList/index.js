import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { Badge, Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import { findByArea } from 'api/searchResult';
import areaConstant from 'constants/area';
import actionConstant from 'constants/action';
import Heading from './Heading';
import styles from './index.module.scss';

function MemberList({ history, match }) {
  const { area } = match.params;
  const [ result, setResult ] = useState([]);
  const [ sortingBy, setSortingBy ] = useState('name');
  const [ ascending, setAscending ] = useState(true);
  
  const areaName = areaConstant.find(a => a.id === area).label;
  const onSortingChange = (name, ascending) => {
    setAscending(ascending);
    setSortingBy(name);
  }
  useEffect(() => {
    findByArea(area).then(setResult);
  }, [area]);
  
  return (
    <div className={styles.root}>
      <Breadcrumb>
        <BreadcrumbItem active><Link to="/">主頁</Link></BreadcrumbItem>
        <BreadcrumbItem active>{areaName}</BreadcrumbItem>
      </Breadcrumb>
      <Heading ascending={ascending} sortingBy={sortingBy} onChange={onSortingChange} />
      <div className={styles.list}>
        {result
          .sort((a, b) => {
            return a[sortingBy].localeCompare(b[sortingBy]) * (ascending ? 1 : -1);
          })
          .map(r => (
            <Row className={classnames('pointer', styles.tableRow)} onClick={() => history.push(`/members/${r.id}`)}>
              <Col className={classnames('text-center', styles.flexFixed)}>
                <div className={styles.avatar} style={{ backgroundImage: `url(${r.avatar})`}} />
              </Col>
              <Col classnames={styles.flexExpand}>
                <div className={classnames('py-0 h4')}>{r.name}</div>
                {r.party ?
                  <div className="small mb-1">
                    <i className="flag-icon flag-icon-us h6 mb-0" title="us" id="us"></i>
                    <span className="h6 px-1">
                      {r.party}
                    </span>
                  </div> : null}
              </Col>
              <Col className={styles.flexFixed}>
                <strong>{r.attendance}</strong>
              </Col>
              <Col className={classnames('h4', styles.flexFixed)}>
                <Badge className={styles[r.lastAction]}>
                  <i className={classnames('mr-2', actionConstant[r.lastAction].iconClass)} />
                  {actionConstant[r.lastAction].label}
                </Badge>
              </Col>
            </Row>
          ))}
      </div>
    </div>
  );
}

export default withRouter(MemberList);
