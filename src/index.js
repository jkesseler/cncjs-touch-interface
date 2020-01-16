import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './app/state';
import AppRouter from './app/router';
import routes from './app/routes';
import './index.scss';

// const token = getToken();
const storeInstance = configureStore();

const Application = (
  <Provider store={storeInstance}>
    <BrowserRouter>
      <AppRouter routes={routes} />
    </BrowserRouter>
  </Provider>
);

const root = document.querySelector('#root');
const reactapp = document.createElement('div');
root.appendChild(reactapp);

ReactDOM.render(Application, reactapp);
