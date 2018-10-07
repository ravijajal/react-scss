import {
  REQUEST_TOURNAMENTS,
  RECEIVE_TOURNAMENTS,
  INVALIDATE_TOURNAMENTS
} from "../types/tournaments";

const initialState = {
  isFetching: false,
  items: [],
  didInvalidate: true
};

const tournaments = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_TOURNAMENTS:
      return {
        ...state,
        didInvalidate: true
      };
    case REQUEST_TOURNAMENTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_TOURNAMENTS:
      return {
        ...state,
        isFetching: false,
        items: action.tournaments,
        lastUpdated: action.receivedAt,
        didInvalidate: false
      };
    default:
      return state;
  }
};

export default tournaments;
