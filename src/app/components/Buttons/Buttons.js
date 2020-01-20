// TODO: Replace SwitchButton with something decent
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import styles from './Buttons.module.scss';

const Buttons = () => {
  const [state, setState] = useState({
    spindle: false,
    flood: false,
    mist: false,
  });

  return (
    <div>
      <Row noGutters>
        <Col>
          <Form.Switch
            checked={state.spindle}
            onChange={() => setState({ ...state, spindle: !state.spindle })}
            label="Spindle"
            id="Spindle"
          />
        </Col>
        <Col>
          <Form.Switch
            checked={state.flood}
            onChange={() => setState({ ...state, flood: !state.flood })}
            label="Flood"
            id="Flood"
          />
        </Col>
        <Col>
          <Form.Switch
            checked={state.mist}
            onChange={() => setState({ ...state, mist: !state.mist })}
            label="Mist"
            id="Mist"
          />
        </Col>
      </Row>
    </div>
  );
};

Buttons.propTypes = {};

export default Buttons;
