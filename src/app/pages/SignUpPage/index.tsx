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
import { useNavigate } from 'react-router-dom';
import { useDefaultLayoutSlice } from '../DefaultLayout/slice';
import { selectDefaultLayoutState } from '../DefaultLayout/slice/selectors';
import { signUpFormInitialValues } from './constants';
import { ISignUpFormValues } from './types';
import { signUpImage } from 'assets/images';
import { ImageContainer } from '../SignInPage';

interface Props {}

export function SignUpPage(_props: Props) {
  const { actions } = useDefaultLayoutSlice();
  const dispatch = useDispatch();
  const signingUpState = useSelector(selectDefaultLayoutState);
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home');
    }
  }, [signingUpState.user]);

  const onSignUpSubmit = (values: ISignUpFormValues) => {
    dispatch(actions.signupUser(values));
  };

  return (
    <Box display="flex" flex={1} pt={[null, 5]}>
      <ImageContainer>
        <Box
          display="flex"
          width={[null, 260, 340, 453]}
          height={[null, 240, 320, 420]}
        >
          <Image width="100%" height="100%" src={signUpImage} />
        </Box>
      </ImageContainer>
      <Box
        display="flex"
        bg={'#ffffff'}
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        <AuthController
          isAuthLoading={signingUpState.isSigningUp}
          isSubmittingForm={signingUpState.isSigningUp}
          onSubmit={onSignUpSubmit}
          initialValues={signUpFormInitialValues}
          isSignUpPage
        />
      </Box>
    </Box>
  );
}
