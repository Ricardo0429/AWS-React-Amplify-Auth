import "./App.css";
import React from "react";
import Home from "../Home";
import Loader from '../Loader';
import Header from '../Header';
import Dimmer from '../Dimmer';
import NotFound from "../NotFound";
import { connect } from 'react-redux';
import RequireAuth from '../RequireAuth';
import { Route, Switch } from "react-router-dom";
import RequireNotAuth from '../RequireNotAuth';

export const App = ({ loading, authenticated }) => (
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
                  <Route path="auth" render={() => {
                        console.log('>>>> AUTH');
                        return <RequireAuth />
                        }} />
                  <Route path="unauth" component={RequireNotAuth} />
                  <Route component={NotFound} />
            </Switch>
      </div>
);

export default connect(
      ({ loading }) => ({ loading }),
      ({ authenticated }) => ({ authenticated })
)(App);