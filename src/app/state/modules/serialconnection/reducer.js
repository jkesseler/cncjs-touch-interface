import initialState from './initialState';
import types from './types';


export default function serialconnectionReducer(state = { ...initialState }, action) {
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
