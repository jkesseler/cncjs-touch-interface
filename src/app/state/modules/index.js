// https://github.com/tayiorbeii/egghead.io_idiomatic_redux_course_notes/blob/master/10-Colocating_Selectors_with_Reducers.md
import { combineReducers } from 'redux';
import controller, * as fromController from './controller';
import serialConnection, * as fromSerialConnection from './serialconnection';

const rootReducer = combineReducers({
  controller,
  serialConnection,
});

export const middleware = [
  // fromController.middleware,
  fromSerialConnection.middleware,
];

export const getControllerType = state => fromController.getControllerType(state.controller);

export default rootReducer;
