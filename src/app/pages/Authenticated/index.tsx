import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import DefaultLayout from '../DefaultLayout';
import { IProps } from './types';

export default function Authenticated(route: IProps) {
  const { component: Component } = route;
  const token = localStorage.getItem('token');
  const location = useLocation();
  const getCorrectLayout = () => {
    if (token) {
      return (
        <DefaultLayout>
          <Component />
        </DefaultLayout>
      );
      // eslint-disable-next-line
    }
    return <Navigate to="/home" replace state={{ from: location.pathname }} />;
  };
  return getCorrectLayout();
}
