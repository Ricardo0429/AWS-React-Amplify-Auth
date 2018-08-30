import React from 'react';
import Notes from '../Notes';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from "react-router-dom";

export const Component = ({ authenticated,  match: { path }}) => {
      return ! authenticated ?
            ( <Redirect to="/unauth/login" /> ) :
            ( <Switch>
                  <Route path={`${path}/notes`} component={Notes} />
              </Switch>);
};

Component.propTypes = {
      authenticated: PropTypes.bool
};

Component.defaultProps = {
      authenticated: false
};

export default Component;

