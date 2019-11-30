import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Card, CardBody, Row } from 'reactstrap';
import renderHTML from 'react-render-html';
import Avatar from 'components/Avatar';
import { speech } from 'api/member';
import styles from './Speech.module.scss';

function Speech({ history, member }) {
  const [ speechList, setSpeechList ] = useState([]);
  useEffect(() => {
    speech(member.id)
      .then(setSpeechList);
  }, [ member ]);
  return (
    <div className={classnames('animated fadeIn', styles.root)}>
      {speechList.map(item => (
        <Row key={item.id}>
          <div className={styles.avatarCol}>
            <Avatar
              className={classnames('sm circle', styles.img)}
              src={member.avatar}
            />
          </div>
          <div className={styles.speechCol}>
            <Card className={classnames(styles.card)}>
              <CardBody className={classnames(styles.vote)}>
                <span>
                  <h4>{item.title}</h4>
                  {renderHTML(item.contentHtml)}
                </span>
                <span className="float-right text-right">
                  <small>{item.date}</small>
                </span>
              </CardBody>
            </Card>
          </div>
        </Row>
      ))}
    </div>
  );
}

export default Speech;
