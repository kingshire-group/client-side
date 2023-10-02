/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { IUserModel } from 'app/Model/user';
import { IForgetPassword, ISignInFormValues } from 'app/pages/SignInPage/types';
import { ISignUpFormValues } from 'app/pages/SignUpPage/types';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { rootSaga } from './saga';
import { IDefaultLayoutState } from './type';

export const initialState: IDefaultLayoutState = {
  isSigningIn: false,
  isLoadingForgetPassword: false,
  isLoginError: false,
  user: undefined,
  isSigningUp: false,
  isSignupError: false,
};
const defaultLayoutSlice = createSlice({
  name: 'defaultLayoutState',
  initialState,
  reducers: {
    forgetPassword(state, action: PayloadAction<IForgetPassword>) {
      state.isLoadingForgetPassword = true;
    },
    setIsForgetPasswordLoading(state, action: PayloadAction<boolean>) {
      state.isLoadingForgetPassword = action.payload;
    },
    signupUser(state, action: PayloadAction<ISignUpFormValues>) {
      state.isSigningUp = true;
    },
    setIsSigningUp(state, action: PayloadAction<boolean>) {
      state.isSigningUp = action.payload;
    },
    setIsSignUpError(state, action: PayloadAction<boolean>) {
      state.isSignupError = action.payload;
    },
    signinUser(state, action: PayloadAction<ISignInFormValues>) {
      state.isSigningIn = true;
    },
    setIsSigningIn(state, action: PayloadAction<boolean>) {
      state.isSigningIn = action.payload;
    },
    setIsLoginError(state, action: PayloadAction<boolean>) {
      state.isLoginError = action.payload;
    },
    setUser(state, action: PayloadAction<IUserModel>) {
      state.user = action.payload;
      state.isSigningIn = false;
    },
    getUserFromToken(state) {
      state.isSigningIn = true;
    },
    clearUser(state) {
      state.user = undefined;
    },
  },
});

export const { actions: defaultLayoutActions } = defaultLayoutSlice;

export const useDefaultLayoutSlice = () => {
  useInjectReducer({
    key: defaultLayoutSlice.name,
    reducer: defaultLayoutSlice.reducer,
  });
  useInjectSaga({ key: defaultLayoutSlice.name, saga: rootSaga });
  return { actions: defaultLayoutSlice.actions };
};
