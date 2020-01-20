/* eslint no-case-declarations: "off" */
import controller from 'app/CNCJSController';
import types from './types';
import * as actions from './actions';

function wsConnect(store, { host, token }) {
  const options = `token=${token}`;
  controller.connect(host, options, () => {
    store.dispatch(actions.WSConnectSucces());
  });
}

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


const controllerMiddleware = store => next => (action) => {
  next(action); // Always pass through all actions to next handler

  switch (action.type) {
    case types.WS_CONNECT_START:
      wsConnect(store, { ...action.payload });
      break;


    case types.SERIAL_CONNECT_START:
      serialConnect(store, { ...action.payload });
      break;

    // register event listeners
    default:
      controller.addListener('workflow:state', (worflowState) => {
        store.dispatch(actions.workflowState(worflowState));
      });

      controller.addListener('controller:settings', (type, settings) => {
        store.dispatch(actions.settings(type, settings));
      });
      break;
  }
};

export default controllerMiddleware;
