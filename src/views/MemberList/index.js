import React, { useEffect, useState } from 'react';
import { findByArea } from 'api/searchResult';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import areaConstant from 'constants/area';

import {
  Badge,
  Table,
} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function MemberList({ history, match }) {
  const { area } = match.params;
  const [ result, setResult ] = useState([]);
  
  const areaName = areaConstant.find(a => a.id === area).label;
  
  useEffect(() => {
    findByArea(area).then(setResult);
  }, [area]);
  
  return (
    <div className="animated fadeIn bg-white">
      <Breadcrumb>
        <BreadcrumbItem active><Link to="/">主頁</Link></BreadcrumbItem>
        <BreadcrumbItem active>{areaName}</BreadcrumbItem>
      </Breadcrumb>
      <Table hover responsive className="table-outline mb-0 d-sm-table">
        <thead className="thead-light">
        <tr>
          <th className="text-center"><i className="icon-people"></i></th>
          <th>議員姓名</th>
          <th className="text-center">出席率</th>
          <th className="text-center">最近表決</th>
        </tr>
        </thead>
        <tbody>
          {result.map(r => (
            <tr className="pointer" onClick={() => history.push(`/members/${r.id}`)}>
              <td className="text-center">
                <div className="avatar">
                  <img src={r.avatar} className="img-avatar" alt={r.name}/>
                </div>
              </td>
              <td>
                <div className="py-0 h4">{r.name}</div>
                <div className="small mb-1">
                  <i className="flag-icon flag-icon-us h6 mb-0" title="us" id="us"></i>
                  <span className="h6 px-1">
                    {r.party}
                  </span>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <strong>{r.attendance}</strong>
                </div>
              </td>
              <td className="text-center h4">
                <Badge color="danger">{r.lastAction}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default withRouter(MemberList);
