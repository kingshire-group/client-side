/**
 *
 * SignInPage
 *
 */
import * as React from 'react';
import styled from 'styled-components';
import AuthController from 'app/components/FormikWrapper/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'app/components/Core';
import { theme } from 'styles/theme/themes';
import { useHistory } from 'react-router-dom';
import { useDefaultLayoutSlice } from '../DefaultLayout/slice';
import { selectDefaultLayoutState } from '../DefaultLayout/slice/selectors';
import { signUpFormInitialValues } from './constants';
import { ISignUpFormValues } from './types';

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

export function SignUpPage(_props: Props) {
  const { actions } = useDefaultLayoutSlice();
  const dispatch = useDispatch();
  const signingUpState = useSelector(selectDefaultLayoutState);
  const history = useHistory();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      history.push('/home');
    }
  }, [signingUpState.user]);

  const onSignUpSubmit = (values: ISignUpFormValues) => {
    dispatch(actions.signupUser(values));
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
        <AuthController
          isAuthLoading={signingUpState.isSigningUp}
          isSubmittingForm={signingUpState.isSigningUp}
          onSubmit={onSignUpSubmit}
          initialValues={signUpFormInitialValues}
          isSignUpPage
        />
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
