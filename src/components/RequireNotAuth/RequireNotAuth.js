import React from 'react';
import Login from '../Login';
import Signup from '../Signup';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from "react-router-dom";

export const Component = ({ authenticated, match: { path }}) => {
      return authenticated ? (
            <Redirect to='/' />
            ) : (
            <Switch>
                  <Route path={`${path}/signup`} component={Signup} />
                  <Route path={`${path}/login`} component={Login} />
            </Switch>
      );
};

Component.propTypes = {
      authenticated: PropTypes.bool
};

Component.defaultProps = {
      authenticated: false
};

export default Component;

