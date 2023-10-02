import { ISignUpFormValues } from 'app/pages/SignUpPage/types';
import * as yup from 'yup';

const signUpValidation: yup.ObjectSchema<ISignUpFormValues> = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required('Name is Required')
      .typeError('please enter a valid name'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required')
      .typeError('email should be a string'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .test('confirmPassword', 'Passwords must match', function (value) {
        return this.parent.password === value;
      }),
  });

export default signUpValidation;
