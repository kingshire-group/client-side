import React from 'react';
import { IRoute } from '../../../utils/routes/types';
import Authenticated from '../Authenticated';
import PublicPages from '../PublicPages';

export default function CustomRoute(route: IRoute) {
  let body: any = null;
  if (route.isAuthenticated) {
    body = <Authenticated path={route.path} component={route.component} />;
  } else {
    body = <PublicPages route={route} />;
  }
  return <>{body}</>;
}
