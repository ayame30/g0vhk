import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import onClickOutside from "react-onclickoutside";
import classnames from 'classnames';
import searchResult from 'api/searchResult';

import {
  Input,
  Table,
} from 'reactstrap';
import styles from './SearchInput.module.scss';


function SearchInput({ history }) {
  const [ keyword, setKeyword ] = useState('');
  const [ showResult, setShowResult ] = useState(false);
  const [ result, setResult ] = useState([]);

  SearchInput.handleClickOutside = () => setShowResult(false);
  
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
    setShowResult(true);
  }
  const onFocus = () => setShowResult(true);
  
  useEffect(() => {
    if (keyword.length < 1) {
      setShowResult(false);
      setResult([]);
      return;
    }
    searchResult(keyword)
      .then(setResult);
  }, [keyword])
  
  return (
    <div className={styles.root}>
      <Input
        className={styles.input}
        placeholder="議員名稱"
        size="lg" value={keyword}
        onChange={onChangeKeyword}
        onFocus={onFocus}
      />
      <i className={classnames('fas fa-search', styles.icon)} />
      <div className={classnames(styles.searchResultWrapper, { 'd-none': !showResult })}>
        <div className={styles.searchResult}>
          <Table hover responsive className="table-outline mb-0 d-sm-table">
            <tbody>
              {result.map(member => <Row member={member} key={`member-${member.id}`} />)}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

const Row = withRouter(({ member, history }) => {
  return (
    <tr
      onClick={() => history.push(`/members/${member.id}`)}
      className="pointer ignore-react-onclickoutside"
    >
      <td className="text-center">
        <div className="avatar">
          <div
            style={{ backgroundImage: `url(${member.avatar})`}}
            className={styles.avatar}
            alt={member.name}
          />
        </div>
      </td>
      <td>
        <h5>{member.name}</h5>
      </td>
    </tr>
  )
})

const clickOutsideConfig = {
  handleClickOutside: () => SearchInput.handleClickOutside,
};
 
 
export default onClickOutside(SearchInput, clickOutsideConfig);
