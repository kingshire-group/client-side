/**
 *
 * SignInPage
 *
 */
import * as React from 'react';
import styled from 'styled-components';
import AuthController from 'app/components/FormikWrapper/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Image } from 'app/components/Core';
import { theme } from 'styles/theme/themes';
import { useHistory } from 'react-router-dom';
import ForgetPasswordController from 'app/components/FormikWrapper/ForgetPassword';
import { useDefaultLayoutSlice } from '../DefaultLayout/slice';
import {
  selectDefaultLayoutState,
  selectIsForgetPasswordLoading,
} from '../DefaultLayout/slice/selectors';
import {
  forgetPasswordInitialValues,
  signInFormInitialValues,
} from './constants';
import { IForgetPassword, ISignInFormValues } from './types';

interface Props {}

const ImageContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;

  ${theme.mediaQueries.sm} {
    display: flex;
    width: 50%;
  }
  ${theme.mediaQueries.md} {
    display: flex;
    width: 50%;
  }
  ${theme.mediaQueries.lg} {
    display: flex;
    width: 60%;
  }
`;

export function SignInPage(_props: Props) {
  const { actions } = useDefaultLayoutSlice();
  const dispatch = useDispatch();
  const signingInState = useSelector(selectDefaultLayoutState);
  const isForgetPasswordLoading = useSelector(selectIsForgetPasswordLoading);
  const history = useHistory();
  const [isSignIn, setIsSignIn] = React.useState(true);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      history.push('/home');
    }
  }, [signingInState.user]);

  const onLoginInSubmit = (values: ISignInFormValues) => {
    dispatch(actions.signinUser(values));
  };

  const onForgetPasswordSubmit = (values: IForgetPassword) => {
    dispatch(actions.forgetPassword(values));
  };

  const handleToggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <Box display="flex" flex={1}>
      <Box
        display="flex"
        bg={'#ffffff'}
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        {isSignIn ? (
          <AuthController
            isAuthLoading={signingInState.isSigningIn}
            isSubmittingForm={signingInState.isSigningIn}
            onSubmit={onLoginInSubmit}
            initialValues={signInFormInitialValues}
            handleToggleIsSignIn={handleToggleSignIn}
          />
        ) : (
          <ForgetPasswordController
            isLoadingForgetPassword={isForgetPasswordLoading}
            initialValues={forgetPasswordInitialValues}
            onSubmit={onForgetPasswordSubmit}
            handleToggleIsSignIn={handleToggleSignIn}
          />
        )}
      </Box>
      <ImageContainer>
        <Box
          display="flex"
          width={[null, 280, 360, 576]}
          height={[null, 260, 340, 533]}
        ></Box>
      </ImageContainer>
    </Box>
  );
}
