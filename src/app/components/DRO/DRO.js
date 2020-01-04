import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from './DRO.module.scss';

const DRO = () => (
  <div>
    <Row noGutters>
      <Col>
        <div className={styles.grid}>
          <div className={styles.col}>
            Axis
          </div>
          <div className={styles.col}>
            Machine pos.
          </div>
          <div className={styles.col}>
            Work pos.
          </div>
          <div className={styles.col}>
            <Button variant="info" className={styles.btnSquare}>
              <span className="text-shadow">X</span>
              <span className={styles.btnLabel}>zero</span>
            </Button>
          </div>
          <div className={styles.col}>
            1.001
          </div>
          <div className={styles.col}>
            2.222
          </div>
          <div className={styles.col}>
            <Button variant="info" className={styles.btnSquare}>
              <span className="text-shadow">Y</span>
              <span className={styles.btnLabel}>zero</span>
            </Button>
          </div>
          <div className={styles.col}>
            10.001
          </div>
          <div className={styles.col}>
            20.222
          </div>
          <div className={styles.col}>
            <Button variant="info" className={styles.btnSquare}>
              <span className="text-shadow">Z</span>
              <span className={styles.btnLabel}>zero</span>
            </Button>
          </div>
          <div className={styles.col}>
            10.001
          </div>
          <div className={styles.col}>
            20.222
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

DRO.prototypes = {
};

export default DRO;
