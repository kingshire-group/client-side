import { ISignInFormValues } from 'app/pages/SignInPage/types';
import * as yup from 'yup';

const loginValidationSchema: yup.ObjectSchema<ISignInFormValues> = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required')
      .typeError('email should be a string'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

export default loginValidationSchema;
