/**
 * The main screen will be like cncjs-pendant-tinyweb
 * GRBL status display
 * Reset / Unlock / Home / Sleep buttons
 * Mpos / WPos display
 * Feed Hold / Resume button
 * Jog buttons / Zero axis buttons / Jog distance slider
 * Cycle Start / Pause [Stop / Clear ] buttons
 * Spindle enable / disable [Toggle buttons: https://lh3.googleusercontent.com/j2iiOMf06jpLovy8Z4IwbnZJh5fetu1TqjqoQ84ltZWNKf7DdHAKLMs-19QZU-StGF4=w1920-h985-rw]
 */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '@ui/Header';
import JogControls from '@ui/JogControls';
import DRO from '@ui/DRO';

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
      <Col>
        <Header controllerType="GRBL" controllerState="idle" userCommands={userCommands} />
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6}>
        <JogControls />
      </Col>
      <Col>
        <DRO />
      </Col>
    </Row>
  </Container>

);


export default Main;
