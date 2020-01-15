import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import configureStore from './app/state';
import AppRouter from './app/router';
import routes from './app/routes';
import './index.scss';

// const token = getToken();
// const storeInstance = configureStore();

const Application = (
  <BrowserRouter>
    <AppRouter routes={routes} />
  </BrowserRouter>
);

const root = document.querySelector('#root');
const reactapp = document.createElement('div');
root.appendChild(reactapp);

ReactDOM.render(Application, reactapp);
