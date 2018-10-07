import {
  REQUEST_RAFFLES,
  RECEIVE_RAFFLES,
  INVALIDATE_RAFFLES
} from "../types/raffles";
import { getRaffles } from "../services/raffles.service";

export const invalidateRaffles = () => ({
  type: INVALIDATE_RAFFLES
});

export const requestRaffles = () => ({
  type: REQUEST_RAFFLES
});

export const receiveRaffles = json => ({
  type: RECEIVE_RAFFLES,
  raffles: json.data.children.map(child => child.data),
  receivedAt: Date.now()
});

const fetchRaffles = () => dispatch => {
  dispatch(requestRaffles());
  return getRaffles()
    .then(json => dispatch(receiveRaffles(json.data)));
    
};

const shouldFetchRaffles = state => {
  const raffles = state.raffles;
  if (!raffles) {
    return true;
  }
  if (raffles.isFetching) {
    return false;
  }
  return raffles.didInvalidate;
};

export const fetchRafflesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchRaffles(getState())) {
    return dispatch(fetchRaffles());
  }
};
