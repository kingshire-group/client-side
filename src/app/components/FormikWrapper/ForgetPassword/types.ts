import { IForgetPassword } from 'app/pages/SignInPage/types';

export interface IForgetPasswordProps {
  initialValues: IForgetPassword;
  onSubmit: (values: IForgetPassword) => void;
  isLoadingForgetPassword: boolean;
  handleToggleIsSignIn: () => void;
}
