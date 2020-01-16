import types from './types';

export const connect = (host, token) => ({
  type: types.CONNECT_START,
  payload: {
    host,
    token,
  },
});

export const connectSucces = () => ({
  type: types.CONNECT_SUCCESS,
  payload: {
    connected: true,
  },
});

export const connectFailed = error => ({
  type: types.CONNECT_FAILED,
  payload: {
    connected: false,
  },
  error: true,
});

/*
  command(['cyclestart'])
  command(['gcode', 'G0X0Y0']);
  command(['macro:load', '<macro-id>', { optional vars }, callback] )
*/
export const command = commandToSend => ({
  type: types.COMMAND,
  payload: {
    command: commandToSend,
  },
});
