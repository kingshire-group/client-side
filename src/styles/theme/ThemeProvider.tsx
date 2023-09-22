import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { useThemeSlice } from './slice';
import { selectTheme } from './slice/selectors';
import { theme } from 'utils/theme/theme';
export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useThemeSlice();

  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
