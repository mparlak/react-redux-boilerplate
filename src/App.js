import React from "react";
import { connect } from "react-redux"
import { Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout";
// Import Routes all
import { userRoutes, authRoutes } from "./routes/routes";
// Import all middleware
import Authmiddleware from "./routes/middleware/auth.middleware";

const App = props => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {/* {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))} */}

          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>

  );
}

export default connect(
  null,
  {}
)(App);