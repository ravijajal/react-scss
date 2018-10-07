import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NavItem from "./NavItem";
import TopNavBarLinks from "./TopNavBarLinks";
import runtimeEnv from "@mars/heroku-js-runtime-env";
import { Helmet } from "react-helmet";
import { logoutUserIfNeeded, loginUserIfNeeded } from "../../../actions/user";

class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { toggleMenu: false };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.showLoginModal = this.showLoginModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);
    this.hideLoginModalProxy = this.hideLoginModalProxy.bind(this);
    this.state = {
      loginModalOpen: false
    };
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.hideLoginModalProxy, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.hideLoginModalProxy, false);
  }
  handleToggleMenu() {
    this.setState(function(prevState, props) {
      return {
        toggleMenu: !prevState.toggleMenu
      };
    });
  }
  handleLogout() {
    this.props.logoutUserIfNeeded();
  }
  handleLogin() {
    this.props.loginUserIfNeeded();
  }
  showLoginModal() {
    this.setState({ loginModalOpen: true });
  }
  hideLoginModal() {
    this.setState({ loginModalOpen: false });
  }
  hideLoginModalProxy = e => {
    if (this.modal.contains(e.target)) {
      return;
    }
    this.hideLoginModal();
  };
  render() {
    const env = runtimeEnv();
    return (
      <>
        <nav className="navbar sticky-top navbar-expand-md navbar-light bg-white shadow mb-3">
          <Helmet>
            <title>{env.REACT_APP_NAME ? env.REACT_APP_NAME : "React"}</title>
          </Helmet>
          <div className="container">
            <Link to="/" className="navbar-brand">
              <h1 className="text-primary">
                {env.REACT_APP_NAME ? env.REACT_APP_NAME : "React"}
              </h1>
            </Link>
            <button
              className="navbar-toggler border-white"
              type="button"
              onClick={this.handleToggleMenu}
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className={
                "collapse navbar-collapse" +
                (this.state.toggleMenu ? " show" : "")
              }
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                {this.props.isLoggedIn
                  ? TopNavBarLinks.map((link, i) => (
                      <NavItem
                        key={i}
                        {...link}
                      />
                    ))
                  : ""}
              </ul>
              <ul className="navbar-nav ml-auto">
                {this.props.isLoggedIn ? (
                  <li className="nav-item">
                    <button
                      className="btn btn-primary"
                      onClick={this.handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <li className="nav-item">
                    <button
                      className="btn btn-primary"
                      onClick={this.showLoginModal}
                    >
                      Login
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <div
          className={"modal fade" + (this.state.loginModalOpen ? " show" : "")}
          tabIndex="-1"
          role="dialog"
          style={
            this.state.loginModalOpen
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <div
            className="modal-dialog"
            role="document"
            ref={modal => (this.modal = modal)}
          >
            <div className="modal-content">
              <div className="modal-body">
                <h5><button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.hideLoginModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                </h5>
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="button"
                    className={
                      "btn btn-primary btn-block" +
                      (this.props.isLogging ? " disabled" : "")
                    }
                    onClick={this.handleLogin}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = {
  loginUserIfNeeded,
  logoutUserIfNeeded
};

const mapStateToProps = state => {
  const { user } = state;
  const { isLogging, isLoggedIn, item: userData } = user || {
    isLogging: false,
    isLoggedIn: false
  };

  return {
    userData,
    isLoggedIn,
    isLogging
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavBar);
