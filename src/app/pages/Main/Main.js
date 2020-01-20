/**
 * The main screen will be like cncjs-pendant-tinyweb
 * GRBL status display
 * Reset / Unlock / Home / Sleep buttons
 * Mpos / WPos display
 * Feed Hold / Resume button
 * Jog buttons / Zero axis buttons / Jog distance slider
 * Cycle Start / Pause [Stop / Clear ] buttons
 * Spindle enable / disable [Toggle buttons: https://zeevy.github.io/grblcontroller/file-streaming-panel.html]
 */
import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '@ui/Header';
import JogControls from '@ui/JogControls';
import DRO from '@ui/DRO';
import Buttons from '@ui/Buttons';

const Main = ({
  controllerType, userCommands, workflowState, onJog,
}) => (
  <Container fluid>
    <Row>
      <Col className="mt-3">
        <Header
          controllerType={controllerType}
          workflowState={workflowState}
          userCommands={userCommands}
        />
      </Col>
    </Row>
    <Row>
      <Col className="mt-3">
        <DRO />
      </Col>
      <Col xs={12} sm={6} className="mt-3">
        <JogControls onJog={onJog} />
      </Col>
    </Row>
    <Row>
      <Col className="mt-3">
        {/* TODO: Add buttonClick function */}
        <Buttons />
      </Col>
    </Row>
  </Container>
);

Main.propTypes = {
  ...Header.propTypes,
  onJog: PropTypes.func.isRequired,
};


export default Main;
