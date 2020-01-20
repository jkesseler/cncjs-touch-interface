import nsKeyMirror from '@utils/ns-keymirror';

const types = nsKeyMirror([
  'CONTROLLER_TYPE',
  'COMMAND',
  'SERIAL_CONNECTED',
  'SERIAL_CONNECT_START',
  'SERIAL_CONNECT_SUCCESS',
  'SERIAL_CONNECT_FAILED',
  'SERIAL_DISCONNECT',
  'WS_CONNECTED',
  'WS_CONNECT_START',
  'WS_CONNECT_SUCCESS',
  'WS_CONNECT_FAILED',
  'WS_DISCONNECT',
  'MACHINE_POSITION',
  'WORK_POSITION',
  'HOST',
  'TOKEN',
  'SETTINGS',
  'BAUDRATE',
  'WORKFLOW_STATE',
], '@@controller');

export default types;
