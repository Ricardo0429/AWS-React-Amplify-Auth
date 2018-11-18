import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "../../config/routes";
import Product from "../Product";
import Products from "../Products";

const Component = ({ loggedIn, match: { path } }) =>
      !loggedIn ? (
            <Redirect to={routes.login} />
      ) : (
            <Switch>
                  <Route path={`${path}/product/:id`} component={Product} />
                  <Route path={`${path}/product`} component={Product} />
                  <Route path={`${path}/products`} component={Products} />
            </Switch>
      );

Component.propTypes = {
      loggedIn: PropTypes.bool,
      match: PropTypes.shape({
            path: PropTypes.string
      }).isRequired
};

Component.defaultProps = {
      loggedIn: false
};

export default Component;
