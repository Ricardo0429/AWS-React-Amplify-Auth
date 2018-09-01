import "./App.css";
import React from "react";
import Home from "../Home";
import Loader from '../Loader';
import Header from '../Header';
import Dimmer from '../Dimmer';
import NotFound from "../NotFound";
import RequireAuth from '../RequireAuth';
import { Route, Switch } from "react-router-dom";
import RequireNotAuth from '../RequireNotAuth';
import SignUpConfirmation from '../SignUpConfirmation';

export const App = ({ loading }) => (
      <div className="App container">
            { loading && (
                  <div>
                        <Dimmer />
                        <Loader />
                  </div>
            )}
            <Header />
            <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/auth" component={RequireAuth} />
                  <Route path="/unauth" component={RequireNotAuth} />
                  <Route path="/signupConfirmation" component={SignUpConfirmation} />
                  <Route component={NotFound} />
            </Switch>
      </div>
);

export default App;