import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import FAIcon from '@ui/FAIcon';

import styles from './Header.module.scss';

const Header = ({
  controllerType,
  workflowState,
  userCommands,
}) => {
  const dropdownItems = [{
    label: 'Homing',
    icon: <FAIcon icon="home" size="1x" className="mr-2" />,
    onClick: () => {},
  }, {
    label: 'Sleep',
    icon: <FAIcon icon="bed" size="1x" className="mr-2" />,
    onClick: () => {},
  }, {
    label: 'Unlock',
    icon: <FAIcon icon="unlock" size="1x" className="mr-2" />,
    onClick: () => { },
  },
  {
    label: 'Reset',
    icon: <FAIcon icon="undo" size="1x" className="mr-2" />,
    onClick: () => { },
  }];


  return (
    <div>
      <Row noGutters>
        <Col className="col-auto">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              <span className="sr-only">Toggle menu </span>
              <FAIcon icon="bars" size="1x" className={styles.btnIcon} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {dropdownItems.map(item => (
                <Dropdown.Item
                  className={styles.dropdownItem}
                  onClick={item.onClick}
                  key={item.label}
                >
                  {item.icon && item.icon} <span>{item.label}</span>
                </Dropdown.Item>
              ))}

              {userCommands && (<Dropdown.Divider />)}
              {userCommands.map(item => <Dropdown.Item onClick={item.onClick} key={item.label}>{item.label}</Dropdown.Item>) }

              <Dropdown.Divider />
              <Dropdown.Item onClick={() => { /* TODO: */ }} key="connection">
                <FAIcon icon="link" size="1x" className="mr-2" />
                <span>Connection</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="mr-auto">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>{controllerType}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl readOnly value={workflowState} />
          </InputGroup>
        </Col>
        <Col className="col-auto">
          <ButtonGroup>
            <Button>
              <span className="sr-only">Start / Resume</span>
              <FAIcon icon="play" size="1x" className={styles.btnIcon} /> {/* TODO: Show based on GRBL status */}
            </Button>
            <Button>
              <span className="sr-only">Stop / Clear</span>
              <FAIcon icon="stop" size="1x" className={styles.btnIcon} /> {/*  TODO: Cancel button (times) */}
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};

Header.propTypes = {
  controllerType: PropTypes.string.isRequired,
  workflowState: PropTypes.string.isRequired,
  userCommands: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  })),
};

Header.defaultProps = {
  userCommands: [],
};

export default Header;
