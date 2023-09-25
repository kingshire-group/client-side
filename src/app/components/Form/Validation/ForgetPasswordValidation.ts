import * as yup from 'yup';

const forgetPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required')
    .typeError('email should be a string'),
});

export default forgetPasswordValidationSchema;
