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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '@ui/Header';
import JogControls from '@ui/JogControls';
import DRO from '@ui/DRO';
import Buttons from '@ui/Buttons';

const userCommands = [{
  label: 'Shutdown',
  icon: 'square-triangle-right',
  onClick: () => { },
}, {
  label: 'Reboot',
  icon: 'square-triangle-right',
  onClick: () => {},
}];

const Main = () => (
  <Container fluid>
    <Row>
      <Col className="mt-3">
        <Header controllerType="GRBL" controllerState="idle" userCommands={userCommands} />
      </Col>
    </Row>
    <Row>
      <Col className="mt-3">
        <DRO />
      </Col>
      <Col xs={12} sm={6} className="mt-3">
        <JogControls />
      </Col>
    </Row>
    <Row>
      <Col className="mt-3">
        <Buttons />
      </Col>
    </Row>
  </Container>

);


export default Main;
