import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) =>
  state?.defaultLayoutState || initialState;

export const selectDefaultLayoutState = createSelector(
  [selectSlice],
  state => state,
);

export const selectIsLoginError = createSelector(
  [selectDefaultLayoutState],
  state => state.isLoginError,
);

export const selectIsForgetPasswordLoading = createSelector(
  [selectDefaultLayoutState],
  state => state.isLoadingForgetPassword,
);
