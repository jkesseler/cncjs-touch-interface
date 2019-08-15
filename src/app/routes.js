import { lazy } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import * as Layouts from './layouts';

const Home = lazy(() => import('./pages/Home'));

const routes = [
  {
    component: Home,
    layout: Layouts.Default,
    path: '/',
    exact: true,
    title: 'Home',
    icon: HomeIcon,
  },
];

export default routes;
