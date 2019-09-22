import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import NumberHighlight from 'components/NumberHighlight';
import Avatar from 'components/Avatar';
import styles from './Background.module.scss';

function Member({ member }) {
  const [ openModal, setOpenModal ] = useState(false);
  const toggle = () => {
    setOpenModal(prev => !prev);
  }
  return (
    <div className={styles.root}>
      <section>
        <Row>
          <Col className="p-1">
            <NumberHighlight
              loading={false}
              amount={member.attendanceRate}
              unit="%"
              title="出席率"
              color="secondary"
            />
          </Col>
          <Col className="p-1">
            <NumberHighlight
              loading={false}
              amount={member.voteRate}
              unit="%"
              title="投票率"
              color="primary"
            />
          </Col>
          <Col className="p-1">
            <NumberHighlight
              loading={false}
              amount={member.questionRate}
              unit="%"
              title="質詢率"
              color="info"
            />
          </Col>
        </Row>
        <Row>
          <Col className="p-1"><NumberHighlight loading={false} amount={member.speechCount} unit="次" title="發言" color="warning" /></Col>
          <Col className="p-1"><NumberHighlight loading={false} amount={member.amendmentCount} unit="次" title="提出修正案" color="primary" /></Col>
        </Row>
      </section>
      <section>
        <h5>投票意向相似之議員</h5>
        <div className={styles.relative}>
          <Link to="/"><Avatar src={member.avatar} className="sm" /><div>{member.name}</div></Link>
          <Link to="/"><Avatar src={member.avatar} className="sm" /><div>{member.name}</div></Link>
          <Link to="/"><Avatar src={member.avatar} className="sm" /><div>{member.name}</div></Link>
          <Link to="/"><Avatar src={member.avatar} className="sm" /><div>{member.name}</div></Link>
        </div>
      </section>
      <section>
        <Row>
          <Col className="p-0">
            <h5>公職</h5>
            <ul>
              <li>專責委員會副主席</li>
              <li>專責委員會副主席</li>
              <li>專責委員會副主席</li>
            </ul>
          </Col>
          <Col className="p-0">
            <h5>委員會職務</h5>
            <ul>
              <li>專責委員會副主席</li>
              <li>專責委員會副主席</li>
              <li>專責委員會副主席</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <h5>私人職務</h5>
            <ul>
              <li>專責委員會副主席</li>
              <li>專責委員會副主席</li>
              <li>專責委員會副主席</li>
            </ul>
          </Col>
        </Row>
      </section>
      <section>
        <h5>履歷</h5>
        <p>2008年，取得香港大學法律專業證書（PCLL）後，申請成為律政司見習律政人員（Legal Trainee），接受實習大律師的訓練。2009年，成為執業大律師，於駱應淦律師行工作[3]，其授業師父為蔡維邦資深大律師。

  從事法律工作以外，亦曾嘗試不同領域範疇的工作，包括擔任香港城市大學兼職導師；《模擬法庭比賽計劃》導師；網絡電台D100《風波裡的茶杯》、《龍鳳大茶樓》、《三師雜會》、《公民聚義》節目主持人；報章《am730》「都爹利橋」、《852郵報》「岳少有橋」[4]、《明報》「法政隨筆」及《E週刊》專欄作家。</p>
      </section>
      <section>
        <h5>辦公室地址</h5>
        <div>地址: ...</div>
        <div>電郵: hello@hello.com</div>
        <div>電話: 23382338</div>
      </section>
      <div className={styles.reference}>
        <button onClick={toggle}>資料來源</button>
      </div>
      <Modal isOpen={openModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>資料來源</ModalHeader>
        <ModalBody>
          <ul>
            <li><a href="/" target="_blank">Reference list here</a></li>
            <li><a href="/" target="_blank">Reference list here</a></li>
            <li><a href="/" target="_blank">Reference list here</a></li>
            <li><a href="/" target="_blank">Reference list here</a></li>
          </ul>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default withRouter(Member);
