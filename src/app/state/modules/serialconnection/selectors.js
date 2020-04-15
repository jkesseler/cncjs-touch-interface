export const baudrates = state => state.controller.baudrates;
export const connecting = state => state.controller.connecting;
export const controllerTypes = state => state.controller.controllerTypes;
export const isConnected = state => state.controller.isConnected;
export const ports = state => state.controller.ports;
export const slice = state => state.controller;

export default slice;
