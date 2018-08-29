import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Amplify from 'aws-amplify';
import amplifyConfig from './config/amplify';
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

Amplify.configure(amplifyConfig);

ReactDOM.render(
      <Provider store={ store }>
            <BrowserRouter>
                  <App />
            </BrowserRouter>
      </Provider>
      , document.getElementById('root'));
registerServiceWorker();
