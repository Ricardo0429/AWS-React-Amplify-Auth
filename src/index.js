import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Amplify from 'aws-amplify';
import amplifyConfig from './config/amplify';
import history from './history';
import {Router} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';

Amplify.configure(amplifyConfig);

ReactDOM.render(
      <Provider store={store}>
            <Router history={history}>
                  <App />
            </Router>
      </Provider>
      , document.getElementById('root'));
