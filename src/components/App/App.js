import "./App.css";
import { Route, Switch } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import Alert from "../Alert";
import Home from "../Home";
import Loader from "../Loader";
import Header from "../Header";
import Dimmer from "../Dimmer";
import NotFound from "../NotFound";
import RequireAuth from "../RequireAuth";
import RequireUnauth from "../RequireUnauth";

const App = ({ loading }) => (
      <div className="App container">
            {loading && (
                  <div>
                        <Dimmer />
                        <Loader />
                  </div>
            )}
            <Header />
            <Alert />
            <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/auth" component={RequireAuth} />
                  <Route path="/unauth" component={RequireUnauth} />
                  <Route component={NotFound} />
            </Switch>
      </div>
);

App.defaultProps = {
      loading: false
};

App.propTypes = {
      loading: PropTypes.bool
};

export default App;
