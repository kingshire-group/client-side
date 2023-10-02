import React, { Fragment } from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import loginValidationSchema from 'app/components/Form/Validation/loginValidation';
import signUpValidationSchema from 'app/components/Form/Validation/signupValidation';
import { Button as MuiButton, Box as MuiBox } from '@mui/material';
import { Box, Typography, Button, Spacer, Input } from 'app/components/Core';
import { withIcon } from 'app/components/Core/Input/withIcon';
import { Visibility, VisibilityOff } from 'styled-icons/material';
import { IAuthProps } from './types';
import FormControl from '../../Form/FormControl';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { GoogleIcon } from 'assets/images';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

const AuthController = (props: IAuthProps) => {
  const [inputType, setInputType] = React.useState(true);
  let navigate = useNavigate();
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
          <Typography
            color="#3563BB"
            fontSize={11}
            fontStyle="normal"
            fontWeight={7}
            m={0}
            p={0}
          >
            Kings Hire
          </Typography>
          {props.isSignUpPage ? (
            <>
              <Typography
                fontWeight={5}
                color="#000000"
                fontSize={[7, 8, 9]}
                minWidth="100%"
                textAlign={'center'}
              >
                Let’s fill this in...✍️
              </Typography>
              <Typography
                fontWeight={3}
                color="#000000"
                fontSize={[4, 5, 6]}
                minWidth="100%"
                textAlign={'center'}
              >
                In order to kick off your journey with Kings Hire, please
                complete the form below
              </Typography>
            </>
          ) : (
            <Typography
              fontWeight={5}
              color="#000000"
              fontSize={[7, 8, 9]}
              textAlign="left"
              minWidth="100%"
            >
              Let’s get back in....👋
            </Typography>
          )}
          <Spacer mb={4} />
          {props.isSignUpPage ? (
            <Grid container spacing={2}>
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
            </Grid>
          ) : (
            <Box display="flex" flexDirection="column">
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

              <Spacer mb={3} />
              <Button
                loading={props.isAuthLoading}
                type="submit"
                height={['45px']}
                disabled={props.isSubmittingForm}
              >
                {props.isSignUpPage ? 'Sign Up' : 'Log In'}
              </Button>
              {!props.isSignUpPage && (
                <>
                  <Spacer mb={3} />
                  <Divider>or</Divider>
                </>
              )}
            </Box>
          )}
        </Box>
        {props.isSignUpPage ? (
          <MuiBox
            sx={{
              pt: 2,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <MuiButton variant="text" onClick={() => navigate('/login')}>
              Login?
            </MuiButton>
          </MuiBox>
        ) : (
          <MuiBox
            sx={{
              pt: 2,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <IconButton color="inherit" onClick={() => {}} sx={{}}>
              <GoogleIcon width={20} height={20} />
            </IconButton>
            <Typography>
              New to Kings Hire?
              <span>
                <MuiButton variant="text" onClick={() => navigate('/signup')}>
                  Register
                </MuiButton>
              </span>
            </Typography>
            <MuiButton
              sx={{ pt: 2, textAlign: 'end' }}
              variant="text"
              onClick={props.handleToggleIsSignIn}
            >
              Forgot Password?
            </MuiButton>
          </MuiBox>
        )}
      </Form>
    </Formik>
  );
};

export default AuthController;
