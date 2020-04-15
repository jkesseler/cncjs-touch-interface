import types from './types';

// dispatched from middleware
export const workflowState = wfState => ({
  type: types.WORKFLOW_STATE,
  payload: {
    workflowState: wfState,
  },
});

// dispatched from middleware
export const settings = (type, controllerSettings) => ({
  type: types.SETTINGS,
  payload: {
    type,
    controllerSettings,
  },
});
