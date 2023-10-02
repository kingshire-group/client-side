import { PayloadAction } from '@reduxjs/toolkit';
import routes from 'app/API/api.routes';
import makeCall from 'app/API/makeCalls';
import { IUserModel } from 'app/Model/user';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getFromLocalStorage, setToLocalStorage } from 'utils/localStorage';
import { IForgetPassword, ISignInFormValues } from 'app/pages/SignInPage/types';
import { ISignUpFormValues } from 'app/pages/SignUpPage/types';
import { defaultLayoutActions as actions } from '.';

function* handleUserPersist(token?: string) {
  const _token = yield call(getFromLocalStorage);
  if (!_token) {
    yield call(setToLocalStorage, token);
  }
}

function* signInUserSaga(action: PayloadAction<ISignInFormValues>) {
  try {
    const client: IUserModel = yield call(makeCall, {
      isSecureRoute: false,
      method: 'POST',
      route: routes.user.login,
      body: action.payload,
    });
    if (client?._id) {
      yield put(actions.setIsLoginError(false));
      yield call(handleUserPersist, client.token);
      yield put(actions.setUser(client));
    } else {
      throw new Error();
    }
  } catch (error: any) {
    yield put(actions.setIsSigningIn(false));
    yield put(actions.setIsLoginError(true));
  }
}

function* forgetPasswordSaga(action: PayloadAction<IForgetPassword>) {
  try {
    const { email } = action.payload;
    const response: any = yield call(makeCall, {
      method: 'POST',
      isSecureRoute: true,
      route: routes.user.forgetPassword,
      body: { email },
    });
    if (response) {
      yield put(actions.setIsForgetPasswordLoading(false));
    }
  } catch (error: any) {
    yield put(actions.setIsForgetPasswordLoading(false));
  }
}

function* getUserAccountSaga() {
  try {
    const user: IUserModel = yield call(makeCall, {
      isSecureRoute: true,
      method: 'GET',
      route: routes.user.getAccount,
    });

    if (user?._id) {
      yield call(handleUserPersist, user.token);
      yield put(actions.setUser(user));
      yield put(actions.setIsSigningIn(false));
    } else {
      throw new Error();
    }
  } catch (error: any) {
    if (error?.status === 401) {
      yield put(actions.clearUser());
    }
    yield put(actions.setIsSigningIn(false));
  }
}

function* signUpUserSaga(action: PayloadAction<ISignInFormValues>) {
  try {
    const user: IUserModel = yield call(makeCall, {
      isSecureRoute: true,
      method: 'POST',
      route: routes.user.signup,
      body: action.payload,
    });

    if (user?._id) {
      yield call(handleUserPersist, user.token);
      yield put(actions.setUser(user));
      yield put(actions.setIsSigningUp(false));
    } else {
      throw new Error();
    }
  } catch (error: any) {
    if (error?.status === 401) {
      yield put(actions.clearUser());
    }
    yield put(actions.setIsSigningUp(false));
  }
}

export function* defaultLayoutSaga() {
  yield takeLatest(actions.signinUser.type, signInUserSaga);
  yield takeLatest(actions.signupUser.type, signUpUserSaga);
  yield takeLatest(actions.getUserFromToken.type, getUserAccountSaga);
  yield takeLatest(actions.forgetPassword.type, forgetPasswordSaga);
}

export function* rootSaga() {
  yield all([defaultLayoutSaga()]);
  // code after all-effect
}
