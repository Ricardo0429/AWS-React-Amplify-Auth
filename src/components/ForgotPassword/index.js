import { connect } from "react-redux";
import Component from "./ForgotPasswordContainer";

export default connect(
      null,
      ({ auth: { forgotPassword } }) => ({ forgotPassword })
)(Component);
