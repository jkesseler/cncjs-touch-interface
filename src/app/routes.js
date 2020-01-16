import React, { lazy } from 'react';
import FaIcon from '@ui/FAIcon';

const Main = lazy(() => import('./pages/Main'));
const Mdi = lazy(() => import('./pages/Mdi'));
const Connection = lazy(() => import('./pages/Connection'));

const routes = [{
  component: Main,
  path: '/',
  exact: true,
  title: 'Main',
  icon: <FaIcon icon="home" />,
}, {
  component: Mdi,
  path: '/mdi',
  exact: true,
  title: 'MDI',
  icon: () => <FaIcon icon="keyboard" />,
}, {
  component: Connection,
  path: '/connection',
  exact: true,
  title: 'Connection',
  icon: () => <FaIcon icon="route" />,
},
];

export default routes;
