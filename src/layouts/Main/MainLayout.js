import React, { Component } from "react";
import TopNavBar from "../navigations/NavBars/TopNavBar";
import "./MainLayout.scss";

class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <TopNavBar />
        <div className="container mb-5">{this.props.children}</div>
      </div>
    );
  }
}

export default MainLayout;
