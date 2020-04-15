import initialState from './initialState';
import types from './types';

export function setHost(state, { payload }) {
  const { host } = payload;
  return {
    ...state,
    host,
  };
}

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

// Selectors
export const getControllerType = state => state.getControllerType;
