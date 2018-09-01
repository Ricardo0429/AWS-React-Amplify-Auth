import React from 'react';
import Login from '../Login';
import SignUp from '../SignUp';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from "react-router-dom";

export const Component = ({ loggedIn, match: { path }}) => {
      return loggedIn ? (
            <Redirect to='/' />
            ) : (
            <Switch>
                  <Route path={`${path}/signup`} component={SignUp} />
                  <Route path={`${path}/signup`} component={SignUp} />
                  <Route path={`${path}/login`} component={Login} />
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

