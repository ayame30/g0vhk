import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Card, CardBody, Row } from 'reactstrap';
import { news } from 'api/member';
import styles from './News.module.scss';

function News({ history, member }) {
  const [ newsList, setNewsList ] = useState([]);
  useEffect(() => {
    news(member.id)
      .then(setNewsList);
  }, [ member ]);
  return (
    <div className={classnames('animated fadeIn', styles.root)}>
      {newsList.map(item => (
        <Row>
          <Card className={styles.card}>
            <CardBody className={classnames(styles.vote)}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <h4>{item.title}</h4>
              </a>
              <div>{item.source} {item.date}</div>
            </CardBody>
          </Card>
        </Row>
      ))}
    </div>
  );
}

export default News;
