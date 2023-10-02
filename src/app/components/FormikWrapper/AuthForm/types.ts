import { ISignInFormValues } from 'app/pages/SignInPage/types';
import { ISignUpFormValues } from 'app/pages/SignUpPage/types';

export type IAuthProps = {
  isSignUpPage?: boolean;
  initialValues: ISignInFormValues | ISignUpFormValues;
  onSubmit: (values: ISignInFormValues | ISignUpFormValues) => void;
  isSubmittingForm: boolean;
  isAuthLoading: boolean;
  handleToggleIsSignIn?: () => void;
};
