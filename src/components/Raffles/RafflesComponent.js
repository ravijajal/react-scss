import React, { Component } from "react";
import "./RafflesComponent.scss";

class RafflesComponent extends Component {
  constructor(props) {
    super(props);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.loadRaffles = this.loadRaffles.bind(this);
  }
  componentDidMount() {
    this.loadRaffles();
  }
  handleRefresh() {
    this.loadRaffles();
  }
  loadRaffles() {
    const { fetchRafflesIfNeeded, invalidateRaffles } = this.props;
    invalidateRaffles();
    fetchRafflesIfNeeded();
  }
  render() {
    let { raffleList, isFetching } = this.props;
    if (raffleList.length === 0) {
      raffleList = this.prepareDummyRaffles();
    }
    return (
      <div className="raffles-container">
        <div className="raffles-component">
          <h2>
            Raffles{" "}
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
            {raffleList.map((raffle, i) => (
              <div className="col-sm-3" key={i}>
                <div
                  className="card mb-4 shadow-sm"
                  style={{ height: "120px" }}
                >
                  <div className="card-body">
                    <h5
                      className="card-title card-hover"
                      title={isFetching ? "" : raffle.title}
                    >
                      <span
                        className={"my-title" + (isFetching ? " faker" : "")}
                      >
                        {isFetching
                          ? this.randomLengthString()
                          : this.refactorTitle(raffle.title)}
                      </span>
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
  prepareDummyRaffles(length = 13) {
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

export default RafflesComponent;
