import React, { Fragment } from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import { Box, Typography, Button, Spacer } from 'app/components/Core';
import { Box as MuiBox, Button as MuiButton } from '@mui/material';
import { IForgetPassword } from 'app/pages/SignInPage/types';
import forgetPasswordValidationSchema from 'app/components/Form/Validation/ForgetPasswordValidation';
import { IForgetPasswordProps } from './types';
import FormControl from '../../Form/FormControl';

const ForgetPasswordController = (props: IForgetPasswordProps) => {
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={forgetPasswordValidationSchema}
      onSubmit={(values: IForgetPassword) => props.onSubmit(values)}
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
            {/* <img
              src={require('../../../../assets/images/Asset5.png')}
              alt="Kingshire logo"
              width="100%"
              height="100%"
            /> */}
          </Box>
          <Spacer mb={3} />
          <Typography fontWeight={5} color="#000000" fontSize={[6, 7, 8]}>
            Please Enter Your Email
          </Typography>
          <Spacer mb={4} />
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
            <MuiBox
              sx={{
                pt: 2,
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <MuiButton variant="text" onClick={props.handleToggleIsSignIn}>
                login
              </MuiButton>
            </MuiBox>
            <Spacer mb={2} />
            <Button
              loading={props.isLoadingForgetPassword}
              type="submit"
              height={['45px']}
              disabled={props.isLoadingForgetPassword}
            >
              Send Recovery Email
            </Button>
            <Spacer mb={3} />
          </Box>
        </Box>
      </Form>
    </Formik>
  );
};

export default ForgetPasswordController;
