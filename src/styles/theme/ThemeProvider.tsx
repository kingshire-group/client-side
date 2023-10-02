import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useThemeSlice } from './slice';
import { theme } from './themes';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useThemeSlice();

  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
