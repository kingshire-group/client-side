import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IProps } from './types';
import MainLayout from '../MainLayout';

function PublicPages({ route }: IProps) {
  const { path, component: Component } = route;
  const token = localStorage.getItem('token');
  const getCorrectLayout = props => {
    if (token) {
      return <Redirect to={{ pathname: '/' }} />;
    }
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };
  return (
    <>
      <Route exact path={path} render={props => getCorrectLayout(props)} />
    </>
  );
}

export default PublicPages;
