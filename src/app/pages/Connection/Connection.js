import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';


const Connection = ({
  controllerTypes, ports, baudrates, onConnect, connecting = false,
}) => {
  const [state, setState] = useState({
    port: null,
    baudrate: 0,
    controllerType: null,
  });

  const handleConnect = () => {
    const { port, baudrate, controllerType } = state;
    // TODO: ensure values are set
    onConnect({ port, baudrate, controllerType });
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          { connecting && <span>Connecting ...</span>}
          <Form>
            <Form.Group>
              <ToggleButtonGroup
                aria-label="Controller Type"
                name="controllerType"
                type="radio"
                onChange={type => setState({ ...state, controllerType: type })}
              >
                {controllerTypes.map(type => (
                  <ToggleButton key={type} name={type} value={type}>
                    { type }
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Port</Form.Label>
              <Form.Control as="select" onChange={e => setState({ ...state, port: e.target.value })}>
                {ports.map(p => <option value={p} key={p}>{p}</option>)}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>baudrate</Form.Label>
              <Form.Control as="select" onChange={e => setState({ ...state, baudrate: e.target.value })}>
                {baudrates.map(b => <option value={b} key={b}>{b}</option>)}
              </Form.Control>
            </Form.Group>
            <Button type="button" onClick={handleConnect}>Connect</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

Connection.prototypes = {
  baudrates: PropTypes.arrayOf(PropTypes.number).isRequired,
  controllerTypes: PropTypes.string.isRequired,
  ports: PropTypes.arrayOf(PropTypes.string).isRequired,
  onConnect: PropTypes.func.isRequired,
  connecting: PropTypes.bool,
};


export default Connection;
