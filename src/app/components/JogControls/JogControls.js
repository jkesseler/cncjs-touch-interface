import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

import { ReactComponent as Arrow } from '@assets/glyphicons/basic/arrow-thin-up.svg';

import styles from './JogControls.module.scss';

const JogControls = () => {
  const [distance, setDistance] = useState(1);

  const handleSlide = (render, handle, value, un, percent) => {
    if (value >= 10) {
      setDistance(value[0].toFixed(0));
    } else if (value >= 1) {
      setDistance(value[0].toFixed(1));
    } else {
      setDistance(value[0].toFixed(3));
    }
  };

  return (
    <div>
      <Row noGutters>
        <Col className="col-auto mr-auto">
          <div className={styles.gridXy}>
            <div className={styles.col} />

            <Button variant="success" className={[styles.col, styles.btnSquare]}>
              <span className={styles.btnLabel}>Y+</span>
              <Arrow className={styles.btnIcon} />
            </Button>

            <div className={styles.col} />

            <Button variant="success" className={[styles.col, styles.btnSquare]}>
              <span className={styles.btnLabel}>X-</span>
              <Arrow className={styles.btnIcon} style={{ transform: 'rotate(-90deg)' }} />
            </Button>

            <div className={styles.col} />

            <Button variant="success" className={[styles.col, styles.btnSquare]}>
              <span className={styles.btnLabel}>X-</span>
              <Arrow className={styles.btnIcon} style={{ transform: 'rotate(90deg)' }} />
            </Button>

            <div className={styles.col} />

            <div className={styles.col}>
              <Button variant="success" className={styles.btnSquare}>
                <span className={styles.btnLabel}>Y-</span>
                <Arrow className={styles.btnIcon} style={{ transform: 'rotate(180deg)' }} />
              </Button>
            </div>
            <div className={styles.col} />
          </div>
        </Col>
        <Col className="col-auto">
          <div className={styles.gridZ}>
            <Button variant="success" className={[styles.col, styles.btnSquare]}>
              <span className={styles.btnLabel}>Z+</span>
              <Arrow className={styles.btnIcon} />
            </Button>

            <div className={styles.col} />

            <Button variant="success" className={[styles.col, styles.btnSquare]}>
              <span className={styles.btnLabel}>Z-</span>
              <Arrow className={styles.btnIcon} style={{ transform: 'rotate(180deg)' }} />
            </Button>
          </div>
        </Col>
      </Row>
      <Row noGutters className="mt-3">
        <Col className="p-2">
          <Nouislider
            connect
            start={1}
            behaviour="tap-drag"
            range={{
              min: [0.001],
              '20%': [0.5, 0.1],
              '40%': [1, 0.5],
              '60%': [10, 5],
              '80%': [150, 10],
              max: [500],
            }}
            onSlide={handleSlide}
          />
        </Col>
        <Col xs={3} md={3}>
          <FormControl size="sm" value={`${distance} MM`} readOnly />
        </Col>
      </Row>
    </div>
  );
};

JogControls.prototypes = {
};

export default JogControls;
