/* eslint no-case-declarations: "off" */
import controller from 'app/CNCJSController';
import types from './types';
import * as actions from './actions';


function serialConnect(store, { port, baudrate, controllerType }) {
  const options = {
    baudRate: baudrate,
    path: port,
  };

  // TODO: socket connections
  controller.open(controllerType, 'serial', options, () => {
    store.dispatch(actions.serialConnectSucces());
  });
}

const serialconnectionMiddleware = store => next => (action) => {
  next(action); // Always pass through all actions to next handler

  switch (action.type) {
    case types.SERIAL_CONNECT.START:
      serialConnect(store, { ...action.payload });
      break;

    default:
      // TODO:
      break;
  }
};

export default serialconnectionMiddleware;
