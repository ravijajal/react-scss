import React, { Component } from "react";
import "./HomeComponent.scss";

class HomeComponent extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="row">
          <div className="col-12">
            <div className="home-component">
              <h2>Home</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
