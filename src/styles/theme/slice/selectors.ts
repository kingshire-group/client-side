import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

export const selectTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  () => {},
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  () => {},
);
