import "./App.css";
import Alert from '../Alert';
import React from "react";
import Home from "../Home";
import Loader from '../Loader';
import Header from '../Header';
import Dimmer from '../Dimmer';
import NotFound from "../NotFound";
import RequireAuth from '../RequireAuth';
import { Route, Switch } from "react-router-dom";
import RequireNotAuth from '../RequireNotAuth';
///////////////////////////////////////////////////
import NewProduct from '../NewProduct';

export const App = ({ loading, alert: { message, type }}) => (
      <div className="App container">
            { loading && (
                  <div>
                        <Dimmer />
                        <Loader />
                  </div>
            )}
            <Header />
            { message && (
                  <Alert message={message} type={type}/>
            )}
            <Switch>
                  <Route path="/" exact component={Home} />
            {/* [TO REMOVE]: NewProduct route */}
                  <Route path="/newProduct" component={NewProduct} />
                  <Route path="/auth" component={RequireAuth} />
                  <Route path="/unauth" component={RequireNotAuth} />
                  <Route component={NotFound} />
            </Switch>
      </div>
);

export default App;