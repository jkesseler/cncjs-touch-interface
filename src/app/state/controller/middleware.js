/* eslint no-case-declarations: "off" */
// https://dev.to/aduranil/how-to-use-websockets-with-redux-a-step-by-step-guide-to-writing-understanding-connecting-socket-middleware-to-your-project-km3
import io from 'socket.io-client';
import * as types from './types';

const controllerMiddleware = store => next => (action) => {
  let socket = null;

  switch (action.type) {
    case types.CONNECT_START:
      if (socket !== null) {
        socket.close();
      }

      const { host, token } = action.payload;
      socket = io(host, token);

      socket.on('disconnect', (reason) => {
        if (reason === 'io server disconnect') {
          socket.connect();
        }
      });

      break;

    case types.DISCONNECT:
      if (socket !== null) {
        socket.close();
      }
      break;

    case types.COMMAND:
      const { command } = action.payload;
      if (socket !== null) {
        socket.emit(...command);
      }
      break;

    default:
      next(action); // Pass all actions through by default
      break;
  }
};

export default controllerMiddleware;
