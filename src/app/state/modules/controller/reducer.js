import types from './types';


export function setHost(state, { payload }) {
  const { host } = payload;
  return {
    ...state,
    host,
  };
}


const initialState = {
  controllerTypes: ['GRBL', 'TinyG', 'Marlin', 'Smoothie'],
  controllerType: 'GRBL',
  connecting: false,
  connected: false,
  baudrate: 115200,
  userCommands: [],
  workflowState: '',
  baudrates: [1200, 1250600],
  ports: ['dev/null', 'dev/ttyAMA0'],
};

export default function controllerReducer(state = { ...initialState }, action) {
  switch (action.type) {
    case types.SERIAL_CONNECT_START:
    case types.SERIAL_CONNECT_SUCCESS:
      return ({
        ...state,
        ...action.payload,
      });


    default:
      return state;
  }
}
