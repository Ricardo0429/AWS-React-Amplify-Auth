import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../Login";
import routes from "../../config/routes";
import SignUp from "../SignUp";
import ForgotPassword from "../ForgotPassword";

const Component = ({ loggedIn }) =>
      loggedIn ? (
            <Redirect to="/" />
      ) : (
            <Switch>
                  <Route path={routes.login} component={Login} />
                  <Route path={routes.signup} component={SignUp} />
                  <Route
                        path={routes.forgotPassword}
                        component={ForgotPassword}
                  />
            </Switch>
      );

Component.defaultProps = {
      loggedIn: false
};

Component.propTypes = {
      loggedIn: PropTypes.bool
};

export default Component;
