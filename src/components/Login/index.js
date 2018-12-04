import { connect } from "react-redux";
import Component from "./LoginContainer";

export default connect(
      null,
      ({ auth: { login } }) => ({ login })
)(Component);
