import { IUserModel } from 'app/Model/user';

export interface IPagination {
  pageNo: number;
  size: number;
}

export interface IDefaultLayoutState {
  isSigningIn: boolean;
  isLoginError: boolean;
  isLoadingForgetPassword: boolean;
  isSigningUp: boolean;
  isSignupError: boolean;
  user?: IUserModel;
}
