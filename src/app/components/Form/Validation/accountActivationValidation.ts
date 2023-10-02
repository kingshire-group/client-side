import * as yup from 'yup';

const accountActivationValidationSchema = yup.object().shape({
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

export default accountActivationValidationSchema;
