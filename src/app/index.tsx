/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme/themes';
import { theme as muiTheme } from 'styles/theme/muiTheme';
import { IRoute } from '../utils/routes/types';
import { routes } from '../utils/routes';
import CustomRoute from './pages/CustomRoute';
import { PageNotFound } from './pages/404';

export function App() {
  const { i18n } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={muiTheme}>
          <BrowserRouter>
            <Helmet
              titleTemplate="%s - Kinglancer"
              defaultTitle="Kinglancer"
              htmlAttributes={{ lang: i18n.language }}
            >
              <meta
                name="description"
                content="A Website For Clients To Hire Freelancers"
              />
            </Helmet>
            <GlobalStyle />
            <Switch>
              {routes.map((route: IRoute) => {
                return <CustomRoute key={uuidv4()} {...route} />;
              })}
              <Route path="/*" render={() => <PageNotFound />} />
            </Switch>
          </BrowserRouter>
        </MUIThemeProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
