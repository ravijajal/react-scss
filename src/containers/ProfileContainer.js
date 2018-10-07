import { connect } from "react-redux";
import ProfileComponent from "../components/Profile/ProfileComponent";
import { fetchProfileIfNeeded, invalidateProfile } from "../actions/profile";

const mapDispatchToProps = {
  fetchProfileIfNeeded,
  invalidateProfile
};

const mapStateToProps = state => {
  const { profile } = state;
  const { isFetching, lastUpdated, item: profileData } = profile || {
    isFetching: true,
    item: null
  };

  return {
    profileData,
    isFetching,
    lastUpdated
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
