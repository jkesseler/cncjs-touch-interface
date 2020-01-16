import nsKeyMirror from '@utils/ns-keymirror';

const types = nsKeyMirror([
  'CONTROLLER_TYPE',
  'COMMAND',
  'CONNECTED',
  'CONNECT_START',
  'CONNECT_SUCCESS',
  'CONNECT_FAILED',
  'DISCONNECT',
  'MACHINE_POSITION',
  'WORK_POSITION',
  'HOST',
  'SET_HOST',
  'TOKEN',
  'SET_TOKEN',
  'BAUDRATE',
], '@@controller');

export default types;
