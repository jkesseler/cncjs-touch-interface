import React, { lazy } from 'react';

const Main = lazy(() => import('./pages/Main'));
const Mdi = lazy(() => import('./pages/Mdi'));
const Connection = lazy(() => import('./pages/Connection'));

const routes = [
  {
    component: Main,
    path: '/',
    exact: true,
    title: 'Main',
    icon: () => <span>TODO</span>,
  },
  {
    component: Mdi,
    path: '/mdi',
    exact: true,
    title: 'MDI',
    icon: () => <span>TODO</span>,
  },
  {
    component: Connection,
    path: '/connection',
    exact: true,
    title: 'Connection',
    icon: () => <span>TODO</span>,
  },
];

export default routes;
