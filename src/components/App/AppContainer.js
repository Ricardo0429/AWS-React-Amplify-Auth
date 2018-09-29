import App from './App';
import React from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class AppContainer extends React.Component {

      componentDidMount () {
            this.props.isAuthenticated();
      }

      render () {
            return <App {...this.props} />
      }
}

const Connected = connect(
      ({ loading }) => ({ loading }),
      ({ auth: { isAuthenticated }}) => ({ isAuthenticated })
)(AppContainer);

export default withRouter(Connected);