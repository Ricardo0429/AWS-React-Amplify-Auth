import React from "react";
import { connect } from 'react-redux';
import Component from './App';
// [TODO]: Review why this is necessary to use withRouter
import { withRouter } from 'react-router-dom';

export class AppContainer extends React.Component {

      componentDidMount () {
            this.props.isAuthenticated();
      }

      render () {
            return <Component {...this.props} />
      }

}

const Connected = connect(
      ({ loading }) => ({ loading }),
      ({ auth: { isAuthenticated }}) => ({ isAuthenticated })
)(AppContainer);

export default withRouter(Connected);