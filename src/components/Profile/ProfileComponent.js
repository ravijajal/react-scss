import React, { Component } from "react";
import "./ProfileComponent.scss";

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.loadProfile = this.loadProfile.bind(this);
  }
  componentDidMount() {
    this.loadProfile();
  }
  handleRefresh() {
    this.loadProfile();
  }
  loadProfile() {
    const { fetchProfileIfNeeded, invalidateProfile, match } = this.props;
    invalidateProfile();
    fetchProfileIfNeeded(match.params.id);
  }
  render() {
    let { profileData, isFetching } = this.props;

    return (
      <div className="profile-container">
        <div className="profile-component">
          <h2>
            Profile{" "}
            <button
              className={
                "btn btn-primary float-right" + (isFetching ? " disabled" : "")
              }
              onClick={this.handleRefresh}
            >
              {isFetching ? "Loading..." : "Refresh"}
            </button>
          </h2>
          <div className="row">
            <div className="col-12">
              {profileData && !isFetching ? profileData.name : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileComponent;
