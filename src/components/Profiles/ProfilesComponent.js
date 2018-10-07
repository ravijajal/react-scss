import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProfilesComponent.scss";

class ProfilesComponent extends Component {
  constructor(props) {
    super(props);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.loadProfiles = this.loadProfiles.bind(this);
  }
  componentDidMount() {
    this.loadProfiles();
  }
  handleRefresh() {
    this.loadProfiles();
  }
  loadProfiles() {
    const { fetchProfilesIfNeeded, invalidateProfiles } = this.props;
    invalidateProfiles();
    fetchProfilesIfNeeded();
  }
  render() {
    let { profileList, isFetching } = this.props;
    if (profileList.length === 0) {
      profileList = this.prepareDummyProfiles();
    }
    return (
      <div className="profiles-container">
        <div className="profiles-component">
          <h2>
            Profiles{" "}
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
            {profileList.map((profile, i) => (
              <div className="col-sm-3" key={i}>
                <div
                  className="card mb-4 shadow-sm"
                  style={{ height: "120px" }}
                >
                  <div className="card-body">
                    <h5
                      className="card-title card-hover"
                      title={isFetching ? "" : profile.name}
                    >
                      <Link to={"/profile/" + profile.id}>
                        <span
                          className={"my-title" + (isFetching ? " faker" : "")}
                        >
                          {isFetching
                            ? this.randomLengthString()
                            : this.refactorTitle(profile.name)}
                        </span>
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  prepareDummyProfiles(length = 13) {
    let raffles = [];
    for (let i = 0; i < length; i++) {
      raffles.push({ name: this.randomLengthString() });
    }
    return raffles;
  }
  refactorTitle(title, length = 50) {
    return title.length > length ? title.slice(0, length) + "..." : title;
  }
  randomLengthString(start = 25, end = 75) {
    let length = Math.floor(Math.random() * (end - start + 1)) + start;
    return Array(length).join("*");
  }
}

export default ProfilesComponent;
