import "./App.css";
import React from "react";
import Login from '../Login';
import Home from "../Home";
import Signup from '../Signup';
import Header from '../Header';
import NotFound from "../NotFound";
import { Route, Switch } from "react-router-dom";

export class App extends React.Component {
      render() {
            return (
                  <div className="App container">
                        <Header />
                        <Switch>
                              <Route path="/" exact component={Home} />
                              <Route path="/signup" component={Signup} />
                              <Route path="/login" component={Login} />
                              <Route component={NotFound} />
                        </Switch>
                  </div>
            );
      }
};

export default App;