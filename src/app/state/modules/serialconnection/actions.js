import types from './types';


export const fetchPorts = () => ({
  type: types.FETCH_PORTS.START,
});

export const fetchBaudrates = () => ({
  type: types.FETCH_BAUDRATES.START,
});
