import {
  REQUEST_PROFILES,
  RECEIVE_PROFILES,
  INVALIDATE_PROFILES
} from "../types/profiles";

const initialState = {
  isFetching: false,
  items: [],
  didInvalidate: true
};

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_PROFILES:
      return {
        ...state,
        didInvalidate: true
      };
    case REQUEST_PROFILES:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PROFILES:
      return {
        ...state,
        isFetching: false,
        items: [...action.profiles],
        lastUpdated: action.receivedAt,
        didInvalidate: false
      };
    default:
      return state;
  }
};

export default profiles;
