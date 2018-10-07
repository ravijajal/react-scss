import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from "../types/user";

const initialState = {
  isLogging: false,
  item: {},
  isLoggedIn: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLogging: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        item: action.user,
        isLoggedIn: true,
        isLogging: false
      };
    case LOGOUT_SUCCESS:
    return {
      ...initialState
    }
    default:
      return state;
  }
};
export default user;