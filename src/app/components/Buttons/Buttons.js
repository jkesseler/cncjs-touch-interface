import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SwitchButton from 'bootstrap-switch-button-react';

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
          <SwitchButton
            checked={state.spindle}
            offlabel="Spindle"
            offstyle="success"
            onchange={() => setState({ ...state, spindle: !state.spindle })}
            onlabel="Spindle"
            onstyle="danger"
            width="100"
            size="sm"
          />
        </Col>
        <Col>
          <SwitchButton
            checked={state.spindle}
            offlabel="Flood"
            offstyle="success"
            onchange={() => setState({ ...state, flood: !state.flood })}
            onlabel="Flood"
            onstyle="danger"
            width="100"
            size="sm"
          />
        </Col>
        <Col>
          <SwitchButton
            checked={state.spindle}
            offlabel="Mist"
            offstyle="success"
            onchange={() => setState({ ...state, mist: !state.mist })}
            onlabel="Mist"
            onstyle="danger"
            width="100"
            size="sm"
          />
        </Col>
      </Row>
    </div>
  );
};

Buttons.propTypes = {};

export default Buttons;
