import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Card, CardBody, Row } from 'reactstrap';
import Avatar from 'components/Avatar';
import { voteHistory } from 'api/member';
import styles from './Speech.module.scss';

function Speech({ history, member }) {
  const [ voteHistories, setVoteHistories ] = useState([]);
  useEffect(() => {
    voteHistory(member.id)
      .then(setVoteHistories);
  }, [ member ]);
  return (
    <div className={classnames('animated fadeIn', styles.container)}>
      {voteHistories.map(h => (
        <Row>
          <div className={styles.avatarCol}>
            <Avatar
              className={classnames('sm circle', styles.img)}
              src={member.avatar}
            />
          </div>
          <div className={styles.speechCol}>
            <Card className={classnames(styles.card, styles[h.voteResult])}>
              <CardBody className={classnames(styles.vote)}>
                <span>
                  <h4>{h.name}</h4>
                  <p>
                    足進中度市，別自分業聞家間該是，性清所民國現示生小了，他中消配一事有我林來先，大很得時爭己白自坐機外小。房燈西常低要生無歡中見口？事成報，了空民明當開過一來那量北的就的辦科？於子是心意他你樣明麼來唱河。
                  </p>
                  <p>
                    只場如不……就還月作物產常水。
                  </p>
                </span>
                <span className="float-right text-right">
                  <small>{h.date}</small>
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
