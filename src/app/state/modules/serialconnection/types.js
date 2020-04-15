import nsKeymirror from '@utils/ns-keymirror';

const asyncTypes = ['START', 'SUCCESS', 'FAILED'];

const types = nsKeymirror({
  CONNECTION_STATUS: null,
  FETCH_BAUDRATE: asyncTypes,
  FETCH_PORTS: asyncTypes,
}, '@@serialconnection');

export default types;
