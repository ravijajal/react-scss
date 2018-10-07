import "bootstrap/scss/bootstrap.scss";
import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import AuthHoc from "./hoc/AuthHoc";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={props => {
                let Auth = route.auth
                  ? AuthHoc(route.container)
                  : route.container;
                return (
                  <route.layout {...props}>
                    <Auth {...props} />
                  </route.layout>
                );
              }}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
