import {
  REQUEST_PROFILES,
  RECEIVE_PROFILES,
  INVALIDATE_PROFILES
} from "../types/profiles";
import { getProfiles } from "../services/profiles.service";

export const invalidateProfiles = () => ({
  type: INVALIDATE_PROFILES
});

export const requestProfiles = () => ({
  type: REQUEST_PROFILES
});

export const receiveProfiles = json => ({
  type: RECEIVE_PROFILES,
  profiles: json,
  receivedAt: Date.now()
});

const fetchProfiles = () => dispatch => {
  dispatch(requestProfiles());
  return getProfiles().then(json => dispatch(receiveProfiles(json.data)));
};

const shouldFetchProfiles = state => {
  const profiles = state.profiles;
  if (!profiles) {
    return true;
  }
  if (profiles.isFetching) {
    return false;
  }
  return profiles.didInvalidate;
};

export const fetchProfilesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchProfiles(getState())) {
    return dispatch(fetchProfiles());
  }
};
