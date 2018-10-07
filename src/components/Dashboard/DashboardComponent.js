import React, { Component } from "react";
import "./DashboardComponent.scss";

class DashboardComponent extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="row">
          <div className="col-12">
            <div className="dashboard-component">
              <h2>Dashboard</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardComponent;
