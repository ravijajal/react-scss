import {
  REQUEST_RAFFLES,
  RECEIVE_RAFFLES,
  INVALIDATE_RAFFLES
} from "../types/raffles";

const initialState = {
  isFetching: false,
  items: [],
  didInvalidate: true
};

const raffles = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_RAFFLES:
      return {
        ...state,
        didInvalidate: true
      };
    case REQUEST_RAFFLES:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_RAFFLES:
      return {
        ...state,
        isFetching: false,
        items: action.raffles,
        lastUpdated: action.receivedAt,
        didInvalidate: false
      };
    default:
      return state;
  }
};

export default raffles;
