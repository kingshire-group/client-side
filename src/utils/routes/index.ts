import { Home } from 'app/pages/HomePage';
import { SignUpPage } from 'app/pages/SignUpPage';
import { SignInPage } from 'app/pages/SignInPage';
import { IRoute } from './types';

export const routes: IRoute[] = [
  {
    path: '/login',
    component: SignInPage,
    isAuthenticated: false,
    exact: true,
  },
  {
    path: '/signup',
    component: SignUpPage,
    isAuthenticated: false,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    isAuthenticated: true,
    exact: true,
  },
];
