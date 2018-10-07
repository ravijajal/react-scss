import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

export default function(ComposedComponent) {
  class AuthHoc extends Component {
    render() {
      return (
        <div>
          {this.props.isAuthenticated ? (
            <ComposedComponent {...this.props} />
          ) : (
            <Redirect to="/" />
          )}
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.user.isLoggedIn
    };
  };
  return connect(mapStateToProps)(AuthHoc);
}
