import {
  REQUEST_PROFILE,
  RECEIVE_PROFILE,
  INVALIDATE_PROFILE
} from "../types/profiles";
import { getProfile } from "../services/profiles.service";

export const invalidateProfile = () => ({
  type: INVALIDATE_PROFILE
});

export const requestProfile = () => ({
  type: REQUEST_PROFILE
});

export const receiveProfile = json => ({
  type: RECEIVE_PROFILE,
  profile: json,
  receivedAt: Date.now()
});

const fetchProfile = (id) => dispatch => {
  dispatch(requestProfile());
  return getProfile(id).then(json => dispatch(receiveProfile(json.data)));
};

const shouldFetchProfile = state => {
  const profile = state.profile;
  if (!profile) {
    return true;
  }
  if (profile.isFetching) {
    return false;
  }
  return profile.didInvalidate;
};

export const fetchProfileIfNeeded = (id) => (dispatch, getState) => {
  if (shouldFetchProfile(getState())) {
    return dispatch(fetchProfile(id));
  }
};
