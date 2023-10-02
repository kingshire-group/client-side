import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { IProps } from './types';
import MainLayout from '../MainLayout';

function PublicPages({ route }: IProps) {
  const location = useLocation();
  const { path, component: Component } = route;
  const token = localStorage.getItem('token');
  const getCorrectLayout = () => {
    if (token) {
      return (
        <Navigate to="/home" replace state={{ from: location.pathname }} />
      );
    }
    return (
      <MainLayout>
        <Component />
      </MainLayout>
    );
  };
  return getCorrectLayout();
}

export default PublicPages;
