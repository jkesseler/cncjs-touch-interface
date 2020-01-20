import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import controllerReducer, { middleware as controllerMiddleware } from './modules/controller';

const rootReducer = combineReducers({
  controller: controllerReducer,
});

const configureStore = () => {
  const middleware = [
    thunk,
    controllerMiddleware,

    // /* MUST be last in the middleware array */
    logger,
  ];

  const composeEnhancers = composeWithDevTools({
    trace: true,
  });

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  return store;
};

export default configureStore;
