import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './app/theme/default';
// import configureStore from './app/state';
import AppRouter from './app/router';
import routes from './app/routes';

// const storeInstance = configureStore();

const Application = (
  /* <Provider store={storeInstance}> */
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <AppRouter routes={routes} />
    </BrowserRouter>
  </ThemeProvider>
  /* </Provider> */
);

const root = document.querySelector('#root');
ReactDOM.render(Application, root);
