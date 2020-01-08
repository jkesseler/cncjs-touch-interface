import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';


import { ReactComponent as MenuIcon } from '@assets/glyphicons/basic/menu.svg';
import { ReactComponent as PlayIcon } from '@assets/glyphicons/basic/play.svg';
import { ReactComponent as PauseIcon } from '@assets/glyphicons/basic/pause.svg';
import { ReactComponent as StopIcon } from '@assets/glyphicons/basic/stop.svg';
import { ReactComponent as CancelIcon } from '@assets/glyphicons/basic/square-remove.svg';

import styles from './Header.module.scss';

const Header = ({
  controllerType,
  controllerState,
  userCommands,
}) => {
  const dropdownItems = [{
    label: 'Homing',
    icon: 'home',
    onClick: () => {},
  }, {
    label: 'Sleep',
    icon: 'bed-sleeping',
    onClick: () => {},
  }, {
    label: 'Unlock',
    icon: 'lock-open',
    onClick: () => { },
  },
  {
    label: 'Reset',
    icon: 'undo',
    onClick: () => { },
  }];


  return (
    <div>
      <Row noGutters>
        <Col className="col-auto">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              <span className="sr-only">Toggle menu </span>
              <MenuIcon className={styles.btnIcon} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {dropdownItems.map(item => <Dropdown.Item onClick={item.onClick} key={item.label}>{item.label}</Dropdown.Item>) }
              {userCommands && (<Dropdown.Divider />)}
              {userCommands.map(item => <Dropdown.Item onClick={item.onClick} key={item.label}>{item.label}</Dropdown.Item>) }
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => { /* TODO: */ }} key="back">Connection</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="mr-auto">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>{controllerType}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl readOnly value={controllerState} />
          </InputGroup>
        </Col>
        <Col className="col-auto">
          <ButtonGroup>
            <Button>
              <span className="sr-only">Start / Resume</span>
              <PlayIcon className={styles.btnIcon} /> {/* <PauseIcon />  TODO: Show based on GRBL status */}
            </Button>
            <Button>
              <span className="sr-only">Stop / Clear</span>
              <StopIcon className={styles.btnIcon} /> {/* <CancelIcon />  TODO: Show based on GRBL status */}
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};

Header.propTypes = {
  controllerType: PropTypes.string.isRequired,
  controllerState: PropTypes.string.isRequired,
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
