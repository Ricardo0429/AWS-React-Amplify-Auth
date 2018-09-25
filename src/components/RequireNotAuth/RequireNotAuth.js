import React from 'react';
import Login from '../Login';
import routes from '../../config/routes';
import SignUp from '../SignUp';
import PropTypes from 'prop-types';
import ForgotPassword from '../ForgotPassword';
import {Route, Switch, Redirect} from "react-router-dom";

export const Component = ({ loggedIn, match: { path }}) => {
      return loggedIn ? (
            <Redirect to='/' />
            ) : (
            <Switch>
                  <Route path={routes.login} component={Login} />
                  <Route path={routes.signup} component={SignUp} />
                  <Route path={routes.forgotPassword} component={ForgotPassword} />
            </Switch>
      );
};

Component.propTypes = {
      loggedIn: PropTypes.bool
};

Component.defaultProps = {
      loggedIn: false
};

export default Component;

