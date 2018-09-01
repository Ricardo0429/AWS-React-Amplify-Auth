import React from 'react';
import Notes from '../Notes';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from "react-router-dom";

export const Component = ({ loggedIn,  match: { path }}) => {
      return ! loggedIn ?
            ( <Redirect to="/unauth/login" /> ) :
            ( <Switch>
                  <Route path={`${path}/notes`} component={Notes} />
              </Switch>);
};

Component.propTypes = {
      loggedIn: PropTypes.bool
};

Component.defaultProps = {
      loggedIn: false
};

export default Component;

