import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer, { middleware } from './modules';

const configureStore = () => {
  const storeMiddleware = [
    thunk,
    ...middleware,
    /* MUST be last in the middleware array */
    logger,
  ];

  const composeEnhancers = composeWithDevTools({
    trace: true,
  });

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...storeMiddleware)),
  );

  return store;
};

export default configureStore;
