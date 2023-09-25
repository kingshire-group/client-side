import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';
import DefaultLayout from '../DefaultLayout';
import { IProps } from './types';

export function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Authenticated(route: IProps) {
  const { path, component: Component } = route;
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  const getCorrectLayout = props => {
    console.log('------------->', props.path);
    if (token) {
      return (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      );
      // eslint-disable-next-line
    }
    return (
      <Redirect
        // eslint-disable-next-line
        to={{ pathname: '/', state: { from: props.location } }}
      />
    );
  };
  return (
    <>
      <Route exact path={path} render={props => getCorrectLayout(props)} />
    </>
  );
}
