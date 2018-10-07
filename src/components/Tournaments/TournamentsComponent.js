import React, { Component } from "react";
import "./TournamentsComponent.scss";

class TournamentsComponent extends Component {
  constructor(props) {
    super(props);
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  componentDidMount() {
    const { fetchTournamentsIfNeeded } = this.props;
    fetchTournamentsIfNeeded();
  }
  handleRefresh() {
    const { fetchTournamentsIfNeeded, invalidateTournaments } = this.props;
    invalidateTournaments();
    fetchTournamentsIfNeeded();
  }
  render() {
    let { tournamentList, isFetching } = this.props;
    if (tournamentList.length === 0) {
      tournamentList = this.prepareDummyTournaments();
    }
    return (
      <div className="tournaments-container">
        <div className="tournaments-component">
          <h2>
            Tournaments{" "}
            <button
              className={"btn btn-primary float-right" + (isFetching ? " disabled" : "")}
              onClick={this.handleRefresh}
            >
              {isFetching ? "Loading..." : "Refresh"}
            </button>
          </h2>

          <ul className="list-group">
            {tournamentList.map((tournament, i) => (
              <li className="list-group-item" key={i}>
                <span className={"my-title" + (isFetching ? " faker" : "")}>
                  {isFetching ? this.randomLengthString() : tournament.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  prepareDummyTournaments(length = 13) {
    let raffles = [];
    for (let i = 0; i < length; i++) {
      raffles.push({ title: this.randomLengthString() });
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

export default TournamentsComponent;
