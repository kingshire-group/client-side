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

import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme/theme';

export function App() {
  const { i18n } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
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
          <Route path="/" render={() => <></>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
