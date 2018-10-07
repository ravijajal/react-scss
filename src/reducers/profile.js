import {
  REQUEST_PROFILE,
  RECEIVE_PROFILE,
  INVALIDATE_PROFILE
} from "../types/profiles";

const initialState = {
  isFetching: false,
  item: null,
  didInvalidate: true
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_PROFILE:
      return {
        ...state,
        didInvalidate: true
      };
    case REQUEST_PROFILE:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PROFILE:
      return {
        ...state,
        isFetching: false,
        item: action.profile,
        lastUpdated: action.receivedAt,
        didInvalidate: false
      };
    default:
      return state;
  }
};

export default profile;
