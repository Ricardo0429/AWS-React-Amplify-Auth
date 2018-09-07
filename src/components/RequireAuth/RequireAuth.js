import React from 'react';
import PropTypes from 'prop-types';
import NewProduct from '../NewProduct';
import { Route, Switch, Redirect } from "react-router-dom";

export const Component = ({ loggedIn,  match: { path }}) => {
      return ! loggedIn ?
            ( <Redirect to="/unauth/login" /> ) :
            ( <Switch>
                  <Route path={`${path}/newProduct`} component={NewProduct} />
              </Switch>);
};

Component.propTypes = {
      loggedIn: PropTypes.bool
};

Component.defaultProps = {
      loggedIn: false
};

export default Component;

