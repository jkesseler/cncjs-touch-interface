import types from './types';

export function todoLoadSuccess(state, { payload }) {
  const { todos } = payload;
  return state.concat(todos);
}

export function setHost(state, { payload }) {
  const { host } = payload;
  return {
    ...state,
    host,
  };
}

export function connectSuccess(state, { payload }) {
  return {
    ...state,
    connected: true,
  };
}

export function connectFailed(state, { payload }) {
  return {
    ...state,
    connected: false,
  };
}

const initialState = {
  controllerType: 'GRBL',
  connected: false,
  baudrate: 115200,
  userCommands: [],
  workflowState: '',
};

export default function controllerReducer(state = { ...initialState }, action) {
  switch (action.type) {
    case types.CONNECT_SUCCESS:
      return connectSuccess(state, action);

    case types.CONNECT_FAILED:
      return connectFailed(state, action);

    default:
      return state;
  }
}
