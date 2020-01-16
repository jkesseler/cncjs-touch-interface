import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import controllerReducer, { middleware as controllerMiddleware } from './controller';

const rootReducer = combineReducers({
  controller: controllerReducer,
});

const configureStore = () => {
  const middleware = [
    thunk,
    controllerMiddleware,
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
