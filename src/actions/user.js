import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from "../types/user";

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});
export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user
});
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST
});
export const logoutSuccess = user => ({
  type: LOGOUT_SUCCESS,
  user
});
const loginUser = () => dispatch => {
  dispatch(loginRequest());
  return setTimeout(() => {
    dispatch(loginSuccess({ email: "test@example.com", password: "password" }));
  },2000);
};
const logoutUser = () => dispatch => {
  dispatch(logoutRequest());
  return setTimeout(() => {
    dispatch(
      logoutSuccess({ email: "test@example.com", password: "password" })
    );
  },2000);
};
const shouldLogin = state => {
  return true;
};
const shouldLogout = state => {
  return true;
};
export const loginUserIfNeeded = () => (dispatch, getState) => {
  if (shouldLogin(getState())) {
    return dispatch(loginUser());
  }
};
export const logoutUserIfNeeded = () => (dispatch, getState) => {
  if (shouldLogout(getState())) {
    return dispatch(logoutUser());
  }
};
