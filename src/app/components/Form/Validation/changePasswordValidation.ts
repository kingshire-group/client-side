import * as yup from 'yup';

const changePasswordValidationSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
  confirmPassword: yup
    .string()
    .test('confirmPassword', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});

export default changePasswordValidationSchema;
