import { IForgetPassword, ISignInFormValues } from './types';

export const signInFormInitialValues: ISignInFormValues = {
  email: '',
  password: '',
};

export const forgetPasswordInitialValues: IForgetPassword = {
  email: '',
};
