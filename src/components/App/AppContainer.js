import React from "react";
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

export default AppContainer;
