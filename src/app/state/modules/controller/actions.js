import types from './types';

export const WSConnectStart = ({ host, token }) => ({
  type: types.WS_CONNECT_START,
  payload: {
    connected: false,
    host,
    token,
  },
});

export const WSConnectSucces = () => ({
  type: types.WS_CONNECT_SUCCESS,
  payload: {
    connected: true,
    connecting: false,
  },
});

export const WSConnectFailed = error => ({
  type: types.WS_CONNECT_FAILED,
  payload: {
    connected: false,
  },
  error: true,
});


export const serialConnectStart = ({ port, baudrate, controllerType }) => ({
  type: types.SERIAL_CONNECT_START,
  payload: {
    port, baudrate, controllerType,
  },
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

export const workflowState = wfState => ({
  type: types.WORKFLOW_STATE,
  payload: {
    workflowState: wfState,
  },
});


export const settings = (type, controllerSettings) => ({
  type: types.SETTINGS,
  payload: {
    type,
    controllerSettings,
  },
});
