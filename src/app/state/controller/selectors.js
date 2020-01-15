export const workflowState = state => state.controller.workflowState;
export const userCommands = state => state.controller.userCommands;

export default function slice(state) {
  return state.controller;
}
