import React from 'react';
import Products from '../Products';
import PropTypes from 'prop-types';
import NewProduct from '../NewProduct';
import { Route, Switch, Redirect } from "react-router-dom";

export const Component = ({ loggedIn,  match: { path }}) => {
      return ! loggedIn ?
            ( <Redirect to="/unauth/login" /> ) :
            ( <Switch>
                  <Route path={`${path}/products/new`} component={NewProduct} />
                  <Route path={`${path}/products`} component={Products} />
              </Switch>);
};

Component.propTypes = {
      loggedIn: PropTypes.bool
};

Component.defaultProps = {
      loggedIn: false
};

export default Component;

