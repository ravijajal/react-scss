import { connect } from "react-redux";
import ProfilesComponent from "../components/Profiles/ProfilesComponent";
import { fetchProfilesIfNeeded, invalidateProfiles } from "../actions/profiles";

const mapDispatchToProps = {
  fetchProfilesIfNeeded,
  invalidateProfiles
};

const mapStateToProps = state => {
  const { profiles } = state;
  const { isFetching, lastUpdated, items: profileList } = profiles || {
    isFetching: true,
    items: []
  };

  return {
    profileList,
    isFetching,
    lastUpdated
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilesComponent);
