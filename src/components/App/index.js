import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Component from "./AppContainer";

const Connected = connect(
      ({ loading }) => ({ loading }),
      ({ auth: { isAuthenticated } }) => ({ isAuthenticated })
)(Component);

export default withRouter(Connected);
