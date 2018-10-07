import React, { Component } from "react";
import "./LoginComponent.scss";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    this.props.loginUserIfNeeded();
  }
  render() {
    return (
      <div className="login-container">
        <div className="login-component">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card my-5">
                <div className="card-body">
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
        </div>
      </div>
    );
  }
}

export default LoginComponent;
