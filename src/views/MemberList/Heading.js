import React from 'react';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import styles from './index.module.scss';

const Sorting = ({ name, onClick, activeName, ascending, label }) => {
  let className = 'fas fa-sort';
  if (name === activeName) {
    className = ascending ? 'fas fa-sort-up' : 'fas fa-sort-down';
  }
  const onSort = () => {
    if (name !== activeName) {
      onClick(name, true);
    } else {
      onClick(name, !ascending);
    }
  }
  return (
    <button onClick={onSort} className={styles.sortButton}>
      <b>{label}</b>
      <i className={classnames(className, 'pl-1')} />
    </button>
  );
}


function Heading({ onChange, ascending, sortingBy }) {  
  return (
    <Row className={styles.tableHeading}>
      <Col className={classnames('text-center', styles.flexFixed)}><i className="icon-people" /></Col>
      <Col className={styles.flexExpand}>
        <Sorting name="name" onClick={onChange} activeName={sortingBy} ascending={ascending} label="議員姓名" />
      </Col>
      <Col className={styles.flexFixed}>
        <Sorting name="attendanceRate" onClick={onChange} activeName={sortingBy} ascending={ascending} label="出席率" />
      </Col>
      <Col className={styles.flexFixed}>
        <Sorting name="lastAction" onClick={onChange} activeName={sortingBy} ascending={ascending} label="最近表決" />
      </Col>
    </Row>
  );
}

export default Heading;
