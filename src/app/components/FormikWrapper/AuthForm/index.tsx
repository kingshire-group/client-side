import React, { Fragment } from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import loginValidationSchema from 'app/components/Form/Validation/loginValidation';
import signUpValidationSchema from 'app/components/Form/Validation/signupValidation';
import { Button as MuiButton, Box as MuiBox } from '@mui/material';
import { Box, Typography, Button, Spacer, Input } from 'app/components/Core';
import { theme } from 'styles/theme/themes';
import { withIcon } from 'app/components/Core/Input/withIcon';
import { Visibility, VisibilityOff } from 'styled-icons/material';
import { IAuthProps } from './types';
import FormControl from '../../Form/FormControl';
import { useHistory } from 'react-router-dom';

const AuthController = (props: IAuthProps) => {
  const [inputType, setInputType] = React.useState(true);
  let history = useHistory();
  const handleInputType = () => {
    setInputType(!inputType);
  };
  const PasswordInput = withIcon(() => (
    <Input
      tabIndex={0}
      control="input"
      name="password"
      type={inputType ? 'password' : 'text'}
      placeholder="Password"
      variant="filled"
    />
  ));
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={
        props.isSignUpPage ? signUpValidationSchema : loginValidationSchema
      }
      onSubmit={values => props.onSubmit(values)}
    >
      <Form>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={71}
          px={[3, null]}
          height="auto"
        >
          <Box width={[7, 8, 9]} height={[9, 10, 11]}>
            <img
              // src={require('../../../../assets/images/Asset5.png')}
              alt="Kingshire logo"
              width="100%"
              height="100%"
            />
          </Box>
          <Spacer mb={3} />
          {props.isSignUpPage ? (
            <Typography fontWeight={5} color="#000000" fontSize={[6, 7, 8]}>
              Sign Up&nbsp;
              <span style={{ color: theme.colors.primary.main }}>
                Kinglancer.
              </span>
            </Typography>
          ) : (
            <Typography fontWeight={5} color="#000000" fontSize={[6, 7, 8]}>
              Login to&nbsp;
              <span style={{ color: theme.colors.primary.main }}>
                Kinglancer.
              </span>
            </Typography>
          )}
          <Spacer mb={4} />
          <Box display="flex" flexDirection="column">
            {props.isSignUpPage && (
              <Fragment>
                <Typography>Full Name</Typography>
                <Spacer mb={2} />
                <FormControl
                  control="input"
                  name="fullName"
                  placeholder="John Doe"
                  variant="filled"
                />
                <ErrorMessage name="fullName">
                  {msg => (
                    <Typography fontWeight={3} color="red" fontSize="11px">
                      {msg}
                    </Typography>
                  )}
                </ErrorMessage>
              </Fragment>
            )}
            <Fragment>
              <Typography>Email Address</Typography>
              <Spacer mb={2} />
              <FormControl
                control="input"
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                variant="filled"
              />
              <ErrorMessage name="email">
                {msg => (
                  <Typography fontWeight={3} color="red" fontSize="11px">
                    {msg}
                  </Typography>
                )}
              </ErrorMessage>
            </Fragment>
            <Spacer mb={2} />
            <Fragment>
              <Typography> Password</Typography>
              <Spacer mb={2} />
              <PasswordInput
                icon={inputType ? VisibilityOff : Visibility}
                handleInputType={handleInputType}
                inputName="password"
              />
              <ErrorMessage name="password">
                {msg => (
                  <Typography fontWeight={3} color="red" fontSize="11px">
                    {msg}
                  </Typography>
                )}
              </ErrorMessage>
            </Fragment>
            {props.isSignUpPage && (
              <Fragment>
                <Typography>Confirm Password</Typography>
                <Spacer mb={2} />
                <PasswordInput
                  icon={inputType ? VisibilityOff : Visibility}
                  handleInputType={handleInputType}
                  inputName="confirmPassword"
                />
                <ErrorMessage name="confirmPassword">
                  {msg => (
                    <Typography fontWeight={3} color="red" fontSize="11px">
                      {msg}
                    </Typography>
                  )}
                </ErrorMessage>
              </Fragment>
            )}
            {!props.isSignUpPage && (
              <MuiBox
                sx={{
                  pt: 2,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <MuiButton variant="text" onClick={props.handleToggleIsSignIn}>
                  Forgot Password?
                </MuiButton>
              </MuiBox>
            )}
            {props.isSignUpPage ? (
              <MuiBox
                sx={{
                  pt: 2,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <MuiButton
                  variant="text"
                  onClick={() => history.push('/login')}
                >
                  Login?
                </MuiButton>
              </MuiBox>
            ) : (
              <MuiBox
                sx={{
                  pt: 2,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <MuiButton
                  variant="text"
                  onClick={() => history.push('/signup')}
                >
                  Don't have account register?
                </MuiButton>
              </MuiBox>
            )}
            <Spacer mb={2} />
            <Button
              loading={props.isAuthLoading}
              type="submit"
              height={['45px']}
              disabled={props.isSubmittingForm}
            >
              {props.isSignUpPage ? 'Sign Up' : 'Log In'}
            </Button>
            <Spacer mb={3} />
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};

export default AuthController;
