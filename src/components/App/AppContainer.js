import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import App from "./App";

export class AppContainer extends React.Component {
      componentDidMount() {
            this.props.isAuthenticated();
      }

      render() {
            return <App {...this.props} />;
      }
}

AppContainer.propTypes = {
      isAuthenticated: PropTypes.func.isRequired
};

const Connected = connect(
      ({ loading }) => ({ loading }),
      ({ auth: { isAuthenticated } }) => ({ isAuthenticated })
)(AppContainer);

export default withRouter(Connected);
