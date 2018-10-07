import {
  REQUEST_TOURNAMENTS,
  RECEIVE_TOURNAMENTS,
  INVALIDATE_TOURNAMENTS
} from "../types/tournaments";
import { getTournaments } from "../services/tournaments.service";

export const invalidateTournaments = () => ({
  type: INVALIDATE_TOURNAMENTS
});

export const requestTournaments = () => ({
  type: REQUEST_TOURNAMENTS
});

export const receiveTournaments = json => ({
  type: RECEIVE_TOURNAMENTS,
  tournaments: json.data.children.map(child => child.data),
  receivedAt: Date.now()
});

const fetchTournaments = () => dispatch => {
  dispatch(requestTournaments());
  return getTournaments().then(json => dispatch(receiveTournaments(json.data)));
};

const shouldFetchTournaments = state => {
  const tournaments = state.tournaments;
  if (!tournaments) {
    return true;
  }
  if (tournaments.isFetching) {
    return false;
  }
  return tournaments.didInvalidate;
};

export const fetchTournamentsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchTournaments(getState())) {
    return dispatch(fetchTournaments());
  }
};
