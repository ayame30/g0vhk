import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import classnames from 'classnames';
import { Badge, Card, CardBody } from 'reactstrap';
import actionConstant from 'constants/action';
import voteResultConstant from 'constants/voteResult';
import Avatar from 'components/Avatar';
import { voteHistory } from 'api/member';
import styles from './Votes.module.scss';

function Member({ history, member }) {
  const [ voteHistories, setVoteHistories ] = useState([]);
  useEffect(() => {
    voteHistory(member.id)
      .then(setVoteHistories);
  }, [ member ]);
  return (
    <div className={classnames('animated fadeIn', styles.root)}>
      {voteHistories.map(h => (
        <Card className={classnames(styles.card, styles[h.voteResult])}>
          <CardBody className={classnames(styles.vote)}>
            <span>
              <h4>{h.name}</h4>
              {h.voteResult ?
                <h5>
                  <Badge className={styles.voteResultBadge}>
                    <i className={classnames('far mr-1', voteResultConstant[h.voteResult].iconClass)} />
                    {voteResultConstant[h.voteResult].label}
                  </Badge>
                </h5>
                : null }
            </span>
            <span className="float-right text-right">
              <small>{h.date}</small>
              <div className={styles.memberVote}>
                <Avatar
                  className={classnames('sm circle', styles.img)}
                  src={member.avatar}
                />
                <h3 className={classnames(styles.badge, styles[h.action])}>
                  <Badge color="primary">
                    <span>
                      <i className={classnames('mr-2', actionConstant[h.action].iconClass)} />
                      {actionConstant[h.action].label}
                    </span>
                  </Badge>
                </h3>
              </div>
            </span>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default withRouter(Member);
